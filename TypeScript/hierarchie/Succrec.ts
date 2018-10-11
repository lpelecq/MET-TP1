import { FabriqueNaturels } from "./FabriqueNaturels";
import { Succ } from "./Succ";
import { Nat } from "./Nat";
import { Zero } from "./Zero";
import { ZeroRec } from "./ZeroRec";
import { NatParInt } from "./NatParInt";

export class SuccRec extends Succ{

    public static FAB:FabriqueNaturels<Nat> = new NatParInt(0);

    public constructor(predecesseur : Nat) {
		super(predecesseur);
		
	}

    public somme(x : Nat) : Nat{
		if (x.estNul()) {
            return this;
		} else {
			return this.creerSuccesseur(this.somme(x.predecesseur()));
		}
	}
	
	public produit(x : Nat) : Nat {
		if (x.estNul()) {
			return SuccRec.FAB.creerZero();
		} else {
			if (this.equals(this.getUn())) {
				return x;
			} else {
				return this.somme(this.produit(x.predecesseur()));
			}
		}
	}
	
	public modulo(x : Nat) : Nat{
		let a : Nat = this;
		if (a.val() >= x.val()) {
			for (let i : number = 0 ; i < x.val(); i++) {
				a = a.predecesseur();
			}
			return a.modulo(x);
		}
		return a;
	}

	public creerZero() : Nat{
		return ZeroRec.FAB.creerZero();
	}

	public creerSuccesseur(predecesseur : Nat) : Nat {
		return new SuccRec(predecesseur);
	}

	public creerNatAvecRepresentation(repDecimale : string) : Nat {
		if (repDecimale.length == 0 || Number(repDecimale) < 0) {
			throw new Error();
		} else if (repDecimale === "0") {
			return this.creerZero();
		} else {
			return this.creerSuccesseur(this.creerNatAvecRepresentation(""+(Number(repDecimale)-1)));
		}
	}

    public div(x : Nat) : Nat{
		let a : Nat = this;
		if (x.estNul()) {
			return this.creerZero();
		} else if (this.equals(x)) {
			return this.creerSuccesseur(this.creerZero());
		} else if (this.val() < x.val()) {
			return this.creerZero();
		} else {
			for (let i : number = 0 ; i < x.val(); i++) {
				a = a.predecesseur();
			}
			return this.getUn().somme(a.div(x));
		}
	}
	
	creerNatAvecValeur(val : number) : Nat {
		if (val < 0) {
			throw new Error();
		} else if (val == 0) {
			return this.creerZero();
		} else {
			return this.creerSuccesseur(NatParInt.FAB.creerNatAvecValeur(val-1));
		}
	}




}