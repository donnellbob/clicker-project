import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		console.log(this.store.findAll('todo-elements'))
    	return this.store.findAll('todo-elements');
  	}
});
