import * as angular from "angular";

/**
 * Generic utilities
 */
export interface IUtilitiesService {
    /**
     * Defer the calling of func
     *
     * @param func
     * @param n
     * @param scope
     * @param args
     */
    defer(func: Function, n: number, scope: any, ...args: any[]): ng.IPromise<any>; // tslint:disable-line:ban-types
    /**
     * Cancel the defer func
     *
     * @param promise
     */
    clearDefer(promise: ng.IPromise<any>): void;
    /**
     * Call func on a particular scope
     *
     * @param func
     * @param scope
     * @param args
     */
    call(func: Function, scope: any, ...args: any[]): void; // tslint:disable-line:ban-types
    /**
     * Deeply copy the object
     *
     * @param original
     */
    clone<T>(original: T): T;
    /**
     * Compare the objects
     * using angular equal
     *
     * @param value1
     * @param value2
     */
    equals<T>(value1: T, value2: T): boolean;
    /**
     * Create a unique id
     */
    createUUID(): string;
    /**
     * Determine is a string is
     * not undefined and not empty
     *
     * @param text
     */
    isDefinedAndNotEmpty(text: string | undefined): boolean;
    /**
     * Get today
     */
    getToday(): Date;
    /**
     * Get now
     */
    getNow(): Date;
    /**
     * Get absolute time
     */
    getTimeFrom1970(): number;
    /**
     * Add a script to the DOM
     * and load it
     *
     * @param src
     */
    addScript(src: string): void;
    /**
     *
     * @param url
     */
    getPath(url: string | undefined): string;
    /**
     *
     */
    getCurrentPath(): string;
    /**
     * Return params of a url
     *
     * @param url
     */
    parseQueryString(url: string): any;
    /**
     * Count the number of scopes / watchers
     * for every component. Analyze the DOM
     */
    analyzeWebApp(): string;
    /**
     * Log an $http request
     *
     * @param url
     * @param requestData
     */
    logRequest(url: string, requestData?: any): void;
    /**
     * Log an $http response
     *
     * @param {angular.IHttpResponse<any> | Array<angular.IHttpResponse<any>>} response
     * @param {number} startTime
     */
    logResponse(response: ng.IHttpResponse<any> | Array<ng.IHttpResponse<any>>, startTime: number): void;
    /**
     * Create a random response
     * with common http code
     *
     * @param data
     * @param headers
     */
    randomHttpStatusCode(data?: any, headers?: any): any;
    /**
     * Parse link property
     * inside headers
     *
     * @param headers
     */
    parseLinkHeaders(headers: any): any;
}
