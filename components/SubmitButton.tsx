import { useFormStatus } from "react-dom"

const SubmitButton = () => {

    const formStatus = useFormStatus()

  return (
    <button disabled={formStatus.pending} className="text-white bg-blue-600 border-0 py-2 px-8 focus:outline-none hover:bg-blue-700 rounded text-lg" type="submit">{
        formStatus.pending ? "Submiting...":"Submit"
    }</button>
  )
}

export default SubmitButton
