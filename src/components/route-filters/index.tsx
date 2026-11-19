import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { s } from "./styles"

export type RouteFilterType = "localizacao" | "destino" | "origem"

type Props = {
  selected: RouteFilterType
  onSelect: (filter: RouteFilterType) => void
}

export function RouteFilters({ selected, onSelect }: Props) {
  return (
    <View style={s.container}>
      <TouchableOpacity
        style={[s.button, selected === "localizacao" && s.buttonActive]}
        activeOpacity={0.8}
        onPress={() => onSelect("localizacao")}
      >
        <Text
          style={[
            s.buttonText,
            selected === "localizacao" && s.buttonTextActive,
          ]}
        >
          Localização Atual
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[s.button, selected === "destino" && s.buttonActive]}
        activeOpacity={0.8}
        onPress={() => onSelect("destino")}
      >
        <Text
          style={[
            s.buttonText,
            selected === "destino" && s.buttonTextActive,
          ]}
        >
          Destino
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[s.button, selected === "origem" && s.buttonActive]}
        activeOpacity={0.8}
        onPress={() => onSelect("origem")}
      >
        <Text
          style={[
            s.buttonText,
            selected === "origem" && s.buttonTextActive,
          ]}
        >
          Origem
        </Text>
      </TouchableOpacity>
    </View>
  )
}
