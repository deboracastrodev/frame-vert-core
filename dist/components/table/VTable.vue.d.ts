declare const _default: import("vue").DefineComponent<{
    rows: {
        type: ArrayConstructor;
        default: () => {
            column1: string;
            column2: string;
            column3: string;
        }[];
    };
    cols: {
        type: ArrayConstructor;
        default: () => string[];
    };
}, () => void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    rows: {
        type: ArrayConstructor;
        default: () => {
            column1: string;
            column2: string;
            column3: string;
        }[];
    };
    cols: {
        type: ArrayConstructor;
        default: () => string[];
    };
}>>, {
    rows: unknown[];
    cols: unknown[];
}>;
export default _default;
