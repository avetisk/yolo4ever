import Link from "next/link";

const IndexPage = () => {
  return (
    <div>
      <header>
        <Link href="/contact-me">
          <a>Contact me</a>
        </Link>
      </header>
      <h1>I was born in a small town, near a river.</h1>
      <p>There were flowers and forest around.</p>
    </div>
  );
};

export default IndexPage;
