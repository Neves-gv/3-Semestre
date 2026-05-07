import { View, Text, FlatList } from "react-native";
import Hr from "./Hr";

const Aula03_EX1 = () => {
    const turmas = [
        { id: 1, Nome: 'Vitor', Materia: 'Matematica', Nota: 9.5, Falta: 2 },
        { id: 2, Nome: 'Gustavo', Materia: 'Fisica', Nota: 6.5, Falta: 1 },
        { id: 3, Nome: 'Ryan', Materia: 'Portuguesa', Nota: 8.5, Falta: 6 },
        { id: 4, Nome: 'Godi', Materia: 'Quimica', Nota: 2, Falta: 10 }
    ]
    const exibirAlunoLista = ({ item }) => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ flex: 1 }}> Pos: {item.id}</Text>
                <Text style={{ flex: 1 }}> Nome: {item.Nome}</Text>
                <Text style={{ flex: 1 }}> Matéria: {item.Materia}</Text>
                <Text style={{ flex: 1 }}> Nota: {item.Nota}</Text>
                <Text style={{ flex: 1 }}> Falta: {item.Falta}</Text>
            </View>
        )

    }
    return (
        <View>
            {/*  Criando uma lista com a FlatList */}
            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Lista com FlatList</Text>
            <FlatList
                data={turmas} // passando com os dados a serem exibidos
                renderItem={exibirAlunoLista} //passar a função exibir os itens
                keyExtractor={item => item.id.toString()} //passar propriedade para extrir as chaves
            />
        </View>
    )
}
export default Aula03_EX1; 