package hierarchie;

public interface Nat extends hierarchie.SemiAnneauUnitaireEuclidien<Nat>, FabriqueNaturels<Nat> {
	int val();
	boolean estNul();
	Nat predecesseur() throws java.lang.UnsupportedOperationException;
	int taille();
	int chiffre(int i);
	
	default public Nat somme(Nat x) {
		return creerNatAvecValeur(this.val()+x.val());
	}

	default public Nat zero() {
		return creerZero();
	}

	default public Nat produit(Nat x) {
		return creerNatAvecValeur(this.val()*x.val());
	}

	default public Nat un() {
		return creerNatAvecValeur(1);
	}

	default public Nat modulo(Nat x) {
		return creerNatAvecValeur(this.val() % x.val());
	}

	default public Nat div(Nat x) {
		return creerNatAvecValeur(this.val() / x.val());
	}
	
	default public void printRecur(String txt) {
		if (this.estNul()) {
			System.out.println(this.toString() + " (" + this.getClass().getName() + ") " + txt);
		} else {
			this.predecesseur().printRecur(this.toString() + " (" + this.getClass().getName() + ") " + txt);
		}
	}
}
