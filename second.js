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
  Navigator,
  TouchableOpacity
} from 'react-native';


import realm from './realm/schema'
import db from './realm/db'

class Second extends Component {
  componentWillMount() {
    // db.create('Model','id', {id: 8, name: 'yolo7', description: 'rUK'});
    // db.create('Model','id', {id: 9, name: 'yolo11', description: 'rUk jaa na'});
    // db.create('Model','id', {id: 10, name: 'yolo32', description: 'ruk bc!'});

    //let first = realm.objects('Model')[0]
    //first.set({description: 'dns BADLUNA'})

    //first.set({newCollections: [{new_name: 'new mas', id: 1}, {new_name: 'endura nash', id: 2}], description: 'changed again'})
    //var product = Product.findOne();
    //db.create('Association', 'id', { id: 6, name: 'dsds' })
    //db.insertList({id: 2, name: 'assdssd', associations: {}}, 'associations', realm.objects('Association'))
  }

  display =() => {
    let model = realm.objects('Model')
    model[0].set({ description: 'BADALA PUR!', collections: [{name: 'MAHARAJ', id: 121}], newCollections: [{new_name: 'MAHARAJ WHITELINE', id: 1212}]})
    //console.log("!@@!", realm.objects('NewCollection'))
    //console.log("!@@!", realm.objects('Collection'))
    //console.log("path", realm.path)
    //(realm.objects('Model')[0]).set('description', 'ds bro')
    // console.log(realm.toString(), typeof realm)
  }

  flush = () => {
    realm.write(()=>{
      realm.deleteAll()
    })
  }

  displayModel = () => {
    let model = realm.objects('Model')
    console.log(model)
    //let new_collection = realm.objects('NewCollection')
    
  }

  show = () => {
    let collection = realm.objects('Collection')
    let new_collection = realm.objects('NewCollection')
    console.log(collection[0].set({name: 'MAINE BADAL LIYA'})) 
    console.log(new_collection[0].set({new_name: 'MAINE BHI BADAL LIYA CHOTEEE'})) 
  }


  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress = {this.show}><Text>SHOW</Text></TouchableOpacity>
        <TouchableOpacity onPress = {this.displayModel}><Text>MODEL</Text></TouchableOpacity>
        <TouchableOpacity onPress = {this.display}><Text>JmD</Text></TouchableOpacity>
        <TouchableOpacity onPress = {this.flush}><Text>Destroy</Text></TouchableOpacity>
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
