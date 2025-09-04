import Link from "next/link"
import { Button } from "@/components/ui/button"

const productCategories = [
	{
		title: "Spun Polyester Sewing Thread",
		href: "/sewing-thread/spun-polyester",
		buttonText: "German Embroidery Thread",
		fabricImage: "/final/sofa_thread.png",
		threadPosition: "left-8 bottom-8",
		fabricPosition: "right-0 top-0",
	},
  {
		title: "Polyester Embroidery Thread",
		href: "/embroidery-thread/polyester",
		buttonText: "Polyester Embroidery Thread",
		bgColor: "bg-gradient-to-br from-blue-200 to-blue-300",
		threadImage: "/pink-polyester-thread-cone.png",
		fabricImage: "/final/shoe_thread.png",
		threadPosition: "left-8 bottom-8",
		fabricPosition: "right-0 top-0",
	},
	{
		title: "Viscose Embroidery Thread",
		href: "/embroidery-thread/viscose",
		buttonText: "Viscose Embroidery Thread",
		bgColor: "bg-gradient-to-br from-pink-100 to-pink-200",
		fabricImage: "/final/seat-thread.png",
		threadPosition: "left-8 bottom-8",
		fabricPosition: "right-0 top-0",
	},
	{
		title: "German Embroidery Thread",
		href: "/embroidery-thread/german",
		buttonText: "Multi-Color Embroidery Thread",
		bgColor: "bg-gradient-to-br from-gray-200 to-gray-300",
		fabricImage: "/final/tshirt_logo.png",
		threadPosition: "left-8 bottom-8",
		fabricPosition: "right-0 top-0",
	},
]

export function ProductShowcaseGrid() {
	return (
		<section className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-800 mb-4">
							Explore Our Thread Categories
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Browse our specialized range of sewing and embroidery threads, crafted for durability, vibrant color, and superior performance in every application.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{productCategories.map((category, index) => (
							<Link
								key={index}
								href={category.href}
								className={`relative ${category.bgColor} rounded-2xl overflow-hidden h-80 group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 focus:outline-none`}
								tabIndex={0}
							>
								{/* Background fabric image */}
								<div
									className={`absolute ${category.fabricPosition} w-full h-full opacity-100`}
								>
									<img
										src={
											category.fabricImage ||
											"/placeholder.svg?height=320&width=240&query=fabric texture"
										}
										alt="Fabric sample"
										className="w-full h-full object-cover"
									/>
								</div>

								{/* Content */}
								<div className="absolute top-8 left-8 right-8">
									<Button
										variant="outline"
										className="bg-white/90 backdrop-blur-sm border-gray-300 hover:bg-white hover:shadow-lg transition-all duration-300 text-gray-700 font-medium pointer-events-none"
									>
										{category.buttonText}
									</Button>
								</div>

								{/* Hover overlay */}
								<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
							</Link>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
