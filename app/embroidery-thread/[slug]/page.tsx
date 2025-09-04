import Header from "@/components/header";
import Footer from "@/components/footer";
import { Download } from "lucide-react";
import { notFound } from "next/navigation";
import { ProductShowcase } from "@/components/product-showcase";

// Thread data with specific details for each type
const threadData = {
  polyester: {
    name: "Polyester Embroidery Thread",
    heroTitle: "POLYESTER\nEMBROIDERY\nTHREAD",
    heroImage: "/final/german_hero_image.jpeg",
    heroGradient: "from-red-400 to-pink-500",
    customCategories: [
      {
        image: "/final/polyster/blue1.jpg",
        colors: ["#282C60", "#2230C0", "#2050E0"],
      },
      {
        image: "/final/polyster/green.jpg",
        colors: ["#4B8B1D", "#7FA74C", "#B3D7A1"],
      },
      {
        image: "/final/polyster/orange.jpg",
        colors: ["#F57C00", "#FF8C00", "#FA8800"],
      },
      {
        image: "/final/polyster/yellow.jpg",
        colors: ["#5C473A", "#E8BA4F", "#E6C787"],
      },
      {
        image: "/final/polyster/red.jpg",
        colors: ["#962544", "#DE2F5B", "#EF70B1"],
      },
      {
        image: "/final/polyster/mendi.jpg",
        colors: ["#5B952E", "#66A37F", "#93B470"],
      },
    ],
    description:
      "Premium polyester thread made of polyester filament yarns, which are 100% polyester fiber. We use high-quality resin chips and dyes to produce the quality polyester thread with excellent color fastness, superior strength, and outstanding performance in embroidery applications.",
    features: [
      "Superior color fastness - No fading even after multiple washes",
      "High tensile strength - Reduces thread breaks during high-speed embroidery",
      "Excellent dimensional stability - Maintains shape and size",
      "Chemical resistance - Withstands various cleaning agents",
      "Heat resistance - Suitable for commercial laundering",
    ],
    colorCard: {
      title: "Polyester Embroidery Thread Color Card",
      description:
        "Our color card with 500 colors gives you the freedom to pick any color you want and create the perfect design.",
      image: "/final/polyster/shade_card_image1.png",
    },
    colorFastness: {
      title: "Polyester Embroidery Thread Color Fastness",
      description:
        "Our polyester embroidery thread is tested to ensure superior color fastness and durability.",
      specs: [
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
          test: "Perspiration Fastness",
          standard: "ISO 105-E04",
          grade: "4-5",
          result: "Very Good",
        },
        {
          test: "Rubbing Fastness",
          standard: "ISO 105-X12",
          grade: "4",
          result: "Good",
        },
      ],
    },
    sizeChart: {
      title: "Polyester Embroidery Thread Size Chart",
      sizes: [
        {
          tex: "15",
          denier: "75",
          weight: "40",
          yards: "5500",
          meters: "5029",
        },
        {
          tex: "17",
          denier: "100",
          weight: "35",
          yards: "4950",
          meters: "4526",
        },
        {
          tex: "20",
          denier: "120",
          weight: "30",
          yards: "4400",
          meters: "4023",
        },
        {
          tex: "25",
          denier: "150",
          weight: "25",
          yards: "3520",
          meters: "3218",
        },
      ],
    },
    packingOptions: [
      {
        size: "250g",
        image: "/polyester-thread-cone.png",
        description: "250G CONE\n5000M",
      },
      {
        size: "500g",
        image: "/placeholder-wtf7o.png",
        description: "500G CONE\n10000M",
      },
      {
        size: "1000g",
        image: "/1000g-polyester-thread-cone.png",
        description: "1000G CONE\n20000M",
      },
      {
        size: "1500g",
        image: "/polyester-thread-cone.png",
        description: "1500G CONE\n30000M",
      },
    ],
    applications: [
      "Garment embroidery and decoration",
      "Home textile embroidery",
      "Automotive interior embroidery",
      "Promotional and corporate embroidery",
      "Fashion and apparel decoration",
      "Quilting and crafts",
    ],
    catalogPath: "/final/download/polyster_shade_card.pdf",
    products: [
      {
        id: 1,
        name: "Polyester Thread - Red",
        image: "/placeholder-hocya.png",
        color: "Red",
        weight: "250g",
      },
      {
        id: 2,
        name: "Polyester Thread - Blue",
        image: "/blue-embroidery-thread.png",
        color: "Blue",
        weight: "250g",
      },
      {
        id: 3,
        name: "Polyester Thread - Green",
        image: "/placeholder-yaikn.png",
        color: "Green",
        weight: "250g",
      },
      {
        id: 4,
        name: "Polyester Thread - Yellow",
        image: "/yellow-embroidery-thread.png",
        color: "Yellow",
        weight: "250g",
      },
      {
        id: 5,
        name: "Polyester Thread - Purple",
        image: "/placeholder-1b2e3.png",
        color: "Purple",
        weight: "250g",
      },
      {
        id: 6,
        name: "Polyester Thread - Orange",
        image: "/orange-embroidery-thread.png",
        color: "Orange",
        weight: "250g",
      },
      {
        id: 7,
        name: "Polyester Thread - Pink",
        image: "/pink-polyester-thread-cone.png",
        color: "Pink",
        weight: "250g",
      },
      {
        id: 8,
        name: "Polyester Thread - Black",
        image: "/placeholder-aux01.png",
        color: "Black",
        weight: "250g",
      },
      {
        id: 9,
        name: "Polyester Thread - White",
        image: "/placeholder-4hw34.png",
        color: "White",
        weight: "250g",
      },
      {
        id: 10,
        name: "Polyester Thread - Navy",
        image: "/navy-embroidery-thread.png",
        color: "Navy",
        weight: "250g",
      },
    ],
  },
  viscose: {
    name: "Viscose Embroidery Thread",
    heroTitle: "VISCOSE\nEMBROIDERY\nTHREAD",
    heroImage: "/final/polyster_hero_image1.jpg",
    heroGradient: "from-teal-400 to-blue-500",
    customCategories: [
      {
        image: "/final/german/pink.jpg",
        colors: ["#D82F6B", "#FF2F6E", "#F696BD"],
      },
      {
        image: "/final/german/purple.jpg",
        colors: ["#5E27AE", "#9C23D8", "#C977E8"],
      },
      {
        image: "/final/german/lightblue.jpg",
        colors: ["#28395B", "#2481A6", "#33C6E3"],
      },
      {
        image: "/final/german/mendi.jpg",
        colors: ["#5B952E", "#66A37F", "#93B470"],
      },
      {
        image: "/final/german/orange.jpg",
        colors: ["#D85C20", "#FF6600", "#FF9E26"],
      },
      {
        image: "/final/german/marun.jpg",
        colors: ["#942D3D", "#CD2D32", "#EE2F2F"],
      },
    ],
    description:
      "Premium viscose embroidery thread made from high-quality viscose fibers, offering exceptional shine and smooth texture. Our viscose threads provide brilliant luster and excellent drape, making them ideal for decorative and artistic embroidery applications.",
    features: [
      "Brilliant natural shine - Superior luster for premium appearance",
      "Smooth texture - Reduces friction during embroidery process",
      "Excellent drape - Natural flow and movement in finished work",
      "Vibrant color absorption - Rich, deep colors with excellent saturation",
      "Biodegradable - Environmentally friendly natural fiber base",
    ],
    colorCard: {
      title: "Viscose Embroidery Thread Color Card",
      description:
        "Our comprehensive color range with 400+ vibrant colors offers unlimited creative possibilities for your embroidery projects.",
      image: "/final/polyster/shade_card_image1.png",
    },
    colorFastness: {
      title: "Viscose Embroidery Thread Color Fastness",
      description:
        "Our viscose embroidery thread meets international standards for color fastness and quality.",
      specs: [
        {
          test: "Light Fastness",
          standard: "ISO 105-B02",
          grade: "5-6",
          result: "Very Good",
        },
        {
          test: "Washing Fastness",
          standard: "ISO 105-C06",
          grade: "4",
          result: "Good",
        },
        {
          test: "Perspiration Fastness",
          standard: "ISO 105-E04",
          grade: "4",
          result: "Good",
        },
        {
          test: "Rubbing Fastness",
          standard: "ISO 105-X12",
          grade: "3-4",
          result: "Good",
        },
      ],
    },
    sizeChart: {
      title: "Viscose Embroidery Thread Size Chart",
      sizes: [
        {
          tex: "18",
          denier: "120",
          weight: "40",
          yards: "4900",
          meters: "4481",
        },
        {
          tex: "22",
          denier: "150",
          weight: "32",
          yards: "4000",
          meters: "3658",
        },
        {
          tex: "27",
          denier: "225",
          weight: "26",
          yards: "3260",
          meters: "2981",
        },
      ],
    },
    packingOptions: [
      {
        size: "250g",
        image: "/viscose-thread-cone.png",
        description: "250G CONE\n4500M",
      },
      {
        size: "500g",
        image: "/viscose-thread-cone.png",
        description: "500G CONE\n9000M",
      },
      {
        size: "1000g",
        image: "/1000g-viscose-thread-cone.png",
        description: "1000G CONE\n18000M",
      },
    ],
    applications: [
      "High-end fashion embroidery",
      "Luxury home textiles",
      "Decorative embroidery work",
      "Artistic and creative projects",
      "Premium garment decoration",
      "Traditional embroidery techniques",
    ],
    catalogPath: "/final/download/polyster_shade_card.pdf",
    products: [
      {
        id: 1,
        name: "Viscose Thread - Crimson",
        image: "/placeholder-9emyj.png",
        color: "Crimson",
        weight: "250g",
      },
      {
        id: 2,
        name: "Viscose Thread - Royal Blue",
        image: "/royal-blue-embroidery-thread.png",
        color: "Royal Blue",
        weight: "250g",
      },
      {
        id: 3,
        name: "Viscose Thread - Emerald",
        image: "/placeholder-p0kej.png",
        color: "Emerald",
        weight: "250g",
      },
      {
        id: 4,
        name: "Viscose Thread - Gold",
        image: "/placeholder-k2biw.png",
        color: "Gold",
        weight: "250g",
      },
      {
        id: 5,
        name: "Viscose Thread - Violet",
        image: "/violet-viscose-thread.png",
        color: "Violet",
        weight: "250g",
      },
      {
        id: 6,
        name: "Viscose Thread - Coral",
        image: "/placeholder.svg?height=200&width=200",
        color: "Coral",
        weight: "250g",
      },
      {
        id: 7,
        name: "Viscose Thread - Magenta",
        image: "/placeholder.svg?height=200&width=200",
        color: "Magenta",
        weight: "250g",
      },
      {
        id: 8,
        name: "Viscose Thread - Charcoal",
        image: "/placeholder.svg?height=200&width=200",
        color: "Charcoal",
        weight: "250g",
      },
      {
        id: 9,
        name: "Viscose Thread - Ivory",
        image: "/placeholder.svg?height=200&width=200",
        color: "Ivory",
        weight: "250g",
      },
      {
        id: 10,
        name: "Viscose Thread - Teal",
        image: "/placeholder.svg?height=200&width=200",
        color: "Teal",
        weight: "250g",
      },
    ],
  },
  "multi-color": {
    name: "Multi-Color Thread",
    heroTitle: "MULTI-COLOR\nEMBROIDERY\nTHREAD",
    heroImage: "/final/two_multi.png",
    heroGradient: "from-purple-400 to-pink-500",
    customCategories: [
      {
        image: "/final/german/pink.jpg",
        colors: ["#D82F6B", "#FF2F6E", "#F696BD"],
      },
      {
        image: "/final/german/purple.jpg",
        colors: ["#5E27AE", "#9C23D8", "#C977E8"],
      },
      {
        image: "/final/german/lightblue.jpg",
        colors: ["#28395B", "#2481A6", "#33C6E3"],
      },
      {
        image: "/final/german/mendi.jpg",
        colors: ["#5B952E", "#66A37F", "#93B470"],
      },
      {
        image: "/final/german/orange.jpg",
        colors: ["#D85C20", "#FF6600", "#FF9E26"],
      },
      {
        image: "/final/german/marun.jpg",
        colors: ["#942D3D", "#CD2D32", "#EE2F2F"],
      },
    ],
    description:
      "Innovative multi-color embroidery threads featuring unique gradient and variegated effects. These specialty threads create stunning color transitions and patterns, perfect for creative and artistic embroidery applications that demand visual impact.",
    features: [
      "Gradient color transitions - Smooth color changes within single thread",
      "Variegated patterns - Multiple colors in repeating sequences",
      "Creative design possibilities - Unique effects impossible with solid colors",
      "High-quality base materials - Built on premium polyester or viscose",
      "Consistent color distribution - Even spacing of color changes",
    ],
    colorCard: {
      title: "Multi-Color Thread Pattern Card",
      description:
        "Explore our collection of 150+ multi-color patterns including gradients, variegated, and specialty effect threads.",
      image: "/final/polyster/shade_card_image1.png",
    },
    colorFastness: {
      title: "Multi-Color Thread Quality Standards",
      description:
        "Our multi-color threads maintain consistent quality across all color segments.",
      specs: [
        {
          test: "Light Fastness",
          standard: "ISO 105-B02",
          grade: "5-6",
          result: "Very Good",
        },
        {
          test: "Washing Fastness",
          standard: "ISO 105-C06",
          grade: "4",
          result: "Good",
        },
        {
          test: "Color Consistency",
          standard: "Internal Standard",
          grade: "A",
          result: "Excellent",
        },
        {
          test: "Pattern Repeatability",
          standard: "Internal Standard",
          grade: "A",
          result: "Excellent",
        },
      ],
    },
    sizeChart: {
      title: "Multi-Color Thread Specifications",
      sizes: [
        {
          tex: "20",
          denier: "75",
          weight: "35",
          yards: "4900",
          meters: "4500",
        },
        {
          tex: "20",
          denier: "100",
          weight: "30",
          yards: "4400",
          meters: "4023",
        },
        {
          tex: "25",
          denier: "120",
          weight: "25",
          yards: "3520",
          meters: "3218",
        },
        {
          tex: "30",
          denier: "150",
          weight: "20",
          yards: "2930",
          meters: "2679",
        },
      ],
    },
    packingOptions: [
      {
        size: "250g",
        image: "/placeholder.svg?height=200&width=150",
        description: "250G CONE\n4500M",
      },
      {
        size: "500g",
        image: "/placeholder.svg?height=200&width=150",
        description: "500G CONE\n9000M",
      },
      {
        size: "1000g",
        image: "/placeholder.svg?height=200&width=150",
        description: "1000G CONE\n18000M",
      },
    ],
    applications: [
      "Artistic and creative embroidery",
      "Decorative quilting projects",
      "Fashion statement pieces",
      "Children's garment decoration",
      "Craft and hobby projects",
      "Specialty embroidery techniques",
    ],
    catalogPath: "/final/download/polyster_shade_card.pdf",
    products: [
      {
        id: 1,
        name: "Multi-Color Thread - Rainbow",
        image: "/placeholder.svg?height=200&width=200",
        color: "Rainbow",
        weight: "250g",
      },
      {
        id: 2,
        name: "Multi-Color Thread - Sunset",
        image: "/placeholder.svg?height=200&width=200",
        color: "Sunset Gradient",
        weight: "250g",
      },
      {
        id: 3,
        name: "Multi-Color Thread - Ocean",
        image: "/placeholder.svg?height=200&width=200",
        color: "Ocean Gradient",
        weight: "250g",
      },
      {
        id: 4,
        name: "Multi-Color Thread - Forest",
        image: "/placeholder.svg?height=200&width=200",
        color: "Forest Gradient",
        weight: "250g",
      },
      {
        id: 5,
        name: "Multi-Color Thread - Autumn",
        image: "/placeholder.svg?height=200&width=200",
        color: "Autumn Mix",
        weight: "250g",
      },
      {
        id: 6,
        name: "Multi-Color Thread - Spring",
        image: "/placeholder.svg?height=200&width=200",
        color: "Spring Mix",
        weight: "250g",
      },
      {
        id: 7,
        name: "Multi-Color Thread - Tropical",
        image: "/placeholder.svg?height=200&width=200",
        color: "Tropical Mix",
        weight: "250g",
      },
      {
        id: 8,
        name: "Multi-Color Thread - Pastel",
        image: "/placeholder.svg?height=200&width=200",
        color: "Pastel Mix",
        weight: "250g",
      },
      {
        id: 9,
        name: "Multi-Color Thread - Neon",
        image: "/placeholder.svg?height=200&width=200",
        color: "Neon Mix",
        weight: "250g",
      },
      {
        id: 10,
        name: "Multi-Color Thread - Metallic",
        image: "/placeholder.svg?height=200&width=200",
        color: "Metallic Mix",
        weight: "250g",
      },
    ],
  },
  german: {
    name: "German Embroidery Thread",
    heroTitle: "GERMAN\nEMBROIDERY\nTHREAD",
    heroImage: "/final/polyster_hero_image.png",
    heroGradient: "from-red-500 to-yellow-500",
    customCategories: [
      {
        image: "/final/german/purple.jpg",
        colors: ["#5E27AE", "#9C23D8", "#C977E8"],
      },
      {
        image: "/final/german/pink.jpg",
        colors: ["#D82F6B", "#FF2F6E", "#F696BD"],
      },
      {
        image: "/final/german/lightblue.jpg",
        colors: ["#28395B", "#2481A6", "#33C6E3"],
      },
      {
        image: "/final/german/mendi.jpg",
        colors: ["#5B952E", "#66A37F", "#93B470"],
      },
      {
        image: "/final/german/orange.jpg",
        colors: ["#D85C20", "#FF6600", "#FF9E26"],
      },
      {
        image: "/final/german/marun.jpg",
        colors: ["#942D3D", "#CD2D32", "#EE2F2F"],
      },
    ],
    description:
      "Premium German-engineered embroidery threads manufactured to the highest European standards. Our German threads feature advanced manufacturing techniques, ISO 9001 certification, and OEKO-TEX compliance. Made from carefully selected materials including viscose, polyester, and specialty fibers, these threads deliver exceptional performance with superior color fastness, tensile strength, and consistent quality for professional embroidery applications.",
    features: [
      "ISO 9001 certified manufacturing - Guaranteed consistent quality standards",
      "OEKO-TEX STANDARD 100 certified - Safe for baby items and skin contact",
      "Advanced draw winding technology - Smooth running without loop formation",
      "Extreme chlorine fastness - Withstands 30°C for 30 minutes at 20g/L chlorine",
      "High-speed capability - Embroidery up to 1,200 stitches per minute",
      "REACH compliant - Meets European chemical safety regulations",
      "Continuous quality testing - Every batch tested for color fastness and strength",
    ],
    colorCard: {
      title: "German Embroidery Thread Color Card",
      description:
        "Our comprehensive German color collection features over 600 precisely matched colors with exceptional consistency across batches, developed using advanced European dyeing technology.",
      image: "/final/german/shade_card_image1.png",
    },
    colorFastness: {
      title: "German Thread Quality Standards",
      description:
        "German embroidery threads exceed international standards with rigorous testing protocols and continuous quality assurance.",
      specs: [
        {
          test: "Light Fastness",
          standard: "ISO 105-B02",
          grade: "6-7",
          result: "Excellent",
        },
        {
          test: "Chlorine Fastness",
          standard: "ISO 105-N01",
          grade: "5",
          result: "Excellent",
        },
        {
          test: "Washing Fastness",
          standard: "ISO 105-C06",
          grade: "4-5",
          result: "Very Good",
        },
        {
          test: "Perspiration Fastness",
          standard: "ISO 105-E04",
          grade: "4-5",
          result: "Very Good",
        },
        {
          test: "Rubbing Fastness",
          standard: "ISO 105-X12",
          grade: "4-5",
          result: "Very Good",
        },
        {
          test: "Heat Resistance",
          standard: "DIN 54020",
          grade: "A",
          result: "Excellent",
        },
      ],
    },
    sizeChart: {
      title: "German Thread Specifications",
      sizes: [
        {
          tex: "135x2",
          denier: "110",
          weight: "Classic",
          yards: "5500",
          meters: "5029",
        },
      ],
    },
    packingOptions: [
      {
        size: "1000m",
        image: "/german-thread-1000m-cone.png",
        description: "1000M CONE\nClassic & Polyneon",
      },
      {
        size: "5000m",
        image: "/german-thread-5000m-cone.png",
        description: "5000M CONE\nIndustrial Size",
      },
      {
        size: "10000m",
        image: "/german-thread-10000m-cone.png",
        description: "10000M CONE\nBulk Production",
      },
      {
        size: "Special",
        image: "/german-thread-specialty-cone.png",
        description: "SPECIALTY\nMetallic & Luna",
      },
    ],
    applications: [
      "High-end fashion embroidery and couture",
      "Automotive interior embroidery",
      "Corporate branding and logos",
      "Medical textile embroidery",
      "Flame-resistant safety garments",
      "Luxury home textiles and furnishings",
      "Technical and industrial embroidery",
      "Children's clothing and baby items",
    ],
    catalogPath: "/final/download/german_shade_card.pdf",
    products: [
      {
        id: 1,
        name: "German Classic - Deep Red",
        image: "/german-classic-red-thread.png",
        color: "Deep Red",
        weight: "1000m",
      },
      {
        id: 2,
        name: "German Polyneon - Royal Blue",
        image: "/german-polyneon-blue-thread.png",
        color: "Royal Blue",
        weight: "5000m",
      },
      {
        id: 3,
        name: "German Metallic - Gold",
        image: "/german-metallic-gold-thread.png",
        color: "Metallic Gold",
        weight: "1000m",
      },
      {
        id: 4,
        name: "German Fire Fighter - Orange",
        image: "/german-fire-fighter-orange-thread.png",
        color: "Safety Orange",
        weight: "1000m",
      },
      {
        id: 5,
        name: "German Luna - Green Glow",
        image: "/german-luna-green-thread.png",
        color: "Glow Green",
        weight: "1000m",
      },
      {
        id: 6,
        name: "German Frosted Matt - Silver",
        image: "/german-frosted-silver-thread.png",
        color: "Matt Silver",
        weight: "1000m",
      },
      {
        id: 7,
        name: "German Burmilana - Purple",
        image: "/german-burmilana-purple-thread.png",
        color: "Cotton Purple",
        weight: "1000m",
      },
      {
        id: 8,
        name: "German Monolon - Clear",
        image: "/german-monolon-clear-thread.png",
        color: "Transparent",
        weight: "1000m",
      },
      {
        id: 9,
        name: "German Classic - Forest Green",
        image: "/german-classic-green-thread.png",
        color: "Forest Green",
        weight: "5000m",
      },
      {
        id: 10,
        name: "German Polyneon - Burgundy",
        image: "/german-polyneon-burgundy-thread.png",
        color: "Burgundy",
        weight: "5000m",
      },
    ],
  },
};

