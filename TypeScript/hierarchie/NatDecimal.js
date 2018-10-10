"use strict";
exports.__esModule = true;
var NatDecimal = /** @class */ (function () {
    function NatDecimal(rep) {
        this.chiffres = rep;
    }
    NatDecimal.prototype.creerNatAvecValeur = function (val) {
        return this.creerNatAvecRepresentation(val.toLocaleString());
    };
    NatDecimal.prototype.creerNatAvecRepresentation = function (repDecimale) {
        return new NatDecimal(repDecimale);
    };
    NatDecimal.prototype.creerSuccesseur = function (predecesseur) {
        var repSuccesseur = "";
        var retenue = true;
        var val = 0;
        for (var i = 0; i < predecesseur.taille(); i++) {
            val = predecesseur.chiffre(0) + (retenue ? 1 : 0);
            retenue = val > 9;
            repSuccesseur = "" + val % 10 + repSuccesseur;
        }
        repSuccesseur = (retenue ? "1" : "") + repSuccesseur;
        return this.creerNatAvecRepresentation(repSuccesseur);
    };
    NatDecimal.prototype.modulo = function (x) {
        return this.creerNatAvecRepresentation(Math.floor(this.val() % x.val()).toLocaleString());
    };
    NatDecimal.prototype.div = function (x) {
        return this.creerNatAvecRepresentation(Math.floor(this.val() / x.val()).toLocaleString());
    };
    NatDecimal.prototype.getUn = function () {
        return this.creerNatAvecRepresentation("1");
    };
    NatDecimal.prototype.produit = function (x) {
        if (x.val() == 10) {
            return this.creerNatAvecRepresentation(this.chiffres + "0");
        }
        var resultat = this.creerZero();
        for (var i = x.val(); i > 0; i--) {
            resultat = resultat.somme(this);
        }
        return resultat;
    };
    NatDecimal.prototype.creerZero = function () {
        return this.creerNatAvecRepresentation("0");
    };
    NatDecimal.prototype.getZero = function () {
        return this.creerZero();
    };
    NatDecimal.prototype.predecesseur = function () {
        if (this.estNul()) {
            throw new Error();
        }
        var repSuccesseur = [];
        var retenue = true;
        var i = 0;
        if (this.taille() == 1) {
            repSuccesseur.push((this.chiffre(0) - 1).toString());
        }
        else {
            for (i = 0; i < this.taille() - 1; i++) {
                if (retenue) {
                    if (this.chiffre(i) == 0) {
                        repSuccesseur.push("9");
                    }
                    else {
                        retenue = false;
                        repSuccesseur.push((this.chiffre(i) - 1).toString());
                    }
                }
                else {
                    repSuccesseur.push(this.chiffre(i).toString());
                }
            }
            if (retenue) {
                if (this.chiffre(i) == 0) {
                    repSuccesseur.push("9");
                }
                else {
                    retenue = false;
                    if (this.chiffre(i) - 1 != 0) {
                        repSuccesseur.push((this.chiffre(i) - 1).toString());
                    }
                }
            }
            else {
                repSuccesseur.push(this.chiffre(i).toString());
            }
        }
        return this.creerNatAvecRepresentation(repSuccesseur.reverse().join(""));
    };
    NatDecimal.prototype.somme = function (x) {
        var t = this.taille() < x.taille() ? x.taille() : this.taille();
        var rep = [];
        var retenue = 0;
        for (var i = 0; i < t; i++) {
            var chiffre = this.chiffre(i) + x.chiffre(i) + retenue;
            if (chiffre > 9) {
                chiffre = chiffre - 10;
                retenue = 1;
            }
            else {
                retenue = 0;
            }
            rep.push(chiffre.toString());
        }
        if (retenue !== 0) {
            rep.push("1");
        }
        return new NatDecimal(rep.reverse().join(""));
    };
    NatDecimal.prototype.val = function () {
        return Number(this.chiffres);
    };
    NatDecimal.prototype.chiffre = function (i) {
        if (i > this.taille() - 1 || i < 0) {
            return 0;
        }
        return Number(this.chiffres.charAt(this.taille() - 1 - i));
    };
    NatDecimal.prototype.taille = function () {
        return this.chiffres.length;
    };
    NatDecimal.prototype.estNul = function () {
        return this.taille() == 1 && this.chiffre(0) == 0;
    };
    NatDecimal.prototype.equals = function (x) {
        if (!(x instanceof NatDecimal))
            return false;
        var n = x;
        return this.val() == n.val();
    };
    NatDecimal.prototype.toString = function () {
        return this.chiffres;
    };
    NatDecimal.FAB = new NatDecimal("0");
    return NatDecimal;
}());
exports.NatDecimal = NatDecimal;
