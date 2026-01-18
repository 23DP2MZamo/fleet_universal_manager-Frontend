import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>Fleet Universal Manager</h1>
        <nav>
          <ul>
            <li><a href='#'>Sākums</a></li>
            <li><a href='#'>Sistēma</a></li>
            <li><a href='#'>Funkcionalitāte</a></li>
            <li><a href='#'>Dokumentācija</a></li>
            <li><a href='#'>Kontakti</a></li>
          </ul>

        </nav>
        <button className='dropdown-button'>Izvelne</button>
        <button className='login-button'>Login</button>
      </header>

      <main>
        <section className='hero'>
          <h1>Sveicinām jūs mūsu sistēmā!</h1>
          <p>Vieda autoparka, maršrutu un tehniskās apkopes vadības sistēma.</p>
          <p>Centralizēta platforma transporta uzņēmumiem efektīvai darba organizēšanai.</p>
        </section>

        <section className='about'>
          <h2>Fleet Universal Manager ir izstrādāta mazajiem un vidējiem transporta uzņēmumiem,
          kuriem nepieciešams vienkāršs, uzticams un efektīvs vadības risinājums.</h2>
        </section>

        <section className='cards'>
          <div className='trucks'>
            <h3>Autoparka pārvaldība</h3>
            <p>Transportlīdzekļu stāvokļa, nobraukuma un pieejamības uzraudzība vienuviet.</p>
          </div>

          <div className='drivers'>
            <h3>Vadītāju atalgojums</h3>
            <p>Automātiska algas aprēķināšana, balstoties uz nobrauktajiem kilometriem un likmi.</p>
          </div>
          
          <div className='servicelog'>
            <h3>Apkopes žurnāls</h3>
            <p>Tehnisko apkopju, apskašu un svarīgu termiņu kontrole.</p>
          </div>
        </section>
        <section className='moretext'>
          <h3>Sistēma apvieno maršrutu uzskaiti, vadītāju darba kontroli un transportlīdzekļu
tehniskā stāvokļa pārraudzību vienā lietotājam draudzīgā vidē.</h3>
        </section>
      </main>
      <footer>
        <p>Fleet Universal Manager © 2026</p>
      </footer>
    </>
  )
}

export default App
