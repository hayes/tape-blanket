#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2))
  , run = require('../lib/index')

run(argv._[0], argv.src || '/lib/')
