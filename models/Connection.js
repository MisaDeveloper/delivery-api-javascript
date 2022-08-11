//Import Modules
    const fs = require('fs/promises');
    
//Define File Name 
    const fileName = __dirname + '/../pedidos.json';

//Connection Methods
    async function read() {
        const data = await fs.readFile(fileName, 'utf-8');
        const orders = JSON.parse(data);

        return orders;
    }

    async function write(data) {
        const content = await JSON.stringify(data, null, 4)
        await fs.writeFile(fileName, content);
    }

//Export Module
    module.exports = {

        read,
        write

    }