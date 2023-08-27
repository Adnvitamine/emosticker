import { Pressable, View, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

type addProps = {
    onPress?: ()=>void
}

const AddButton = (props: addProps) =>{

    return(
        <View  >
            <Pressable style={styles.add} onPress={props.onPress}>
            <Ionicons name="add" size={60} style={styles.icon} />
            </Pressable>
        </View>
    )


}

const styles = StyleSheet.create({
    add:{
        backgroundColor: "rgba(255,255,0, 1)",
        borderRadius: 50,
        width: 80,
        height: 80,
        borderWidth: 5,
        borderColor: "rgba(255,200,25,1)",
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    icon: {
        color: "rgba(25,255,25,1)"
    }
})
export default AddButton;