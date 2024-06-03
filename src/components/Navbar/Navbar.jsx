import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-scroll";
import { navLinksdata } from "../../contants/navOptions";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div className="flex sticky top-0 z-50 bg-bodyColor items-center justify-between w-full h-20 border-b-[1px] border-b-gray-700">
            <button className="px-4 h-12 bg-[#141518] rounded-lg text-base text-designColor tracking-wide uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"><a href="Resume_of_Momenur.pdf" download="Resume_of_Momenur.pdf">Download Resume</a></button>
            <div>
                <ul className="items-center hidden gap-6 lg:gap-10 mdl:inline-flex">
                    {
                        navLinksdata.map(data => <li className="text-base font-normal tracking-wide text-gray-400 duration-500 cursor-pointer hover:text-designColor" key={data._id}>
                            <Link
                                activeClass="active"
                                to={data.link}
                                spy={true}
                                smooth={true}
                                offset={-75}
                                duration={800}
                            >{data.title}</Link>
                        </li>)
                    }
                </ul>
                <span
                    onClick={() => setShowMenu(!showMenu)}
                    className="inline-flex items-center justify-center w-10 h-10 text-xl bg-black rounded-full cursor-pointer mdl:hidden text-designColor"
                ><FiMenu></FiMenu></span>
                {showMenu && (
                    <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
                        <div className="relative flex flex-col gap-8 py-2">
                            
                            <ul className="flex flex-col gap-4">
                                {navLinksdata.map((item) => (
                                    <li
                                        key={item._id}
                                        className="text-base font-normal tracking-wide text-gray-400 duration-300 cursor-pointer hover:text-designColor"
                                    >
                                        <Link
                                            onClick={() => setShowMenu(false)}
                                            activeClass="active"
                                            to={item.link}
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-col gap-4">
                                <h2 className="mb-4 text-base uppercase font-titleFont">
                                    Find me in
                                </h2>
                                <div className="flex gap-4">
                                    <span className="bannerIcon">
                                        <FaFacebookF />
                                    </span>
                                    <span className="bannerIcon">
                                        <FaTwitter />
                                    </span>
                                    <span className="bannerIcon">
                                        <FaLinkedinIn />
                                    </span>
                                </div>
                            </div>
                            <span
                                onClick={() => setShowMenu(false)}
                                className="absolute text-2xl text-gray-400 duration-300 cursor-pointer top-4 right-4 hover:text-designColor"
                            >
                                <MdClose />
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;