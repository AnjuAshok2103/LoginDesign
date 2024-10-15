import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  topBlob: {
    flex: 1,
    position: 'absolute',
    top: 0,
  },
  topImage: {
    height: 120,
    resizeMode: 'stretch',
  },
  contentLogin: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    gap: 30,
    top: 130,
  },
  helloText: {
    fontWeight: '400',
    fontSize: 30,
    color: '#262626',
  },
  signInText: {
    fontWeight: '200',
    fontSize: 16,
    color: '#262626',
  },
  inputContainer: {
    top: 10,
    gap: 30,
    paddingVertical: 10,
  },
  textinputParent: {
    flexDirection: 'row',
    borderRadius: 20,
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  textInput: {
    width: '70%',
    height: 40,
    fontSize: 12,
  },
  signInBtnContainer: {
    flexDirection: 'row',
    gap: 8,
    right: 40,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signIn: {
    fontWeight: '500',
    fontSize: 16,
    color: '#262626',
    textAlign: 'center',
  },
  signInBtn: {
    backgroundColor: 'purple',
    borderRadius: 20,
    width: 60,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomBlob: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageResizeStretch: {
    resizeMode: 'stretch',
  },
  forgotPasswordView: {
    display: 'flex',
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  forgotPasswordText: {
    fontWeight: '200',
    fontSize: 16,
    color: '#262626',
  },
  createAccountParent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  dontHaveAccount: {
    alignItems: 'center',
  },
});
