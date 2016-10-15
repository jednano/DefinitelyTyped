// Type definitions for tcomb v1.0.3
// Project: http://gcanti.github.io/tcomb/guide/index.html
// Definitions by: Hans Windhoff <https://github.com/hansrwindhoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Original Definitions by: Jed Mao <https://github.com/jedmao>
declare module 'tcomb' {
  export = tcomb;

  namespace tcomb {

    export function format(format: string, ...values: any[]): string;
    export function getFunctionName(fn: Function): string;
    export function getTypeName(type: TCombBase): string;
    export function mixin(target: {}, source: {}, overwrite?: boolean): any;
    export var slice: typeof Array.prototype.slice;
    export function shallowCopy(x: TCombBase): TCombBase;
    export function update(instance: any, spec: {}): TCombBase;
    export function assert(
      condition: boolean,
      message?: string,
      ...values: any[]
    ): void;
    export function fail(message?: string): void;
    export var Any: Any_Static;
	 // export var Integer: Integer_Static;
    export var Nil: Nil_Static;
    export var String: Str_Static;
    export var Number: Num_Static;
    export var Boolean: Bool_Static;
    export var Array: Arr_Static;
    export var Object: Obj_Static;

    export var Function: Func_Static;
    export var func: {
        (domain: TCombBase[], codomain: TCombBase, name?: string): Func_Static;
        (domain: TCombBase, codomain: TCombBase, name?: string) : Func_Static;
    }
    export var Error: Err_Static;
    export var RegExp: Re_Static;
    export var Date: Dat_Static;
    export var Type: Type_Static;
    export function irreducible(name: string, is: TypePredicate): TCombBase;
    export function struct(props: Object, name?: string): Struct_Static;

    export var Union: Union_Static;
    export var Maybe: Maybe_Static;

    export function enums(map: Object, name?: string): TCombBase;
    export function union(types: TCombBase[], name?: string): Union_Static;
    export function maybe(type: TCombBase, name?: string): Maybe_Static;

    export var Tuple: Tuple_Static;
    export function tuple(types: TCombBase[], name?: string): Tuple_Static;

    export var Subtype: Subtype_Static;

    export var List: List_Static;
    export function list(type: TCombBase, name?: string): List_Static;

    export var Dict: Dict_Static;
    export function dict(
      domain: TCombBase,
      codomain: TCombBase,
      name?: string
    ): Dict_Static;

    export function subtype(
      type: TCombBase,
      predicate: TypePredicate,
      name?: string
    ): Subtype_Static;

  export interface TCombBase {
    meta: {
      /**
       * The type kind, equal to "irreducible" for irreducible types.
       */
      kind: string;
      /**
       * The type name.
       */
      name: string|undefined;
    };
    displayName: string;
    is(value: any): boolean;
    update(instance: any, spec: {}): TCombBase;
  }

  export interface TypePredicate {
    (x: any): Bool_Instance;
  }

  export interface Any_Instance {
  }

  export interface Any_Static extends TCombBase {

    new (value: any): Any_Instance;
    (value: any): Any_Instance;
  }



  export interface Nil_Instance {
  }

  export interface Nil_Static extends TCombBase {
    new (value: null|undefined): Nil_Instance;
    (value: null|undefined): Nil_Instance;
  }



  export interface Str_Instance extends String {
  }

  export interface Str_Static extends TCombBase {
    new (value: string): Str_Instance;
    (value: string): Str_Instance;
    meta: {
      /**
       * The type kind, equal to "irreducible" for irreducible types.
       */
      kind: 'irreducible';
      /**
       * The type name.
       */
      name: 'String';
      /**
       * The type predicate.
       */
      is: TypePredicate;
    };
  }



  export interface Num_Instance extends Number {
  }

  export interface Num_Static extends TCombBase {
    new (value: number): Num_Instance;
    (value: number): Num_Instance;
  }



  export interface Bool_Instance extends Boolean {
  }

  export interface Bool_Static extends TCombBase {
    new (value: boolean): Bool_Instance;
    (value: boolean): Bool_Instance;
  }



  export interface Arr_Instance extends Array<any> {
  }

  export interface Arr_Static extends TCombBase {
    new (value: any[]): Arr_Instance;
    (value: any[]): Arr_Instance;
  }



  export interface Obj_Instance extends Object {
  }

  export interface Obj_Static extends TCombBase {

    new (value: Object): Obj_Instance;
    (value: Object): Obj_Instance;
  }



  export interface Func_Instance extends Function {
  }

  export interface Func_Static extends TCombBase {
    new (value: Function): Func_Instance;
    (value: Function): Func_Instance;
  }


  export interface Err_Instance extends Error {
  }

  export interface Err_Static extends TCombBase {
    new (value: Error): Err_Instance;
    (value: Error): Err_Instance;
  }


  export interface Re_Instance extends RegExp {
  }

  export interface Re_Static extends TCombBase {
    new (value: RegExp): Re_Instance;
    (value: RegExp): Re_Instance;
  }


  export interface Dat_Instance extends Date {
  }

  export interface Dat_Static extends TCombBase {
    new (value: Date): Dat_Instance;
    (value: Date): Dat_Instance;
  }

