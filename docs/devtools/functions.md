---
outline: deep
---

# Functions

::: tip RECOMMENDATION
3 functions in this section have the `parent` argument. This is because you can set the parent of your chosen UI element to anything that you want, although **it is highly recommended** to set the parents to either `dtLeftScrollframe` or `dtRightScrollframe`. 
::: 

You can add your own momentary buttons, which are useful for things like teleports, or toggles, which are useful for setting certain game states. 

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

