import React from 'react'
import { Link } from 'react-router-dom'

import Helmet from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './appraise.module.css'

const Appraise = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Appraise - Sriram Venugopal</title>
        <meta
          name="description"
          content="Hi. This is Sriram and you are viewing my portfolio. Feel free to reach out :)"
        />
        <meta property="og:title" content="Appraise - Sriram Venugopal" />
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
          <div className={styles.div01}>
            <Link to="/" className={` ${projectStyles.thqLink} ${styles.text} `}>
              <span className={styles.text001}>Work</span>
            </Link>
            <Link to="/playground" className={` ${projectStyles.thqLink} ${styles.span} `}>
              <span className={styles.text002}>Play</span>
            </Link>
            <Link to="/about-me" className={` ${projectStyles.thqLink} ${styles.text003} `}>
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
      <div id="cs2-intro" className={styles.container03}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.text004} `}>
          <span data-type="span" className={styles.text005}>
            Appraise - A Performance Management Platform
          </span>
        </h1>
        <span className={styles.text006}>
          Led Design and Research for my organisation of 300k+ users to overhaul the existing
          appraisal process and application.Â Â 
        </span>
      </div>
      <div id="cs2-intro-pic" className={styles.container04}>
        <img
          src="/playground_assets/cs3-preview-collage-1200h.png"
          className={` ${projectStyles.thqImage} ${styles.image01} `}
        />
      </div>
      <div id="cs2-role" className={styles.container05}>
        <div className={styles.container06}>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.text007} `}>
            <span className={styles.text008}>My Role</span>
          </h1>
          <span className={styles.text009}>
            Stakeholder Discussion
            <br />
            UI Auditâ
            <br />
            User Research
            <br data-type="br" />
            Information Architecture
            <br data-type="br" />
            Journey Mapping
            <br data-type="br" />
            Wireframes
            <br data-type="br" />
            Interaction Design
            <br data-type="br" />
            Visual Design
            <br />
            Usability Testing
          </span>
        </div>
        <div className={styles.container07}>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.text010} `}>
            <span data-type="span" className={styles.text011}>
              Platforms
            </span>
          </h1>
          <span className={styles.text012}>
            Web
            <br />
            iOS
            <br data-type="br" />
            Android
          </span>
        </div>
      </div>
      <div id="cs2-deadline" className={styles.container08}>
        <div className={styles.container09}>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.text013} `}>ðï¸Â  Please Note</h1>
          <span className={styles.text014}>
            Due to NDA obligations, I&apos;m unable to share actual product mockups, research data
            and usability testing insights. I have captured all the process we did in this project
            but I have recreated alternate mockups for the purpose of this case study.
          </span>
        </div>
      </div>
      <div id="cs2-problem" className={styles.div02}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.h1} `}>Why Redesign?</h1>
        <span className={styles.text015}>
          We were using the evaluation application for theÂ 
          <span data-type="span" className={styles.text016}>
            past 7+ years
          </span>
          .Â  Although the application had its issues, it was functional and it got the job done.
          <span data-type="span" className={styles.text017}>
            <br data-type="br" />
            60-70%
          </span>
          Â of users used the application once a year, and the rest of the users use it anywhere from
          2-4 times a year depending on their project works.
          <br data-type="br" />
          So why redesign?
        </span>
        <span className={styles.text018}>
          - The organization had a problem. They believed that the existing system was not designed
          to properly evaluate people on their merit.Â 
        </span>
        <span className={styles.text019}>
          - By using the application only 1-2 times a year, the associates were not being provided
          with proper feedback on their work.
        </span>
        <span className={styles.text020}>
          - They wanted to address these concerns by bringing a change in the appraisal process,
          which is transparent, efficient and will help the associates to get regular feedback which
          will help improve their skill, productivity and job satisfaction.
        </span>
      </div>
      <div id="cs2-deadline" className={styles.container10}>
        <div className={styles.container11}>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.text021} `}>âÂ  Â Timeline:</h1>
          <span className={styles.text022}>~ 12 months</span>
        </div>
      </div>
      <div id="cs2-existing-process" className={styles.container12}>
        <div className={styles.container13}>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.h101} `}>
            The Existing Evaluation Process
          </h1>
          <span className={styles.text023}>
            There are 3 different user-roles involved in the appraisal process..
          </span>
        </div>
        <div id="cs3-roles" className={styles.div03}>
          <div id="persona-1" className={styles.container14}>
            <h1 className={` ${projectStyles.thqHeading1} ${styles.h102} `}>Appraisee</h1>
            <span className={styles.text024}>
              Almost everyone is an appraisee.Â 
              <br data-type="br" />
              <br data-type="br" />
              Junior Engineers, Associates, New Joiners who are part of a team but do not have
              anyone reporting to them.
              <br data-type="br" />
              <br data-type="br" />A significant percent of org. employees do not have anyone
              reporting to them
            </span>
          </div>
          <div id="persona-1" className={styles.container15}>
            <h1 className={` ${projectStyles.thqHeading1} ${styles.h103} `}>Evaluator</h1>
            <span className={styles.text025}>
              Typical Experience: 5 to 15 years. â
              <br data-type="br" />
              <br data-type="br" />
              Team Leads, Senior Developers/Engineers, Architects, Supervisors, etc.
              <br data-type="br" />
              <br data-type="br" />
              They typically lead a team, assign tasks, set targets and oversee associates
            </span>
          </div>
          <div id="persona-1" className={styles.container16}>
            <h1 className={` ${projectStyles.thqHeading1} ${styles.h104} `}>Reviewer</h1>
            <span className={styles.text026}>
              Typical Experience:
              <br />
              15 years and above. â
              <br data-type="br" />
              <br data-type="br" />
              Delivery Managers, Consultants, Architects, Regional Managers, Unite Heads, etc.
              <br data-type="br" />
              <br data-type="br" />
              Reviewers oversee a group of evaluators
            </span>
          </div>
        </div>
        <div className={styles.container17}>
          <span className={styles.text027}>
            We have 2 types of evaluations.
            <br data-type="br" />-
            <span data-type="span" className={styles.text028}>
              {' '}
              Annual evaluationÂ 
            </span>
            (Conducted at the end of each year)
            <br data-type="br" />-
            <span data-type="span" className={styles.text029}>
              Project ClosureÂ 
            </span>
            (Conducted if a employee leaves/completes a project)
          </span>
          <span className={styles.text030}>
            The Evaluator sets objectives for the Appraisee. Before the evaluation deadline, the
            Appraisee responds to each of the objectives and submits the goal sheet for evaluation.
          </span>
          <span className={styles.text031}>
            The goal sheet will be evaluated by the Evaluator, who will award a rank based on the
            Appraiseeâs performance across each objective based on which a Performance score will be
            generated.
          </span>
          <span className={styles.text032}>
            The goal sheet will be then shared with the reviewer to verify the evaluation. Post the
            reviewer&apos;s approval, the performance score will be then shared with the Appraisee.
          </span>
          <span className={styles.text033}>
            Post the goal sheet submission, the Appraisee will only be able to view the progress of
            the goal sheet at each stage but cannot perform any actions.
          </span>
        </div>
      </div>
      <div id="cs2-kickoff" className={styles.container18}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.text034} `}>
          <span className={styles.text035}>Kick Off</span>
        </h1>
        <span className={styles.text036}>
          I was onboarded onto this project by January 2018. By then, the project had already
          started and a good 2-3 months months have progressed. The entire project team were spread
          out between Chennai, Mumbai and Delhi.
          <br />
          The progress that had been made till then was neatly documented and was shared with me by
          the Business Analyst to bring me up to speed. I took nearly a week to get up to speed and
          scheduled regular calls with team to clarify any and all queries that I had.Â 
        </span>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.text037} `}>
          <span data-type="span" className={styles.text038}>
            MY ROLE
          </span>
        </h1>
        <span className={styles.text039}>
          I led the design for this entire project. I collaborated with senior design consultants
          and visual designers for design reviews and for refining the UX and visual experience of
          the product.
        </span>
        <span className={styles.text040}>
          The Project team comprised of:
          <br />
          - 3 Business Analysts
          <br />
          - 5 Backend Developers
          <br />
          - 3 Frontend Developers
          <br />- 3 Product Managers
        </span>
        <span className={styles.text041}>
          The application was built usingÂ 
          <span data-type="span" className={styles.text042}>
            ReactJS
          </span>
          Â andÂ 
          <span data-type="span" className={styles.text043}>
            JavaÂ 
          </span>
          . I started working on the designs in Sketch but we migrated toÂ 
          <span data-type="span" className={styles.text044}>
            FigmaÂ 
          </span>
          which made collaboration, reviews much quicker and easier.
        </span>
      </div>
      <div id="cs2-userflow-pic" className={styles.container19}>
        <img
          src="/playground_assets/userjourney-1-1200h.png"
          className={` ${projectStyles.thqImage} ${styles.image02} `}
        />
        <img
          src="/playground_assets/userjourney-2-1200h.png"
          className={` ${projectStyles.thqImage} ${styles.image03} `}
        />
        <span className={styles.text045}>Snippet of the App&apos;s User journeys</span>
      </div>
      <div id="cs2-understand-users" className={styles.div04}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.text046} `}>
          <span data-type="span" className={styles.text047}>
            Understanding the User
          </span>
        </h1>
        <span className={styles.text048}>
          I synthesized all the documentations and reports created by the previous design team and
          prepared a set of questionnaire to validate with different user groups
        </span>
        <span className={styles.text049}>
          I interviewedÂ 
          <span data-type="span" className={styles.text050}>
            12 usersÂ 
          </span>
          and conductedÂ 
          <span data-type="span" className={styles.text051}>
            3 focus group sessionsÂ 
          </span>
          to validate my questionnaire and the findings of the teamÂ 
          <br data-type="br" />
        </span>
        <span className={styles.text052}>
          I found most of their findings to be accurate and only minor changes were required to be
          altered. I ran a playback session for the stakeholders and the entire project team wherein
          I walked them through the user research findings. We mapped out the MVP features, created
          sprint plans and decided to release the app in phases.
          <br data-type="br" />
        </span>
      </div>
      <div id="cs2-user-journeys" className={styles.div05}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.text053} `}>
          <span data-type="span" className={styles.text054}>
            User Journeys
          </span>
        </h1>
        <span className={styles.text055}>
          The personas that were created already were pretty solid and based on my user research I
          made some minor tweaks. We identifiedÂ 
          <span data-type="span" className={styles.text056}>
            8 personasÂ 
          </span>
          that covered majority of the user groups in the organisation.
        </span>
        <span className={styles.text057}>
          I collaborated with the Business analysts to construct the user journeys. We dissected the
          features and functionalities, collated key requirement ask against the features and
          plotted a journey for all the defined personas.
        </span>
        <span className={styles.text058}>
          The belowÂ 
          <span data-type="span" className={styles.text059}>
            3 critical user journeysÂ 
          </span>
          covered almost 80% of our application needs:Â 
          <br data-type="br" />
          - Appraisee Journey
          <br data-type="br" />
          - Evaluator Journey
          <br data-type="br" />- Reviewer Journey
        </span>
      </div>
      <div id="cs2-howitstarted" className={styles.container20}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.text060} `}>
          <span data-type="span" className={styles.text061}>
            How it started
          </span>
        </h1>
        <span className={styles.text062}>
          In the beginning of 2017, a group of HR Managers and the Appraise Application team were
          tasked with revamping the current appraisal process.
          <br />
          The designers and BA from the application team conducted multiple user interviews and
          focus groups sessions for more than a month and came up with user requirements and
          personas.
          <br />
        </span>
        <span className={styles.text063}>
          Around May 2017, due to certain unforeseen circumstances the project was temporarily
          shelved and was planned to restart back in couple of months.
          <br />
        </span>
        <span className={styles.text064}>
          The project was restarted back in December 2017 and I was roped in January to lead the
          design and collaborate with the Application team in revamping the product.
          <br data-type="br" />
        </span>
      </div>
      <div id="cs2-ia" className={styles.div06}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.text065} `}>
          <span data-type="span" className={styles.text066}>
            Information Architecture
          </span>
        </h1>
        <span className={styles.text067}>
          By constructing the journeys, we understood how the information flowed in the system.
          <br />
          We came up with a structured navigation for each of the defined user roles. We wanted to
          navigation to be consistent, seamless and easy to understand.
          <br />
          Since the application had a huge user base, the user age range varied from 22 to 60.Â Â 
        </span>
        <span className={styles.text068}>
          We all agreed on a simple, minimalistic and transparent structure to the app. We focused
          on the below key areas in defining the app structure.
        </span>
      </div>
      <div id="cs2-appraisee-flow" className={styles.div07}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.text069} `}>
          <span data-type="span" className={styles.text070}>
            Solution
          </span>
        </h1>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.text071} `}>
          <span className={styles.text072}>APPRAISEE FLOW</span>
        </h1>
        <span className={styles.text073}>
          Almost 80% - 85% of employees in the organisation will undergo an appraisal process, hence
          I wanted to set the foundation by cracking the Appraisee Flow.Â 
          <br data-type="br" />
          Based on user inputs and business requirements, I synthesized that any designs or flows
          must satisfy the following criteria:
          <br data-type="br" />
        </span>
        <span className={styles.text074}>
          - Everyone is an Appraisee. Their personal appraisal process should be prioritised, easily
          accessible and trackable.
          <br />
          - Managers/Reviewers, should have a clear view of their reportees and their respective
          appraisal status.
          <br />
          - Managers/Reviewers should have a clear view of their pending tasks.
          <br />
          - Proper notifications for all key activities in the system.
          <br />- Personalised profile to keep track of their own appraisals and activities.
        </span>
        <span className={styles.text075}>
          The Landing page lists all the appraisals for the current year with key details such as:
          <br data-type="br" />
          - Project name
          <br data-type="br" />
          - Appraisal Type
          <br data-type="br" />
          - Evaluator, Reviewer and HR details
          <br data-type="br" />- No. of objectives and characteristics set.Â 
        </span>
        <span className={styles.text076}>
          I created wireframes with 2 different layouts and navigational elements for the Appraisee
          flow. I created a functional prototype in Figma and conducted A/B testing with a select
          group of user.
          <br />
          Based on the user inputs, we finalised a set of wireframes for the Appraisee Flow.
        </span>
      </div>
      <div id="cs2-appraisee-pic" className={styles.container21}>
        <img
          src="/playground_assets/1%402x-1200h.png"
          className={` ${projectStyles.thqImage} ${styles.image04} `}
        />
        <img
          src="/playground_assets/3%402x-1200h.png"
          className={` ${projectStyles.thqImage} ${styles.image05} `}
        />
        <span className={styles.text077}>Alternate recreation of Appraisee Flow</span>
      </div>
      <div id="cs2-evaluator-flow" className={styles.div08}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.text078} `}>
          <span data-type="span" className={styles.text079}>
            Evaluator &amp; Reviewer FLOW
          </span>
        </h1>
        <span className={styles.text080}>
          Apart from working on their own appraisal processes, the following were the key goals for
          a Evaluator/Reviewer:
          <br data-type="br" />
          - Clear view of the associates who reports to them.
          <br data-type="br" />
          - Detailed information of the appraisal status of their reportees.
          <br data-type="br" />
          - Efficient ways to set objectives, share feedback and rate them.
          <br data-type="br" />
          - Easy way to track their pending actions with respect to appraisal process.
          <br data-type="br" />
        </span>
        <span className={styles.text081}>
          My Team is a navigation element that is accessible only for the Evaluators and Reviewers.Â 
          This page clearly lists all the team members along with their respective appraisal
          progress.
          <br />
          The page will also have a clear distinction between Evaluator and Reviewer functions as
          almost 90% of reviewers will also function as evaluators.
        </span>
      </div>
      <div id="cs2-evaluator-pic" className={styles.container22}>
        <img
          src="/playground_assets/2%402x-1200h.png"
          className={` ${projectStyles.thqImage} ${styles.image06} `}
        />
        <span className={styles.text082}>
          Alternate recreation of My Team, Only accessible for Evaluators &amp; Reviewers
        </span>
      </div>
      <div id="cs2-reminder" className={styles.div09}>
        <span className={styles.text083}>
          One of the most common user pain point was when their appraisal was pending with a
          particular person, there was no wayÂ to communicate with them within the system. They had
          to do it offline which does not always guarantee appraisal progress.
        </span>
        <span className={styles.text084}>
          We addressed this issue by enabling the users to send a reminder to their
          evaluator/reviewer with whom the task is pending.Â  However, in order to avoid spamming the
          receiver, reminders are spaced out and can be sent only once every 15 days.
          <br data-type="br" />
        </span>
        <span className={styles.text085}>
          By sending a reminder , the receiver gets a push notification/email informing them that a
          particular task is pending with them. Users can configure between push notification or
          email or both.
        </span>
        <img
          src="/playground_assets/reminder-1200h.png"
          className={` ${projectStyles.thqImage} ${styles.image07} `}
        />
      </div>
      <div id="cs2-mobile" className={styles.container23}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.h105} `}>
          <span data-type="span">Mobile App</span>
        </h1>
        <span className={styles.text087}>
          One of the primary requirement of the appraisal revamp is to promote a culture of
          continuous feedback on user&apos;s objectives.
          <br data-type="br" />
          Having a mobile app will enable the users to receive notifications on mobile and act
          instantly to any queries posted. It will also be enable users to track changes to the
          objectives, record progress and have a conversation with their evaluators/reviewers as
          needed.
        </span>
        <span className={styles.text088}>
          We designed and developed a hybrid mobile app on the same stack as web. ReactJS and Java.
          <br />
          Apart from the HR features, rest all the features are retained in the mobile app.
        </span>
      </div>
      <div id="cs2-mobile-pics" className={styles.container24}>
        <div className={styles.container25}>
          <img
            src="/playground_assets/home-1200h.png"
            className={` ${projectStyles.thqImage} ${styles.image08} `}
          />
          <img
            src="/playground_assets/objectives-1200h.png"
            className={` ${projectStyles.thqImage} ${styles.image09} `}
          />
          <img
            src="/playground_assets/feedback-1200h.png"
            className={` ${projectStyles.thqImage} ${styles.image10} `}
          />
        </div>
        <span className={styles.text089}>Alternate Recreation of Mobile Screens</span>
      </div>
      <div id="cs2-weblaunch" className={styles.container26}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.h106} `}>Launching the Website</h1>
        <span className={styles.text090}>
          The entire project was designed and developed in over a period ofÂ 
          <span data-type="span">
            <span className={styles.text092}>16 months.</span>
          </span>
          Â We worked in Agile with 4 week sprints.
          <br data-type="br" />
          Once the wireframes for all the flows were finalised, I started on the visual design of
          the application. We already had a brand guideline in place, so I followed the design
          direction mentioned in the guideline.
          <br data-type="br" />
          I collaborated with senior visual designers for review and refining the application.
          <br data-type="br" />
          Once we developed the MVP, we ran a closed beta test with 100 users. We made minor
          iterations based on the user inputs and submitted the app for security testing.
        </span>
        <span className={styles.text093}>
          As this is company wide initiative, I worked with HR managers, corporate communications to
          run awareness workshops and marketing campaigns with the associates in making them aware
          of the new system and process.
        </span>
        <span className={styles.text094}>
          <span className={styles.text095}>
            We successfully launched the web application on October 31, 2018.
          </span>
        </span>
        <span className={styles.text096}>
          The response was mostly positive and people loved the app performance and the new
          interface.Â We had ~
          <span data-type="span" className={styles.text097}>
            100k logins
          </span>
          Â in the first week but as expected the traffic gradually reduced in the weeks after
          launch.
        </span>
      </div>
      <div id="cs2-moblaunch" className={styles.container27}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.h107} `}>
          Launching the Mobile App
        </h1>
        <span className={styles.text098}>
          Post the web launch, we took a month break to stabilise the site and work on any changes
          based on feedback.
        </span>
        <span className={styles.text099}>
          I started working on few user flows for the mobile app during the web design phase itself.
          I created high fidelity mockups based on brand guidelines for all the user journeys in the
          app.
        </span>
        <span className={styles.text100}>
          <span data-type="span">
            <span data-type="span" className={styles.text102}>
              Like web, we worked on sprints and after successfully clearing the usability and
              security testing,Â 
              <span data-type="span" className={styles.text103}>
                we launched the mobile app on April 30, 2019.
              </span>
            </span>
          </span>
        </span>
        <span className={styles.text104}>
          The response was mostly positive and people loved the app performance and the new
          interface.Â We had ~
          <span data-type="span" className={styles.text105}>
            100k logins
          </span>
          Â in the first week but as expected the traffic gradually reduced in the weeks after
          launch.
        </span>
        <span className={styles.text106}>
          The organisation was planning to revamp few more modules associated with appraisals such
          as promotion, career hub etc. But after working on this project for more than 16 months, I
          desired a break and exited the project.
          <br />I created a transition plan on KT and handed over all the access and relevant files
          to my replacement.
        </span>
        <span className={styles.text107}>
          Presently, the application team is doing a tremendous job is maintaining the app. They are
          continuously working towards creating a platform to measure quantitative objectives
          automatically there by eliminating bias and also on improving the app with bug fixes, new
          features.
        </span>
      </div>
      <div id="cs2-learnings" className={styles.container28}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.h108} `}>Final Thoughts</h1>
        <span className={styles.text108}>
          This journey of 16 months was a fantastic learning experience filled with excitement, fun
          and at times frustration.. Some of my key takeaways from this project are:
        </span>
        <span className={styles.text109}>
          - Establish a clear form of communication with the key stakeholders as lot of conflicts
          arise from simple miscommunications.
          <br />
          - Support designs with facts. Even if it requires additional efforts as a designer, be
          ready to put in the work as you are advocating for the user.
          <br />- Take breaks from work as much as possible. Working continuously has serious
          consequences both physically and mentally.
        </span>
        <span className={styles.text110}>
          I am immensely proud to be part this project that despite all the hurdles, banded together
          in creating this amazing product, that has a positive impact on large number of users.
          <br />
        </span>
      </div>
      <div id="thank-u" className={styles.container29}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.h109} `}>
          <span data-type="span">Thank you for reading! ð</span>
        </h1>
        <div id="persona-1" className={styles.container30}></div>
      </div>
      <div id="footer" className={styles.container31}>
        <div className={styles.container32}>
          <div className={styles.container33}>
            <span className={styles.text112}>
              Let&apos;s connect. Feel free to drop a
              <span className={styles.text113}>&quot;hello&quot;</span>
              anytime
            </span>
          </div>
          <div className={styles.container34}>
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

export default Appraise
