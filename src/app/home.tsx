import { useEffect, useState } from "react"
import { View, Text, Alert} from "react-native"
import { api } from "@/services/api"
import { Categories, CategoriesProps } from "@/components/categories"
import { PlaceProps } from "@/components/place"
import { Places } from "@/components/places"

type MarketsProps = PlaceProps & {}

export default function Home(){
    const [categories, setcategories] = useState<CategoriesProps>([])
    const [ category, setCategory] = useState("")
    const [ markets, setMarkets] = useState<MarketsProps[]>([])

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
            if(!category){
                return
            }
            const { data } = await api.get("/markets/category/" + category)
            setMarkets(data)
            // console.log(data)
        } catch (error) {
            console.log(error)
            Alert.alert("Locais, não foi possivel carregar os Locais")
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    useEffect(() => {
        fetchMarkets()
    }, [category])

    return (
        <View style={{ flex: 1 }}>
            <Categories data={categories} onSelect={setCategory} selected={category}/>
            <Places data={markets}/>
        </View>
    )
}