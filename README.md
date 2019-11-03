# Eastereggs

You like to amaze or annoy users of your website with funny [easter eggs](https://en.wikipedia.org/wiki/Easter_egg_%28media%29)? Then this repository is what you need!
It provides a lot of easter eggs and a simple API.

If you have more ideas, let me know by creating a feature request!

Notice that it is still in development.

## Demo

Click [here](https://rawgit.com/KevinHerklotz/easteregg/master/build/demo.html) to see a demo page.

## Install

The aim is to install it via npm with `npm install eastereggs --save` and then just require or import it.
This is not supported yet, but it's coming soon.

## Usage

```javascript
import { unicornCursor, meteor } from 'eastereggs'
// To start it
unicornCursor.start();

// Some eastereggs have optional options
unicornCursor.start(options);

// To stop it
unicornCursor.stop();
```