  export interface Type_Instance {
  }

  export interface Type_Static extends TCombBase {
    new (value: any): Type_Instance;
    (value: any): Type_Instance;
  }



  /**
   * @param name - The type name.
   * @param is - A predicate.
   */

  /**
   * @param props - A hash whose keys are the field names and the values are the fields types.
   * @param name - Useful for debugging purposes.
   */


  export interface Struct_Static extends TCombBase {
    new (value: any, mutable?: boolean): Struct_Instance;
    (value: any, mutable?: boolean): Struct_Instance;
    meta: {
      kind: 'struct';
      name: string|undefined;
      props: any;
    };
    /**
     * @param mixins - Contains the new props.
     * @param name - Useful for debugging purposes.
     */
    extend(mixins: Object, name?: string): Struct_Static;
    /**
     * @param mixins - Contains the new props.
     * @param name - Useful for debugging purposes.
     */
    extend(mixins: Struct_Static, name?: string): Struct_Static;
    /**
     * @param mixins - Contains the new props.
     * @param name - Useful for debugging purposes.
     */
    extend(mixins: Object[], name?: string): Struct_Static;
    /**
     * @param mixins - Contains the new props.
     * @param name - Useful for debugging purposes.
     */
    extend(mixins: Struct_Static[], name?: string): Struct_Static;
  }

  interface Struct_Instance {
  }

  /**
   * @param map - A hash whose keys are the enums (values are free).
   * @param name - Useful for debugging purposes.
   */

  export module enums {
    /**
     * @param keys - Array of enums.
     * @param name - Useful for debugging purposes.
     */
    export function of(keys: string[], name?: string): TCombBase;
    /**
     * @param keys - String of enums separated by spaces.
     * @param name - Useful for debugging purposes.
     */
    export function of(keys: string, name?: string): TCombBase;
  }

  /**
   * @param name - Useful for debugging purposes.
   */

  export interface Union_Static extends TCombBase {
    new (value: any, mutable?: boolean): Union_Instance;
    (value: any, mutable?: boolean): Union_Instance;
    meta: {
      kind: 'union';
      name: string|undefined;
      types: TCombBase[];
    };
    dispatch(x: any): Function;
  }

  export interface Union_Instance {
  }


  /**
   * @param type - The wrapped type.
   * @param name - Useful for debugging purposes.
   */



  export interface Maybe_Static extends TCombBase {
    new (value: any, mutable?: boolean): Maybe_Instance;
    (value: any, mutable?: boolean): Maybe_Instance;
    meta: {
      kind: 'maybe';
      name: string|undefined;
      type: TCombBase;
    };
  }

  interface Maybe_Instance {
  }


  /**
   * @param name - Useful for debugging purposes.
   */

  interface Tuple_Static extends TCombBase {
    new (value: any, mutable?: boolean): Tuple_Instance;
    (value: any, mutable?: boolean): Tuple_Instance;
    meta: {
      kind: 'tuple';
      name: string|undefined;
      types: TCombBase[];
    };
  }

  interface Tuple_Instance {
  }

  /**
   * Combines old types into a new one.
   * @param type - A type already defined.
   * @param name - Useful for debugging purposes.
   */


  export interface Subtype_Static extends TCombBase {
    new (value: any, mutable?: boolean): Subtype_Instance;
    (value: any, mutable?: boolean): Subtype_Instance;
    meta: {
      kind: 'subtype';
      name: string|undefined;
      type: TCombBase;
      predicate: TypePredicate;
    };
  }

  interface Subtype_Instance {
  }

  /**
   * @param type - The type of list items.
   * @param name - Useful for debugging purposes.
   */
  export function list(type: TCombBase, name?: string): List_Static;

  interface List_Static extends TCombBase {
    new (value: any, mutable?: boolean): List_Instance;
    (value: any, mutable?: boolean): List_Instance;
    meta: {
      kind: 'list';
      name: string|undefined;
      'type': TCombBase;
    };
  }

  interface List_Instance {
  }

  /**
   * @param domain - The type of keys.
   * @param codomain - The type of values.
   * @param name - Useful for debugging purposes.
   */


  interface Dict_Static extends TCombBase {
    new (value: any, mutable?: boolean): Dict_Instance;
    (value: any, mutable?: boolean): Dict_Instance;
    meta: {
      kind: 'dict';
      name: string|undefined;
      domain: TCombBase;
      codomain: TCombBase;
    };
  }

  interface Dict_Instance {
  }

  /**
   * @param type - The type of the function's argument.
   * @param codomain - The type of the function's return value.
   * @param name - Useful for debugging purposes.
   */
  /**
   * @param type - The list of types of the function's arguments.
   * @param codomain - The type of the function's return value.
   * @param name - Useful for debugging purposes.
   */

  interface Func_Static extends TCombBase {
    new (value: any, mutable?: boolean): Func_Instance;
    (value: any, mutable?: boolean): Func_Instance;
    meta: {
      kind: 'func';
      name: string|undefined;
      domain: any;
      codomain: TCombBase;
    };
    of(fn: Function): Function;
  }

  interface Func_Instance {
  }

  }

}
