import { SemiAnneau } from "./SemiAnneau";
import { MonoideMultiplicatif } from "./MonoideMultiplicatif";
import { BiUnifere } from "./BiUnifere";
import { Euclidien } from "./Euclidien";

export interface SemiAnneauUnitaireEuclidien<T> extends SemiAnneau<T>, MonoideMultiplicatif<T>, BiUnifere<T>, Euclidien<T> {
}