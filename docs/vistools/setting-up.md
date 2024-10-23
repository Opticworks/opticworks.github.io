---
outline: deep
---

# Setting up
::: warning
 Trying to use VisTools with `StreamingEnabled` during the initial development phase is **not supported** and can and will break VisTools.
:::
## First installation

::: info
We know that this install method sucks and we will have it replaced with GitHub packages once we get to 1.0.0.
:::

The install is as follows:
1. Make sure you're on `/src` on the [GitHub repo](https://github.com/Opticworks/VisTools/tree/main/src).
2. Copy everything from `/src/client` over to `StarterPlayerScripts`.
3. Copy everything from `/src/gui` over to `StarterGui`.

Your game now has VisTools! The explorer structure should now look like this:

```
. 
├ StarterGUI
│ └ DGUI
└ StarterPlayer
   └ StarterPlayerScripts
      ├ DevTools
      └ VisTools
```

## Ok, so what now?

Now you just start setting up stuff that makes your FPS go up!