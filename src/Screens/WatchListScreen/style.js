import {StyleSheet} from 'react-native';
import globalStyles from 'src/config/globalStyles';
import {heightRef, widthRef} from 'src/config/screenSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: globalStyles.Theme.PrimaryColor,
    paddingLeft: 20 * widthRef,
  },
  flatlistStyleUpper: {
    width: '100%',
    flexGrow: 0,
    paddingVertical: 10,
  },
  flatlistStyle: {
    width: '100%',
    paddingRight: 20 * widthRef,
    flexGrow: 0,
  },
  tabsStyle: state => ({
    height: 42 * heightRef,
    backgroundColor: state
      ? globalStyles.Theme.PrimaryColorActive
      : globalStyles.Theme.TextBackgroundColor,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 106 * widthRef,
    borderRadius: 25,
  }),
  tabsStyleLower: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 15,
  },
  PosterStyle: {
    height: 120 * heightRef,
    width: 95 * widthRef,
    borderRadius: 20,
  },
  BookMarkStyle: {
    height: 24 * heightRef,
    width: 18 * widthRef,
  },
  BookMarkButtonStyle: {
    height: 24 * heightRef,
    width: 15 * widthRef,
    tintColor: globalStyles.Theme.TextColor,
  },
  CenterContainer: {
    width: '45%',
  },
  LeftContainer: {
    width: '25%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  listButton: {
    position: 'absolute',
    bottom: 30 * heightRef,
    right: 10 * widthRef,
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
});

export default styles;
