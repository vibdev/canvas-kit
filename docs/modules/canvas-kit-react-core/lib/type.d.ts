import { CSSProperties } from './types';
export interface CanvasTypeVariations {
    body: CSSProperties;
    body2: CSSProperties;
    h1: CSSProperties;
    h2: CSSProperties;
    h3: CSSProperties;
    h4: CSSProperties;
    h5: CSSProperties;
    label1: CSSProperties;
    label2: CSSProperties;
    label3: CSSProperties;
    link: CSSProperties;
    button: CSSProperties;
    hint: CSSProperties;
    [key: string]: CSSProperties;
}
export interface CanvasType extends CanvasTypeVariations {
    mono: CanvasTypeVariations;
    [key: string]: CanvasTypeVariations | CSSProperties;
}
declare const type: CanvasType;
export default type;
