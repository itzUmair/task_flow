import { useState, useRef } from "react"
import {AxiosError} from "axios"
import api from "../../api/axios"

type SignupFormData = {
  first_name: string,
  last_name: string,
  bio: string | undefined,
  occupation: string,
  email: string,
  password: string,
  confirmPassword: string
}

interface ErrorResponse {
  message: string
}

const Signup = () => {
  const [formData, setFormData] = useState<SignupFormData>({
    first_name: "",
    last_name: "",
    bio: "",
    occupation: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [loading, setLoading] = useState(false)
  
  const fnameRef = useRef<HTMLInputElement>(null)
  const lnameRef = useRef<HTMLInputElement>(null)
  const bioRef = useRef<HTMLTextAreaElement>(null)
  const occupationRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const confirmPasswordRef = useRef<HTMLInputElement>(null)

  const [error, setError] = useState<string>("")
  const [success, setSuccess] = useState<string>("")

  const validateForm = () => {
    if (!formData.first_name.length) {
      setError("First name is required");
      fnameRef.current?.focus()
      return false;
    } if (!formData.last_name.length) {
      setError("Last name is required");
      lnameRef.current?.focus()
      return false;
    } else if (!formData.occupation.length) {
      setError("Occupation is required")
      occupationRef.current?.focus()
      return
    } else if (!formData.email.length) {
      setError("Email is required");
      emailRef.current?.focus()
      return false;
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      setError("Invalid email address");
      emailRef.current?.focus()
      return false;
    } else if (!formData.password.length) {
      setError("Password is required");
      passwordRef.current?.focus()
      return false;
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        formData.password
      )
    ) {
      setError(
        "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
      );
      passwordRef.current?.focus()
      return false;
    } else if (!formData.confirmPassword.length) {
      setError("Please confirm your password");
      confirmPasswordRef.current?.focus()
      return false;
    } else if (formData.confirmPassword !== formData.password) {
      setError("Passwords do not match");
      confirmPasswordRef.current?.focus()
      return false;
    }
    return true;
  };

  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
    setError("")
    setSuccess("")
    if (e.target.name === "fname") {
      setFormData({...formData, first_name: e.target.value})
    } 
    if (e.target.name === "lname") {
      setFormData({...formData, last_name: e.target.value})
    } 
    if (e.target.name === "bio") {
      setFormData({...formData, bio: e.target.value})
    } 
    if (e.target.name === "occupation") {
      setFormData({...formData, occupation: e.target.value})
    } 
    if (e.target.name === "email") {
      setFormData({...formData, email: e.target.value})
    } 
    if (e.target.name === "password") {
      setFormData({...formData, password: e.target.value})
    }
    if (e.target.name === "confirmPassword") {
      setFormData({...formData, confirmPassword: e.target.value})
    }
  }

  const handleSubmit = async (e:React.FormEvent<HTMLButtonElement>):Promise<void> => {
    e.preventDefault();
    setLoading(true)
    if (!validateForm()) {
      setLoading(false)
      return
    }
    try {
      await api.post("/signup", {
        ...formData, confirmPassword:undefined
      });
      setSuccess("account created successfully.")
    } catch(error) {
      const err= error as AxiosError<ErrorResponse>
      setError(err?.response?.data?.message || "")
    } finally {
      setLoading(false)
    }
  }

  const togglePasswordProtection = (e:React.FormEvent<HTMLButtonElement>):void => {
    e.preventDefault()
    setShowPassword(prevState => !prevState)
  }


  return (
    <div>
      <h1 className="text-clr-100 font-bold text-xl md:text-3xl text-center mt-8">Signup</h1>
      <form className="flex flex-col w-4/5 sm:w-96 px-4 border-dashed border-clr-800 border-2 mx-auto my-8 p-4 md:py-8 gap-y-4 rounded-md">
        <div>
          <label htmlFor="fname" className="text-clr-100 block mb-2 text-sm font-medium ">First name:</label>
          <input type="text" ref={fnameRef} id="fname" name="fname" autoFocus value={formData.first_name} className="bg-clr-850 border border-clr-850 text-clr-100 text-sm rounded-lg focus:border-clr-100 outline-none block w-full p-2.5" onChange={handleChange} maxLength={20}/>
        </div>
        <div>
          <label htmlFor="lname" className="text-clr-100 block mb-2 text-sm font-medium ">Last name:</label>
          <input type="text" ref={lnameRef} id="lname" name="lname" value={formData.last_name} className="bg-clr-850 border border-clr-850 text-clr-100 text-sm rounded-lg focus:border-clr-100 outline-none block w-full p-2.5" onChange={handleChange} maxLength={20}/>
        </div>
        <div>
          <label htmlFor="bio" className="text-clr-100 block mb-2 text-sm font-medium ">Bio:</label>
          <textarea ref={bioRef} id="bio" name="bio" value={formData.bio} className="bg-clr-850 border border-clr-850 text-clr-100 text-sm rounded-lg focus:border-clr-100 outline-none block w-full p-2.5" onChange={handleChange} maxLength={200}/>
        </div>
        <div>
          <label htmlFor="occupation" className="text-clr-100 block mb-2 text-sm font-medium ">Occupation:</label>
          <input type="text" ref={occupationRef} id="occupation" name="occupation" value={formData.occupation} className="bg-clr-850 border border-clr-850 text-clr-100 text-sm rounded-lg focus:border-clr-100 outline-none block w-full p-2.5" onChange={handleChange} maxLength={50}/>
        </div>
        <div>
          <label htmlFor="email" className="text-clr-100 block mb-2 text-sm font-medium ">Email:</label>
          <input type="email" ref={emailRef} id="email" name="email" value={formData.email} className="bg-clr-850 border border-clr-850 text-clr-100 text-sm rounded-lg focus:border-clr-100 outline-none block w-full p-2.5" onChange={handleChange} maxLength={30}/>
        </div>
        <div>
          <label htmlFor="password" className="text-clr-100 block mb-2 text-sm font-medium">Password:</label>
          <input type={showPassword ? "text" : "password"} ref={passwordRef} id="password" name="password" value={formData.password} className="bg-clr-850 border border-clr-850 text-clr-100 text-sm rounded-lg focus:border-clr-100 outline-none block w-full p-2.5" onChange={handleChange}/> 
        </div>
        <div>
          <label htmlFor="confirmPassword" className="text-clr-100 block mb-2 text-sm font-medium">Confirm Password:</label>
          <input type={showPassword ? "text" : "password"} ref={confirmPasswordRef} id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} className="bg-clr-850 border border-clr-850 text-clr-100 text-sm rounded-lg focus:border-clr-100 outline-none block w-full p-2.5" onChange={handleChange}/> 
          <button onClick={togglePasswordProtection} className="text-clr-100 italic text-xs underline underline-offset-2">{showPassword ? "hide" : "show"} password</button>
        </div>
        {error && <p className="bg-clr-300 text-center text-clr-100">{error}</p>}
        {success && <p className="bg-clr-400 text-center text-clr-900 font-bold">{success} <a href="/login" className="underline cursor-pointer">Try logging in.</a></p>}
        <button type="submit" onClick={handleSubmit} className="bg-clr-850 hover:outline hover:outline-1 hover:bg-clr-900 text-white font-bold py-2 px-4 rounded-lg" disabled={loading}>{loading ? "Creating account..." : "Signup"}</button>
        <p className="text-center text-clr-100">Already have an account? <a href="/login" className="underline cursor-pointer">Login</a></p>
      </form>
    </div>
  )
}

export default Signup