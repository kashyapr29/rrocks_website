"use client"
import Link from "next/link"
import { ChevronDown, Globe, Search, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = {
    Products: {
      "Embroidery Thread": [
        {
          name: "Polyester Embroidery Thread",
          href: "/embroidery-thread/polyester",
          icon: "/blue-thread-cone-icon.png",
        },
        {
          name: "Viscose Embroidery Thread",
          href: "/embroidery-thread/viscose",
          icon: "/red-thread-cone-icon.png",
        },
        {
          name: "Multi-Color Thread",
          href: "/embroidery-thread/multi-color",
          icon: "/multicolor-thread-cone-icon.png",
        },
        {
          name: "German Embroidery Thread",
          href: "/embroidery-thread/german",
          icon: "/german-thread-cone-icon.png",
        },
      ],
      // TODO: Add Sewing Thread Category
      // "Sewing Thread": [
      //   {
      //     name: "Spun Polyester Thread",
      //     href: "/sewing-thread/spun-polyester",
      //     icon: "/green-thread-cone-icon.png",
      //   },
      // ],
      Yarn: [
        {
          name: "Weaving Yarn",
          href: "/yarn/weaving",
          icon: "/yarn-cone-icon.png",
        },
      ],
    },
    Applications: [
      {
        name: "Apparel",
        href: "/applications/apparel",
        icon: "/apparel-icon.png",
      },
      {
        name: "Automotive",
        href: "/applications/automotive",
        icon: "/automotive-icon.png",
      },
      {
        name: "Embroidery",
        href: "/applications/embroidery",
        icon: "/embroidery-icon.png",
      },
      {
        name: "Home-Interior",
        href: "/applications/home-interior",
        icon: "/home-interior-icon.png",
      },
      {
        name: "Shoes-Accessories",
        href: "/applications/shoes-accessories",
        icon: "/shoes-accessories-icon.png",
      },
      // TODO: Add fabric
    ],
  }

  const renderDropdownMenu = (menuKey: string, menuItems: any[]) => (
    <div
      className="relative group"
      onMouseEnter={() => setHoveredMenu(menuKey)}
      onMouseLeave={() => setHoveredMenu(null)}
    >
      <button className="flex items-center gap-1 hover:text-blue-600 transition-colors duration-200 group py-2 px-2 rounded-lg hover:bg-blue-50">
        {menuKey} <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
      </button>

      {hoveredMenu === menuKey && (
        <div className="absolute top-full left-0 mt-1 w-72 bg-white/98 backdrop-blur-md shadow-2xl rounded-xl border border-blue-100 z-50 animate-in slide-in-from-top-2 duration-200 overflow-hidden">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center gap-3 px-6 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-700 transition-all duration-200 border-b border-blue-50 last:border-b-0 font-medium text-sm hover:pl-8"
            >
              {/* <img
                src={item.icon || "/placeholder.svg"}
                alt={item.name}
                className="w-6 h-6 object-contain flex-shrink-0"
              /> */}
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  )

  const renderProductsDropdownMenu = () => (
    <div
      className="relative group"
      onMouseEnter={() => setHoveredMenu("Products")}
      onMouseLeave={() => setHoveredMenu(null)}
    >
      <button className="flex items-center gap-1 hover:text-blue-600 transition-colors duration-200 group py-2 px-2 rounded-lg hover:bg-blue-50">
        Products <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
      </button>
      {hoveredMenu === "Products" && (
        <div className="absolute top-full left-0 mt-1 w-80 bg-white/98 backdrop-blur-md shadow-2xl rounded-xl border border-blue-100 z-50 animate-in slide-in-from-top-2 duration-200 overflow-hidden">
          {Object.entries(menuItems.Products).map(([subKey, subItems]) => (
            <div key={subKey}>
              <div className="px-6 py-2 font-semibold text-blue-700 bg-blue-50">{subKey}</div>
              {subItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="flex items-center gap-3 px-8 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-700 transition-all duration-200 border-b border-blue-50 last:border-b-0 text-sm hover:pl-10"
                >
                  {/* <img
                    src={item.icon || "/placeholder.svg"}
                    alt={item.name}
                    className="w-5 h-5 object-contain flex-shrink-0"
                  /> */}
                  {item.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  )

  // Mobile dropdown for Products

  const renderMobileDropdownMenu = (menuKey: string, menuItems: any[]) => (
    <div className="w-full">
      <button
        className="w-full flex items-center justify-between py-4 px-4 rounded-lg hover:bg-blue-100 transition-all duration-200 text-base font-medium text-left"
        onClick={() => setMobileDropdownOpen(mobileDropdownOpen === menuKey ? null : menuKey)}
      >
        {menuKey}
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-200 ${mobileDropdownOpen === menuKey ? "rotate-180" : ""}`}
        />
      </button>

      {mobileDropdownOpen === menuKey && (
        <div className="ml-4 mt-2 space-y-1 animate-in slide-in-from-top-2 duration-200">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center gap-3 py-3 px-6 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 text-sm border-l-2 border-blue-200 hover:border-blue-400 ml-2"
              onClick={() => {
                setIsMobileMenuOpen(false)
                setMobileDropdownOpen(null)
              }}
            >
              {/* <img
                src={item.icon || "/placeholder.svg"}
                alt={item.name}
                className="w-5 h-5 object-contain flex-shrink-0"
              /> */}
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  )

  const renderMobileProductsDropdownMenu = () => (
    <div className="w-full">
      <button
        className="w-full flex items-center justify-between py-4 px-4 rounded-lg hover:bg-blue-100 transition-all duration-200 text-base font-medium text-left"
        onClick={() => setMobileDropdownOpen(mobileDropdownOpen === "Products" ? null : "Products")}
      >
        Products
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-200 ${
            mobileDropdownOpen === "Products" ? "rotate-180" : ""
          }`}
        />
      </button>
      {mobileDropdownOpen === "Products" && (
        <div className="ml-4 mt-2 space-y-1 animate-in slide-in-from-top-2 duration-200">
          {Object.entries(menuItems.Products).map(([subKey, subItems]) => (
            <div key={subKey}>
              <div className="py-2 px-6 font-semibold text-blue-700">{subKey}</div>
              {subItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="flex items-center gap-3 py-3 px-8 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 text-sm border-l-2 border-blue-200 hover:border-blue-400 ml-2"
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    setMobileDropdownOpen(null)
                  }}
                >
                  {/* <img
                    src={item.icon || "/placeholder.svg"}
                    alt={item.name}
                    className="w-4 h-4 object-contain flex-shrink-0"
                  /> */}
                  {item.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  )

  return (
    <>
      {/* Top Info Bar - Not Fixed */}
      <div
        className={`bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 py-2 transition-all duration-300 ${
          isScrolled ? "py-1" : "py-2"
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-2 sm:gap-6 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-all duration-200 hover:scale-105">
            <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
            <a
              href="https://wa.me/919913592832"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center sm:text-left underline hover:no-underline"
            >
              WhatsApp: +91 9913592832
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar - Fixed */}
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white shadow-sm"
        }`}
      >
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="px-4 py-2 sm:px-6 sm:py-3">
                <img
                  src="/final/rrocks_logo.png"
                  alt="R ROCKS Logo"
                  className="h-8 sm:h-10 w-auto object-contain"
                />
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <Link href="/" className="text-blue-600 font-medium relative group py-2">
                Home
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600"></span>
              </Link>

              {renderProductsDropdownMenu()}
              {renderDropdownMenu("Applications", menuItems.Applications)}

              {["Markets", "Quality", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="hover:text-blue-600 transition-all duration-200 relative group py-2 hover:scale-105"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            <Button
              variant="outline"
              className="lg:hidden bg-transparent border-2 border-blue-300 hover:bg-blue-50 hover:border-blue-500 transition-all duration-200 hover:scale-105 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-blue-600" /> : <Menu className="w-5 h-5 text-blue-600" />}
            </Button>
          </div>

          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 py-4 border-t-2 border-blue-200 animate-in slide-in-from-top-2 duration-300 bg-gradient-to-b from-blue-50 to-white rounded-lg max-h-96 overflow-y-auto">
              <nav className="flex flex-col space-y-1">
                <Link
                  href="/"
                  className="text-blue-600 font-medium py-4 px-4 rounded-lg hover:bg-blue-100 transition-all duration-200 border-l-4 border-blue-600 text-base"
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    setMobileDropdownOpen(null)
                  }}
                >
                  Home
                </Link>

                {renderMobileProductsDropdownMenu()}
                {renderMobileDropdownMenu("Applications", menuItems.Applications)}

                {["Markets", "Applications", "Quality", "About", "Blog", "Contact"].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="py-4 px-4 rounded-lg hover:bg-blue-100 transition-all duration-200 hover:border-l-4 hover:border-blue-400 text-base"
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                      setMobileDropdownOpen(null)
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}

export default Header
