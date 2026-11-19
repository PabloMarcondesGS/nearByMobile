import React from "react"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native"
import { useLocalSearchParams, router } from "expo-router"
import { colors, fontFamily } from "@/styles/theme"
import { routeStepsDetailsMap } from "@/data/route-steps-details"
import {
  IconArrowLeft,
  IconMapPin,
  IconPhone,
  IconTicket,
  IconQrcode,
} from "@tabler/icons-react-native"

export default function RouteStepScreen() {
  const params = useLocalSearchParams<{ id: string }>()
  const stepId = params.id || "1"
  const stepData = routeStepsDetailsMap[stepId] || routeStepsDetailsMap["1"]

  const IconComponent = stepData.icon

  return (
    <View style={s.container}>
      <StatusBar barStyle="dark-content" />

      {/* Floating Back Button */}
      <TouchableOpacity
        style={s.backButton}
        activeOpacity={0.8}
        onPress={() => router.back()}
      >
        <IconArrowLeft size={22} color="#FFFFFF" />
      </TouchableOpacity>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={s.scrollContent}
      >
        {/* Top Illustration Area */}
        <View style={s.illustrationContainer}>
          <IconComponent size={170} color="#000000" />
        </View>

        {/* Card Body */}
        <View style={s.cardBody}>
          <Text style={s.title}>{stepData.title}</Text>
          <Text style={s.description}>{stepData.description}</Text>

          {/* Download Notes Banner */}
          <View style={s.downloadBanner}>
            <IconTicket size={20} color={colors.green.dark} />
            <Text style={s.downloadText}>
              {stepData.notesAvailable} {stepData.notesAvailable === 1 ? "nota disponível" : "notas disponíveis"} para download
            </Text>
          </View>

          {/* Status Section */}
          <View style={s.section}>
            <Text style={s.sectionHeader}>Status</Text>
            <View style={s.bulletItem}>
              <Text style={s.bulletPoint}>•</Text>
              <Text style={s.bulletText}>{stepData.status.phase}</Text>
            </View>
            <View style={s.bulletItem}>
              <Text style={s.bulletPoint}>•</Text>
              <Text style={s.bulletText}>{stepData.status.departureDate}</Text>
            </View>
          </View>

          <View style={s.divider} />

          {/* Informações Section */}
          <View style={s.section}>
            <Text style={s.sectionHeader}>Informações</Text>

            <View style={s.infoItem}>
              <IconMapPin size={18} color={colors.gray[400]} />
              <Text style={s.infoText}>{stepData.info.address}</Text>
            </View>

            <View style={s.infoItem}>
              <IconPhone size={18} color={colors.gray[400]} />
              <Text style={s.infoText}>{stepData.info.phone}</Text>
            </View>
          </View>

          <View style={s.divider} />

          {/* Detalhes Section */}
          <View style={s.section}>
            <Text style={s.sectionHeader}>Detalhes</Text>
            {stepData.details.map((detail, index) => (
              <View key={index} style={s.detailItem}>
                <IconTicket size={18} color={colors.green.base} />
                <Text style={s.detailText}>
                  {detail.label} {detail.date}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Fixed Bottom Action Bar */}
      <View style={s.bottomBar}>
        <TouchableOpacity style={s.pinSquareButton} activeOpacity={0.8}>
          <IconMapPin size={24} color="#FFFFFF" />
        </TouchableOpacity>

        <TouchableOpacity style={s.qrButton} activeOpacity={0.8}>
          <IconQrcode size={24} color="#FFFFFF" />
          <Text style={s.qrButtonText}>Ler QR Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  backButton: {
    position: "absolute",
    top: 52,
    left: 20,
    zIndex: 20,
    width: 44,
    height: 44,
    borderRadius: 8,
    backgroundColor: colors.green.base,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  scrollContent: {
    paddingBottom: 120,
  },
  illustrationContainer: {
    width: "100%",
    height: 240,
    backgroundColor: "#F9FAFB",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
  },
  cardBody: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    marginTop: -24,
    paddingHorizontal: 24,
    paddingTop: 28,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 22,
    fontFamily: fontFamily.bold,
    color: colors.gray[600],
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    lineHeight: 20,
    marginBottom: 16,
  },
  downloadBanner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#7FD49E",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 24,
  },
  downloadText: {
    fontSize: 14,
    fontFamily: fontFamily.medium,
    color: colors.gray[600],
  },
  section: {
    gap: 10,
  },
  sectionHeader: {
    fontSize: 16,
    fontFamily: fontFamily.bold,
    color: colors.gray[600],
    marginBottom: 2,
  },
  bulletItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },
  bulletPoint: {
    fontSize: 16,
    color: colors.gray[500],
    lineHeight: 20,
  },
  bulletText: {
    flex: 1,
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    lineHeight: 20,
  },
  divider: {
    height: 1,
    backgroundColor: colors.gray[200],
    marginVertical: 18,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  infoText: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  detailText: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 28,
    flexDirection: "row",
    gap: 12,
    borderTopWidth: 1,
    borderTopColor: colors.gray[200],
  },
  pinSquareButton: {
    width: 56,
    height: 56,
    borderRadius: 10,
    backgroundColor: colors.green.base,
    justifyContent: "center",
    alignItems: "center",
  },
  qrButton: {
    flex: 1,
    height: 56,
    borderRadius: 10,
    backgroundColor: colors.green.base,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  qrButtonText: {
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
    color: "#FFFFFF",
  },
})
