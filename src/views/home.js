import React from 'react'
import { Link } from 'react-router-dom'

import Helmet from 'react-helmet'

import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles.home}>
      <Helmet>
        <title>Sriram Venugopal</title>
        <meta
          name="description"
          content="Hi. This is Sriram and you are viewing my portfolio. Feel free to reach out :)"
        />
        <meta property="og:title" content="Sriram Venugopal" />
        <meta
          property="og:description"
          content="Hi. This is Sriram and you are viewing my portfolio. Feel free to reach out :)"
        />
      </Helmet>
      <div className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.container01}>
            <img
              src="/playground_assets/logo.svg"
              className={` ${projectStyles.thqImage} ${styles.image} `}
            />
          </div>
          <div className={styles.div}>
            <a href="#title-work" className={` ${projectStyles.thqLink} ${styles.text} `}>
              <span className={styles.text01}>Work</span>
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className={` ${projectStyles.thqLink} ${styles.span} `}
            >
              <span className={styles.text02}>Play</span>
            </a>
            <Link to="/about-me" className={` ${projectStyles.thqLink} ${styles.text03} `}>
              About
            </Link>
          </div>
        </div>
      </div>
      <div id="landing" className={styles.container02}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.text04} `}>
          ðÂ  Hello,I&apos;m Sriram Venugopal.
        </h1>
        <span className={styles.text05}>
          I am a UXÂ Designer, based out of Chennai, India. I pursue opportunities where I can solve
          problems and create an impact through design.
          <br />
        </span>
        <a
          href="https://tcs.com"
          target="_blank"
          rel="noreferrer noopener"
          className={` ${projectStyles.thqLink} ${styles.text06} `}
        >
          <span data-type="span" className={styles.text07}>
            Currently @
          </span>

          <span className={styles.text08}>Tata Consultancy Services</span>
        </a>
      </div>
      <div id="contact" className={styles.container03}>
        <a href="mailto:msgsrive@gmail.com?subject=Hello :)">
          <div className={` ${projectStyles.thqLink} ${styles.container04} `}>
            <svg viewBox="0 0 1024 1024" className={` ${projectStyles.thqIcon} ${styles.icon} `}>
              <title>mail</title>
              <path d="M128 337.963l359.552 251.691c14.507 10.027 33.92 10.496 48.939 0l359.509-251.691v430.037c0 11.605-4.693 22.229-12.587 30.080s-18.475 12.587-30.080 12.587h-682.667c-11.605 0-22.229-4.693-30.080-12.587s-12.587-18.475-12.587-30.080zM42.667 256.512v511.488c0 35.328 14.507 67.371 37.547 90.453s55.125 37.547 90.453 37.547h682.667c35.328 0 67.371-14.507 90.453-37.547s37.547-55.125 37.547-90.453v-511.488c0-0.427 0-0.853 0-1.28-0.213-35.029-14.635-66.773-37.547-89.685-23.083-23.040-55.125-37.547-90.453-37.547h-682.667c-35.328 0-67.371 14.507-90.453 37.547-22.912 22.912-37.333 54.656-37.547 89.728 0 0.213 0 0.469 0 0.725zM891.477 236.971l-379.477 265.6-379.477-265.6c2.048-4.096 4.779-7.808 8.021-11.051 7.893-7.893 18.517-12.587 30.123-12.587h682.667c11.605 0 22.229 4.693 30.080 12.587 3.243 3.243 5.973 6.997 8.021 11.051z"></path>
            </svg>
            <span className={styles.text09}>
              <span className={styles.text10}>msgsrive@gmail.com</span>
            </span>
          </div>
        </a>
        <svg
          id="twitter"
          viewBox="0 0 950.8571428571428 1024"
          className={` ${projectStyles.thqIcon} ${styles.icon1} `}
        >
          <title>twitter</title>
          <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
        </svg>
        <svg
          id="instagram"
          viewBox="0 0 877.7142857142857 1024"
          className={` ${projectStyles.thqIcon} ${styles.icon2} `}
        >
          <title>instagram</title>
          <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
        </svg>
        <svg
          id="linkedin"
          viewBox="0 0 877.7142857142857 1024"
          className={` ${projectStyles.thqIcon} ${styles.icon3} `}
        >
          <title>linkedin</title>
          <path d="M199.429 357.143v566.286h-188.571v-566.286h188.571zM211.429 182.286c0.571 54.286-40.571 97.714-106.286 97.714v0h-1.143c-63.429 0-104-43.429-104-97.714 0-55.429 42.286-97.714 106.286-97.714 64.571 0 104.571 42.286 105.143 97.714zM877.714 598.857v324.571h-188v-302.857c0-76-27.429-128-95.429-128-52 0-82.857 34.857-96.571 68.571-4.571 12.571-6.286 29.143-6.286 46.286v316h-188c2.286-513.143 0-566.286 0-566.286h188v82.286h-1.143c24.571-38.857 69.143-95.429 170.857-95.429 124 0 216.571 81.143 216.571 254.857z"></path>
        </svg>
      </div>
      <div id="title-work" className={styles.container05}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.text11} `}>
          <span className={styles.text12}>Case Studies</span>
        </h1>
        <div className={styles.container06}></div>
      </div>
      <div id="casestudy-1" className={styles.container07}>
        <div className={styles.container08}>
          <img
            src="/playground_assets/cs1_display_pic-1200h.png"
            className={` ${projectStyles.thqImage} ${styles.image1} `}
          />
        </div>
        <div className={styles.container09}>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.text13} `}>
            <span className={styles.text14}>The Learning Hub</span>
          </h1>
          <span className={styles.text15}>
            Design overhaul of a legacy website into a hybrid mobile app that provides a platform
            for students to collaborate, learn and manage all college-related activities.
          </span>
          <Link to="/learning-hub" className={styles.navlink}>
            <div className={` ${projectStyles.thqLink} ${styles.container10} `}>
              <span className={styles.text16}>
                <span className={styles.text17}>Read Case Study</span>
              </span>
              <svg viewBox="0 0 1024 1024" className={` ${projectStyles.thqIcon} ${styles.icon4} `}>
                <title>arrow-right</title>
                <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>
      <div id="casestudy-2" className={styles.container11}>
        <div className={styles.container12}>
          <img
            src="/playground_assets/cs2_display-pic-1200h.png"
            className={` ${projectStyles.thqImage} ${styles.image2} `}
          />
        </div>
        <div className={styles.container13}>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.text18} `}>
            <span data-type="span" className={styles.text19}>
              IT Service Desk Management
            </span>
          </h1>
          <span className={styles.text20}>
            Collaborated with a startup to designÂ a web application that helps toÂ manage the service
            desk needs for small and medium enterprises.
          </span>
          <Link to="/service-desk-management" className={styles.navlink1}>
            <div className={` ${projectStyles.thqLink} ${styles.container14} `}>
              <span className={styles.text21}>
                <span className={styles.text22}>Read Case Study</span>
              </span>
              <svg viewBox="0 0 1024 1024" className={` ${projectStyles.thqIcon} ${styles.icon5} `}>
                <title>arrow-right</title>
                <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
