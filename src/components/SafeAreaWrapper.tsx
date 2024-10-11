import {View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const SafeAreaWrapper = ({children}: {children: React.ReactNode}) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        top: insets.top,
        bottom: insets.bottom,
        right: insets.right,
        left: insets.left,
        flex: 1,
        backgroundColor: 'red',
      }}>
      {children}
    </View>
  );
};

export default SafeAreaWrapper;
