
import './App.css';
import About from './About';
import Playlist from './Playlist';
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import SocialIcons from './SocialIcons';
import { faDeezer, faFacebook, faInstagram, faItunes, faSoundcloud, faSpotify, faTwitter, faWeixin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from './Footer';



function App() {

  function handleListenClick() {
    //do something here

  }

  function handleWatchClick() {
    // do something here

  }
  function handleMouseOver(e){
   //do something here

  }

  return (
    <div className="App">
      <div>
        <div className='landingpage-container'>
          <h1 className="mainheader">
            AYSHAN
          </h1>
          <div className="subheader">
            <ListGroup horizontal>
              <ListGroupItem>
                <h3 className='subheadertext'>SINGER</h3>
                </ListGroupItem>
              <ListGroupItem>
                <h3 className='subheadertext1'>SONGWRITER</h3>
                </ListGroupItem>
            </ListGroup>

            <div>
              <ListGroup horizontal>
                <ListGroupItem> 
                  <Button className='landingpage-buttons' 
                  onClick={handleListenClick}
                  onMouseOver={handleMouseOver}>
                    LISTEN HERE
                    </Button>
                  </ListGroupItem>
                <ListGroupItem> 
                  <Button className='landingpage-buttons' 
                  onClick={handleWatchClick}
                  onMouseOver={handleMouseOver}>
                
                  WATCH HERE</Button>
                  </ListGroupItem>
              </ListGroup>
            </div>
            <SocialIcons
              iconOne={<FontAwesomeIcon icon={faSpotify} />}
              iconTwo={<FontAwesomeIcon icon={faDeezer} />}
              iconThree={<FontAwesomeIcon icon={faItunes} />}
              iconFour={<FontAwesomeIcon icon={faSoundcloud} />}
            />
          </div>

        </div>
        <div>
          <About />
        </div>
        <Playlist
          title={"Emoji"}
          text={"Afro house vibes"}
          img={"https://i.scdn.co/image/ab67616d0000b273ece90ee9bb826335dadb30fa"}
        />
        <Playlist
          title={"Emoji"}
          text={"Afro house vibes"}
          img={"https://i.scdn.co/image/ab67616d0000b273ece90ee9bb826335dadb30fa"}
        />
        <div >
        </div>

      </div>
      <div>
        <div className='signoff-container'>
          <SocialIcons
            iconOne={<FontAwesomeIcon icon={faInstagram} />}
            iconTwo={<FontAwesomeIcon icon={faTwitter} />}
            iconThree={<FontAwesomeIcon icon={faFacebook} />}
            iconFour={<FontAwesomeIcon icon={faWeixin} />}
          />
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;