import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div className="footer">
            <div className='footer-sections'>
                <div className='footer-section'>
                    <p>We're redefining what it is to work with us</p>

                    <img src='./assets/logo/13.svg' alt='' width={'250'} height={'250'}/>
                </div>

                <div className='footer-section'>
                    <div className='line'></div>

                    <p>Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                    <p><strong>Moore Advanced Solutions<cite>2023</cite></strong></p>
                </div>

                <div className='footer-section'>
                    <h4>Pages</h4>
                    <div className='line'></div>

                    <ul>
                        <Link to='/'>Home</Link>
                        <Link to='/services'>Services</Link>
                        <Link to='/anout-us'>About us</Link>
                        <Link to='/contact-us'>Contact us</Link>
                        {/* <Link to='/'>Home</Link> */}

                    </ul>
                </div>

                <div className='footer-section'>
                    <h4>Reach out</h4>
                    <div className='line'></div>

                    <div className='whats-app'>
                        <img src='./assets/logo/whatsapp.png' alt='' width={'20'} height={20}/>
                        <h6>1800-321-4651</h6>
                    </div>
                    <p>kmooreadvancedsolutions.com</p>
                </div>    

                <div className='footer-section'>
                    <div className='line'></div>
                    <p>Terms of use</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
