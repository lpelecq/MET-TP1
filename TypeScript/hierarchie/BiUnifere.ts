import { UnifereAddition } from "./UnifereAddition";
import { UnifereMultiplication } from "./UnifereMultiplication";

export interface BiUnifere<T> extends UnifereAddition<T>, UnifereMultiplication<T> {

}