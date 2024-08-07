import './singlePage.css'
import whitelogo from '/src/img/whitelogo.svg'
import grafikdesingicon from '/src/img/grafikdesingicon.svg'
import uxicon from '/src/img/uxicon.svg'
import apps from '/src/img/apps.svg'
import photografy from '/src/img/photografy.svg'
import illustrations from '/src/img/illustrations.svg'
import motiongraficicon from '/src/img/motiongraficicon.svg'
import userimg from '/src/img/userimg.svg'

function App() {
  return (
    <div className="container">

      {/* Header Start */}

      <div className="nav">
        <div className="logo">
          <a href="#"><img src={whitelogo} /></a>
        </div>
        <div className="header-footer-btn">
          <a href="#">Free Consultation</a>
        </div>
      </div>
      <div className="header">
        <h1>Design solutions made easy</h1>
        <p>With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs.</p>
      </div>
      {/* Header End */}

      {/* Box Start */}
      <div className="kutu-container">
        <div className="kutucuk">
          <div className="kutu"><img src={grafikdesingicon} />Graphic Design</div>
          <div className="kutu tek"><img src={uxicon} />UI/UX</div>
          <div className="kutu tek"><img src={apps} />Apps</div>
          <div className="kutu"><img src={photografy} />Illustrations</div>
          <div className="kutu"><img src={illustrations} />Photography</div>
          <div className="kutu"><img src={motiongraficicon} />Motion Graphics</div>
        </div>
      </div>
      {/* Box End */}

      {/* Promotion Start */}
      <div className="tanitim">
        <img src={userimg} />
        <div className="tanitim-txt">
          <h2>I’m Amy, and I’d love to work on your next project</h2>
          <p>I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations to complete mobile apps. I’m also handy with a camera!</p>
          <div className="tanitim-btn">
            <a href="#">Free Consultation</a>
          </div>
        </div>
      </div>
      {/* Promotion End */}

      {/* Footer Start */}
      <div className="nav">
        <a className='logo' href="#"><img src={whitelogo} /></a>
        <div className="header-footer-btn">
          <a href="#">Free Consultation</a>
        </div>
      </div>
      {/* Footer End */}

    </div>
  )
}

export default App
