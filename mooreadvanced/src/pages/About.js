import { Link } from 'react-router-dom';
import Header from '../components/Header';
import LowerHeader from '../components/LowerHeader';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Header />
      <LowerHeader textOne='About' textTwo='Moore Advanced Solutions' />
      <main className='container'>
        <section className='instructions-section mb-section '>
          <h3>WE HELP GUIDE INSTITUTIONS</h3>
          <p>
            At <em>Moore Advanced Solutions</em> we offer services that support
            organizations with their quality assurance, quality management and
            quality improvement needs to successfully achieve their business
            and/or organizational objectives.
          </p>
        </section>
        <section className='founder-section mb-section '>
          <div className='founder-section-header'>
            <div className='text-box'>
              <h4>Founder</h4>
              <h3>Kimberlee Moore</h3>
              <p>President and Principal Consultant</p>
            </div>
            <div className='img-box'>
              <img
                src='./assets/images/default-user.jpg'
                alt='moore advance solution founder'
              />
            </div>
          </div>
          <div className='founder-section-content'>
            <p>
              Ms. Kimberlee Moore is the President and Principal Consultant at
              Moore Advanced Solutions She has more than 18 years’ experience
              advising individuals and organizations on developing and
              sustaining qualitative improvements in their
              educational/organizational and quality assurance practices. She
              has worked with higher education institutions and organizations
              within the United States and internationally excelling in high
              pressure and fast- paced environments. She most recently served as
              the former Chief Accreditation Officer for the American
              Speech-Language-Hearing Association. Additionally, she has held
              leadership positions overseeing and supporting programmatic and
              institutional accreditation activities for higher education
              institutions in the US, Ecuador, Italy, New Zealand, and Turkey
              and has served in advisory leadership roles for non-profit and
              private sector organizations.
            </p>
            <p>
              Ms. Moore is currently completing a Doctorate of Education from
              the University of the Liverpool, Liverpool, UK. She holds a Master
              of Public Policy degree from the University of Maryland, College
              Park, MD; a Postgraduate Certificate in Business Administration
              from the Georgetown University School of Continuing Studies,
              Washington, DC; and a Bachelor of Arts degree from the University
              of Georgia, Athens, GA.
            </p>
          </div>
        </section>

        <section className='clientel-section mb-section '>
          <h2>Services</h2>
          <div>
            <div>
              <img src='./assets/images/degree.png' alt='check icon' />
              <h3>Higher Education</h3>
              <p>
                Institutional and Programmatic Readiness, Feasibility Analysis,
                Academic Program Development and Assessment Accreditation
              </p>
            </div>
            <div>
              <img src='./assets/images/ngo.png' alt='check icon' />
              <h3>Non-Profit</h3>
              <p>
                Capacity Building, Organizational Leadership and Management
                Coaching, Quality Management System Development and
                Implementation
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
          </div>
        </section>

        <section className='why-us-section mb-section '>
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
            <Link to='/contact-us'>Contact us</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
