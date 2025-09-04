import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function ApparelPage() {
  const features = [
    {
      title: "Superior Color Fastness",
      description: "Colors stay rich after repeated washes and exposure.",
      icon: CheckCircle,
    },
    {
      title: "High Tensile Strength",
      description: "Reduced thread breaks on high‑speed machines.",
      icon: CheckCircle,
    },
    {
      title: "Soft Handfeel",
      description: "Comfortable seams ideal for next‑to‑skin garments.",
      icon: CheckCircle,
    },
    {
      title: "Consistent Performance",
      description: "Even stitch formation across a wide range of fabrics.",
      icon: CheckCircle,
    },
  ];

  const applications = [
    "T‑Shirts",
    "Shirts & Blouses",
    "Denim & Jeans",
    "Sportswear",
    "Lingerie & Intimates",
    "Workwear",
    "Children’s Wear",
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
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Apparel <span className="text-blue-600">Applications</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              High‑quality threads engineered for fashion and textile
              manufacturing with excellent color fastness, strength, and
              sewability across lightweight to heavy fabrics.
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

      {/* Thread Applications in Apparel */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Thread Applications in Apparel
            </h2>
            <p className="text-lg text-gray-600">
              See how our threads perform in real-world apparel manufacturing
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="/final/apparel_tshirt.png"
                alt="T-shirt stitching with thread cone"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  T-Shirt Construction
                </h3>
                <p className="text-gray-600">
                  Premium polyester threads for durable seams and professional
                  finish
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="/final/apparel_jeans.png"
                alt="Jeans stitching with thread cone"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Denim & Jeans
                </h3>
                <p className="text-gray-600">
                  High-strength threads for contrast stitching and reinforced
                  seams
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="/final/apparel_shirt.png"
                alt="Dress shirt stitching with thread cone"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Formal Shirts
                </h3>
                <p className="text-gray-600">
                  Fine threads for precise collar and cuff construction
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Where It’s Used
            </h2>
            <p className="text-gray-600 mb-6">
              Our apparel range covers everything from delicate fashion pieces
              to durable workwear.
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
              Choose the right solution for your apparel production.
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
              Need help choosing the right thread?
            </h3>
            <p className="text-blue-100 mb-6">
              Talk to our experts or request samples for your next collection.
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
