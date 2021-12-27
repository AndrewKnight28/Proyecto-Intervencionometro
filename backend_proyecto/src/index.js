require('dotenv').config()

const app = require('./app.js');
require('./databse');
const port = app.get('port');

async function main(){
    await app.listen(port);
    console.log(`Server on port ${port}`);
}

main();