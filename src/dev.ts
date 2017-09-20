// 

import clc = require('cli-color')
import _ = require('lodash')
import moment = require('moment')



require('debug-trace')()
declare global { interface Console { format(c) } }
console.format = function(c) {
	let stack = new Error().stack.toString()
	stack = stack.replace(/^([^\n]*?\n){2}((.|\n)*)$/gmi, '$2').split('\n')[2].trim()
	let fullpath = stack.split('/').pop()
	if (!fullpath) fullpath = c.filename + ':' + c.getLineNumber();
	let file = fullpath.split('.ts:')[0]
	let i = (fullpath.indexOf('.ts:') == -1) ? 0 : 1
	let line = fullpath.split('.ts:')[i].split(':')[0]
	let header = '[' + clc.bold(file) + ':' + line + ']'
	let format = 'hh:mm:ss:SSS'
	let time = moment(Date.now()).format(format)
	let cString: string
	if (c.method == 'log') {
		cString = clc.blue(time) + header
	} else if (c.method == 'info') {
		cString = clc.green(time) + header
	} else if (c.method == 'warn') {
		cString = clc.yellowBright('=============================== WARN ================================\n') + clc.yellow(time) + header
	} else if (c.method == 'error') {
		cString = clc.redBright('=============================== ERROR ================================\n') + clc.red(time) + header
	}
	return '\n \n' + clc.underline(cString) + '\n'
}

process.on('uncaughtException', function(error) {
	console.error(clc.bold.redBright('/*==========  UNCAUGHT EXCEPTION  ==========*/'))
	console.error('uncaughtException > error', error)
})

process.on('unhandledRejection', function(error) {
	console.error(clc.bold.redBright('/*==========  UNHANDLED REJECTION  ==========*/'))
	console.error('unhandledRejection > error', error)
})





