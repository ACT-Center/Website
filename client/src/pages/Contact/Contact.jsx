import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Main from "../../components/Layout/Layout";
import "./Contact.css";
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'act@thapar.edu',
    auth: {
      user: 'act@thapar.edu',
      pass: '',
    },
  });

  const mailOptions = {
    from: 'act@thapar.edu', // Sender's email address
    to: 'act@thapar.edu', // Recipient's email address
    subject: "" ,
    html: ""
  };

export default function Contact() {
    return (
        <div>
            <Main Heading="Contact Us" SubHead="Get in touch" Body={Body()} />
        </div>
    );
}

const Body = () => {
    return (
        <div>
            <div className="body">
                <h1>Get in touch</h1>
                <p style={{marginTop: "-0.8lh", fontSize: "0.9em", marginBottom:"30px"}}>Write to us at: act@thapar.edu</p>

                <div className="matrix">
                    <div className="row">
                        <div className="col">
                            <form action="">
                                <input type="text" placeholder="Full Name" />
                                <input type="text" placeholder="Email" />
                                <textarea rows="10" placeholder="Message"></textarea>
                                <button className="button homeButton contactButton">Submit</button>
                            </form>
                        </div>
                        <div className="col">
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
