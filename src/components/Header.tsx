import { Component } from "react";
import { ModeToggle } from "@/components/ui/dropdown-theme";
import profil from "@/assets/profil-rounded.png";
import TypeIt from "typeit-react";

const scrollToTop = () => {
	window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};
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
				py-4 px-10"
			>
				{/* Photo et nom à gauche */}
				<div className="flex items-center">
					<img
						loading="lazy"
						src={profil}
						alt="CAILLARD ALEXANDRE"
						className="w-10 h-10 rounded-full mr-3 hover:scale-[150%]"
					/>
					<TypeIt
						className="font-bold text-xl hover:text-primary cursor-pointer"
						href="#home"
						onClick={scrollToTop}
						element={"a"}
					>
						CAILLARD ALEXANDRE
					</TypeIt>
				</div>

				{/* Menu à droite */}
				<nav>
					<ul className="flex space-x-4 items-center">
						<li>
							<a href="#about">À propos</a>
						</li>
						<li>
							<a href="#portfolio">Portfolio</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
						<li>
							<ModeToggle />
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}
