import React, { useRef } from "react"
import { useWindowDimensions, Text, StyleSheet } from "react-native"
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet"
import { colors, fontFamily } from "@/styles/theme"
import { router } from "expo-router"
import {
  WarehouseTruckIcon,
  RouteDisplacementIcon,
  LogisticHubIcon,
  HandTruckIcon,
  BuildingOriginIcon,
} from "@/components/route-icons"
import { RouteStepCard, RouteStepProps } from "@/components/route-step-card"

export const routeStepsData: RouteStepProps[] = [
  {
    id: "1",
    title: "Centro de distribuição SP",
    description: "Seu pacote será triado e direcionado ao entregador respo...",
    notes: 3,
    icon: WarehouseTruckIcon,
  },
  {
    id: "2",
    title: "Deslocamento",
    description: "O item será levado em caminhão ou avião até o centro logístico da...",
    notes: 0,
    icon: RouteDisplacementIcon,
  },
  {
    id: "3",
    title: "Centro logístico",
    description: "Um hub (centro de triagem) onde o pacote é separado conforme a re...",
    notes: 1,
    icon: LogisticHubIcon,
  },
  {
    id: "4",
    title: "Coleta pela transportadora",
    description: "O pacote é retirado no centro de distribuição",
    notes: 2,
    icon: HandTruckIcon,
  },
  {
    id: "5",
    title: "Empresa X (Origem)",
    description: "O sistema verifica o estoque, gera a nota fiscal e aciona a transport...",
    notes: 2,
    icon: BuildingOriginIcon,
  },
]

type Props = {
  data?: any[]
}

export function Places({}: Props) {
  const dimensions = useWindowDimensions()
  const bottomSheetRef = useRef<BottomSheet>(null)

  const snapPoints = {
    min: 278,
    max: dimensions.height - 200,
  }

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={[snapPoints.min, snapPoints.max]}
      handleIndicatorStyle={s.indicator}
      backgroundStyle={s.container}
      enableOverDrag={false}
    >
      <BottomSheetFlatList
        data={routeStepsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RouteStepCard
            data={item}
            onPress={() => router.navigate(`/route-step/${item.id}`)}
          />
        )}
        contentContainerStyle={s.content}
        ListHeaderComponent={() => (
          <Text style={s.title}>Confira o percurso completo do produto</Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </BottomSheet>
  )
}

const s = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[100],
    borderTopStartRadius: 24,
    borderTopEndRadius: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
  },
  indicator: {
    width: 80,
    height: 4,
    backgroundColor: colors.gray[300],
  },
  title: {
    color: colors.gray[600],
    fontSize: 16,
    fontFamily: fontFamily.regular,
    textAlign: "center",
    marginTop: 12,
    marginBottom: 20,
    paddingHorizontal: 8,
  },
  content: {
    gap: 12,
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
})
