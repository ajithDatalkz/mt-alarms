import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';

export default class AlarmCountBox extends React.Component {

  constructor(props){
    super(props);
    this.getPriorityColor = this.getPriorityColor.bind(this);
    this.getAlarmBoxStyle = this.getAlarmBoxStyle.bind(this);
  }

  getAlarmBoxStyle(alarmPriority){
    return {
      padding: 10,
      borderRadius: 4,
      width: 70,
      backgroundColor: this.getPriorityColor(alarmPriority)
   }
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
      <View style={this.getAlarmBoxStyle(this.props.alarmPriority)}>
        <Text style={styles.alarmCount}>{this.props.alarmCount}</Text>
        <Text style={styles.alarmPriority}>{this.props.alarmPriority}</Text>
      </View>
    );
  }
}

AlarmCountBox.PropTypes = {
  alarmCount:PropTypes.string.isRequired,
  alarmPriority:PropTypes.oneOf(['CRITICAL', 'HIGH', 'MEDIUM', 'LOW', 'WARNING'])
}

AlarmCountBox.defaultProps = {
  alarmCount: "00",
  alarmPriority: "HIGH"
}

const styles = StyleSheet.create({
  alarmCount: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },
  alarmPriority: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'light',
    color: '#fff',
    paddingTop: 5
  }
});
