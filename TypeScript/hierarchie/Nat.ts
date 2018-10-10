import { SemiAnneauUnitaireEuclidien } from "./SemiAnneauUnitaireEuclidien";
import { FabriqueNaturels } from "./FabriqueNaturels";

export interface Nat extends SemiAnneauUnitaireEuclidien<Nat>, FabriqueNaturels<Nat> {
    val():number;
    estNul(): boolean;
    predecesseur(): Nat;
	taille():number;
    chiffre(i:number):number;
    equals(x:Nat):boolean;
    



}

