import Header from "../components/Header";

function Services() {
    return(
        <div>
            <Header />
            <div className="services-welcome">
                <h1 className="page-name"> Our Services</h1>
            </div>
            <section className="services-intro">
                <div className="services-intro-text">
                    <h4>SERVICES</h4>
                    <h1>Here are our current services</h1>
                    <lr></lr>
                    <p>Lorem ipsum dolor sit emet dolor asour caor dit met cur</p>
                </div>
            </section>
            <section className="services-container">
                    <div className="services-list">
                    <div className="card main-service">
                            <div className="card__image">
                                <img src="./assets/icons/graduation.png" alt="S" height={'80'} width={'80'} />
                            </div>
                            <div className="card__copy">
                                <h1>HIGHER EDUCATION ACCREDITATION</h1>
                                <br></br>
                                <ul>
                                    <li>Institutional and Programmatic Feasibility</li>
                                    <li>Academic Program Development & Assessment</li>
                                    <li>Accreditation and Self-Study Development</li>
                                    <li>Institutional Policy Development</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card__image">
                                <img src="./assets/icons/team.png" alt="S" height={'80'} width={'80'}/>
                            </div>
                            <div className="card__copy">
                                <h1>NON PROFIT AND CORPORATE</h1>
                                <br></br>
                            
                            <ul>
                                <li>Capacity building</li>
                                <li>Business goal setting</li>
                                <li>Professional development training</li>
                            </ul>
                            </div>
                        </div>
                        {/* <div className="card">
                            <div className="card__image">
                                <img src="./assets/icons/corporation.png" alt="non profit and corporate" height={'80'} width={'80'}/>
                            </div>
                            <div className="card__copy">
                                <h1>UNFAIR AND COMPETITIVE ADVANTAGE</h1>
                                <br></br>

                                <ul>
                                    <li>Personality- ability to work vertically and horizontally</li>
                                    <li>Track record with various types of accreditations and and quality initiatives</li>
                                    <li>Education- Research Area Quality Assurance and Social Justice</li>
                                </ul>

                            </div>
                        </div> */}
                    </div>
            </section>

            {/* Benefit */}
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


            {/* How it works */}
            <section className="how-it-works">
                <div className="how-it-works-content">
                    <h3>TESTIMONIALS</h3>
                    <h1>Words from our current and previous clients</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
                </div>
                <div className="services-list">
                        <div className="card">
                            <div className="testimonial__image">
                            <img src="https://images.unsplash.com/photo-1521139869420-edaae1bc7b9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="Profile" width={'50'} height={'50'} />
                            <p>John Doe</p>

                            </div>
                            <div className="card__copy">
                            <p>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="testimonial__image">
                            <img src="https://images.unsplash.com/photo-1521139869420-edaae1bc7b9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="Profile" width={'50'} height={'50'} />
                            <p>John Doe</p>

                            </div>
                            <div className="card__copy">
                                <p>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="testimonial__image">
                                <img src="https://images.unsplash.com/photo-1521139869420-edaae1bc7b9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="Profile" width={'50'} height={'50'} />
                            <p>John Doe</p>

                            </div>
                            <div className="card__copy">
                                <p>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                </p>
                            </div>
                        </div>
                </div>
            </section>
            <h1>This is for the footer</h1>
        </div>
    );
}

export default Services;