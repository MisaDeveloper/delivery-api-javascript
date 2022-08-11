//Import Models
    const Order = require('../models/Order/Order');

//Control Methods
    //changeOrderState Method
        const changeOrderState = async (req, res) => {

            const { orderId, orderState } = req.params;

            try {

                const response = await Order.changeOrderState(orderId, orderState)

                if(response == 'allowed') {
                    res.status(201).send({
                        type: 'success',
                        message: 'Estado do pedido alterado!'
                    });
                }
                else if(response == 'not allowed') {
                    res.status(405).send({
                        type: 'error',
                        message: 'Não permitido alterar para esse estado!'
                    });
                }
                else {
                    res.status(404).send({
                        type: 'error',
                        message: 'Id do pedido não encontrado!'
                    });
                }

            } 
            catch(err) {
                res.status(500).send({
                    type: 'error',
                    message: 'Erro ao alterar estado do pedido!',
                    error: err
                });
            }

        }

//Export Module
module.exports = {

    changeOrderState

};