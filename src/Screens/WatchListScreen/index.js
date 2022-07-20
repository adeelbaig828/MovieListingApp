import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {FlatList, Image, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import Header from 'src/Components/Header';
import Text from 'src/Components/Text';
import View from 'src/Components/View';
import {BASE_IMAGE_URL} from 'src/config/API';
import globalStyles from 'src/config/globalStyles';
import styles from './style';
const WatchListScreen = () => {
  const nav = useNavigation();
  const [category, setCategory] = useState();
  const selectedMovies = useSelector(state => state.selectedMovies.Movies);

  return (
    <View style={styles.container}>
      <Header headerfontWeight headerchildren={'Movies App'} />
      <Text fontSize={18} paddingVertical={20} width="100%">
        Your Watch List
      </Text>
      <FlatList
        data={selectedMovies}
        keyExtractor={item => item.id}
        style={styles.flatlistStyle}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              nav.navigate('DetailsScreen', {
                data: item,
              })
            }
            style={styles.tabsStyleLower}>
            <Image
              resizeMode="contain"
              style={styles.PosterStyle}
              source={{
                uri: `${BASE_IMAGE_URL}${item.poster_path}`,
              }}
            />
            <View style={styles.CenterContainer}>
              <Text>Title:</Text>
              <Text>{item.original_title}</Text>
              <Text>Release Date:</Text>
              <Text>{item.release_date}</Text>
              <Text>Average Rating:</Text>
              <Text>{item.vote_average}</Text>
            </View>
            <View style={styles.LeftContainer}>
              <Image
                resizeMode="contain"
                style={styles.BookMarkStyle}
                source={require('../../assets/Vector.png')}
              />
              <View>
                <Text
                  color={globalStyles.Theme.PrimaryColorActive}
                  fontSize={12}>
                  Read more
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity onPress={() => nav.goBack()} style={styles.listButton}>
        <Image
          resizeMode="contain"
          style={styles.BookMarkButtonStyle}
          source={require('../../assets/Vector4.png')}
        />
        <Text bold color={globalStyles.Theme.TextColor}>
          Back
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WatchListScreen;
