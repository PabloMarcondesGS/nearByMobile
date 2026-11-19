import { View, Text } from "react-native"

import { s } from "./styles"
import { colors } from "@/styles/theme"
import { Step } from "../step"
import { IconMapPin, IconQrcode, IconTicket} from "@tabler/icons-react-native"

export function Steps() {
    return (
        <View style={s.container}>
            <Text style={s.title}>Veja como funciona:</Text>

            <Step icon={IconMapPin} title="Encontre estabelecimentos" description="Veja locais perto de você que são parceiros SecurePack"/>
            <Step icon={IconQrcode} title="Ative a localização" description="Escaneie o código do produto para rastrear"/>
            <Step icon={IconTicket} title="Comprovante direto pelo app" description="Faça o download de documentos como a nota fiscal"/>

        </View>
    )
}