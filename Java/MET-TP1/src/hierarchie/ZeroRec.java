package hierarchie;

public class ZeroRec extends Zero {
	public final static FabriqueNaturels<Nat> FAB = new ZeroRec();
	
	public ZeroRec() {
		
	}
	
	public Nat somme(Nat x) {
		if (x.estNul()) {
			return this;
		} else {
			return this.creerSuccesseur(this.somme(x.predecesseur()));
		}
	}
	

	@Override
	public Nat creerNatAvecValeur(int val) throws IllegalArgumentException {
		if (this.val() < 0) {
			throw new UnsupportedOperationException();
		}
		return SuccRec.FAB.creerNatAvecValeur(val);
	}

	@Override
	public Nat creerZero() {
		return new ZeroRec();
	}

	@Override
	public Nat creerSuccesseur(Nat predecesseur) {
		return new SuccRec(predecesseur);
	}

	@Override
	public Nat creerNatAvecRepresentation(String repDecimale) throws IllegalArgumentException {
		if (!(repDecimale.matches("\\d+"))) {
			throw new IllegalArgumentException();
		} else if (repDecimale.length() > 1 && repDecimale.charAt(0) == '0') {
			throw new IllegalArgumentException();
		}
		return SuccRec.FAB.creerNatAvecRepresentation(repDecimale);
	}
	
}
