import brands from "../Assets/brands.png"
import smiley from "../Assets/smiley.png"
import softwareeng from "../Assets/softwareeng.png"
import trolley from "../Assets/trolley.png"
import introImg from "../Assets/introImg.png"
import "./home.css"

function Home() {
  return (
    <div className="container">
      <div className="hero">
        <div>
          <h1 className="txt-hero">Realize your vision with our <span className="txt-highlight">out-of-the-box recruiting</span></h1>
          <h4 className="sub-txt">Our recruiting concept is revolutionary in that we have engineers recruiting engineers for you - designers recruiting designers, product experts recruiting other product people. We found out that experts in a field can spot another expert faster than regular recruiting by pshycology and business majors. Our project case studies are living proof.</h4>
        </div>
        <div>
          <img src={introImg} alt="" />
        </div>
      </div>

      <div className="brand">
 
       <img src={brands} alt="" />
      </div>

      <ul className="services">
        <li>
            <img src={softwareeng} alt="" />
          <p>Software Engineering</p>
        </li>
        <li>
            <img src={smiley} alt="" />
          <p>IT Recruitment</p>
        </li>
        <li>
            <img src={trolley} alt="" />
          <p>Shopify</p>
        </li>
      </ul>
    </div>
  
  );
}
    
    
export default Home;