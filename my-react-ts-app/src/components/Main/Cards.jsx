import './Cards.css'

export default function Cards() {
    return (
        <section className="cards">
          <div className="card fleet">
            <h3>Autoparka pārvaldība</h3>
            <p>Transportlīdzekļu uzraudzība vienuviet</p>
          </div>
    
          <div className="card drivers">
            <h3>Vadītāju atalgojums</h3>
            <p>Automātisks algas aprēķins</p>
          </div>
    
          <div className="card service">
            <h3>Apkopes žurnāls</h3>
            <p>Servisu un termiņu kontrole</p>
          </div>
        </section>
    )
}
