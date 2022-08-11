//Import Models
    const Order = require('../models/Order/Order');

//Control Methods
    //deleteOrder Method
        const deleteOrder = async (req, res) => {

            try {
                if(await Order.deleteOrder(req.params.orderId)) {
                    res.status(201).send({
                        type: 'success',
                        message: 'Pedido deletado com sucesso!'
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
                    message: 'Erro ao deletar pedido!',
                    error: err
                });
            }

        }

//Export Module
module.exports = {

    deleteOrder

};