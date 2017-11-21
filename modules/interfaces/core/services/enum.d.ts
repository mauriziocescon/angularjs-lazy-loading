export interface Enum {
    toEnum(val: string): Enum;
    value: string;
    toString(): string;
}
