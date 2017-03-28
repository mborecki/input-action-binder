import Action from './classes/action';
import {InputValue} from './types/input';

class InputActionBinder {
    private actions: Map<string, Action>
    private bindings: Map<InputValue, Action>

    constructor(plugin? : Plugin) {
        this.actions = new Map();
        this.bindings = new Map();
    }

    addAction(name: string, type?) : Action {
        let action = new Action(this, name);

        this.actions.set(name, action);
        return action;
    }

    getAction(name: string) : Action {
        return this.actions.get(name);
    }

    bind(input : InputValue, action: Action) : Action {

        this.bindings.set(input, action);

        return action;
    }

    tap(input : InputValue) {
        this.setInput(input, true);
        this.setInput(input, false);
    }

    setInput(input : InputValue, state: boolean) {
        let action : Action = this.bindings.get(input);

        if (action) {
            action.state = state;
        }
    }
}

export default InputActionBinder;
