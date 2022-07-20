/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text as RNText, TextProps, TouchableOpacity} from 'react-native';
import globalStyles from 'src/config/globalStyles';
import {fontRef, heightRef} from 'src/config/screenSize';
import View from '../View';

const Text = ({
  color = globalStyles.Theme.TextColor,
  fontSize = 14,
  bold,
  width,
  children,
  paddingVertical = 0,
  marginTop = 0,
  style,
  textAlignVertical = 'center',
  ...rest
}: TextProps) => {
  return (
    <RNText
      style={[
        {
          color,
          fontWeight: bold !== undefined ? 'bold' : 'normal',
          fontSize: fontSize * fontRef,
          paddingVertical: paddingVertical * heightRef,
          marginTop: marginTop * heightRef,
          textAlignVertical,
        },
        width !== undefined ? {width} : {},
        style,
      ]}
      {...rest}>
      {children}
    </RNText>
  );
};

export default Text;
