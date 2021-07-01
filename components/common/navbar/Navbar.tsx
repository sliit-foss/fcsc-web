export default function Navbar() {
	return (
		<header className="text-white body-font bg-gradient-to-r from-blue_fcsc via-orange to-blue_fcsc">
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
						viewBox="0 0 24 24"
					>
						<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
					</svg>
					<span className="ml-3 text-xl">FCSC</span>
				</a>
				<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
					<a className="mr-5 hover:text-gray-900">First Link</a>
					<a className="mr-5 hover:text-gray-900">Second Link</a>
					<a className="mr-5 hover:text-gray-900">Third Link</a>
					<a className="mr-5 hover:text-gray-900">Fourth Link</a>
				</nav>
				<button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 text-black">
					Button
					<svg
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						className="w-4 h-4 ml-1"
						viewBox="0 0 24 24"
					>
						<path d="M5 12h14M12 5l7 7-7 7"></path>
					</svg>
				</button>
			</div>
		</header>
	)
}
