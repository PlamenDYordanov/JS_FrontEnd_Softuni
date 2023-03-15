function classStorage() {
    class Storage {
        constructor(capacity) {
            this.capacity = capacity;
            this.storage = [{
                name: storage.name,
            price: storage.price,
            quantity: storage.quantity,
            }]; // we don't know what will storage so empty []
            this.totalCost = 0; // we know that we will sum so default 0, if multiply 1
        }
    
        addProduct(product) {
            this.storage.push(product);
            this.capacity -= product.quantity;
            this.totalCost += product.quantity * product.price;
        }
    
        getProducts() {
            let output = [];
            for (let i = 0; i < this.storage.length; i++) {
                output.push(JSON.stringify(this.storage[i]));
            }
            return output.join('\n');
        }
    }}
