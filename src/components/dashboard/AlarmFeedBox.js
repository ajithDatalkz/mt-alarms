import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class AlarmFeedBox extends React.Component {

  constructor(props){
    super(props);
    this.getPriorityColor = this.getPriorityColor.bind(this);
  }

  getPriorityColor(alarmPriority) {
    switch (alarmPriority) {
      case 'CRITICAL': return ("#ff0000");
      case 'WARNING': return ("#f39c12");
      case 'MEDIUM': return ("#d35400");
      case 'LOW': return ("#3498db");
      default : return ("#e74c3c");
    }
  }

  render() {
    return (
      <View style={styles.alarmFeedBox}>
        <View style={styles.alarmHeader}>
          <Text style={styles.alarmTitle}>
            {this.props.alarmTitle}
          </Text>
          <View style={styles.alarmPriority}>
            <Icon name="bell" size={14} color={this.getPriorityColor(this.props.alarmPriority)}/>
          </View>
        </View>
        <View style={styles.alarmBody}>
          <View style={styles.iconContainer}>
            <Icon name="clock-o" size={14} color="#ccc"/>
          </View>
          <Text style={styles.alarmTime}>
            {this.props.alarmTime}
          </Text>
        </View>
        <View style={styles.alarmBody}>
          <View style={styles.iconContainer}>
            <Icon name="envelope-o" size={14} color="#ccc"/>
          </View>
          <Text style={styles.alarmMessage}>
            {this.props.alarmMessage}
          </Text>
        </View>
        <View style={styles.alarmBody}>
          <View style={styles.iconContainer}>
            <Icon name="tasks" size={14} color="#ccc"/>
          </View>
          <Text style={styles.alarmValue}>
            {this.props.alarmValue}
          </Text>
        </View>
      </View>
    );
  }
}

AlarmFeedBox.PropTypes = {
  alarmTitle:PropTypes.string.isRequired,
  alarmTime:PropTypes.string.isRequired,
  alarmMessage:PropTypes.string.isRequired,
  alarmValue:PropTypes.string.isRequired,
  alarmPriority:PropTypes.oneOf(['CRITICAL', 'HIGH', 'MEDIUM', 'LOW', 'WARNING'])
}

AlarmFeedBox.defaultProps = {
  alarmTitle: "Alarm Name",
  alarmTime: "dd-mon-yyyy, hh:mm:ss PM",
  alarmMessage: "Alarm Message",
  alarmValue: "Alarm Value",
  alarmPriority: "HIGH"
}

const styles = StyleSheet.create({
  alarmFeedBox: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 4
  },
  alarmTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1
  },
  alarmTime: {
    fontSize: 16,
    fontWeight: 'light',
    color: '#fff',
    paddingLeft: 10
  },
  alarmValue: {
    fontSize: 16,
    fontWeight: 'light',
    color: '#fff',
    paddingLeft: 10
  },
  alarmMessage: {
    fontSize: 16,
    fontWeight: 'light',
    color: '#fff',
    paddingLeft: 10,
  },
  iconContainer: {
    width: 20,
    opacity: .5
  },
  alarmHeader: {
    flexDirection: 'row',
    paddingBottom: 10,
    alignItems: 'center',
  },
  alarmBody: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
  },
  alarmPriority: {
    alignItems: 'flex-end',
    flex: 1
  }
});
