/// <reference types="react" />
import * as React from 'react';
import '@workday/canvas-kit-css-fat/dist/canvas-kit-css-fat.css';
export interface FloatingActionToolbarProps {
    fixed?: boolean;
}
export default class FloatingActionToolbar extends React.Component<JSX.IntrinsicElements['div'] & FloatingActionToolbarProps> {
    render(): JSX.Element;
}
