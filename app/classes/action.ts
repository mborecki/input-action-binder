import InputActionBinder from './../index';

export default class Action {
    name : string;
    binder : InputActionBinder;

    constructor(binder: InputActionBinder, name : string) {
        this.binder = binder;
        this.name = name;
    }

    bind(key : Input | Input[]) : Action {
        throw "TODO";

        return this;
    }
}
