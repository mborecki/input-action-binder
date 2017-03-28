import InputActionBinder from './../index';
import {InputValue} from './../types/input';

export default class Action {
    name : string;

    private _state : boolean = false;
    private binder : InputActionBinder;

    private fns = {
        on: [],
        off: [],
        change: []
    }

    constructor(binder: InputActionBinder, name : string) {
        this.binder = binder;
        this.name = name;
    }

    bind(input : InputValue) : Action {
        this.binder.bind(input, this);

        return this;
    }

    set state(value: boolean) {
        if (value !== this._state) {
            this._state = value;
            if (this._state) {
                this.fns.on.forEach((fn) => {
                    fn();
                });
            } else {
                this.fns.off.forEach((fn) => {
                    fn();
                });
            }
        }
    }

    get state() {
        return this._state;
    }

    get isOn() : boolean {
        return this.state;
    }

    get isOff() : boolean {
        return !this.state;
    }

    onOn(fn: Function) {
        this.fns.on.push(fn);
    }

    onOff(fn: Function) {
        this.fns.off.push(fn);
    }

    onChange(fn: Function) {

    }
}
