"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const heroSlides = [
  {
    id: 1,
    title: "RROCKS THREAD FACTORY",
    subtitle: "Leading Manufacturer in India",
    description: "Feel the color of success",
    backgroundImage: "/final/hero1.png",
    thumbnail: "/final/hero1.png",
    alt: "RRocks Thread Factory Manufacturing Facility",
  },
  {
    id: 2,
    title: "MULTI-COLOR SOLUTIONS",
    subtitle: "Fashion Industry Excellence",
    description: "Rich colors and sizes",
    backgroundImage: "/final/hero4.jpg",
    thumbnail: "/final/hero4.jpg",
    alt: "Multi Color Solutions",
  },
  {
    id: 3,
    title: "MULTIPLE APPLICATIONS THREAD",
    subtitle: "Premium Leather Crafting Solutions",
    description: "Premium quality threads with international certifications",
    backgroundImage: "/final/hero3.jpg",
    thumbnail: "/final/hero3.jpg",
    alt: "Multiple Application Thread Wholesale",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (!isAutoplay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoplay])

  const changeSlide = (newSlide: number) => {
    if (newSlide === currentSlide || isAnimating) return

    setIsAnimating(true)
    setCurrentSlide(newSlide)
    setTimeout(() => setIsAnimating(false), 600)
  }

  const nextSlide = () => changeSlide((currentSlide + 1) % heroSlides.length)
  const prevSlide = () =>
    changeSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length)
  const goToSlide = (index: number) => changeSlide(index)

  return (
    <section className="relative w-full overflow-hidden">
      {/* Slides */}
      <div
        className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] xl:h-[90vh]"
        onMouseEnter={() => setIsAutoplay(false)}
        onMouseLeave={() => setIsAutoplay(true)}
      >
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Image */}
            <Image
              src={slide.backgroundImage}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === currentSlide}
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-12 lg:px-24">
              <h1 className="text-white text-2xl sm:text-3xl lg:text-5xl font-bold drop-shadow-lg">
                {slide.title}
              </h1>
              <h2 className="text-white text-lg sm:text-xl lg:text-2xl mt-2 drop-shadow-lg">
                {slide.subtitle}
              </h2>
              <p className="text-white text-sm sm:text-base lg:text-lg mt-2 max-w-lg drop-shadow-md">
                {slide.description}
              </p>
            </div>
          </div>
        ))}

        {/* Arrows */}
        <button
          onClick={prevSlide}
          disabled={isAnimating}
          className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/30 rounded-full hover:bg-black/50 text-white transition disabled:opacity-50"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/30 rounded-full hover:bg-black/50 text-white transition disabled:opacity-50"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2 lg:gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-colors duration-300 ${
                index === currentSlide ? "bg-blue-500" : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
