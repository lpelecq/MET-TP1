package hierarchie;

public class NatParInt implements Nat {
	private int val;
	public final static FabriqueNaturels<Nat> FAB = new NatParInt(0);
	
	public NatParInt(int val) throws java.lang.IllegalArgumentException {
		if (val < 0) {
			throw new java.lang.IllegalArgumentException();
		}
		this.val = val;
	}
	
	public static void main(String[] args) {
		
	}
	
	@Override
	public Nat somme(Nat x) {
		return creerNatAvecValeur(this.val()+x.val());
	}

	@Override
	public Nat zero() {
		return creerZero();
	}

	@Override
	public Nat produit(Nat x) {
		return creerNatAvecValeur(this.val()*x.val());
	}

	@Override
	public Nat un() {
		return creerNatAvecValeur(1);
	}

	@Override
	public int val() {
		return this.val;
	}

	@Override
	public boolean estNul() {
		return this.val() == 0;
	}

	@Override
	public Nat predecesseur() throws UnsupportedOperationException {
		if (this.val() < 1) {
			throw new UnsupportedOperationException();
		}
		return creerNatAvecValeur(this.val()-1);
	}

	@Override
	public int taille() {
		return String.valueOf(this.val()).length();
	}

	@Override
	public int chiffre(int i) {
		return (int) Math.floor(this.val() / (Math.pow(10, i)) % 10);
	}

	@Override
	public Nat creerNatAvecValeur(int val) throws IllegalArgumentException {
		if (val < 0) {
			throw new IllegalArgumentException();
		}
		return new NatParInt(val);
	}

	@Override
	public Nat creerZero() {
		return Zero.FAB.creerZero();
	}

	@Override
	public Nat creerSuccesseur(Nat predecesseur) {
		return Succ.FAB.creerSuccesseur(predecesseur);
	}

	@Override
	public Nat creerNatAvecRepresentation(String repDecimale) throws IllegalArgumentException {
		if (!(repDecimale.matches("\\d+"))) {
			throw new IllegalArgumentException();
		} else if (repDecimale.length() > 1 && repDecimale.charAt(0) == '0') {
			throw new IllegalArgumentException();
		}
		return NatDecimal.FAB.creerNatAvecRepresentation(repDecimale);
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
		return creerNatAvecValeur(this.val() % x.val());
	}

	@Override
	public Nat div(Nat x) {
		return creerNatAvecValeur(this.val() / x.val());
	}
	
}
