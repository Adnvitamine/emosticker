import { Image, View, Text , StyleSheet} from "react-native"

type stickerProps = {
    sticker : string
}


const EmojiSticker = (props: stickerProps) =>{
    return(<View style={styles.stickerBox}>
        <Text style={styles.sticker}>{props.sticker}</Text>
    </View>)
}

const styles = StyleSheet.create({
    stickerBox:{
        position: "absolute",
        bottom: "30%",
        right: "45%",
    },
    sticker: {
        fontSize: 50,
    }
})

export default EmojiSticker