import Hero from "./components/Hero/Hero"
import './App.css'
import Services from "./components/Services/Services"
import WhereToBuy from "./components/WhereToBuy/WhereToBuy"
import DownloadTheApp from "./components/DownloadTheApp/DownloadTheApp"
import Footer from "./components/Footer/Footer"


const App = () => {
  return (
    <>
    <Hero />
    <Services />
    <WhereToBuy />
    <DownloadTheApp />
    <Footer />
    </>
  )
}

export default App