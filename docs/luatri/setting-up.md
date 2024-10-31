---
outline: deep
---

# Setting up
::: warning
 Trying to use Luatri with `StreamingEnabled` during the initial development phase is **not supported** and can and will break Luatri.
:::
## First installation

::: info
working on making this not suck :)
:::

The install is as follows:
1. Make sure you're on `/src` on the [GitHub repo](https://github.com/Opticworks/Luatri/tree/main/src).
2. Copy everything from `/src/client` over to `StarterPlayerScripts`.
3. Copy everything from `/src/gui` over to `StarterGui`.

Your game now has Luatri! The explorer structure should now look like this:

```
. 
├ StarterGUI
│ └ DGUI
└ StarterPlayer
   └ StarterPlayerScripts
      ├ DevTools
      └ Luatri
```

## Ok, so what now?

Now you just start setting up stuff that makes your FPS go up!