import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const [newUser, setNewUser] = useState({ id: null, email: "", type: "", phone: "", password: "" });
    const navigate = new useNavigate();
    const ChangeText = (e) => {
        setNewUser((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };
    const RegisterUser = async () => {
        await axios.post("http://localhost:8085/user/register", {
            id: newUser.id,
            email: newUser.email,
            type: newUser.type,
            phone: newUser.phone,
            password: newUser.password
        }).then((res) => {
            if (res.data.affectedRows > 0) {
                navigate("/");
            } else {
                alert("Please check the fields!");
            }
        });
    };
    const CancelRegistration = () => {
        navigate("/");
    };
    return (
        <>
            <div className="container">
                <input
                    type="number"
                    name="id"
                    onChange={ChangeText}
                    value={newUser.id}
                    placeholder="Enter Id"
                    required
                />
                <br />
                <br />
                <input
                    type="email"
                    name="email"
                    onChange={ChangeText}
                    value={newUser.email}
                    placeholder="Enter Email"
                    required
                />
                <br />
                <br />
                <input
                    type="text"
                    name="type"
                    onChange={ChangeText}
                    value={newUser.type}
                    placeholder="Enter Type"
                    required
                />
                <br />
                <br />
                <input
                    type="text"
                    name="phone"
                    onChange={ChangeText}
                    value={newUser.phone}
                    placeholder="Enter Phone"
                    required
                />
                <br />
                <br />
                <input
                    type="password"
                    name="password"
                    onChange={ChangeText}
                    value={newUser.password}
                    placeholder="Enter Password"
                    required
                />
                <br />
                <br />
                <button onClick={RegisterUser} className="btn btn-warning"  >
                    Register
                </button>
                <button style={{ marginLeft: 20 }} onClick={CancelRegistration} className="btn btn-primary"  >
                    Cancel
                </button>
            </div>
        </>
    );
}

export default Register;
