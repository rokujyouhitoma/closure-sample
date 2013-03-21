goog.require('r12a.Person');
goog.require('r12a.ui.Input');

goog.global['initLoad'] = function() {

  //
  new r12a.Person('rokujyouhitoma', 27);

  var input = new r12a.ui.Input();
  input.decorate(goog.dom.getElement('input'));

};

