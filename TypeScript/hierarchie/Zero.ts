import { Nat } from "./Nat";
import { NatParInt } from "./NatParInt";
import { FabriqueNaturels } from "./FabriqueNaturels";
import { Succ } from "./Succ";

export class Zero implements Nat{
    
    private a:number;
    public static FAB:FabriqueNaturels<Nat> = new Zero(0); 

    constructor(a: number) {
    }

    estNul(): boolean {
        return true;
    }
    predecesseur(): Nat {
        throw new Error("Unsupported Operation.");
    }
    taille(): number {
        return 1;
    }
    chiffre(i: number): number {
        return 0;
    }
    getZero(): Nat {
        return this;
    }
    produit(x: Nat): Nat {
        return this;
    }
    getUn(): Nat {
        return this.creerNatAvecValeur(1);
    }
    modulo(x: Nat): Nat {
        return this;
    }
    div(x: Nat): Nat {
        return this;
    }
    creerNatAvecValeur(val: number): Nat {
        return Succ.FAB.creerNatAvecValeur(val);
    }
    creerZero(): Nat {
        return new Zero(0);
    }
    creerSuccesseur(predecesseur: Nat): Nat {
        return Succ.FAB.creerSuccesseur(predecesseur);
    }
    creerNatAvecRepresentation(repDecimale: string): Nat {
        return Succ.FAB.creerNatAvecRepresentation(repDecimale);
    }
    
    public val() : number{
        return 0;
    }

    public somme(x:Nat):Nat{
        return x;
    }
    public toString():string{
        return "" + this.val().toString();
    }

    public equals(x: object): boolean{
		if(!(x instanceof Zero)) 
			return false;
        let n: Nat = x;
		return this.val() == n.val();
	}




}