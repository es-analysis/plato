

import clapi from 'clapi';

import analyzeFile from './commands/analyze-file';

var app = clapi.init();

app.use(require('clapi-minimist').commands);
// load config (liftoff?)


app.command('analyze-file', analyzeFile);
// 
// insertdb
// dumpdb
// generate

