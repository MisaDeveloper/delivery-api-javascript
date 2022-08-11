//Import Modules
    const express = require('express');
    const cors = require('cors');
    const bodyParser = require('body-parser');
    const router = require('./routes/routes');

    const app = express();

//Settings
    //Cors
        app.use(cors());

    //Body-parser
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json());

//Routes
    app.use('', router);

//Init Server
    //Config Port
        const PORT = 8081;
    
    //Start Node Server
        app.listen(PORT, () => {
            console.log(`Server's runing on the port ${PORT}`);
        });