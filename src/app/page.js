import Link from "next/link";

// Home Page
export default function Home() {
  return (
    <>
      <section className="flex min-h-screen w-full items-center justify-center xl:flex-row flex-col relative overflow-hidden">
        <div className="w-full xl:w-1/2 flex xl:p-2 gap-2 flex-col py-10 bg-white z-10 relative">
          <h1 className="flex-wrap font-black text-5xl text-center xl:text-left xl:text-6xl px-auto 2xl:text-[140px] uppercase text-transparent bg-clip-text bg-gradient-to-l from-zinc-600 to-zinc-900">
            Building Beyond Boundaries
          </h1>
        </div>
        <div className="w-full xl:w-1/2 bg-black flex h-full overflow-hidden relative grayscale">
          <div className="bg-black h-full w-full absolute bg-opacity-80"></div>
          <img
            src={`${process.env.NEXT_PUBLIC_BASEPATH}/optimized/hero-320px.webp`}
            width="1792"
            height="1024"
            srcSet={`${process.env.NEXT_PUBLIC_BASEPATH}/optimized/hero-320px.webp 320w, ${process.env.NEXT_PUBLIC_BASEPATH}/optimized/hero-640px.webp 640w, ${process.env.NEXT_PUBLIC_BASEPATH}/optimized/hero-1024px.webp 1024w`}
            alt="hero"
            className="responsive-img-cta"
          />
        </div>
      </section>
      <Vision />
      <WhyChooseUs />
      <Services />
    </>
  );
}

// Vision Section
function Vision() {
  return (
    <section className="split-section">
      <div className="split-section-image">
        <img
          src={`${process.env.NEXT_PUBLIC_BASEPATH}/optimized/vision-320px.webp`}
          width="1792"
          height="1024"
          srcSet={`${process.env.NEXT_PUBLIC_BASEPATH}/optimized/vision-320px.webp 320w, ${process.env.NEXT_PUBLIC_BASEPATH}/optimized/vision-640px.webp 640w, ${process.env.NEXT_PUBLIC_BASEPATH}/optimized/vision-1024px.webp 1024w`}
          alt="Vision"
          className="responsive-img"
        />
      </div>
      <div className="split-section-content">
        <div className="flex flex-col mx-auto max-w-xl gap-4">
          <h2>Our Vision</h2>
          <p>
            At Infinity Buildworks, we&apos;re not just constructing buildings;
            we&apos;re creating the future. Our innovative approach to
            construction marries timeless craftsmanship with cutting-edge
            techniques, ensuring every project not only meets but exceeds
            expectations. With a commitment to excellence and sustainability,
            we&apos;re building spaces where life unfolds and dreams grow.
          </p>
        </div>
      </div>
    </section>
  );
}

// Why Choose Us Section
function WhyChooseUs() {
  return (
    <section className="split-section">
      <div className="split-section-content">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>
            <strong>Innovative Solutions:</strong> Our team thrives on
            challenges, transforming complex visions into tangible realities. We
            leverage the latest in construction technology to deliver efficient,
            sustainable, and forward-thinking projects.
          </li>
          <li>
            <strong>Unmatched Quality:</strong> Quality is the cornerstone of
            everything we do. From the materials we select to the hands that
            build, we ensure excellence at every turn, guaranteeing structures
            that stand the test of time.
          </li>
          <li>
            <strong>Personalized Service:</strong> Your vision is unique, and so
            is our approach. Infinity Buildworks offers tailored construction
            solutions to meet your specific needs, ensuring your project
            reflects your vision perfectly.
          </li>
          <li>
            <strong>Sustainability at Heart:</strong> We believe in building for
            tomorrow. Our projects are designed with the environment in mind,
            minimizing impact and maximizing efficiency and sustainability.
          </li>
        </ul>
      </div>
      <div className="split-section-image">
        <img
          src={`${process.env.NEXT_PUBLIC_BASEPATH}/optimized/choose-320px.jpg`}
          width="1792"
          height="1024"
          srcSet={`${process.env.NEXT_PUBLIC_BASEPATH}/optimized/choose-320px.jpg 320w, ${process.env.NEXT_PUBLIC_BASEPATH}/optimized/choose-640px.jpg 640w, ${process.env.NEXT_PUBLIC_BASEPATH}/optimized/choose-1024px.jpg 1024w`}
          alt="Decorative"
          className="responsive-img"
        />
      </div>
    </section>
  );
}

// Services Section
function Services() {
  return (
    <section className="split-section">
      <div className="split-section-image">
        <img
          src={`${process.env.NEXT_PUBLIC_BASEPATH}/optimized/services-320px.webp`}
          width="1792"
          height="1024"
          srcSet={`${process.env.NEXT_PUBLIC_BASEPATH}/optimized/services-320px.webp 320w, ${process.env.NEXT_PUBLIC_BASEPATH}/optimized/services-640px.webp 640w, ${process.env.NEXT_PUBLIC_BASEPATH}/optimized/services-1024px.webp 1024w`}
          alt="Decorative"
          className="responsive-img"
        />
      </div>
      <div className="split-section-content">
        <h2>Our Services</h2>
        <ul>
          <li>
            <strong>Commercial Construction:</strong> Innovative spaces that
            drive business forward.
          </li>
          <li>
            <strong>Residential Construction:</strong> Homes that blend form,
            function, and the future.
          </li>
          <li>
            <strong>Renovation & Remodeling:</strong> Transforming spaces,
            exceeding expectations.
          </li>
          <li>
            <strong>Project Management:</strong> Seamless execution, from
            concept to completion.
          </li>
        </ul>
      </div>
    </section>
  );
}
