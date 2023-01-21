import { ScrollView, Text, View } from "react-native";
import { DAY_SIZE, HabitDay } from "../components/HabitDay";
import { Header } from "../components/Header";
import { generateRangeDatesFromYearStart } from "../utils/generate-range-between-dates";

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
const minimunSumaryDates = 18 * 7
const amountDaysToFill = minimunSumaryDates - generateRangeDatesFromYearStart().length

export function Home() {
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />

      <View className="flex-row mt-4">
        {weekDays.map((weekday, i) => (
          <Text key={i}
            className="text-zinc-400 font-bold text-center text-xl mx-1"
            style={{ width: DAY_SIZE }}>
            {weekday}
          </Text>
        ))}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}}
      >
        <View className="flex-row flex-wrap">
          {
            generateRangeDatesFromYearStart().map(date => (
              <HabitDay key={date.toISOString()} />
            ))
          }

          {amountDaysToFill > 0 && Array.from({ length: amountDaysToFill })
            .map((a, i) => (
              <HabitDay key={i} view={true} />
            ))}
        </View>

      </ScrollView>
    </View>
  )
}