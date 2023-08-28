import { View, StyleSheet, Pressable, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

type buttonProps = {
    onPress?: ()=>void;
}

const Button = (props: buttonProps) =>{
    
    return(
        <View  >
            <Pressable style={styles.button} onPress={props.onPress}>
            <MaterialIcons name="camera" size={50} color="white" style={styles.camera} />
            </Pressable>
        </View>
    )


}

const styles = StyleSheet.create({
    button:{
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 50,
        width: 90,
        height: 90,
        borderWidth: 8,
        borderColor: "rgba(0,0,0,0.1)",
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "rgba(0,0,0,1)",
        shadowRadius: 10,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        elevation: 0.1,
    },
    camera:{
        color: 'rgba(255,255,255,1)',
        textShadowRadius: 8,
        textShadowOffset:{
            width: 0,
            height: 0,
        },
        textShadowColor: 'rgba(0,0,0,0.8)',
    }
})

export default Button;