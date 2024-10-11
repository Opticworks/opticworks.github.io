---
outline: deep
---

# Initials of VisTools
::: warning
 Trying to use VisTools with `StreamingEnabled` during the initial development phase is **not supported** and can and will break VisTools.
:::
## First installation

::: info
We know that this install method sucks and we will have it replaced with just packages or something similar once we get to 1.0.0.
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
   └ HouseMD
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



### Setting up distance fading

::: info
 This section is a stub. It will be expanded later on.
:::

### Setting up tree impostors

::: info
 This section is a stub. It will be expanded later on.
:::

## Setting up DevTools

By default, DevTools is already set up for VisTools functionality. However, you can add your own momentary buttons, which are useful for things like teleports, or toggles, which are useful for setting certain game states. 

In the DevTools script, you have 5 functions to choose from.

### function: _G.out

A global function that outputs a little message on the lower left corner of your render window. It can be called with:

```lua
_G.out("string",5) -- message,timeout
```

And then there's the UI element functions, which are:

### function: dtDivider

```lua
dtDivider("STUFF",dtLeftScrollframe) -- message,parent
```

### function: dtToggleButton

Let's first take a look at the `dtToggleButton` function and how it normally would be called.

```lua
dtToggleButton(
    "Framerate Graphing", -- Title
    "Toggles the graph window of framerates", -- On hover, shows tooltip/description
    false, -- The initial sliderState, can assign this to any boolean value that you want
    dtLeftScrollframe, -- Parent
    function(toggleFramerateGraphWindow) -- Will call this function whether or not the sliderState is false.
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
        game:GetService("Players").LocalPlayer.Character.HumanoidRootPart.CFrame.Position = workspace.SpawnLocation.Position + Vector3.new(0,10,0)
    end)
)
```


::: info
You should append these functions **at the end of the script** and not call them too early. Also, the order at which you call each function will also be mirrored on the UI itself. 
 
:::
::: details
You may have noticed that 3 functions have the `parent` argument. This is because you can set the parent of your chosen UI element to anything that you want, although **it is highly recommended** to set the parents to either `dtLeftScrollframe` or `dtRightScrollframe`. 
:::

## Using DevTools

By default, DevTools checks if you're in Studio, or have Studio access. If either of these is true, you'll be able to toggle DevTools with the Konami code, which is: 

`↑ ↑ ↓ ↓ ← → ← → [B] [A]`

If you'd like to change this out for something else, don't worry; it's incredibly easy to do so.

1. Go into the `DevTools` script in `StarterPlayerScripts`.
2. Press `[CTRL]`+`[F]` to find mentions of `Konami`.
3. Delete or comment out any Konami related code.
4. Write your own functions that call `devmode()` with a boolean.