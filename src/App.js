import { useEffect, useRef, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const baseURL = process.env.REACT_APP_API_URL;

  const [apiData, setData] = useState([]);

  const nameRef = useRef();
  const imageRef = useRef();
  const priceRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const ratingRef = useRef();
  const reviewRef = useRef();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(baseURL);
      setData(JSON.stringify(response.data,undefined,4));
    }
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
   

    await axios
      .post(baseURL, {
        name: nameRef.current.value,
        image: imageRef.current.value,
        price: priceRef.current.value,
        category: categoryRef.current.value,
        description: descriptionRef.current.value,
        ratings: ratingRef.current.value,
        reviews: reviewRef.current.value,
      })
      .then((response) => {
        setData(response.data);
      });

    };
    console.log(apiData);

  return (
    <>
      <div className="App">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" id="name" placeholder="name" ref={nameRef} />
          <br />
          <input type="text" id="image" placeholder="image" ref={imageRef} />
          <br />
          <input type="number" id="price" placeholder="price" ref={priceRef} />
          <br />
          <input
            type="text"
            id="category"
            placeholder="category"
            ref={categoryRef}
          />
          <br />
          <input
            type="text"
            id="description"
            placeholder="description"
            ref={descriptionRef}
          />
          <br />
          <input
            type="number"
            id="rating"
            step="0.1"
            placeholder="rating"
            ref={ratingRef}
          />
          <br />
          <input
            type="number"
            id="review"
            placeholder="review"
            ref={reviewRef}
          />

          <br />
          <input type="submit" id="submit" value="submit" />
          <br />
        </form>
      </div>
      <br />
      <>
      <pre>{apiData}</pre> 
       
      </>
    </>

  );
}

export default App;
