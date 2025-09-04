import Header from "@/components/header";
import Footer from "@/components/footer";
import { Contact, Download } from "lucide-react";
import { notFound } from "next/navigation";
import { ProductShowcase } from "@/components/product-showcase";
import Link from "next/link";

// Yarn data with specific details for weaving yarn
const yarnData = {
  weaving: {
    name: "Weaving Yarn",
    heroTitle: "PREMIUM\nWEAVING\nYARN",
    heroImage: "/final/weaving/weaving-yarn-cones-hero.png",
    heroGradient: "from-green-400 to-teal-500",
    customCategories: [
      {
        title: "Cotton Weaving Yarn",
        image: "/final/weaving/cotton-weaving-yarn-cones.png",
        colors: ["#8B4513", "#D2691E", "#F4A460"],
      },
      {
        title: "Polyester Weaving Yarn",
        image: "/final/weaving/polyester-weaving-yarn-cones.png",
        colors: ["#4169E1", "#1E90FF", "#87CEEB"],
      },
      {
        title: "Wool Weaving Yarn",
        image: "/final/weaving/wool-weaving-yarn-cones.png",
        colors: ["#696969", "#A9A9A9", "#D3D3D3"],
      },
      {
        title: "Blended Weaving Yarn",
        image: "/final/weaving/blended-weaving-yarn-cones.png",
        colors: ["#8FBC8F", "#98FB98", "#90EE90"],
      },
      {
        title: "High Tenacity Yarn",
        image: "/final/weaving/high-tenacity-weaving-yarn.png",
        colors: ["#FF6347", "#FF7F50", "#FFA07A"],
      },
      {
        title: "Textured Weaving Yarn",
        image: "/final/weaving/textured-weaving-yarn.png",
        colors: ["#DDA0DD", "#DA70D6", "#EE82EE"],
      },
      {
        title: "Fine Count Yarn",
        image: "/final/weaving/fine-count-weaving-yarn.png",
        colors: ["#FFD700", "#FFA500", "#FF8C00"],
      },
      {
        title: "Coarse Count Yarn",
        image: "/final/weaving/coarse-count-weaving-yarn.png",
        colors: ["#2E8B57", "#3CB371", "#66CDAA"],
      },
    ],
    description:
      "Premium weaving yarn specifically engineered for loom applications, featuring superior strength, smoothness, and consistency. Our weaving yarns are processed with optimal twist and ply construction to withstand loom tension while maintaining uniform thickness for even weaving patterns and exceptional fabric quality.",
    features: [
      "Superior tensile strength - Withstands high loom tension without breaking",
      "Uniform thickness - Ensures consistent weaving patterns and fabric quality",
      "Optimal twist construction - Provides strength while maintaining flexibility",
      "Smooth surface finish - Reduces friction and wear during weaving process",
      "Excellent dimensional stability - Maintains shape and size in finished fabric",
      "Chemical resistance - Suitable for various dyeing and finishing processes",
    ],
    colorCard: {
      title: "Weaving Yarn Color Range",
      description:
        "Our comprehensive color palette with 400+ colors offers unlimited possibilities for your weaving projects, from natural tones to vibrant hues.",
      image: "/final/weaving/weaving-yarn-color-chart.png",
    },
    colorFastness: {
      title: "Weaving Yarn Quality Standards",
      description:
        "Our weaving yarns meet international textile standards for strength, color fastness, and performance.",
      specs: [
        {
          test: "Tensile Strength",
          standard: "ASTM D2256",
          grade: "≥4.5 g/d",
          result: "Excellent",
        },
        {
          test: "Light Fastness",
          standard: "ISO 105-B02",
          grade: "6-7",
          result: "Excellent",
        },
        {
          test: "Washing Fastness",
          standard: "ISO 105-C06",
          grade: "4-5",
          result: "Very Good",
        },
        {
          test: "Abrasion Resistance",
          standard: "ASTM D3884",
          grade: "≥10000 cycles",
          result: "Excellent",
        },
      ],
    },
    sizeChart: {
      title: "Weaving Yarn Count Specifications",
      sizes: [
        {
          tex: "20",
          denier: "180",
          count: "30s",
          yards: "4400",
          meters: "4023",
        },
        {
          tex: "25",
          denier: "225",
          count: "24s",
          yards: "3520",
          meters: "3218",
        },
        {
          tex: "30",
          denier: "270",
          count: "20s",
          yards: "2930",
          meters: "2679",
        },
        {
          tex: "40",
          denier: "360",
          count: "15s",
          yards: "2200",
          meters: "2012",
        },
        {
          tex: "50",
          denier: "450",
          count: "12s",
          yards: "1760",
          meters: "1609",
        },
      ],
    },
    packingOptions: [
      {
        size: "1kg",
        image: "/final/weaving/1kg-weaving-yarn-cone.png",
        description: "1KG CONE\n8000M",
      },
      {
        size: "2kg",
        image: "/final/weaving/2kg-weaving-yarn-cone.png",
        description: "2KG CONE\n16000M",
      },
      {
        size: "5kg",
        image: "/final/weaving/5kg-weaving-yarn-cone.png",
        description: "5KG CONE\n40000M",
      },
      {
        size: "10kg",
        image: "/final/weaving/10kg-weaving-yarn-cone.png",
        description: "10KG CONE\n80000M",
      },
    ],
    applications: [
      "Home textile weaving - Bedding, towels, curtains",
      "Apparel fabric production - Shirts, pants, dresses",
      "Industrial textile manufacturing - Canvas, tarpaulins",
      "Upholstery and furniture fabrics",
      "Automotive textile applications",
      "Technical textile production",
      "Carpet and rug manufacturing",
      "Decorative fabric weaving",
    ],
    catalogPath: "/catalogs/weaving-yarn-catalog.pdf",
    products: [
      {
        id: 1,
        name: "Cotton Weaving Yarn - Natural",
        image: "/final/weaving/cotton-weaving-yarn-natural.png",
        color: "Natural",
        count: "30s",
      },
      {
        id: 2,
        name: "Polyester Weaving Yarn - White",
        image: "/final/weaving/polyester-weaving-yarn-white.png",
        color: "White",
        count: "24s",
      },
      {
        id: 3,
        name: "Wool Weaving Yarn - Grey",
        image: "/final/weaving/wool-weaving-yarn-grey.png",
        color: "Grey",
        count: "20s",
      },
      {
        id: 4,
        name: "Cotton Weaving Yarn - Blue",
        image: "/final/weaving/cotton-weaving-yarn-blue.png",
        color: "Blue",
        count: "30s",
      },
      {
        id: 5,
        name: "Polyester Weaving Yarn - Red",
        image: "/final/weaving/polyester-weaving-yarn-red.png",
        color: "Red",
        count: "24s",
      },
      {
        id: 6,
        name: "Blended Weaving Yarn - Green",
        image: "/final/weaving/blended-weaving-yarn-green.png",
        color: "Green",
        count: "20s",
      },
      {
        id: 7,
        name: "High Tenacity Yarn - Black",
        image: "/final/weaving/high-tenacity-yarn-black.png",
        color: "Black",
        count: "15s",
      },
      {
        id: 8,
        name: "Cotton Weaving Yarn - Brown",
        image: "/final/weaving/cotton-weaving-yarn-brown.png",
        color: "Brown",
        count: "30s",
      },
      {
        id: 9,
        name: "Polyester Weaving Yarn - Navy",
        image: "/final/weaving/polyester-weaving-yarn-navy.png",
        color: "Navy",
        count: "24s",
      },
      {
        id: 10,
        name: "Textured Weaving Yarn - Purple",
        image: "/final/weaving/textured-weaving-yarn-purple.png",
        color: "Purple",
        count: "20s",
      },
    ],
  },
};

