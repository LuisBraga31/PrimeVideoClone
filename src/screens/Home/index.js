import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';

import PrimeVideoLogo from '../../assets/prime_video.png';
import AmazonLogo from '../../assets/amazon_logo.png';

import { MovieCard } from '../../components/MovieCard';

import MovieTheWhell from '../../assets/movies/the_wheel_of_time.png';
import { MOVIESWATCHING } from '../../utils/moviesWatching';
import { MOVIESCRIME } from '../../utils/moviesCrimes';
import { MOVIESWATCH } from '../../utils/moviesWatch';



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
            
            <ScrollView style={styles.contentMovies} showsVerticalScrollIndicator={false}>
                <Text style={styles.movieText}> Continue Watching </Text>
                <FlatList 
                    data={MOVIESWATCHING}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <MovieCard movieUrl={item.moviesURL}/>
                    )}
                    horizontal
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                />

                <Text style={styles.movieText}> Crime Movies </Text>
                <FlatList 
                    data={MOVIESCRIME}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <MovieCard movieUrl={item.moviesURL}/>
                    )}
                    horizontal
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                />

                <Text style={styles.movieText}> Watch in your Language </Text>
                <FlatList 
                    data={MOVIESWATCH}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <MovieCard movieUrl={item.moviesURL}/>
                    )}
                    horizontal
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                />
            </ScrollView>
            

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
        paddingTop: 60,
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
        marginTop: 20,
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

    contentMovies: {
        marginBottom: 20,
    },

    movieText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "700",
        padding: 15,
    },
    contentList: {
        paddingLeft: 15,
        paddingRight: 30,
    }
});