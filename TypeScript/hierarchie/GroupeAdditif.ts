import { MonoideAdditif } from "./MonoideAdditif";
import { SymetriqueAddition } from "./SymetriqueAddition";

export interface GroupeAdditif<T> extends MonoideAdditif<T>, SymetriqueAddition<T> {
}