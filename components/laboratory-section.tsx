"use client"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { Award, CheckCircle, Microscope, Shield } from "lucide-react"

const certifications = [
  { name: "CNAS Accredited", icon: Award },
  { name: "ISO 9001:2015", icon: CheckCircle },
  { name: "Advanced Testing", icon: Microscope },
  { name: "Quality Assured", icon: Shield },
]

export function LaboratorySection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`relative group transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/placeholder.svg?height=500&width=1200"
              alt="Laboratory Accredited by CNAS for Testing"
              width={1200}
              height={500}
              className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

            {/* Content overlay */}
            <div className="absolute inset-0 flex items-center">
              <div className="w-full px-8 md:px-16">
                <div className="max-w-2xl">
                  <h2
                    className={`text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight transform transition-all duration-1000 delay-300 ${
                      isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                    }`}
                  >
                    Laboratory Accredited by{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      CNAS
                    </span>{" "}
                    for Testing
                  </h2>

                  <p
                    className={`text-xl text-gray-200 mb-8 leading-relaxed transform transition-all duration-1000 delay-500 ${
                      isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                    }`}
                  >
                    State-of-the-art testing facilities ensuring the highest quality standards for all our thread
                    products
                  </p>

                  <div
                    className={`grid grid-cols-2 md:grid-cols-4 gap-4 transform transition-all duration-1000 delay-700 ${
                      isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                    }`}
                  >
                    {certifications.map((cert, index) => {
                      const IconComponent = cert.icon
                      return (
                        <div
                          key={index}
                          className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <IconComponent className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                          <div className="text-white text-sm font-medium">{cert.name}</div>
                        </div>
                      )
                    })}
                  </div>

                  <div
                    className={`mt-8 transform transition-all duration-1000 delay-900 ${
                      isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                    }`}
                  >
                    <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2">
                      <Microscope className="w-5 h-5" />
                      View Testing Capabilities
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-8 right-8 space-y-3">
              {["99.9% Accuracy", "ISO Certified", "24/7 Testing"].map((text, index) => (
                <div
                  key={index}
                  className={`bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-medium shadow-lg transform transition-all duration-1000 ${
                    isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${800 + index * 200}ms` }}
                >
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
