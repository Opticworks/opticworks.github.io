---
outline: deep
---

# Initials of VisTools
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


### Setting up interior culling

The script will expect you to have a folder on `workspace.Interiors`. This folder houses more folders that act as individual interiors. Each interior folder is expected to have its own `cullBrush`.

It should be structured like this:

```
. Workspace
└ Interiors
   ├ Alice
   │  ├ InteriorModel
   │  └ cullBrush
   └ Bob
      ├ InteriorModel
      └ cullBrush
```

The `cullBrush` should be a `BasePart` and should have these properties:

```lua
cullBrush.CanCollide = false
cullBrush.Anchored = true
cullBrush.Transparency = 1
``` 

### Setting up particle culling

By default, particle culling doesn't need any implementation and can work just fine without having to do anything. You can however set `PARTICLE_CULLING_RANGE` to however many studs you want.

### Setting up LOD's

::: info
 This section is a stub. It will be expanded later on.
:::

### Setting up distance fading

::: info
 This section is a stub. It will be expanded later on.
:::

### Setting up tree impostors

Before you set up tree impostors, you need to have an image processed and uploaded. The image must be of the same tree that you're using.

Trees are set up like this:
```
. Workspace
└ Trees
  └ OakTree
    ├ TreeModel
    │ ├ Trunks
    │ └ Leaves
    └ Impostor
      └ Billboard
        └ ImageLabel

```

`TreeModel` must have a tag called `Detail_Small`. This allows CollectionService to get the tree model and index it for VisTools use.

## Setting up DevTools

::: tip RECOMMENDATION
3 functions in this section have the `parent` argument. This is because you can set the parent of your chosen UI element to anything that you want, although **it is highly recommended** to set the parents to either `dtLeftScrollframe` or `dtRightScrollframe`. 
::: 

By default, DevTools is already set up for VisTools functionality. However, you can add your own momentary buttons, which are useful for things like teleports, or toggles, which are useful for setting certain game states. 

In the DevTools script, you have 5 functions to choose from.

### function: _G.out

A global function that outputs a little message on the lower left corner of your render window. It can be called with:

```lua
_G.out("string",5) -- message,timeout
```

And then there's the UI element functions, which are:

### function: dtDivider

`dtDivider` will insert an unobtrusive divider meant to segregate tasks and subtasks.

```lua
dtDivider("STUFF",dtLeftScrollframe) -- message,parent
```

### function: dtToggleButton

`dtToggleButton` will insert, you guessed it, a toggle button meant for switching something on or off.

```lua
dtToggleButton(
    "Render Analytics", -- Title
    "Toggles the graph window of framerate and frametime", -- On hover, shows tooltip/description
    false, -- The initial sliderState, can assign this to any boolean value that you want
    dtLeftScrollframe, -- Parent
    function(toggleRenderAnalyticsWindow) -- On button press, will call this function whether or not the sliderState is false.
)
```
### function: dtMomentaryButton

`dtMomentaryButton` is the exact same as `dtToggleButton` but with `sliderState` absent.

```lua
dtMomentaryButton(
    "Teleport to spawn", -- Title
    "", -- Not having a tooltip is ok! 
    dtRightScrollframe, -- Parent
    function() -- You can also call functions like this!
        game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame.Position = workspace.SpawnLocation.Position + Vector3.new(0,10,0)
    end)
)
```

::: info
You should append these functions **at the end of the script** and not call them too early. Also, the order at which you call each function will also be mirrored on the UI itself. 
:::

## Using DevTools

By default, DevTools checks if you're in Studio. If you are, you'll be able to toggle DevMode with the right `[CTRL]` key, or by using the Konami Code.
If you use the Konami Code for something else, go to the `DevTools` script in `StarterPlayerScripts` and press `[CTRL]`+`[F]` to search for the unique identifier `1532`.

Toggle DevMode on with the right `[CTRL]` key. You will get outputs on the lower left edge of the screen. You will also have a button in the middle-left side of your screen that you can click to open up the DevTools frame. Clicking it will bring up DevTools. 
From thereon you'll be able to close DevTools by clicking the X in the top right or by clicking the button in the middle-left.

And that's it! All your buttons and stuff will be in there :)