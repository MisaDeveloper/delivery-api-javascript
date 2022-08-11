<div>
    <h1>
        Delivery API
    </h1>
    <p>
        Uma API de pedidos de delivery, com possibilidade de consulta, cadastro, edição, exclusão e alteração do estado do pedido.
    </p>
</div>

<div>
    <h2>
        Ferramentas utilizadas:
    </h2>
    <ul>
        <li>Node.js</li>
        <li>Express</li>
        <li>Docker</li>
    </u>
</div>

<hr>
<br>

<div>
    <h2>
        Instruções para o uso:
    </h2>
    <h3>
        Pré-requisitos:
    </h3>
    <ul>
        <li>Node.js</li>
        <li>Docker</li>
    </u>
</div>

### Passo a passo:
* Clone o repositório github para a sua máquina e abra o CMD no local onde o repositório foi clonado.
* Com o docker rodando, execute o comando ```docker build .``` para gerar a imagem docker.
* Após a imagem ter sido gerada, execute o comando ```docker image ls``` e copie o ID da imagem que acabou de ser gerada.
* Execute o comando ```docker run -p 8081:8081 <imageID>``` substituindo o espaço ```<imageID>``` pelo ID da imagem que foi copiado.
* Prontinho, a aplicação está rodando.

<hr>
<br>

## Rotas
* Endpoint: ```/get-order/:orderId```
* Methods: ```GET```
* Body: ```None```
<p>Retorna um pedido com base em seu ID.</p>

<hr>

* Endpoint: ```/create```
* Methods: ```POST```
* Body: ```{ cliente: str, produto: str, valor: float }```
<p>Cadastra um novo pedido com estado RECEIVED.</p>

<hr>

* Endpoint: ```/update/:orderId```
* Methods: ```PUT```
* Body: ```{ cliente: str, produto: str, valor: float }```
<p>Atualiza os dados de um pedido existente com base em seu ID.</p>

<hr>

* Endpoint: ```/delete/:orderId```
* Methods: ```DELETE```
* Body: ```None```
<p>Exclui um pedido com base em seu ID.</p>

<hr>

* Endpoint: ```/change-state/:orderId/:orderState```
* Methods: ```PUT```
* Body: ```None```
* Estados possíveis: ```RECEIVED,
CONFIRMED, DISPATCHED, DELIVERED e CANCELED.```
<p>Altera o estado de um pedido, estando de acordo com as regras de negócio da aplicação, com base em seu ID. </p>
