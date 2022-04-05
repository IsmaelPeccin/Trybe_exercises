class Client {
  private _name: string;

  constructor( name: string) {
    this._name = name;
  }

  
  public get name() : string {
    return this._name;
  }

  
  public set name(v : string) {
    if (v.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
  }
    this._name = v;
  }
}

class OrderItem {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  
  public get name() : string {
    return this._name;
  }

  
  public set name(v : string) {
    if (v.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }
    this.name = v;
  }

  
  public get price() : number {
    return this._price;
  }
  
  
  public set price(v : number) {
    if (v <= 0) {
      throw new Error('O preço não deve ser menor ou igual a 0');
    }
    this.price = v;
  }
}

class Order {
    private _client: Client;
    private _items: OrderItem[] = [];
    private _paymentMethod: string;
    private _discount: number = 0;

    constructor(client: Client, items: OrderItem[], paymentMethod: string, discount: number) {
      this._client = client;
      this._items = items;
      this._paymentMethod = paymentMethod;
      this._discount = discount;
    }

  
    public get client() : Client {
      return this._client;
    }

    
    public set client(v : Client) {
      this._client = v;
    }

    
    public get items() : OrderItem[] {
      return this._items;
    }

    
    public set items(v : OrderItem[]) {
      if ( v.length === 0) {
        throw new Error('O pedido deve ter pelo meno um item.');
      }
      this._items = v;
    }

  
    public get paymentMethod() : string {
      return this._paymentMethod;
    }
    
    
    public set paymentMethod(v : string) {
      this._paymentMethod = v;
    }

  
    public get discount() : number {
      return this._discount;
    }
  
  
    public set discount(v : number) {
      if (v <= 0) {
        throw new Error('O desconto não deve ser menor ou igual a 0 ')
      }
      this._discount = v;
    }
  
    totalOfOrder(): number {
      return this.items.
        reduce((previousValue, item) => {
          const total = previousValue += item.price;

        return total;
      }, 0)
    }

    totalWithDiscount(): number {
      const total = this.totalOfOrder();
      return (total * (1 -this.discount));
    }
}
