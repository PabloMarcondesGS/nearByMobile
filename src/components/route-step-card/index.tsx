import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { colors, fontFamily } from "@/styles/theme"
import IconTicket from "@tabler/icons-react-native/dist/esm/icons/IconTicket.mjs"

export type RouteStepProps = {
  id: string
  title: string
  description: string
  notes: number
  icon: React.ComponentType<{ size?: number; color?: string }>
}

type Props = {
  data: RouteStepProps
  onPress?: () => void
}

export function RouteStepCard({ data, onPress }: Props) {
  const IconComponent = data.icon

  return (
    <TouchableOpacity
      style={s.container}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View style={s.iconWrapper}>
        <IconComponent size={64} color="#000000" />
      </View>
      <View style={s.content}>
        <Text style={s.title}>{data.title}</Text>
        <Text style={s.description} numberOfLines={2}>
          {data.description}
        </Text>
        <View style={s.footer}>
          <IconTicket size={16} color={colors.green.base} />
          <Text style={s.notesText}>
            {data.notes} {data.notes === 1 ? "nota disponibilizada" : "notas disponibilizadas"}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const s = StyleSheet.create({
  container: {
    padding: 14,
    borderWidth: 1,
    borderColor: colors.gray[200],
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    gap: 14,
    alignItems: "center",
  },
  iconWrapper: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    gap: 4,
  },
  title: {
    fontSize: 15,
    fontFamily: fontFamily.bold,
    color: colors.gray[600],
  },
  description: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    lineHeight: 16,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 6,
  },
  notesText: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    color: colors.gray[400],
  },
})
