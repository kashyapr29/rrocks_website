import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    Icon: MessageCircle,
    href: "https://wa.me/919913592832",
    hover: "hover:bg-green-500",
  },
  { Icon: Phone, href: "tel:+919913592832", hover: "hover:bg-blue-500" },
  {
    Icon: Linkedin,
    href: "/",
    hover: "hover:bg-blue-700",
  },
  {
    Icon: Instagram,
    href: "https://www.instagram.com",
    hover: "hover:bg-pink-500",
  },
];

const products = [
  {
    name: "Polyester Embroidery Thread",
    href: "/embroidery-thread/polyester",
  },
  {
    name: "German Embroidery Thread",
    href: "/embroidery-thread/german",
  },
  {
    name: "Viscose Rayon Thread",
    href: "/embroidery-thread/viscose",
  },
  {
    name: "Multi Embroidery Thread",
    href: "/embroidery-thread/multi-color",
  },
  {
    name: "Weaving Yarn",
    href: "/yarn/weaving",
  },
];

const applications = [
  {
    name: "Apparel",
    href: "/applications/apparel",
  },
  {
    name: "Automotive",
    href: "/applications/automotive",
  },
  {
    name: "Embroidery",
    href: "/applications/embroidery",
  },
  {
    name: "Shoes & Accessories",
    href: "/applications/shoes-accessories",
  },
  {
    name: "Home Interior",
    href: "/applications/home-interior",
  },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {/* Company Info */}
          <div className="space-y-6 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center group">
                <div className="px-4 py-2 sm:px-6 sm:py-3">
                  <img
                    src="/final/rrocks_logo_dark.png"
                    alt="R ROCKS Logo"
                    className="h-8 sm:h-10 w-auto object-contain"
                  />
                </div>
              </Link>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Leading manufacturer of high-quality sewing and embroidery threads
              with over 20 years of experience in the textile industry, proudly
              serving from India.
            </p>
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map(({ Icon, href, hover }, index) => (
                <Link
                  key={index}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className={`w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-colors duration-200 ${hover}`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="space-y-6">
            <h4 className="text-base sm:text-lg font-semibold text-blue-400">
              Products
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {products.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm sm:text-base"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-base sm:text-lg font-semibold text-blue-400">
              Applications
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {applications.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm sm:text-base"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-base sm:text-lg font-semibold text-blue-400">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Plot no. 6, Patel Nagar, A K Road
                  </p>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Surat, India 395008
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                <a
                  href="tel:+919913592832"
                  className="text-gray-300 text-sm sm:text-base hover:text-blue-400 transition-colors duration-200"
                >
                  +91 99135 92832
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:rrocksthread@gmail.com"
                  className="text-gray-300 text-sm sm:text-base hover:text-blue-400 transition-colors duration-200"
                >
                  rrocksthread@gmail.com
                </a>
              </div>
            </div>

            {/* Certifications */}
            {/* <div className="pt-4">
              <p className="text-xs sm:text-sm text-gray-400 mb-3">Certified by:</p>
              <div className="flex gap-2 sm:gap-3">
                {["ISO 9001", "OEKO-TEX", "QRO"].map((cert) => (
                  <div
                    key={cert}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-lg flex items-center justify-center"
                  >
                    <Image
                      src={`/final/${cert}.png`}
                      alt={cert}
                      width={32}
                      height={32}
                      className="object-contain w-6 h-6 sm:w-8 sm:h-8"
                    />
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex justify-center items-center">
            <p className="text-gray-400 text-xs sm:text-sm text-center">
              © 2025 RRocks Thread Factory. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
