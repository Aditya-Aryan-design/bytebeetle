"use client"
import { IoCallSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { ownerContact } from "@/data/ContactData";

const {phone} = ownerContact;

const CallButton = () => {
  return (
    <a href={`tel:${phone}`}><motion.div
        animate={{scale:[1, 1.2]}}
        transition={{
            duration:0.5,
            repeat:Infinity,
            repeatType:"mirror"
        }}


    className="absolute bottom-9 right-9 bg-green-500 text-white z-50 text-[5vmin] p-[3vmin] rounded-full shadow-md">
      <IoCallSharp />
    </motion.div></a>
  )
}

export default CallButton
