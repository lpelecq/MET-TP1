package hierarchie;

public interface FabriqueNaturels<T> {
	T creerNatAvecValeur(int val) throws java.lang.IllegalArgumentException;
	T creerZero();
	T creerSuccesseur(T predecesseur);
	T creerNatAvecRepresentation(String repDecimale) throws java.lang.IllegalArgumentException;
}
