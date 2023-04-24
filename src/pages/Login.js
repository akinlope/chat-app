import { useState } from "react";
import LoginForm from "../components/LoginForm";
import Register from "../components/RegisterForm";

const Login = () => {
    const [monitor, setMonitor] = useState(true)
    return (
        <div>
            {monitor ?
                <LoginForm setMonitor={setMonitor} monitor={monitor} /> :
                <Register setMonitor={setMonitor} monitor={monitor}/>
            }
        </div>
    );
}

export default Login;