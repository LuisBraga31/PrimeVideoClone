import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import PrimeVideoLogo from '../../assets/prime_video.png';
import AmazonLogo from '../../assets/amazon_logo.png';

import MovieTheWhell from '../../assets/movies/the_wheel_of_time.png';

export const Home = () => {

    return (
        <View style={styles.container}>  
            <View style={styles.header}>
                <Image style={styles.primeLogoImg} source={PrimeVideoLogo}/>
                <Image style={styles.amazonLogoImg} source={AmazonLogo}/>
            </View>

            <View style={styles.categories}> 
                <TouchableOpacity>
                    <Text style={styles.categoryText}> Home </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.categoryText}> TV Shows </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.categoryText}> Movies </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.categoryText}> Kids </Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.movieImageThumb}>
                <Image style={styles.movieImage} source={MovieTheWhell}/>
            </TouchableOpacity>

        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#232F3E",
        alignItems: "flex-start",
    },
    header: {
        width: "100%",
        paddingTop: 70,
        alignItems: "center",
        justifyContent: "center",
    },
    amazonLogoImg: {
        marginTop: -35,
        marginLeft: 30,
    },

    categories: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: "space-around",
        marginTop: 30,
        marginBottom: 15,
    },
    categoryText: {
        fontSize: 16,
        fontWeight: "700",
        color: "#fff",
    },

    movieImageThumb: {
        width: "100%",
        alignItems: "center",
    },
});