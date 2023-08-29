import { View, StyleSheet, ImageBackground } from "react-native";
import { ReactNode } from 'react'

type imageProps = {
    selectPic: string,
    placeHolderImage: string,
    children: ReactNode
}


const ImageViewer = (props: imageProps) =>{

    const imageSource = props.selectPic ? props.selectPic : props.placeHolderImage;


    return(<View>
        
        
        <ImageBackground source={{uri: `${imageSource}`}} style={styles.image} >
            
        {props.children}
        </ImageBackground>
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