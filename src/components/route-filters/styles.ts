import { StyleSheet } from "react-native"
import { colors, fontFamily } from "@/styles/theme"

export const s = StyleSheet.create({
  container: {
    position: "absolute",
    top: 56,
    left: 0,
    right: 0,
    zIndex: 10,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  button: {
    height: 38,
    paddingHorizontal: 14,
    borderRadius: 8,
    backgroundColor: colors.gray[100],
    borderWidth: 1,
    borderColor: colors.gray[300],
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonActive: {
    backgroundColor: colors.green.base,
    borderColor: colors.green.base,
  },
  buttonText: {
    fontSize: 13,
    fontFamily: fontFamily.medium,
    color: colors.gray[500],
  },
  buttonTextActive: {
    color: colors.gray[100],
  },
})
