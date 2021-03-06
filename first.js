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

class First extends Component {
  componentWillMount() {
    //var product = Product.findOne();
    //db.create('Association', 'id', { id: 6, name: 'dsds' })
    //db.insertList({id: 2, name: 'assdssd', associations: {}}, 'associations', realm.objects('Association'))
  }


  create = ()=> {
    db.create('Model','id', {id: 10, name: 'yolo@10', description: 'Abhi deta hu bc!',
     collections: [{name: 'old hari', id: 1121}, {name: 'blue eyes', id: 1143}],
     newCollections: [{new_name: 'halua', id: 117}, {new_name: ' poori', id: 120}]}
    );
  }


  flush = () => {
    realm.write(()=>{
      realm.deleteAll()
    })
  }

  componentDidMount() {
    //console.log("path", realm.path)
    //(realm.objects('Model')[0]).set('description', 'ds bro')
    //let first = realm.objects('Model')[0]
    //first.set(realm, 'description', ' badal diya!')
    // console.log(realm.toString(), typeof realm)
    // console.log("updated obj - >", first.get())
  }

  navigate =() => { 
    this.props.navigator.push({
      id: 'Second',
      name: 'Second'
    })
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome DS
        </Text>
        <TouchableOpacity onPress={this.navigate}>
          <Text style={styles.instructions}>
            Double tap R on your keyboard to reload,{'\n'}
            Shake or press menu button for dev menu
          </Text>
        </TouchableOpacity>
         <TouchableOpacity onPress={this.flush}>
          <Text style={styles.instructions}>
            FLUSH IT
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.create}>
          <Text style={styles.instructions}>
            db create
          </Text>
        </TouchableOpacity>
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

module.exports = First;
