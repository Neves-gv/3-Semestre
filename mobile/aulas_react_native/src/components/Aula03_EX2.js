import { View, Text, FlatList, Image } from "react-native";
import Hr from "./Hr";

const Aula03_EX2 = () => {
    const produto = [
        {
            id: 1, foto: 'https://blogdomaisvendido.com/wp-content/uploads/2025/03/Notebook-Samsung-Book-I5-8gb-256gb.jpg',
            Nome: 'NoteBookDell', categoria: 'Eletronico', preco: 5200.00, estoque: 2
        },
        {
            id: 2, foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAe7cqyc1QiWeJvVd0m6xG39rEoP8dy3nRSA&s',
            Nome: 'Smartphone Samsung', categoria: 'Eletronico', preco: 1800.00, estoque: 1
        },
        {
            id: 3, foto: 'https://cdn.awsli.com.br/600x700/2538/2538906/produto/271710660/maca-argentina--1-unidade-aprox--200g--83orvw62e3.png',
            Nome: 'Maça', categoria: 'Alimento', preco: 1200.00, estoque: 6
        },
    ]
    const exibirProdutoLista = ({ item }) => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ flex: 1 }}> Pos: {item.id}</Text>
                <Image style={{ flex: 1, width: 250, height: 250 }} source={{ uri: item.foto }} />
                <Text style={{ flex: 1 }}> Nome: {item.Nome}</Text>
                <Text style={{ flex: 1 }}> Categoria: {item.categoria}</Text>
                <Text style={{ flex: 1 }}> Preço: {item.preco}</Text>
                <Text style={{ flex: 1 }}> Estoque: {item.estoque}</Text>
            </View>
        )
    }
    return (
        <View>
            {/*  Criando uma lista com a FlatList */}
            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Lista com FlatList</Text>
            <FlatList
                data={produto} // passando com os dados a serem exibidos
                renderItem={exibirProdutoLista} //passar a função exibir os itens
                keyExtractor={item => item.id.toString()} //passar propriedade para extrir as chaves
            />
        </View>
    )
}
export default Aula03_EX2; 