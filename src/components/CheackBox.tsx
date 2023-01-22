import { TouchableOpacity, View, TouchableOpacityProps } from "react-native";
import { Feather } from '@expo/vector-icons'
import { Text } from "react-native";

interface Props extends TouchableOpacityProps {
  checked?: boolean
  title: string
}

export function Checkbox({ checked, title, ...rest }: Props) {
  return (
    <TouchableOpacity className="flex flex-row items-center mb-2"
    {...rest}>

      {checked ?
        <View className="h-8 w-8 bg-green-500 rounded-lg items-center justify-center">
          <Feather name="check"
            size={20}
            color={"white"} />
        </View> :
        <View className="h-8 w-8 bg-zinc-700 rounded-lg" />}

        

        <Text className="text-white text-base ml-3">
          {title}
        </Text>
    </TouchableOpacity>
  )
}