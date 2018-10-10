import { Nat } from "./Nat";
import { FabriqueNaturels } from "./FabriqueNaturels";

export class NatParInt implements Nat{
    private value:number;
    public static FAB:FabriqueNaturels<Nat> = new NatParInt(0); 


    constructor(val: number) {
        if (val < 0){
            throw new Error("Val negative");
        }
        this.value = val;
    }
    public somme(x:Nat): Nat {
        return this.creerNatAvecValeur(this.val() +x.val() );
    } 

    public getZero(): Nat{
        return this.creerZero();
    }

    public produit(x:Nat): Nat {
        return this.creerNatAvecValeur(this.val()*x.val());
    }
    

    public val() : number{
        return this.value;
    }

    public estNul(): boolean {
        return this.val()==0;
    }

    public predecesseur():Nat{
        if (this.val() < 1) {
			throw new Error("Val < 1");
        }
        return this.creerNatAvecValeur(this.val()-1);
    }
    public getUn():Nat{
        return this.creerNatAvecValeur(1);
    }

    public taille():number {
        return this.val.toString().length;
    }
    public div(x:Nat):Nat{
        return this.creerNatAvecValeur(Math.floor(this.val() / x.val()));
    }
    public chiffre(i:number):number{
        return Math.floor(this.val()/(Math.pow(10,i))%10);
    }

    public creerNatAvecValeur(val:number):Nat{
        return new NatParInt(val);
    }
    public creerZero():Nat{
        return new NatParInt(0);
    }
    
   
    public creerSuccesseur(predecesseur:Nat):Nat{
        return new NatParInt(predecesseur.val() + 1) ;
    }
    public creerNatAvecRepresentation(repDecimale : string): Nat{
        return new NatParInt(Number(repDecimale));
    }
    public toString():string{
        return "" + this.val().toString();
    }

    public equals(o: object): boolean{		
        if(!(o instanceof NatParInt)) 
            return false;
        let n: Nat = o;
		return this.val() === n.val();		
	}


    public modulo(x:Nat):Nat{
        return this.creerNatAvecValeur(this.val()% x.val());
    }

 

    








}