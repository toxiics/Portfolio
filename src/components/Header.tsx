import { Component } from "react";
import profil from "@/assets/profil-rounded.png";
import { ModeToggle } from "@/components/ui/dropdown-theme";

export default class Header extends Component {
	render() {
		return (
			// <header className="bg-white shadow-sm">
			// 	<nav className="container mx-auto py-4">
			// 		<ul className="flex space-x-4">
			// 			<li>
			// 				<a href="#home" className="text-gray-800">
			// 					Accueil
			// 				</a>
			// 			</li>
			// 			<li>
			// 				<a href="#about" className="text-gray-800">
			// 					À propos
			// 				</a>
			// 			</li>
			// 			<li>
			// 				<a href="#projects" className="text-gray-800">
			// 					Projets
			// 				</a>
			// 			</li>
			// 			<li>
			// 				<a href="#contact" className="text-gray-800">
			// 					Contact
			// 				</a>
			// 			</li>
			// 		</ul>
			// 	</nav>
			// </header>

			<header
				className="flex justify-between items-center fixed w-full 
				bg-background text-foreground hover:bg-accent hover:text-accent-foreground
				py-4 px-20"
			>
				{/* Photo et nom à gauche */}
				<div className="flex items-center">
					<img
						loading="lazy"
						src={profil}
						alt="CAILLARD ALEXANDRE"
						className="w-10 h-10 rounded-full mr-3 hover:scale-[150%]"
					/>
					<span className="font-bold text-xl">CAILLARD ALEXANDRE</span>
				</div>

				{/* Menu à droite */}
				<nav>
					<ul className="flex space-x-4 items-center">
						<li>
							<a
								href="#about"
								className="hover:underline wavy-underline"
							>
								À propos
							</a>
						</li>
						<li>
							<a
								href="#portfolio"
								className="hover:underline"
							>
								Portfolio
							</a>
						</li>
						<li>
							<a
								href="#contact"
								className="hover:underline"
							>
								Contact
							</a>
						</li>
						<li>
							<div className="">
								<ModeToggle />
							</div>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}
