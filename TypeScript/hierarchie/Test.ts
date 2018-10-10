import { FabriqueNaturels } from "./FabriqueNaturels";
import { Nat } from "./Nat";
import { NatParInt } from "./NatParInt";
import { NatDecimal } from "./NatDecimal";
import { Zero } from "./Zero";
import { Succ } from "./Succ";
import { SuccRec } from "./Succrec";
import { ZeroRec } from "./ZeroRec";

export class Test{

    public static testFab(fab : FabriqueNaturels<Nat>){
         var z:Nat = fab.creerZero();
         console.log("0 ? " + z);
         console.log(z.equals(z.getZero()));
         

         var un:Nat = fab.creerSuccesseur(z);
         console.log("1 ? " + un);
         console.log("true ? " + un.equals(un.getUn()));

         var pred:Nat = un.predecesseur();
         console.log("0 ? " + pred);

         var cinq:Nat = fab.creerNatAvecValeur(5);
         console.log("5 ? " + cinq);

         var six:Nat = fab.creerNatAvecValeur(6);
         console.log("6 ? " + six);
        
         console.log("11 ? " + cinq.somme(six));
         console.log("30 ? " + cinq.produit(six));
         
         console.log("5 ? " + fab.creerNatAvecValeur(33).div(six));
         console.log("3 ? " + fab.creerNatAvecValeur(33).modulo(six));
         
        

    }
    public static main(): number {
        console.log("######## Test NatParInt");
        this.testFab(NatParInt.FAB);
        console.log("######## Test Zero");
        //console.log(Zero.FAB);
        console.log("######## Test Succ");
        this.testFab(Succ.FAB);
        console.log("######## Test NatDecimal");
        this.testFab(NatDecimal.FAB);
        console.log("######## Test ZeroRec");
        //console.log(ZeroRec.FAB);
        console.log("######## Test SuccRec");
        this.testFab(SuccRec.FAB);

        return 0;
    }
    

}
Test.main();