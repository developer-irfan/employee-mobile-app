import React, {useState} from 'react';
import {useValidation} from 'react-native-form-validator';
import AwesomeAlert from 'react-native-awesome-alerts';
import {StyleSheet, Text, View, TextInput, Button, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Login = ({navigation}) => {
  //useState
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [LoginshowAlerts, LoginsetShowAlerts] = useState(false);

  //validation
  const {validate, isFieldInError, getErrorsInField, getErrorMessages} =
    useValidation({
      state: {email, password},
    });

  //gotoHome
  const gotoHome = () => {
    validate({
      email: {email: true},
      password: {require: true, minlength: 4, maxlength: 8},
    });

    LoginsetShowAlerts(true);
  };

  //cancelBtnFun
  const cancelBtnFun = () => {
    LoginsetShowAlerts(false);
    navigation.navigate('Login');
  };

  //okBtnFun
  const okBtnFun = () => {
    LoginsetShowAlerts(false);
    navigation.navigate('StaffRecord');
  };

  //return
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: '#1a75ff',
          flex: 0,
          flexDirection: 'row',
          width: 359,
          height: 65,
        }}>
        <Icon
          name="md-menu"
          color="white"
          size={26}
          style={{marginLeft: 16, marginTop: 16}}
          onPress={() => navigation.openDrawer(true)}
        />
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            justifyContent: 'center',
            paddingLeft: 90,
            fontWeight: 'bold',
            fontSize: 15,
            paddingTop: 20,
          }}>
          Login Here!!
        </Text>
      </View>
      <View>
        <AwesomeAlert
          show={LoginshowAlerts}
          title="Login Success!"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="Cancel"
          confirmText="StaffRecord"
          confirmButtonColor="#DD6B55"
          onCancelPressed={cancelBtnFun}
          onConfirmPressed={okBtnFun}
        />
      </View>
      <View style={styles.formView}>
      <View style={styles.imgview}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/originals/0a/74/3d/0a743d25795667dfbba156000bf05b63.png',
          }}
          style={styles.imgtag}></Image>
      </View>
      <View style={styles.mainheading}>
        <Text style={styles.maintext}>Login Form</Text>
      </View>
      <View style={styles.mainview}>
        <TextInput
          placeholder="Email"
          name="email"
          placeholderTextColor="lightgrey"
          style={styles.inputfield}
          value={email}
          onChangeText={e => setEmail(e)}
        />

        {isFieldInError('email') &&
          getErrorsInField('email').map(errorMessage => (
            <Text style={{color: 'red'}}>{errorMessage}</Text>
          ))}

        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="lightgrey"
          style={styles.inputfield}
          value={password}
          onChangeText={e => setPassword(e)}
        />

        {isFieldInError('password') &&
          getErrorsInField('password').map(errorMessage => (
            <Text style={{color: 'red'}}>{errorMessage}</Text>
          ))}

        <View style={styles.btnView}>
          <Button title="Sign in" onPress={gotoHome} />
        </View>
        <Text style={styles.sText}>Forgot Password?</Text>
      </View>
    </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },
  maintext: {
    fontSize: 22,
    fontFamily: 'Arial',
  },
  imgview: {},
  imgtag: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  sText: {
    fontSize: 13,
    marginLeft: 190,
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  inputfield: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: '#777',
    marginTop: 10,
    fontSize: 14,
    color: 'black',
  },
  subbtn: {
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
    marginTop: 20,
  },
  btnView: {
    marginTop: 15,
  },
});
