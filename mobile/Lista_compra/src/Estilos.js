import { StyleSheet, Platform, StatusBar } from "react-native";

export const corPrincipal = "#59b6ff";
export const corSecundaria = "#3431e2ff";
export const corTexto = "#f7f7f7ff";
export const corFundo = "#373434ff";
export const corFundo2 = "#0f022aff";
export const corPlaceholder = "#6d6767ff";

const Estilos = StyleSheet.create({
    conteudo: {
        flex: 1,
        backgroundColor: corFundo,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    header: {
        alignItems: "center",
        paddingVertical: 20,
    },
    logo: {
        width: 300,
        height: 40
    },

    inputContainer: {
        flexDirection: "row",
        marginBottom: 10,
    },
    input: {
        flex: 1,
        height: 50,
        backgroundColor: corFundo2,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: corPrincipal,
        marginRight: 10,
        paddingHorizontal: 10,
        color: corTexto,
        fontSize: 16,
    },
    botao: {
        width: 50,
        borderRadius: 6,
        backgroundColor: corPrincipal,
        justifyContent: "center",
        alignItems: "center",
    },
    textoBotao: {
        color: corTexto,
        fontWeight: "bold",
        fontSize: 26,
        marginBottom: 4,
    },
    corpo: {
        flex: 1,
        padding: 20,
    },
    botaoItem: {
        backgroundColor: corFundo2,
        borderRadius: 8,
        marginBottom: 10,
        padding: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        borderColor: corPlaceholder,
    },
    textoBotaoItem: {
        color: corTexto,
        fontSize: 18,
    },
    textoBotaoItemComprado: {
        color: corPlaceholder,
        fontSize: 18,
        textDecorationLine: "line-through",
    },
    item: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    containerControladores: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
    },
    ViewControladores: {
        flex: 1, // Cada um ocupa metade
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: corFundo2,
        padding: 12,
        borderRadius: 10,
        marginHorizontal: 5, // Espaço entre os dois
        borderWidth: 1,
        borderColor: "#ffffff10",
    },
    Contador1: {
        fontWeight: "bold",
        fontSize: 13, // Diminuído levemente para caber lado a lado
        color: corPrincipal,
        textTransform: 'uppercase',
    },
    Contador2: {
        fontWeight: "bold",
        fontSize: 13, // Diminuído levemente para caber lado a lado
        color: corSecundaria,
        textTransform: 'uppercase',
    },
    numero: {
        color: corTexto,
        backgroundColor: corPlaceholder,
        fontWeight: "bold",
        fontSize: 14,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
        overflow: 'hidden',
        textAlign: 'center',
        minWidth: 35,
    },
});
export default Estilos;