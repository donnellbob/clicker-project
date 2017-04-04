import Ember from 'ember';

export default Ember.Component.extend({
	actions : {
		deleteRecord (listElement) {
			listElement.destroyRecord();
		},
		editRecord(listElement) {
			console.log("Edit Record!");
		},
		addRecord() {
			console.log(this.store.findAll('todo-elements'));
			const todo = this.store.createRecord('todo-elements', {
        	title: "new TITLE!",
        	elements : ["list 1", "list 2", "list 3"]
     		});

			todo.save();
		}
	}
});
