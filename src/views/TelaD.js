import React from "react"
import { Button, View } from "react-native"
import TextoCentral from "../components/TextoCentral"
//import {}


export default props => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                <Button title="Abrir" onPress={() => {
                    props.navigation.openDrawer()
                }} />

            </View>
            <View style={{ flex: 1 }}>
                <TextoCentral corTexto="#000" corFundo="#33fa72">
                    Tela D
                </TextoCentral>
            </View>
        </View>


    )
}