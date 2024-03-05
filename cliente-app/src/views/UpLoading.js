import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button, Input } from "@rneui/themed";
import { useFetch } from "../hocks/useFetch";

const UpLoading = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(null);
  const [endpoing, setEndpoint] = useState("/ventas");
  const { postData } = useFetch(endpoing);
  const handlerSendDataClick = () => {
    const data = {
      title,
      price,
    };
    postData(endpoing, data);
    setPrice(null)
    setTitle("")
  };
  return (
    <View>
      <View>
        <Input
          placeholder="Title"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <Input
          placeholder="Price"
          value={price}
          onChangeText={(text) => setPrice(text)}
        />
        <Button title="send" onPress={handlerSendDataClick} />
      </View>
    </View>
  );
};
export default UpLoading;
