import { View } from "react-native"
import { StyleSheet } from "react-native"
import { ReactNode } from 'react'

type headerProps = {
    children: ReactNode,
}

const Header = (props: headerProps) =>{

    return(

        <View style={styles.header}>
            {props.children}
        </View>

    )

}


const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "100%",
    }
})
export default Header