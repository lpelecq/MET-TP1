import { SemiAnneauUnitaire } from "./SemiAnneauUnitaire";
import { Anneau } from "./Anneau";

export interface AnneauUnitaire<T> extends SemiAnneauUnitaire<T>, Anneau<T> {

}