import { BsGithub } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex flex-col w-full h-full gap-8">
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
                    <button className="px-4 h-12 bg-[#141518] rounded-lg text-base text-designColor tracking-wide uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"><a href="Resume_of_Momenur.pdf" download="Resume_of_Momenur.pdf">Download Resume</a></button>
                </div>
                <div className="w-full h-full">
                    <h3 className="text-xl tracking-wider uppercase text-designColor">
                        Quick Link
                    </h3>
                    <ul className="flex flex-col gap-4 py-6 overflow-hidden font-medium font-titleFont">
                        <li>
                            <span className="relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group">
                                About
                                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                            </span>
                        </li>
                        <li>
                            <span className="relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group">
                                Portfolio
                                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                            </span>
                        </li>
                        <li>
                            <span className="relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group">
                                Services
                                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                            </span>
                        </li>
                        <li>
                            <span className="relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group">
                                Blog
                                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                            </span>
                        </li>
                        <li>
                            <span className="relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group">
                                Contact
                                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="w-full h-full">
                    <h3 className="text-xl tracking-wider uppercase text-designColor">
                        RESOURCES
                    </h3>
                    <ul className="flex flex-col gap-4 py-6 overflow-hidden font-medium font-titleFont">
                        <li>
                            <span className="relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group">
                                Authentication
                                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                            </span>
                        </li>
                        <li>
                            <span className="relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group">
                                System Status
                                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                            </span>
                        </li>
                        <li>
                            <span className="relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group">
                                Terms of Service
                                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                            </span>
                        </li>
                        <li>
                            <span className="relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group">
                                Pricing
                                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                            </span>
                        </li>
                        <li>
                            <span className="relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group">
                                Over Right
                                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="w-full h-full">
                    <h3 className="text-xl tracking-wider uppercase text-designColor">
                        DEVELOPERS
                    </h3>
                    <ul className="flex flex-col gap-4 py-6 overflow-hidden font-medium font-titleFont">
                        <li>
                            <span className="relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group">
                                Documentation
                                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                            </span>
                        </li>
                        <li>
                            <span className="relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group">
                                Authentication
                                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                            </span>
                        </li>
                        <li>
                            <span className="relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group">
                                API Reference
                                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                            </span>
                        </li>
                        <li>
                            <span className="relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group">
                                Support
                                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                            </span>
                        </li>
                        <li>
                            <span className="relative w-full text-lg duration-300 cursor-pointer hover:text-designColor group">
                                Open Source
                                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                            </span>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="w-full py-10 ">
                <p className="w-full text-base text-center text-gray-500 text">
                    © 2023. All rights reserved by Momenur Islam. <span className="text-designColor"> || </span>Phone: 01755772447 <span className="text-designColor"> ||  </span>Email: momenurislam6@gmail.com
                </p>
            </div>
        </footer>
    );
};

export default Footer;