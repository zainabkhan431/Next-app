// import Image from "next/image";

import Link from "next/link";
import ProductCard from "./Components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href='/user/new'>User</Link>
      <ProductCard/>
    </main>
  );
}
