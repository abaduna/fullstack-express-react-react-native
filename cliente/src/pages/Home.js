import React, { useEffect, useState } from "react";
import { useFetch } from "../hoock/useFetch";
import Table from "react-bootstrap/Table";
import NavBar from "../componets/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/esm/Button";
import { format } from "date-fns";
function Home() {
  const [endpoint, setEndpoint] = useState("/ventas");
  const [endpointDeletd, setEndpointDeletd] = useState("");
  const { state, getData, deleteData } = useFetch(endpoint);
  const { data, loading, error } = state;
  console.log(data.data);

  useEffect(() => {
    getData(endpoint);
  }, []);
  const handlerDeletdClick = async(id) => {
    console.log(`id ${id}`);
    setEndpointDeletd(`/ventas/${id}`);
    
  };
  useEffect(() => {
    if (endpointDeletd) {
      console.log(`endpointDeletd ${endpointDeletd}`);
      deleteData(endpointDeletd);
      getData(endpoint);
    }
  }, [endpointDeletd]);
  return (
    <>
      <NavBar />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>title</th>
            <th>precio</th>
            <th>fecha</th>
            <th>hora</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.length > 0 &&
            data?.data.map((sale) => (
              <tr key={sale.id}>
                <td>{sale.title}</td>
                <td>{sale.price}</td>
                <td>{format(sale.data, "yyyy-MM-dd")}</td>
                <td>{format(sale.data, "H-m")}</td>
                <td>
                  <Button onClick={() => handlerDeletdClick(sale.id)}>
                    Borrar
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
}

export default Home;
