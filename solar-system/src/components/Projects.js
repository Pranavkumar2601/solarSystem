import React from "react";
import "./Projects.css";
// import EarthBackground from "./EarthBackground";
import BBLogo from "../components/assets/images/BBLogo.png";
import ELogo from "../components/assets/images/ELogo.png";
import Portfolio from "../components/assets/images/Portfolio.png";
import solarsystem from "../components/assets/images/solarsystem.png";
import JupiterSystem from "./JupiterBackground";

function MyWorks() {
  return (
    <div className="container">
      {/* Jupiter Background rendered behind the content */}
      <div className="background">
        <JupiterSystem />
      </div>

      <div className="header">
        <button>Repo</button>
      </div>

      <div className="content">
        <h2>My Works</h2>

        <div className="works">
          {/* Project 1 */}
          <div className="work">
            <img src={BBLogo} alt="Beyond The Boundary" />
            <h3>Beyond The Boundary</h3>
            <p>
              <li>
                This system utilizes machine learning to revolutionize cricket
                coaching by predicting player performance and recommending
                strategic substitutions during matches.
              </li>
              <li>
                The foundation lies in gathering and meticulously preparing
                historical data on player performance metrics like runs scored
                and wickets taken. This data is then fed into a powerful machine
                learning model.
              </li>
              <li>
                By analyzing patterns within this data, the model is trained to
                predict a player's future performance in the ongoing match..
              </li>
            </p>
            <div className="work-tags">
              <span>MACHINE LEARNING</span>
              <span>FLASK</span>
              <span>PYTHON</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
            {/* Project link */}
            <a
              href="https://github.com/Pranavkumar2601/BeyondTheBoundary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Repository
            </a>
            <a
              href="http://ec2-13-201-168-4.ap-south-1.compute.amazonaws.com:8080/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>

          {/* Project 2 */}
          <div className="work">
            <img src={ELogo} alt="Ecommerce" />
            <h3>E-ommerce</h3>
            <p>
              <li>
                Built an e-commerce website using Angular framework Key elements
                include: Product Listing and Browsing: Displaying products with
                details (name, price, description) and allowing users to browse
                by category.{" "}
              </li>
              <li>
                Content Routing: Seamless navigation between different website
                sections (Home, Products, Cart, Checkout) using Angular routing
                Shopping Cart: Enabling users to add, view, modify quantities,
                and remove items from their cart.
              </li>
              <li>
                Checkout Process: Allowing users to review cart items, enter
                shipping details, and complete the purchase
              </li>
            </p>
            <div className="work-tags">
              <span>ANGULAR</span>
            </div>
            {/* Hosted link */}
            <a
              href="https://yourdomain.com/ocean-explorer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Project
            </a>
          </div>

          {/* Project 3 */}
          <div className="work">
            <img src={Portfolio} alt="Sand dunes" />
            <h3>Portfolio</h3>
            <p>
              <li>
                I designed and developed a comprehensive website that showcases
                my skills, project methodologies, and the tangible impact of my
                work. Additionally, I included relevant outcomes and valuable
                lessons learned from my projects.
              </li>
              <li>
                Through my website, I highlight my expertise, share insights
                into my project approaches, and emphasize the positive outcomes
                resulting from my contributions
              </li>
              <li>
                The website also features my personal details, providing a
                holistic view of my professional journey.
              </li>
            </p>
            <div className="work-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>BOOTSTRAP</span>
            </div>
            {/* Project link */}
            <a
              href="https://pranav26.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>

          {/* Project 4 */}
          <div className="work">
            <img src={solarsystem} alt="Solar-System" />
            <h3>Personal Website</h3>
            <p>
              <li>
                Developed a dynamic web application that simulates a realistic
                solar system, featuring interactive planets, moons, and star
                fields.
              </li>
              <li>
                Implemented complex 3D models and animations using Three.js and
                WebGL to create a visually immersive experience.
              </li>
              <li>
                Enhanced UI/UX by implementing a responsive design with smooth
                transitions and animations
              </li>
            </p>
            <div className="work-tags">
              <span>REACT</span>
              <span>THREE</span>
              <span>WEBGl</span>
              <span>JAVASCRIPT</span>
            </div>
            {/* Hosted link */}
            <a
              href="https://github.com/Pranavkumar2601/solarSystem"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyWorks;
