import React from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView } from 'react-native';
import LoginForm from '../components/forms/LoginForm';

export default class Login extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/alarm-logo.png')}
            style={styles.logo}/>
          <Text style={styles.title}>mt-alarms</Text>
          <Text style={styles.subtitle}>MachineTalkz</Text>
        </View>
        <LoginForm navigation={this.props.navigation}/>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1A31'
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
  logo: {
    width: 75,
    height: 75,
    marginBottom: 10
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1D1A31',
    marginBottom: 5
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'light',
    color: '#1D1A31',
    marginBottom: 15
  }
});
