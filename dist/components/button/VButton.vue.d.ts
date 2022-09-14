declare const _default: import("vue").DefineComponent<{
    size: {
        type: StringConstructor;
        default: string;
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
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    style_type: {
        type: StringConstructor;
        default: string;
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
    status: {
        type: StringConstructor;
        default: string;
        required: true;
    };
    icon: {
        type: StringConstructor;
        required: false;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    style_type: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    size: string;
    status: string;
    disabled: boolean;
    style_type: string;
}>;
export default _default;
