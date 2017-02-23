// @flow
 'use strict';

import realm from './schema'

module.exports = {
    // creates or updates model with data attr
    create: function(model:String, primaryKey:String, data:Object){
      console.dir(realm,{depth:null});
      console.log("In db/create")
      //here primaryKey is the unique value in a model
      let current = realm.objects(model).filtered( String(primaryKey)+'= \"' + data[primaryKey]  + '\"')
      let update = current.length ? true : false
      let writeData
      realm.write(()=>{
        writeData = update ? this.merge(current[0], data) : data
        current = realm.create(model, writeData, update)
      })
      return current
    },

    remove: function(deleteInstance:Object){
      realm.delete(deleteInstance)
    },

    insertList: function(model:Object, property:String, array:Array<string> ){
      realm.write(()=>{
        //model[property].push(array)
      })
    },

    //#Utils method

    /* oldObj gets modified into updated object, values coming as null in target are ignored,
        normal Object.assign overrides the source with the target, irrespective of null values */
    merge: function(source:Object, target:Object){
      for(let i in target){
        if(source.hasOwnProperty(i)){
          source[i] = target[i] ? target[i] : source[i]
        }
      }
      return source
    }
}