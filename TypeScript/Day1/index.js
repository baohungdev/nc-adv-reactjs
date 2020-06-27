//LAB 1
// Create 5 variables which use
// 5 types ( string, number
// Boolean, array, object )
// - Try to make a type’s error
// --------------------------------------------- //
// Declares
var firstName = "Duong Bao Hung";
var numberOfCartItems = 5;
var toogleHidden = true;
var listUsers;
var User;
listUsers = ["18520061", "18520062", "18520063"];
User = {
    id: 100,
    fullName: "John Smith"
};
var productItem = /** @class */ (function () {
    function productItem() {
        var _this = this;
        this.idCode = 0;
        this.productName = "";
        this.stores = [
            {
                storeName: "",
                regularPrice: 0
            },
            {
                storeName: "",
                regularPrice: 0
            },
            {
                storeName: "",
                regularPrice: 0
            },
        ];
        this.checkPrice = function () {
            var prices = _this.stores.map(function (store) { return store.regularPrice; });
            return Math.min.apply(Math, prices);
        };
    }
    return productItem;
}());
var prM = new productItem();
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
function takeLatestPrice(productItem) {
    return productItem.checkPrice();
}
var latestPrice = takeLatestPrice(prM);
console.log(latestPrice);
console.log("hello");
console.log("hello");
//--------------------------------------------- //
