import { useState } from "react";
import { toastErr, login, toastSuc } from "../helpers"


const LoginForm = ({monitor, setMonitor}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [btnmonitor, setBtnMonitor] = useState(false)

     
    const handleChange = () => { setMonitor(!monitor)}
    const handleEmail = (e) => { setEmail(e.target.value)}
    const handlePassword = (e) => { setPassword(e.target.value)}

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(password.trim().length < 6)
            return toastErr("Password cannot be less than 6-digit");

        setBtnMonitor(true)
        await login(email, password)
        .then(()=> {
            setEmail("")
            setPassword("")
            toastSuc("Welcome")
            setBtnMonitor(true)
        })
        .catch((err)=> {
            toastErr(err.message)
            setBtnMonitor(false)
        })
    }
    return (
        <div className=" flex justify-center items-center h-screen">
            <div>
                <h1 className=" mb-5 text-5xl text-greenText font-bold ">Welcome to <span className=" text-redText font-extrabold">Chat</span></h1>

                <form>
                    <div className="relative z-0 w-full mb-6 group">
                        <input value={email} onChange={handleEmail} type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-greenText focus:outline-none focus:ring-0 focus:border-greenText peer" placeholder=" " required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-greenText peer-focus:dark:text-blgreenText peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>

                    <div className="relative z-0 w-full mb-6 group">
                        <input value={password} onChange={handlePassword} type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-greenText focus:outline-none focus:ring-0 focus:border-greenText peer" placeholder=" " required />
                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-greenText peer-focus:dark:text-blgreenText peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>

                    <p className=" text-white text-sm mb-6">Not yet a member? Register <span onClick={handleChange} className=" text-redText font-bold cursor-pointer">here</span></p>

                    <div className=" flex justify-center">
                        <button onClick={handleSubmit} disabled={btnmonitor} type="submit" className=" text-white bg-redText p-2 pr-6 pl-6 font-semibold hover:font-bold rounded-[10px] ">{btnmonitor ? (<span>Loggin in</span>) : (<span>Login</span>)}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;