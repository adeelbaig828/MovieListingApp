import React from 'react';
import {View as RNView, ViewProps, Text as RNText} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import globalStyles from 'src/config/globalStyles';
import {fontRef, heightRef} from 'src/config/screenSize';
import View from '../View';

const AppHeader = ({
  color = globalStyles.Theme.SecondaryColor,
  fontSize = 14,
  bold,
  headerfontWeight,
  headerfontSize = 18,
  width,
  children,
  headerchildren,
  paddingVertical = 0,
  style,
  textAlignVertical = 'center',
  onPress,
  ...rest
}) => {
  return (
    <View>
      <RNText
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
      </RNText>
      <RNText
        style={[
          {
            color,
            fontWeight: bold !== undefined ? 'bold' : 'normal',
            fontSize: fontSize * fontRef,
            paddingVertical: paddingVertical * heightRef,
            textAlignVertical,
          },
          style,
        ]}
        {...rest}>
        {children}
      </RNText>
    </View>
  );
};

export default AppHeader;
