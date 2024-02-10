import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

// Footer Section
export default function Footer() {
  return (
    <footer className="bg-white relative z-10 text-black py-4 w-full flex lg:justify-between px-10 flex-col lg:flex-row items-center justify-center gap-8">
      <div className={`flex gap-1 items-center z-30`}>
        <img
          src="/logo.webp"
          width={"40px"}
          height="30"
          className="w-[40px] h-auto max-w-[50vw] overflow-hidden flex"
          srcSet="/optimized/logo-320px.webp 320w, /optimized/logo-640px.webp 640w, /optimized/logo-1024px.webp 1024w"
          alt="Ficticious Logo"
          loading="eager"
        />
        <span className="text-black text-base">
          <span className="font-extrabold">Infinity</span>Buildworks
        </span>
      </div>
      <div className="flex justify-center items-center">
        <p>
          &copy;{" "}
          <Link href={"https://fullsummit.us"} target="blank">
            Full Summit. This site is a demo.
          </Link>
        </p>
      </div>
      <div className="flex gap-4">
        <Link href="#" aria-label="dummy instagram link">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link href="#" aria-label="dummy facebook link">
          <FontAwesomeIcon icon={faFacebook} />
        </Link>
        <Link href="#" aria-label="dummy twitter link">
          <FontAwesomeIcon icon={faX} />
        </Link>
      </div>
    </footer>
  );
}
