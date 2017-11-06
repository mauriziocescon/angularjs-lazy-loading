import template from "./contact-loader.component.html";
import "./contact-loader.component.scss";

import {
    IUIUtilitiesService,
    IUtilitiesService,
} from "../app.module";
import { Logger } from "../shared/shared.module";

export class ContactLoaderController {
    public static $inject = ["$ocLazyLoad", "$translate", "UIUtilitiesService", "UtilitiesService"];

    protected ocLazyLoad: oc.ILazyLoad;
    protected translate: ng.translate.ITranslateService;
    protected uiUtilitiesService: IUIUtilitiesService;
    protected utilitiesService: IUtilitiesService;

    protected busy: boolean;
    protected downloadSucceed: boolean;

    constructor($ocLazyLoad: oc.ILazyLoad,
                $translate: ng.translate.ITranslateService,
                UIUtilitiesService: IUIUtilitiesService,
                UtilitiesService: IUtilitiesService) {
        this.ocLazyLoad = $ocLazyLoad;
        this.translate = $translate;
        this.uiUtilitiesService = UIUtilitiesService;
        this.utilitiesService = UtilitiesService;
    }

    public get isLoadingData(): boolean {
        return this.busy === true;
    }

    public get shouldRetry(): boolean {
        return this.downloadSucceed === false && this.isLoadingData === false;
    }

    public get showData(): boolean {
        return this.isLoadingData === false && this.shouldRetry === false;
    }

    public get showDownload(): boolean {
        return this.shouldRetry || !this.showData;
    }

    public $onInit(): void {
        this.downloadSucceed = false;
        this.loadModule();
    }

    public $onDestroy(): void {
        // do nothing
    }

    public loadModule(): void {
        this.busy = true;

        this.ocLazyLoad.load(["lazy.js"])
            .then(() => {
                this.busy = false;
                this.downloadSucceed = true;
                this.translate(["CONTACT_LIST.MODULE_LOADED"])
                    .then((translations: any) => {
                        this.uiUtilitiesService.toast(translations["CONTACT_LIST.MODULE_LOADED"]);
                    });
            })
            .catch((e) => {
                this.busy = false;
                Logger.warn(e.toString());
                this.uiUtilitiesService.toast(e.toString());
            });
    }
}

export const ContactLoaderComponent: ng.IComponentOptions = {
    bindings: {},
    controller: ContactLoaderController,
    template: () => {
        return template;
    },
};
