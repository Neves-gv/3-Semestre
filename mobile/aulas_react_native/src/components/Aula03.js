import { View, Text, FlatList } from "react-native";
import Hr from "./Hr";
import Aula03_EX1 from "./Aula03_EX1";
import Aula03_EX2 from "./Aula03_EX2";

const Aula03 = () => {
    const turmas = [
        { id: 1, turma: '3º A', pontos: 20 },
        { id: 2, turma: '3º B', pontos: 16 },
        { id: 3, turma: '2º A', pontos: 13 },
        { id: 4, turma: '2º B', pontos: 12 }
    ]
    const exibirItensLista = ({ item }) => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>{item.id}</Text>
                <Text>{item.turma}</Text>
            </View>
        )

    }
    const interclasse = ({ item }) => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text> Pos: {item.id}</Text>
                <Text> Turma: {item.turma}</Text>
                <Text>Pontos: {item.pontos}</Text>
            </View>
        )

    }
    return (
        <View>
            <Text>Aula 03 - Listas com FlatList</Text>
            <Text>Aprendendo a manipular listas em react Native</Text>
            <Hr />
            {/*  Criando uma lista com a função .map() */}
            {
                turmas.map((item) => (
                    <Text key={item.id}> Turma: {item.turma}</Text>
                ))
            }
            {/*  Criando uma lista com a FlatList */}
            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Lista com FlatList</Text>
            <FlatList
                data={turmas} // passando com os dados a serem exibidos
                renderItem={exibirItensLista} //passar a função exibir os itens
                keyExtractor={item => item.id.toString()} //passar propriedade para extrir as chaves
            />
            {/* criando clssificação do interclasse SESI */}
            <Hr />
            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Classificação Interclasse SESI</Text>
            <FlatList
                data={turmas} // passando com os dados a serem exibidos
                renderItem={interclasse} //passar a função exibir os itens
                keyExtractor={item => item.pontos.toString()} //passar propriedade para extrir as chaves
            />
            <Hr />
            <Aula03_EX1 />
            <Hr />
            <Aula03_EX2 />
        </View>
    )
}
export default Aula03; 