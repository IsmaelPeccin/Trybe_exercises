const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  //1.Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const deliveryPerson = order.order.delivery.deliveryPerson; 
    const entrega = order.name;
    const telefone = order.phoneNumber;
    const adress = order.address.street;
    const number = order.address.number;
    const ap = order.address.apartment;

    console.log(`Olá ${deliveryPerson} entrega para: ${entrega}, Telefone: ${telefone}, R. ${adress}, Nº ${number}, AP: ${ap}`); 
  }
  
  customerInfo(order);

  //2.Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
  //Modifique o nome da pessoa compradora.
  //Modifique o valor total da compra para R$ 50,00.
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    order.name = 'Luiz Silva';
    order.payment.total = 50;
    const pizza = Object.keys(order.order.pizza);
    const coke = Object.values(order.order.drinks.coke);

    console.log(`Olá ${order.name}, o total do seu pedido de ${pizza[0]}, ${pizza[1]} e ${coke[0]} é R$ ${order.payment.total}`);
  }
  orderModifier(order);

