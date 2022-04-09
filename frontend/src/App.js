import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";
import CardImage from "./components/ImageCard";
import Welcome from "./components/Welcome";
import { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_API;

function App() {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(word);

    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages([data, ...images]);
        console.log(images);
      })
      .catch((err) => console.log(err));

    setWord("");
  };

  const onClickHandle = (id) => {
    setImages(images.filter((image) => (image.id !== id) ))
  }

  return (
    <div className="App">
      <Header title="Images Gallery" />
      <Search onSubmit={onHandleSubmit} word={word} setWord={setWord} />
      { images.length > 0 ? 
      <Container className="mt-4">
        <Row xs={1} md={2} lg={4}>
          {images.map((image, i) => 
          <Col key={i} className="p-2">
              <CardImage  imgArr={image} clickHandler = {onClickHandle}/>
          </Col>
          )}
        </Row>
      </Container>: <Welcome />}
    </div>
  );
}

export default App;
