import React from 'react'
import { Link } from 'react-router-dom'

import Helmet from 'react-helmet'

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
            <span className={styles.text03}>
              <span className={styles.text04}>About</span>
            </span>
          </div>
        </div>
      </div>
      <div id="about-intro" className={styles.container02}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.text05} `}>
          <span data-type="span" className={styles.text06}>
            Hello There.
            <br />
          </span>
        </h1>
      </div>
      <div id="intro-pic" className={styles.div2}>
        <img
          src="/playground_assets/Temppic_portfolio_0.5x-1200h.png"
          className={` ${projectStyles.thqImage} ${styles.image1} `}
        />
      </div>
      <div id="intro-desc" className={styles.container03}>
        <span className={styles.text07}>Iâm a UX Designer based out of Chennai, India.</span>
        <span className={styles.text08}>
          I currently work atÂ 
          <span data-type="span" className={styles.text09}>
            Tata Consultancy Services (TCS)
          </span>
          Â for the pastÂ 
          <span data-type="span" className={styles.text10}>
            9+years
          </span>
          .
          <br data-type="br" />
        </span>
        <span className={styles.text11}>
          I completed my Electronics and Instrumentation Engineering from RMK Engineering College in
          2011 and joined TCS the same year. I started my career in 2011 as a developer, coding in
          HTML, CSS, Java and Unix, but found my calling in design.
          <br data-type="br" />
        </span>
        <span className={styles.text12}>
          I started designing mobile applications in 2014 and have worked on diverse portfolio of
          products since.
          <br data-type="br" />
        </span>
        <span className={styles.text13}>
          Right now Iâm part of the âDigital Workplaceâ practice in TCS. We collaborate with clients
          from diverse industries and geographies to create a seamless and cohesive employee
          experience across enterprise applications.
        </span>
      </div>
      <div className={styles.container04}></div>
      <div id="what-i-bring" className={styles.container05}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.h1} `}>
          <span data-type="span">What I Bring</span>
        </h1>
        <span className={styles.text15}>ð­Â  Design Thinking &amp; Workshops</span>
        <span className={styles.text16}>
          Good design is an intimate collaboration between designers, engineers and business. By
          planning and facilitating workshops, I ensure people of different disciples, roles, and
          needs come together to build successful products and make better decisions
        </span>
        <span className={styles.text17}>
          I have supported clients from different industries in understanding their usersâ needs and
          help align the same with the business goals through workshopsÂ 
        </span>
        <span className={styles.text18}>ð¬Â  Research &amp; Testing</span>
        <span className={styles.text19}>
          Our team has strong belief in user research that has driven to incorporate a user centered
          design process into our products and solutions. By communicating and testing our
          assumptions continuously, we gain insights about our users and make data-driven decisions.
        </span>
        <span className={styles.text20}>
          I have conducted qualitative and quantitative research with users all over the globe and
          have learned to set up studies and translate results and insights into actions.
        </span>
        <span className={styles.text21}>ð¨Â  Design &amp; Prototype</span>
        <span className={styles.text22}>
          I really enjoy being involved in all stages of the design process, from talking to users,
          designing low-fidelity wireframes to high fidelity prototypes and interactions.
        </span>
        <span className={styles.text23}>
          My typical process ranges from conducting user research, creating low-fidelity prototype
          for exemplary user journeys, user testing and high fidelity prototypes, continuously
          iterating based on feedback from users, business and my team.
        </span>
      </div>
      <div className={styles.container06}></div>
      <div id="current-work" className={styles.container07}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.text24} `}>
          <span className={styles.text25}>Current Work</span>
        </h1>
        <span className={styles.span1}>
          â¢ FacilitateÂ 
          <span className={styles.text26}>remote &amp;</span>Â 
          <span className={styles.text27}>in-person design sprintsÂ </span>
          with global clients to reimagine their employee workspace.
          <br />
        </span>
        <span className={styles.text28}>
          â¢ I usually conduct 3-week design sprints that includes stakeholder discussions, user
          research, data synthesis, ideation, prototyping and user testing.
          <br data-type="br" />
        </span>
        <span className={styles.text29}>
          {' '}
          â¢ Typical projects include: creating design systems, user-centric MVP, design-driven RFP
          response &amp; presentations and building internal digital products.
          <br data-type="br" />
        </span>
        <span className={styles.text30}>
          â¢ Designed digital workplace products including Intranet, Knowledge Management, Employee
          Onboarding &amp; LOB Applications
          <br data-type="br" />
        </span>
        <span className={styles.text31}>LATEST PROJECT</span>
        <span className={styles.text32}>
          {' '}
          â¢ Lead UX design for an ANZ Rail Company to redesign and improve theirÂ 
          <span className={styles.text33}>Ideation Platform.</span>
          <br data-type="br" />
        </span>
        <span className={styles.text34}>
          â¢ The entire project was conceptualised, designed and successfully delivered via Remote.
        </span>
        <span className={styles.text35}>
          â¢ I collaborated with a cross-functional team in designing andÂ  developing a user centered
          MVP. Adoption of the platform improved byÂ 
          <span data-type="span" className={styles.text36}>
            200%
          </span>
          Â and lot of ideas ended up as cost-saving initiatives for the company.
        </span>
      </div>
      <div className={styles.container08}></div>
      <div id="footer" className={styles.container09}>
        <div className={styles.container10}>
          <h1 className={` ${projectStyles.thqHeading1} ${styles.text37} `}>
            <span className={styles.text38}>
              <span className={styles.text39}>Let&apos;s connect. Feel free to drop a</span>Â 
            </span>
            helloÂ 
            <span className={styles.text40}>anytime.</span>Â 
          </h1>
        </div>
        <div className={styles.container11}>
          <a href="mailto:msgsrive@gmail.com?subject=Hello :)" className={styles.link}>
            <svg
              viewBox="0 0 1024 1024"
              className={` ${projectStyles.thqIcon} ${projectStyles.thqLink} ${styles.icon} `}
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
              className={` ${projectStyles.thqIcon} ${projectStyles.thqLink} ${styles.icon1} `}
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
              className={` ${projectStyles.thqIcon} ${projectStyles.thqLink} ${styles.icon2} `}
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
              className={` ${projectStyles.thqIcon} ${projectStyles.thqLink} ${styles.icon3} `}
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
              className={` ${projectStyles.thqIcon} ${projectStyles.thqLink} ${styles.icon4} `}
            >
              <title>dribbble</title>
              <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
