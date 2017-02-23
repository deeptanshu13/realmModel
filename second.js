/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';


import realm from './realm/schema'
import db from './realm/db'

class Second extends Component {
  componentWillMount() {
    db.create('Model','id', {id: 8, name: 'yolo7', description: 'rUK'});
    db.create('Model','id', {id: 9, name: 'yolo11', description: 'rUk jaa na'});
    db.create('Model','id', {id: 10, name: 'yolo32', description: 'ruk bc!'});

    //var product = Product.findOne();
    //db.create('Association', 'id', { id: 6, name: 'dsds' })
    //db.insertList({id: 2, name: 'assdssd', associations: {}}, 'associations', realm.objects('Association'))
  }

  componentDidMount() {
    //console.log("path", realm.path)
    //(realm.objects('Model')[0]).set('description', 'ds bro')
    let first = realm.objects('Model')[4]
    first.set(realm, 'description', ' badal diya!')
    // console.log(realm.toString(), typeof realm)
    // console.log("updated obj - >", first.get())
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>JmD</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = Second;
