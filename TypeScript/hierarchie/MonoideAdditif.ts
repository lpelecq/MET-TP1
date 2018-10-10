import { UnifereAddition } from "./UnifereAddition";
import { SemiGroupeAdditif } from "./SemiGroupeAdditif";

export interface MonoideAdditif<T> extends SemiGroupeAdditif<T>, UnifereAddition<T> {
}