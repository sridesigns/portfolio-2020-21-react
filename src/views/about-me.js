import React from 'react'
import { Link } from 'react-router-dom'

import Helmet from 'react-helmet'

import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './about-me.module.css'

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>About Me - Sriram Venugopal</title>
        <meta
          name="description"
          content="Hi. This is Sriram and you are viewing my portfolio. Feel free to reach out :)"
        />
        <meta property="og:title" content="About Me - Sriram Venugopal" />
        <meta
          property="og:description"
          content="Hi. This is Sriram and you are viewing my portfolio. Feel free to reach out :)"
        />
      </Helmet>
      <div className={styles.navbar}>
        <div className={styles.container1}>
          <div className={styles.container2}>
            <Link to="/" className={styles.navlink}>
              <img
                src="/playground_assets/logo.svg"
                className={` ${projectStyles.thqImage} ${projectStyles.thqLink} ${styles.image} `}
              />
            </Link>
          </div>
          <div className={styles.div}>
            <Link to="/" className={` ${projectStyles.thqLink} ${styles.text} `}>
              <span className={styles.text1}>Work</span>
            </Link>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className={` ${projectStyles.thqLink} ${styles.span} `}
            >
              <span className={styles.text2}>Play</span>
            </a>
            <Link to="/about-me" className={` ${projectStyles.thqLink} ${styles.text3} `}>
              About
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.container3}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.text4} `}>
          <span className={styles.text5}>
            Hello There,Â 
            <br />
            Hope you are having a<span className={styles.text6}>great</span>
            day!
          </span>
        </h1>
        <span className={styles.text7}>
          Iâm a UX Designer based out of Chennai, India. I currently work at Tata Consultancy
          Services (TCS) for the past 9+years. I completed my Electronics and Instrumentation
          Engineering from RMK Engineering College in 2011 and joined TCS the same year.
        </span>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default AboutMe
