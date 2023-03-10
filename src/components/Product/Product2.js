import React from 'react';
import Product from './Product';
import "./Product2.css";

function Product2() {
//     console.log("product2");
    return (
// var productsArray = [

 <div>
    <h2 className='product__title'> Our Product </h2>
    
    <div className="home__row">

        <Product className="first"
            id="01"
            title="Graphic tee available in oversized"
            price={4500}
            rating={4}
            image="https://i.pinimg.com/564x/46/24/b3/4624b3a6b5ef48fbd8e054ed90d2f521.jpg" alt="Image not found"
        />

        <Product
            id="02"
            title="Black Clover Anime Graphic T-shirt"
            price={2000}
            rating={2}
            image="https://i.pinimg.com/564x/ae/6e/e7/ae6ee7e507776bf76100a34892014a40.jpg" alt="Image not found"
        />

        <Product
            id="03"
            title="Cute matching bunny hoodie "
            price={8500}
            rating={3}
            image="https://i.pinimg.com/564x/61/8e/d4/618ed4e9d7da758257a66f60502c8606.jpg" alt="Image not found"
        />
    </div>

    <div className="home__row">
        <Product
            id="04"
            title="Black Clover Anime Graphic T-shirt"
            price={2500}
            rating={1}
            image="https://i.pinimg.com/564x/7a/4d/1d/7a4d1db7186a047fb3757e64d2b86889.jpg" alt="Image not found"
        />

        <Product
            id="05"
            title="CasualSleeve Style:RegularSleeve Length(cm): PrintOrigin"
            price={5000}
            rating={4}
            image="https://i.pinimg.com/564x/66/83/0c/66830c8b9a7cf51934d6705b030737e6.jpg" alt="Image not found"
        />

    </div>

    <div className="home__row">

        <Product
            id="06"
            title="Black Clover Anime Graphic T-shirt"
            price={3500}
            rating={3}
            image="https://i.pinimg.com/564x/7a/4d/1d/7a4d1db7186a047fb3757e64d2b86889.jpg" alt="Image not found"
        />
        <Product
            id="07"
            title="Black Clover Anime Graphic T-shirt"
            price={1500}
            rating={4}
            image="https://i.pinimg.com/564x/01/f8/77/01f877cd7c591f447575e6595a5ce5d4.jpg" alt="Image not found"
        />
        <Product
            id="08"
            title="Matching kawai hoodie availble"
            price={17000}
            rating={3}
            image="https://i.pinimg.com/564x/08/df/b1/08dfb178d804aae02f059fc1b73755d2.jpg" alt="Image not found"
        />
    </div>

    <div className="home__row">
        <Product
            id="09"
            title="Black Clover Anime Graphic T-shirt"
            price={3500}
            rating={4}
            image="https://i.pinimg.com/564x/7a/4d/1d/7a4d1db7186a047fb3757e64d2b86889.jpg" alt="Image not found"
        />
        <Product
            id="10"
            title="Matching Hoodie available in two colors"
            price={15000}
            rating={4}
            image="https://i.pinimg.com/564x/63/aa/22/63aa22d185c335ef3c7635f2ff82281d.jpg" alt="Image not found"
        />
    </div>
 </div>
    )}
//                 ];
// export default productsArray;

export default Product2;

// export const Product2 = [
//             {
//                 id : 1,
//                 title: "Black Clover Anime Graphic T-shirt",
//                 price: 'Rs. 1500',
//                 image :"https://i.pinimg.com/564x/01/f8/77/01f877cd7c591f447575e6595a5ce5d4.jpg",
//                 amount: 1
//             },
//             {
//                 id : 2,
//                 title: "Black Clover Anime Graphic T-shirt",
//                 price: 'Rs. 2000',
//                 image :"https://i.pinimg.com/564x/01/f8/77/01f877cd7c591f447575e6595a5ce5d4.jpg",
//                 amount: 1
//             },
//             {
//                 id : 3,
//                 title: "Black Clover Anime Graphic T-shirt",
//                 price: 'Rs. 3500',
//                 image :"https://i.pinimg.com/564x/01/f8/77/01f877cd7c591f447575e6595a5ce5d4.jpg",
//                 amount: 1
//             },
//             {
//                 id : 4,
//                 title: "Black Clover Anime Graphic T-shirt",
//                 price: 'Rs. 2000',
//                 image :"https://i.pinimg.com/564x/01/f8/77/01f877cd7c591f447575e6595a5ce5d4.jpg",
//                 amount: 1
//             },
//             {
//                 id : 5,
//                 title: "Black Clover Anime Graphic T-shirt",
//                 price: 'Rs. 1500',
//                 image :"https://i.pinimg.com/564x/01/f8/77/01f877cd7c591f447575e6595a5ce5d4.jpg",
//                 amount: 1
//             },
//             {
//                 id : 6,
//                 title: "Black Clover Anime Graphic T-shirt",
//                 price: 'Rs. 1500',
//                 image :"https://i.pinimg.com/564x/01/f8/77/01f877cd7c591f447575e6595a5ce5d4.jpg",
//                 amount: 1
//             },
//             {
//                 id : 7,
//                 title: "Black Clover Anime Graphic T-shirt",
//                 price: 'Rs. 1500',
//                 image :"https://i.pinimg.com/564x/01/f8/77/01f877cd7c591f447575e6595a5ce5d4.jpg",
//                 amount: 1
//             },
//             {
//                 id : 8,
//                 title: "Black Clover Anime Graphic T-shirt",
//                 price: 'Rs. 1500',
//                 image :"https://i.pinimg.com/564x/01/f8/77/01f877cd7c591f447575e6595a5ce5d4.jpg",
//                 amount: 1
//             },
//             {
//                 id : 9,
//                 title: "Black Clover Anime Graphic T-shirt",
//                 price: 'Rs. 1500',
//                 image :"https://i.pinimg.com/564x/01/f8/77/01f877cd7c591f447575e6595a5ce5d4.jpg",
//                 amount: 1
//             }
// ]
