// TODO: use this fabric page
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  ThermometerSun,
  Atom,
  Layers,
} from "lucide-react";

export default function FabricsPage() {
  const features = [
    {
      title: "Superior Strength",
      description:
        "High-tenacity weaving yarns for durable, long-lasting fabrics.",
      icon: ShieldCheck,
    },
    {
      title: "Smooth Weaving Performance",
      description:
        "Optimized for airjet, rapier, and shuttle looms to ensure consistent fabric quality.",
      icon: Layers,
    },
    {
      title: "Color Consistency",
      description: "Uniform dyeing for vibrant, fade-resistant fabrics.",
      icon: Atom,
    },
    {
      title: "Process Reliability",
      description: "Low breakage and lint for efficient, high-speed weaving.",
      icon: ThermometerSun,
    },
  ];

  const applications = [
    "Apparel Fabrics (Shirting, Suiting, Dress Material)",
    "Home Textiles (Bedsheets, Curtains, Upholstery)",
    "Denim & Bottomweight Fabrics",
    "Technical Fabrics (Filter Cloth, Canvas)",
    "Premium Jacquard & Dobby Fabrics",
    "Knitted Fabrics (using weaving yarn for warp)",
  ];

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
      title: "Weaving Yarn",
      description:
        "Ideal for airjet, rapier, and shuttle looms. Delivers high strength and smooth weaving.",
      image: "/spun-polyester-thread.png",
      href: "/yarn/weaving",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-blue-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Fabrics <span className="text-blue-600">Applications</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover how RRocks weaving yarn powers the creation of
              high-quality fabrics for apparel, home textiles, denim, and
              technical uses. Our yarns are engineered for smooth performance on
              modern looms, delivering strength, consistency, and vibrant color
              to every meter of fabric.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6"
              >
                <feature.icon className="w-6 h-6 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fabric Use Cases */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Weaving Yarn Applications in Fabrics
            </h2>
            <p className="text-lg text-gray-600">
              See how our weaving yarns perform in diverse fabric manufacturing
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="/fabric-apparel.jpg"
                alt="Apparel fabric weaving"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Apparel Fabrics
                </h3>
                <p className="text-gray-600">
                  Smooth, strong yarns for shirts, suits, dresses, and fashion
                  textiles.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="/fabric-home-textile.jpg"
                alt="Home textile weaving"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Home Textiles
                </h3>
                <p className="text-gray-600">
                  Yarns for bedsheets, curtains, and upholstery with lasting
                  color and comfort.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="/fabric-denim.jpg"
                alt="Denim fabric weaving"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Denim & Bottomweight
                </h3>
                <p className="text-gray-600">
                  High-tenacity yarns for rugged denim and heavy-duty fabrics.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="/fabric-technical.jpg"
                alt="Technical fabric weaving"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Technical Fabrics
                </h3>
                <p className="text-gray-600">
                  Specialized yarns for filter cloth, canvas, and industrial
                  textiles.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="/fabric-jacquard.jpg"
                alt="Jacquard fabric weaving"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Jacquard & Dobby Fabrics
                </h3>
                <p className="text-gray-600">
                  Fine yarns for intricate patterns and premium fabric designs.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="/fabric-knitted.jpg"
                alt="Knitted fabric weaving"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Knitted Fabrics
                </h3>
                <p className="text-gray-600">
                  Weaving yarns used for warp in high-quality knitted textiles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Where It's Used
            </h2>
            <p className="text-gray-600 mb-6">
              Purpose‑designed for modern fabric manufacturing.
            </p>
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
              Choose robust, process‑reliable yarns for fabric production.
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
            <h3 className="text-3xl font-bold mb-3">
              Developing a new fabric collection?
            </h3>
            <p className="text-blue-100 mb-6">
              Discuss weaving yarn specifications, samples, and technical
              support with our team.
            </p>
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
  );
}
