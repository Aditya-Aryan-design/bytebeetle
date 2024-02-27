import Nav from "./Nav"
import Link from "next/link"
import { memo } from "react"
import Image from "next/image"
import { MainTitle1,MainTitle2 } from "@/data/HeaderData"

function Header() {
  return (
    <header className='z-50 px-[4vmin] flex justify-between items-center w-full sticky top-0 left-0 shadow-md bg-white'>
      <Link href="/" className="flex space-x-[1vmin]">

        <Image src="/icon.jpg" height={50} width={50} alt="" className="h-[7vmin] w-auto"/>
        <h1 className='font-bold text-[4.5vmin]'>{MainTitle1}<span className="text-teal-600">{MainTitle2}</span></h1>
      </Link>

      <Nav />
    </header>
  )
}

export default memo(Header)