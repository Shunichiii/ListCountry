import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React from 'react';
import {styles} from './LoginStyle';
import {image} from '../../../modules/image';

type Props = {};

const LoginScreen = (props: Props) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Image source={image.home} style={styles.img} />
        <TextInput
          keyboardType="email-address"
          style={styles.textInput}
          placeholder="Email Address"
        />
        <TextInput
          keyboardType="number-pad"
          style={styles.textInput}
          placeholder="Password"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={{color: 'white'}}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.label, {justifyContent: 'flex-end'}]}>
          <Text
            style={{
              color: 'blue',
              padding: 5,
              textDecorationLine: 'underline',
            }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.label,
            {justifyContent: 'center', alignItems: 'center'},
          ]}>
          <Image source={image.google} style={{width: 30, height: 30}} />
          <Text style={styles.signIn}>Sign in with Google</Text>
        </TouchableOpacity>

        <View style={styles.label}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.register}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
