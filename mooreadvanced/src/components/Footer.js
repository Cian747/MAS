import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer container'>
      <div className='footer-content'>
        <div className='logo-col'>
          <p className='footer-heading'>
            We're redefining what it means to grow
          </p>
          <Link to='/' className='footer-logo'>
            <img
              src='./assets/logo/Moore Advanced Solutions (1).png'
              alt='logo-home'
            />
          </Link>
        </div>

        {/* <div className='copyright-col'>
          <p>
            Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
          <p>&copy; Moore Advanced Solutions 2023</p>
        </div> */}
        <div className='address-col'>
          <p className='footer-heading'>Contact</p>
          <address class='contacts'>
            <p class='address'>
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>
              <a class='footer-link' href='tel:800-234-3432'>
                800-234-3432
              </a>
              <br />
              <a
                class='footer-link'
                href='mailto:kmoore@mooreadvancedsolutions.com'
              >
                kmoore@mooreadvancedsolutions.com
              </a>
            </p>
          </address>
        </div>

        <div className='nav-col'>
          <p className='footer-heading'>Resources</p>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/services'>Services</Link>
            </li>
            <li>
              <Link to='/about-us'>About</Link>
            </li>
            <li>
              <Link to='/contact-us'>Contact Us</Link>
            </li>
            <li>
              <Link to='/'>FAQ</Link>
            </li>
          </ul>
        </div>

        <div className='documentation-col'>
          <p className='footer-heading'>Documentation</p>
          <ul>
            <li>
              <Link to='/'>Terms of use</Link>
            </li>
            <li>
              <Link to='/'>Privacy Policy</Link>
            </li>
          </ul>
          <p className='copyright'>&copy; Moore Advanced Solutions 2023</p>
        </div>
      </div>
    </footer>
  );

}

export default Footer;
