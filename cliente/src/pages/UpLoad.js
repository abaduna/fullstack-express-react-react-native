import React from "react";
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useFetch } from "../hoock/useFetch";
import NavBar from "../componets/NavBar";
import Alert from 'react-bootstrap/Alert';
const UpLoad = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(null);
  const [endpoing,setEndpoint]=useState("/ventas")
  const [successfully,setSuccessfully] = useState(false)
  const [errorSpam,setErrorSpam] = useState(false)
  const {state,postData} =useFetch(endpoing)
  const handlerSendDataClick = (e) => {
    e.preventDefault();
    const data = {
      title,
      price
    }
    postData(endpoing,data)
    setTitle("")
    setPrice("")
      
    setSuccessfully(true)
    setTimeout(() => {
      setSuccessfully(false)
    }, 1200);
  };
  if (state.error) {
    setErrorSpam(true)
    setTimeout(() => {
      setErrorSpam(false)
    }, 500);
  }
  return (
    <div>
      <NavBar/>
      {successfully &&<Alert  variant="success">
      Successful data 
        </Alert> }
        {setErrorSpam &&<Alert  variant="danger">
      error
        </Alert> }
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
