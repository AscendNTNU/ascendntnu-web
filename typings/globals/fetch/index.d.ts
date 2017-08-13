/// <reference path="../es6-promise/index.d.ts" />

interface Window {
    fetch(url: any, init?: any): Promise<any>;
}

// declare var fetch: typeof window.fetch;
