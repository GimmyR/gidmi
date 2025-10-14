import './style.css';
import FooterLinks from "./footer-links";
import FooterSocial from "./footer-social";

export default function Footer() {
    return (
        <footer>
            <div className="bg-danger">
                <div className="container-fluid container-lg">
                    <div className="d-flex flex-row justify-content-center py-5">
                        <div className="d-flex flex-row col-6 justify-content-center align-items-center">
                            <p className="text-light col-8">
                                <b>Gidmi</b> is a website where you can follow a guide for Next fullstack application.
                            </p>
                        </div>
                        <div className="d-flex flex-row col-6 justify-content-evenly">
                            <div className="d-flex flex-column">
                                <FooterLinks/>
                            </div>
                            <div className="d-flex flex-column">
                                <FooterSocial/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center footer-made-by">
                <span className="py-2 text-light">Made by Gimmy Razafimbelo</span>
            </div>
        </footer>
    );
}