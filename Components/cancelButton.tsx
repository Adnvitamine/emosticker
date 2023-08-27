import { View, StyleSheet, Pressable } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 

type cancelProps = {
    onPress?: ()=>void;
}


const CancelButton = (props: cancelProps) => {

    return(
        <View>
            <Pressable style={styles.cancel} onPress={props.onPress}>
            <MaterialIcons name="cancel" size={40} color="black" />
            </Pressable>
        </View>
    )



}

const styles = StyleSheet.create({
    cancel: {
        backgroundColor: "rgba(255,20,1,1)",
        borderRadius: 50,
        width: 60,
        height: 60,
        borderWidth: 3,
        borderColor: "rgba(225,20,25,0.8)",
        alignItems: 'center',
        justifyContent: 'center',
    }
})


export default CancelButton;