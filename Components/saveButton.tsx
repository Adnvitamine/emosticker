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
        backgroundColor: "rgba(225,225,225,1)",
        borderRadius: 50,
        width: 60,
        height: 60,
        borderWidth: 3,
        borderColor: "rgba(0,0,0,0.3)",
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "rgba(0,0,0,1)",
        shadowRadius: 50,
        shadowOffset: {
            width: 0,
            height: 0,
        }
    },
    saveIcon: {
        color: 'rgba(255,255,255,1)',
        textShadowRadius: 3,
        textShadowOffset:{
            width: 1,
            height: -2,
        },
        textShadowColor: 'rgba(0,0,0,1)',
    }
})

export default SaveButton;