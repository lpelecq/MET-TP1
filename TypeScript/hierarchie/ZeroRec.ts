import { Nat } from "./Nat";
import { NatParInt } from "./NatParInt";
import { FabriqueNaturels } from "./FabriqueNaturels";
import { Zero } from "./Zero";
import { SuccRec } from "./Succrec";

export class ZeroRec extends Zero{
    public static FAB:FabriqueNaturels<Nat> = new ZeroRec(0);

    constructor(a: number) {
        super(0);
    }

    somme(x:Nat):Nat{
		console.log("somme Z " + this.toString() + " " + x.toString());
        if (x.estNul()){
            return this;
        } else {
            return this.creerSuccesseur(this.somme(x.predecesseur()));
        }
        
    }

    creerNatAvecValeur(val:number):Nat{
        return SuccRec.FAB.creerNatAvecValeur(val);
    }
    creerZero():Nat{
        return new ZeroRec(0);
    }
    creerSuccesseur(predecesseur:Nat):Nat{
        return SuccRec.FAB.creerSuccesseur(predecesseur);
    }
    creerNatAvecRepresentation(repDecimale):Nat{
        return SuccRec.FAB.creerNatAvecRepresentation(repDecimale);
    }







}