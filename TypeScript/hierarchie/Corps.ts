import { AnneauUnitaire } from "./AnneauUnitaire";
import { GroupeMultiplicatif } from "./GroupeMultiplicatif";
import { BiSymetrique } from "./BiSymetrique";

export interface Corps<T> extends AnneauUnitaire<T>, GroupeMultiplicatif<T>, BiSymetrique<T> {

}
