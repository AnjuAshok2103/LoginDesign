import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from '../styles';
import {UnAuthStackList} from '../types';
type LoginScreenProps = NativeStackScreenProps<UnAuthStackList, 'Login'>;
const Login = ({navigation, route}: LoginScreenProps) => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const boxShadow =
    Platform.OS === 'ios'
      ? {
          shadowColor: 'gray',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.75,
          shadowRadius: 5,
        }
      : {
          elevation: 10,
        };
  const signIn = () => {};
  return (
    <View style={styles.loginContainer}>
      <View style={styles.topBlob}>
        <Image
          style={{width: screenWidth, ...styles.topImage}}
          source={require('../assets/images/top.png')}
        />
      </View>
      <View style={styles.contentLogin}>
        <Text style={styles.helloText}>Hello</Text>
        <Text style={styles.signInText}>Sign In to your account</Text>

        <View style={styles.inputContainer}>
          <View
            style={{
              ...styles.textinputParent,
              ...boxShadow,
            }}>
            <Icon name="account" size={25} color="#9A9A9A" />
            <TextInput
              value={username}
              onChangeText={text => {
                setUsername(text);
              }}
              placeholder="Username"
              placeholderTextColor={'#C8C8C8'}
              style={styles.textInput}
            />
          </View>
          <View
            style={{
              ...styles.textinputParent,
              ...boxShadow,
            }}>
            <Icon name="lock" size={25} color="#9A9A9A" />
            <TextInput
              value={password}
              onChangeText={text => {
                setPassword(text);
              }}
              placeholder="Password"
              placeholderTextColor={'#C8C8C8'}
              style={styles.textInput}
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={styles.forgotPasswordView}>
          <Text style={styles.forgotPasswordText}>Forgot your Password?</Text>
        </View>
      </View>

      <View
        style={{
          ...styles.signInBtnContainer,
          bottom: (screenHeight * 2) / 5,
        }}>
        <Text style={styles.signIn}>Sign In</Text>
        <TouchableOpacity onPress={signIn} style={styles.signInBtn}>
          <View>
            <Icon name="arrow-right-thin" size={25} color={'white'} />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          width: screenWidth,
          height: screenWidth / 2,
        }}
        activeOpacity={0}
        onPress={() => navigation.navigate('CreateAccount')}>
        <Text style={styles.forgotPasswordText}>
          Don't have an account? Create
        </Text>
      </TouchableOpacity>
      <View
        style={{
          ...styles.bottomBlob,
          width: screenWidth,
          bottom: -0,
          left: -screenWidth / 1.6,
        }}>
        <Image
          style={{
            width: screenWidth,
            height: screenHeight / 5,
            ...styles.imageResizeStretch,
          }}
          source={require('../assets/images/maskbottom.png')}
        />
      </View>
    </View>
  );
};

export default Login;
