import React, {useState} from 'react';
import {Dimensions, Image, Text, TextInput, View} from 'react-native';
import topImage from '../assets/images/top_vector.png';
const Login = () => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const [email, onChangeText] = useState('');
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#f5f5f5',
        gap: 20,
      }}>
      <View
        style={{
          flex: 1,
          position: 'absolute',
          left: 0,
          top: -40,
        }}>
        <Image
          style={{
            width: screenWidth,
            height: screenHeight * 0.2,
            resizeMode: 'cover',
          }}
          source={topImage}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
        }}>
        <Text style={{fontWeight: '400', fontSize: 30}}>Hello</Text>
        <Text style={{fontWeight: '200', fontSize: 16}}>
          Sign In to your account
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'red',
        }}>
        <View style={{flex: 1}}>
          <TextInput
            style={{
              width: '80%',
              height: 40,
              margin: 12,
              borderWidth: 1,
              borderRadius: 20,
              padding: 10,
            }}
            onChangeText={onChangeText}
            value={email}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          position: 'absolute',
          bottom: (screenHeight * 0.2) / 4,
          left: -10,
        }}>
        <Image
          style={{
            width: screenWidth / 2,
            height: screenHeight * 0.2, // Set a dynamic height relative to the screen size
            resizeMode: 'contain',
          }}
          source={require('../assets/images/bottom_vector3.png')}
        />
      </View>
    </View>
  );
};

export default Login;
