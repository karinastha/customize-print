
const productsArray = [

                 {
                    id : 1,
                    title: "Black Clover Anime Graphic T-shirt",
                    price: 'Rs. 1500',
                    image :"https://i.pinimg.com/564x/01/f8/77/01f877cd7c591f447575e6595a5ce5d4.jpg",
                    amount: 1
                },
                {
                    id : 2,
                    title: "Black Clover Anime Graphic T-shirt",
                    price: 'Rs. 2000',
                    image :"https://i.pinimg.com/564x/01/f8/77/01f877cd7c591f447575e6595a5ce5d4.jpg",
                    amount: 1
                },
                {
                    id : 3,
                    title: "Black Clover Anime Graphic T-shirt",
                    price: 'Rs. 3500',
                    image :"https://i.pinimg.com/564x/01/f8/77/01f877cd7c591f447575e6595a5ce5d4.jpg",
                    amount: 1
                },
                {
                    id : 4,
                    title: "Black Clover Anime Graphic T-shirt",
                    price: 'Rs. 2000',
                    image :"https://i.pinimg.com/564x/01/f8/77/01f877cd7c591f447575e6595a5ce5d4.jpg",
                    amount: 1
                },
                {
                    id : 5,
                    title: "Black Clover Anime Graphic T-shirt",
                    price: 'Rs. 1500',
                    image :"https://i.pinimg.com/564x/01/f8/77/01f877cd7c591f447575e6595a5ce5d4.jpg",
                    amount: 1
                },
                {
                    id : 6,
                    title: "Black Clover Anime Graphic T-shirt",
                    price: 'Rs. 1500',
                    image :"https://i.pinimg.com/564x/01/f8/77/01f877cd7c591f447575e6595a5ce5d4.jpg",
                    amount: 1
                },
                {
                    id : 7,
                    title: "Black Clover Anime Graphic T-shirt",
                    price: 'Rs. 1500',
                    image :"https://i.pinimg.com/564x/01/f8/77/01f877cd7c591f447575e6595a5ce5d4.jpg",
                    amount: 1
                },
                {
                    id : 8,
                    title: "Black Clover Anime Graphic T-shirt",
                    price: 'Rs. 1500',
                    image :"https://i.pinimg.com/564x/01/f8/77/01f877cd7c591f447575e6595a5ce5d4.jpg",
                    amount: 1
                },
                {
                    id : 9,
                    title: "Black Clover Anime Graphic T-shirt",
                    price: 'Rs. 1500',
                    image :"https://i.pinimg.com/564x/01/f8/77/01f877cd7c591f447575e6595a5ce5d4.jpg",
                    amount: 1
                }
    ]

    function getProductData (id) {
        let productData = productsArray.find(product => product.id === id);

        if (productData == undefined){
            console.log ("Product data does not exixt for ID: " +id);
        }
        return productData;
    }

export { productsArray , getProductData};