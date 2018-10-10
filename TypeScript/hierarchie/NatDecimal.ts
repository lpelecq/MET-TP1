import { Nat } from "./Nat";
import { NatParInt } from "./NatParInt";
import { FabriqueNaturels } from "./FabriqueNaturels";
import { Succ } from "./Succ";

export class NatDecimal implements Nat {
	private chiffres : string;
	public static FAB:FabriqueNaturels<Nat> = new NatDecimal("0"); 

    public constructor(rep : string) {
        this.chiffres = rep;
    }

    public creerNatAvecValeur(val : number) : Nat {
		return this.creerNatAvecRepresentation(val.toLocaleString());
    }

	public creerNatAvecRepresentation(repDecimale: string) : Nat {//throws IllegalArgumentException {
		return new NatDecimal(repDecimale);
	}

	public creerSuccesseur(predecesseur : Nat) : Nat{
		let repSuccesseur: string = "";
		let retenue : boolean = true;
		let val : number = 0;
		for (let i : number = 0 ; i < predecesseur.taille() ; i++) {
			val = predecesseur.chiffre(0)+(retenue?1:0);
			retenue = val > 9;
			repSuccesseur = "" + val%10 + repSuccesseur;
		}
		repSuccesseur = (retenue?"1":"") + repSuccesseur;
		return this.creerNatAvecRepresentation(repSuccesseur);
	}

    public modulo(x : Nat) : Nat{
		return this.creerNatAvecRepresentation(Math.floor(this.val() % x.val()).toLocaleString());
    }
    
    public div(x : Nat) : Nat{
		return this.creerNatAvecRepresentation(Math.floor(this.val() / x.val()).toLocaleString());
	}

    public getUn() : Nat{
		return this.creerNatAvecRepresentation("1");
	}

    public produit(x : Nat) : Nat {
		if (x.val() == 10) {
			return this.creerNatAvecRepresentation(this.chiffres + "0");
		}
		let resultat : Nat = this.creerZero();
		for (let i : number = x.val() ; i > 0 ; i--) {
			resultat = resultat.somme(this);
		}
		return resultat;
	}

    public creerZero() : Nat{
		return this.creerNatAvecRepresentation("0");
	}

    public getZero(): Nat {
		return this.creerZero();
	}

    public predecesseur() : Nat {
		if (this.estNul()) {
			throw new Error();
        }
        const repSuccesseur : string[] = [];
		let retenue : boolean = true;
		let i : number = 0;
		if (this.taille() == 1) {
			repSuccesseur.push((this.chiffre(0)-1).toString());
		} else {
			for (i = 0 ; i < this.taille()-1 ; i++) {
				if (retenue) {
					if (this.chiffre(i) == 0) {
						repSuccesseur.push("9");
					} else {
						retenue = false;
						repSuccesseur.push((this.chiffre(i)-1).toString());
					}
				} else {
					repSuccesseur.push(this.chiffre(i).toString());
				}
			}
			if (retenue) {
				if (this.chiffre(i) == 0) {
					repSuccesseur.push("9");
				} else {
					retenue = false;
					if (this.chiffre(i)-1 != 0) {
						repSuccesseur.push((this.chiffre(i)-1).toString());
					}
				}
			} else {
				repSuccesseur.push(this.chiffre(i).toString());
			}
		}		
		return this.creerNatAvecRepresentation(repSuccesseur.reverse().join(""));
	}

    public somme(x : Nat): Nat {
        const t = this.taille() < x.taille() ? x.taille() : this.taille();
        const rep: string[] = [];
        let retenue = 0;
        for (let i = 0; i < t; i++) {
            let chiffre = this.chiffre(i) + x.chiffre(i) + retenue;
            if (chiffre > 9) {
                chiffre = chiffre - 10;
                retenue = 1;
            } else {
                retenue = 0;
            }
            rep.push(chiffre.toString());
        }
        if (retenue !== 0) {
            rep.push("1");
		}
        return new NatDecimal(rep.reverse().join(""));
    }

    public val() : number{
		return Number(this.chiffres);
    }
    
    public chiffre(i : number) : number{
		if (i > this.taille()-1 || i < 0) {
			return 0;
		}
        return Number(this.chiffres.charAt(this.taille()-1-i));
	}

    public taille() : number {
        return this.chiffres.length;
	}

    public estNul() : boolean{
		return this.taille() == 1 && this.chiffre(0) == 0;
	}

    public equals(x: object): boolean{
		if(!(x instanceof NatDecimal)) 
			return false;
        let n: Nat = x;
		return this.val() == n.val();
	}

	public toString() : string{
		return this.chiffres;
	}
    
   
}