export default async function WeavingYarnPage({
  params,
}: {
  params: { slug: string };
}) {
  const resolvedParams = await params;
  const yarn = yarnData[resolvedParams.slug as keyof typeof yarnData];

  if (!yarn) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className={`bg-gradient-to-br ${yarn.heroGradient} py-20`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
            <div className="lg:w-1/2">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight whitespace-pre-line">
                {yarn.heroTitle}
              </h1>
            </div>
            <div className="lg:w-1/2">
              <img
                src={
                  yarn.heroImage ||
                  "/placeholder.svg?height=400&width=600&query=weaving yarn cones industrial"
                }
                alt={yarn.name}
                className="w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Product Features
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {yarn.description}
            </p>
            <ul className="space-y-4">
              {yarn.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ProductShowcase productCategories={yarn.customCategories} />

      {/* Color Card Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {yarn.colorCard.title}
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              {yarn.colorCard.description}
            </p>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src={
                  yarn.colorCard.image ||
                  "/placeholder.svg?height=400&width=800&query=weaving yarn color chart"
                }
                alt={yarn.colorCard.title}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {yarn.colorFastness.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {yarn.colorFastness.description}
            </p>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-green-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">
                        Test
                      </th>
                      <th className="px-6 py-4 text-left font-semibold">
                        Standard
                      </th>
                      <th className="px-6 py-4 text-left font-semibold">
                        Grade
                      </th>
                      <th className="px-6 py-4 text-left font-semibold">
                        Result
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {yarn.colorFastness.specs.map((spec, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                      >
                        <td className="px-6 py-4 font-medium text-gray-800">
                          {spec.test}
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          {spec.standard}
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          {spec.grade}
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                            {spec.result}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Count Specifications */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">{yarn.sizeChart.title}</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-green-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Tex</th>
                      <th className="px-6 py-4 text-left font-semibold">Denier</th>
                      <th className="px-6 py-4 text-left font-semibold">Count</th>
                      <th className="px-6 py-4 text-left font-semibold">Yards/lb</th>
                      <th className="px-6 py-4 text-left font-semibold">Meters/kg</th>
                    </tr>
                  </thead>
                  <tbody>
                    {yarn.sizeChart.sizes.map((size, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="px-6 py-4 font-medium text-gray-800">{size.tex}</td>
                        <td className="px-6 py-4 text-gray-600">{size.denier}</td>
                        <td className="px-6 py-4 text-gray-600">{size.count}</td>
                        <td className="px-6 py-4 text-gray-600">{size.yards}</td>
                        <td className="px-6 py-4 text-gray-600">{size.meters}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Packing Chart */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12">
              Packing Options
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {yarn.packingOptions.map((option, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-xl shadow-lg p-6 mb-4">
                    <img
                      src={
                        option.image ||
                        "/placeholder.svg?height=150&width=150&query=weaving yarn cone"
                      }
                      alt={`${option.size} cone`}
                      className="w-full h-32 object-contain mx-auto"
                    />
                  </div>
                  <p className="font-semibold text-gray-800 whitespace-pre-line">
                    {option.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Applications
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {yarn.applications.map((application, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-green-50 rounded-lg"
                >
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-4 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">
                    {application}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Catalog */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Get Product Catalog
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Get detailed specifications, color charts, and technical
              information for {yarn.name.toLowerCase()}.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-green-600 font-semibold py-4 px-8 rounded-xl hover:bg-green-50 transition-colors"
            >
              {/* <a
              href={yarn.catalogPath}
              download
              className="inline-flex items-center bg-white text-green-600 font-semibold py-4 px-8 rounded-xl hover:bg-green-50 transition-colors"
            > */}
              <Contact className="w-5 h-5 mr-3" />
              Get Catalog PDF
              {/* </a> */}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
