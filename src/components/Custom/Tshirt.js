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
                    <div className="header">
                        <input type="file"
                            name="image"
                            onChange={(e) =>
                                console.log(e.target.files) || setInputData({ ...inputData, name: e.target.files[0] })

                            }
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Add text"
                            name="fulltext"
                            onChange={(e) =>
                                setInputData({ ...inputData, name: e.target.value })
                            }
                        ></input>
                    </div>
                    <div>
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

        </div>
    )
}

