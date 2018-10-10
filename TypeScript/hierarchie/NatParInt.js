"use strict";
exports.__esModule = true;
var NatParInt = /** @class */ (function () {
    function NatParInt(val) {
        if (val < 0) {
            throw new Error("Val negative");
        }
        this.value = val;
    }
    NatParInt.prototype.somme = function (x) {
        return this.creerNatAvecValeur(this.val() + x.val());
    };
    NatParInt.prototype.getZero = function () {
        return this.creerZero();
    };
    NatParInt.prototype.produit = function (x) {
        return this.creerNatAvecValeur(this.val() * x.val());
    };
    NatParInt.prototype.val = function () {
        return this.value;
    };
    NatParInt.prototype.estNul = function () {
        return this.val() == 0;
    };
    NatParInt.prototype.predecesseur = function () {
        if (this.val() < 1) {
            throw new Error("Val < 1");
        }
        return this.creerNatAvecValeur(this.val() - 1);
    };
    NatParInt.prototype.getUn = function () {
        return this.creerNatAvecValeur(1);
    };
    NatParInt.prototype.taille = function () {
        return this.val.toString().length;
    };
    NatParInt.prototype.div = function (x) {
        return this.creerNatAvecValeur(Math.floor(this.val() / x.val()));
    };
    NatParInt.prototype.chiffre = function (i) {
        return Math.floor(this.val() / (Math.pow(10, i)) % 10);
    };
    NatParInt.prototype.creerNatAvecValeur = function (val) {
        return new NatParInt(val);
    };
    NatParInt.prototype.creerZero = function () {
        return new NatParInt(0);
    };
    NatParInt.prototype.creerSuccesseur = function (predecesseur) {
        return new NatParInt(predecesseur.val() + 1);
    };
    NatParInt.prototype.creerNatAvecRepresentation = function (repDecimale) {
        return new NatParInt(Number(repDecimale));
    };
    NatParInt.prototype.toString = function () {
        return "" + this.val().toString();
    };
    NatParInt.prototype.equals = function (o) {
        if (!(o instanceof NatParInt))
            return false;
        var n = o;
        return this.val() === n.val();
    };
    NatParInt.prototype.modulo = function (x) {
        return this.creerNatAvecValeur(this.val() % x.val());
    };
    NatParInt.FAB = new NatParInt(0);
    return NatParInt;
}());
exports.NatParInt = NatParInt;
