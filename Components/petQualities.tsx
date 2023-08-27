import { Text, View } from "react-native"

type petQualProps = {
    qualities:{
    q1: string,
    q2: string,
    q3: string,
    }[],
    totalqualities : number
}

export const PetQualities = (props: petQualProps) =>{
    return (
        <View>
            
            {
                props.qualities.map((e,i)=>{
                    return i === 0 ? (<Text key={i} >She is {e.q1}, {e.q2}, and {e.q3}</Text>)
                    :
                    (<Text key={i}>She {e.q1}, {e.q2}, and {e.q3}.
                    </Text>)
                })
                
            }
            
            <Text>Total qualities = {props.totalqualities}</Text>
        </View>
    )
}

/**
 * 
 * if(i===0) return <Text>Your pet is {e.q1},{e.q2}, {e.q3} </Text>;
                return <Text> Also, your pet is {e.q1},{e.q2}, {e.q3}</Text>
 */