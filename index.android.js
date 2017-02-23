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

var First = require('./first')
var Second = require('./second')

class realmModel extends Component {
  // componentWillMount() {
  //   db.create('Model','id', {id: 5, name: 'yolo', description: 'Abhi deta hu bc!'});
  //   db.create('Model','id', {id: 6, name: 'yolo1', description: 'diya na!'});
  //   db.create('Model','id', {id: 7, name: 'yolo2', description: 'kuch bhi'});

  //   //var product = Product.findOne();
  //   //db.create('Association', 'id', { id: 6, name: 'dsds' })
  //   //db.insertList({id: 2, name: 'assdssd', associations: {}}, 'associations', realm.objects('Association'))
  // }

  // componentDidMount() {
  //   //console.log("path", realm.path)
  //   //(realm.objects('Model')[0]).set('description', 'ds bro')
  //   let first = realm.objects('Model')[0]
  //   first.set(realm, 'description', ' badal diya!')
  //   // console.log(realm.toString(), typeof realm)
  //   // console.log("updated obj - >", first.get())
  // }

  render() {
    return (
      <Navigator
        ref={(navigator) => this.navigator = navigator}
        initialRoute={{id: 'First', name: 'First' ,passProps: {}}}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route, routeStack) => Navigator.SceneConfigs.FadeAndroid}
      />
    );
  }


  renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'First') {
      return (
        <First
          navigator={navigator}
          {...route.passProps}
        />
      );
    }
    if (routeId === 'Second') {
      return (
        <Second
          navigator={navigator}
          {...route.passProps}
        />
      );
    }
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

AppRegistry.registerComponent('realmModel', () => realmModel);
