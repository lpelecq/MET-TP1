"use strict";
exports.__esModule = true;
var Succ_1 = require("./Succ");
var Zero = /** @class */ (function () {
    function Zero(a) {
    }
    Zero.prototype.estNul = function () {
        return true;
    };
    Zero.prototype.predecesseur = function () {
        throw new Error("Unsupported Operation.");
    };
    Zero.prototype.taille = function () {
        return 1;
    };
    Zero.prototype.chiffre = function (i) {
        return 0;
    };
    Zero.prototype.getZero = function () {
        return this;
    };
    Zero.prototype.produit = function (x) {
        return this;
    };
    Zero.prototype.getUn = function () {
        return this.creerNatAvecValeur(1);
    };
    Zero.prototype.modulo = function (x) {
        return this;
    };
    Zero.prototype.div = function (x) {
        return this;
    };
    Zero.prototype.creerNatAvecValeur = function (val) {
        return Succ_1.Succ.FAB.creerNatAvecValeur(val);
    };
    Zero.prototype.creerZero = function () {
        return new Zero(0);
    };
    Zero.prototype.creerSuccesseur = function (predecesseur) {
        return Succ_1.Succ.FAB.creerSuccesseur(predecesseur);
    };
    Zero.prototype.creerNatAvecRepresentation = function (repDecimale) {
        return Succ_1.Succ.FAB.creerNatAvecRepresentation(repDecimale);
    };
    Zero.prototype.val = function () {
        return 0;
    };
    Zero.prototype.somme = function (x) {
        return x;
    };
    Zero.prototype.toString = function () {
        return "" + this.val().toString();
    };
    Zero.prototype.equals = function (x) {
        if (!(x instanceof Zero))
            return false;
        var n = x;
        return this.val() == n.val();
    };
    Zero.FAB = new Zero(0);
    return Zero;
}());
exports.Zero = Zero;
