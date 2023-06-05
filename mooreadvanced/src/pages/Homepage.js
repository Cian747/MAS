import Header from "../components/Header"; 


function Homepage() {
    return (
        <div>
            <Header />
            <div className='Homepage'>
                <div className='welcome-section'>
                    <div className='Homepage-content'>
                        <h1><span className='Homepage-content-title'>Grow your business today</span></h1>
                        <br></br>
                        <p className='Homepage-content-text'>Gorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <br></br>
                        <button type="button" className="btn btn-primary">Book a call now</button>
                    </div>
                    <div className='Homepage-image'>
                        <img src="./assets/images/kevin-matos-Nl_FMFpXo2g-unsplash.jpg" alt="" width={'500'}height={'600'}/>
                    </div>
                </div>
                <br></br>
                {/* testimonial */}
                 <div className="testimonial">
                    <div className="text-wrapper">
                        <h2>Placeholder</h2>
                        <p className="test-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed lorem sed sapien ultrices ultrices sed sed sapien ultrices ultrices sed</p>
                    </div>

                    <div className="text-wrapper">
                        <h2>Placeholder</h2>
                        <p className="test-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed lorem sed sapien ultrices ultrices sed sed sapien ultrices ultrices sed</p>
                    </div>

                    <div className="text-wrapper">
                        <h2>Placeholder</h2>
                        <p className="test-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed lorem sed sapien ultrices ultrices sed sed sapien ultrices ultrices sed</p>
                    </div>

                    <div className="text-wrapper">
                        <h2>Placeholder</h2>
                        <p className="test-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed lorem sed sapien ultrices ultrices sed sed sapien ultrices ultrices sed</p>
                    </div>


                </div>

                {/* What we do */}
                <section className="what-we-do">
                    <div className="punchline">
                        <h2>A simple and streamlined process</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed lorem sed sapien ultrices ultrices sed sed sapien ultrices ultrices sed</p>
                    </div>
                    <div className="steps">
                        <div className="step">
                            <img src="" alt=""/>
                            <h2>Placeholder</h2>
                            <p>Lorem ipsum dolor</p>
                        </div>
                        <div className="step">
                            <img src="" alt=""/>
                            <h2>Placeholder</h2>
                            <p>Lorem ipsum dolor</p>
                        </div>
                        <div className="step">
                            <img src="" alt=""/>
                            <h2>Placeholder</h2>
                            <p>Lorem ipsum dolor</p>
                        </div>
                    </div>
                </section>

                {/* About us */}
                <section className="about-us">
                    <div className="about-us-image">
                    <img src="./assets/images/kevin-matos-Nl_FMFpXo2g-unsplash.jpg" alt="" width={'500'}height={'600'}/>
                    </div>
                    <div className="about-us-content">
                        <h3>About Us</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed lorem sed sapien ultrices ultrices sed sed sapien ultrices ultrices sed</p>
                    </div>
                </section>

                {/* Services section */}
                <section className="services-offered">
                    <div className="services-offered-content">
                        <h2>Services Offered</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed lorem sed sapien ultrices ultrices sed sed sapien ultrices ultrices sed</p>
                    </div>
                    <div className="services-offered-list">
                        <div className="card">
                            <div className="card__image">
                            {/* <img src="https://images.unsplash.com/photo-1521139869420-edaae1bc7b9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="S" /> */}
                            </div>
                            <div className="card__copy">
                                <h1>Robin Hood's Bay</h1>
                                <h2>27 October, Noon.</h2>
                            <p>
                                --Most strange; no news yet of the ship we wait for. Mrs. Harker
                                reported last night and this morning as usual: "lapping waves and
                                rushing water.
                            </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card__image">
                            {/* <img src="https://images.unsplash.com/photo-1521139869420-edaae1bc7b9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="" /> */}
                            </div>
                            <div className="card__copy">
                                <h1>Robin Hood's Bay</h1>
                                <h2>27 October, Noon.</h2>
                            <p>
                                --Most strange; no news yet of the ship we wait for. Mrs. Harker
                                reported last night and this morning as usual: "lapping waves and
                                rushing water.
                            </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card__image">
                            {/* <img src="https://images.unsplash.com/photo-1521139869420-edaae1bc7b9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="" /> */}
                            </div>
                            <div className="card__copy">
                                <h1>Robin Hood's Bay</h1>
                                <h2>27 October, Noon.</h2>
                            <p>
                                --Most strange; no news yet of the ship we wait for. Mrs. Harker
                                reported last night and this morning as usual: "lapping waves and
                                rushing water.
                            </p>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Photo reference */}
                <section className='photo-reference'>
                    <div className="photos">
                        <div className="photo">
                            <img src="https://images.unsplash.com/photo-1521139869420-edaae1bc7b9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt=""/>
                        </div>
                        <div className="photo">
                            <img src="https://images.unsplash.com/photo-1521139869420-edaae1bc7b9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt=""/>
                        </div>
                        <div className="photo">
                            <img src="https://images.unsplash.com/photo-1521139869420-edaae1bc7b9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt=""/>
                        </div>
                    </div>
                    <div className="call-to-action">
                        <h1>The results are satisfying</h1>
                        <p>There so many companies that have benefited from working with us </p>
                        <button type="button" class="btn -primary">See more photos</button>
                        
                    </div>
                </section>

                <section className="CTA">
                    <div className="CTA__text">
                        <h1>The results are satisfying</h1>
                        <p>There so many companies that have benefited from working with us </p>
                    </div>
                    <div className="CTA__image">
                        <div class="d-grid gap-2">
                          <button type="button" name="" id="" class="btn btn-primary">Button</button>
                        </div>
                    </div>
                </section>

                <h1>This is where the footer goes</h1>
            </div>
        </div>
    );
}

export default Homepage;