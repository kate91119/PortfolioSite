import "../pages/TitleCard.css";
import pfp from "../media/placeholderPfp.jpg";
import slide1 from "../media/currentSlides/IndexFramework.jpg";
import slide2 from "../media/currentSlides/RelicsPopUpFramework.jpg";
import slide3 from "../media/currentSlides/PortfolioWebsite.png";


export default function TitleCard() {
  return(
    <div className='wholePage'>
            <nav className="pageNav">
                <a href="#current">Current Projects</a>
                <a href="#">Skills</a>
                <a href="#">About Me</a>
                <a href="#">Contact</a>
            </nav>
            <article className="pageTitle">
                <div className="titlePFP">
                  <img src={pfp} className="pfp"></img>
                </div>
                <div className="titleName">
                  <h1>Katelyn Brown</h1>
                  <p>Working to make something new, one day at a time.</p>
                </div>
                <div className="titleJob">
                  <h2>Web Design & Development</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </article>
            <nav className="pageLink">
                <button>About Me</button>
                <button>Contact</button>
            </nav>
            <div className="pageSocial">
                <button>Twitter</button>
                <button>Discord</button>
                <button>LinkedIn</button>
                <button>GitHub</button>
            </div>
            <footer className="pageCurrent" id="current">
                <div className="currentList">
                  <h1>Current Project(s)</h1>
                  <ul>
                    <li>Trailblaze Website</li>
                    <li>Finance App</li>
                    <li>Portfolio</li>
                  </ul>
                  <div>Description: <br></br> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua</div>
                </div>
                <div className="currentSlideshow">
                  <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRpi7K9gokRUxLCIla5VgiCgljC7EU4FegwluEI8lRthK3gPADSZ_9ySisKg1Q1cInqMjTx69YiyrPe/embed?start=true&loop=true&delayms=5000" 
                  className='WIPslides' frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                </div>
            </footer>
        </div>
  )
  };