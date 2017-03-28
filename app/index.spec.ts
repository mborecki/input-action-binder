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

    describe('simple binding', () => {
        let IABinder : IAB;
        let actionName = 'jump';
        let input = 'CustomInputName-1';

        beforeAll(() => {
            IABinder = new IAB();

            IABinder.addAction(actionName)
                .bind(input);
        });

        it('should detect button signal', () => {
            let mock = jest.fn();

            IABinder.getAction(actionName).onOn(mock);

            IABinder.tap(input);

            expect(mock).toHaveBeenCalled();
        });

    });

});

