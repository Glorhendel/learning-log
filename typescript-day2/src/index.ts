type ProductStatus = "in-stock" | "out of stock" | "discontinued";
interface Product {
  readonly id: number;
  title: string;
  price: number;
  status: ProductStatus;
  description?: string;
} 
   function printProduct(product: Product) {
        console.log(`Product ID: ${product.id}`);
        console.log(`Title: ${product.title}`);
        console.log(`Price: ${product.price}`);
        console.log(`Status: ${product.status}`);
        if (product.description) {
            console.log(`Description: ${product.description}`);
        }
    }
const product1: Product = {id: 1, title: "The Lord of the Rings", price: 30, status: "in-stock", description: "A fantasy novel by J.R.R. Tolkien"};
const product2: Product = {id: 2, title: "The Hobbit", price: 25, status: "out of stock"};
const product3: Product = {id: 3, title: "The Silmarillion", price: 40, status: "discontinued", description: "A collection of mythopoeic works by J.R.R. Tolkien"};
printProduct(product1);
printProduct(product2);
printProduct(product3);