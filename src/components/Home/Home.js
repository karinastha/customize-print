import React from "react";
import "./Home.css";
import Product from "../Product/Product";
import About from "../About/About";


function Home() {
    return (
        <div className="home">
            <div className="home__container">
                {/* <div className="home__image"> Customize w' me </div> */}
                <img src="https://t3.ftcdn.net/jpg/03/22/71/16/360_F_322711637_RhYLKPlbn5aj8kTnmOC4ULzsr0XcQSbh.jpg" alt="Img not found" className="home__image" />

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
                        title="Black Clover Asta T-shirt Anime Cartoon Anime Harajuku Graphic Kawaii T-shirt For Men's Women's"
                        price={1500}
                        rating={4}
                        image="https://i.pinimg.com/564x/01/f8/77/01f877cd7c591f447575e6595a5ce5d4.jpg" alt="Image not found"
                    />

                    <Product
                        id="02"
                        title="Black Clover Asta T-shirt Anime Cartoon Anime Harajuku Graphic Kawaii T-shirt For Men's Women's"
                        price={1500}
                        rating={4}
                        image="https://i.pinimg.com/564x/ae/6e/e7/ae6ee7e507776bf76100a34892014a40.jpg" alt="Image not found"
                    />

                    <Product
                        id="03"
                        title="Black Clover Asta T-shirt Anime Cartoon Anime Harajuku Graphic Kawaii T-shirt For Men's Women's"
                        price={1500}
                        rating={4}
                        image="https://i.pinimg.com/564x/7a/4d/1d/7a4d1db7186a047fb3757e64d2b86889.jpg" alt="Image not found"
                    />

                </div>

                <div className="home__row">
                    <Product
                        id="03"
                        title="Black Clover Asta T-shirt Anime Cartoon Anime Harajuku Graphic Kawaii T-shirt For Men's Women's"
                        price={1500}
                        rating={4}
                        image="https://i.pinimg.com/564x/7a/4d/1d/7a4d1db7186a047fb3757e64d2b86889.jpg" alt="Image not found"
                    />

                    <Product
                        id="03"
                        title="Black Clover Asta T-shirt Anime Cartoon Anime Harajuku Graphic Kawaii T-shirt For Men's Women's"
                        price={1500}
                        rating={4}
                        image="https://i.pinimg.com/564x/7a/4d/1d/7a4d1db7186a047fb3757e64d2b86889.jpg" alt="Image not found"
                    />

                </div>

                <div className="home__row">
                    <Product
                        id="03"
                        title="Black Clover Asta T-shirt Anime Cartoon Anime Harajuku Graphic Kawaii T-shirt For Men's Women's"
                        price={1500}
                        rating={4}
                        image="https://i.pinimg.com/564x/7a/4d/1d/7a4d1db7186a047fb3757e64d2b86889.jpg" alt="Image not found"
                    />
                </div>
                < About />
            </div>


        </div>
    )
}
export default Home;