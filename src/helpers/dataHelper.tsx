export const pizzaData = [
  {
    name: "Pizza Grande",
    values: [
      {
        "id": 1,
        "name": "Pizza 8 pedaços",
        "description": "Pizza 4 pedaços, serve até 4 pessoas",
        "image": "https://img.freepik.com/fotos-premium/apetitosa-pizza-de-queijo-cortada-em-pedacos_321388-9.jpg",
        "flavors": [{ id: 1, "name": "Mussarela", "price": 49.29 }, { id: 2, "name": "Calabresa", "price": 45.00 }]
      },
      {
        "id": 2,
        "name": "Pizza 8 pedaços - 2 Sabores",
        "description": "Pizza 8 pedaços, serve até 8 pessoas",
        "image": "https://s3.us-west-2.amazonaws.com/whatsmenu/production/yakipizza/covers/baa240/dois-sabores-5.jpeg",
        "flavors": [{ id: 1, "name": "Mussarela", "price": 49.00 }, { id: 2, "name": "Calabresa", "price": 42.00 }]
      }
    ]
  }, {
    name: "Pizza Broto",
    values: [
      {
        "id": 3,
        "name": "Pizza 4 pedaços",
        "description": "Pizza 4 pedaços, serve até 4 pessoas",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPtq0M5uCHvJslhqcwkKEfCCqG6zaix-aPJg&usqp=CAU",
        "flavors": [{ id: 1, "name": "Mussarela", "price": 39.00 }, { id: 2, "name": "Calabresa", "price": 32.00 }]
      },
      {
        "id": 4,
        "name": "Pizza 4 pedaços - 2 Sabores",
        "description": "Pizza 4 pedaços, serve até 4 pessoas",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPtq0M5uCHvJslhqcwkKEfCCqG6zaix-aPJg&usqp=CAU",
        "flavors": [{ id: 1, "name": "Mussarela", "price": 39.00 }, { id: 2, "name": "Calabresa", "price": 32.00 }]
      }
    ]
  }, {
    name: "Sobremesa",
    values: [
      {
        "id": 5,
        "name": "Sorvete",
        "description": "Sorvete cremoso",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPtq0M5uCHvJslhqcwkKEfCCqG6zaix-aPJg&usqp=CAU",
        "flavors": [{ id: 1, "name": "Morango", "price": 19.00 }, { id: 2, "name": "Chocolate", "price": 20.00 }]
      },
      {
        "id": 6,
        "name": "MilkShake",
        "description": "MilkShake delicioso",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPtq0M5uCHvJslhqcwkKEfCCqG6zaix-aPJg&usqp=CAU",
        "flavors": [{ id: 1, "name": "Morango", "price": 15.00 }, { id: 2, "name": "Chocolate", "price": 16.00 }]
      }
    ]
  }, {
    name: "Bebidas",
    values: [
      {
        "id": 7,
        "name": "Coca-cola",
        "description": "Refrigerante cola",
        "image": "https://tfdfn2.vtexassets.com/arquivos/ids/232056/refrigerante-cocacola-lata-350ml.png?v=638229690732930000",
        "flavors": [{ id: 1, "name": "Lata", "price": 8.00 }, { id: 2, "name": "Garrafa 2L", "price": 16.00 }]
      },
      {
        "id": 8,
        "name": "Guarana",
        "description": "Refrigerante de guaraná",
        "image": "https://static.paodeacucar.com/img/uploads/1/465/19514465.jpg",
        "flavors": [{ id: 1, "name": "Lata", "price": 8.00 }, { id: 2, "name": "Garrafa 2L", "price": 16.00 }]
      }
    ]
  }];

export const bagList: any = []

const STATUS = ["Aguardando confirmação", "Pedido confirmado", "Em preparação", "Motoboy a caminho", "Entregue"]
const pedido = {
  id: 0,
  datetime: '17/02/2024 - 15:00',
  product: {},
  valor: 15.00,
  status: STATUS[0]
}
