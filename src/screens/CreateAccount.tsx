import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  Platform,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from '../styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {UnAuthStackList} from '../types';
type CreateAccountScreenProps = NativeStackScreenProps<
  UnAuthStackList,
  'CreateAccount'
>;
const CreateAccount = ({navigation, route}: CreateAccountScreenProps) => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
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
      <View style={{...styles.topBlob, left: -screenWidth / 2, top: 0}}>
        <Image
          style={{width: screenWidth, ...styles.topImage}}
          source={require('../assets/images/topcreate.png')}
        />
      </View>
      <View style={styles.contentLogin}>
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
          <View
            style={{
              ...styles.textinputParent,
              ...boxShadow,
            }}>
            <Icon name="email" size={25} color="#9A9A9A" />
            <TextInput
              value={email}
              onChangeText={text => {
                setEmail(text);
              }}
              placeholder="Email"
              placeholderTextColor={'#C8C8C8'}
              style={styles.textInput}
            />
          </View>
          <View
            style={{
              ...styles.textinputParent,
              ...boxShadow,
            }}>
            <Icon name="cellphone" size={25} color="#9A9A9A" />
            <TextInput
              value={mobile}
              onChangeText={text => {
                setMobile(text);
              }}
              placeholder="Mobile"
              placeholderTextColor={'#C8C8C8'}
              style={styles.textInput}
            />
          </View>
        </View>
      </View>

      <View
        style={{
          ...styles.signInBtnContainer,
          bottom: (screenHeight * 2) / 4.5,
        }}>
        <Text style={styles.signIn}>Create</Text>
        <TouchableOpacity onPress={signIn} style={styles.signInBtn}>
          <View>
            <Icon name="arrow-right-thin" size={25} color={'white'} />
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: 'center',
          width: screenWidth,
          height: screenHeight / 3,
          gap: 20,
        }}>
        <Text style={styles.forgotPasswordText}>
          Or create account uisng social media
        </Text>
        <View style={{flexDirection: 'row', gap: 5}}>
          <TouchableOpacity>
            <Image
              style={{width: 30, height: 30, resizeMode: 'contain'}}
              source={require('../assets/images/facebook.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{width: 30, height: 30, resizeMode: 'contain'}}
              source={require('../assets/images/twitter.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{width: 30, height: 30, resizeMode: 'contain'}}
              source={require('../assets/images/google.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          ...styles.bottomBlob,
          bottom: -0,
          left: -screenWidth / 2 - 90,
          // backgroundColor: 'pink',
        }}>
        <Image
          style={{
            width: screenWidth,
            height: 200,
            ...styles.imageResizeStretch,
          }}
          source={require('../assets/images/maskbottom.png')}
        />
      </View>
    </View>
  );
};

export default CreateAccount;
