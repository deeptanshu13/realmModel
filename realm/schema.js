import Realm from 'realm'
import db from './db'

class Model extends Realm.Object {}
Model.schema = {
	name: 'Model',
	primaryKey: 'id',
	properties: {
		id: 'int',
		name: 'string',
		description: 'string',
		collections: {type: 'list', objectType: 'Collection'},
		newCollections: {type: 'list', objectType: 'NewCollection'}
	}
}

class Collection extends Realm.Object {}
Collection.schema = {
	name: 'Collection',
	primaryKey: 'id',
	properties: {
		id: 'int',
		name: 'string'
	}
}

class NewCollection extends Realm.Object {}
NewCollection.schema = {
	name: 'NewCollection',
	primaryKey: 'id',
	properties: {
		id: 'int',
		new_name: 'string'
	}
}

let schemaArr = '[Model, Collection, NewCollection]'

const realm = new Realm({schema: eval(schemaArr) , schemaVersion: 5});
export default realm

var get = function(key=null){
	return key == null ? this : this[key]
}

var set = function(newObject, overwriteNested=false) {
	return merge(this, newObject)

	function merge(source:Object, target:Object){
	  for(let i in target){
	  	//console.log("target ", target[i], source[i])
	    if((source.hasOwnProperty(i)) && i != 'id'){  
	      //Excluding ID, presence of id key creates a new model with that key
	      if(typeof source[i] != 'object'){
	      	realm.write(()=>{
		      	source[i] = target[i] ? target[i] : source[i]
	      	})
	      }
			  else {
			  	if(overwriteNested){
			  		db.remove(source[i])
			  	}
			  	for(let j in target[i]){
			  		let newNestedObj = db.create((i[0].toUpperCase() + i.slice(1,-1)), 'id', target[i][j])
			  		realm.write(()=>{
			  			source[i].push(newNestedObj)
			  		})
			  	}
			  }
	    }
	  }
		return source
	}
}

schemaArr = schemaArr.slice(1,-1).split(',')

for(let iter in schemaArr ){
	eval(schemaArr[iter].trim()+'.prototype.set='+set)
	eval(schemaArr[iter].trim()+'.prototype.get='+get)
}


