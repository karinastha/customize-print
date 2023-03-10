import React from 'react'
import './Addproduct.css';
// import { Button } from "@material-ui/core";
import Navbar from '../Navbar/Navbar';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import DescriptionIcon from '@mui/icons-material/Description';
// import StorageIcon from '@mui/icons-material/Storage';
// import SpellcheckIcon from '@mui/icons-material/Spellcheck';

function Product() {

    return (
        <>
            <div className="newProductContainer">
                <Navbar />
                <form
                    className="createProductForm"
                    encType="multipart/form-data"
                >
                    <h1>Create Product</h1>

                    <div>
                        {/* <SpellcheckIcon /> */}
                        <input
                            type="text"
                            placeholder="Product Name" />
                    </div>
                    <div>
                        {/* <AttachMoneyIcon /> */}
                        <input
                            type="number"
                            placeholder="Price" />
                    </div>

                    <div>
                        {/* <DescriptionIcon /> */}
                        <textarea
                            placeholder="Product Description"
                        ></textarea>
                    </div>

                    <div>
                        {/* <StorageIcon /> */}
                        <input
                            type="number"
                            placeholder="Stock" />
                    </div>

                    <div id="createProductFormFile">
                        <input
                            type="file"
                            name="avatar" />
                    </div>

                    {/* <Button
                        id="createProductBtn"
                        type="submit"
                        onClick={() => alert('Product Created Successfully!')}
                    >
                        Create
                    </Button> */}
                </form>
            </div>
        </>
    );
}

export default Product