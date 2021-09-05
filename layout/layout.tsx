import Navbar from '../components/common/navbar/Navbar'
import Footer from '../components/common/footer/Footer'

export default function Layout({ children }: any): JSX.Element {
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
