import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {FlatList, Image, ScrollView, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import Text from 'src/Components/Text';
import View from 'src/Components/View';
import {BASE_IMAGE_URL} from 'src/config/API';
import {Genres} from 'src/config/constants';
import globalStyles from 'src/config/globalStyles';
import {heightRef, widthRef} from 'src/config/screenSize';
import styles from './style';
const DetailsScreen = () => {
  const nav = useNavigation();
  const selectedMovies = useSelector(state => state.selectedMovies.Movies);

  const route = useRoute();
  const MovieData = route?.params?.data;
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollStyle}
        contentContainerStyle={{flex: 1, width: '100%'}}>
        <View>
          <Image
            resizeMode="cover"
            style={styles.backdrop_pathStyle}
            source={{
              uri: `${BASE_IMAGE_URL}${MovieData.backdrop_path}`,
            }}
          />
          <View style={styles.PosterStyle}>
            <Image
              resizeMode="cover"
              style={styles.PosterImageStyle}
              source={{
                uri: `${BASE_IMAGE_URL}${MovieData.poster_path}`,
              }}
            />
          </View>
        </View>
        <Text
          paddingVertical={10}
          style={styles.Name}
          fontSize={18}
          width={'60%'}
          bold
          color={globalStyles.Theme.TextColor}>
          {MovieData.original_title}
        </Text>
        <FlatList
          data={Genres}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.flatlistStyleUpper}
          keyExtractor={item => item.id}
          renderItem={({item}) =>
            MovieData.genre_ids.map(genreID =>
              genreID === item.id ? (
                <TouchableOpacity style={styles.tabsStyle}>
                  <Text color={globalStyles.Theme.TextColor}>{item.name}</Text>
                </TouchableOpacity>
              ) : null,
            )
          }
        />
        <View style={styles.TextContainer}>
          <Text bold color={globalStyles.Theme.TextColor}>
            About Movie
          </Text>
          <View style={styles.separator} />
          <Text marginTop={10} color={globalStyles.Theme.TextColor}>
            Overviews:
          </Text>
          <Text color={globalStyles.Theme.TextColor}>{MovieData.overview}</Text>
          <Text marginTop={10} color={globalStyles.Theme.TextColor}>
            Release Date:
          </Text>
          <Text color={globalStyles.Theme.TextColor}>
            {MovieData.release_date}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '70%',
            }}>
            <View>
              <Text marginTop={10} color={globalStyles.Theme.TextColor}>
                Average Rating:
              </Text>
              <Text color={globalStyles.Theme.TextColor}>
                {MovieData.vote_average}
              </Text>
            </View>
            <View>
              <Text marginTop={10} color={globalStyles.Theme.TextColor}>
                Rate Count:
              </Text>
              <Text color={globalStyles.Theme.TextColor}>
                {MovieData.vote_count}
              </Text>
            </View>
          </View>
          <Text marginTop={10} color={globalStyles.Theme.TextColor}>
            Popularity:
          </Text>
          <Text color={globalStyles.Theme.TextColor}>
            {MovieData.popularity}
          </Text>
        </View>
      </ScrollView>
      <View style={styles.backButton}>
        <TouchableOpacity
          onPress={() => nav.goBack()}
          style={styles.listButton}>
          <Image
            resizeMode="contain"
            style={styles.BookMarkButtonStyle}
            source={require('../../assets/Vector4.png')}
          />
          <Text bold color={globalStyles.Theme.TextColor}>
            Back
          </Text>
        </TouchableOpacity>
        {selectedMovies.findIndex(c => c.id === MovieData.id) >= 0 ? (
          <View style={styles.listButtonRight}>
            <Image
              resizeMode="contain"
              style={styles.BookMarkButtonDarkStyle}
              source={require('../../assets/Vector.png')}
            />
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default DetailsScreen;
