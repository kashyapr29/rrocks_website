import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const shadeCards = [
	{
		title: "POLYESTER",
		subtitle: "SHADE CARD",
		image: "/final/download/polyster_front.png",
		downloadUrl: "/final/download/polyster_shade_card.pdf",
	},
	{
		title: "GERMAN",
		subtitle: "SHADE CARD",
		image: "/final/download/german_front.png",
		downloadUrl: "/final/download/german_shade_card.pdf",
	},
  // TODO: Add more shade cards
	// {
	// 	title: "HIGH TENACITY POLYESTER",
	// 	subtitle: "SHADE CARD",
	// 	image: "/high-tenacity-polyester-shade-card.png",
	// 	downloadUrl: "/downloads/high-tenacity-polyester-shade-card.pdf",
	// },
	// {
	// 	title: "EMBROIDERY",
	// 	subtitle: "SHADE CARD",
	// 	image: "/embroidery-shade-card.png",
	// 	downloadUrl: "/downloads/embroidery-shade-card.pdf",
	// },
]

export function ShadeCardSection() {
	return (
		<section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
			<div className="container mx-auto px-4">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 mb-4 tracking-tight">
							Shade Card
						</h2>
						<div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-8 rounded-full"></div>
						<p className="text-xl text-gray-700 max-w-3xl mx-auto font-light">
							Download our comprehensive shade cards to explore our complete color range and make informed decisions for
							your projects.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
						{shadeCards.map((card, index) => (
							<div
								key={index}
								className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-blue-200 transition-all duration-300 transform hover:-translate-y-2 border border-blue-100"
							>
								{/* Image Section */}
								<div className="aspect-square bg-gradient-to-br from-blue-100 via-white to-blue-200 flex items-center justify-center">
									<img
										src={card.image || "/placeholder.svg?height=300&width=300&query=thread shade card"}
										alt={`${card.title} ${card.subtitle}`}
										className="max-w-[100%] max-h-[100%] object-contain mx-auto drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
										style={{
											display: "block",
											margin: "0",
											background: "white",
											borderRadius: "1rem",
											padding: "0.5rem",
										}}
									/>
								</div>

								{/* Content Section */}
								<div className="p-6">
									<div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center py-4 px-4 rounded-xl mb-6 shadow">
										<h3 className="font-bold text-xl leading-tight tracking-wide">{card.title}</h3>
										<p className="text-sm font-medium mt-1 opacity-80">{card.subtitle}</p>
									</div>

									<a href={card.downloadUrl} download className="block w-full">
										<Button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-300">
											<Download className="w-5 h-5" />
											Download
										</Button>
									</a>
								</div>
							</div>
						))}
					</div>

					<div className="text-center mt-16">
						<p className="text-gray-700 text-lg font-medium">
							Need a custom shade card or have specific color requirements?{" "}
							<a
								href="/contact"
								className="text-blue-600 hover:text-blue-700 font-semibold underline transition-colors"
							>
								Contact our team
							</a>{" "}
							for personalized assistance.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
