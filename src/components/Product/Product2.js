import React from 'react';
import Product from './Product';

function Product2() {
    return (
        <div>
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
        </div>
    )
}

export default Product2