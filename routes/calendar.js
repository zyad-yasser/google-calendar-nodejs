const express = require('express');
const router = express.Router();
const { calendar } = require('../modules/calendar');

router.get('/calendar', async (req, res) => {
    const params = {};
    try {
        const events = await calendar.Events.list('primary', params, {});
        res.json(events);
    } catch (error) {
        res.json({
            message: "Error happened",
            error
        });
    }
});

router.get('/calendar/watch', async (req, res) => {
    const params = {};
    try {
        const watcher = await calendar.Events.watch("primary", params, {});
        res.json(watcher);
    } catch (error) {
        res.json({
            message: "Error happened",
            error
        });
    }
});

router.get('/calendar/event/add', async (req, res) => {
    const event = {
		'start': {
			'dateTime': '2020-08-10T07:15:00+00:00',
		},
		'end': {
			'dateTime': '2020-08-10T07:16:00+00:00',
		},
		'location': 'anywhere',
		'summary': 'campaign',
		'status': 'confirmed',
		'description': 'some text',
		'colorId': 1
    };
    
    const optionalQueryParams = {
		sendNotifications: true
	};

    try {
        const resp = await calendar.Events.insert('primary', event, optionalQueryParams)
        res.json(resp);
    } catch (error) {
        console.log(error);
        res.json({
            message: "Error happened",
            error
        });
    }
});

module.exports.calendarRouter = router;