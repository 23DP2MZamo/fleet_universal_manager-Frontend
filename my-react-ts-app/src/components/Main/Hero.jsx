import { useState, useEffect } from 'react'
import "./Hero.css";


const slides = [
  {
    image: "/images/What-are-the-benefits-of-owning-your-fleet-of-trucks-and-trailers.jpg",
    title: "Autoparka pārvaldība",
    text: "Pilnīga transportlīdzekļu kontrole vienā sistēmā",
    backgroundPosition: "center",
  },
  {
    image: "/images/fleet-driver.png",
    title: "Vadītāju uzskaite",
    text: "Precīza maršrutu un atalgojuma aprēķināšana",
    backgroundPosition: "center",
  },
  {
    image: "https://audik.lv/wp-content/uploads/2020/02/tehniska-apkope-scaled.jpg", 
    title: "Apkopes kontrole",
    text: "Svarīgu termiņu un servisu uzraudzība",
    backgroundPosition: "center top",
  },
];

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="hero"
      style={{ 
        backgroundImage: `url(${slides[index].image})`,
        backgroundPosition: slides[index].backgroundPosition || 'center'
      }}
    >
      <div className="hero-overlay">
        <h1>{slides[index].title}</h1>
        <p>{slides[index].text}</p>

        <div className="hero-controls">
          <button onClick={() => setIndex(index - 1 < 0 ? slides.length - 1 : index - 1)}>
            ← Iepriekš
          </button>
          <button onClick={() => setIndex((index + 1) % slides.length)}>
            Nākamais →
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero;
