import Realm from 'realm'

class Model extends Realm.Object {}
Model.schema = {
	name: 'Model',
	primaryKey: 'id',
	properties: {
		id: 'int',
		name: 'string',
		description: 'string'
	}
}


Model.prototype.get = function(key=null){
	return key == null ? this : this[key]
}

Model.prototype.set = function(realm, key, value) {
	console.dir(realm);
	console.log("Inside schema proto def")
	realm.write(()=>{
		this[key] = value
	})
	return this[key]
}

export default new Realm({schema: [Model], schemaVersion: 2});
//export default realm1
