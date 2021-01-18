import React from 'react'
import { Link } from 'react-router-dom'

import Helmet from 'react-helmet'

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
      <div className={styles.navbar}>
        <div className={styles.div}>
          <div className={styles.container01}>
            <Link to="/" className={styles.navlink}>
              <img
                src="/playground_assets/logo.svg"
                className={` ${projectStyles.thqImage} ${projectStyles.thqLink} ${styles.image} `}
              />
            </Link>
          </div>
          <div className={styles.div1}>
            <Link to="/" className={` ${projectStyles.thqLink} ${styles.text} `}>
              <span className={styles.text01}>Work</span>
            </Link>
            <Link to="/playground" className={` ${projectStyles.thqLink} ${styles.span} `}>
              <span className={styles.text02}>Play</span>
            </Link>
            <Link to="/about-me" className={` ${projectStyles.thqLink} ${styles.text03} `}>
              About
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.container02}>
        <Link to="/" className={styles.navlink1}>
          <svg
            viewBox="0 0 1024 1024"
            className={` ${projectStyles.thqIcon} ${projectStyles.thqLink} ${styles.icon} `}
          >
            <title>arrow-left-circle</title>
            <path d="M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531zM682.667 469.333h-238.336l97.835-97.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-170.667 170.667c-4.096 4.096-7.168 8.789-9.259 13.824s-3.243 10.539-3.243 16.341c0 5.547 1.067 11.136 3.243 16.341 2.091 5.035 5.163 9.728 9.259 13.824l170.667 170.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-97.835-97.835h238.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667z"></path>
          </svg>
        </Link>
      </div>
      <div id="cs1-intro" className={styles.container03}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.text04} `}>
          <span className={styles.text05}>The Learning Hub</span>
        </h1>
        <span className={styles.text06}>
          A design overhaul of a legacy website into a hybrid mobile app that provides a platform
          for students to collaborate, learn and manage all college-related activities.
        </span>
      </div>
      <div id="cs1-intro-pic" className={styles.container04}>
        <img
          src="/playground_assets/preview-collage%40.25x-1200h.png"
          className={` ${projectStyles.thqImage} ${styles.image01} `}
        />
      </div>
      <div id="cs1-role" className={styles.container05}>
        <div className={styles.container06}>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.text07} `}>
            <span className={styles.text08}>My Role</span>
          </h1>
          <span className={styles.text09}>
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
        <div className={styles.container07}>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.text10} `}>
            <span data-type="span" className={styles.text11}>
              Platforms
            </span>
          </h1>
          <span className={styles.text12}>
            iOS
            <br />
            Android
          </span>
        </div>
      </div>
      <div id="cs1-problem" className={styles.div2}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.h1} `}>The Problem</h1>
        <span className={styles.text13}>
          I was commissioned by a startup to redesign an existing legacy web learning portal of a
          reputed college into a modern mobile application.Â  AfterÂ signingÂ the necessary NDA&apos;s,
          the client and I, along with the developers, had a 2-hour deep-dive session to understand
          the existing system in detail.
          <br data-type="br" />
          Some of the pressing points where:
          <br />
        </span>
        <span className={styles.text14}>
          - There were 13 integrations with other applications - the developers were uncertain about
          the availability of API&apos;s for the same.
          <br />
          - All the documents, articles, posts, and images were PDF - This is not accessible and
          user-friendly.
          <br />
          - The current portal had no Taxonomy - Search was practically useless.
          <br data-type="br" />
        </span>
      </div>
      <div id="cs1-preview" className={styles.container08}>
        <div className={styles.container09}>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.text15} `}>
            <span className={styles.text16}>A Learning Hub-spotÂ for Students</span>
          </h1>
          <span className={styles.text17}>
            Providing the ability for students to learn and stay updated anywhere, anytime was one
            of the primary requirements for redesigning the existing platform
          </span>
        </div>
        <img
          src="/playground_assets/cs1_preview_pic-1200h.png"
          className={` ${projectStyles.thqImage} ${styles.image02} `}
        />
      </div>
      <div id="cs1-deadline" className={styles.container10}>
        <div className={styles.container11}>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.text18} `}>âÂ  Timeline:</h1>
          <span className={styles.text19}>~ 8 weeks</span>
        </div>
      </div>
      <div id="cs1-process" className={styles.container12}>
        <div className={styles.container13}>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.h101} `}>
            <span className={styles.text20}>The Process</span>
          </h1>
          <span className={styles.text21}>
            This project was quite tricky because we couldn&apos;t get approval from the college to
            conduct user interviews. We were asked only to focus on revamping the existing legacy UI
            into a mobile app in spite of us repeatedly stating the importance of user research.
            They however agreed to let us conduct usability testing (with select few users) withÂ the
            designed prototype.
          </span>
        </div>
        <div className={styles.container14}>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.text22} `}>
            <span data-type="span" className={styles.text23}>
              UI AUDIT
            </span>
          </h1>
          <span className={styles.text24}>
            IÂ started by doing a thorough UI audit of the existing platform. There was too much
            disparate, unorganized information and applications..
          </span>
        </div>
      </div>
      <div id="cs1-existingia-pic" className={styles.container15}>
        <img
          src="/playground_assets/cs1_existing-ia-1200h.png"
          className={` ${projectStyles.thqImage} ${styles.image03} `}
        />
        <span className={styles.text25}>
          App&apos;s Existing IA
          <br />
        </span>
      </div>
      <div id="cs1-ia-desc" className={styles.container16}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.text26} `}>
          <span data-type="span" className={styles.text27}>
            Information Architecture
          </span>
        </h1>
        <span className={styles.text28}>
          I started by studying a few competing products to understand how they categorized
          information and content. I organized the app structure based on content importance and
          ensured information was easy to find in the application.
        </span>
      </div>
      <div id="cs1-revisedia-pic" className={styles.container17}>
        <img
          src="/playground_assets/cs1_revised-ia-1200h.png"
          className={` ${projectStyles.thqImage} ${styles.image04} `}
        />
        <span className={styles.text29}>
          App&apos;s Revised Information Architecture
          <br data-type="br" />
        </span>
      </div>
      <div id="cs1-persona-desc" className={styles.container18}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.h102} `}>
          <span className={styles.text30}>User Personas</span>
        </h1>
        <span className={styles.text31}>
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
      <div id="cs1-personas" className={styles.container19}>
        <div id="persona-1" className={styles.container20}>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.h103} `}>
            ð¨âðÂ Â 
            <span className={styles.text32}>Rajesh Kumar</span>
          </h1>
          <span className={styles.text33}>
            â¢ Final year student majoring in Operations &amp;Â Logistics.
            <br />
            â¢ Graduated with honors in mechanical engineering and has 2.5 years of experience
            working in automotive manufacturing.
            <br />â¢ Feels excited, anxious, overwhelmed and optimistic
          </span>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.text34} `}>
            <span data-type="span" className={styles.text35}>
              NEEDS
            </span>
          </h1>
          <span className={styles.text36}>
            â¢ Placement Training
            <br />â¢ Updated and Reliable information from the college
          </span>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.text37} `}>
            <span data-type="span" className={styles.text38}>
              Pain Points
            </span>
          </h1>
          <span className={styles.text39}>
            â¢ Learning resources are hard to find.Â 
            <br />
            â¢ The system is useless in mobile. â¢ No Online fee payment &amp; tracking.
            <br />â¢ Project documentation &amp; sign off are a mess.
          </span>
        </div>
        <div id="persona-1" className={styles.container21}>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.h104} `}>
            ð©âðÂ Â 
            <span data-type="span" className={styles.text40}>
              Samyuktha Menon
            </span>
          </h1>
          <span className={styles.text41}>
            â¢ First-year student at the college.
            <br />
            â¢ Loves finance but keeping her specialisation options open for now.
            <br />
            â¢ Completed her undergraduate in economics and wanted to pursue her management
            education.
            <br />â¢ Feels positive, optimistic, uncertain, confused and a bit disappointed
          </span>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.text42} `}>
            <span data-type="span" className={styles.text43}>
              NEEDS
            </span>
          </h1>
          <span className={styles.text44}>
            â¢ Offline access to lectures &amp;Â resources.
            <br />
            â¢ Clear timetables and schedules so that she can prioritise and organise.
            <br />â¢ Reliable forum to connect with her teachers/peers
          </span>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.text45} `}>
            <span data-type="span" className={styles.text46}>
              Pain Points
            </span>
          </h1>
          <span className={styles.text47}>
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
      <div id="cs1-userflows-desc" className={styles.container22}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.h105} `}>
          <span className={styles.text48}>User Flows &amp; Wireframes</span>
        </h1>
        <span className={styles.text49}>
          The primary focus of the application is keeping oneself updated with the latest happenings
          on the institution and enabling students to learn anywhere and anytime.
          <br data-type="br" />
          IÂ organized all the information and came up with 3 different user flows for the personas:
          <span data-type="span" className={styles.text50}>
            <br data-type="br" />
            Discoverability, Relevancy and Trust
          </span>
          Â were the key themes I developed.
          <br data-type="br" />I designed low fidelity prototypes using Sketch to narrow down the
          layout and the content flow.
        </span>
      </div>
      <div id="cs1-wf-pic" className={styles.container23}>
        <img
          src="/playground_assets/wf-collage-py9m-1200h.png"
          className={` ${projectStyles.thqImage} ${styles.image05} `}
        />
        <span className={styles.text51}>Snippet of Wireframes</span>
      </div>
      <div id="cs1-sol" className={styles.container24}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.h106} `}>
          <span data-type="span" className={styles.text52}>
            Solution
          </span>
        </h1>
        <span className={styles.text53}>
          There are 5 key pages in the application: Home, Lecture, Exams, Placements &amp; Projects.
        </span>
      </div>
      <div id="cs1-gr-descid" className={styles.container25}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.text54} `}>
          <span data-type="span">HOME PAGE | THE HUB</span>
        </h1>
        <span className={styles.text56}>
          I skipped the traditional bottom/top-level navigation and instead opted for a more direct
          grid on the landing page as the primary navigation. The users can choose to have 4-8
          frequently used apps or can customise based on need.
          <br data-type="br" />
          I believed the grid to be functional because:
          <br data-type="br" />
          - Faster Access and Reduced Friction to the essential content within the app.
          <br data-type="br" />
          - Completely customizable.
          <br data-type="br" />- Easier access to the announcements and news from the institution.
        </span>
      </div>
      <div id="cs1-home-pic" className={styles.container26}>
        <img
          src="/playground_assets/cs1_solution_1-1200h.png"
          className={` ${projectStyles.thqImage} ${styles.image06} `}
        />
        <span className={styles.text57}>
          App&apos;s Landing Page
          <br data-type="br" />
        </span>
      </div>
      <div id="cs1-academics" className={styles.container27}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.text58} `}>
          <span data-type="span">ACADEMICS</span>
        </h1>
        <span className={styles.text60}>
          Academics was one of the core user flows that applied to both Rajesh and Samyukta. All the
          resources related to their academic education are neatly organized and accessible under
          one roof. The four pillars of academics are:
          <br />
          - Lectures
          <br />
          - E Books
          <br />
          - Audio Books
          <br />- Projects
        </span>
      </div>
      <div id="cs1-academy-pic" className={styles.container28}>
        <div className={styles.container29}>
          <img
            src="/playground_assets/cs1_solution_2-1200h.png"
            className={` ${projectStyles.thqImage} ${styles.image07} `}
          />
          <img
            src="/playground_assets/cs1_solution_3-1200h.png"
            className={` ${projectStyles.thqImage} ${styles.image08} `}
          />
        </div>
        <span className={styles.text61}>Snippet of Academics</span>
      </div>
      <div id="cs1-ebooks" className={styles.container30}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.text62} `}>
          <span data-type="span">E- LEARNING | E - BOOKS</span>
        </h1>
        <span className={styles.text64}>
          I felt there was an overlap with E-Books and E-learning, so I recommended to have them
          both combined as one module.But the client decided against it and insisted on having it
          separate ð
        </span>
      </div>
      <div id="cs1-ebook-pic" className={styles.container31}>
        <div id="cs1-ebooks-pic" className={styles.container32}>
          <img
            src="/playground_assets/cs1_solution_5-1200h.png"
            className={` ${projectStyles.thqImage} ${styles.image09} `}
          />
          <img
            src="/playground_assets/cs1_solution_7-1200h.png"
            className={` ${projectStyles.thqImage} ${styles.image10} `}
          />
        </div>
        <span className={styles.text65}>Snippet of E-Learning &amp; E-Books</span>
      </div>
      <div id="cs1-ebooks" className={styles.container33}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.text66} `}>
          <span data-type="span">PROJECTS &amp; PLACEMENT</span>
        </h1>
        <span className={styles.text68}>
          Although these were not used frequently as the Academics &amp;Â News modules, Placements
          and Projects were one of the pain points for Rajesh &amp;Â Samyuktha. We decided to keep it
          more direct and transparent as possible.
        </span>
        <span className={styles.text69}>
          <span className={styles.text70}>Project</span>
          - Depending on the student&apos;s year of study, the relevant project flow will be
          enabled. It will have clear guidelines, viva booking and related information, and easy to
          submit and keep track of the project report.
          <br />
        </span>
        <span className={styles.text71}>
          <span className={styles.text72}>Placements</span>
          - Mainly applicable for Rajesh a.k.a The Final Year student. However, the company profile
          and reports will be accessible for all the students.
          <br data-type="br" />
        </span>
      </div>
      <div id="cs1-ebook-pic" className={styles.container34}>
        <div id="cs1-ebooks-pic" className={styles.container35}>
          <img
            src="/playground_assets/cs1_solution_4-1200h.png"
            className={` ${projectStyles.thqImage} ${styles.image11} `}
          />
          <img
            src="/playground_assets/cs1_solution_6-1200h.png"
            className={` ${projectStyles.thqImage} ${styles.image12} `}
          />
        </div>
        <span className={styles.text73}>Snippet of projects &amp; placements</span>
      </div>
      <div id="cs1-insights" className={styles.container36}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.h107} `}>
          <span data-type="span">Some Insights...</span>
        </h1>
        <div id="persona-1" className={styles.container37}>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.h108} `}>User research is key.</h1>
          <span className={styles.text75}>
            The app is primarily student-centric, hence I wanted to understand how students use the
            existing application but, I was only granted access to an SME and not the actual
            students.
            <br />
            However, I was given access to reports, usage metrics, and the existing portal and I was
            able to generate assumptions and a &apos;decent&apos; hypothesis.ears
          </span>
        </div>
        <div id="persona-1" className={styles.container38}>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.h109} `}>
            We need to reduce clutter as much as we can.
            <br />
          </h1>
          <span className={styles.text76}>
            A lot of feature and information available in the app is outdated. Some of the features
            are a result of one-time activity and have not been (and possibly never will be) used
            again.
            <br />
            Removing such clutter within the app, significantly improves user experience.
          </span>
        </div>
        <div id="persona-1" className={styles.container39}>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.h110} `}>
            Taxonomy is essential in content-heavy apps.
            <br />
          </h1>
          <span className={styles.text77}>
            There were a lot of articles, files, posts, and general information in the app, that are
            not indexed properly and governed.
            <br data-type="br" />
            As a result, the search was pretty useless. As part of UX recommendation, I advised the
            client to set up a governance model.
            <br />I haven&apos;t received any feedback on the same yet.
          </span>
        </div>
      </div>
      <div id="cs1-movingon" className={styles.container40}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.h111} `}>
          <span data-type="span">Final Thoughts</span>
        </h1>
        <span className={styles.text79}>
          - I designed the core user flows and conducted usability testing with select few users.
          Based on their inputs, I made a few iterations on the user journeys and interactions. I
          completed the visual design and presented the final prototype on the agreed-upon deadline.
          <br />
          - We launched a &quot;Beta&quot; version of the app in 3 months and the client informed me
          that the feedback was generally positive. I&apos;m unable to share any metrics here as I
          did not have any access to the feedback data.
          <br />
          - I would have liked to create a content management system with a governance framework,
          work on change management and adoption of the app with the students. I did give the client
          my recommendations on the above topics but I did not get the opportunity to work on the
          same in this project.
          <br />
        </span>
      </div>
      <div id="cs1-insights" className={styles.container41}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.h112} `}>
          <span data-type="span">Thank you for reading! ð</span>
        </h1>
        <div id="persona-1" className={styles.container42}></div>
      </div>
      <div id="footer" className={styles.container43}>
        <div className={styles.container44}>
          <div className={styles.container45}>
            <span className={styles.text81}>
              Let&apos;s connect. Feel free to drop a
              <span className={styles.text82}>&quot;hello&quot;</span>
              anytime
            </span>
          </div>
          <div className={styles.container46}>
            <a href="mailto:msgsrive@gmail.com?subject=Hello :)" className={styles.link}>
              <svg
                viewBox="0 0 1024 1024"
                className={` ${projectStyles.thqIcon} ${projectStyles.thqLink} ${styles.icon1} `}
              >
                <title>mail</title>
                <path d="M128 337.963l359.552 251.691c14.507 10.027 33.92 10.496 48.939 0l359.509-251.691v430.037c0 11.605-4.693 22.229-12.587 30.080s-18.475 12.587-30.080 12.587h-682.667c-11.605 0-22.229-4.693-30.080-12.587s-12.587-18.475-12.587-30.080zM42.667 256.512v511.488c0 35.328 14.507 67.371 37.547 90.453s55.125 37.547 90.453 37.547h682.667c35.328 0 67.371-14.507 90.453-37.547s37.547-55.125 37.547-90.453v-511.488c0-0.427 0-0.853 0-1.28-0.213-35.029-14.635-66.773-37.547-89.685-23.083-23.040-55.125-37.547-90.453-37.547h-682.667c-35.328 0-67.371 14.507-90.453 37.547-22.912 22.912-37.333 54.656-37.547 89.728 0 0.213 0 0.469 0 0.725zM891.477 236.971l-379.477 265.6-379.477-265.6c2.048-4.096 4.779-7.808 8.021-11.051 7.893-7.893 18.517-12.587 30.123-12.587h682.667c11.605 0 22.229 4.693 30.080 12.587 3.243 3.243 5.973 6.997 8.021 11.051z"></path>
              </svg>
            </a>
            <a
              href="https://twitter.com/designersriram"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.link1}
            >
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className={` ${projectStyles.thqIcon} ${projectStyles.thqLink} ${styles.icon2} `}
              >
                <title>twitter</title>
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/sriram015/"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.link2}
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className={` ${projectStyles.thqIcon} ${projectStyles.thqLink} ${styles.icon3} `}
              >
                <title>instagram</title>
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/sriramvenugopal/"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.link3}
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className={` ${projectStyles.thqIcon} ${projectStyles.thqLink} ${styles.icon4} `}
              >
                <title>linkedin</title>
                <path d="M199.429 357.143v566.286h-188.571v-566.286h188.571zM211.429 182.286c0.571 54.286-40.571 97.714-106.286 97.714v0h-1.143c-63.429 0-104-43.429-104-97.714 0-55.429 42.286-97.714 106.286-97.714 64.571 0 104.571 42.286 105.143 97.714zM877.714 598.857v324.571h-188v-302.857c0-76-27.429-128-95.429-128-52 0-82.857 34.857-96.571 68.571-4.571 12.571-6.286 29.143-6.286 46.286v316h-188c2.286-513.143 0-566.286 0-566.286h188v82.286h-1.143c24.571-38.857 69.143-95.429 170.857-95.429 124 0 216.571 81.143 216.571 254.857z"></path>
              </svg>
            </a>
            <a
              href="https://dribbble.com/SriramVenugopal"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.link4}
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className={` ${projectStyles.thqIcon} ${projectStyles.thqLink} ${styles.icon5} `}
              >
                <title>dribbble</title>
                <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LearningHub
