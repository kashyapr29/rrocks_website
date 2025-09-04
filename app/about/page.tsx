import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { Building2, MapPin, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              About RRocks Thread
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              RRocks Thread Co. Ltd., spanning across a vast expanse of 150,000
              square meters and powered by a workforce of over 1000 skilled
              employees, is fortified with state-of-the-art machinery and a
              stringent manufacturing management system. This robust
              infrastructure enables us to produce 3000 tons of sewing thread
              and 1000 tons of embroidery thread per month.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are specialized in advanced sewage treatment center and a water
              recycling system to champion energy conservation, environmental
              protection, and green production. Our adherence to quality and
              sustainability standards is validated by our ISO 9001:2015,
              ISO14001:2015, ISO45001:2018 and OEKO-TEX 100 certifications.
              Hence, we are equipped to offer our clients superior quality
              threads with highly competitive pricing for all your sewing and
              embroidery needs.
            </p>
          </div>

          {/* Company Images */}
          <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <Image
                src="/final/factory_1.png"
                alt="RRocks Thread Manufacturing Facility"
                width={600}
                height={400}
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <Image
                src="/final/factory_2.png"
                alt="RRocks Thread Factory Complex"
                width={600}
                height={400}
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Embroidery Threads Industries Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
              Embroidery Threads Industries
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our embroidery thread factory specializes in producing premium
                  threads for decorative applications. These are engineered to
                  provide exceptional sheen, color fastness, and durability. Our
                  product range includes rayon embroidery threads, polyester
                  embroidery threads, metallic threads, and specialty threads
                  for various applications. We focus on customers of threads
                  that exhibit high tensile strength, excellent color retention,
                  and superior finish for embroidery applications.
                </p>
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <Image
                  src="/final/weaving_yarn.png"
                  alt="Colorful Embroidery Threads Display"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>

            {/* Embroidery Production Images Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Image
                  src="/final/process_1.png"
                  alt="Thread Dyeing Process"
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Image
                  src="/final/process_2.png"
                  alt="Thread Spinning Machines"
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Image
                  src="/final/process_3.png"
                  alt="Thread Winding Process"
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Image
                  src="/final/process_4.png"
                  alt="Thread Packaging Department"
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ISO Certifications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
              ISO Certifications
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  ISO 14001 is an Environmental Management System (EMS) which
                  provides a system for measuring and improving an
                  organization's environmental impact.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  ISO 9001 is a Quality Management System (QMS) which gives
                  organizations a systematic approach for meeting customer
                  expectations.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  ISO 45001 is an Occupational Health and Safety Management
                  System (OHSMS) which provides a system for measuring and
                  improving an organization's health and safety impact.
                </p>
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <Image
                  src="/final/iso_certificate.jpg"
                  alt="ISO Certification Document"
                  width={500}
                  height={600}
                  className="w-full h-96 object-contain bg-gray-50"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Franchises Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Our Franchises
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                city: "Surat, India",
                desc: "Headquarters franchise and manufacturing center.",
              },
              {
                city: "Mumbai, India",
                desc: "Major hub for Western India's Textile Industry.",
              },
              {
                city: "Delhi, India",
                desc: "Central franchise serving North India.",
              },
              {
                city: "Bengaluru, India",
                desc: "Tech-driven franchise hub for South India.",
              },
              {
                city: "Chennai, India",
                desc: "Strategic franchise for textile and coastal operations.",
              },
              {
                city: "Kolkata, India",
                desc: "Franchise hub connecting Eastern India.",
              }
            ].map((franchise, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center"
              >
                <div className="flex justify-center mb-4">
                  <MapPin className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {franchise.city}
                </h3>
                <p className="text-gray-600 mt-2">{franchise.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
