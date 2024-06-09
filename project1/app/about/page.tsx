import Link from "next/link"

import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Nextjs is love",
  description: "next js",
};

const About = () => {
  //throw new Error("test")
  return (
  <>
  <div className="text-center mt-10">
        <p>About page</p>
        <Link href="/" className="cursor-pointer">Click to Go to Home back</Link>
  </div>
  </>
  )
}

export default About