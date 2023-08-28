import { Pressable, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

type addProps = {
    onPress?: ()=>void
}

const AddButton = (props: addProps) =>{

    return(
        <View  >
            <Pressable style={styles.add} onPress={props.onPress}>
            <MaterialCommunityIcons name="sticker-emoji" size={50} style={styles.icon} />
            </Pressable>
        </View>
    )


}

const styles = StyleSheet.create({
    add:{
        backgroundColor: "rgba(255,225,0,0.8)",
        borderRadius: 50,
        width: 80,
        height: 80,
        borderWidth: 3,
        borderColor: "rgba(255,200,0,0.7)",
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    icon: {
        color: "rgba(255,255,0,1)",
        textShadowRadius: 3,
        textShadowOffset:{
            width: 1,
            height: -2,
        },
        textShadowColor: 'rgba(0,0,0,1)',
    }
})
export default AddButton;