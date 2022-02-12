import './App.scss';
import { useRef } from 'react';

function App() {

  const mainRef = useRef();
  const teamRef = useRef();
  const awardRef = useRef();
  const willywoodRef = useRef();
  const contactRef = useRef();

  return (
    <div className="App">
      <div ref={mainRef}></div>
      <div className="navbar">
        <img onClick={() => { mainRef.current.scrollIntoView({ behavior: 'smooth' }) }} src={'joodra_logo.png'} alt="logo" />
        <div className="nav-center">
          <p onClick={() => { teamRef.current.scrollIntoView({ behavior: 'smooth' }) }}>Team</p>
          <p onClick={() => { awardRef.current.scrollIntoView({ behavior: 'smooth' }) }}>Award</p>
          <p onClick={() => { willywoodRef.current.scrollIntoView({ behavior: 'smooth' }) }}>WillyWood</p>
          <p onClick={() => { contactRef.current.scrollIntoView({ behavior: 'smooth' }) }}>Contact</p>
        </div>
      </div>
      <div className="main-hello">
        <h1>We Will Go Hollywood<br /><br />We Are <span>Joodra</span></h1>
      </div>
      <div className="main-screen"></div>
      <div ref={teamRef}>
        <div style={{ height: '150px' }}></div>
        <h1>Team</h1>
        <div className="team-container">
          <div>
            <div className="dark">
              <div className="dark-source">
                <h3>CEO</h3>
                <span>Hyunho Cho</span>
              </div>
            </div>
            <div className="card1"></div>
          </div>
          <div>
            <div className="dark">
              <div className="dark-source">
                <h3>CTO</h3>
                <span style={{ fontSize: '16px' }}>Myeong-gyun Kang</span>
              </div>
            </div>
            <div className="card2"></div>
          </div>
          <div>
            <div className="dark">
              <div className="dark-source">
                <h3>CCO</h3>
                <span>Jaewoong Choi</span>
              </div>
            </div>
            <div className="card3"></div>
          </div>
          <div>
            <div className="dark">
              <div className="dark-source">
                <h3>Designer</h3>
                <span>Donghun Lee</span>
              </div>
            </div>
            <div className="card4"></div>
          </div>
        </div>
      </div>
      <div style={{ height: '160px' }} ref={awardRef}></div>
      <div>
        <h1>Award</h1>
        <div className="award-container">
          <div className="award-img">
            <img src='toss.jpg' alt='toss' />
            <div className="award-caption">
              <h3>{'<'} Toss Found {'>'}<br />Goes to the finals</h3>
            </div>
          </div>
          <div className="award-img" style={{width: '150px'}}>
            <img src='ku_1.png' alt='ku_1' />
            <div className="award-caption">
              <h3>Moving into Korea Univ. Campus Town </h3>
            </div>
          </div>
          <div className="award-img">
            <img src='silver.jpg' alt='silver' />
            <div className="award-caption">
              <h3>Korea Univ. Campus Town Entrepreneurship Competition<br />Silver Awards</h3>
            </div>
          </div>
          <div className="award-img">
            <img style={{border: '2px solid #8b0029', padding: '5px'}} src='ku_2.png' alt='ku_2' />
            <div className="award-caption">
              <h3>Korea Univ. <br />Crimson Startup Club Selection</h3>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: '130px' }} ref={willywoodRef}></div>
      <h1 style={{ marginBottom: '30px' }}>WillyWood</h1>
      <div className="main-willywood">
        <div className="ww-basic">
          <div className="white-box"></div>
          <div className="basic-source">
            <h4>Basic</h4>
          </div>
        </div>
        <div className="ww-premium">
          <div className="white-box"></div>
          <div className="premium-source">
            <h4>Premium</h4>
          </div>
        </div>
      </div>
      <div style={{ height: '100px' }} ref={contactRef}></div>
      <div className="main-contact">
        <h1>Contact</h1>
        <div className="contact-source">
          <p><strong>Tel:</strong> 010-4543-4731</p>
          <p><strong>Email:</strong> pronce7@joodra.com</p>
          <p><strong>Address:</strong> Room 207, 45-9, Goryeodae-ro 26-gil,<br />Seongbuk-gu, Seoul, Republic of Korea</p>
          <iframe title={"map"} src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d558.9224207585108!2d127.03054887481491!3d37.58467675762316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cbca55cf0f5b1%3A0x75af142fb6b503eb!2z7ISc7Jq47Yq567OE7IucIOyEseu2geq1rCDslYjslZTrj5k16rCAIDEwMy0xOA!5e0!3m2!1sko!2skr!4v1644568992462!5m2!1sko!2skr"} />
        </div>
      </div>
      <div className="footer">
        <div className="info">
          <span>Joodra | CEO. Hyunho Cho<br /></span>
          <span>Tel. 010-4543-4731 | Email. pronce7@joodra.com<br />
            Address. Room 207, 45-9, Goryeodae-ro 26-gil, Seongbuk-gu, Seoul, Republic of Korea <br /></span>
          <span>Copyright ⓒ 2021 Joodra All rights reserved.</span>
        </div>
      </div>
    </div>
  );
}

export default App;
