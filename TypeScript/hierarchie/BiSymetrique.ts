import { SymetriqueAddition } from "./SymetriqueAddition";
import { SymetriqueMultiplication } from "./SymetriqueMultiplication";

export interface BiSymetrique<T> extends SymetriqueAddition<T>, SymetriqueMultiplication<T> {

}