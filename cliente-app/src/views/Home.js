import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useFetch } from "../hocks/useFetch";
import Table from "react-bootstrap/Table";

import Button from "react-bootstrap/esm/Button";
import { format } from "date-fns";
const Home = () => {
  const [endpoint, setEndpoint] = useState("/ventas");
  const [endpointDeletd, setEndpointDeletd] = useState("");
  const { state, getData, deleteData } = useFetch(endpoint);
  const { data, loading, error } = state;
  console.log(data);

  useEffect(() => {
    console.log(endpoint);
    getData(endpoint);
  }, []);

  return (
    <View>
      {data?.data?.length > 0 &&
        data?.data.map((sale) => (
          <View key={sale.id}>
            <Text>{sale.title}</Text>
            <Text>{sale.price}</Text>
            <Text>{format(sale.data, "yyyy-MM-dd")}</Text>
            <Text>{format(sale.data, "H-m")}</Text>
          </View>
        ))}
    </View>
  );
};

export default Home;
