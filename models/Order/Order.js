//Import Database Connection
    const Connection = require('../Connection');

//Order Methods
    //Get Orders By Id Method --------------------------------------
        async function getOrdersById(orderId) {
            const orders = await Connection.read();

            const filteredOrder = orders.pedidos.find((element) => {
                if(element != null) {
                    return element.id == orderId;
                }
            });

            if(filteredOrder) {
                return filteredOrder;
            } else {
                return false;
            }
        }

    //Create Method -----------------------------------------------------------
        async function createOrder(cliente, produto, valor) {
            const orders = await Connection.read();
            const dataTime = new Date();

            const newOrder = {
                id: orders.pedidos[ orders.pedidos.length - 1 ].id + 1,
                cliente: cliente,
                produto: produto,
                valor: valor,
                entregue: false,
                estado: 'RECEIVED',
                timestamp: dataTime.toISOString()
            }

            orders.pedidos.push(newOrder);
            await Connection.write(orders);
        }

    //Update Method -----------------------------------------------------------
        async function updateOrder(orderId, cliente, produto, valor) {
            const orders = await Connection.read();

            const index = orders.pedidos.findIndex((element) => {
                if(element != null) {
                    return element.id == orderId;
                }
            });

            if(index != -1) {

                orders.pedidos[index].cliente = cliente;
                orders.pedidos[index].produto = produto;
                orders.pedidos[index].valor = valor;

                await Connection.write(orders);
                return true;

            } else {
                return false;
            }
        }

    //Delete Method -----------------------------------------------------------
        async function deleteOrder(orderId) {
            const orders = await Connection.read();

            const index = orders.pedidos.findIndex((element) => {
                if(element != null) {
                    return element.id == orderId;
                }
            });

            if(index != -1) {
                orders.pedidos.splice(index, 1);
                await Connection.write(orders);
                return true;
            } else {
                return false;
            }
        }

    //Change State Method -----------------------------------------------------
        async function changeOrderState(orderId, orderState) {
            const orders = await Connection.read();
            orderState = orderState.toUpperCase();
            const states = {
                RECEIVED: 'RECEIVED',
                CONFIRMED: 'CONFIRMED',
                DISPATCHED: 'DISPATCHED',
                DELIVERED: 'DELIVERED',
                CANCELED: 'CANCELED'
            }

            const index = orders.pedidos.findIndex((element) => {
                if(element != null) {
                    return element.id == orderId;
                }
            });

            if(index != -1) {
                if(
                    orders.pedidos[index].estado != states.DELIVERED &&
                    orders.pedidos[index].estado != states.CANCELED
                ) {
                    if(orderState == states.CANCELED) {
                        orders.pedidos[index].estado = states.CANCELED;
                        await Connection.write(orders);
                        return 'allowed';
                    }

                    else if(
                        orderState == states.CONFIRMED &&
                        orders.pedidos[index].estado == states.RECEIVED
                    ) {
                        orders.pedidos[index].estado = states.CONFIRMED;
                        await Connection.write(orders);
                        return 'allowed';
                    }

                    else if(
                        orderState == states.DISPATCHED &&
                        orders.pedidos[index].estado == states.CONFIRMED
                    ) {
                        orders.pedidos[index].estado = states.DISPATCHED;
                        await Connection.write(orders);
                        return 'allowed';
                    }

                    else if(
                        orderState == states.DELIVERED &&
                        orders.pedidos[index].estado == states.DISPATCHED
                    ) {
                        orders.pedidos[index].estado = states.DELIVERED;
                        orders.pedidos[index].entregue = true;
                        await Connection.write(orders);
                        return 'allowed';
                    }

                    else {
                        return 'not allowed';
                    }
                }
                else {
                    return 'not allowed';
                }

            } else {
                return false;
            }
        }

//Export Module
    module.exports = {

        getOrdersById,
        createOrder,
        deleteOrder,
        updateOrder,
        changeOrderState

    }