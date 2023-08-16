/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import GoogleSVG from './Assets/Google.svg';
import GithubSVG from './Assets/Github.svg';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground
          style={styles.background}
          source={require('./Assets/BG.png')}>
      <ScrollView>
          <Nav />
          <Card />
      </ScrollView>
        </ImageBackground>
    </SafeAreaView>
  );
};

const Nav = () => {
  return (
    <View style={styles.nav}>
      <Image
        style={styles.arrow}
        source={require('./Assets/arrow.png')}></Image>
      <Text style={styles.text}>Create Account</Text>
      <Image style={styles.bell} source={require('./Assets/bell.png')}></Image>
      <Image
        style={styles.basket}
        source={require('./Assets/Basket.png')}></Image>
    </View>
  );
};

const Card = () => {
  return (
    <View style={styles.card}>
      <Uppercard />
      <Lowercard />
    </View>
  );
};

const Uppercard = () => {
  return (
    <View style={styles.uppercard}>
      <Text style={styles.sign}>Sign up with</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={[styles.button1, {marginRight: 10}]}>
          <GoogleSVG />
          <Text style={styles.buttonText}>GOOGLE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button1, {marginLeft: 10}]}>
          <GithubSVG />
          <Text style={styles.buttonText}>GITHUB</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Lowercard = () => {
  const checked = require('./Assets/check.png');
  const unChecked = require('./Assets/uncheck.png');
  const checkboxImage = {true: checked, false: unChecked};
  const [isChecked, setChecked] = useState(checkboxImage.false);

  const checkboxChange = () => {
    if (isChecked == checkboxImage.true) {
      setChecked(checkboxImage.false);
    } else {
      setChecked(checkboxImage.true);
    }
  };
  return (
    <View style={styles.lowercard}>
      <Text style={[styles.sign, {marginBottom: 30, marginTop: 35}]}>
        Or sign up with credentials
      </Text>
      <View style={styles.input}>
        <Image
          source={require('./Assets/name_icon.png')}
          style={styles.image}
        />
        <TextInput style={styles.inputText} placeholder="Name" />
      </View>
      <View style={styles.input}>
        <Image
          source={require('./Assets/email_icon.png')}
          style={styles.image}
        />
        <TextInput style={styles.inputText} placeholder="Email" />
      </View>
      <View style={styles.input}>
        <Image
          source={require('./Assets/password_icon.png')}
          style={styles.imagelock}
        />
        <TextInput style={styles.inputText} placeholder="Password" />
      </View>
      <View style={styles.pass}>
        <Text style={styles.password}>password strength:</Text>
        <Text style={styles.strength}>strong</Text>
      </View>
      <View style={styles.policy}>
        <TouchableOpacity onPress={checkboxChange}>
          <Image style={styles.check} source={isChecked} />
        </TouchableOpacity>

        <Text style={{color: '#525F7F'}}>I agree with the </Text>
        <Text style={{color: '#5E72E4', paddingLeft: 1.8}}>Privacy Policy</Text>
      </View>
      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>CREATE ACCOUNT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },

  text: {
    color: '#FFF',
    fontFamily: 'Open Sans',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 22 /* 137.5% */,
    left: 58,
  },
  nav: {
    flex: 1,
    flexDirection: 'row',
    top: 60,
  },
  arrow: {
    left: 17,
    top: 2,
  },
  bell: {
    left: 200,
    top: 2,
  },
  basket: {
    left: 220,
    top: -2,
  },
  card: {
    marginHorizontal: 15,
    marginBottom: 60,
    marginTop: 30,
    flex: 7,
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
  },
  uppercard: {
    flex: 1,
    alignItems: 'center',
    marginTop: 12,
    width: '100%',
    marginBottom:30,
  },
  lowercard: {
    flex: 3,
    width: '100%',
    backgroundColor: '#F4F5F7',
    alignItems: 'center',
  },
  sign: {
    marginTop: 25,
    alignContent: 'center',
    color: '#8898AA',
    fontSize: 12,
    fontFamily: 'Open Sans',
    fontWeight: '400',
    lineHeight: 17,
    letterSpacing: 0.37,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  button1: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 22,
    maxWidth: 250,
    paddingVertical: 3.5,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    margin: 10,
    color: '#5E72E4',
    fontSize: 15,
    fontFamily: 'Open Sans',
    fontWeight: '700',
    lineHeight: 19,
    letterSpacing: 0.43,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '90%',
    margin: 12,
    paddingHorizontal: 10,
    borderRadius: 4,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    color: '#ADB5BD',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 19,
  },
  inputText: {
    paddingHorizontal: 17,
  },
  image: {
    width: 15,
    height: 15,
    resizeMode: 'cover',
    tintColor: 'grey',
  },
  imagelock: {
    width: 10,
    height: 15,
    resizeMode: 'cover',
    tintColor: 'grey',
  },
  password: {
    color: '#8898AA',
    fontSize: 12,
    fontFamily: 'Open Sans',
    fontWeight: '400',
    lineHeight: 17,
    letterSpacing: 0.37,
    paddingTop: 2,
  },
  strength: {
    color: '#2DCE89',
    fontSize: 14,
    fontFamily: 'Open Sans',
    fontWeight: '700',
    lineHeight: 19,
    paddingLeft: 3,
  },
  pass: {
    flexDirection: 'row',
    right: 85,
  },
  policy: {
    flexDirection: 'row',
    marginTop: 20,
    right: 55,
  },
  primaryButton: {
    // marginTop: 40,
    // padding: 12,
    marginHorizontal: 90,
    marginVertical: 40,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5E72E4',
    flexShrink: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    activeOpacity: 0.7,
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#000',
    marginRight: 10,
  },
  check: {
    width: 20,
    height: 20,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: 'blue',
    marginRight: 10,
  },
});

export default App;
