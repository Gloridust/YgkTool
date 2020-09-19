/// <reference types="react-scripts" />

interface Window {
    globalRef: any,
    /**
     * 修改文档标题和头部标题
     */
    updateTitle(pageName?: string): void,
    loadShow(): void;
    leftDrawer: any;
    appMenu: any;
    /**
     * 隐藏加载动画
     */
    loadHide(): void;
    loadingDelay: number;
    dialogInst: any
}

declare module 'gif.js' {
    class GIF {
        constructor(config);
        public addFrame(videoDom, config)
        public render()
        public on(eventName, cb)
    }
    export = GIF;
}
