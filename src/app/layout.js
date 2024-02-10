import { Raleway } from "next/font/google";
import "./globals.css";
import Navigation from "./shared/navbar";
import Footer from "./shared/footer";
import DemoOverlay from "./shared/demo";

const font = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Infinity Buildworks: Demo Site",
  description: "Demo Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} flex flex-col min-h-screen`}>
        <DemoOverlay />
        <Navigation />
        <div className="fixed flex flex-col min-h-screen w-[1px] bg-gray-200 left-20 z-0"> </div>
        <main
          id="main"
          className="mx-auto w-full bg-white flex flex-col justify-center text-black min-h-full flex-grow"
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
