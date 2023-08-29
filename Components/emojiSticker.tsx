import {  View, Text , StyleSheet} from "react-native"
import { PanGestureHandler, TapGestureHandler , Gesture, PanGestureHandlerGestureEvent} from 'react-native-gesture-handler';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    useAnimatedGestureHandler,
    withSpring,
  } from 'react-native-reanimated';
import {useRef, useCallback} from "react";


type stickerProps = {
    sticker : string
}

type contextType = {
    x: number,
    translateX: number,
    translateY: number
}

const EmojiSticker = (props: stickerProps) =>{
    const gestureRef = useRef();
    const fontSize = 30;
    const AnimatedText = Animated.createAnimatedComponent(Text);
    const AnimatedView = Animated.createAnimatedComponent(View);
    const scaleFontSize = useSharedValue(fontSize);
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

      const rStyle = useAnimatedStyle(() => {
        return {
          fontSize: withSpring(scaleFontSize.value),
        };
      }); 

      const onTapDouble = useCallback(()=>{
        if (scaleFontSize.value !== fontSize * 2) {
          scaleFontSize.value = scaleFontSize.value * 2;
        }else{
          scaleFontSize.value = scaleFontSize.value / 2 ;
        }
      }, [])
      
      const panGesturedEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, contextType>({
        onStart: (_, context) => {
          context.translateX = translateX.value;
          context.translateY = translateY.value;
        },
        onActive: (event, context) => {
          translateX.value = event.translationX + context.translateX;
          translateY.value = event.translationY + context.translateY;
        },
      });

      const containerStyle = useAnimatedStyle(() => {
        return {
          transform: [
            {
              translateX: translateX.value,
            },
            {
              translateY: translateY.value,
            },
          ],
        };
      });

    return(
      <PanGestureHandler ref={gestureRef} onGestureEvent={panGesturedEvent}>
        <AnimatedView style={[containerStyle, styles.stickerBox]}>
        <TapGestureHandler maxDelayMs={250} ref={gestureRef} numberOfTaps={2} onActivated={onTapDouble} >
          <AnimatedText style={[rStyle, { fontSize: fontSize}, styles.text]}>{props.sticker}</AnimatedText>
        </TapGestureHandler>
      </AnimatedView>
      </PanGestureHandler>
      

    )
}

const styles = StyleSheet.create({
    stickerBox:{
      top: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      textAlign: 'center',
    }
    
})

export default EmojiSticker