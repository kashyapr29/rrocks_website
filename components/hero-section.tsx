"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const heroSlides = [
  {
    id: 1,
    title: "RROCKS THREAD FACTORY",
    subtitle: "Leading Manufacturer in India",
    description:
      "Feel the color of success",
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
  const [currentSlide, setCurrentSlide] = useState(1)
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

  const nextSlide = () => {
    const newSlide = (currentSlide + 1) % heroSlides.length
    changeSlide(newSlide)
  }

  const prevSlide = () => {
    const newSlide = (currentSlide - 1 + heroSlides.length) % heroSlides.length
    changeSlide(newSlide)
  }

  const goToSlide = (index: number) => {
    changeSlide(index)
  }

  const currentHero = heroSlides[currentSlide]

  return (
    <section className="relative bg-white overflow-hidden" style={{ minHeight: "300px", maxHeight: "700px" }}>
      <div
        className="relative w-full h-full overflow-hidden"
        style={{ aspectRatio: "16 / 9", minHeight: "300px", maxHeight: "700px" }}
        onMouseEnter={() => setIsAutoplay(false)}
        onMouseLeave={() => setIsAutoplay(true)}
      >
        {/* Slideshow Items */}
        <div className="relative w-full h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* Background Image */}
              <Image
                src={slide.backgroundImage || "/placeholder.svg"}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === currentSlide}
              />

              {/* Top-left Title & Description */}
              <div className="absolute top-8 left-8 flex flex-col items-start justify-start px-4">
                <div className="px-6 py-4 text-left max-w-xl w-full">
                  <h1 className="text-white text-2xl sm:text-3xl font-bold mb-2 drop-shadow">
                    {slide.title}
                  </h1>
                  <p className="text-white text-base sm:text-lg truncate">
                    {slide.description.split('\n')[0]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows - Hidden on mobile and tablet, visible on desktop */}
        <div className="hidden lg:block">
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute left-4 xl:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/20 hover:bg-black/40 text-white transition-all duration-200 group disabled:opacity-50"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute right-4 xl:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/20 hover:bg-black/40 text-white transition-all duration-200 group disabled:opacity-50"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Thumbnail Navigation - Hidden on mobile and tablet, visible on desktop */}
        <div className="hidden lg:block absolute bottom-4 xl:bottom-8 left-1/2 -translate-x-1/2 z-20">
          <ul className="flex gap-2">
            {heroSlides.map((slide, index) => (
              <li key={slide.id}>
                <button
                  onClick={() => goToSlide(index)}
                  className={`block overflow-hidden rounded transition-all duration-200 ${
                    index === currentSlide ? "ring-2 ring-blue-500 ring-offset-2" : "hover:ring-2 hover:ring-white/50"
                  }`}
                  aria-label={`Slide ${index + 1}`}
                >
                  <Image
                    src={slide.thumbnail || "/placeholder.svg"}
                    alt={slide.alt}
                    width={150}
                    height={55}
                    className="w-[120px] h-[44px] sm:w-[150px] sm:h-[55px] lg:w-[200px] lg:h-[73px] object-cover"
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:hidden absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
          <div className="flex gap-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-200 ${
                  index === currentSlide ? "bg-blue-500" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
