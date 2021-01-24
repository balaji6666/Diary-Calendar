import React, { Component } from 'react';
import {AppRegistry, StyleSheet, View} from 'react-native';
// import {SingleDatepicker} from 'react-native-range-datepicker';


import SingleDatepicker from './src/index';

export default class App extends Component {

    render(){
      return (
        <View style={styles.container}>
        <SingleDatepicker
        confirm={date => {
        console.log(date)
    }}


		initialMonth={"20"}	
    maxMonth={3000}
      />
        </View>
      );
    }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
  }
});
