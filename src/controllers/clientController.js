// Aqui no controller é feito toda a lógica para ser enviada até o Route.
const clientes = [
    {'id':1, "name":"Victor"},
    {'id':2, "name":"Douglas"},
    {'id':3, "name":"Raphael"},
    {'id':4, "name":"Ana"},
];

getClients = (req, res) => {
    res.status(200).send(clientes);
};

getById = (req, res) => {
    let id = req.params.id;
    const cliente = clientes.find((item) => item.id === Number(id));
    return (cliente) ? res.status(200).send(cliente) : res.status(400).send("Nenhum cliente encontrado");
};

createClient = (req, res) => {
    const cliente = req.body;
    clientes.push(cliente);
    res.status(201).send(cliente);
}

updateCliente = (req, res)=>{
    const id = req.param.id;
    let indice = findClientIndex(id);

    clientes[indice] = req.body;
    res.status(201).send("Cliente atualizado");
}

findClientIndex = (id) => {
    const ind = clientes.findIndex((i)=>i.id === Number(id));
    return ind;
}

deleteCliente = (req, res) => {
    const id = req.param.id;
    let indice = findeClientIndex(id);

    clientes.splice(indice, 1);
    res.status(200).send(`O usuário de id ${id} foi excluído.`);
}

module.exports = {getClients, getById, createClient, updateCliente, deleteCliente};