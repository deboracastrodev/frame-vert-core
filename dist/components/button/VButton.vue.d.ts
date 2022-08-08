declare const _default: import("vue").DefineComponent<{
    size: {
        type: StringConstructor;
        default: string;
    };
    outline: {
        type: BooleanConstructor;
        default: boolean;
    };
    status: {
        type: StringConstructor;
        default: string;
        required: true;
    };
    icon: {
        type: StringConstructor;
        required: false;
    };
}, unknown, unknown, {
    setSizeClass(): string;
    setStatus(): string;
    setIcon(): string;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: StringConstructor;
        default: string;
    };
    outline: {
        type: BooleanConstructor;
        default: boolean;
    };
    status: {
        type: StringConstructor;
        default: string;
        required: true;
    };
    icon: {
        type: StringConstructor;
        required: false;
    };
}>>, {
    size: string;
    outline: boolean;
    status: string;
}>;
export default _default;
