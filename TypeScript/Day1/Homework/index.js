var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(ProductID, ProductLink) {
        this.ProductID = ProductID;
        this.ProductLink = ProductLink;
    }
    Product.prototype.getProductInfo = function () {
        return {
            ProductLink: this.ProductLink,
            ProductID: this.ProductID
        };
    };
    return Product;
}());
var CellPhone = /** @class */ (function (_super) {
    __extends(CellPhone, _super);
    function CellPhone(price, ProductID, ProductLink) {
        var _this = _super.call(this, ProductID, ProductLink) || this;
        _this.price = price;
        return _this;
    }
    CellPhone.prototype.getPhoneInfo = function () {
        var _a = this, ProductID = _a.ProductID, ProductLink = _a.ProductLink, price = _a.price;
        return {
            ProductID: ProductID,
            ProductLink: ProductLink,
            price: price
        };
    };
    CellPhone.prototype.showInfo = function () {
        var _a = this.getPhoneInfo(), ProductID = _a.ProductID, ProductLink = _a.ProductLink, price = _a.price;
        console.log("ID: " + ProductID);
        console.log("Link: " + ProductLink);
        console.log("Link: " + price);
    };
    return CellPhone;
}(Product));
var CellPhoneList = /** @class */ (function () {
    function CellPhoneList() {
        this.list = [
            new CellPhone(29990000, "IP11", "https://www.apple.com/iphone-11/"),
            new CellPhone(34900000, "IP11PRO", "https://www.apple.com/shop/buy-iphone/iphone-11-pro"),
        ];
    }
    CellPhoneList.prototype.showListInfo = function () {
        console.log("List has " + this.list.length + " products");
        this.list.map(function (product) { return product.showInfo(); });
    };
    return CellPhoneList;
}());
var phones = new CellPhoneList();
phones.showListInfo();
//Callbackhell
var FinalPrice = function (list, callback) {
    callback(list.map(function (price) { return price + 1000; }));
};
var withVAT = function (list, callback) {
    callback(list.map(function (price) { return price + price / 10; }));
};
var getPhonePrices = function (list) {
    list.forEach(function (price) { return console.log(price); });
};
var priceList = phones.list.map(function (phone) { return phone.price; });
FinalPrice(priceList, function (priceLisT) { return withVAT(priceList, getPhonePrices); });
