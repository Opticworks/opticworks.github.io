---
outline: deep
---

# Interior culling

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
