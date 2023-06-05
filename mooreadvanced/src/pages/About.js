import { Link } from 'react-router-dom';
import Header from '../components/Header';

const About = () => {
  return (
    <>
      <Header />
      <header className='header'>
        <img
          src='../assets/logo/Moore Advanced Solutions (1).svg'
          alt='watermark'
        />
        <div class='header-text'>
          <p>About</p>
          <p>Moore Advanced Solutions</p>
        </div>
      </header>
      <main className='content-wrapper'>
        <section className='instructions-section'>
          <h3>WE HELP GUIDE INSTITUTIONS</h3>
          <p>
            At <em>Moore Advanced Solutions</em> we offer services that support
            organizations with their quality assurance, quality management and
            quality improvement needs to successfully achieve their business
            and/or organizational objectives.
          </p>
        </section>
        <section className='clientel-section'>
          <div>
            <img src='./assets/images/ngo.png' alt='check icon' />
            <h3>Non-Profit</h3>
            <p>
              Capacity Building, Organizational Leadership and Management
              Coaching, Quality Management System Development and Implementation
            </p>
          </div>
          <div>
            <img src='./assets/images/corporate.png' alt='check icon' />
            <h3>Corporate</h3>
            <p>
              Business goal setting, Professional Development & Training,
              Organizational Leadership and Management Coaching
            </p>
          </div>
          <div>
            <img src='./assets/images/degree.png' alt='check icon' />
            <h3>Higher Education</h3>
            <p>
              Institutional and Programmatic Readiness, Feasibility Analysis,
              Academic Program Development and Assessment Accreditation
            </p>
          </div>
          {/* <div>
            <h2>Placeholder</h2>
            <p>
              Lorem Imconsectetur adipiscing elit. Nunc vulputate libero et
              velit interdum, ac aliquet odio mattis
            </p>
          </div> */}
        </section>
        <section className='why-us-section'>
          <div className='text-box'>
            <h3>Why Us</h3>
            <h2>Improving Organizational Effectiveness </h2>
            <ul>
              <li>
                <img src='./assets/icons/check.svg' alt='check icon' />
                <div>
                  <h3>Trustworthy</h3>
                  <p>
                    Personality – Collaborative, Trustworthy; ability to manage
                    vertically and horizontally
                  </p>
                </div>
              </li>
              <li>
                <img src='./assets/icons/check.svg' alt='check icon' />
                <div>
                  <h3>Track record</h3>
                  <p>
                    Proven record with various types of accreditations and
                    quality initiatives
                  </p>
                </div>
              </li>
              <li>
                <img src='./assets/icons/check.svg' alt='check icon' />
                <div>
                  <h3>Experiences</h3>
                  <p>
                    Worked both at institutional, corporate, accrediting
                    agencies and internationally - USDE, CHEA.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className='image-box'>
            <img
              src='./assets/images/laptop.jpg'
              alt='woman working with a laptop'
            />
          </div>
        </section>
        <section className='cta-section'>
          <div className='text-box'>
            <h2>Let's work together</h2>
            <p>
              Towards better organizational quality assurance and management.
            </p>
          </div>

          <div className='link-box'>
            <Link to='/contact-us'>Schedule a call</Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
