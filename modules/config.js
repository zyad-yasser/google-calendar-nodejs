const { KEY, SERVICE_ACCT_ID } = process.env;
const key = require(KEY).private_key;
const CALENDAR_ID = {
  'primary': 'primary',
};
const TIMEZONE = 'UTC+02:00';

module.exports.key = key;
module.exports.serviceAcctId = SERVICE_ACCT_ID;
module.exports.calendarId = CALENDAR_ID;
module.exports.timezone = TIMEZONE;