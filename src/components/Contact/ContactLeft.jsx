import { BsGithub } from "react-icons/bs";
import contactImg from "../../assets/images/testimonial/contactImg.png";
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const ContactLeft = () => {
    return (
        <div className="w-[95%] lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne p-8 rounded-lg" data-aos="zoom-in-right">
            <div>
                <img className="object-cover w-full h-64 mb-5 rounded-lg" src={contactImg} alt="" />
                <div className="flex flex-col gap-4">
                    <h3 className="text-3xl font-bold text-white">Momenur Islam</h3>
                    <p className="text-lg font-normal text-gray-400">Junior Front-End Web Developer</p>
                    <p className="text-base tracking-wide text-gray-400">Address: Block A-12, House #78, Road #04, Middle Badda Bazar Road, Dhaka, Bangladesh.</p>
                    <p className="flex items-center gap-2 text-base text-gray-400">Phone: <span className="text-lightText">+8801755-772447</span></p>
                    <p className="flex items-center gap-2 text-base text-gray-400">Email: {" "} <span className="text-lightText">momenurislam6@gmail.com</span></p>
                    <div>
                        <h3 className="mb-4 text-base uppercase">find me in</h3>
                        <div className="flex gap-4">
                        <span className="bannerIcon">
                                <a href="https://web.facebook.com/momen.info"><FaFacebookF/></a>
                            </span>
                            <span className="bannerIcon">
                                <a href="https://github.com/momenur"><BsGithub /></a>
                            </span>
                            <span className="bannerIcon">
                                <a href="https://www.linkedin.com/in/momenur-islam/"><FaLinkedinIn/></a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactLeft;