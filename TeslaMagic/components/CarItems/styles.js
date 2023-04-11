import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    Main: {
        width: '100%',
        height: Dimensions.get('window').height,
    },
    titles: {
        marginTop: '25%',
        width: '100%',
        alignItems: 'center',
    },
    titleHead: {
        fontSize: 40,
        fontWeight: '500',
        color: '#1E1E1E'
    },
    subTitle: {
        fontSize: 18,
        color: '#4F4F4F'
    },
    subTitleCTA: {
        fontSize: 18,
        color: 'black',
        textDecorationLine: 'underline',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },
    buttonConatainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%'
    }
});

export default styles;