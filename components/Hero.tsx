import HeroData,{Desc} from "@/data/HeroData"
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";


const {title,img,button} = HeroData;

const Hero = () => {
  return (
    <section className="body-font w-screen">
      <div className="absolute rotate-45 -z-40 w-[100vmin] h-[100vmin] bg-gradient-to-br from-blue-200 via-sky-200 to-blue-100 -top-10 -left-[15vmin] rounded-[50px]"></div>

      <div className="absolute rotate-45 -z-50 w-[90vmin] h-[90vmin] bg-gradient-to-br from-orange-100 via-rose-100 to-red-100 -top-10 -right-[15vmin] rounded-full"></div>
  <div className="container mx-auto flex px-5 md:flex-row flex-col items-center z-10">
      <Image src={img} alt="heroimage" width={300} height={300} className="w-[90%] h-auto max-h-96 max-w-96 m-2 sm:m-5 rounded-xl shadow-md"/>

    <div className=" text-center">
      <h1 className="title-font sm:text-4xl text-2xl mb-4 font-bold text-blue-500 py-5">{title}
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
