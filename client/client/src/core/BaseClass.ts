class BaseClass {
    public static ins<T extends {}>(this: new (...args: any[]) => T, ...args: any[]): T {
        if (!(<any>this).__instance__) {
            const arr = [];
            for (let index = 0; index < arguments.length; index++) {
                arr.push(arguments[index])
            }
            (<any>this).__instance__ = new this(...arr);
        }
        return (<any>this).__instance__
    }
}