import { useEffect, useState } from "react"
import { View, Text, Alert } from "react-native"
import { api } from "@/services/api"
import { Categories, CategoriesProps } from "@/components/categories"
import { RouteFilters, RouteFilterType } from "@/components/route-filters"
import { PlaceProps } from "@/components/place"
import { Places } from "@/components/places"
import { MapView, Callout, Marker } from "@/components/map"
import * as Location from "expo-location"
import { fontFamily, colors } from "@/styles/theme"
import { router } from "expo-router"

type MarketsProps = PlaceProps & {
  latitude: number
  longitude: number
}

// Pontos de referência para cada filtro
const REFERENCE_POINTS = {
  localizacao: {
    latitude: -23.561187,
    longitude: -46.656451,
    title: "Localização Atual (Av. Paulista)",
  },
  destino: {
    latitude: -23.548943,
    longitude: -46.638818,
    title: "Destino (Centro de SP)",
  },
  origem: {
    latitude: -23.587416,
    longitude: -46.657634,
    title: "Origem (Parque Ibirapuera)",
  },
}

export default function Home() {
  const [categories, setcategories] = useState<CategoriesProps>([])
  const [category, setCategory] = useState("")
  const [markets, setMarkets] = useState<MarketsProps[]>([])
  const [selectedFilter, setSelectedFilter] = useState<RouteFilterType>("localizacao")

  const currentPoint = REFERENCE_POINTS[selectedFilter]

  async function fetchCategories() {
    try {
      const { data } = await api.get("/categories")
      setcategories(data)
      setCategory(data[0].id)
    } catch (error) {
      console.log(error)
      Alert.alert("Categorias, não foi possivel carregar as categorias")
    }
  }

  async function fetchMarkets() {
    try {
      if (!category) {
        return
      }
      const { data } = await api.get("/markets/category/" + category)
      setMarkets(data)
    } catch (error) {
      console.log(error)
      Alert.alert("Locais, não foi possivel carregar os Locais")
    }
  }

  async function getCurrentLocation() {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync()
      if (granted) {
        await Location.getCurrentPositionAsync()
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCurrentLocation()
    fetchCategories()
  }, [])

  useEffect(() => {
    fetchMarkets()
  }, [category])

  return (
    <View style={{ flex: 1 }}>
      <RouteFilters selected={selectedFilter} onSelect={setSelectedFilter} />
      <Categories data={categories} onSelect={setCategory} selected={category} />

      <MapView
        key={selectedFilter}
        style={{ flex: 1 }}
        region={{
          latitude: currentPoint.latitude,
          longitude: currentPoint.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.015,
        }}
        initialRegion={{
          latitude: currentPoint.latitude,
          longitude: currentPoint.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.015,
        }}
      >
        <Marker
          key={selectedFilter}
          identifier={currentPoint.title}
          coordinate={{
            latitude: currentPoint.latitude,
            longitude: currentPoint.longitude,
          }}
          image={require("@/assets/location.png")}
        />

        {markets.map((item) => (
          <Marker
            key={item.id}
            identifier={item.name}
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude,
            }}
            image={require("@/assets/pin.png")}
          >
            <Callout onPress={() => router.navigate(`/market/${item.id}`)}>
              <View>
                <Text
                  style={{
                    fontSize: 14,
                    color: colors.gray[600],
                    fontFamily: fontFamily.medium,
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: colors.gray[600],
                    fontFamily: fontFamily.regular,
                  }}
                >
                  {item.address}
                </Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <Places data={markets} />
    </View>
  )
}
