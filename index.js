const express = require('express');
const app = express();
const port = 4000;
 
app.get('/', (req, res) => {
  res.send('Hello World!');
});
 
app.listen(process.env.PORT || port, async () => {
    console.log(`Server is running on port ${port}`);
});
