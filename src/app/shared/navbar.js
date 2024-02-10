"use client";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";

// Navigation bar component
export default function Navigation() {
  const [openMenu, setMenuOpen] = useState(false);
  const [openDropdown, setDropdownOpen] = useState("");

  const toggleDropdown = (dropdown) => {
    setDropdownOpen(openDropdown !== "" ? "" : dropdown);
  };

  const toggleMenu = () => {
    setMenuOpen(!openMenu);
    toggleDropdown("");
  };

  const closeMenuAndNavigate = () => {
    setMenuOpen(false);
    setDropdownOpen("");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    openMenu || openDropdown !== ""
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [openMenu, openDropdown]);

  return (
    <header className="md:mx-auto w-full bg-transparent text-black flex justify-center items-center sticky top-0 z-20 px-4 bg-white">
      <nav className={`flex items-center w-full p-4 justify-between`}>
        <div className={`flex gap-1 items-center z-30`}>
          <img
            src="/optimized/logo-320px.webp"
            width="751"
            height="390"
            srcSet="/optimized/logo-320px.webp 320w, /optimized/logo-640px.webp 640w, /optimized/logo-1024px.webp 1024w"
            className="w-[70px] h-auto max-w-[50vw] overflow-hidden flex"
            alt="Ficticious Logo"
            loading="eager"
          />
          <span className="text-black text-lg">
            <span className="font-extrabold">Infinity</span>Buildworks
          </span>
        </div>
        <button
          aria-label="navigation menu"
          onClick={toggleMenu}
          className="md:hidden z-20"
        >
          <FontAwesomeIcon
            icon={openMenu ? faTimes : faBars}
            className={`text-black fa-lg`}
          />
        </button>
        <div
          className={`${
            openMenu
              ? "fixed top-0 right-0 h-screen w-full bg-white"
              : "hidden bg-transparent"
          } md:relative md:flex md:w-auto full text-[calc(12px+10vh)]`}
        >
          <ul
            className={`${
              openMenu ? "p-4 pt-[10vh]" : null
            } text-black uppercase font-semibold flex ml-0 list-none flex-col space-y-14 text-lg justify-center overflow-scroll md:overflow-visible md:justify-center items-center h-full md:flex-row md:space-x-6 md:space-y-0 md:text-sm`}
          >
            <li onClick={() => closeMenuAndNavigate("/")}>
              <Link href="/">Home</Link>
            </li>
            <li onClick={() => closeMenuAndNavigate("/")}>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
