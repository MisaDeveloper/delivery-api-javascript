//Import Models
    const Order = require('../models/Order/Order');

//Control Methods
    //getOrdersById Method
        const getOrdersById = async (req, res) => {

            try {
                const data = await Order.getOrdersById(req.params.orderId);

                if(data) {
                    res.status(201).send(data);
                } else {
                    res.status(404).send({
                        type: 'error',
                        message: 'Pedido não encontrado!'
                    })
                }
            } 
            catch(err) {
                res.status(500).send({
                    type: 'error',
                    message: 'Erro ao recuperar pedido!',
                    error: err
                });
            }
        }

//Export Module
module.exports = {

    getOrdersById

};