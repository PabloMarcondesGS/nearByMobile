import { View, Text, Alert } from "react-native"
import { router, useLocalSearchParams } from "expo-router"

export default function Market(){
    const params = useLocalSearchParams<{ id: string }>()

    async function fetchMarket() {
        try {
            
        } catch (error) {
            console.log(error)
            Alert.alert("Erro", "Não foi possivel carregar os dados" , [
                {text: "OK", onPress: () => router.back()}
            ])
        }
    }

    return <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text>{params.id}</Text>
    </View>
}