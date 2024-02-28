import HeroData,{Desc} from "@/data/HeroData"
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";


const {title,img,button} = HeroData;

const Hero = () => {
  return (
    <section className="body-font w-[98vw] overflow-hidden">
      <div className="absolute rotate-45 -z-40 bg-gradient-to-br px-10 py-10 from-blue-200 via-sky-200 to-blue-100 top-5 left-5 font-extrabold text-white rounded-3xl">B</div>

<div className="absolute -z-50 -rotate-12 bg-gradient-to-br from-orange-100 via-rose-100 to-red-100 top-0 right-5 rounded-full text-3xl text-white font-extrabold px-10 py-10">S</div>

<div className="absolute -rotate-45 -z-40 bg-gradient-to-br px-10 py-10 from-blue-200 via-sky-200 to-blue-100 top-72 right-11 font-extrabold text-white rounded-3xl">B</div>

<div className="absolute -z-50 -rotate-90 bg-gradient-to-br from-orange-100 via-rose-100 to-red-100 top-96 left-14 rounded-full text-3xl text-white font-extrabold px-10 py-10">S</div>
      
  <div className="container mx-auto flex px-5 md:flex-row flex-col items-center z-10">
      <Image src={img} alt="heroimage" width={300} height={300} className="w-[90%] h-auto max-h-96 max-w-96 m-2 sm:m-5 rounded-xl shadow-md"/>

    <div className=" text-center">
      <h1 className="title-font sm:text-4xl text-2xl mb-4 font-bold text-blue-600 py-5">{title}
      </h1>
      <p className="mb-8 leading-relaxed"><Desc/></p>
      <div className="flex justify-center">

        <Link href={button.link}><button className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg">{button.name}</button></Link>
    
      </div>
    </div>
  </div>
  
</section>
  )
}

export default memo(Hero)
