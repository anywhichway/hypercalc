;(function( console ) {

  'use strict';

  var timers;

  // do we have access to the console?
  if ( !console ) {
    return;
  }


  // table of current timers
  timers = {};


  /**
   * Stores current time in milliseconds
   * in the timers map
   *
   * @param {string} timer name
   * @return {void}
   */
  console.time = function( name ) {
    if ( name ) {
      timers[ name ] = Date.now();
    }
  };


  /**
   * Finds difference between when this method
   * was called and when the respective time method
   * was called, then logs out the difference
   * and deletes the original record
   *
   * @param {string} timer name
   * @return {void}
   */
  console.timeEnd = function( name ) {
    if ( timers[ name ] ) {
      console.log( name + ': ' + (Date.now() - timers[ name ]) + 'ms' );
      delete timers[ name ];
    }
  };


}( console ));
