import { useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function Login() {
    const [user, setUser] = useState({ email: "", password: "" });
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const ChangeText = (e) => {
        setUser((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };
    const CheckMessage = (msg) => {
        setMessage(msg);
        setTimeout(() => {
            setMessage("");
        }, 3000);
    };
    const LoginUser = async () => {
        await axios.post("http://localhost:8085/user/get", {
            email: user.email,
            password: user.password
        }).then(res => {
            if (res.data.length > 0) {
                navigate("/dashboard");
            } else {
                CheckMessage("Email and Password does not match!!!");
            }
        });
    };
    return (
        <>
            <div className="container">
                <input
                    type="email"
                    name="email"
                    onChange={ChangeText}
                    value={user.email}
                    placeholder="Enter Email"
                />
                <br />
                <br />
                <input
                    type="password"
                    name="password"
                    onChange={ChangeText}
                    value={user.password}
                    placeholder="Enter Password"
                />
                <br />
                <br />
                <button onClick={LoginUser} className="btn btn-secondary" >
                    Login
                </button>
                <br />
                <br />
                <Link to="/register" >
                    <button className="btn btn-primary" >
                        Register
                    </button>
                </Link>
            </div>
            <div style={{ marginTop: 30, width: 500 }} className="alert alert-info">
                {message}
            </div>
        </>
    );
}

export default Login;
