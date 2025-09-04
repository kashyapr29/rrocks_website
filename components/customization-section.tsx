"use client"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect, useRef } from "react"

const customizationServices = [
  {
    title: "Material Customization",
    description: "Premium materials tailored to your specific requirements",
    image: "https://www.mhthread.com/images/customization-services-01.jpg",
  },
  {
    title: "Yarn Count Customization",
    description: "Precise yarn specifications for optimal performance",
    image: "https://www.mhthread.com/images/customization-services-02.jpg",
  },
  {
    title: "Color Customization",
    description: "Unlimited color options with digital matching technology",
    image: "/final/color_customize.jpg",
  },
  {
    title: "Packing Customization",
    description: "Custom packaging solutions for your brand needs",
    image: "/final/box_packing.png",
  },
]

export function CustomizationSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Customization Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tailored solutions to meet your exact specifications with our comprehensive customization capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {customizationServices.map((service, index) => (
            <Card
              key={index}
              className={`overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 border border-gray-200 bg-white shadow-md hover:shadow-xl ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden h-64">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-all duration-300"></div>
              </div>

              <CardContent className="p-6 bg-white">
                <div className="text-center space-y-3">
                  <h3 className="font-semibold text-xl text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                  <div className="w-12 h-1 bg-blue-500 mx-auto rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className={`mt-20 transform transition-all duration-1000 delay-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Customization Process</h3>
            <p className="text-gray-600">From concept to delivery in 4 simple steps</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Consultation", desc: "Discuss your requirements" },
              { step: "02", title: "Design", desc: "Create custom specifications" },
              { step: "03", title: "Production", desc: "Manufacture to perfection" },
              { step: "04", title: "Delivery", desc: "Quality assured delivery" },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 shadow-lg">
                  {item.step}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-blue-400 transform -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
