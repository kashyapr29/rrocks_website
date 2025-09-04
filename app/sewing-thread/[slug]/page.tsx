import Header from "@/components/header"
import Footer from "@/components/footer"
import { Download, CheckCircle, Package, Truck, Award, Star, Shield, Zap } from "lucide-react"
import { notFound } from "next/navigation"

// Thread data structure
const threadData = {
  "spun-polyester": {
    name: "Spun Polyester Thread",
    heroTitle: "SPUN POLYESTER\nSEWING\nTHREAD",
    heroImage: "/images/industrial-machines-hero.jpg",
    heroGradient: "from-blue-600 via-blue-700 to-blue-800",
    description:
      "Premium spun polyester thread made from high-quality polyester fibers, offering exceptional strength, durability, and color retention for professional sewing applications.",

    features: [
      "High tensile strength and durability for industrial applications",
      "Excellent color fastness and UV resistance for long-lasting performance",
      "Superior abrasion resistance for high-speed sewing operations",
      "Consistent quality and uniform thickness throughout production",
      "Available in wide range of colors and sizes for versatile applications",
      "Chemical resistance for various cleaning and finishing processes",
      "Heat resistance suitable for commercial laundering requirements",
      "Low shrinkage properties maintaining garment integrity",
    ],

    whyChoose: {
      title: "Why Choose MH Thread?",
      subtitle: "Superior quality and performance for all your sewing needs",
      features: [
        {
          icon: "quality",
          title: "Premium Quality",
          description: "ISO certified manufacturing with rigorous quality control",
        },
        {
          icon: "strength",
          title: "High Strength",
          description: "Superior tensile strength for demanding applications",
        },
        {
          icon: "colors",
          title: "Color Variety",
          description: "Wide range of colors with excellent fastness properties",
        },
      ],
    },

    productShowcase: [
      {
        title: "Spun Polyester Thread - Blue",
        image: "/blue-spun-polyester-thread-cone.png",
        colors: ["#1E40AF", "#3B82F6", "#60A5FA"],
      },
      {
        title: "Spun Polyester Thread - Red",
        image: "/red-spun-polyester-thread-cone.png",
        colors: ["#DC2626", "#EF4444", "#F87171"],
      },
      {
        title: "Spun Polyester Thread - Green",
        image: "/green-spun-polyester-thread-cone.png",
        colors: ["#059669", "#10B981", "#34D399"],
      },
      {
        title: "Spun Polyester Thread - Yellow",
        image: "/yellow-spun-polyester-thread-cone.png",
        colors: ["#D97706", "#F59E0B", "#FBBF24"],
      },
      {
        title: "Spun Polyester Thread - Purple",
        image: "/purple-spun-polyester-thread-cone.png",
        colors: ["#7C3AED", "#8B5CF6", "#A78BFA"],
      },
      {
        title: "Spun Polyester Thread - Orange",
        image: "/orange-spun-polyester-thread-cone.png",
        colors: ["#EA580C", "#F97316", "#FB923C"],
      },
    ],

    material: "100% Spun Polyester",
    specifications: "20s/2, 30s/2, 40s/2, 50s/2, 60s/2 etc.",

    technicalData: [
      {
        tex: "T7",
        yarnCount: "Ne 120/2",
        avgStrength: "870 cN",
        avgElongation: "7%",
        needleSize: "12-14",
        boilingWater: "75-90°C",
        shrinkage: "<1.0%",
      },
      {
        tex: "T20",
        yarnCount: "30/2",
        avgStrength: "1200 cN",
        avgElongation: "7%",
        needleSize: "16-18",
        boilingWater: "100-120°C",
        shrinkage: "<1.0%",
      },
      {
        tex: "T40",
        yarnCount: "40/3",
        avgStrength: "1100 cN",
        avgElongation: "7%",
        needleSize: "12-14",
        boilingWater: "75-90°C",
        shrinkage: "<1.0%",
      },
      {
        tex: "T60",
        yarnCount: "20/2",
        avgStrength: "1200 cN",
        avgElongation: "7%",
        needleSize: "16-18",
        boilingWater: "100-120°C",
        shrinkage: "<1.0%",
      },
      {
        tex: "T90",
        yarnCount: "20/3",
        avgStrength: "1900 cN",
        avgElongation: "8.5%",
        needleSize: "18-21",
        boilingWater: "110-130°C",
        shrinkage: "<1.0%",
      },
    ],

    colorChart: {
      title: "Customize Polyester Thread Colors",
      description:
        "We offer a wide range of colors to meet your specific requirements. Our color matching service ensures perfect consistency across all your orders.",
      image: "/polyester-thread-color-chart-with-multiple-color-s.png",
    },

    threadSpecs: {
      title: "Customize Polyester Thread Specification",
      description:
        "Our spun polyester threads are available in various specifications to meet different application requirements.",
      products: [
        {
          name: "Standard Weight",
          image: "/blue-polyester-thread-cone.png",
          specs: ["T20-T40", "General Purpose", "5000m/cone"],
        },
        {
          name: "Heavy Duty",
          image: "/yellow-polyester-thread-cone.png",
          specs: ["T60-T90", "Industrial Use", "3000m/cone"],
        },
        {
          name: "Fine Weight",
          image: "/green-polyester-thread-cone.png",
          specs: ["T7-T15", "Delicate Work", "8000m/cone"],
        },
        {
          name: "Multi-Purpose",
          image: "/red-polyester-thread-cone.png",
          specs: ["T25-T50", "Versatile", "4000m/cone"],
        },
        {
          name: "Premium Quality",
          image: "/purple-polyester-thread-cone.png",
          specs: ["All Weights", "Top Grade", "Variable"],
        },
      ],
    },

    applications: [
      { tex: "T7", count: "Ne 120/2", application: "Light Weight Garments" },
      { tex: "T20", count: "30/2", application: "Medium Weight Fabrics" },
      { tex: "T40", count: "40/3", application: "Heavy Duty Applications" },
      { tex: "T60", count: "20/2", application: "Industrial Sewing" },
      { tex: "T90", count: "20/3", application: "Extra Heavy Materials" },
    ],

    packingOptions: [
      "2000m/cone - 5000m/cone, 0.5 kg/cone, 2 kg/cone",
      "6015-A-5G2, 5000m/tube - Standard industrial packaging",
      "6015-B-4G2, 4000m/tube - Medium capacity option",
      "6015-C-4G2, 5000m/tube - High capacity standard",
      "6015-D-4G2, 3000m/tube - Compact professional size",
      "6015-E-4G2, 2500m/cone - Small batch production",
      "6015-F-4G2, 1000m/tube - Sample and testing size",
      "6015-G-2G2, 5000m/cone - Premium packaging",
      "6015-H-4G2, 3000m/cone - Standard commercial size",
      "6015-I-4G2, 2000m/cone - Entry level professional",
    ],

    packingImages: {
      title: "Customize Polyester Thread Packing and Labels",
      description: "We offer flexible packaging options and custom labeling to meet your specific requirements.",
      images: [
        {
          title: "Standard Packaging",
          image: "/polyester-thread-packaging-boxes-and-cones.png",
        },
        {
          title: "Custom Labels",
          image: "/custom-thread-labels-and-branding.png",
        },
      ],
    },

    catalogPath: "/catalogs/spun-polyester-thread-catalog.pdf",
    colorChart: "/spun-polyester-color-chart.png",
    packingImage: "/spun-polyester-packing.png",
  },
}

