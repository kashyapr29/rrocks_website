"use client"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect, useRef } from "react"
import { Factory, Users, Warehouse, TrendingUp } from "lucide-react"

const factoryStats = [
  {
    number: "15,000m²",
    label: "Plant Area",
    description: "Embroidery Thread: 100 tons/month",
    image: "/placeholder.svg?height=200&width=300",
    icon: Factory,
    color: "from-blue-500 to-blue-600",
  },
  {
    number: "200+",
    label: "Workers",
    description: "Sewing Thread: 70 tons/month",
    image: "/placeholder.svg?height=200&width=300",
    icon: Users,
    color: "from-green-500 to-green-600",
  },
  {
    number: "18+",
    label: "Franchise",
    description: "Weaving Yarn: 180 tons/month",
    image: "/placeholder.svg?height=200&width=300",
    icon: Warehouse,
    color: "from-purple-500 to-purple-600",
  },
]

export function FactorySection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedNumbers, setAnimatedNumbers] = useState([0, 0, 0])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate numbers
          factoryStats.forEach((stat, index) => {
            const target = Number.parseInt(stat.number.replace(/[^\d]/g, ""))
            let current = 0
            const increment = target / 50
            const timer = setInterval(() => {
              current += increment
              if (current >= target) {
                current = target
                clearInterval(timer)
              }
              setAnimatedNumbers((prev) => {
                const newNumbers = [...prev]
                newNumbers[index] = Math.floor(current)
                return newNumbers
              })
            }, 30)
          })
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
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-gray-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-200/20 rounded-full blur-2xl animate-float delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              R ROCKS Thread Factories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            State-of-the-art manufacturing facilities with cutting-edge technology and skilled workforce in India
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {factoryStats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card
                key={index}
                className={`overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border-0 bg-white/80 backdrop-blur-sm ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={stat.image || "/placeholder.svg"}
                    alt={stat.label}
                    width={300}
                    height={200}
                    className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} bg-opacity-80 flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-70`}
                  >
                    <div className="text-center text-white transform group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-12 h-12 mx-auto mb-4 opacity-80" />
                      <div className="text-4xl lg:text-5xl font-bold mb-2 drop-shadow-lg">
                        {stat.number.includes("m²")
                          ? `${animatedNumbers[index].toLocaleString()}m²`
                          : stat.number.includes("+")
                            ? `${animatedNumbers[index].toLocaleString()}+`
                            : stat.number}
                      </div>
                      <div className="text-lg font-medium opacity-90">{stat.label}</div>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                </div>

                <CardContent className="p-6 bg-gradient-to-br from-white to-gray-50">
                  <div className="text-center">
                    <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                      {stat.description}
                    </h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {[
            { label: "Years Experience", value: "20+" },
            { label: "Countries Served", value: "7+" },
            { label: "Quality Certifications", value: "5+" },
            { label: "Customer Satisfaction", value: "100%" },
          ].map((item, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:bg-white/80 transition-all duration-300"
            >
              <div className="text-2xl font-bold text-blue-600 mb-1">{item.value}</div>
              <div className="text-sm text-gray-600 font-medium">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
