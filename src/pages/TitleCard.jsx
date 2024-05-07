import "../pages/TitleCard.css";
import "../pages/Overall.css";
import pfp from "../media/pfp.jpg";
import twt from "../media/twitter(1).png";
import dis from "../media/discord.png";
import lin from "../media/linkedin.png";
import git from "../media/github.png";
import React, { useEffect } from 'react';


export default function TitleCard() {
  
  useEffect(() => {
    document.title = 'Katelyn Brown - Portfolio'; // Set the desired title here
  }, []); // The empty dependency array ensures this effect runs only once after initial render

  return(
    <div className='wholePage'>
            <nav className="pageNav">
                <a href="#current">Current Projects</a>
                <a href="#skills">Skills</a>
                <a href="#About">About Me</a>
                <a href="#Contact">Contact/Resume</a>
            </nav>
            <article className="pageTitle">
                <div className="titlePFP">
                  <img src={pfp} className="pfp"></img>
                </div>
                <div className="titleName">
                  <h2>Katelyn Brown</h2>
                  <p>Working to make something new, one day at a time.</p>
                </div>
                <div className="titleJob">
                  <h2>Web Design & Development</h2>
                  <p>Hello! I'm a current student at Lewis & Clark State College earning my associates degree in Web Design & Development</p>
                </div>
            </article>
            <div className="pageSocial">
                <button>
                  <a href="https://twitter.com/kate91119" className="link-button">
                    <img src={twt} className="socialIcons"></img><br></br>Twitter
                  </a>
                </button>

                <button>
                  <a href="https://discord.com/" className="link-button">
                    <img src={dis} className="socialIcons"></img><br></br>Discord
                  </a>
                </button>

                <button> 
                    <a href="https://www.linkedin.com/in/kabrown606/" className="link-button">
                      <img src={lin} className="socialIcons"></img><br></br>LinkedIn
                    </a>
                </button>
                
                <button>
                  <a href="https://github.com/kate91119" className="link-button">
                    <img src={git} className="socialIcons"></img><br></br>GitHub
                  </a>
                </button>
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
                  Current projects include cleaning up/refining my portfolios, a finance app for my capstone class, and a passion project to help me better improve my skills with React and script coding!</div>
                </div>
                <div className="currentSlideshow">
                  <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRpi7K9gokRUxLCIla5VgiCgljC7EU4FegwluEI8lRthK3gPADSZ_9ySisKg1Q1cInqMjTx69YiyrPe/embed?start=true&loop=true&delayms=5000" 
                  className='WIPslides' frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                </div>
            </footer>
        </div>
  )
  };