export default async function SewingThreadProductPage({
  params,
}: {
  params: { slug: string }
}) {
  const resolvedParams = await params
  const thread = threadData[resolvedParams.slug as keyof typeof threadData]

  if (!thread) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={thread.heroImage || "/placeholder.svg"}
            alt="Industrial sewing machines"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-blue-700/60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              SPUN POLYESTER
              <br />
              SEWING THREAD
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
              Premium quality threads for professional and industrial applications
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Our Polyester Sewing Thread</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                {thread.description} Our manufacturing process ensures consistent quality and performance across all
                thread weights and colors, making it the preferred choice for professional garment manufacturers,
                industrial applications, and high-volume production facilities worldwide.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features & Benefits</h3>
                <ul className="space-y-4">
                  {thread.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <img
                  src="/industrial-sewing-thread-production-facility.png"
                  alt="Thread production facility"
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">{thread.whyChoose.title}</h2>
            <p className="text-xl mb-12 opacity-90">{thread.whyChoose.subtitle}</p>

            <div className="grid md:grid-cols-3 gap-8">
              {thread.whyChoose.features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20">
                    {feature.icon === "quality" && <Award className="w-10 h-10" />}
                    {feature.icon === "strength" && <Zap className="w-10 h-10" />}
                    {feature.icon === "colors" && <Star className="w-10 h-10" />}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="opacity-90 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Thread Collection</h2>
              <p className="text-lg text-gray-600">
                Available in a wide range of colors and specifications to meet all your sewing needs
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {thread.productShowcase.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 p-6">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">{product.title}</h3>
                    <div className="flex gap-2">
                      {product.colors.map((color, colorIndex) => (
                        <div
                          key={colorIndex}
                          className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{thread.colorChart.title}</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">{thread.colorChart.description}</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <img
                src={thread.colorChart.image || "/placeholder.svg"}
                alt="Color chart"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{thread.threadSpecs.title}</h2>
              <p className="text-lg text-gray-600">{thread.threadSpecs.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {thread.threadSpecs.products.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-20 h-20 mx-auto mb-4 object-contain"
                  />
                  <h3 className="font-semibold text-gray-900 mb-3">{product.name}</h3>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {product.specs.map((spec, specIndex) => (
                      <li key={specIndex}>{spec}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Technical Specifications</h2>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-7xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Tex</th>
                    <th className="px-6 py-4 text-left font-semibold">Yarn Count</th>
                    <th className="px-6 py-4 text-left font-semibold">Average Strength</th>
                    <th className="px-6 py-4 text-left font-semibold">Average Elongation</th>
                    <th className="px-6 py-4 text-left font-semibold">Recommended Needle Size</th>
                    <th className="px-6 py-4 text-left font-semibold">Boiling Water Shrinkage</th>
                    <th className="px-6 py-4 text-left font-semibold">Shrinkage %</th>
                  </tr>
                </thead>
                <tbody>
                  {thread.technicalData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-blue-50" : "bg-white"}>
                      <td className="px-6 py-4 font-medium text-blue-600">{row.tex}</td>
                      <td className="px-6 py-4 text-gray-700">{row.yarnCount}</td>
                      <td className="px-6 py-4 text-gray-700">{row.avgStrength}</td>
                      <td className="px-6 py-4 text-gray-700">{row.avgElongation}</td>
                      <td className="px-6 py-4 text-gray-700">{row.needleSize}</td>
                      <td className="px-6 py-4 text-gray-700">{row.boilingWater}</td>
                      <td className="px-6 py-4 text-gray-700">{row.shrinkage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Application Guidelines</h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Tex</th>
                      <th className="px-6 py-4 text-left font-semibold">Cotton Count</th>
                      <th className="px-6 py-4 text-left font-semibold">Application</th>
                    </tr>
                  </thead>
                  <tbody>
                    {thread.applications.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-blue-50" : "bg-white"}>
                        <td className="px-6 py-4 font-medium text-blue-600">{row.tex}</td>
                        <td className="px-6 py-4 text-gray-700">{row.count}</td>
                        <td className="px-6 py-4 text-gray-700">{row.application}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Thread applications"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Packaging Options</h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Available Packaging</h3>
              <ul className="space-y-3">
                {thread.packingOptions.map((option, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Package className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{option}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Thread packaging options"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{thread.packingImages.title}</h2>
              <p className="text-lg text-gray-600">{thread.packingImages.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {thread.packingImages.images.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Download Product Resources</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get detailed specifications, color charts, and technical information in our comprehensive resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={thread.catalogPath}
                download
                className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Download className="w-5 h-5" />
                Download Catalog PDF
              </a>
              <a
                href={thread.colorChart}
                download
                className="inline-flex items-center gap-3 bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Download className="w-5 h-5" />
                Color Chart
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Quality Assurance & Certifications</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
                <Award className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">ISO Certified</h3>
                <p className="text-gray-600 leading-relaxed">
                  All products meet international quality standards with comprehensive testing and certification
                  processes.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
                <Shield className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Testing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Rigorous testing ensures consistent performance, strength, and color fastness across all batches.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
                <Truck className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Global Delivery</h3>
                <p className="text-gray-600 leading-relaxed">
                  Worldwide shipping with reliable logistics and packaging to ensure product integrity during transport.
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
