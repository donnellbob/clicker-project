import Ember from 'ember';

export default Ember.Controller.extend({
	listItems : ["" , ""],
	showAddForm : true, 
	editingRecord : true,
	actions : {
		toggleAddForm() {
			this.toggleProperty('showAddForm');
		},
		toggleEdit(){
			this.toggleProperty('editingRecord');
		},
		addNewListItem () {
			let list = this.get('listItems')
			list.pushObject("");
			console.log(list);
		},
		deleteRecord (listElement) {
			listElement.destroyRecord();
		},
		editRecord(listElement) {
			console.log("Edit Records");
			// listElement.data.elements[0] = "asdas d";
			console.log(listElement);
			listElement.save();
		},
		addRecord() {
			console.log(this.store.findAll('todo-elements'));
			const todo = this.store.createRecord('todo-elements', {
	    	title: "new TITLE!",
	    	elements : ["list 1", "list 2", "list 3"]
	 		});
			this.toggleProperty('showAddForm');
			todo.save();
		}
	}
});
