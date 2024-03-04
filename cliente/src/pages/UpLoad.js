import React from "react";
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useFetch } from "../hoock/useFetch";
import NavBar from "../componets/NavBar";
const UpLoad = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(null);
  const [endpoing,setEndpoint]=useState("/ventas")
  const {postData} =useFetch(endpoing)
  const handlerSendDataClick = (e) => {
    e.preventDefault();
    const data = {
      title,
      price
    }
    postData(endpoing,data)
  };
  return (
    <div>
      <NavBar/>
      <form>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="title"
            aria-label="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="price"
            aria-label="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <Button variant="info" type="submit" onClick={handlerSendDataClick}>
          Send Data
        </Button>
      </form>
    </div>
  );
};

export default UpLoad;
