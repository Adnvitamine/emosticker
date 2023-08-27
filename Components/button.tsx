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
        backgroundColor: "rgba(0,0,0,0.1)",
        borderRadius: 50,
        width: 90,
        height: 90,
        borderWidth: 10,
        borderColor: "rgba(225,255,25,0.8)",
        alignItems: 'center',
        justifyContent: 'center',
    },
    camera:{
        color: 'blue'
    }
})

export default Button;