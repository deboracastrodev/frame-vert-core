declare const _default: import("vue").DefineComponent<{
    id: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    options: {
        type: ArrayConstructor;
        default: never[];
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    disable: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
}, unknown, any, {}, {
    selectChange(event: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    options: {
        type: ArrayConstructor;
        default: never[];
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    disable: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    name: string;
    size: string;
    required: boolean;
    id: string;
    placeholder: string;
    label: string;
    options: unknown[];
    disable: boolean;
    modelValue: string;
}>;
export default _default;
