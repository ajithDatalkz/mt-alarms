import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default class LoginForm extends React.Component {
  render() {
    return (
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="username"
            placeholderTextColor="rgba(255,255,255,0.4)"/>
          <TextInput
            style={styles.input}
            placeholder="password"
            placeholderTextColor="rgba(255,255,255,0.4)"
            secureTextEntry={true}/>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Dashboard')}
            style={styles.loginBtnContainer}>
            <Text
              style={styles.loginBtn}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.forgetBtnContainer}>
            <Text
              style={styles.forgetBtn}>Forget Password</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 15,
    marginTop: 20
  },
  input: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    paddingVertical:15,
    fontSize: 16,
    fontWeight: 'light',
    paddingHorizontal: 15,
    marginBottom: 10,
    textAlign: 'center',
    color: '#fff',
    borderRadius: 4
  },
  loginBtnContainer: {
    backgroundColor: '#51492D',
    paddingVertical:15,
    borderRadius: 4
  },
  loginBtn: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'light',
    textAlign: 'center'
  },
  forgetBtnContainer: {
    marginTop: 50
  },
  forgetBtn: {
    fontSize: 14,
    fontWeight: 'light',
    color: 'rgba(255,255,255,0.4)',
    textAlign: 'center'
  }
});
