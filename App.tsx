import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { ImageBackground, StyleSheet, Text, View, Pressable, Image } from 'react-native';
import Header from './Components/header';
import Button from './Components/button';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import ImageViewer from './Components/imageViewer';
import CancelButton from './Components/cancelButton';
import AddButton from './Components/addButton';
import SaveButton from './Components/saveButton';
import EmojiModal from './Components/emojiModal';
import EmojiSticker from './Components/emojiSticker';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

const logoSource = require('./assets/images/adaptive-icon.png'); 

export default function App() {

  const [selectPic, setSelectPic] = useState("");
  const [selectEmo, setSelectEmo] = useState("");
  const [isVisible, setVisible] = useState(false);
  const placeHolderImage = 'https://images.unsplash.com/photo-1620055374842-145f66ec4652?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80';
  const listEmo = "😀";
  const emoArray = ["😍","🤩","😎","🤪","👻","😹","👍🏼","🐶","🐰","🚀"];

  const [fontsLoaded, fontError] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectPic(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };

  const resetImage = () =>{
    if(selectPic !== ""){
      setSelectPic("");
      setSelectEmo("");
    }
  }

  const modalVisible = () =>{
    setVisible(true)
  }

  const modalHide = () =>{
    setVisible(false)
  }

  return (<SafeAreaProvider>
    <GestureHandlerRootView style={styles.container}>
      <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1620055374842-145f66ec4652?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'}} style={styles.img} >

      <View style={styles.top}>
      </View>
      
      <View style={styles.screen}>
        <View style={styles.header}>
          <Header>
            <Image source={logoSource} style={styles.logo} ></Image>
          </Header>
        </View>
        <View style={styles.body}>
          <ImageViewer placeHolderImage={placeHolderImage} selectPic={selectPic}>
          <EmojiSticker sticker={selectEmo}></EmojiSticker>
          </ImageViewer>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerLeft}>
            {selectPic ? <CancelButton onPress={resetImage}></CancelButton> : ""}</View>
          <View style={styles.footerMid}>
            {selectPic === "" ? <Button onPress={pickImageAsync}></Button>: <AddButton onPress={modalVisible} ></AddButton>}
          </View>
          <View style={styles.footerRight}>
          {selectPic === "" ? "" : <SaveButton></SaveButton>}
          </View>
          {isVisible ? <EmojiModal isVisible={isVisible} onClose={modalHide} emoArray={emoArray}>
          {   

              emoArray.map((val,i)=>{
                return (<View style={styles.bodyGrid} key={i}><Pressable onPress={() => {
                  setSelectEmo(val);
                  setVisible(false);
                }}><Text style={styles.listEmo}>{val}</Text></Pressable></View>)
              })
            }
          </EmojiModal> : ""}
        </View>
      </View>
      
      </ImageBackground>
    </GestureHandlerRootView>
  </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 img: {
  width: '100%',
  height: '100%'
 },
 top: {
  flex: 1,
  fontFamily: 'Inter_900Black',
  backgroundColor: 'white',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center'
 },
 screen: {
  flex: 16,
 },
 header: {
  flex: 0.8,
  backgroundColor: "rgba(225,225,225,1)",
 },
 logo:{
  position: "absolute",
  left: 0,
  bottom: 10,
  width: 64,
  height: 64
 },
 body: {
  flex: 12,
 },
 footer:{
  flex: 3,
  flexDirection: "row",
  backgroundColor: "rgba(255,255,255,1)",
  alignItems: 'center',
  justifyContent: 'center',
 },
 footerLeft:{
  width: "33%",
  height: "100%",
  alignItems: 'center',
  justifyContent: 'center',
 },
 footerMid:{
  width: "33%",
  height: "100%",
  alignItems: 'center',
  justifyContent: 'center',

 },
 footerRight:{
  width: "33%",
  height: "100%",
  alignItems: 'center',
  justifyContent: 'center',

 },
 cancel: {
  backgroundColor: "rgba(255,20,1,1)",
  borderRadius: 50,
  width: 45,
  height: 45,
  borderWidth: 3,
  borderColor: "rgba(225,100,25,0.8)",
  alignItems: 'center',
  justifyContent: 'center',
},
    closeIcon: {
        borderWidth: 1,
        borderRadius: 50,
        width: 20,
        height: 20,
        position: 'absolute',
        right: 12,
        top: 5,
    },
    bodyGrid: {
      height: "50%",
      width: "20%",
      alignItems: 'center',
      justifyContent: 'center',
  },
  listEmo:{
      fontSize: 50,
  },
});
