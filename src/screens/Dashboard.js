import React from 'react';
import { StyleSheet, View, Text, ScrollView, StatusBar,TouchableOpacity } from 'react-native';
import AlarmCountBox from '../components/dashboard/AlarmCountBox';
import AlarmFeedBox from '../components/dashboard/AlarmFeedBox';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Dashboard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <View style={styles.dashboardHeader}>
          <TouchableOpacity style={styles.settings}
            onPress={() => this.props.navigation.navigate('Settings')}>
            <Icon name="bars" size={18} color="#fff"/>
          </TouchableOpacity>
          <View style={styles.titleWrapper}>
            <Text style={styles.dashboardTitle}>Alarm Dashboard</Text>
          </View>
          <TouchableOpacity style={styles.signout}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Icon name="power-off" size={18} color="#fff"/>
          </TouchableOpacity>
        </View>
        <View style={styles.statusBar}>
          <AlarmCountBox alarmPriority="CRITICAL"/>
          <AlarmCountBox alarmPriority="HIGH"/>
          <AlarmCountBox alarmPriority="MEDIUM"/>
          <AlarmCountBox alarmPriority="LOW"/>
          <AlarmCountBox alarmPriority="WARNING"/>
        </View>
        <View style={styles.dashboardSubHeader}>
          <Text style={styles.dashboardSubtitle}>Alarm Feeds</Text>
        </View>
        <ScrollView styles={styles.feedWrapper}>
          <AlarmFeedBox alarmPriority="CRITICAL"/>
          <AlarmFeedBox alarmPriority="HIGH"/>
          <AlarmFeedBox alarmPriority="MEDIUM"/>
          <AlarmFeedBox alarmPriority="LOW"/>
          <AlarmFeedBox alarmPriority="WARNING"/>
          <AlarmFeedBox alarmPriority="MEDIUM"/>
          <AlarmFeedBox alarmPriority="MEDIUM"/>
          <AlarmFeedBox alarmPriority="HIGH"/>
          <AlarmFeedBox alarmPriority="HIGH"/>
          <AlarmFeedBox alarmPriority="MEDIUM"/>
        </ScrollView>
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
  dashboardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },
  statusBar: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dashboardSubtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5
  },
  dashboardSubHeader: {
    padding: 20
  },
  feedWrapper: {
    paddingHorizontal: 20
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
  }
});
