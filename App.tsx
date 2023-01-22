import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold
} from '@expo-google-fonts/inter'
import { Loading } from './src/components/Loading';
import { Home } from './src/screens/Home';
import { HabitDay } from './src/components/HabitDay';
import { Routes } from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  })

  if(!fontsLoaded){
    return  <Loading />
  }

  return (
    <>
      <Routes />
      <StatusBar style="light"
      backgroundColor='transparent' translucent  />
    </>
  );
}