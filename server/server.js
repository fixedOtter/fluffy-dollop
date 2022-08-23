//
// made by fixedOtter on 23.8.2022
//

const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 6969;

const app = express();

app.use(express.static(path.join(__dirname, '../client/build')));

app.listen(PORT, () => console.log(`i can hear you on port: ${PORT}`));