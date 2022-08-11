//Import Models
    const Order = require('../models/Order/Order');

//Control Methods
    //updateOrder Method
    const updateOrder = async (req, res) => {
        const { cliente, produto, valor} = req.body;

        if(cliente && produto && valor) {

            try {
                if(await Order.updateOrder(req.params.orderId, cliente, produto, valor)) {
                    res.status(201).send({
                        type: 'success',
                        message: 'Pedido atualizado com sucesso!'
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
                    message: 'Erro ao atualizar pedido!',
                    error: err
                });
            }

        } 
        else {
            res.status(400).send({
                type: 'error',
                message: 'Formulário de edição incompleto!'
            });
        }
    }

//Export Module
module.exports = {

    updateOrder

};