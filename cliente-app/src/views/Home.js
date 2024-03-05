import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useFetch } from "../hocks/useFetch";
import Table from "react-bootstrap/Table";

import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { format } from "date-fns";
import Header from "../components/Header";
import { Button } from "@rneui/themed";
const Home = () => {
  const [endpoint, setEndpoint] = useState("/ventas");
  const [endpointDeletd, setEndpointDeletd] = useState("");
  const { state, getData, deleteData } = useFetch(endpoint);
  const { data, loading, error } = state;
  const { navigate } = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      console.log(endpoint);
      getData(endpoint);
    }, [endpointDeletd,endpoint])
  );
  const hendlerNavigatePress = () => {
    console.log(`press`);
    navigate("UpLoading");
  };
  const handlerDeledPress = (id) => {
    console.log(`id ${id}`);
    setEndpointDeletd(`/ventas/${id}`)
   
  };
  useEffect(() => {
    if (endpointDeletd) {
      console.log(`endpointDeletd ${endpointDeletd}`);
      deleteData(endpointDeletd);
      getData(endpoint);
    }
  }, [endpointDeletd]);
  return (
    <View>
      <Button title="New sale" onPress={hendlerNavigatePress} />
      {data?.data?.length > 0 &&
        data?.data.map((sale) => (
          <View key={sale.id} style={style.container}>
            <Text style={style.title}>{sale.title}</Text>
            <Text style={style.price}>${sale.price}</Text>
            <Text style={style.date}>
              dia {format(sale.data, "yyyy-MM-dd")} hora{" "}
              {format(sale.data, "H-m")}
            </Text>
            <Button title="deletd" onPress={() => handlerDeledPress(sale.id)} />
          </View>
        ))}
    </View>
  );
};
const style = StyleSheet.create({
  container: { paddingVertical: 12, textAlign: "center", paddingHorizontal: 5 },
  title: { fontSize: 30, fontWeight: "500" },
  price: { fontSize: 20, fontWeight: "300" },
  date: { fontSize: 15 },
});

export default Home;
