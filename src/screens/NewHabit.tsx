import { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { BackButton } from "../components/BackButton";
import { Checkbox } from "../components/CheackBox";

const weekDays = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sabado"]

export function NewHabit() {

  const [day, setDay] = useState<number[]>([])

  function toggleWeekDays(weekdayIndex: number) {
    if (day.includes(weekdayIndex)) {
      setDay(prevState => prevState.filter(weekday => weekday !== weekdayIndex))
    } else {
      setDay(prevState => [...prevState, weekdayIndex])
    }
  }

  return (
    <View className="flex-1 bg-background px-4 pt-16">
      <ScrollView showsVerticalScrollIndicator={false}>
        <BackButton />

        <Text className="mt-6 text-white font-extrabold text-3xl">
          Criar Habito
        </Text>

        <Text className="mt-6 text-white font-semibold text-base">
          Qual o seu comprometimento?
        </Text>

        <TextInput
          className="h-12 pl-4 rounded-lg mt-3 bg-zinc-600 text-white focus:border-2 focus:border-green-600"
        />

        <Text className="font-semibold mt-4 mb-3 text-white text-base">
          Qual arecorrência?
        </Text>

        {weekDays.map((weekday, i) => (
          <Checkbox key={weekday}
            title={weekday}
            checked={day.includes(i)}
            onPress={() => toggleWeekDays(i)} />
        ))}
      </ScrollView>
    </View>
  )
}