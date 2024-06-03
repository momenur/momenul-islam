import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import Title from "../../Share/Title/Title";
import ContactLeft from "./ContactLeft";

const Contact = () => {
    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    // ========== Email Validation start here ==============
    const emailValidation = () => {
        return String(email)
            .toLocaleLowerCase()
            .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    };
    // ========== Email Validation end here ================


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        
  
      emailjs.sendForm('service_u57ofyt', 'template_bdfz6te', form.current, 'E3BFLUn3pAPnJsrFV')
        .then((result) => {
            console.log(result.text);
            console.log("sucessfully sms send");
        }, (error) => {
            console.log(error.text);
        });
        handleSend();
    };


    const handleSend = () => {
        if (username === "") {
            setErrMsg("Username is required!");
        } else if (phoneNumber === "") {
            setErrMsg("Phone number is required!");
        } else if (email === "") {
            setErrMsg("Please give your Email!");
        } else if (!emailValidation(email)) {
            setErrMsg("Give a valid Email!");
        } else if (subject === "") {
            setErrMsg("Plese give your Subject!");
        } else if (message === "") {
            setErrMsg("Message is required!");
        } else {
            setSuccessMsg(
                `Thank you dear ${username}, Your Messages has been sent Successfully!`
            );
            setErrMsg("");
            setUsername("");
            setPhoneNumber("");
            setEmail("");
            setSubject("");
            setMessage("");
        }
    };

    return (
        <section id="contact" className="border-b-[1px] border-b-black pb-20">
            <Title title="contact" description="Contact with me"></Title>
            <div className="max-w-6xl mx-auto">
                <div className="w-full">
                    <div className="flex flex-col justify-between w-full h-auto lgl:flex-row">
                        <ContactLeft></ContactLeft>

                        <div className="w-[94%] lgl:w-[60%] h-full flex flex-col  items-center justify-center" data-aos="zoom-in-left">
                            <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-8 flex flex-col gap-8 justify-center">
                                <form ref={form} onSubmit={sendEmail} className="w-full">
                                    {errMsg && (
                                        <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                                            {errMsg}
                                        </p>
                                    )}
                                    {successMsg && (
                                        <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                                            {successMsg}
                                        </p>
                                    )}
                                    <div className="flex flex-col gap-6 py-2">
                                        <div className="flex flex-col gap-10 lgl:flex-row">
                                            <div className="flex flex-col w-full gap-4 lgl:w-1/2">
                                                <p className="text-sm tracking-wide text-gray-400 uppercase">your name</p>
                                                <input onChange={(e) => setUsername(e.target.value)}
                                                    value={username}
                                                    className={`${errMsg === "Username is required!" &&
                                                        "outline-designColor"
                                                        } contactInput`} type="text" name="to_name" id="" />
                                            </div>
                                            <div className="flex flex-col w-full gap-4 lgl:w-1/2">
                                                <p className="text-sm tracking-wide text-gray-400 uppercase">Phone Number</p>
                                                <input onChange={(e) => setPhoneNumber(e.target.value)}
                                                    value={phoneNumber}
                                                    className={`${errMsg === "Phone number is required!" &&
                                                        "outline-designColor"
                                                        } contactInput`} type="text" name="" id="" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-full gap-4">
                                            <p className="text-sm tracking-wide text-gray-400 uppercase">your email</p>
                                            <input onChange={(e) => setEmail(e.target.value)}
                                                value={email}
                                                className={`${errMsg === "Please give your Email!" &&
                                                    "outline-designColor"
                                                    } contactInput`} type="email" name="from_name" id="" />
                                        </div>
                                        <div className="flex flex-col w-full gap-4">
                                            <p className="text-sm tracking-wide text-gray-400 uppercase">Subject</p>
                                            <input onChange={(e) => setSubject(e.target.value)}
                                                value={subject}
                                                className={`${errMsg === "Plese give your Subject!" &&
                                                    "outline-designColor"
                                                    } contactInput`} type="text" name="" id="" />
                                        </div>
                                        <div className="flex flex-col w-full gap-4">
                                            <p className="text-sm tracking-wide text-gray-400 uppercase">message</p>
                                            <textarea onChange={(e) => setMessage(e.target.value)}
                                                value={message}
                                                className={`${errMsg === "Message is required!" && "outline-designColor"
                                                    } contactTextArea`} name="message" cols="30" rows="8"></textarea>
                                        </div>
                                        <div>
                                            <input className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wide uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent" type="submit" value="SEND MESSAGE" />
                                           
                                        </div>
                                        {errMsg && (
                                            <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                                                {errMsg}
                                            </p>
                                        )}
                                        {successMsg && (
                                            <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                                                {successMsg}
                                            </p>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Contact;