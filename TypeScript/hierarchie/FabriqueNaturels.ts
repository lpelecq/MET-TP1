
export interface FabriqueNaturels<T>{
    creerNatAvecValeur(val:number) :  T;
    creerZero() : T;
    creerSuccesseur (predecesseur:T) : T;
    creerNatAvecRepresentation (repDecimale:String): T;

    

}