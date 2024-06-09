import Link from "next/link";
import style from "./page.module.css"

export default function Home() {
  return (
    <>
      <main className={style.main}>
        <h1 className="text-3xl">Hi from Next js</h1>
        <Link href="/about" className="cursor-pointer">Click to go to About Page</Link>
      </main>
    </>
  );
}
