import {View,Text,TextInput,TouchableOpacity,Image,TouchableWithoutFeedback,Keyboard,} from 'react-native';
import React from 'react';
import { image } from '../../../modules/image';
import { styles } from './RegisterStyle';

type Props = {};

const RegisterScreen = (props: Props) => {
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
                    <Text style={{ color: 'white' }}>Register</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default RegisterScreen;
