import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowRight, CheckCircle, Star } from "lucide-react"

export default function SewingThreadPage() {
  const threadTypes = [
    {
      id: "spun-polyester",
      name: "Spun Polyester Thread",
      description:
        "High-strength synthetic thread made from polyester fibers, offering excellent durability, color retention, and resistance to shrinking and stretching.",
      image: "/spun-polyester-thread.png",
      features: ["Superior strength", "Colorfast", "Shrink resistant", "Versatile applications"],
      applications: ["Apparel manufacturing", "Home textiles", "Industrial sewing", "Automotive textiles"],
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Premium <span className="text-blue-600">Sewing Threads</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover our comprehensive range of high-quality sewing threads designed for professional and industrial
              applications. From durable polyester to natural cotton, we provide threads that meet the highest standards
              of quality and performance.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span>ISO Certified Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-blue-600" />
                <span>Premium Materials</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span>Global Supply</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thread Types Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Sewing Thread Collection</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our carefully curated selection of premium sewing threads, each designed for specific
              applications and performance requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {threadTypes.map((thread) => (
              <div
                key={thread.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Image Section */}
                <div className="relative h-64 bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
                  <img
                    src={thread.image || "/placeholder.svg"}
                    alt={thread.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {thread.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{thread.description}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {thread.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Applications</h4>
                    <div className="flex flex-wrap gap-2">
                      {thread.applications.map((app, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-200"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={`/sewing-thread/${thread.id}`}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 group-hover:shadow-lg transform group-hover:-translate-y-1"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Threads */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose RRocks Sewing Threads?</h2>
            <p className="text-lg text-gray-600 mb-12">
              With decades of experience in thread manufacturing, we deliver products that meet the most demanding
              quality standards.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                <p className="text-gray-600">
                  Every thread undergoes rigorous testing to ensure consistent quality and performance.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Materials</h3>
                <p className="text-gray-600">
                  We source only the finest raw materials to create threads that exceed expectations.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
                <p className="text-gray-600">
                  Global supply chain ensures quick delivery to meet your production schedules.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
