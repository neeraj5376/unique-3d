
import { Canvas } from '@react-three/fiber'
import './App.css'
import Dog from './com/Dog'

function App() {

  return (
   <>
   
   <main>
    <div className="images">
          <img id='tomorrowland' src="./tommorowland.png" alt="" />
          <img id='navy-pier' src="./navy-pier.png" alt="" />
          <img id='msi-chicago' src="./msi-chicago.png" alt="" />
          <img id='phone' src="./phone.png" alt="" />
          <img id='kikk' src="./kikk.png" alt="" />
          <img id='kennedy' src="./kennedy.png" alt="" />
          <img id='opera' src="./opera.png" alt="" />
        </div>
    <Canvas style={{
      height:"100vh",
      width:"100vw",
      position:"fixed",
      top:"0",
      left:"0",
      zIndex:"1",
      backgroundImage:"url(./col/background-l.png)",
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover"
    }}>
    <Dog />
    </Canvas>
    <section id='section-1' >
          <nav>
            <div className="nav-elem">
              <h3 style={{top:"-1"}}><img style={{height:"50PX",top:"0"}} src="./download.png"/></h3>
              <h3>made by neeraj</h3>
            </div>
            <div className="nav-elem">
              <i className="ri-arrow-right-s-line"></i> Our Show reel
            </div>
            <div className="nav-elem">
              <i className="ri-menu-3-line"></i>
            </div>
          </nav>
          <div className="middle">
            <div className="left">
              <h1>WE <br /> Make <br /> Good <br />Shit</h1>
            </div>
            <div className="right"></div>
          </div>
          <div className="bottom">
            <div className="left"></div>
            <div className="right">
              <p>
                Dogstudio is a multidisciplinary <br />
                creative studio at the intersection <br />
                of art, design and technology.
              </p>
            </div>
          </div>

          <div className="first-line"></div>
          <div className="second-line"></div>

        </section>
    <section id='section-2' >
          <div className="titles">
            <div img-title="tomorrowland" className="title">
              <small>2020 - ONGOING</small>
              <h1>Tomorrowland</h1>
            </div>
            <div img-title="navy-pier" className="title">
              <small>2020 - ONGOING</small>
              <h1> Navy Pier</h1>
            </div>
            <div img-title="msi-chicago" className="title">
              <small>2020 - ONGOING</small>
              <h1>  MSI Chicago</h1>
            </div>
            <div img-title="phone" className="title">
              <small>2020 - ONGOING</small>
              <h1>This Was Louise’s Phone</h1>
            </div>
            <div img-title="kikk" className="title">
              <small>2020 - ONGOING</small>
              <h1>KIKK Festival 2018</h1>
            </div>
            <div img-title="kennedy" className="title">
              <small>2020 - ONGOING</small>
              <h1>The Kennedy Center</h1>
            </div>
            <div img-title="opera" className="title">
              <small>2020 - ONGOING</small>
              <h1>Royal Opera Of Wallonia</h1>
            </div>
          </div>


        </section>
    <section id='section-3'>
      <div className='top'>
        <div className='left'>
          <h3>Lorem ipsum, dolor <be/> sit amet consectetur adipisicing elit.<br/> Laborum culpa minus soluta <br/>veniam hic quisquam?
          </h3>
        </div>
        <div className='right'></div>
      </div>
      
    </section>
    <section id="section-4">
      <div className='bottom'>
        <div className="left"></div>
        <div className="right">
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe vitae provident ipsa doloremque error, consequuntur voluptatem incidunt maxime earum veritatis nulla perspiciatis repellat totam at aperiam architecto consectetur odit velit. Molestiae veritatis iure eaque itaque atque corrupti fuga recusandae ducimus nostrum repellendus quisquam quod asperiores tempora inventore, quia tempore a.</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe vitae provident ipsa doloremque error, consequuntur voluptatem incidunt maxime earum veritatis nulla perspiciatis repellat totam at aperiam architecto consectetur odit velit. Molestiae veritatis iure eaque itaque atque corrupti fuga recusandae ducimus nostrum repellendus quisquam quod asperiores tempora inventore, quia tempore a.</p>
        </div>
      </div>
    </section>
    </main>
   </>
  )
}

export default App
