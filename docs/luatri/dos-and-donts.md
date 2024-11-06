---
outline: deep
---

# Do's and Don'ts

This section will help you steer clear of making your game look and feel like crap.


## DO

**DO** use Meshes with SurfaceAppearances. Your game will love you if you use them extensively.


## DON'T


### use Decals

Applying a decal to a part will make the part render twice; alongside the decal itself being a drawcall. It sucks.

### use Billboards

There have been extensive reports of billboards sometimes halving FPS simply by adding one into the game world. They're also... a drawcall each. It's ok to use them if you have to, but if there's no application for it, then don't.

### use Roblox's terrain

A single voxel of Roblox's terrain is definitely gonna take up a few drawcalls. Do not use them extensively.

## ETC

Make extensive use of the MicroProfiler. Especially check the render portion of each frame; it can tell you what goes on with plenty of accuracy. If a scope takes too long for your taste, check the [MicroProfiler tag reference](https://create.roblox.com/docs/studio/microprofiler/tag-table) in the Roblox docs.