import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Calendar, MapPin, Phone, Mail } from "lucide-react";

export default function MarketsPage() {
  const marketArticles = [
    {
      id: 1,
      date: "16 April 2025",
      title: "Popular RRocks Thread in Mumbai",
      description:
        "Popular RRocks Thread in Mumbai Market. RRocks Mumbai office is at Andheri East, providing premium quality threads for textile manufacturers across Maharashtra. Our Mumbai facility serves over 500+ garment manufacturers with specialized embroidery threads, industrial sewing threads, and custom color matching services. The strategic location allows us to efficiently serve the entire Western India textile corridor. We maintain a comprehensive inventory of over 2000 thread varieties including polyester, cotton, silk, and specialty metallic threads. Our Mumbai team provides technical support for thread selection, color consultation, and bulk order management. The facility operates with state-of-the-art quality control systems ensuring consistent thread quality and timely delivery to meet the fast-paced demands of Mumbai's fashion industry.",
      image: "/final/market_place.png",
      location: "Mumbai, Maharashtra",
    },
    {
      id: 2,
      date: "12 April 2025",
      title: "RRocks Thread Expansion in Delhi",
      description:
        "RRocks Thread establishes strong presence in Delhi NCR region, serving major garment manufacturers with high-quality embroidery and sewing threads. Our Delhi distribution center covers the entire North Indian market, providing same-day delivery to local manufacturers and next-day delivery across Punjab, Haryana, and Uttar Pradesh. We specialize in bulk orders for export-oriented garment units and maintain strategic partnerships with leading fashion brands and textile exporters. The Delhi facility features advanced thread testing laboratories, color matching technology, and a dedicated research team for developing innovative thread solutions. Our experienced sales team provides on-site technical consultations, helping manufacturers optimize their production processes and reduce thread-related defects. We also offer specialized training programs for quality control personnel and machine operators.",
      image: "/final/market_place.png",
      location: "Delhi, NCR",
    },
    {
      id: 3,
      date: "08 April 2025",
      title: "Bangalore Textile Market Growth",
      description:
        "RRocks Thread captures significant market share in Bangalore's growing textile industry, providing innovative thread solutions for modern manufacturers. Our Bangalore operations focus on high-tech textile applications, serving IT city's growing fashion industry and traditional silk manufacturers. We offer specialized threads for both contemporary fashion brands and heritage textile artisans, including eco-friendly organic cotton threads and recycled polyester options. The Bangalore center serves as our innovation hub, developing smart threads with enhanced durability and performance characteristics. Our team collaborates with local design institutes and fashion schools to promote sustainable textile practices. We maintain partnerships with Karnataka's silk weaving cooperatives and provide technical expertise for traditional handloom operations while supporting modern automated manufacturing processes.",
      image: "/final/market_place.png",
      location: "Bangalore, Karnataka",
    },
    {
      id: 4,
      date: "05 April 2025",
      title: "Chennai Market Expansion",
      description:
        "RRocks Thread strengthens its position in Chennai's textile hub, offering comprehensive thread solutions for South Indian manufacturers. Our Chennai facility specializes in cotton threads for traditional South Indian textiles, serving handloom weavers, power loom manufacturers, and modern garment exporters. We maintain strong partnerships with Tamil Nadu's cooperative textile societies and provide specialized threads for traditional saree weaving, including temple border threads and zari work materials. The Chennai operations include a dedicated handloom support division that works closely with rural weavers, providing them with premium quality threads at competitive prices. Our technical team offers training programs on modern weaving techniques while preserving traditional craftsmanship. We also support the region's growing knitwear industry with high-performance threads designed for stretch fabrics and athletic wear manufacturing.",
      image: "/final/market_place.png",
      location: "Chennai, Tamil Nadu",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      {/* Page Title */}
      <div className="py-16 text-center pt-32">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Markets</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover RRocks Thread's presence across major textile markets in
          India
        </p>
      </div>

      {/* Market Articles Grid */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {marketArticles.map((article, index) => (
            <div
              key={article.id}
              className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:scale-[1.02] border border-gray-100"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"></div>

              <div className="relative overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-6 left-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  {article.location}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  <span className="font-medium">{article.date}</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                  {article.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-base">
                  {article.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Expand Your Market with RRocks Thread
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join our growing network of partners across India. Contact us to
            explore opportunities in your region.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-white">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <a
                href="tel:+919913592832"
                className="text-sm sm:text-base hover:text-blue-400 transition-colors duration-200"
              >
                +91 99135 92832
              </a>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <a
                href="mailto:contact@rrocksthread.com"
                className="text-sm sm:text-base hover:text-blue-400 transition-colors duration-200"
              >
                contact@rrocksthread.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
