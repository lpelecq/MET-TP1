import { SemiGroupeMultiplicatif } from "./SemiGroupeMultiplicatif";
import { UnifereMultiplication } from "./UnifereMultiplication";

export interface MonoideMultiplicatif<T> extends SemiGroupeMultiplicatif<T>, UnifereMultiplication<T> {
}