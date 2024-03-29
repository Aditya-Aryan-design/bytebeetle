"use client"
import { navLinks } from "@/data/HeaderData";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { memo } from "react";
import { motion,AnimatePresence } from "framer-motion";


function Nav() {

    const path = usePathname()
    const [showNav, setShowNav] = useState(false)


    return (
        <nav className="font-semibold text-gray-500 text-[2vmin]">
            <ul className="hidden md:flex text-gray-300">
                {
                    navLinks.map((e, i) => {
                        return (
                            <Link key={i} href={e.link}><li className={`px-[2vmin] py-[2vmin] border-b-[0.5vmin] hover:bg-zinc-700 ${path === e.link ? "text-blue-500 border-blue-500" : "text-gray-300 border-transparent"}`}>{e.title}</li></Link>
                        )
                    })
                }


            </ul>

            <div className="md:hidden">

                <div className="py-[2vmin] text-[6vmin] text-gray-200">
                {
                    showNav?<button onClick={()=>setShowNav(false)}>
                        <RxCross1 />
                    </button>:<button onClick={()=>setShowNav(true)}>
                        <GiHamburgerMenu />
                    </button>
                }
                </div>

                <AnimatePresence mode="wait">
                {showNav && <motion.ul
                
                initial={{scale:0,y:-70,x:25}}
                animate={{scale:1,y:0,x:0}}
                exit={{scale:0,y:-70,x:25}}

                onClick={()=>setShowNav(false)} className="flex flex-col absolute right-[3vmin] bg-gray-50 bg-opacity-90 text-[4vmin] shadow-md rounded-lg overflow-hidden">
                {
                    navLinks.map((e, i) => {
                        return (
                            <Link href={e.link} key={i}>
                                <li className={`px-[4vmin] py-[2vmin] hover:bg-gray-200 ${path === e.link ? "text-blue-600" : "text-gray-600"}`}>{e.title}</li>
                            </Link>
                        )
                    })
                }
                </motion.ul>}
                </AnimatePresence>
            </div>
        </nav>
    )
}

export default memo(Nav)
