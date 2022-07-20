import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Header from 'src/Components/Header';
import Text from 'src/Components/Text';
import View from 'src/Components/View';
import {BASE_IMAGE_URL, GetMoviesData} from 'src/config/API';
import {Genres} from 'src/config/constants';
import globalStyles from 'src/config/globalStyles';
import {SET_CURRENT_WATCH_LIST} from 'src/Redux/Movies/MoviesAction';
import styles from './style';
const DashboardScreen = () => {
  const nav = useNavigation();
  const dispatch = useDispatch();
  const selectedMovies = useSelector(state => state.selectedMovies.Movies);
  const [category, setCategory] = useState(Genres[0]);
  const [_MoviesData, set_MoviesData] = useState([]);
  useEffect(() => {
    GetMoviesData(category.id).then(res => set_MoviesData(res.results));
  }, [category.id]);
  return (
    <View style={styles.container}>
      <Header headerfontWeight headerchildren={'Movies App'} />
      <Text fontSize={18} paddingVertical={20} width="100%">
        Find your movies
      </Text>
      <Text width="100%" fontSize={18} paddingVertical={2}>
        Categories
      </Text>

      <FlatList
        data={_MoviesData}
        keyExtractor={item => item.id}
        style={styles.flatlistStyle}
        contentContainerStyle={{
          flexGrow: 0,
        }}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={
          <FlatList
            data={Genres}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.flatlistStyleUpper}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  setCategory(item);
                  set_MoviesData([]);
                }}
                style={styles.tabsStyle(category.name === item.name)}>
                <Text
                  color={
                    category.name === item.name
                      ? globalStyles.Theme.TextColorActive
                      : globalStyles.Theme.TextColor
                  }>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />
        }
        ListEmptyComponent={() => (
          <View style={styles.emptyComp}>
            <ActivityIndicator
              size={'large'}
              color={globalStyles.Theme.TextColor}
            />
          </View>
        )}
        renderItem={({item, index}) => (
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
              <TouchableOpacity
                onPress={() => SET_CURRENT_WATCH_LIST(item)(dispatch)}>
                <Image
                  resizeMode="contain"
                  style={styles.BookMarkStyle}
                  source={
                    selectedMovies.findIndex(c => c.id === item.id) >= 0
                      ? require('../../assets/Vector.png')
                      : require('../../assets/Vector1.png')
                  }
                />
              </TouchableOpacity>
              <View style={styles.star}>
                <Image
                  resizeMode="contain"
                  style={styles.BookMarkStyle}
                  source={
                    selectedMovies.findIndex(c => c.id === item.id) >= 0
                      ? require('../../assets/Vector3.png')
                      : require('../../assets/Vector2.png')
                  }
                />
                <Text>{item.vote_average}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        onPress={() => nav.navigate('WatchListScreen')}
        style={styles.listButton}>
        <Text bold color={globalStyles.Theme.PrimaryColor}>
          Watch List
        </Text>
        <Image
          resizeMode="contain"
          style={styles.BookMarkButtonStyle}
          source={require('../../assets/Vector1.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default DashboardScreen;
