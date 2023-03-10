import React from 'react'
import Navbar from '../Navbar/Navbar';

const Order = () => {
  return (
    <>
     <Navbar/>
    <h1 class="text-center">Order List</h1>
    <table class="table">
      
        <thead>
            <tr>
            <th scope="col">Order_id</th>
            <th scope="col">Customer_name</th>
            <th scope="col">Email</th>
            <th scope="col">Product Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
            <th scope="col">Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Samiara Jha</td>
            <td>sam@gmail.com</td>
            <td>Black Clover Anime Graphic T-shirt</td>
            <td>1</td>
            <td>$1500</td>
            <td><button className="btn btn-danger">Processing</button></td>
            </tr>

            <tr>
            <th scope="row">2</th>
            <td>Dhiraj Nepali</td>
            <td>dhm@gmail.com</td>
            <td>Black Clover Anime Graphic T-shirt</td>
            <td>1</td>
            <td>$1500</td>
            <td><button className="btn btn-danger">Processing</button></td>
            </tr>
            {/* <tr>
            <th scope="row">2</th>
            <td></td>
            <td></td>
            <td></td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
            </tr> */}
        </tbody>
    </table>
    </>
    
  )
}

export default Order