"use strict";
exports.__esModule = true;
var NatParInt_1 = require("./NatParInt");
var NatDecimal_1 = require("./NatDecimal");
var Zero_1 = require("./Zero");
var Succ_1 = require("./Succ");
var Succrec_1 = require("./Succrec");
var ZeroRec_1 = require("./ZeroRec");
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.testFab = function (fab) {
        var z = fab.creerZero();
        console.log("0 ? " + z);
        console.log(z.equals(z.getZero()));
        var un = fab.creerSuccesseur(z);
        console.log("1 ? " + un);
        console.log("true ? " + un.equals(un.getUn()));
        var pred = un.predecesseur();
        console.log("0 ? " + pred);
        var cinq = fab.creerNatAvecValeur(5);
        console.log("5 ? " + cinq);
        var six = fab.creerNatAvecValeur(6);
        console.log("6 ? " + six);
        console.log("11 ? " + cinq.somme(six));
        console.log("30 ? " + cinq.produit(six));
        console.log("5 ? " + fab.creerNatAvecValeur(33).div(six));
        console.log("3 ? " + fab.creerNatAvecValeur(33).modulo(six));
    };
    Test.main = function () {
        console.log("######## Test NatParInt");
        this.testFab(NatParInt_1.NatParInt.FAB);
        console.log("######## Test Zero");
        this.testFab(Zero_1.Zero.FAB);
        console.log("######## Test Succ");
        this.testFab(Succ_1.Succ.FAB);
        console.log("######## Test NatDecimal");
        this.testFab(NatDecimal_1.NatDecimal.FAB);
        console.log("######## Test ZeroRec");
        this.testFab(ZeroRec_1.ZeroRec.FAB);
        console.log("######## Test SuccRec");
        this.testFab(Succrec_1.SuccRec.FAB);
        return 0;
    };
    return Test;
}());
exports.Test = Test;
Test.main();
