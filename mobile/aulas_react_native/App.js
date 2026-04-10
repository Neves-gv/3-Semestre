import { View, ScrollView } from "react-native";
import Aula01 from "./src/components/Aula01";
import Aula02 from "./src/components/Aula02";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView>
        <Aula01 />
        <Aula02 />
      </ScrollView>
    </View>
  );
}