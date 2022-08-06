declare const _default: {
    VTable: import("vue").DefineComponent<{
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
    VButton: import("vue").DefineComponent<{
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
};
export default _default;
export * from './components/table/VTable.vue';
export * from './components/button/VButton.vue';
