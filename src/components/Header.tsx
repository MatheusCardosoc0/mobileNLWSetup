import { Text, TouchableOpacity, View } from "react-native";
import Logo from '../assets/logo.svg'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";

export function Header() {

  const {navigate} = useNavigation()

  return (
    <View className="w-full flex-row items-center justify-between">
      <Logo />

      <TouchableOpacity activeOpacity={0.7}
      className="flex-row h-11 px-4 border border-violet-500 rounded-lg items-center"
      onPress={() => navigate("newHabit")} >
        <Feather name="plus"
          color={"#7f00ff"}
          size={20}/>

        <Text className="text-white ml-3 font-semibold text-base">
          Novo
        </Text>
      </TouchableOpacity>
    </View>
  )
}