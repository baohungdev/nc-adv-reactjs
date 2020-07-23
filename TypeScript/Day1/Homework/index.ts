//HomeWork
// -Create 3 classes with inheritance which uses interface
// -Create 3 functions with callback hell ( 3x ) which use interface
interface IProduct {
  ProductID: string;
  ProductLink: string;
  getProductInfo(): object;
}

class Product implements IProduct {
  ProductID: string;
  ProductLink: string;
  constructor(ProductID: string, ProductLink: string) {
    this.ProductID = ProductID;
    this.ProductLink = ProductLink;
  }
  getProductInfo(): object {
    return {
      ProductLink: this.ProductLink,
      ProductID: this.ProductID,
    };
  }
}

interface ICellPhone {
  price: number;
  getPhoneInfo(): object;
  showInfo(): void;
}

class CellPhone extends Product implements ICellPhone {
  price: number;
  constructor(price: number, ProductID: string, ProductLink: string) {
    super(ProductID, ProductLink);
    this.price = price;
  }
  getPhoneInfo() {
    const { ProductID, ProductLink, price } = this;
    return {
      ProductID,
      ProductLink,
      price,
    };
  }
  showInfo() {
    const { ProductID, ProductLink, price } = this.getPhoneInfo();
    console.log(`ID: ${ProductID}`);
    console.log(`Link: ${ProductLink}`);
    console.log(`Link: ${price}`);
  }
}
interface ICellPhoneList {
  list: CellPhone[];
  showListInfo(): void;
}

class CellPhoneList implements ICellPhoneList {
  list = [
    new CellPhone(29990000, "IP11", "https://www.apple.com/iphone-11/"),
    new CellPhone(
      34900000,
      "IP11PRO",
      "https://www.apple.com/shop/buy-iphone/iphone-11-pro"
    ),
  ];
  showListInfo() {
    console.log(`List has ${this.list.length} products`);
    this.list.map((product) => product.showInfo());
  }
}
const phones = new CellPhoneList();
phones.showListInfo();
//Callbackhell
const FinalPrice = (
  list: number[],
  callback: (list: number[]) => void
): void => {
  callback(list.map((price) => price + 1000));
};
const withVAT = (list: number[], callback: (list: number[]) => void): void => {
  callback(list.map((price) => price + price / 10));
};
const getPhonePrices = (list: number[]) => {
  list.forEach((price) => console.log(price));
};
const priceList: number[] = phones.list.map((phone) => phone.price);
FinalPrice(priceList, (priceLisT) => withVAT(priceList, getPhonePrices));
