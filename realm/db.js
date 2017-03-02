// @flow
 'use strict';

import realm from './schema'

module.exports = {
    // creates or updates model with data attr
    create: function(model:String, primaryKey:String, data:Object){
      //here primaryKey is the unique value in a model
      let current = realm.objects(model).filtered( String(primaryKey)+'= \"' + data[primaryKey]  + '\"')
      let update = current.length ? true : false
      let writeData
      realm.write(()=>{
        writeData = update ? this._merge(current[0], data, primaryKey) : this._removeObjects(data)
        current = realm.create(model, writeData, update)
        this._addNestedObject(current, data)
      })
      return current
    },

    remove: function(deleteInstance:Object){
      realm.delete(deleteInstance)
    },

    //#Utils method

    /* oldObj gets modified into updated object, values coming as null in target are ignored,
        normal Object.assign overrides the source with the target, irrespective of null values */
    _merge: function(source:Object, target:Object, primaryKey:String){
      for(let i in target){
        if(source.hasOwnProperty(i) && (typeof source[i] != 'object') && i != primaryKey){
          source[i] = target[i] ? target[i] : source[i]
        }
        else if(typeof source[i] == 'object'){
          realm.delete(source[i])
        }
      }
      return source
    },

    _removeObjects: function(object){
      let clone = Object.assign({}, object)
      for(let i in clone){
        if(typeof clone[i] == 'object'){
          delete clone[i]
        }
      }
      return clone
    },

    _addNestedObject: function(source:Object, target:Object){
      for(let i in target){
        if(typeof target[i] == 'object'){
          for(let j in target[i]){
            (eval("source." + i)).push(realm.create((i[0].toUpperCase() + i.slice(1,-1)),target[i][j]))
          }
        }
      }
    }
}