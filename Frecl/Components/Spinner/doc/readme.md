Spinner
=======

> Adds a spinner to your view. Uses *Redux*.

## How to Use
###  1. Hook up the spinner reducer to the application store. 
It'll depend on how you propagate your reducers as part of your app initialization, but to access the `Spinner` reducer object, do this:

```javascript
export {Reducer as Spinner} from "Components/Spinner/Spinner.jsx";
```

### 2. Add the spinner to your React component

Import both the Spinner component and the Spinner widget. 

```javascript
import {default as Spinner, inlineStandard} from 'Components/Spinner/Spinner.jsx';
```
The widget (inlineStandard in this instance) is simply a jsx function which returns markup. 

Place the spinner where you'd like it in the view. `id` needs to be *unique*.

```jsx
<Spinner type={inlineStandard} id='uniqueid'/>
```

If you want to show the spinner initially, use the `debug` attribute.

### 3. Make it happen

Spinners are switched on and off via *dispatchers*. So best to `show` them before a callback, and `hide` them on completition of the callback (duh). They'll likely be called within another `Action` function.

First, you'll need to hook up your dependencies:

```jsx
import * as spinnerAction from 'Components/Spinner/Actions.js';
```

To show your spinner :

```jsx
dispatch(spinnerAction.show("idOfSpinner"));
```

To hide:

```jsx
dispatch(spinnerAction.hide("idOfSpinner"));
```



