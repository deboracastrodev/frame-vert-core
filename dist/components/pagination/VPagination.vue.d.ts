declare const _default: import("vue").DefineComponent<{
    count: {
        type: NumberConstructor;
        default: number;
    };
    page: {
        type: NumberConstructor;
        default: number;
    };
    size: {
        type: NumberConstructor;
        default: number;
    };
}, unknown, {
    currentPage: number;
}, {
    pages(): number[];
}, {
    onClickPage(page: number): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    count: {
        type: NumberConstructor;
        default: number;
    };
    page: {
        type: NumberConstructor;
        default: number;
    };
    size: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    size: number;
    count: number;
    page: number;
}>;
export default _default;
