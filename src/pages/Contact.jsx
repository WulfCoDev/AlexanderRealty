export default function Contact() {
  return (
    <section className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-center">Contact Us</h2>
      <form className="mt-6 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full p-2 border rounded"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
