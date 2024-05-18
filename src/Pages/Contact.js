import React, { useRef, useState } from "react";
import "./Css/contact.css"

export default function Contact() {
    const inp1 = useRef();
    const inp2 = useRef();
    const inp3 = useRef();
    const inp4 = useRef();
    const inp5 = useRef();
    const inp6 = useRef();
    const [visible, setVisible] = useState(false);
    const resultRef = useRef(null);

    const yoxla = () => {
        if (inp1.current.value.trim() === "") {
            alert("Ad Boshdur");
            return;
        }
        if (inp2.current.value.trim() === "") {
            alert("Soyad Bosdur");
            return;
        }
        if (inp3.current.value.trim() === "") {
            alert("Nomre Bosdur");
            return;
        }
        if (inp3.current.value.trim()[0] !== "+") {
            alert("Nomre + ile baslamalidir");
            return;
        }
        if (inp4.current.value.trim() === "") {
            alert("Adress Bosdur");
            return;
        }
        if (inp5.current.value.trim() === "") {
            alert("Email Bosdur");
            return;
        }
        if (inp6.current.value.trim() === "") {
            alert("Mesaj Bosdur");
            return;
        }
        setVisible(true);
        resultRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="container">
            <div>
                <input type="text" ref={inp1} placeholder="Adinizi yazin.." />
            </div>
            <div>
                <input type="text" ref={inp2} placeholder="Soyadinizi yazin.." />
            </div>
            <div>
                <input type="tel" ref={inp3} placeholder="+994 0....." />
            </div>
            <div>
                <input type="text" ref={inp4} placeholder="Adresinizi yazin.." />
            </div>
            <div>
                <input type="text" ref={inp5} placeholder="Emailinizi yazin.." />
            </div>
            <div>
                <textarea ref={inp6} placeholder="Mesajinizi yazin.."></textarea>
            </div>
            <button onClick={yoxla}>Contact us</button>
            <div ref={resultRef}>
                {visible && (
                    <table>
                        <thead>
                            <tr>
                                <th>AD</th>
                                <th>SOYAD</th>
                                <th>NOMRE</th>
                                <th>ADRES</th>
                                <th>EMAIL</th>
                                <th>MESAJ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{inp1.current.value}</td>
                                <td>{inp2.current.value}</td>
                                <td>{inp3.current.value}</td>
                                <td>{inp4.current.value}</td>
                                <td>{inp5.current.value}</td>
                                <td>{inp6.current.value}</td>
                            </tr>
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
