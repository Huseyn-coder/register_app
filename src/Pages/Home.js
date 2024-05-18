import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { melumatlarContext } from "../Context/MelumatlarContext";
import { useContext } from "react";
import "./Css/home.css";

export default function Home() {
    const [state] = useContext(melumatlarContext);
    const inp1 = useRef();
    const inp2 = useRef();
    const navigate = useNavigate();

    const girisEt = () => {
        if (inp1.current.value.trim() !== state.gmail) {
            return alert("Mail sehvdir!");
        }
        if (inp2.current.value.trim() !== state.parol) {
            return alert("Parol sehvdir!");
        }
        navigate("/anasehife");
    };

    return (

        <div className="container">
            <div>
                <h1>WELCOME !</h1>
            </div>
            <div className="form-container">
                <h2>Giriş Et</h2>
                <div className="input-group">
                    <input type="text" ref={inp1} placeholder="Emailinizi yazın" />
                </div>
                <div className="input-group">
                    <input type="text" ref={inp2} placeholder="Parolunuzu yazın" />
                </div>
                <div className="btn-group">
                    <button className="primary" onClick={girisEt}>Giriş Et</button>
                    <Link to="/register">
                        <button className="secondary">Qeydiyyat Ol</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
