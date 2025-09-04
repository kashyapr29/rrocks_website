"use client"
import Image from "next/image"
import Link from "next/link";
import { useState, useEffect, useRef } from "react"

const defaultProductCategories = [
  {
    title: "Spun Polyester Sewing Thread",
    image: "/final/polyster/blue1.jpg",
        colors: ["#282C60", "#2230C0", "#2050E0"],
  },
  {
    title: "Core Spun Sewing Thread",
    image: "/final/polyster/red.jpg",
        colors: ["#962544", "#DE2F5B", "#EF70B1"],
  },
  {
    title: "Rayon Embroidery Thread",
    image: "/final/polyster/orange.jpg",
        colors: ["#F57C00", "#FF8C00", "#FA8800"],
  },
  {
    title: "Polyester Embroidery Thread",
    image: "/final/polyster/mendi.jpg",
        colors: ["#5B952E", "#66A37F", "#93B470"],
  },
]

interface ProductCategory {
  title?: string;
  image: string;
  colors: string[];
}

interface ProductShowcaseProps {
  productCategories?: ProductCategory[];
}

export function ProductShowcase({ productCategories = defaultProductCategories }: ProductShowcaseProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-blue-100/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Product Showcase
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of premium threads designed for every application
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {productCategories.map((product, index) => (
            <div
              key={index}
              className={`overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-[1.02] shadow-lg hover:shadow-2xl rounded-lg ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-80 rounded-lg">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title ?? "Untitled Product"}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 rounded-lg"
                />

                <div className="absolute top-6 left-6">
                  <h3 className="font-bold text-white text-2xl drop-shadow-lg">{product.title}</h3>
                </div>

                <div className="absolute bottom-6 left-6 flex gap-3">
                  {product.colors.map((color, colorIndex) => (
                    <div
                      key={colorIndex}
                      className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm p-1 shadow-lg transform group-hover:scale-110 transition-all duration-200"
                    >
                      <div className="w-full h-full rounded-full shadow-inner" style={{ backgroundColor: color }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-20 text-center transform transition-all duration-1000 delay-800 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-xl mb-8 opacity-90">
                Contact us today for custom thread solutions tailored to your needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" passHref>
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  Request Quote
                </button>
                </Link>
                {/* <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
                  Download Catalog
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
