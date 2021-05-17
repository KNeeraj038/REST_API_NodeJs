const express = require('express');

const app = express();

app.use(express.json())

// app.require('./models/courses');
const coursesRouter = require('./routes/courses');
app.use('/api/courses', coursesRouter);

// app.use(require('./routes/courses'));

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Listning on port ${port}`);
});