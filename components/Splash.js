import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  Button,
  ActivityIndicator,
} from 'react-native';

const Splash = ({navigation}) => {
  //sNavigate
  const SNavigate = () => {
    navigation.navigate('Signup');
  };

  //aboutirfoo
  const irfoWebsite = () => {
    Linking.openURL('http://irfanofficial.ml');
  };

  //return
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#008cff',
      }}>
      <View style={styles.imgview}>
        <Image
          source={{
            uri: 'https://blog-imgs-43.fc2.com/m/a/e/maestrauditore/apptoko_logo.png',
          }}
          style={styles.imgtag}></Image>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  sText: {
    fontSize: 10,
    marginLeft: 10,
    marginTop: 33,
    textDecorationLine: 'underline',
    color: '#fff',
  },
  imgtag: {
    width: 300,
    height: 50,
    marginTop: 35,
  },
  sbtn: {
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
    marginTop: 20,
    width: 150,
  },
  btnView: {
    marginTop: 20,
    backgroundColor: 'green',
    color: 'red',
  },
});
