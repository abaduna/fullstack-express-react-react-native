import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from "../views/Home"
import UpLoading from "../views/UpLoading"
const Stack = createNativeStackNavigator()
const routerScreanDefultOpion = {
    headerStyle :{
        backgroundColor: "rgba(7,29,93,255)"
    },
    headerTitleStyle:{
        color:"white"
    }
}
const Routes =()=>(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="UpLoading" component={UpLoading} />
        </Stack.Navigator>
    </NavigationContainer>
)
    
export default Routes