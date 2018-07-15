'use strict'

module.exports = (typeof window.self === 'object' && window.self.self === window.self && window.self) ||
  (typeof global === 'object' && global.global === global && global) ||
  this

  // this part from orginal package google-maps-React
