interface IProducts {
    name: string;
    price: number;
}

class Products implements IProducts {
    name;
    price;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

interface ITransaction {
    products: { product: IProducts, qty: number }[];
}

class Transaction implements ITransaction {
    #total;
    products;

    constructor() {
        this.#total = 0;
        this.products = [];
    }

    addToCart(product: IProducts, qty: number) {
        this.products.push({ product, qty });
        this.#total += product.price * qty;
    }

    showTotal() {
        console.log(this.#total);
        return this.#total;
    }

    checkout() {
        const dataCheckout = {
            total: this.#total,
            products: [...this.products],
        };

        this.#total = 0;
        this.products = [];
        
        return dataCheckout;
    }
}


const product1 = new Products('Kue 1', 1000);
const product2 = new Products('Kue 2', 2000);
const product3 = new Products('Kue 3', 3000);
console.log(product1)
const trx = new Transaction();

trx.addToCart(product1, 3); 
trx.addToCart(product2, 5);
trx.addToCart(product3, 2);

const transactionData = trx.checkout();
console.log(transactionData);


