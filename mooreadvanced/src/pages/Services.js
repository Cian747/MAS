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
                    <h1>Here are our latest services</h1>
                    <lr></lr>
                    <p>Lorem ipsum dolor sit emet dolor asour caor dit met cur</p>
                </div>
            </section>
            <section className="services-container">
                    <div className="services-list">
                        <div className="card">
                            <div className="card__image">
                            <img src="https://images.unsplash.com/photo-1521139869420-edaae1bc7b9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="S" />
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
                            <img src="https://images.unsplash.com/photo-1521139869420-edaae1bc7b9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="" />
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
                            <img src="https://images.unsplash.com/photo-1521139869420-edaae1bc7b9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="" />
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

            {/* Benefit */}
            <section className="about-us">
                    <div className="about-us-image">
                    <img src="./assets/images/kevin-matos-Nl_FMFpXo2g-unsplash.jpg" alt="" width={'500'}height={'600'}/>
                    </div>
                    <div className="about-us-content">
                        <h3>BENEFIT</h3>
                        <h2>We’re ready to make a great experience</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed lorem sed sapien ultrices ultrices sed sed sapien ultrices ultrices sed</p>
                    </div>
            </section>

            {/* How it works */}
            <section className="how-it-works">
                <div className="how-it-works-content">
                    <h3>How it works</h3>
                    <h1>Fast & easy process here</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
                </div>
                <div className="how-it-works-walkthrough">
                <div className="services-list">
                        <div className="card">
                            <div className="card__image">
                            <img src="https://images.unsplash.com/photo-1521139869420-edaae1bc7b9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="S" />
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
                            <img src="https://images.unsplash.com/photo-1521139869420-edaae1bc7b9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="" />
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
                            <img src="https://images.unsplash.com/photo-1521139869420-edaae1bc7b9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="" />
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
                </div>
            </section>
            <h1>This is for the footer</h1>
        </div>
    );
}

export default Services;