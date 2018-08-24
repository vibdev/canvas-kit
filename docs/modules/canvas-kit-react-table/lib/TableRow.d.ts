/// <reference types="react" />
import * as React from 'react';
import '@workday/canvas-kit-css-table/dist/canvas-kit-css-table.css';
export declare enum TableRowStates {
    Error = 0,
    Alert = 1,
    InputError = 2,
    InputAlert = 3,
    Hover = 4,
    Selected = 5,
}
export interface TableRowProps {
    state?: TableRowStates;
}
export default class TableRow extends React.Component<JSX.IntrinsicElements['tr'] & TableRowProps> {
    static States: typeof TableRowStates;
    render(): JSX.Element;
}
