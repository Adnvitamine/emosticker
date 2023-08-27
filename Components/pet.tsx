import { Text, View } from "react-native"

type PetProps = {
    petdetails: {
    name: string,
    age: number,
    like: string,
    gender: boolean
    },
    type: string
}

export const Pet = (props: PetProps) =>{
    const { name, age, like, gender} = props.petdetails;
    return(
        
        <View>
        <Text>
            You have a pet name {name}.
       
            The pet is {age}.
        Her gender is {gender ? "male": "female"}</Text>
        </View>
    )

}