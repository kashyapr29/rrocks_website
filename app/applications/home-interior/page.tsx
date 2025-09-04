import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowRight, Feather, Sparkles, Shield } from "lucide-react"

export default function HomeInteriorPage() {
  const features = [
    { title: "Elegant Finish", description: "Premium look for upholstery and drapery seams.", icon: Sparkles },
    { title: "Soft & Quiet", description: "Smooth run with minimal noise on high‑speed machines.", icon: Feather },
    { title: "Fade Resistance", description: "Maintains color under indoor light exposure.", icon: Shield },
    { title: "Durable Seams", description: "Strong stitches for everyday use textiles.", icon: Shield },
  ]

  const applications = [
    "Sofas & Upholstery",
    "Curtains & Drapes",
    "Bedding & Quilts",
    "Cushions & Pillows",
    "Table Linen",
    "Decorative Embroidery",
  ]

  const recommended = [
    {
      title: "Polyester Embroidery Thread",
      description:
        "High sheen, strong, colorfast – perfect for logos and decorative seams.",
      image: "/final/application/polyster.jpg",
      href: "/embroidery-thread/polyester",
    },
    {
      title: "Viscose Embroidery Thread",
      description: "Premium lustre and drape for luxury apparel embroidery.",
      image: "/final/application/viscos1.jpg",
      href: "/embroidery-thread/viscose",
    },
    {
      title: "German Embroidery Thread",
      description: "All‑purpose apparel thread with excellent seam strength.",
      image: "/final/application/german.jpg",
      href: "/embroidery-thread/german",
    },
    {
      title: "Multi-Color Embroidery Thread",
      description:
        "Vibrant, variegated shades that create unique multitone embroidery effects.",
      image: "/final/application/multi.jpg",
      href: "/embroidery-thread/multi-color",
    },
  ];
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Home Interior <span className="text-blue-600">Applications</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Premium threads for furniture and home textiles offering a refined finish, dependable strength, and
              excellent color retention.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6">
                <feature.icon className="w-6 h-6 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Thread Applications in Home Interior</h2>
            <p className="text-lg text-gray-600">See how our threads enhance home textile manufacturing</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="/final/home_interior_sofa.jpg"
                alt="Sofa upholstery stitching with thread cone"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sofas & Upholstery</h3>
                <p className="text-gray-600">Premium threads for durable and elegant furniture seams</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="/final/home_interior_bed.png"
                alt="Bedding quilting with thread cone"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Bedding & Quilts</h3>
                <p className="text-gray-600">Soft threads for comfortable and durable bedding construction</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="/final/home_interior_cushion.png"
                alt="Cushion stitching with thread cone"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cushions & Pillows</h3>
                <p className="text-gray-600">Decorative threads for accent pillows and cushion covers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Where It's Used</h2>
            <p className="text-gray-600 mb-6">From upholstery to delicate drapery and décor accents.</p>
            <div className="flex flex-wrap gap-3">
              {applications.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm border border-blue-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Threads */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">
              Recommended Threads
            </h2>
            <p className="text-lg text-gray-600">
              Select the perfect balance of beauty and durability.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {recommended.map((card) => (
              <div
                key={card.title}
                className="group bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={card.image || "/placeholder.svg"}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {card.description}
                  </p>
                  <Link
                    href={card.href}
                    className="inline-flex items-center text-blue-600 font-medium group/btn"
                  >
                    View Details
                    <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h3 className="text-3xl font-bold mb-3">Create elegant interiors</h3>
            <p className="text-blue-100 mb-6">Consult with our team or request sample cards for selection.</p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                Contact Sales
              </Link>
              <Link
                href="/quality"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
              >
                Quality & Testing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
