package hierarchie;

public class SuccRec extends Succ {
	public final static FabriqueNaturels<Nat> FAB = new SuccRec(new Zero());
	
	public SuccRec(Nat predecesseur) {
		super(predecesseur);
	}
	

	
	public Nat somme(Nat x) {
		if (x.estNul()) {
			return this;
		} else {
			return this.creerSuccesseur(this.somme(x.predecesseur()));
		}
	}
	
	public Nat produit(Nat x) {
		if (x.estNul()) {
			return SuccRec.FAB.creerZero();
		} else {
			if (this.equals(this.un())) {
				return x;
			} else {
				return this.somme(this.produit(x.predecesseur()));
			}
		}
	}
	
	public Nat modulo(Nat x) {
		Nat a = this;
		if (a.val() >= x.val()) {
			for (int i = 0 ; i < x.val(); i++) {
				a = a.predecesseur();
			}
			return a.modulo(x);
		}
		return a;
	}
	
	public Nat div(Nat x) {
		Nat a = this;
		if (x.estNul()) {
			return creerZero();
		} else if (this.equals(x)) {
			return this.creerSuccesseur(creerZero());
		} else if (this.val() < x.val()) {
			return creerZero();
		} else {
			for (int i = 0 ; i < x.val(); i++) {
				a = a.predecesseur();
			}
			return un().somme(a.div(x));
		}
	}
	
	@Override
	public Nat creerNatAvecValeur(int val) throws IllegalArgumentException {
		if (val < 0) {
			throw new IllegalArgumentException();
		} else if (val == 0) {
			return creerZero();
		} else {
			return creerSuccesseur(creerNatAvecValeur(val-1));
		}
	}

	@Override
	public Nat creerZero() {
		return ZeroRec.FAB.creerZero();
	}

	@Override
	public Nat creerSuccesseur(Nat predecesseur) {
		return new SuccRec(predecesseur);
	}

	@Override
	public Nat creerNatAvecRepresentation(String repDecimale) throws IllegalArgumentException {
		if (repDecimale.length() == 0 || Integer.parseInt(repDecimale) < 0) {
			throw new IllegalArgumentException();
		} else if (repDecimale.equals("0")) {
			return creerZero();
		} else {
			return creerSuccesseur(creerNatAvecRepresentation(Integer.toString(Integer.parseInt(repDecimale)-1)));
		}
	}
}
