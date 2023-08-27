import { View , Text} from "react-native"
import { StyleSheet } from "react-native"
const Header = () =>{

    return(

        <View style={styles.header}>
            <Text style={styles.logo}>DoanStack</Text>
        </View>

    )

}


const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontSize: 45,
        color: "rgba(175,255,50,0.9)",
        textShadowColor: "yellow",
        textShadowOffset: {
            width: 0,
            height: 0,
        },
        textShadowRadius: 20
    }
})
export default Header