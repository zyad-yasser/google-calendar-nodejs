require('dotenv').config();
const { PORT: port } = process.env;
const express = require('express');
const app = express();
const { router } = require('./routes');
const { calendarRouter } = require('./routes/calendar');

app.use(router);
app.use(calendarRouter);

app.listen(port, () => {
  console.log(`App listening at port: ${port}`);
});