/// <reference path="../tcomb/tcomb.d.ts"/>
/// <reference path="../react/react.d.ts"/>

declare module 'tcomb-react' {

	import * as t from 'tcomb';
	import * as React from 'react';

	export { t };

	export var propTypes: React.ReactPropTypes;
	/**
	 * Unsupported
	 */
	export function props(P): () => void;
	export var ReactElement: TcombReact.ReactElement_Static;
	export var ReactNode: TcombReact.ReactNode_Static;
	export var ReactChild: TcombReact.ReactChild_Static;
	export var ReactChildren: TcombReact.ReactChildren_Static;
	/**
	 * Support for babel-plugin-tcomb
	 */
	export var ReactElementT: TcombReact.ReactElement_Static;
	/**
	 * Support for babel-plugin-tcomb
	 */
	export var ReactNodeT: TcombReact.ReactNode_Static;
	/**
	 * Support for babel-plugin-tcomb
	 */
	export var ReactChildT: TcombReact.ReactChild_Static;
	/**
	 * Support for babel-plugin-tcomb
	 */
	export var ReactChildrenT: TcombReact.ReactChildren_Static;

	namespace TcombReact {

		export interface ReactElement_Static extends t.TCombBase {
			new<P>(value: React.ReactElement<P>): P;
			<P>(value: React.ReactElement<P>): P;
			meta: {
				kind: 'irreducible';
				name: 'ReactElement';
				is: t.TypePredicate;
			}
		}

		export interface ReactNode_Static extends t.TCombBase {
			new(value: React.ReactNode): React.ReactNode;
			(value: React.ReactNode): React.ReactNode;
			meta: {
				kind: 'irreducible';
				name: 'ReactNode';
				is: t.TypePredicate;
			}
		}

		export interface ReactChild_Static extends t.TCombBase {
			new(value: React.ReactChild): React.ReactChild;
			(value: React.ReactChild): React.ReactChild;
			meta: {
				kind: 'irreducible';
				name: 'ReactChild';
				is: t.TypePredicate;
			}
		}

		export interface ReactChildren_Static extends t.TCombBase {
			new(value: React.ReactChildren): React.ReactChildren;
			(value: React.ReactChildren): React.ReactChildren;
			meta: {
				kind: 'irreducible';
				name: 'ReactChildren';
				is: t.TypePredicate;
			}
		}
	}
}
