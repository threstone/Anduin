export class BaseClass {
    static ins(...args: any[]) {
        let cls: any = this;
        if (!cls._instance) {
            cls._instance = new cls(...args);
        }
        return cls._instance;
    }
}