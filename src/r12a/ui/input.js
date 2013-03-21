goog.provide('r12a.ui.Input');

goog.require('goog.ui.LabelInput');
goog.require('r12a.ui.SlideBar');



/**
 * This creates the input object.
 * @param {string=} opt_label The text to show as the label.
 * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
 * @extends {goog.ui.LabelInput}
 * @constructor
 */
r12a.ui.Input = function(opt_label, opt_domHelper) {
  goog.ui.LabelInput.call(this, opt_label, opt_domHelper);

  /**
   * The text to show as the label.
   * @type {string}
   * @private
   */
  this.label_ = opt_label || '';

  /**
   * The SlideBar.
   * @type {r12a.ui.SlideBar}
   * @private
   */
  this.slidebar_ = new r12a.ui.SlideBar();
};
goog.inherits(r12a.ui.Input, goog.ui.LabelInput);
goog.addSingletonGetter(r12a.ui.Input);


/**
 *
 */
r12a.ui.Input.prototype.handleFocus = function() {
  //console.log("handleFocus");
};


/** @inheritDoc */
r12a.ui.Input.prototype.decorateInternal = function(element) {
  r12a.ui.Input.superClass_.decorateInternal.call(this, element);
  this.attachFocus_(element);
};


/**
 *
 * @param {Element} element element.
 * @private
 */
r12a.ui.Input.prototype.attachFocus_ = function(element) {
  this.getHandler().listen(element,
      goog.events.EventType.FOCUS,
      this.handleFocus, false, this);
};


/**
 *
 *
 * @param {Element} element element.
 * @private
 */
r12a.ui.Input.prototype.dispatchFocus_ = function(element) {
  this.getHandler().unlisten(element,
      goog.events.EventType.FOCUS,
      this.handleFocus, false, this);
};
