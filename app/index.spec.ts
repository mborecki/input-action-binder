/// <reference types="jest" />

import IAB from './index';
import Action from './classes/action';

describe('InputActionBinder', () => {

    describe('addAction / getAction', () => {
        let IABinder : IAB;

        beforeEach(() => {
            IABinder = new IAB();
        });

        it('should return added action', () => {
            let actionName = 'action-1';
            let action = IABinder.addAction(actionName);

            expect(action).toBeInstanceOf(Action);
            expect(action.name).toEqual(actionName);
        });

        it('should be able to get previous added action', () => {
            let actionName = 'action-2';
            IABinder.addAction(actionName);

            let action = IABinder.getAction(actionName);

            expect(action).toBeInstanceOf(Action);
            expect(action.name).toEqual(actionName);
        });
    });

});

