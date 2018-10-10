package test;
import hierarchie.*;

public class test {
	public test() {
		
	}
	
	public static void main(String[] args) {
		//*
		System.out.println("Test NatParInt");
		testFab(NatParInt.FAB);
		System.out.println("\nTest Zero");
        testFab(Zero.FAB);
        System.out.println("\nTest Succ");
        testFab(Succ.FAB);
        System.out.println("\nTest NatDecimal");
        testFab(NatDecimal.FAB);
		System.out.println("\nTest ZeroRec");
        testFab(ZeroRec.FAB);
        System.out.println("\nTest SuccRec");
        testFab(SuccRec.FAB);
        //*/
	}
	
	public static void testFab(FabriqueNaturels<Nat> fab) {
        Nat zero = fab.creerZero();
        System.out.println("0 ? " + zero);
        System.out.println("true ? " + zero.equals(zero.zero()));
 
        Nat un = fab.creerSuccesseur(zero);
        System.out.println("1 ? " + un);
        System.out.println("true ? " + un.equals(un.un()));
 
        Nat predecesseurUn = un.predecesseur();
        System.out.println("0 ? " + predecesseurUn);
 
        Nat cinq = fab.creerNatAvecValeur(5);
        System.out.println("5 ? " + cinq);
 
        Nat six = fab.creerNatAvecValeur(6);
        System.out.println("6 ? " + six);
        System.out.println("11 ? " + cinq.somme(six));
        System.out.println("30 ? " + cinq.produit(six));
 
        System.out.println("5 ? " + fab.creerNatAvecValeur(33).div(six));
        System.out.println("3 ? " + fab.creerNatAvecValeur(33).modulo(six));
 
        /*
        try {
            Nat x = fab.creerNatAvecValeur(2_000_000_000);
            System.out.println("4000000000 ? " + x.somme(x));
        } catch (Exception e) {
            System.out.println("Erreur : dépassement ! Trace :");
            e.printStackTrace(System.out);
        }
        //*/
 
    }
	
	public static Nat produitRusse(Nat x, Nat y) {
		Nat r = Zero.FAB.creerZero();
		Nat deux = NatParInt.FAB.creerNatAvecValeur(2);
		while (!x.estNul()) {
			if (x.val() % 2 == 1) {
				r = r.somme(y);
				x = x.predecesseur();
			}
			x = x.div(deux);
			y = y.produit(deux);
		}
		return r;
	}
}
