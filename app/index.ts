import Action from './classes/action';

class InputActionBinder {
    actions: Map<string, Action>

    constructor(plugin? : Plugin) {
        this.actions = new Map();
    }

    addAction(name: string, type?) : Action {
        let action = new Action(this, name);

        this.actions.set(name, action);
        return action;
    }

    getAction(name: string) : Action {
        return this.actions.get(name);
    }
}

export default InputActionBinder;
