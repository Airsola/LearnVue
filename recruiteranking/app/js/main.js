$ = jQuery = require('jquery');
foundation = require('foundation-sites');
Vue = require("vue");
require('../css/app.scss');

test = new Vue({
  el: '#test',
  data: {
  username: "Luke Skywalker"
  },
  methods: {
  changeName: function(name){
    this.username=name;
  },
  defaultUser: function(){
    this.changeName("Luke Skywalker");
  }
  }
});