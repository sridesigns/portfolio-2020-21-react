import React from 'react'
import { Link } from 'react-router-dom'

import Helmet from 'react-helmet'

import NavBar from '../components/nav-bar'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './service-desk-management.module.css'

const ServiceDeskManagement = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Service Desk Management - Sriram Venugopal</title>
        <meta
          name="description"
          content="Hi. This is Sriram and you are viewing my portfolio. Feel free to reach out :)"
        />
        <meta property="og:title" content="Service Desk Management - Sriram Venugopal" />
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
      <div id="cs2-intro" className={styles.container02}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.text} `}>
          <span data-type="span" className={styles.text01}>
            IT Service Desk Management
          </span>
        </h1>
        <span className={styles.text02}>
          Collaborated with a startup to designÂ a Service Desk Management platformÂ to cater to the
          IT needs of small and medium enterprise organizations. The platform can be easily
          integrated to a customer&apos;s product, features can be customized as per requirement and
          deployed seamlessly.
        </span>
        <img
          src="https://play.teleporthq.io/static/img/default.png"
          className={` ${projectStyles.thqImage} ${styles.image} `}
        />
      </div>
      <div id="cs2-role" className={styles.container03}>
        <div className={styles.container04}>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.text03} `}>
            <span className={styles.text04}>My Role</span>
          </h1>
          <span className={styles.text05}>
            Competitive Analysisâ
            <br />
            Information Architecture
            <br />
            User Flows
            <br />
            Wireframes
            <br />
            Interaction Design
            <br />
            Visual Design
            <br />
            Branding
          </span>
        </div>
        <div className={styles.container05}>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.text06} `}>
            <span data-type="span" className={styles.text07}>
              Platforms
            </span>
          </h1>
          <span className={styles.text08}>Web</span>
        </div>
      </div>
      <div id="cs2-problem" className={styles.div}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.h1} `}>The Problem</h1>
        <span className={styles.text09}>
          The goal was to create a Service Desk management platform forÂ small and medium enterprise
          organizations to cater to their IT needs. The client already had aÂ vision and a detailed
          requirement of the product. My job was to build an effective UI and focusÂ on the
          experience of the service desk agents and administrators who deal with the feedback
          received from their consumers.
          <br />
          <br />
          The
          <span className={styles.text10}> core product requirements</span>
          are:
          <br />
          1. Design a system for the service desk agents to view, inspect, collaborate and resolve
          the queries and feedback of the consumer.
          <br />
          2. The system should be smart enough to assign the tickets to a &quot;right&quot; SD agent
          automatically from the pool - based on the ticket category, agent availability, ticket
          priority, etc.
          <br />
          3. The supervisor/manager should be able to view/work on tickets, manually assign tickets
          to the agents, and have a dashboard to monitor the performance of the agents.
          <br />
          4. The experience of the interface to be very simple and easy to understand for the agents
          so as to enable new joiners to hit the ground running ASAP.
        </span>
      </div>
      <div id="cs2-deadline" className={styles.container06}>
        <div className={styles.container07}>
          <svg viewBox="0 0 1024 1024" className={` ${projectStyles.thqIcon} ${styles.icon1} `}>
            <title>alarm</title>
            <path d="M512 128c-247.424 0-448 200.576-448 448s200.576 448 448 448 448-200.576 448-448-200.576-448-448-448zM512 936c-198.824 0-360-161.178-360-360 0-198.824 161.176-360 360-360 198.822 0 360 161.176 360 360 0 198.822-161.178 360-360 360zM934.784 287.174c16.042-28.052 25.216-60.542 25.216-95.174 0-106.040-85.96-192-192-192-61.818 0-116.802 29.222-151.92 74.596 131.884 27.236 245.206 105.198 318.704 212.578v0zM407.92 74.596c-35.116-45.374-90.102-74.596-151.92-74.596-106.040 0-192 85.96-192 192 0 34.632 9.174 67.122 25.216 95.174 73.5-107.38 186.822-185.342 318.704-212.578z"></path>
            <path d="M512 576v-256h-64v320h256v-64z"></path>
          </svg>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.text11} `}>Timeline:</h1>
          <span className={styles.text12}>~ 10 weeks</span>
        </div>
      </div>
      <div id="cs2-process" className={styles.container08}>
        <div className={styles.container09}>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.h11} `}>
            <span className={styles.text13}>The Process</span>
          </h1>
          <span className={styles.text14}>
            We kicked off the project with a detailed requirement discussion with the key
            stakeholders. We broke down the requirements, outlined the different roles in the
            application, mapped out all the design activities I would carry out, and arrived at a
            design sprint plan that was suitable for everyone.
          </span>
        </div>
        <div className={styles.container10}>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.text15} `}>
            <span data-type="span" className={styles.text16}>
              Competitive Analysis
            </span>
          </h1>
          <span className={styles.text17}>
            I started by going through the different established products in this field. I wanted to
            understand the application experience, interactions, design rationale, and visual
            aesthetics used and how we can enhance the experience of our product. I scanned through
            multiple sites, demos, and videos from youtube and took notes.
            <br data-type="br" />
            Patterns Emerged!
            <br />
            1. I decided to use a Kanban board type - layout for the service agents. I believe
            it&apos;ll be easy and simple for the agents to keep track of open tickets.
            <br />
            2. I liked how ServiceNow showcased all the details within the ticket. The agent working
            on a ticket will have all the necessary info right there on the screen.
            <br />
            3. I liked the visual aesthetics of Jira. The branding was minimal and the content
            clear, concise, and organized.
            <br />
          </span>
        </div>
      </div>
      <div id="cs2-comp-analysis-pic" className={styles.container11}>
        <img
          src="/playground_assets/cs2_competitiveanalysis-1200h.png"
          className={` ${projectStyles.thqImage} ${styles.image1} `}
        />
      </div>
      <div id="cs1-ia-desc" className={styles.container12}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.text18} `}>
          <span className={styles.text19}>
            User Roles DeFined for the platform Are As Follows...
          </span>
        </h1>
      </div>
      <div id="cs2-roles" className={styles.div1}>
        <div id="persona-1" className={styles.container13}>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.h12} `}>
            ð§âð»Â Â 
            <span data-type="span" className={styles.text20}>
              Support Agent
            </span>
          </h1>
          <span className={styles.text21}>
            The first line of defense. â
            <br />
            <br />
            They communicate with the customer, work on the assigned tickets, and provide solutions
            within the defined SLA. â
            <br />
            <br />
            Typical age range: 21 to 30 years
          </span>
        </div>
        <div id="persona-1" className={styles.container14}>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.h13} `}>
            ð©âð¼Â Â 
            <span data-type="span" className={styles.text22}>
              Supervisors
            </span>
          </h1>
          <span className={styles.text23}>
            Manage support agents and handle customer escalations. â
            <br />
            <br />
            They are also tasked with ensuring a smooth operation within the group dynamics. â
            <br />
            <br />
            Typical age range: 30 to 40 years
          </span>
        </div>
        <div id="persona-1" className={styles.container15}>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.h14} `}>
            ð§âð§Â Â 
            <span data-type="span" className={styles.text24}>
              Administrators
            </span>
          </h1>
          <span className={styles.text25}>
            People who ensure the deployed application works functionally.
            <br />
            Â 
            <br />
            They are responsible for implementing SLA, creating groups, categories, people
            on-boarding, and generating reports for analysis.
            <br />
            ââ
            <br />
            Typical age range: 28 to 45 years
          </span>
        </div>
      </div>
      <div id="cs2-userflows" className={styles.container16}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.text26} `}>
          <span data-type="span" className={styles.text27}>
            USER FLOWS
          </span>
        </h1>
        <span className={styles.text28}>
          I synthesized all the data from the requirements and competitor analysis, I identified and
          createdÂ the critical user flows within the application. The client and I reviewed it
          periodically and the flow underwent a couple of iterations.
          <br data-type="br" />
        </span>
      </div>
      <div id="cs2-user-flows-pic" className={styles.container17}>
        <img
          src="/playground_assets/cs2_flow%201-1200h.png"
          className={` ${projectStyles.thqImage} ${styles.image2} `}
        />
        <div className={styles.container18}></div>
        <img
          src="/playground_assets/cs2_flow%202-1200h.png"
          className={` ${projectStyles.thqImage} ${styles.image3} `}
        />
      </div>
      <div id="cs2-ia-desc" className={styles.container19}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.h15} `}>
          <span data-type="span" className={styles.text29}>
            Information Architecture
          </span>
        </h1>
        <span className={styles.text30}>
          AfterÂ identifyingÂ the critical user journeys, I started working on the Information
          Architecture and the wireframes for the same. I had periodical reviews with the client and
          we were able to agree on the platform&apos;s layout and the sitemap after a couple of
          iterations.
        </span>
      </div>
      <div id="cs2-user-flows-pic" className={styles.container20}>
        <img
          src="/playground_assets/cs2_ia-1200h.png"
          className={` ${projectStyles.thqImage} ${styles.image4} `}
        />
        <span className={styles.text31}>App&apos;s Information Architecture</span>
        <div className={styles.container21}></div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default ServiceDeskManagement
