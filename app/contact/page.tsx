"use client"
import { ContactTitle,Desc } from "@/data/ContactData"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import { memo } from "react"
import SubmitButton from "@/components/SubmitButton"



const page = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [err, setErr] = useState(true)
  const [msg, setMsg] = useState("")



  const handleSubmit=async()=>{
  
    
    try {
      const res = await emailjs.send("service_7t9otim","template_mqytsfo",{
        name,email,phone
      },{publicKey:"-TP_H6z9wVE4hM3Eb"})

      console.log(res);
      
      if(!res){
        
        setMsg("Oops, some error accurd!")
        setErr(true)
        return
      }

      setMsg("Thanks, our team will contact you soon.")
      setErr(false)
      setName("")
      setEmail("")
      setPhone("")
      
    } catch (e) {
      console.log(e);
      
      setMsg("Oops, some error accurd!")
      setErr(true)
    }

    
  }


  return (
    <section className="text-gray-600 body-font flex-1">
  <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 className="title-font font-medium text-3xl text-gray-900">{ContactTitle}</h1>
      <p className="leading-relaxed mt-4">
        <Desc />
      </p>
    </div>
    <form
     action={handleSubmit}


    className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 shadow-md">
      
      <div className="relative mb-4">
        <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
        <input
        value={name} onChange={e=>setName(e.target.value)}
        type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input
        value={email} onChange={e=>setEmail(e.target.value)}
        type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone No</label>
        <input
        value={phone} onChange={e=>setPhone(e.target.value)}
        type="tel" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
      </div>

    <SubmitButton />

      <p className={`text-[0.6rem] sm:text-xs text-center font-semibold ${err?"text-red-500":"text-green-500"}`}>{msg}</p>
    </form>
  </div>
</section>
  )
}

export default memo(page)
