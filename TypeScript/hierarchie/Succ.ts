import { Nat } from "./Nat";
import { NatParInt } from "./NatParInt";
import { FabriqueNaturels } from "./FabriqueNaturels";
import { Zero } from "./Zero";

export class Succ implements Nat{
    
    private _predecesseur:Nat;
    public static FAB:FabriqueNaturels<Nat> = new NatParInt(0);
    
    constructor(predecesseur:Nat){
        this._predecesseur = predecesseur;
    }
    
    val(): number {
        return this._predecesseur.val() + 1;
    }    
    estNul(): boolean {
        return this._predecesseur.val() == 0;
    }
    predecesseur(): Nat {
        return this._predecesseur;
    }
    taille(): number {
        return this.val.toString().length;
    }
    chiffre(i: number): number {
        return Math.floor(this.val()/(Math.pow(10,i))%10);
    }
    somme(x: Nat): Nat {
        return this.creerSuccesseur(this.creerNatAvecValeur(Math.floor(this.val()+x.val()-1)));
    }
    getZero(): Nat {
        return this.creerZero();
    }
    produit(x: Nat): Nat {
        return this.creerNatAvecValeur(Math.floor(this.val()*x.val()));
    }
    getUn(): Nat {
        return this.creerSuccesseur(this.creerZero());
    }
    modulo(x: Nat): Nat {
        return this.creerNatAvecValeur(Math.floor(this.val()% x.val()));
    }
    div(x: Nat): Nat {
        return this.creerNatAvecValeur(Math.floor(this.val() / x.val()));
    }
    creerNatAvecValeur(val: number): Nat {
        if (val < 0){
            throw new Error("Value is negative");
        }
        else if (val == 0){
            return this.creerZero();
        }
        else {
            return this.creerSuccesseur(NatParInt.FAB.creerNatAvecValeur(val-1));
        }

    }

    creerZero(): Nat {
        return Zero.FAB.creerZero();
    }
    creerSuccesseur(pred: Nat): Nat {
        return new Succ(pred);
    }
    creerNatAvecRepresentation(repDecimale: string): Nat {
        
        
        if (repDecimale.length == 0 || Number(repDecimale) < 0){
            throw new Error ("Illegal argument");
        }
        else if (repDecimale === "0"){
            return this.creerZero();
        }
        else{
            Number(repDecimale);
            return this.creerSuccesseur(this.creerNatAvecRepresentation(""+(Number(repDecimale)-1)));
            
        }
        
    }
    equals(x: object): boolean{
		if(!(x instanceof Succ)) 
			return false;
        let n: Nat = x;
		return this.val() == n.val();
    }
    public toString():string{
        return "" + this.val().toString();
    }





}