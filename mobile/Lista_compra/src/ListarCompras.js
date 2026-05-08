import { useState, useEffect } from 'react'
import { Text, View, TextInput, TouchableOpacity, FlatList, Image, StatusBar } from 'react-native'
import Estilos, { corPrincipal, corPlaceholder } from './Estilos'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { corSecundaria } from './Estilos';
// importando configuração e funções do firebase e firestore
import { firestore } from '../firebase.config';
import { collection, addDoc, getDocs, query, orderBy, doc, updateDoc, deleteDoc, where } from "firebase/firestore"

const ListaCompras = () => {
    // Variavel de estado que receberá os dados do Input do item
    const [item, setItem] = useState('')
    // Criando vetor da lista de compras
    const [listaCompras, setListaCompras] = useState([])
    async function buscarDados() {
        const listaRef = query(collection(firestore, 'comprasNeves')) //quando a paga o neves fica igual do professor
        const dadosBD = await getDocs(listaRef)

        const novaLista = dadosBD.docs.map((doc) => (
            { id: doc.id, ...doc.data() }
        ))
        setListaCompras(novaLista)
    }
    useEffect(() => {
        buscarDados()
    }, [])

    async function botaoExcluir(id) {
        await deleteDoc(doc(firestore, 'comprasNeves', id))
        buscarDados()
    }

    async function botaoAtualizar(item) {
        const docRef = doc(firestore, 'comprasNeves', item.id)
        await updateDoc(docRef, { comprado: !item.comprado })
        buscarDados()
    }

    function exibirItens({ item }) {
        return (
            <TouchableOpacity style={Estilos.botaoItem} onPress={() => { botaoAtualizar(item) }}>
                <Text style={item.comprado == false ? Estilos.textoBotaoItem : Estilos.textoBotaoItemComprado}> {item.produto} </Text>
                
                {/* Ícone agora dentro de um TouchableOpacity para o clique funcionar */}
                <TouchableOpacity onPress={() => { botaoExcluir(item.id) }}>
                    <MaterialIcons name="delete-sweep" size={24} color={corPrincipal} />
                </TouchableOpacity>
            </TouchableOpacity>
        )
    }
    async function botaoAdicionar() {
        if (item.trim() === '') return; // Evita adicionar itens vazios
        
        const novoItem = { produto: item, comprado: false }

        // Adicionar documento no firebase
        await addDoc(collection(firestore, 'comprasNeves'), novoItem)
        
        // Chamamos buscarDados() para atualizar a lista com o ID correto do Firebase
        buscarDados()
        setItem('')
    }
    return (
        <View style={Estilos.conteudo}>
            <StatusBar backgroundColor={corPrincipal} barStyle='light-content' />
            <View style={Estilos.header}>
                <Image style={Estilos.logo} source={require('../assets/logo_lista_compras.png')} />
            </View>

            <View style={Estilos.corpo}>
                {/* Inserindo o input e o botão de adicionar */}
                <View style={Estilos.inputContainer}>
                    <TextInput
                        placeholder='Adicione um novo item na lista'
                        placeholderTextColor={corPlaceholder}
                        style={Estilos.input}
                        value={item} onChangeText={setItem}
                    />
                    <TouchableOpacity style={Estilos.botao} onPress={botaoAdicionar}>
                        <Text style={Estilos.textoBotao} >+</Text>
                    </TouchableOpacity>
                </View>

                {/* Totalizadores */}
                {/* Totalizadores Lado a Lado */}
                <View style={Estilos.containerControladores}>
                    <View style={Estilos.ViewControladores}>
                        <Text style={Estilos.Contador1}>Total</Text>
                        <Text style={Estilos.numero}>{listaCompras.length}</Text>
                    </View>
                    <View style={Estilos.ViewControladores}>
                        <Text style={Estilos.Contador2}>Comprados</Text>
                        <Text style={Estilos.numero}>{listaCompras.filter(item => item.comprado).length}</Text>
                    </View>
                </View>

                <FlatList
                    data={listaCompras}
                    renderItem={exibirItens}
                    keyExtractor={item => item.id}
                />

            </View>

        </View>
    )
}

export default ListaCompras
