import { MonoideMultiplicatif } from "./MonoideMultiplicatif";
import { SymetriqueMultiplication } from "./SymetriqueMultiplication";

export interface GroupeMultiplicatif<T> extends MonoideMultiplicatif<T>, SymetriqueMultiplication<T> {
}

