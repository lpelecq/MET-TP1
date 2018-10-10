package hierarchie;

public class Zero implements Nat {
	public final static FabriqueNaturels<Nat> FAB = new Zero();
	
	public Zero() {}

	@Override
	public Nat somme(Nat x) {
		return x;
	}

	@Override
	public Nat zero() {
		return this;
	}

	@Override
	public Nat produit(Nat x) {
		return this;
	}

	@Override
	public Nat un() {
		return creerNatAvecValeur(1);
	}

	@Override
	public Nat creerNatAvecValeur(int val) throws IllegalArgumentException {
		if (this.val() < 0) {
			throw new UnsupportedOperationException();
		}
		return Succ.FAB.creerNatAvecValeur(val);
	}

	@Override
	public Nat creerZero() {
		return new Zero();
	}

	@Override
	public Nat creerSuccesseur(Nat predecesseur) {
		return new Succ(predecesseur);
	}

	@Override
	public Nat creerNatAvecRepresentation(String repDecimale) throws IllegalArgumentException {
		if (!(repDecimale.matches("\\d+"))) {
			throw new IllegalArgumentException();
		} else if (repDecimale.length() > 1 && repDecimale.charAt(0) == '0') {
			throw new IllegalArgumentException();
		}
		return Succ.FAB.creerNatAvecRepresentation(repDecimale);
	}

	@Override
	public int val() {
		return 0;
	}

	@Override
	public boolean estNul() {
		return true;
	}

	@Override
	public Nat predecesseur() throws UnsupportedOperationException {
		throw new UnsupportedOperationException();
	}

	@Override
	public int taille() {
		return 1;
	}

	@Override
	public int chiffre(int i) {
		return 0;
	}

	@Override
	public String toString() {
		return "" + this.val();
	}

	@Override
	public boolean equals(Object o) {
		if (o == null) {
			return false;
		}
		return o instanceof Nat && this.val() == ((Nat) o).val();
	}

	@Override
	public Nat modulo(Nat x) {
		return this;
	}

	@Override
	public Nat div(Nat x) {
		return this;
	}
	
}
