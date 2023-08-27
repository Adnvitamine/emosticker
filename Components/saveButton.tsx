import { View, Pressable, StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

const SaveButton = () =>{


    
    return(
        <View  >
            <Pressable style={styles.save} >
            <MaterialIcons name="save-alt" size={40} style={styles.saveIcon} />
            </Pressable>
        </View>
    )


}

const styles = StyleSheet.create({
    save:{
        backgroundColor: "rgba(100,255,255,0)",
        borderRadius: 50,
        width: 60,
        height: 60,
        borderWidth: 3,
        borderColor: "rgba(255,225,255,1)",
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    saveIcon: {
        color: "rgba(255,255,255,1)",
    }
})

export default SaveButton;