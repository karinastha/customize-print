import { useState } from "react";
import "./Tshirt.css";

export function Tshirt() {
  const [customTshirt, setCustomTshirt] = useState({ text: "", image: "" });
  const [tshirts, setTshirts] = useState([]);

  const handleSubmit = () => {
    // localStorage.setItem("formValues", JSON.stringify(customTshirt));
    setTshirts([...tshirts, customTshirt]);
  };

  return (
    <div className="main__box">
      <div className="first__box">
        <h3> Welcome to Custom Gallery</h3>
        <form className="form_data" method="post" encType="multipart/form-data">
          <div className="image">
            <input
              type="file"
              name="image"
              onChange={
                (e) =>
                  setCustomTshirt({
                    ...customTshirt,
                    image: URL.createObjectURL(e.target.files[0]),
                  })

                // (e.target.) || setInputData({ ...inputData, name: e.target.[0] })
              }
            />
          </div>
          <div className="text">
            <input
              type="text"
              placeholder="Add text"
              name="fulltext"
              onChange={(e) =>
                setCustomTshirt({ ...customTshirt, text: e.target.value })
              }
            ></input>
          </div>
          <div className="submit_btn">
            <button type="button" onClick={() => handleSubmit()}>
              Add
            </button>
            <div>
              <button type="button" onClick={() => handleSubmit()}>
                Remove
              </button>
            </div>
          </div>

          <table className="tshirt__image">
            <tr>
              <th>Text</th>
              <th>Image</th>
            </tr>

            {tshirts.map((tshirt, id) => {
              return (
                <tr key={id}>
                  <td> {tshirt.text} </td>
                  <td>
                    {" "}
                    <img src={tshirt.image} />{" "}
                  </td>
                </tr>
              );
            })}
          </table>
        </form>
      </div>

      <div className="second__box">
        <img
          className="image1"
          src="https://mms-images-prod.imgix.net/mms/images/catalog/31b9bdaae755e072c7327c8dda1e0930/colors/203900/views/alt/front_medium_extended.png?dpr=1.2&auto=format&nrs=0&w=1000"
          alt="Image not found"
        />

        <img
          className="image2"
          src="https://mms-images-prod.imgix.net/mms/images/catalog/440393ce75989ee82b2baf426cf57ecb/colors/203901/views/alt/back_medium_extended.png?dpr=1.2&auto=format&nrs=0&w=1000"
          alt="Image not found"
        />
      </div>
    </div>
  );
}
