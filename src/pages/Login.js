import { useState } from "react";
import LoginForm from "../components/LoginForm";
import Register from "../components/RegisterForm";
import MainPage from "./MainPage";

const Login = () => {
    const [monitor, setMonitor] = useState(true)
    return (
        <div>
            {/* {monitor ?
                <LoginForm setMonitor={setMonitor} monitor={monitor} /> :
                <Register setMonitor={setMonitor} monitor={monitor}/>
            } */}
            <MainPage />
        </div>
    );
}

export default Login;