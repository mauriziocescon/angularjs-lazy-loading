import * as Constants from "./app-constants.model";

/**
 * Get application constants
 * saved in app-constants.model
 * grouped by field
 */
export interface IAppConstantsService {
    /**
     * Api
     */
    Api: Constants.Api;
    /**
     * Application
     */
    Application: Constants.Application;
    /**
     * Supported languages
     */
    Languages: Constants.Languages;
    /**
     * Local storage keys
     */
    LocalStorageKey: Constants.LocalStorageKey;
    /**
     * RegExp
     */
    Validator: Constants.Validator;
}
