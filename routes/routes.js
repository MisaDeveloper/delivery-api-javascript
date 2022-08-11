//Import Modules
    const express = require('express');
    const router = express.Router();

//Controller Modules
    const GetOrdersController = require('../controllers/GetOrdersController');
    const CreateController = require('../controllers/CreateController');
    const UpdateController = require('../controllers/UpdateController');
    const DeleteController = require('../controllers/DeleteController');
    const ChangeStateController = require('../controllers/ChangeStateController');

//Define Routes
    router.get('/get-order/:orderId', GetOrdersController.getOrdersById);
    router.post('/create', CreateController.createOrder);
    router.put('/update/:orderId', UpdateController.updateOrder);
    router.delete('/delete/:orderId', DeleteController.deleteOrder);
    router.put('/change-state/:orderId/:orderState', ChangeStateController.changeOrderState);

//Export Module
    module.exports = router;