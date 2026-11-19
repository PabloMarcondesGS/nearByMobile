import { Image, Text, View } from "react-native"

import { s } from "./styles"

export function Welcome() {
    return (
        <View>
            <Image source={require("@/assets/logo.png")} style={s.logo} />

            <Text style={s.title}>Boas vindas ao {"\n"}Secure Pack!</Text>
            <Text style={s.subtitle}>Mais do que localização: confiança em cada etapa! {"\n"}Saiba onde está, de onde veio e para onde vai o seu produto, tudo em um só app.</Text>
        </View>
    )
}