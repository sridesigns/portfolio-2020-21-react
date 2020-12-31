import React from 'react'
import { Link } from 'react-router-dom'

import Helmet from 'react-helmet'

import NavBar from '../components/nav-bar'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './learning-hub.module.css'

const LearningHub = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Learning Hub - Sriram Venugopal</title>
        <meta
          name="description"
          content="Hi. This is Sriram and you are viewing my portfolio. Feel free to reach out :)"
        />
        <meta property="og:title" content="Learning Hub - Sriram Venugopal" />
        <meta
          property="og:description"
          content="Hi. This is Sriram and you are viewing my portfolio. Feel free to reach out :)"
        />
      </Helmet>
      <NavBar></NavBar>
      <div className={styles.container01}>
        <Link to="/" className={styles.navlink}>
          <svg
            viewBox="0 0 1024 1024"
            className={` ${projectStyles.thqIcon} ${projectStyles.thqLink} ${styles.icon} `}
          >
            <title>arrow-left-circle</title>
            <path d="M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531zM682.667 469.333h-238.336l97.835-97.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-170.667 170.667c-4.096 4.096-7.168 8.789-9.259 13.824s-3.243 10.539-3.243 16.341c0 5.547 1.067 11.136 3.243 16.341 2.091 5.035 5.163 9.728 9.259 13.824l170.667 170.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-97.835-97.835h238.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667z"></path>
          </svg>
        </Link>
      </div>
      <div id="cs1-intro" className={styles.container02}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.text} `}>
          <span className={styles.text01}>The Learning Hub</span>
        </h1>
        <span className={styles.text02}>
          A design overhaul of a legacy website into a hybrid mobile app that provides a platform
          for students to collaborate, learn and manage all college-related activities.
        </span>
        <img
          src="https://play.teleporthq.io/static/img/default.png"
          className={` ${projectStyles.thqImage} ${styles.image} `}
        />
      </div>
      <div id="cs1-role" className={styles.container03}>
        <div className={styles.container04}>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.text03} `}>
            <span className={styles.text04}>My Role</span>
          </h1>
          <span className={styles.text05}>
            UI Auditâ
            <br />
            Information Architecture
            <br />
            Journey Mapping
            <br />
            Wireframes
            <br />
            Interaction Design
            <br />
            Visual Design
          </span>
        </div>
        <div className={styles.container05}>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.text06} `}>
            <span data-type="span" className={styles.text07}>
              Platforms
            </span>
          </h1>
          <span className={styles.text08}>
            iOS
            <br />
            Android
          </span>
        </div>
      </div>
      <div id="cs1-problem" className={styles.div}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.h1} `}>The Problem</h1>
        <span className={styles.text09}>
          I was commissioned by a startup to redesign an existing legacy web learning portal of a
          reputed college into a modern mobile application.Â  AfterÂ signingÂ the necessary NDA&apos;s,
          the client and I, along with the developers, had a 2-hour deep-dive session to understand
          the existing system in detail.
          <br />
          Some of the pressing points where:
          <span className={styles.text10}>
            <br />
          </span>
          There were 13 integrations with other applications - the developers were uncertain about
          the availability of API&apos;s for the same.
          <br />
          All the documents, articles, posts, and images were PDF - This is not accessible and
          user-friendly.
          <br />
          The current portal had no Taxonomy - Search was practically useless.
        </span>
      </div>
      <div id="cs1-deadline" className={styles.container06}>
        <div className={styles.container07}>
          <svg viewBox="0 0 1024 1024" className={` ${projectStyles.thqIcon} ${styles.icon1} `}>
            <title>alarm</title>
            <path d="M512 128c-247.424 0-448 200.576-448 448s200.576 448 448 448 448-200.576 448-448-200.576-448-448-448zM512 936c-198.824 0-360-161.178-360-360 0-198.824 161.176-360 360-360 198.822 0 360 161.176 360 360 0 198.822-161.178 360-360 360zM934.784 287.174c16.042-28.052 25.216-60.542 25.216-95.174 0-106.040-85.96-192-192-192-61.818 0-116.802 29.222-151.92 74.596 131.884 27.236 245.206 105.198 318.704 212.578v0zM407.92 74.596c-35.116-45.374-90.102-74.596-151.92-74.596-106.040 0-192 85.96-192 192 0 34.632 9.174 67.122 25.216 95.174 73.5-107.38 186.822-185.342 318.704-212.578z"></path>
            <path d="M512 576v-256h-64v320h256v-64z"></path>
          </svg>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.text11} `}>Timeline:</h1>
          <span className={styles.text12}>~ 8 weeks</span>
        </div>
      </div>
      <div id="cs1-preview" className={styles.container08}>
        <div className={styles.container09}>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.text13} `}>
            <span className={styles.text14}>A Learning Hub-spotÂ for Students</span>
          </h1>
          <span className={styles.text15}>
            Providing the ability to learn and stay updated anywhere, anytime was one of the core
            reason for redesign the existing platform
          </span>
        </div>
        <img
          src="/playground_assets/cs1_preview_pic-1200h.png"
          className={` ${projectStyles.thqImage} ${styles.image1} `}
        />
      </div>
      <div id="cs1-process" className={styles.container10}>
        <div className={styles.container11}>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.h11} `}>
            <span className={styles.text16}>The Process</span>
          </h1>
          <span className={styles.text17}>
            This project was quite tricky because we couldn&apos;t get approval from the college to
            conduct user interviews. We were asked only to focus on revamping the existing legacy UI
            into a mobile app in spite of us repeatedly stating the importance of user research.
            They however agreed to let us conduct usability testing (with select few users) withÂ the
            designed prototype.
          </span>
        </div>
        <div className={styles.container12}>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.text18} `}>
            <span data-type="span" className={styles.text19}>
              UI AUDIT
            </span>
          </h1>
          <span className={styles.text20}>
            IÂ started by doing a thorough UI audit of the existing platform. There was too much
            disparate, unorganized information and applications..
          </span>
        </div>
      </div>
      <div id="cs1-existingia-pic" className={styles.container13}>
        <img
          src="/playground_assets/cs1_existing-ia-1200h.png"
          className={` ${projectStyles.thqImage} ${styles.image2} `}
        />
        <span className={styles.text21}>
          App&apos;s Existing IA
          <br />
        </span>
      </div>
      <div id="cs1-ia-desc" className={styles.container14}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.text22} `}>
          <span data-type="span" className={styles.text23}>
            Information Architecture
          </span>
        </h1>
        <span className={styles.text24}>
          I started by studying a few competing products to understand how they categorized
          information and content. I organized the app structure based on content importance and
          ensured information was easy to find in the application.
        </span>
      </div>
      <div id="cs1-revisedia-pic" className={styles.container15}>
        <img
          src="/playground_assets/cs1_revised-ia-1200h.png"
          className={` ${projectStyles.thqImage} ${styles.image3} `}
        />
        <span className={styles.text25}>
          App&apos;s Revised Information Architecture
          <br data-type="br" />
        </span>
      </div>
      <div id="cs1-persona-desc" className={styles.container16}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.h12} `}>
          <span data-type="span" className={styles.text26}>
            User Personas
          </span>
        </h1>
        <span className={styles.text27}>
          Since we were unable to conduct any user research, I reached out to few of my friends and
          colleagues who were post graduate holders, to get a better understanding on the type of
          applications they used and what they would look for in a college app.Â 
          <br />
          <br />
          My target audience were 1st year and 2nd year students and based on my limited research, I
          found the project work and placement information were the key differentiators between the
          audience.Â .
        </span>
      </div>
      <div id="cs1-personas" className={styles.container17}>
        <div id="persona-1" className={styles.container18}>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.h13} `}>
            ð¨âðÂ Â 
            <span className={styles.text28}>Rajesh Kumar</span>
          </h1>
          <span className={styles.text29}>
            â¢ Final year student majoring in Operations &amp;Â Logistics.
            <br />
            â¢ Graduated with honors in mechanical engineering and has 2.5 years of experience
            working in automotive manufacturing.
            <br />â¢ Feels excited, anxious, overwhelmed and optimistic
          </span>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.text30} `}>
            <span data-type="span" className={styles.text31}>
              NEEDS
            </span>
          </h1>
          <span className={styles.text32}>
            â¢ Placement Training
            <br />â¢ Updated and Reliable information from the college
          </span>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.text33} `}>
            <span data-type="span" className={styles.text34}>
              Pain Points
            </span>
          </h1>
          <span className={styles.text35}>
            â¢ Learning resources are hard to find.Â 
            <br />
            â¢ The system is useless in mobile. â¢ No Online fee payment &amp; tracking.
            <br />â¢ Project documentation &amp; sign off are a mess.
          </span>
        </div>
        <div id="persona-1" className={styles.container19}>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.h14} `}>
            ð©âðÂ Â 
            <span data-type="span" className={styles.text36}>
              Samyuktha Menon
            </span>
          </h1>
          <span className={styles.text37}>
            â¢ First-year student at the college.
            <br />
            â¢ Loves finance but keeping her specialisation options open for now.
            <br />
            â¢ Completed her undergraduate in economics and wanted to pursue her management
            education.
            <br />â¢ Feels positive, optimistic, uncertain, confused and a bit disappointed
          </span>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.text38} `}>
            <span data-type="span" className={styles.text39}>
              NEEDS
            </span>
          </h1>
          <span className={styles.text40}>
            â¢ Offline access to lectures &amp;Â resources.
            <br />
            â¢ Clear timetables and schedules so that she can prioritise and organise.
            <br />â¢ Reliable forum to connect with her teachers/peers
          </span>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.text41} `}>
            <span data-type="span" className={styles.text42}>
              Pain Points
            </span>
          </h1>
          <span className={styles.text43}>
            â¢ Current portal is very slow &amp;Â barely functional.
            <br />
            â¢ Not accessible via mobile / tablet.Â 
            <br />
            â¢ No way to bookmark any content.
            <br />
            â¢ Loads of time is sent just for searching the ârightâ content.
            <br />â¢ Have to dig through loads of outdated stuffs to find relevant information
          </span>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default LearningHub
