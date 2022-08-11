//Import Models
    const Order = require('../models/Order/Order');

//Control Methods
    //createOrder Method
        const createOrder = async (req, res) => {
            const { cliente, produto, valor} = req.body;

            if(cliente && produto && valor) {

                try {
                    await Order.createOrder(cliente, produto, valor);
                    res.status(201).send({
                        type: 'success',
                        message: 'Pedido criado com sucesso!'
                    });
                } 
                catch(err) {
                    res.status(500).send({
                        type: 'error',
                        message: 'Erro ao criar pedido!',
                        error: err
                    });
                }

            } 
            else {
                res.status(400).send({
                    type: 'error',
                    message: 'Formulário de criação incompleto!'
                });
            }
        }

//Export Module
    module.exports = {

        createOrder

    };