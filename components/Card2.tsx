import Image from "next/image"

const Card2 = () => {
  return (
    <div className="w-60 border rounded-2xl my-3 m-auto overflow-hidden">
      <Image src="/beetle.png" alt="" height={400} width={400}/>

      <div className="bg-zinc-500 bg-opacity-20 p-4 space-y-3">
        <p className="text-lg md:text:xl font-bold">Lorem ipsum dolor sit amet.</p>
        <p className="text-sm md:text-base text-zinc-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nihil voluptates deleniti eos nobis praesentium voluptatem blanditiis, suscipit odio porro?</p>
        <button className="btn">Check it Out</button>
      </div>
    </div>
  )
}

export default Card2
