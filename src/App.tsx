import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import SkillsComponent from "./components/skills";

function App() {
	return (
		<ThemeProvider
			defaultTheme="dark"
			storageKey="vite-ui-theme"
		>
			<div>
				{/* Header */}
				<Header />
				{/* Section Accueil */}
				<section
					id="home"
					className="bg-gradient-to-tr  from-[rgba(55,60,245,1)] from-0% to-[rgba(234,161,15,0.90)] to-100.2% 
					dark:bg-gradient-to-tr dark:from-neutral-900 dark:via-blue-900 dark:to-black
					text-white h-screen flex items-center justify-center"
				>
					<div className="flex flex-col text-center gap-8">
						<h1 className="font-bold animate-fadeInShort">SALUT, JE SUIS</h1>
						<h1 className="text-6xl animate-fadeInLong">
							<i>Alexandre</i> CAILLARD
						</h1>
						<h5 className="mt-10">
							Développeur web full-stack de la région Toulousaine
						</h5>
					</div>
				</section>
				{/* Section À propos */}
				<section
					id="about"
					className="py-16 p-12"
				>
					<div className="container mx-auto text-center">
						<h2 className="text-[2rem] font-extrabold mb-8">À propos de moi</h2>
						<SkillsComponent />
					</div>
				</section>
				{/* Section Projets */}
				<section
					id="projects"
					className="py-16"
				>
					<div className="container mx-auto text-center">
						<h2 className="text-3xl font-extrabold mb-8">Mes Projets</h2>
						{/* Galerie de projets, descriptions, liens, etc. */}
					</div>
				</section>
				{/* Section Contact */}
				<section
					id="contact"
					className="py-16"
				>
					<div className="container mx-auto text-center">
						<h2 className="text-3xl font-extrabold mb-8">Contacte-moi</h2>
						<form>{/* Champs du formulaire */}</form>
					</div>
				</section>
				{/* Footer */}
				<footer className="bg-white shadow-sm">
					<div className="container mx-auto py-4 text-center">
						{/* Liens réseaux sociaux, copyright, etc. */}
					</div>
				</footer>
			</div>
		</ThemeProvider>
	);
}

export default App;
