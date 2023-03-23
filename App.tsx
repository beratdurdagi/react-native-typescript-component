import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Block, Button, Text } from "./components";
import { ThemeProvider } from "./hooks/useTheme";
import Login from "./screens/Login";
import { useFonts } from 'expo-font';
import AppLoading from "expo-app-loading";







export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
}
  return (
    <>
    <ThemeProvider>
      <StatusBar hidden style="auto"/>
    
    <Login/>
    </ThemeProvider> 
    
   
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
function useCallback(arg0: () => Promise<void>, arg1: boolean[]) {
  throw new Error("Function not implemented.");
}

