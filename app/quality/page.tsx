import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Award,
  Shield,
  Microscope,
  Cog,
  TestTube,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function QualityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-100 py-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quality is Our Benchmark
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At RRocks Thread, we maintain the highest standards of quality
              through rigorous testing, advanced manufacturing processes, and
              continuous improvement initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:scale-[1.02] bg-white">
              <CardContent className="p-8">
                <div className="relative h-56 mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/final/material_testing.png"
                    alt="Raw Material Testing"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-6 text-gray-900">
                  Raw Material Testing
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Fiber strength analysis</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Color fastness testing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Chemical composition verification</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Moisture content assessment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:scale-[1.02] bg-white">
              <CardContent className="p-8">
                <div className="relative h-56 mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/final/advance_machine.png"
                    alt="Advanced Machines"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-6 text-gray-900">
                  Advanced Machines
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Automated quality control systems</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Precision spinning technology</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Real-time monitoring sensors</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Computer-controlled processes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:scale-[1.02] bg-white">
              <CardContent className="p-8">
                <div className="relative h-56 mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/final/product_quality.png"
                    alt="Product Quality Control"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-6 text-gray-900">
                  Product Quality Control
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>OEKO-TEX certification</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Tensile strength testing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Color consistency verification</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Final product inspection</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality as Corporate Culture */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Quality as Corporate Culture
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quality is embedded in every aspect of our operations, from our
              mission to our daily practices.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="relative">
              <Image
                src="/final/quality_manufacturing.png"
                alt="Quality Thread Manufacturing"
                width={600}
                height={450}
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="space-y-8">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                  <Award className="w-6 h-6 text-blue-600" />
                  Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our core mission is to deliver exceptional quality products
                  that exceed customer expectations. We continuously invest in
                  cutting-edge technology and skilled workforce to maintain our
                  position as a leader in thread manufacturing.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-blue-600" />
                  Core Policies
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We maintain strict quality standards throughout our
                  manufacturing process, from raw material selection to final
                  product delivery. Our comprehensive quality management system
                  ensures consistency and reliability in every thread we
                  produce.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                  <Cog className="w-6 h-6 text-blue-600" />
                  Continuous Improvement
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Through regular audits, customer feedback analysis, and
                  process optimization, we continuously enhance our quality
                  standards. Our commitment to excellence drives innovation and
                  ensures long-term customer satisfaction.
                </p>
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
                  width={200}
                  height={600}
                  className="w-full h-96 object-contain bg-gray-50"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Technology */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Cutting-edge Thread Manufacturing Technology for Outstanding
              Quality
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our advanced manufacturing processes ensure consistent quality and
              superior performance in every thread we produce.
            </p>
          </div>

          {/* Dyeing and Dyeing Treatments */}
          <div className="mb-24">
            <h3 className="text-2xl font-semibold text-gray-900 mb-12 text-center">
              Dyeing and Dyeing Treatments
            </h3>
            <div className="grid lg:grid-cols-3 gap-12 items-center max-w-7xl mx-auto">
              <div className="lg:col-span-1 bg-blue-50 p-8 rounded-2xl">
                <p className="text-gray-600 leading-relaxed mb-8 text-base">
                  Range Dye Machine covers both cold and energy-efficient hot
                  dyeing processes. Our advanced dyeing technology ensures
                  consistent color reproduction, excellent color fastness, and
                  minimal environmental impact through optimized water and
                  energy usage.
                </p>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Energy-efficient processes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Consistent color matching</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Eco-friendly operations</span>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
                <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl group">
                  <Image
                    src="final/dyeing_machine.png"
                    alt="Range Dye Machine"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-6 left-6 bg-white/95 px-4 py-2 rounded-xl shadow-lg">
                    <span className="text-sm font-semibold text-gray-900">
                      Range Dye Machine
                    </span>
                  </div>
                </div>
                <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl group">
                  <Image
                    src="/final/high_pressure_dyeing_machine.png"
                    alt="High Pressure Dyer"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-6 left-6 bg-white/95 px-4 py-2 rounded-xl shadow-lg">
                    <span className="text-sm font-semibold text-gray-900">
                      High Pressure Dyer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SSM Automatic Winder */}
          <div className="mb-24">
            <h3 className="text-2xl font-semibold text-gray-900 mb-12 text-center">
              SSM Automatic Winder
            </h3>
            <div className="grid lg:grid-cols-3 gap-12 items-center max-w-7xl mx-auto">
              <div className="lg:col-span-1 bg-slate-50 p-8 rounded-2xl">
                <p className="text-gray-600 leading-relaxed mb-8 text-base">
                  The SSM Automatic Winders are exemplary pieces of equipment
                  designed for high-speed winding operations. These machines
                  ensure uniform tension control, precise package formation, and
                  exceptional yarn quality through advanced automation and
                  monitoring systems.
                </p>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>High-speed operation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Uniform tension control</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Automated quality monitoring</span>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-2">
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl group">
                  <Image
                    src="/final/ssm_winding_machine.png"
                    alt="SSM Automatic Winder"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Winding Machine 
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-12 text-center">Winding Machine</h3>
            <div className="grid lg:grid-cols-3 gap-12 items-center max-w-7xl mx-auto">
              <div className="lg:col-span-1 bg-blue-50 p-8 rounded-2xl">
                <p className="text-gray-600 leading-relaxed mb-8 text-base">
                  Our Winding machines are designed to handle various thread types with precision and efficiency. These
                  machines feature advanced control systems that maintain consistent winding patterns, optimal package
                  density, and superior thread quality throughout the production process.
                </p>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Versatile thread handling</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Consistent winding patterns</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Optimal package density</span>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
                <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl group">
                  <Image
                    src="/placeholder-0q48r.png"
                    alt="High Speed Winding Machine"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-6 left-6 bg-white/95 px-4 py-2 rounded-xl shadow-lg">
                    <span className="text-sm font-semibold text-gray-900">High Speed Winding Machine</span>
                  </div>
                </div>
                <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl group">
                  <Image
                    src="/textile-winding-machine.png"
                    alt="Computer Winding Machine"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-6 left-6 bg-white/95 px-4 py-2 rounded-xl shadow-lg">
                    <span className="text-sm font-semibold text-gray-900">Computer Winding Machine</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          */}
        </div>
      </section>

      {/* Testing Equipment 
      <section className="py-24 bg-gradient-to-br from-blue-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Proofing and Testing Equipment for Guaranteed Quality
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive testing facilities ensure every thread meets the highest quality standards before
              reaching our customers.
            </p>
          </div>

          <div className="space-y-20 max-w-7xl mx-auto">
            <div className="bg-white rounded-3xl p-12 shadow-2xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-12 text-center">Proofing Equipment</h3>
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <p className="text-gray-600 leading-relaxed mb-8 text-base">
                    Our state-of-the-art proofing equipment ensures that every batch of thread meets our exacting
                    standards before production. This comprehensive testing phase includes color matching verification,
                    strength analysis, and performance evaluation under various conditions to guarantee consistent
                    quality across all our products.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-xl">
                      <TestTube className="w-6 h-6 text-blue-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700 font-medium">Color matching tests</span>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl">
                      <Microscope className="w-6 h-6 text-blue-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700 font-medium">Strength analysis</span>
                    </div>
                    <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-xl">
                      <Shield className="w-6 h-6 text-blue-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700 font-medium">Performance evaluation</span>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl">
                      <Award className="w-6 h-6 text-blue-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700 font-medium">Quality certification</span>
                    </div>
                  </div>
                </div>
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                  <Image src="/placeholder-ozh91.png" alt="Proofing Equipment" fill className="object-cover" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-2xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-12 text-center">Testing Equipment</h3>
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                  <Image src="/placeholder-t12k7.png" alt="Testing Equipment" fill className="object-cover" />
                </div>
                <div>
                  <p className="text-gray-600 leading-relaxed mb-8 text-base">
                    Our testing center is equipped with comprehensive testing equipment that validates thread
                    performance across multiple parameters. From tensile strength testing to colorfastness evaluation,
                    our advanced testing protocols ensure that every thread meets international quality standards and
                    customer specifications.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-xl">
                      <Cog className="w-6 h-6 text-blue-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700 font-medium">Tensile strength testing</span>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl">
                      <TestTube className="w-6 h-6 text-blue-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700 font-medium">Colorfastness evaluation</span>
                    </div>
                    <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-xl">
                      <Microscope className="w-6 h-6 text-blue-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700 font-medium">Dimensional stability</span>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl">
                      <Shield className="w-6 h-6 text-blue-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700 font-medium">Chemical resistance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       */}

      <Footer />
    </div>
  );
}
