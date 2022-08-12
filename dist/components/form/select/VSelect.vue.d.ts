export interface ISelectOptions {
    value: any;
    label: string;
}
export interface Props {
    id?: string;
    name?: string;
    placeholder?: string;
    label?: string;
    options: Array<ISelectOptions>;
    required?: boolean;
    disable?: boolean;
    size?: string;
    modelValue?: string | number;
}
declare const _default: import("vue").DefineComponent<{
    id: {
        type: import("vue").PropType<string>;
    };
    name: {
        type: import("vue").PropType<string>;
    };
    placeholder: {
        type: import("vue").PropType<string>;
    };
    label: {
        type: import("vue").PropType<string>;
    };
    options: {
        type: import("vue").PropType<ISelectOptions[]>;
        required: true;
    } & {
        default: () => never[];
    };
    required: {
        type: import("vue").PropType<boolean>;
    };
    disable: {
        type: import("vue").PropType<boolean>;
    };
    size: {
        type: import("vue").PropType<string>;
    } & {
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<string | number>;
    };
}, () => void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    onChange: (selected: any) => void;
} & {
    "update:modelValue": (selected: any) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: import("vue").PropType<string>;
    };
    name: {
        type: import("vue").PropType<string>;
    };
    placeholder: {
        type: import("vue").PropType<string>;
    };
    label: {
        type: import("vue").PropType<string>;
    };
    options: {
        type: import("vue").PropType<ISelectOptions[]>;
        required: true;
    } & {
        default: () => never[];
    };
    required: {
        type: import("vue").PropType<boolean>;
    };
    disable: {
        type: import("vue").PropType<boolean>;
    };
    size: {
        type: import("vue").PropType<string>;
    } & {
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<string | number>;
    };
}>> & {
    onOnChange?: ((selected: any) => any) | undefined;
    "onUpdate:modelValue"?: ((selected: any) => any) | undefined;
}, {
    size: string;
    options: ISelectOptions[];
}>;
export default _default;
