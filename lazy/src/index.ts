import * as angular from "angular";
import { contact } from "./contact/contact.module";

const lazyModule = angular.module("lazy", [contact]);

export const lazy = lazyModule.name;

export * from "./contact/contact.module";
