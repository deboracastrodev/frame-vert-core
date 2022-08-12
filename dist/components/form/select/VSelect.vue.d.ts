import { PropType } from "vue";
export interface ISelectOptions {
    value: any;
    label: string;
}
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
        type: PropType<ISelectOptions[]>;
        default: () => never[];
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
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
}, () => void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    onChange: (selected: any) => void;
} & {
    "update:modelValue": (selected: any) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
        type: PropType<ISelectOptions[]>;
        default: () => never[];
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
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
}>> & {
    onOnChange?: ((selected: any) => any) | undefined;
    "onUpdate:modelValue"?: ((selected: any) => any) | undefined;
}, {
    name: string;
    size: string;
    required: boolean;
    id: string;
    placeholder: string;
    label: string;
    options: ISelectOptions[];
    disable: boolean;
    modelValue: string | number;
}>;
export default _default;
