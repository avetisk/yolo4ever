import Link from "next/link";

const ContactMePage = () => {
  return (
    <div>
      <header>
        <Link href="/">
          <a>Home</a>
        </Link>
      </header>
      <h1>Contact me</h1>
      <form>
        <p>
          <label>
            Your e-mail
            <input type="email" />
          </label>
        </p>
        <p>
          <label>
            Your name
            <input type="text" />
          </label>
        </p>
        <p>
          <label>
            Your message
            <textarea />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
};

export default ContactMePage;
