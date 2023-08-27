import { Image, Text, View, StyleSheet } from "react-native";
import { ReactNode } from 'react'

type imageProps = {
    selectPic: string,
    placeHolderImage: string,
    children: ReactNode
}


const ImageViewer = (props: imageProps) =>{

    const imageSource = props.selectPic ? props.selectPic : props.placeHolderImage;


    return(<View>
        
        <Image source={{uri: `${imageSource}`}} style={styles.image} ></Image>
        {props.children}
    
    </View>
        )

}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: "100%",
    
    }   
})


export default ImageViewer;