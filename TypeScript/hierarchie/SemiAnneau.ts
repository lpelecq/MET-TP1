import { MonoideAdditif } from "./MonoideAdditif";
import { SemiGroupeMultiplicatif } from "./SemiGroupeMultiplicatif";

export interface SemiAnneau<T> extends MonoideAdditif<T>, SemiGroupeMultiplicatif<T> {
	
}