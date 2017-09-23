import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(question) {
      if(confirm('ARe you sure you can live with the guilt of deleting me?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
