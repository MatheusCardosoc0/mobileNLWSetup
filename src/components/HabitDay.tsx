import { Dimensions, TouchableOpacity, TouchableOpacityProps } from "react-native";

const WEEK_DAYS = 7
const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5

export const DAY_MARGIN_BRTWEEN = 8
export const DAY_SIZE = (Dimensions.get('screen').width / WEEK_DAYS) - (SCREEN_HORIZONTAL_PADDING + 5)

interface HabitDayProps extends TouchableOpacityProps {
  view?: boolean
}

export function HabitDay({ view, ...rest }: HabitDayProps) {
  return (
    <TouchableOpacity
      className={`bg-zinc-700 ${view && 'bg-zinc-800'} rounded-lg border-2 m-1 border-zinc-800`}
      style={{ width: DAY_SIZE, height: DAY_SIZE }}
      activeOpacity={0.6}
      {...rest} />
  )
}