"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react"

export default function ContactPage() {
  const handleEmailClick = () => {
    window.open("mailto:contact@rrocksthread.com", "_blank")
  }

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919913592832", "_blank")
  }

  const handlePhoneClick = () => {
    window.open("tel:+919913592832", "_blank")
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 py-32">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-10 leading-tight">
              Get in <span className="text-blue-600">Touch</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed">
              Ready to discuss your thread requirements? We're here to help you find the perfect solution for your
              business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Contact Information</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Connect with us through any of the following channels. We're always ready to assist you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
            {/* Address */}
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-white group">
              <CardContent className="p-10 text-center">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl shadow-xl mx-auto mb-8 w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-6">Our Location</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  RRocks Thread Industries
                  <br />
                  Plot no. 6, Patel Nagar, AK Road
                  <br />
                  Surat, India 395008
                </p>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card
              className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer bg-gradient-to-br from-green-50 to-white group"
              onClick={handlePhoneClick}
            >
              <CardContent className="p-10 text-center">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-2xl shadow-xl mx-auto mb-8 w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-6">Phone Number</h3>
                <p className="text-gray-600 hover:text-green-600 transition-colors text-xl font-semibold">
                  +91 99135 92832
                </p>
                <p className="text-gray-500 text-sm mt-2">Click to call</p>
              </CardContent>
            </Card>

            {/* Email */}
            <Card
              className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer bg-gradient-to-br from-purple-50 to-white group"
              onClick={handleEmailClick}
            >
              <CardContent className="p-10 text-center">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-2xl shadow-xl mx-auto mb-8 w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-6">Email Address</h3>
                <p className="text-gray-600 hover:text-purple-600 transition-colors text-xl font-semibold">
                  contact@rrocksthread.com
                </p>
                <p className="text-gray-500 text-sm mt-2">Click to email</p>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card
              className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer bg-gradient-to-br from-emerald-50 to-white group"
              onClick={handleWhatsAppClick}
            >
              <CardContent className="p-10 text-center">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-6 rounded-2xl shadow-xl mx-auto mb-8 w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-6">WhatsApp</h3>
                <p className="text-gray-600 hover:text-emerald-600 transition-colors text-xl font-semibold">
                  +91 99135 92832
                </p>
                <p className="text-gray-500 text-sm mt-2">Click to chat</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Find Us on Map</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Visit our manufacturing facility to see our state-of-the-art thread production processes.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <Card className="overflow-hidden shadow-3xl border-0">
              <div className="relative h-[600px] md:h-[700px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14877.523578509199!2d72.84393383389525!3d21.21673937556197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fee9b91b1c5%3A0xf875fa3e31c63c2e!2sR%20Rocks%20Thread!5e0!3m2!1sen!2sin!4v1756970969949!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="RRocks Thread Industries Location"
                  className="w-full h-full"
                />

                {/* Custom Map Overlay */}
                {/* <div className="absolute top-8 left-8 bg-white p-8 rounded-3xl shadow-3xl max-w-sm border-l-6 border-l-blue-500">
                  <div className="flex items-center space-x-6">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl shadow-xl">
                      <MapPin className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl text-gray-900">RRocks Thread</h3>
                      <p className="text-gray-600 text-xl">Mumbai, Maharashtra</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Franchises Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Our Franchises
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                city: "Surat, India",
                desc: "Headquarters franchise and manufacturing center.",
              },
              {
                city: "Mumbai, India",
                desc: "Major hub for Western India's Textile Industry.",
              },
              {
                city: "Delhi, India",
                desc: "Central franchise serving North India.",
              },
              {
                city: "Bengaluru, India",
                desc: "Tech-driven franchise hub for South India.",
              },
              {
                city: "Chennai, India",
                desc: "Strategic franchise for textile and coastal operations.",
              },
              {
                city: "Kolkata, India",
                desc: "Franchise hub connecting Eastern India.",
              }
            ].map((franchise, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center"
              >
                <div className="flex justify-center mb-4">
                  <MapPin className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {franchise.city}
                </h3>
                <p className="text-gray-600 mt-2">{franchise.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
