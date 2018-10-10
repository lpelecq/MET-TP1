"use strict";
exports.__esModule = true;
var NatParInt_1 = require("./NatParInt");
var Zero_1 = require("./Zero");
var Succ = /** @class */ (function () {
    function Succ(predecesseur) {
        this._predecesseur = predecesseur;
    }
    Succ.prototype.val = function () {
        return this._predecesseur.val() + 1;
    };
    Succ.prototype.estNul = function () {
        return this._predecesseur.val() == 0;
    };
    Succ.prototype.predecesseur = function () {
        return this._predecesseur;
    };
    Succ.prototype.taille = function () {
        return this.val.toString().length;
    };
    Succ.prototype.chiffre = function (i) {
        return Math.floor(this.val() / (Math.pow(10, i)) % 10);
    };
    Succ.prototype.somme = function (x) {
        return this.creerSuccesseur(this.creerNatAvecValeur(Math.floor(this.val() + x.val() - 1)));
    };
    Succ.prototype.getZero = function () {
        return this.creerZero();
    };
    Succ.prototype.produit = function (x) {
        return this.creerNatAvecValeur(Math.floor(this.val() * x.val()));
    };
    Succ.prototype.getUn = function () {
        return this.creerSuccesseur(this.creerZero());
    };
    Succ.prototype.modulo = function (x) {
        return this.creerNatAvecValeur(Math.floor(this.val() % x.val()));
    };
    Succ.prototype.div = function (x) {
        return this.creerNatAvecValeur(Math.floor(this.val() / x.val()));
    };
    Succ.prototype.creerNatAvecValeur = function (val) {
        if (val < 0) {
            throw new Error("Value is negative");
        }
        else if (val == 0) {
            return this.creerZero();
        }
        else {
            return this.creerSuccesseur(NatParInt_1.NatParInt.FAB.creerNatAvecValeur(val - 1));
        }
    };
    Succ.prototype.creerZero = function () {
        return Zero_1.Zero.FAB.creerZero();
    };
    Succ.prototype.creerSuccesseur = function (pred) {
        return new Succ(pred);
    };
    Succ.prototype.creerNatAvecRepresentation = function (repDecimale) {
        if (repDecimale.length == 0 || Number(repDecimale) < 0) {
            throw new Error("Illegal argument");
        }
        else if (repDecimale === "0") {
            return this.creerZero();
        }
        else {
            Number(repDecimale);
            return this.creerSuccesseur(this.creerNatAvecRepresentation("" + (Number(repDecimale) - 1)));
        }
    };
    Succ.prototype.equals = function (x) {
        if (!(x instanceof Succ))
            return false;
        var n = x;
        return this.val() == n.val();
    };
    Succ.prototype.toString = function () {
        return "" + this.val().toString();
    };
    Succ.FAB = new Succ(new Zero_1.Zero(0));
    return Succ;
}());
exports.Succ = Succ;
