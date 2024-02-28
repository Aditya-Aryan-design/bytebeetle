"use client"
import { BsWhatsapp } from "react-icons/bs";
import { motion } from "framer-motion";
import { ownerContact } from "@/data/ContactData";
import { memo } from "react";

const {whatsapp} = ownerContact;

const CallButton = () => {
  return (
    <a href={whatsapp} target="_blank" className="sticky left-[80vw] top-[90vh] w-fit z-[999]"><motion.div
        animate={{scale:[1, 1.2]}}
        transition={{
            duration:0.5,
            repeat:Infinity,
            repeatType:"mirror"
        }}


    className="wfull bg-green-500 text-white text-[5vmin] sm:text-[3vmin] p-[3vmin] sm:p-[2vmin] rounded-full shadow-md">
      <BsWhatsapp />
    </motion.div></a>
  )
}

export default memo(CallButton)
