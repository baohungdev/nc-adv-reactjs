//LAB 1
// Create 5 variables which use
// 5 types ( string, number
// Boolean, array, object )
// - Try to make a type’s error
// --------------------------------------------- //
// Declares
const firstName: string = "Duong Bao Hung";
let numberOfCartItems: number = 5;
let toogleHidden: boolean = true;
let listUsers: string[];
let User: {
  id: number;
  fullName: string;
};
listUsers = ["18520061", "18520062", "18520063"];
User = {
  id: 100,
  fullName: "John Smith",
};
// Errors
// let Error1: string = 1;
// let Users: number[] = ["1", "3"];
// --------------------------------------------- //
//LAB 2
// - Create a class which uses
// interface
// - Try to make a type’s error
interface IproductItem {
  idCode: number;
  productName: string;
  stores: object[];
  checkPrice: () => number;
  regularPrice?: number;
}
class productItem implements IproductItem {
  idCode = 0;
  productName = "";
  stores = [
    {
      storeName: "",
      regularPrice: 0,
    },
    {
      storeName: "",
      regularPrice: 0,
    },
    {
      storeName: "",
      regularPrice: 0,
    },
  ];
  checkPrice = () => {
    const prices: number[] = this.stores.map((store) => store.regularPrice);
    return Math.min(...prices);
  };
}
const prM = new productItem();
prM.idCode = 18520061;
prM.productName = "IP11PROMAX";
prM.stores[0].storeName = "Di Dong Viet";
prM.stores[0].regularPrice = 29990000;
prM.stores[1].storeName = "CellPhones";
prM.stores[1].regularPrice = 30000000;
prM.stores[2].storeName = "TGDD";
prM.stores[2].regularPrice = 31000000;

//--------------------------------------------- //
//LAB 3
// Create a function which uses
// interface
// - Try to make a type’s error
function takeLatestPrice(productItem: IproductItem): number {
  return productItem.checkPrice();
}

const latestPrice: number = takeLatestPrice(prM);

console.log(latestPrice);
console.log("hello");
console.log("hello");
//--------------------------------------------- //
