export class Product {

    constructor(productID:number,    name: string ,   price:number,   image: string,  description: string,  category: string) {
      this.productID=productID;
      this.image = image;
      this.name=name;
      this.price=price;
      this.description = description;
      this.category = category;
  
    }
  
    productID:number ;
    name: string ;
    price:number;
    image: string;
    description: string;
    category: string;
  
  }