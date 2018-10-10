package hierarchie;

public class NatDecimal implements Nat {
	private String chiffres;
	public final static FabriqueNaturels<Nat> FAB = new NatDecimal("0");

	public NatDecimal(String rep) {
		this.chiffres = rep;
	}

	@Override
	public Nat somme(Nat x) {
		int t = this.taille() < x.taille() ? x.taille() : this.taille();
		StringBuilder rep = new StringBuilder();
		int retenue = 0;
		for (int i = 0 ; i < t ; i++) {
			int chiffre = this.chiffre(i) + x.chiffre(i) + retenue;
			if (chiffre > 9) {
				chiffre = chiffre - 10;
				retenue = 1;
			} else {
				retenue = 0;
			}
			rep.append(Integer.toString(chiffre));
		}
		rep = retenue == 0 ? rep : rep.append(1);
		return new NatDecimal(rep.reverse().toString());
	}

	@Override
	public Nat zero() {
		return this.creerZero();
	}

	@Override
	public Nat produit(Nat x) {
		if (x.val() == 10) {
			return this.creerNatAvecRepresentation(this.chiffres + "0");
		}
		Nat resultat = this.creerZero();
		for (int i = x.val() ; i > 0 ; i--) {
			resultat = resultat.somme(this);
		}
		return resultat;
	}

	@Override
	public Nat un() {
		return this.creerNatAvecRepresentation("1");
	}

	@Override
	public Nat creerNatAvecValeur(int val) throws IllegalArgumentException {
		return creerNatAvecRepresentation(Integer.toString(val));
	}

	@Override
	public Nat creerZero() {
		return creerNatAvecRepresentation("0");
	}

	@Override
	public Nat creerSuccesseur(Nat predecesseur) {
		String repSuccesseur = "";
		boolean retenue = true;
		int val = 0;
		for (int i = 0 ; i < predecesseur.taille() ; i++) {
			val = predecesseur.chiffre(0)+(retenue?1:0);
			retenue = val > 9;
			repSuccesseur = "" + val%10 + repSuccesseur;
		}
		repSuccesseur = (retenue?"1":"") + repSuccesseur;
		return creerNatAvecRepresentation(repSuccesseur);
	}

	@Override
	public Nat creerNatAvecRepresentation(String repDecimale) throws IllegalArgumentException {
		if (!(repDecimale.matches("\\d+"))) {
			throw new IllegalArgumentException();
		} else if (repDecimale.length() > 1 && repDecimale.charAt(0) == '0') {
			throw new IllegalArgumentException();
		}
		return new NatDecimal(repDecimale);
	}

	@Override
	public int val() {
		return Integer.parseInt(this.chiffres);
	}

	@Override
	public boolean estNul() {
		return this.taille() == 1 && this.chiffre(0) == 0;
	}

	@Override
	public Nat predecesseur() throws UnsupportedOperationException {
		if (this.estNul()) {
			throw new UnsupportedOperationException();
		}
		StringBuilder repSuccesseur = new StringBuilder();
		boolean retenue = true;
		int i = 0;
		if (this.taille() == 1) {
			repSuccesseur.append(this.chiffre(0)-1);
		} else {
			for (i = 0 ; i < this.taille()-1 ; i++) {
				if (retenue) {
					if (this.chiffre(i) == 0) {
						repSuccesseur.append("9");
					} else {
						retenue = false;
						repSuccesseur.append(this.chiffre(i)-1);
					}
				} else {
					repSuccesseur.append(this.chiffre(i));
				}
			}
			if (retenue) {
				if (this.chiffre(i) == 0) {
					repSuccesseur.append("9");
				} else {
					retenue = false;
					if (this.chiffre(i)-1 != 0) {
						repSuccesseur.append(this.chiffre(i)-1);
					}
				}
			} else {
				repSuccesseur.append(this.chiffre(i));
			}
		}		
		return creerNatAvecRepresentation(repSuccesseur.reverse().toString());
	}

	@Override
	public int taille() {
		return this.chiffres.length();
	}

	@Override
	public int chiffre(int i) {
		if (i > this.taille()-1 || i < 0) {
			return 0;
		}
		return Character.getNumericValue(this.chiffres.charAt(this.taille()-1-i));
	}
	
	@Override
	public String toString() {
		return this.chiffres;
	}

	@Override
	public boolean equals(Object o) {
		if (o == null) {
			return false;
		}
		return o instanceof Nat && this.toString().equals(((Nat) o).toString());
	}
	
	@Override
	public Nat modulo(Nat x) {
		return creerNatAvecRepresentation(Integer.toString(this.val() % x.val()));
	}

	@Override
	public Nat div(Nat x) {
		return creerNatAvecRepresentation(Integer.toString(this.val() / x.val()));
	}
}
