import React from "react";
import { useNavigate } from "react-router-dom";
import Sidenav from "./Templates/Sidenav";
import Topnav from "./Templates/Topnav";

function Contact() {
  const navigate = useNavigate();

  return (
    <>
      <Sidenav/>
      <div className="w-full lg:w-[80%] h-screen overflow-y-auto bg-zinc-900 text-white">
        <Topnav />
        
        <div className="w-full px-4 sm:px-6 lg:px-[3%] py-4 sm:py-[2%]">
          <div className="w-full flex items-center mb-4 sm:mb-6">
            <h1 className="text-xl sm:text-2xl font-semibold text-zinc-400 flex items-center">
              <i onClick={() => navigate("/")} className="hover:text-[#6556CD] cursor-pointer ri-arrow-left-line mr-2"></i>
              Contact Us
            </h1>
          </div>

          <div className="flex justify-center px-4">
            <div className="max-w-3xl w-full">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#6556CD]">Contact Information</h2>
              <p className="text-sm sm:text-base text-gray-300 mt-4 leading-relaxed">
                Have questions, feedback, or partnership inquiries? Feel free to reach out to us. 
                We'd love to hear from you!
              </p>

              <div className="mt-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-white">Contact Us:</h3>
                <ul className="mt-3 space-y-3 text-sm sm:text-base text-gray-300">
                  <li>📧 <span className="text-white font-semibold">Email:</span> harshghoghari77@gmail.com</li>
                  <li>📞 <span className="text-white font-semibold">Phone:</span> +91 9925936842</li>
                  <li>📍 <span className="text-white font-semibold">Address:</span> Surat, Gujarat, India</li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-white">Send Us a Message</h3>
                <form className="mt-4 space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 text-sm sm:text-base bg-[#1e1e1e] border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-[#6556CD]"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 text-sm sm:text-base bg-[#1e1e1e] border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-[#6556CD]"
                  />
                  <textarea
                    rows="4"
                    placeholder="Your Message"
                    className="w-full p-3 text-sm sm:text-base bg-[#1e1e1e] border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-[#6556CD]"
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-[#6556CD] hover:bg-[#4b3ca7] text-white px-5 sm:px-6 py-2 rounded-lg transition-all text-sm sm:text-base"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              <div className="mt-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-white">Follow Us</h3>
                <p className="text-sm sm:text-base text-gray-300 mt-2">Stay updated with the latest movies & shows by following us on social media.</p>
                <div className="flex mt-4 space-x-4">
                  <a href="#" className="text-xl sm:text-2xl text-blue-500 hover:text-white transition-colors"><i className="ri-facebook-circle-fill"></i></a>
                  <a href="#" className="text-xl sm:text-2xl text-blue-400 hover:text-white transition-colors"><i className="ri-twitter-fill"></i></a>
                  <a href="#" className="text-xl sm:text-2xl text-pink-500 hover:text-white transition-colors"><i className="ri-instagram-fill"></i></a>
                  <a href="#" className="text-xl sm:text-2xl text-red-500 hover:text-white transition-colors"><i className="ri-youtube-fill"></i></a>
                </div>
              </div>

              <div className="mt-8">
                <button onClick={() => navigate("/")} className="bg-[#6556CD] hover:bg-[#4b3ca7] text-white px-5 sm:px-6 py-2 rounded-lg transition-all text-sm sm:text-base">
                  Go Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
