// Contact Page
export default function Contact() {
  return (
    <section className="split-section">
      <div className="split-section-content">
        <h1 className="text-5xl font-bold">
          Get in Touch with Infinity Buildworks
        </h1>
        <p>
          At Infinity Buildworks, your vision is the blueprint for our next
          great project. Whether you&apos;re dreaming of a cutting-edge commercial
          space or a bespoke residential haven, our team is ready to bring your
          ideas to life. With a foundation built on innovation, quality, and
          sustainability, we&apos;re not just constructing buildings; we&apos;re creating
          landmarks of the future.
        </p>
        <ContactInformation />
        <ConnectWithUs />
      </div>
      <div className="split-section-content">
        <ContactForm />
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <div className="flex flex-col mx-auto max-w-xl gap-4 ">
      <h2>Leave us a message</h2>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" />
        </div>
        <button
          type="submit"
          className="bg-blue text-white bg-black px-10 py-4 rounded-md text-xl hover:bg-zinc-800 w-full"
        >
          Send Message{" "}
        </button>
      </form>
    </div>
  );
}

function ContactInformation() {
  return (
    <div className="w-full mt-6">
      <div>
        <h2 className="3xl font-light">Contact Information</h2>
        <p>
          Phone: 1-800-BUILD-INFINITY
          <br />
          Email: connect@infinitybuildworks.com
          <br />
          Office Hours: Monday to Friday, 9 AM to 5 PM
          <br />
          Office Location: 123 Construct Lane, Builder&apos;s City, Constructland, CT
          12345
        </p>
      </div>
    </div>
  );
}

function ConnectWithUs() {
    return (
        <div className="w-full mt-6">
            <h2 className="text-3xl font-light">Connect With Us</h2>
            <p>
                We&apos;re here to answer any questions you have about our services or to discuss your project in detail. Reach out through the form below or via our contact details, and let&apos;s lay the groundwork for your next project.
            </p>
        </div>
    );
}
