import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
      
    <div className="container">
      <Head>
        <title>Kinkaid Nolen II</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/pba7pic.css" />
      </Head>

      <div className="section">
        <span>Hi, my name is</span>
        <div className="name">
          <h1>Kinkaid Nolen</h1>
          <h1 className={styles.colorGray}>a UI/UX Designer</h1>
        </div>
        <p>I design exceptional websites as well as applications. I specialize in UI/UX Design, Responsive Web Design, and Frontend Development.</p>
      </div>

      <div className="section">
        <h1 className="title">Projects</h1>
        <div className="circle"></div>

        <div className={styles.sectionWrapper}>
          <div className="projectBorder">
            <h2>Bank App</h2>
            <span>React.js</span>
          </div>
          <div id={styles.marginTop} className="projectBorder">
            <h2>Strut Boutique</h2>
            <span>React.js</span>
          </div>
        </div>
      </div>

      <div className="section">
        <h1 className="title">Resume</h1>
        <div className="circle"></div>

        <div className={styles.resumeWrapper}>
          <div className="projectBorder">
            <div className="projectWrapper">
              <h2 id={styles.marginBottom}>Clients</h2> 
              <h4>Strut Boutique</h4>
              <p>A women's clothing boutique in Detriot Michigan</p>
            </div>
            <div className="projectWrapper">
              <h4>MindBodyPilates</h4>
              <p>A pilates studio in Massachusetts. There are also yoga classes as well.</p>
            </div>
            <div className="projectWrapper">
              <h4>Phii for Hair</h4>
              <p>A Barbershop in Memphis Tennessee, where you get the best cuts</p>
            </div>
          </div>

          <div id={styles.grid} className="projectBorder">
            <div>
              <h2 id={styles.marginBottom}>Skills</h2> 
              <h4>Design</h4>
              <p>UI/UX Design <br/>
                Wireframing <br/>
                User Flows <br/>
                Protoyping <br/>
                UX Research <br/>
                Google Analytics <br/>
                </p>
            </div>
            <div id={styles.secondItem} >
              <h4>Technologies</h4>
              <p>HTML5<br/>
                CSS/SASS<br/>
                Bootstrap<br/>
                JavaScript <br/>
                Node.js <br/>
                php <br/>
                </p>
            </div>
            <div>
              <h4>Tools</h4>
              <p>Figma<br/>
                Adobe XD<br/>
                Adobe Photoshop<br/>
                Adobe Illustrator <br/>
                Visual Studio Code <br/>
                </p>
            </div>
          </div>  
        </div>  
      </div>

      <div className="section">
        <h1 className="title">About Me</h1>
        <div className="circle"></div>
        <div className="aboutWrapper">
          <h2 id={styles.openSans}>Who Am I?</h2>
          <p>My name is KInkaid Nolenk, and I am a UI/UX Designer and Frontend Developer from Memphis, Tennessee. I have a B.S. Biology. Design and Code are my two forms of art.</p>
          <h2 id={styles.openSans}>Why I do what I do?</h2>
          <p>I have a true passion for web design and development. Learning to code has been a major improvement in my Life. Being able to create something that’s so ingrained in our culture is beyond rewarding. It’s an enriching experience to write clean code, and be apart of solutions that turn goals into reality.</p>
        </div>
      </div>

      <div className="section">
        <h1>Contact</h1>
        <div className="circle"></div>
        <div className="aboutWrapper">
          <h2 id={styles.openSans}>Get in Touch</h2>
          <p>Being able to create something that’s so ingrained in our culture is beyond rewarding. It’s an enriching experience to write clean code, and be apart of solutions that turn goals into reality.</p>
          <button>CONTACT ME</button>
        </div>
      </div>
    </div>

    

  )
}
