import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, Icon } from "@rneui/themed";

function Header() {
  const { canGoBack, goBack } = useNavigation();
  return (
    <View>
      {canGoBack() ? (
        <View>
          <Button
            
            icon={<Icon name="arrow-back" />}
            type="clear"
            onPress={goBack()}
          />
        </View>
      ) : undefined}
    </View>
  );
}

export default Header;
