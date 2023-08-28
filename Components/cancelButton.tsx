import { View, StyleSheet, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

type cancelProps = {
    onPress?: ()=>void;
}


const CancelButton = (props: cancelProps) => {

    return(
        <View>
            <Pressable style={styles.cancel} onPress={props.onPress}>
            <AntDesign name="close" size={40} style={styles.close} />
            </Pressable>
        </View>
    )



}

const styles = StyleSheet.create({
    cancel: {
        backgroundColor: "rgba(255,100,0,1)",
        borderRadius: 50,
        width: 60,
        height: 60,
        borderWidth: 4,
        borderColor: "rgba(225,50,0,0.3)",
        alignItems: 'center',
        justifyContent: 'center',
    },
    close:{
        color: 'rgba(255,150,0,1)',
        textShadowRadius: 3,
        textShadowOffset:{
            width: 1,
            height: -2,
        },
        textShadowColor: 'rgba(0,0,0,0.8)',
    }
})


export default CancelButton;