export default async function EmbroideryThreadPage({
  params,
}: {
  params: { slug: string };
}) {
  const resolvedParams = await params;
  const thread = threadData[resolvedParams.slug as keyof typeof threadData];

  if (!thread) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row h-auto md:h-[400px] lg:h-[400px]">
        {/* Left: Gradient + Text */}
        <div
          className={`flex items-center justify-center w-full md:w-1/2 h-48 md:h-full bg-gradient-to-br ${thread.heroGradient}`}
        >
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight whitespace-pre-line text-center">
            {thread.heroTitle}
          </h1>
        </div>
        {/* Right: Full Image */}
        <div className="w-full md:w-1/2 h-64 md:h-full flex items-center justify-center bg-white">
          <img
            src={thread.heroImage || "/placeholder.svg"}
            alt={thread.name}
            className="w-full h-full object-cover"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
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
              {thread.description}
            </p>
            <ul className="space-y-4">
              {thread.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ProductShowcase productCategories={thread.customCategories} />

      {/* Product Gallery 
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Product Gallery</h2>
            <p className="text-lg text-gray-600 mb-12">
              Explore our complete range of {thread.name.toLowerCase()} in various colors and specifications.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {thread.products.map((product) => (
                <div key={product.id} className="group">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="aspect-square bg-gray-50 p-4">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 mb-2 text-sm">{product.name}</h3>
                      <div className="flex justify-between items-center text-xs text-gray-600">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{product.color}</span>
                        <span className="font-medium">{product.weight}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Color Card Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {thread.colorCard.title}
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              {thread.colorCard.description}
            </p>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src={thread.colorCard.image || "/placeholder.svg"}
                alt={thread.colorCard.title}
                className="w-full h-auto"
              />
              {/* Simple PDF Download Button */}
              <div className="flex justify-center py-8">
                <a
                  href={thread.catalogPath}
                  download
                  className="flex items-center gap-3 text-blue-900 font-semibold text-xl hover:underline"
                  style={{ background: "none", border: "none" }}
                >
                  {/* PDF Icon */}
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect
                      x="4"
                      y="4"
                      width="24"
                      height="24"
                      rx="4"
                      stroke="#23405A"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 12H20M12 16H20M12 20H16"
                      stroke="#23405A"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  PDF
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path
                      d="M20 16L12 16"
                      stroke="#23405A"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M16 12L20 16L16 20"
                      stroke="#23405A"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Fastness */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {thread.colorFastness.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {thread.colorFastness.description}
            </p>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-blue-600 text-white">
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
                    {thread.colorFastness.specs.map((spec, index) => (
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

      {/* Size Chart */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              {thread.sizeChart.title}
            </h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      {/* <th className="px-6 py-4 text-left font-semibold">Tex</th> */}
                      <th className="px-6 py-4 text-left font-semibold">
                        Denier
                      </th>
                      <th className="px-6 py-4 text-left font-semibold">
                        Weight
                      </th>
                      <th className="px-6 py-4 text-left font-semibold">
                        Yards/lb
                      </th>
                      <th className="px-6 py-4 text-left font-semibold">
                        Meters/kg
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {thread.sizeChart.sizes.map((size, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                      >
                        {/* <td className="px-6 py-4 font-medium text-gray-800">{size.tex}</td> */}
                        <td className="px-6 py-4 text-gray-600">
                          {size.denier}
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          {size.weight}
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          {size.yards}
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          {size.meters}
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

      {/* TODO: Add the different size of thread cone's image in this Packing Chart */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12">Packing Chart</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {thread.packingOptions.map((option, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-xl shadow-lg p-6 mb-4">
                    <img
                      src={option.image || "/placeholder.svg"}
                      alt={`${option.size} cone`}
                      className="w-full h-32 object-contain mx-auto"
                    />
                  </div>
                  <p className="font-semibold text-gray-800 whitespace-pre-line">{option.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Packing Chart */}
      <section className="py-20 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
              Packing Chart
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Choose from our standard thread packing sizes or customize as per
              your requirements.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "2000 Mtrs" },
                { label: "2200 Mtrs" },
                { label: "2400 Mtrs" },
                { label: "Custom Packing\nAs Per Requirement" },
              ].map((option, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2}`}
                >
                  {/* Decorative Circle */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mb-4 shadow-md">
                    <span className="text-white font-bold text-xl">
                      {index + 1}
                    </span>
                  </div>

                  {/* Label */}
                  <p className="font-semibold text-gray-800 text-lg whitespace-pre-line">
                    {option.label}
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
              {thread.applications.map((application, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-blue-50 rounded-lg"
                >
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-4 flex-shrink-0" />
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Download Product Catalog
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get detailed specifications, color charts, and technical
              information for {thread.name.toLowerCase()}.
            </p>
            <a
              href={thread.catalogPath}
              download
              className="inline-flex items-center bg-white text-blue-600 font-semibold py-4 px-8 rounded-xl hover:bg-blue-50 transition-colors"
            >
              <Download className="w-5 h-5 mr-3" />
              Download Catalog PDF
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
