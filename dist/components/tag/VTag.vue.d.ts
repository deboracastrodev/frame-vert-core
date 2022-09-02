declare const _default: import("vue").DefineComponent<{
    status: {
        type: StringConstructor;
        default: string;
        required: true;
    };
    type: {
        type: StringConstructor;
        default: string;
        required: true;
    };
    icon: {
        type: StringConstructor;
        required: false;
    };
    square: {
        type: BooleanConstructor;
        default: boolean;
    };
}, unknown, unknown, {
    setIcon(): string;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    status: {
        type: StringConstructor;
        default: string;
        required: true;
    };
    type: {
        type: StringConstructor;
        default: string;
        required: true;
    };
    icon: {
        type: StringConstructor;
        required: false;
    };
    square: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    status: string;
    type: string;
    square: boolean;
}>;
export default _default;
