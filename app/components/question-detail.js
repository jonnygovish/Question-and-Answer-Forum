import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

    upVote(answer){
      this.sendAction('upVote', answer);
    },
    downVote(answer){
      this.sendAction('downVote', answer);
    },
    delete(question) {
      if(confirm('ARe you sure you can live with the guilt of deleting me?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
