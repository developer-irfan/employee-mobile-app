import React, {useState} from 'react';
import {useValidation} from 'react-native-form-validator';
import AwesomeAlert from 'react-native-awesome-alerts';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  ActivityIndicator,
} from 'react-native';

const Signup = ({navigation}) => {
  //useState
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [adress, setAdress] = useState();
  const [password, setPassword] = useState();

  //alerts usestate
  const [SignupshowAlerts, SignupsetShowAlerts] = useState(false);

  //validation
  const {validate, isFieldInError, getErrorsInField, getErrorMessages} =
    useValidation({
      state: {email, name, adress, password},
    });

  //btnClick Fun
  const btnClick = () => {
    validate({
      email: {email: true},
      name: {minlength: 3, maxlength: 7, required: true},
      adress: {require: true, maxlength: 20},
      password: {require: true, minlength: 4, maxlength: 8},
    });

    SignupsetShowAlerts(true);
  };

  //cancel btn
  const cancelBtnFun = () => {
    SignupsetShowAlerts(false);
    navigation.navigate('StaffRecord');
  };

  //ok btn
  const okBtnFun = () => {
    SignupsetShowAlerts(false);
    navigation.navigate('Login');
  };

  //return Statement
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
          Register Here!!
        </Text>
      </View>
      <View>
        <AwesomeAlert
          show={SignupshowAlerts}
          title="Singup Successfully!"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="Close"
          confirmText="Login"
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
          <Text style={styles.maintext}>Signup Form</Text>
        </View>
        <View style={styles.mainview}>
          <TextInput
            name="email"
            focusable
            placeholder="Email"
            value={email}
            placeholderTextColor="lightgrey"
            onChangeText={e => setEmail(e)}
            style={styles.inputfield}
          />

          {isFieldInError('email') &&
            getErrorsInField('email').map(errorMessage => (
              <Text style={{color: 'red'}}>{errorMessage}</Text>
            ))}

          <TextInput
            placeholder="Your Name"
            name="name"
            placeholder="Name"
            value={name}
            placeholderTextColor="lightgrey"
            style={styles.inputfield}
            onChangeText={e => setName(e)}
          />

          {isFieldInError('name') &&
            getErrorsInField('name').map(errorMessage => (
              <Text style={{color: 'red'}}>{errorMessage}</Text>
            ))}

          <TextInput
            placeholder="Adress"
            name="adress"
            placeholder="Adress"
            value={adress}
            placeholderTextColor="lightgrey"
            style={styles.inputfield}
            onChangeText={e => setAdress(e)}
          />

          {isFieldInError('adress') &&
            getErrorsInField('adress').map(errorMessage => (
              <Text style={{color: 'red'}}>{errorMessage}</Text>
            ))}

          <TextInput
            placeholder="Password"
            name="password"
            secureTextEntry={true}
            value={password}
            placeholder="Password"
            placeholderTextColor="lightgrey"
            style={styles.inputfield}
            onChangeText={e => setPassword(e)}
          />

          {isFieldInError('password') &&
            getErrorsInField('password').map(errorMessage => (
              <Text style={{color: 'red'}}>{errorMessage}</Text>
            ))}

          <View style={styles.btnView}>
            <Button title="Sign Up" onPress={btnClick} />
          </View>
        </View>
      </View>
    </View>
  );
};
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
  mainheading: {},
  maintext: {
    fontSize: 22,
    fontFamily: 'sans-serif',
  },
  imgview: {},
  imgtag: {
    width: 100,
    height: 100,
    borderRadius: 50,
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
    fontFamily: 'arial',
  },
  btnView: {
    marginTop: 15,
  },
});
export default Signup;
