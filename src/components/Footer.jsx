import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-[#291313] shadow-[0_0_25px_rgba(212,175,55,0.25)] text-[#FFF8E7] overflow-hidden">
      
      {/* Golden Glow Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_40%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-16 pb-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-[#2A2A2A] pb-14">
          
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              
              <img
                src="src/data/logo.jpeg"
                alt="Chai Culture"
                className="w-14 h-14 rounded-full object-cover border-2 border-[#D4AF37]"
              />

              <div>
                <h2 className="text-2xl font-bold text-[#D4AF37]">
                  Chai Culture
                </h2>

                <p className="text-sm text-gray-400 tracking-wider">
                  Royal Indian Tea
                </p>
              </div>
            </div>

            <p className="text-gray-400 leading-8 text-sm sm:text-base">
              Experience the royal taste of handcrafted chai inspired by
              India’s timeless heritage, luxury spices, and authentic flavors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-[#D4AF37] mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>
                <Link
                  to="/"
                  className="hover:text-[#D4AF37] transition duration-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/menu"
                  className="hover:text-[#D4AF37] transition duration-300"
                >
                  Menu
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-[#D4AF37] transition duration-300"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#D4AF37] transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-[#D4AF37] mb-6">
              Contact
            </h3>

            <div className="space-y-4 text-gray-300 text-sm sm:text-base">
              <p className="flex items-center gap-2">
                📍 Delhi, India
              </p>

              <p className="flex items-center gap-2">
                📞 +91 98765 43210
              </p>

              <p className="flex items-center gap-2">
                ✉️ chaiculture@gmail.com
              </p>
            </div>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-xl font-semibold text-[#D4AF37] mb-6">
              Follow Us
            </h3>

            <p className="text-gray-400 mb-6 leading-7 text-sm sm:text-base">
              Stay connected with us for royal tea collections and premium chai
              experiences.
            </p>

            <div className="flex flex-wrap gap-4">
              
              <a
                href="#"
                className="w-11 h-11 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition duration-300 shadow-lg"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition duration-300 shadow-lg"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition duration-300 shadow-lg"
              >
                <FaTwitter size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition duration-300 shadow-lg"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-6 text-center">
          <p className="text-gray-500 text-sm sm:text-base">
            © 2026{" "}
            <span className="text-[#D4AF37] font-medium">
              Chai Culture
            </span>
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;