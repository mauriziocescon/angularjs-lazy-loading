import { Enum } from "./enum";

export interface Api {
    albums: string;
    comments: string;
    photos: string;
    posts: string;
    todos: string;
    users: string;
}

export interface Application {
    APP_NAME: string;
    SHOW_ANALYSIS: boolean;
}

export interface Languages {
    SUPPORTED_LANG: string[];
    SUPPORTED_LANG_DESC: string[];
}

export interface LocalStorageKey {
    LANGUAGE_ID: Enum;
}

export interface Validator {
    NUMBER: RegExp;
    NUMBER_WITH_NO_DECIMAL: RegExp;
    NUMBER_WITH_ONE_DECIMAL: RegExp;
    NUMBER_WITH_TWO_DECIMALS: RegExp;
    NUMBER_WITH_THREE_DECIMALS: RegExp;
}
