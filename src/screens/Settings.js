import React from 'react';
import { StyleSheet, View, Text, StatusBar,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CheckBox } from 'react-native-elements';

export default class Settings extends React.Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(){

  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <View style={styles.dashboardHeader}>
          <TouchableOpacity style={styles.settings}
            onPress={() => this.props.navigation.navigate('Dashboard')}>
            <Icon name="chevron-left" size={18} color="#fff"/>
          </TouchableOpacity>
          <View style={styles.titleWrapper}>
            <Text style={styles.settingsTitle}>Settings</Text>
          </View>
          <TouchableOpacity style={styles.signout}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Icon name="power-off" size={18} color="#fff"/>
          </TouchableOpacity>
        </View>
        <View style={styles.settingsOptions}>
          <CheckBox
            left
            title='CRITICAL'
            checkedIcon='check'
            uncheckedIcon='times'
            checkedColor='green'
            uncheckedColor='#ff0000'
            checked={true}
            containerStyle={styles.checkBoxContainer}
            textStyle={styles.checkLabel}/>
          <CheckBox
            left
            title='HIGH'
            checkedIcon='check'
            uncheckedIcon='times'
            checkedColor='green'
            uncheckedColor='#ff0000'
            checked={true}
            containerStyle={styles.checkBoxContainer}
            textStyle={styles.checkLabel}/>
          <CheckBox
            left
            title='MEDIUM'
            checkedIcon='check'
            uncheckedIcon='times'
            checkedColor='green'
            uncheckedColor='#ff0000'
            checked={false}
            containerStyle={styles.checkBoxContainer}
            textStyle={styles.checkLabel}/>
          <CheckBox
            left
            title='LOW'
            checkedIcon='check'
            uncheckedIcon='times'
            checkedColor='green'
            uncheckedColor='#ff0000'
            checked={false}
            containerStyle={styles.checkBoxContainer}
            textStyle={styles.checkLabel}/>
          <CheckBox
            left
            title='WARNING'
            checkedIcon='check'
            uncheckedIcon='times'
            checkedColor='green'
            uncheckedColor='#ff0000'
            checked={false}
            containerStyle={styles.checkBoxContainer}
            textStyle={styles.checkLabel}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1A31'
  },
  dashboardHeader: {
    padding: 20,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center'
  },
  settingsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },
  signout: {
    alignItems: 'flex-end',
    flex: 4
  },
  settings: {
    alignItems: 'flex-start',
    flex: 1
  },
  titleWrapper: {
    flex: 6,
    alignItems: 'flex-start'
  },
  settingsOptions: {
    paddingHorizontal: 20
  },
  checkBoxContainer: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 4,
    borderWidth: 0

  },
  checkLabel: {
    color: '#fff',
    border: 0
  }
});
