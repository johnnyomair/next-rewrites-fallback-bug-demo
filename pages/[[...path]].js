import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Page</h1>
      <Link href="/produkte">Produkte</Link>
    </>
  );
}

export function getStaticProps(props) {
  return {
    props: {},
  };
}

export function getStaticPaths() {
  return {
    paths: ["/"],
    fallback: false,
  };
}
