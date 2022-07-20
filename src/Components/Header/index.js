import React from 'react';
import {View as RNView, ViewProps} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import globalStyles from 'src/config/globalStyles';
import {fontRef, heightRef} from 'src/config/screenSize';
import Text from '../Text';
import View from '../View';

const Header = ({
  color = globalStyles.Theme.TextColor,
  fontSize = 14,
  bold,
  headerfontWeight,
  headerfontSize = 36,
  width,
  children,
  headerchildren,
  paddingVertical = 0,
  style,
  textAlignVertical = 'center',
  onPress,
  ...rest
}) => {
  const inset = useSafeAreaInsets();
  return (
    <View style={{width: '100%'}}>
      <View style={{height: inset.top, width: '100%'}} />
      <Text
        style={[
          {
            color,
            fontWeight: headerfontWeight !== undefined ? 'bold' : 'normal',
            fontSize: headerfontSize * fontRef,
            paddingVertical: paddingVertical * heightRef,
            textAlignVertical,
          },
          style,
        ]}
        {...rest}>
        {headerchildren}
      </Text>
    </View>
  );
};

export default Header;
