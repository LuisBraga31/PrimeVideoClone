import { TouchableOpacity, Image, StyleSheet } from "react-native"

export const MovieCard = (props) => {

    return (
        <TouchableOpacity>
            <Image style={styles.img} source={props.movieUrl}/>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({ 
    img: {
        marginRight: 20,
    }
})