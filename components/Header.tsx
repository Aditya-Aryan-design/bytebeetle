import Nav from "./Nav"
import Link from "next/link"
import { memo } from "react"
import Image from "next/image"

function Header() {
  return (
    <header className='z-50 px-[4vmin] flex justify-between items-center w-full sticky top-0 left-0'>
      <Link href="/" className="flex space-x-[1vmin]">

        <Image src="/icon.jpg" height={50} width={50} alt="" className="h-[7vmin] w-auto"/>
        <h1 className='title1'>Byte<span>Beetle</span></h1>
      </Link>

      <Nav />
    </header>
  )
}

export default memo(Header)