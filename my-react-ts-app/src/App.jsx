import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Main/Hero'
import Cards from './components/Main/Cards'
import About from './components/Main/About'
import MoreText from './components/Main/MoreText'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Cards />
        <About />
        <MoreText />
      </main>
      <Footer />
    </>
  )
}

export default App
