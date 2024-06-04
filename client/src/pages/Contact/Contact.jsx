import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Main from "../../components/Layout/Layout";
import "./Contact.css";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

export default function Contact() {

    return (
        <div>
            <Main Heading="Contact Us" SubHead="Get in touch" Body={Body()} />
        </div>
    );
}

const Body = () => {
    const serviceid = import.meta.env.VITE_SERVICE_ID;
    const templateid = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
     
    const form = useRef();

function sendEmail(e) {
    e.preventDefault();
    console.log("enter");
    emailjs
        .sendForm(serviceid, templateid , form.current, {
            publicKey: publicKey,
        })
        .then(
            () => {
                console.log('SUCCESS!');
            },
            (error) => {
                console.log('FAILED...', error);
            },
        );
};


    return (
        <div>
            <div className="body">
                <h1>Get in touch</h1>
                <p style={{ marginTop: "-0.8lh", fontSize: "0.9em", marginBottom: "30px" }}>Write to us at: act@thapar.edu</p>

                <div className="matrix contact">
                    <div className="row contact">
                        <div className="col">
                            <form ref={form} onSubmit={sendEmail}>
                                <input required type="text" placeholder="Full Name" name="user_name"/>
                                <input required type="email" placeholder="Email" name="user_email"/>
                                <textarea required rows="10" placeholder="Message" name="message"></textarea>
                                <input type="submit" className="button homeButton contactButton" />
                            </form>
                        </div>
                        <div className="col contactmap">
                            <MapContainer center={[30.3544242, 76.36670]} zoom={15} scrollWheelZoom={true}>
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                            </MapContainer>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
