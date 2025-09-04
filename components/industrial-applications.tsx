"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function IndustrialApplications() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("industrial-applications")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const applications = [
    {
      title: "APPAREL",
      description: "High-quality threads for fashion and textile manufacturing with superior color fastness",
      image: "/final/apparel_shirt.png",
      icon: "👔",
      gradient: "from-blue-500/20 to-purple-500/20",
      href: "applications/apparel",
    },
    {
      title: "AUTOMOTIVE",
      description: "Specialized threads for automotive interior and safety applications meeting industry standards",
      image: "/final/automotive_main.jpg",
      icon: "🚗",
      gradient: "from-gray-500/20 to-slate-600/20",
      href: "applications/automotive",
    },
    {
      title: "SHOES & ACCESSORIES",
      description: "Durable threads for footwear and leather goods manufacturing with exceptional strength",
      image: "/final/accessories_main.jpg",
      icon: "👟",
      gradient: "from-amber-500/20 to-orange-500/20",
      href: "applications/shoes-accessories",
    },
    {
      title: "HOME INTERIOR",
      description: "Premium threads for furniture and home textile applications with luxurious finish",
      image: "/final/home_interior_main.jpg",
      icon: "🏠",
      gradient: "from-emerald-500/20 to-teal-500/20",
      href: "applications/home-interior",
    },
    {
      title: "EMBROIDERY",
      description: "Vibrant embroidery threads for decorative and artistic applications with brilliant shine",
      image: "/final/embroidery_main.jpg",
      icon: "🎨",
      gradient: "from-pink-500/20 to-rose-500/20",
      href: "applications/embroidery",
    },
    // TODO: Add fabric
  ]

  return (
    <section
      id="industrial-applications"
      className="relative py-24 bg-gradient-to-br from-white via-blue-50/30 to-white overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-100/40 to-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-100/20 to-transparent rounded-full blur-2xl animate-spin-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Industrial Excellence
          </div>

          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-blue-600 bg-clip-text text-transparent mb-8 leading-tight">
            Industrial sewing & embroidery threads for all kind of applications
          </h2>

          <div className="relative">
            <p className="text-2xl text-gray-600 mb-12 max-w-4xl mx-auto font-light">
              From Apparel to Shoes & Accessories to the Automotive sector
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
          </div>

          <div className="max-w-6xl mx-auto text-gray-700 leading-relaxed space-y-6 bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100/50">
            <p className="text-xl font-medium">
              <strong className="text-blue-600 text-2xl">RRocks Thread</strong> is globally well-known for its
              high-quality sewing and embroidery threads, which are used across numerous industries.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <p className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  In the textile and fashion industry, our products ensure perfect seams and creative embroideries.
                </p>
                <p className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  For the automotive industry, we offer{" "}
                  <span className="text-blue-600 font-semibold">specialized threads</span> that meet the high standards
                  of safety and durability.
                </p>
              </div>
              <div className="space-y-3">
                <p className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  Additionally, in the field of workwear, our robust and reliable threads contribute to the production
                  of high-quality protective clothing.
                </p>
                <p className="flex items-start gap-3 font-semibold">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  Thanks to the diversity of our products and their superior quality, we are the ideal partner for
                  various industrial applications worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <Link
              key={app.title}
              href={app.href}
              className={`group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-[1.02] hover:-translate-y-2 cursor-pointer block ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
                aspectRatio: "16/11",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute inset-0">
                <img
                  src={app.image || "/placeholder.svg"}
                  alt={app.title}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500"></div>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${app.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/0 group-hover:from-black/80 via-transparent to-transparent transition-all duration-500"></div>
              </div>

              <div className="relative z-10 h-full flex flex-col justify-center items-center p-8">
                <div className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg transform transition-all duration-500 group-hover:scale-105 group-hover:bg-black/60">
                  <h3 className="text-lg font-bold text-white tracking-wide text-center">{app.title}</h3>
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-400/50 transition-all duration-500"></div>

              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-400/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-400/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300"></div>
            </Link>
          ))}
        </div>

        <div
          className={`text-center mt-20 transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 animate-pulse"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Production?</h3>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Discover how our premium thread solutions can elevate your manufacturing processes across all
                industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/embroidery-thread/polyester" passHref>
                  <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-3 group">
                    <span>Explore Our Thread Solutions</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </Link>
                <Link href="/contact" passHref>
                  <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                    Request Samples
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  )
}
