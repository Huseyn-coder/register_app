import React, { useContext } from "react";
import { melumatlarContext } from "../Context/MelumatlarContext";
import { Link } from "react-router-dom";
import "./Css/anasehife.css"; 
export default function AnaSehife() {
    const [state, dispatch] = useContext(melumatlarContext);

    return (
        <>
            <div>
                <h1>Ana Sehife</h1>
            </div>
            <div className="container">
                <div className="link-container">
                    <Link to="/contact">Contact Us</Link>
                </div>

                <div className="info-box">
                    <p>Name: {state.name}</p>
                    <p>Surname: {state.surname}</p>
                    <p>Email: {state.gmail}</p>
                    <p>Country: {state.country}</p>
                    <p>Year: {state.year}</p>
                    <p>Parol: {state.parol}</p>
                </div>
            </div>
        </>
    );
}
