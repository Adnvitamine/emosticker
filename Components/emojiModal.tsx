import { Modal, View, Text, StyleSheet, Pressable } from "react-native"
import { FontAwesome } from '@expo/vector-icons';
import { ReactNode } from 'react'

type emojiProps = {
    emoArray: string[],
    children: ReactNode,
    isVisible: boolean,
    onClose?: ()=>void,
    onPress?: ()=>void,
}


const EmojiModal = (props: emojiProps) =>{

    return(<Modal animationType="slide" transparent={true} visible={props.isVisible} >
        <View style={styles.viewModal}>
            <View style={styles.closeModal}>
                <Pressable style={styles.closeIcon} onPress={props.onClose}>
                <FontAwesome name="close" size={15} color="white" />
                </Pressable>
            </View>
            <View style={styles.bodyModal}>
                {props.children}
            </View>
        </View>
    </Modal>)
}

const styles = StyleSheet.create({
    viewModal: {
        height: "25%",
        width: "100%",
        backgroundColor: "white",
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: 'absolute',
        bottom: 0,
        flex: 1
    },
    closeModal: {
        flex: 1.3,
        backgroundColor: "white",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    bodyModal: {
        flex: 6,
        flexDirection: "row",
        width: "100%",
        borderTopWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        flexWrap: "wrap",
    },
    closeIcon: {
        borderWidth: 1,
        borderRadius: 50,
        backgroundColor: "black",
        width: 20,
        height: 20,
        position: 'absolute',
        right: 12,
        top: 8,
        alignItems: 'center',
        justifyContent: 'center',
    }

})

export default EmojiModal;