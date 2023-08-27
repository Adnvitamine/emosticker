import { StyleSheet, Text, ViewProps } from "react-native";

type WelcomeProps = {
    name: string,
    age: number,
    gender: boolean,
}


export default function Welcome(props: WelcomeProps){

    return <Text>Hello {props.name}, you are {props.age}, and you are a {props.gender == false ? "male" : "female"}!</Text>
}
