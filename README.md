# input-action-binder

TODO - description

## Functionality

TODO

## Use cases

### Initialization

#### Initialization for browser API

```
import 'InputActionBinder' from './input-action-binder';
import 'IABBrowser' from './input-action-binder/browser';

let IAB = new InputActionBinder(IABBrowser);

```

#### Initialization for PhaserJS

```
import 'InputActionBinder' from './input-action-binder';
import 'IABPhaser' from './input-action-binder/phaser';

let IAB = new InputActionBinder(IABPhaser);

```

#### Keyboard input

```
IAB.addAction('jump', IAB.ACTION.BUTTON)
    .bind([IAB.KEYS.SPACE, IAB.KEYS.W]);

IAB.getAction('jump').onDown(() => {
    doSomething();
});

IAB.getAction('jump').onUp(() => {
    doSomething();
});

IAB.getAction('jump').isDown() // -> boolean
IAB.getAction('jump').isUp() // -> boolean
IAB.getAction('jump').value // -> boolean
```

#### Triggers - actions with true/false state memory

```
IAB.addAction('duck', IAB.ACTION.TRIGGER)
    .bind(IAB.KEYS.C)
    .bind(IAB.KEYS.CTRL);

IAB.getAction('duck').onDown(() => {
    doSomething();
});

IAB.getAction('duck').onUp(() => {
    doSomething();
});

IAB.getAction('duck').isDown() // -> boolean
IAB.getAction('duck').isUp() // -> boolean
IAB.getAction('duck').value // -> boolean
```

#### Signals - actions with value from -1 to 1 - gamepad sticks or mouse move

TODO

## API

 TODO
