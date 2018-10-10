import { SemiAnneau } from "./SemiAnneau";
import { MonoideMultiplicatif } from "./MonoideMultiplicatif";
import { BiUnifere } from "./BiUnifere";

export interface SemiAnneauUnitaire<T> extends SemiAnneau<T>, MonoideMultiplicatif<T>, BiUnifere<T>{
}