const CONFIG = require('./config');
const CalendarAPI = require('node-google-calendar');
const calendar = new CalendarAPI(CONFIG); 
 
module.exports.calendar = calendar;