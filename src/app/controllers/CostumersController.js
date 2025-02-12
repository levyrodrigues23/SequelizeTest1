



let costumers = [
    {
      id: 1,
      name: "João",
      idade: 25,
    },
    {
      id: 2,
      name: "Maria",
      idade: 30,
    },
    {
      id: 3,
      name: "José",
      idade: 35,
    },
  ];

class CustomersController {

 
  //listagem dos costumers
  index(req, res) {
    res.json(costumers);
  }

  //recupera um costumer
  show(req, res) {
    const id = parseInt(req.params.id);
  const costumer = costumers.find((item) => item.id === id);
  const status = customer ? 200 : 404;


  res.status(status).json(costumer);
  }

  //cria um novo costumer
  create(req, res) {
    const { name, idade } = req.body;
  const id = costumers[costumers.length - 1].id + 1;
  const newCostumer = {
    id,
    name,
    idade,
  };

  costumers.push(newCostumer);

  res.status(201).json(newCostumer);
  }

  //atualiza um costumer
  update(req, res) {
    const id = parseInt(req.params.id);
  const { name, idade } = req.body;
  const index = costumers.findIndex((i) => i.id === id);
  const status = index >= 0 ? 200 : 404;
  if (index >= 0) {
    costumers[index] = { id: parseInt(id), name, idade };
  }

  res.status(status).json(costumers[index]);
  }

  //exclui um costumer
  destroy(req, res) {
    const id = parseInt(req.params.id);
    const index = costumers.findIndex((i) => i.id === id);
    const status = index >= 0 ? 200 : 404;
    if (index >= 0) {
      costumers.splice(index, 1);
    }
  
    res.status(status).json("eliminado da face da terra com sucesso");
  }
}

export default  new CustomersController();
