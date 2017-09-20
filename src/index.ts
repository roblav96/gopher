// 

import eyes = require('eyes')
const eopts = (eyes as any).defaults as eyes.EyesOptions
eopts.maxLength = 65536
import clc = require('cli-color')
import _ = require('lodash')
import moment = require('moment')
import axios from 'axios'
// import puppeteer from 'puppeteer'
import puppeteer = require('puppeteer')

import './dev'



let browser: puppeteer.Browser
let page: puppeteer.Page
async function launch() {
	if (browser) return Promise.resolve();
	browser = await puppeteer.launch({
		headless: false,
		executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
		args: ['--user-data-dir'],
	})
	page = await browser.newPage()
}



Promise.all([
	launch(),
	axios.get('https://venmo.com/api/v5/public '),
]).then(function(resolved) {
	let response = resolved[1].data as VenmoPublicResponse
	let item = response.data[0]
	console.info('item >')
	eyes.inspect(item)
	return scrapeItem(item)

}).catch(function(error) {
	console.error('launch > error', error)
})



async function scrapeItem(item: VenmoItem) {
	page.goto('https://www.facebook.com')

}










