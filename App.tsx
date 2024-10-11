/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import UnAuthStackNavigation from './src/navigation';
import SafeAreaWrapper from './src/components/SafeAreaWrapper';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaProvider style={{...backgroundStyle, flex: 1}}>
      {/* <SafeAreaView style={{flex: 1}}> */}
      <SafeAreaWrapper>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <NavigationContainer>
          <UnAuthStackNavigation />
        </NavigationContainer>
        {/* </SafeAreaView> */}
      </SafeAreaWrapper>
    </SafeAreaProvider>
  );
}

export default App;
