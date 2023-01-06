class BaseClass {
    public static ins<T extends {}>(this: new () => T): T {
        if (!(<any>this).__instance__) {
            (<any>this).__instance__ = new this();
        }
        return (<any>this).__instance__
    }
}