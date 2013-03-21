goog.provide('r12a.Person');



/**
 * Creates a new Person.
 * @param {string} name name.
 * @param {number} age age.
 * @constructor
 */
r12a.Person = function(name, age) {

  /**
   * @type {string}
   * @private
   */
  this.name_ = name;
  this.age_ = Number(age);
};
