"use client"
import navlinkData from "@/data/navlinkData"
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
        <nav className="font-semibold text-white text-[2vmin]">
            <ul className="hidden md:flex text-gray-300">
                {
                    navlinkData.map((e, i) => {
                        return (
                            <Link key={i} href={e.link}><li className={`px-[2vmin] py-[2vmin] border-b-[0.5vmin] bg3Hover ${path === e.link ? "color border-white" : "text-gray-300 border-transparent"}`}>{e.title}</li></Link>
                        )
                    })
                }


            </ul>

            <div className="md:hidden">

                <div className="py-[2vmin] text-[6vmin]">
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

                onClick={()=>setShowNav(false)} className="flex flex-col absolute right-[3vmin] bg2 text-[4vmin] shadow-md rounded-lg overflow-hidden">
                {
                    navlinkData.map((e, i) => {
                        return (
                            <Link href={e.link} key={i}>
                                <li className={`px-[4vmin] py-[2vmin] bg2Hover ${path === e.link ? "color" : "text-gray-300"}`}>{e.title}</li>
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
