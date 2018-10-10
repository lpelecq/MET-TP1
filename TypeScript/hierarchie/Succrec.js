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
var Succ_1 = require("./Succ");
var ZeroRec_1 = require("./ZeroRec");
var NatParInt_1 = require("./NatParInt");
var SuccRec = /** @class */ (function (_super) {
    __extends(SuccRec, _super);
    function SuccRec(predecesseur) {
        return _super.call(this, predecesseur) || this;
    }
    SuccRec.prototype.somme = function (x) {
        if (x.estNul()) {
            return this;
        }
        else {
            return this.creerSuccesseur(this.somme(x.predecesseur()));
        }
    };
    SuccRec.prototype.produit = function (x) {
        if (x.estNul()) {
            return SuccRec.FAB.creerZero();
        }
        else {
            if (this.equals(this.getUn())) {
                return x;
            }
            else {
                return this.somme(this.produit(x.predecesseur()));
            }
        }
    };
    SuccRec.prototype.modulo = function (x) {
        var a = this;
        if (a.val() >= x.val()) {
            for (var i = 0; i < x.val(); i++) {
                a = a.predecesseur();
            }
            return a.modulo(x);
        }
        return a;
    };
    SuccRec.prototype.creerZero = function () {
        return ZeroRec_1.ZeroRec.FAB.creerZero();
    };
    SuccRec.prototype.creerSuccesseur = function (predecesseur) {
        return new SuccRec(predecesseur);
    };
    SuccRec.prototype.creerNatAvecRepresentation = function (repDecimale) {
        if (repDecimale.length == 0 || Number(repDecimale) < 0) {
            throw new Error();
        }
        else if (repDecimale === "0") {
            return this.creerZero();
        }
        else {
            return this.creerSuccesseur(this.creerNatAvecRepresentation("" + (Number(repDecimale) - 1)));
        }
    };
    SuccRec.prototype.div = function (x) {
        var a = this;
        if (x.estNul()) {
            return this.creerZero();
        }
        else if (this.equals(x)) {
            return this.creerSuccesseur(this.creerZero());
        }
        else if (this.val() < x.val()) {
            return this.creerZero();
        }
        else {
            for (var i = 0; i < x.val(); i++) {
                a = a.predecesseur();
            }
            return this.getUn().somme(a.div(x));
        }
    };
    SuccRec.prototype.creerNatAvecValeur = function (val) {
        if (val < 0) {
            throw new Error();
        }
        else if (val == 0) {
            return this.creerZero();
        }
        else {
            return this.creerSuccesseur(NatParInt_1.NatParInt.FAB.creerNatAvecValeur(val - 1));
        }
    };
    SuccRec.FAB = new SuccRec(new ZeroRec_1.ZeroRec(0));
    return SuccRec;
}(Succ_1.Succ));
exports.SuccRec = SuccRec;
