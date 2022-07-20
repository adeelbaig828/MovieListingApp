import {StyleSheet} from 'react-native';
import globalStyles from 'src/config/globalStyles';
import {fullWidth, heightRef, widthRef} from 'src/config/screenSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: globalStyles.Theme.PrimaryColor,
  },
  scrollStyle: {flex: 1, width: '100%'},
  backdrop_pathStyle: {
    height: 280 * heightRef,
    width: 375 * widthRef,
  },
  backButton: {
    position: 'absolute',
    bottom: 30 * heightRef,
    right: 10 * widthRef,
    flexDirection: 'row',
    backgroundColor: 'red',
    width: '100%',
  },
  BookMarkButtonStyle: {
    height: 24 * heightRef,
    width: 15 * widthRef,
    tintColor: globalStyles.Theme.TextColor,
  },
  BookMarkButtonDarkStyle: {
    height: 24 * heightRef,
    width: 15 * widthRef,
    tintColor: globalStyles.Theme.PrimaryColor,
  },
  flatlistStyleUpper: {
    flexGrow: 0,
    paddingVertical: 20,
    marginTop: 15,
    backgroundColor: globalStyles.Theme.PrimaryColor,
  },
  tabsStyle: {
    height: 24 * heightRef,
    backgroundColor: globalStyles.Theme.TextBackgroundColor,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 106 * widthRef,
    borderRadius: 25,
  },
  PosterStyle: {
    height: 120 * heightRef,
    width: 95 * widthRef,
    overflow: 'hidden',
    borderRadius: 20,
    position: 'absolute',
    bottom: -50 * heightRef,
    left: 15 * widthRef,
    zIndex: 10000,
  },
  TextContainer: {
    width: '100%',
    paddingHorizontal: 15 * widthRef,
  },
  separator: {
    height: 5 * heightRef,
    width: 90,
    marginTop: 10 * heightRef,
    backgroundColor: globalStyles.Theme.TextBackgroundColor,
  },
  Name: {marginLeft: 130 * widthRef},
  PosterImageStyle: {width: '100%', height: '100%'},
  listButton: {
    position: 'absolute',
    bottom: 30 * heightRef,
    left: 30 * widthRef,
    alignSelf: 'flex-end',
    marginRight: 29,
    flexDirection: 'row',
    width: 112 * widthRef,
    backgroundColor: globalStyles.Theme.TextBackgroundColor,
    borderRadius: 17,
    height: 42 * heightRef,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  listButtonRight: {
    position: 'absolute',
    bottom: 30 * heightRef,
    right: 10 * widthRef,
    alignSelf: 'flex-end',
    marginRight: 29,
    flexDirection: 'row',
    width: 42 * widthRef,
    backgroundColor: globalStyles.Theme.PrimaryColorActive,
    borderRadius: 17,
    height: 42 * heightRef,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default styles;
