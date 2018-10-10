"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Zero_1 = require("./Zero");
var Succrec_1 = require("./Succrec");
var ZeroRec = /** @class */ (function (_super) {
    __extends(ZeroRec, _super);
    function ZeroRec(a) {
        return _super.call(this, 0) || this;
    }
    ZeroRec.prototype.somme = function (x) {
        console.log("somme Z " + this.toString() + " " + x.toString());
        if (x.estNul()) {
            return this;
        }
        else {
            return this.creerSuccesseur(this.somme(x.predecesseur()));
        }
    };
    ZeroRec.prototype.creerNatAvecValeur = function (val) {
        return Succrec_1.SuccRec.FAB.creerNatAvecValeur(val);
    };
    ZeroRec.prototype.creerZero = function () {
        return new ZeroRec(0);
    };
    ZeroRec.prototype.creerSuccesseur = function (predecesseur) {
        return Succrec_1.SuccRec.FAB.creerSuccesseur(predecesseur);
    };
    ZeroRec.prototype.creerNatAvecRepresentation = function (repDecimale) {
        return Succrec_1.SuccRec.FAB.creerNatAvecRepresentation(repDecimale);
    };
    ZeroRec.FAB = new ZeroRec(0);
    return ZeroRec;
}(Zero_1.Zero));
exports.ZeroRec = ZeroRec;
