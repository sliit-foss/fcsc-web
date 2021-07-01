import Navbar from '../components/common/navbar/Navbar'
import Footer from '../components/common/footer/Footer'

// @ts-ignore
export default function Layout({ children }) {
	return (
		<div>
			<main>
				<Navbar />
				{children}
				<Footer />
			</main>
		</div>
	)
}
