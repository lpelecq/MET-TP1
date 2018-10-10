import { SemiAnneau } from "./SemiAnneau";
import { GroupeAdditif } from "./GroupeAdditif";

export interface Anneau<T> extends SemiAnneau<T>, GroupeAdditif<T> {

}