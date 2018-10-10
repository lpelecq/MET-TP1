import { SemiAnneauUnitaire } from "./SemiAnneauUnitaire";
import { Anneau } from "./Anneau";
import { Euclidien } from "./Euclidien";

export interface AnneauUnitaireEuclidien<T> extends SemiAnneauUnitaire<T>, Anneau<T>, Euclidien<T> {

}