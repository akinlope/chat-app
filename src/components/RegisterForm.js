import { toastErr, toastSuc } from "../helpers";
import { register } from "../helpers";

import { useState } from "react"

const Register = ({ setMonitor, monitor }) => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [btnMonitor, setBtnMonitor] = useState(false)


    const handleChange = () => { setMonitor(!monitor) }
    const changeName = (e) => { setEmail(e.target.value); }
    const changeUsername = (e) => { setUsername(e.target.value) }
    const changeFirstName = (e) => { setFirstname(e.target.value) }
    const changeLastName = (e) => { setLastname(e.target.value) }
    const changePassword1 = (e) => { setPassword(e.target.value) }
    const changePassword2 = (e) => { setConfirmPassword(e.target.value) }



    // register function
    const handleRegister = async (e) => {
        e.preventDefault();

        if (password.length < 6 || confirmPassword.length < 6)
            return toastErr("Password cannot be less than 6-digits")
        if (password !== confirmPassword)
            return toastErr("Password does not match")

        setBtnMonitor(true)
        await register(email, username, firstname, lastname, password)
            .then(() => {
                setEmail("")
                setUsername("")
                setFirstname("")
                setLastname("")
                setPassword("")
                setConfirmPassword("")
                toastSuc("Registration Successful")
                setBtnMonitor(false)
            })
            .catch((err) => {
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
                        <input value={email} onChange={changeName} type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-greenText focus:outline-none focus:ring-0 focus:border-greenText peer" placeholder=" " required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-greenText peer-focus:dark:text-blgreenText peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input value={username} onChange={changeUsername} type="text" name="floating_username" id="floating_username" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-greenText focus:outline-none focus:ring-0 focus:border-greenText peer" placeholder=" " required />
                        <label htmlFor="floating_username" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-greenText peer-focus:dark:text-blgreenText peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input value={firstname} onChange={changeFirstName} type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-greenText focus:outline-none focus:ring-0 focus:border-greenText peer" placeholder=" " required />
                            <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-greenText peer-focus:dark:text-greenText peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input value={lastname} onChange={changeLastName} type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-greenText focus:outline-none focus:ring-0 focus:border-greenText peer" placeholder=" " required />
                            <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-greenText peer-focus:dark:text-blgreenText peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                        </div>
                    </div>

                    <div className="relative z-0 w-full mb-6 group">
                        <input value={password} onChange={changePassword1} type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-greenText focus:outline-none focus:ring-0 focus:border-greenText peer" placeholder=" " required />
                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-greenText peer-focus:dark:text-blgreenText peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input value={confirmPassword} onChange={changePassword2} type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-greenText focus:outline-none focus:ring-0 focus:border-greenText peer" placeholder=" " required />
                        <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-greenText peer-focus:dark:text-blgreenText peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                    </div>

                    <p className=" text-white text-sm mb-6">Not yet a member? Register <span onClick={handleChange} className=" text-redText font-bold cursor-pointer">here</span></p>

                    <div className=" flex justify-center">
                        <button disabled onClick={handleRegister} type="submit" className=" text-white bg-redText p-2 pr-6 pl-6 font-semibold hover:font-bold rounded-[10px] ">
                            {btnMonitor ? (<span>Registering</span>) : (<span>Register</span>)}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;