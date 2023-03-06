import React from "react";
import "./Home.css";
import Product from "../Product/Product";
import About from "../About/About";
import Contact from "../Contact/Contact";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                {/* <div className="home__image"> Customize w' me </div> */}
                <img src="https://i.pinimg.com/564x/ed/8f/fc/ed8ffc9b76c3850226270ec30816f0b9.jpg" alt="Img not found" className="home__image1" />
                <img src="https://i.pinimg.com/564x/45/4b/20/454b20ab2def11cb5931dcc78651325c.jpg" alt="Img not found" className="home__image2" />
                <h3 className="heading"> Customize With Us.</h3>
                <p className="description">Fashion should be stylish and fun. One for all and all for one</p>
                {/* <div className="home">
            <section className="home section">
         <div className="home__data">
                    <h1 className="home__title"> Customize w' us</h1>
                    <p className="home__description">Order your favorite foods at any time and we will deliver them right to where you are.</p>
                </div>

            </section>
        </div> */}

                <div className="home__row">
                    <Product
                        id="01"
                        title="Black Clover Anime Harajuku Graphic T-shirt"
                        price={1500}
                        rating={4}
                        image="https://i.pinimg.com/564x/01/f8/77/01f877cd7c591f447575e6595a5ce5d4.jpg" alt="Image not found"
                    />

                    <Product
                        id="02"
                        title="Black Clover Anime Harajuku Graphic T-shirt"
                        price={500}
                        rating={2}
                        image="https://i.pinimg.com/564x/ae/6e/e7/ae6ee7e507776bf76100a34892014a40.jpg" alt="Image not found"
                    />

                    <Product
                        id="01"
                        title="Black Clover Anime Harajuku Graphic T-shirt"
                        price={1500}
                        rating={4}
                        image="https://i.pinimg.com/564x/01/f8/77/01f877cd7c591f447575e6595a5ce5d4.jpg" alt="Image not found"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="03"
                        title="Black Clover Anime Harajuku Graphic T-shirt"
                        price={2500}
                        rating={3}
                        image="https://i.pinimg.com/564x/7a/4d/1d/7a4d1db7186a047fb3757e64d2b86889.jpg" alt="Image not found"
                    />

                    <Product
                        id="03"
                        title="Black Clover Anime Harajuku Graphic T-shirt"
                        price={1000}
                        rating={2}
                        image="https://i.pinimg.com/564x/7a/4d/1d/7a4d1db7186a047fb3757e64d2b86889.jpg" alt="Image not found"
                    />

                    <Product
                        id="03"
                        title="Black Clover Anime Harajuku Graphic T-shirt"
                        price={1500}
                        rating={4}
                        image="https://i.pinimg.com/564x/7a/4d/1d/7a4d1db7186a047fb3757e64d2b86889.jpg" alt="Image not found"
                    />

                </div>

                <div className="home__row">
                    <Product
                        id="03"
                        title="Black Clover Anime Harajuku Graphic T-shirt"
                        price={3500}
                        rating={4}
                        image="https://i.pinimg.com/564x/7a/4d/1d/7a4d1db7186a047fb3757e64d2b86889.jpg" alt="Image not found"
                    />
                    <Product
                        id="01"
                        title="Black Clover Anime Harajuku Graphic T-shirt"
                        price={1500}
                        rating={4}
                        image="https://i.pinimg.com/564x/01/f8/77/01f877cd7c591f447575e6595a5ce5d4.jpg" alt="Image not found"
                    />
                </div>
                < About />
                <Contact />

            </div>


        </div>
    )
}

export default Home;