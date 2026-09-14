import { Stack } from "expo-router"
import { colors } from "@/styles/theme"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import {
    useFonts,
    Rubik_600SemiBold,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold
} from "@expo-google-fonts/rubik"

import { LogBox } from "react-native"
import { Loading } from "@/components/loading"

LogBox.ignoreLogs(["findDOMNode is deprecated"])

if (typeof window !== "undefined") {
  const originalWarn = console.warn
  const originalError = console.error

  console.warn = (...args: any[]) => {
    if (typeof args[0] === "string" && args[0].includes("findDOMNode")) return
    originalWarn(...args)
  }

  console.error = (...args: any[]) => {
    if (typeof args[0] === "string" && args[0].includes("findDOMNode")) return
    originalError(...args)
  }
}

export default function Layout() {
    const [fontsLoaded] = useFonts({
        Rubik_600SemiBold,
        Rubik_400Regular,
        Rubik_500Medium,
        Rubik_700Bold
    })

    if (!fontsLoaded){
        return <Loading/>
    }

    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <Stack
                screenOptions={{
                    headerShown: false,
                    contentStyle: { backgroundColor: colors.gray[100]},
                }}
            />
        </GestureHandlerRootView>
    )
}