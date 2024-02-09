import Link from "next/link";

// Home Page
export default function Home () {
  return (
    <section className="flex min-h-screen items-center justify-center xl:flex-row flex-col">
      <div className="w-full xl:w-1/3 2xl:w-1/4 flex xl:p-2 gap-2 flex-col">
        <h1 className="flex-wrap font-black break-words text-5xl text-center xl:text-left xl:text-6xl px-auto 3xl:text-8xl uppercase text-transparent bg-clip-text bg-gradient-to-l from-zinc-600 to-zinc-900">Building Beyond Boundaries</h1>
      </div>
    <div className="w-full xl:w-2/3 2xl:w-3/4 bg-black flex min-h-screen overflow-hidden relative grayscale">
        <div className="bg-black h-screen w-full absolute bg-opacity-80"></div>
        <img src="/hero.webp" alt="hero" className="w-auto h-screen object-cover" />
    </div>
    </section>
  )
}