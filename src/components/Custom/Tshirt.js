import { useState } from "react";
import "./Tshirt.css";

export function Tshirt() {
    const data = { text: "", image: "" };
    const [inputData, setInputData] = useState(data);
    const [value, setValue] = useState([]);

    const handleSubmit = () => {
        setValue([...value, inputData]);
        localStorage.setItem('formValues', JSON.stringify(inputData));
    };

    console.log(value);
    return (
        <div className='main__box'>
            <div className="first__box">
                <h3> Welcome to Custom Gallery</h3>
                <form className='form_data' method='post' enctype='multipart/form-data'>
                    <div className="image">
                        <input type="file"
                            name="image"
                            onChange={(e) =>
                                console.log(e.target.files) || setInputData({ ...inputData, name: e.target.files[0] })

                            }
                        />
                    </div>
                    <div className="text">
                        <input
                            type="text"
                            placeholder="Add text"
                            name="fulltext"
                            onChange={(e) =>
                                setInputData({ ...inputData, name: e.target.value })
                            }
                        ></input>
                    </div>
                    <div className="submit_btn">
                        <button type="button" onClick={() => handleSubmit()}>
                            Submit
                        </button>
                    </div>

                    <div className='tshirt__image'>
                        {
                            value.map(
                                (info, id) => {
                                    return (
                                        <tr key={id}>
                                            <td> {info.fulltext} </td>
                                            <td> {info.image} </td>


                                        </tr>
                                    )
                                }
                            )
                        }
                    </div>
                </form>
            </div>


            <div className="second__box">
                <img className="image1" src="https://mms-images-prod.imgix.net/mms/images/catalog/31b9bdaae755e072c7327c8dda1e0930/colors/203900/views/alt/front_medium_extended.png?dpr=1.2&auto=format&nrs=0&w=1000" alt="Image not found" />

                <img className="image2" src="https://mms-images-prod.imgix.net/mms/images/catalog/440393ce75989ee82b2baf426cf57ecb/colors/203901/views/alt/back_medium_extended.png?dpr=1.2&auto=format&nrs=0&w=1000" alt="Image not found" />
            </div>
        </div>
    )
}

