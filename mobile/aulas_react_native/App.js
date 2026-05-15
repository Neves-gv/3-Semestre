// import { View, ScrollView } from "react-native";
// import Aula01 from "./src/components/Aula01";
// import Aula02 from "./src/components/Aula02";
// import Aula03 from "./src/components/Aula03";

// export default function App() {
//   return (
//     <View style={{ flex: 1, backgroundColor: '#fff' }}>
//       <ScrollView>
//         <Aula01 />
//         <Aula02 />
//         <Aula03 />
//       </ScrollView>
//     </View>
//   );
// }

import NavStack from "./src/pages/NavStack";
import NavDrawer from "./src/pages/NavDrawer";
import NavTopTabs from "./src/pages/NavTopTabs";
import NavBottonTabs from "./src/pages/NavBottonTabs";

export default function App() {
  return (
    <NavStack />
    // <NavDrawer />
    // <NavTopTabs />
    // <NavBottonTabs />
  );
}