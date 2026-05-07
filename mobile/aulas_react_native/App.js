import { View, ScrollView } from "react-native";
import Aula01 from "./src/components/Aula01";
import Aula02 from "./src/components/Aula02";
import Aula03 from "./src/components/Aula03";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView>
        <Aula01 />
        <Aula02 />
        <Aula03 />
      </ScrollView>
    </View>
  );
}