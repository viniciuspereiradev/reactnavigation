//import 'react-native-gesture-handler';
import React from "react"
import { SafeAreaView, Text } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
//import Stack from "./Stack"
import Tab from "./Tab"
//import Drawer from "./Drawer"

export default props => (
    <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
            {/*<Drawer />*/}
            <Tab />
            {/*<Stack/>*/}
        </NavigationContainer>
    </SafeAreaView>
)