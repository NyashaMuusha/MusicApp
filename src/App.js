
import './App.css';
import About from './About';
import Playlist from './Playlist';
import { Button,Container, ListGroup, ListGroupItem } from "reactstrap";
import Image from "react-bootstrap/Image";
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
  function handleMouseOver() {
   

  }

  return (
    <div className="App">
      <Container>
      <div >
        <div className='landing-image'>
        <Image
          src="images/logo.png"
          alt="logo" />

        </div>

        <div className='landingpage-container'>
          <div>
          <h1>AYSHAN</h1>
            <div className='subheader-text'>
            <ListGroup horizontal>
                <ListGroupItem>
                  <h3 style={{paddingRight:225}}>
                    SINGER
                  </h3>  
                </ListGroupItem>

                <ListGroupItem>
                  <div>
                  <h3>
                    SONGWRITER</h3>
                  </div>
                </ListGroupItem>
              </ListGroup>

            </div>

          </div>


           
       
            <div className="subheader">

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
          <Image
            src="images/Coffee.png"
            alt="coffee" />
            <Button
            onMouseOver={handleMouseOver}>
              Buy Me Coffee
            </Button>
          <SocialIcons
            iconOne={<FontAwesomeIcon icon={faInstagram} />}
            iconTwo={<FontAwesomeIcon icon={faTwitter} />}
            iconThree={<FontAwesomeIcon icon={faFacebook} />}
            iconFour={<FontAwesomeIcon icon={faWeixin} />}
          />
        </div>
        <Footer />
      </div>

      </Container>
     
    </div>
  );
}

export default App;