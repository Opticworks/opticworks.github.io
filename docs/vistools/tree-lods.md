---
outline: deep
---

# Setting up tree LODs

::: warning PROCEED WITH CAUTION
Unfortunately the billboard system that we used to use was supremely inefficient. So now tree impostors are tree LODs. Sorry about that.
:::

Before you set up tree LODs, you need to have an low-poly version of the tree that you wish to use.

Trees are set up like this:
```
. Workspace
└ Trees
  └ OakTree
    ├ TreeModel
    │ ├ Trunks
    │ └ Leaves
    └ LOD
      └ TreeModel
        ├ Trunks
        └ Leaves
```

`OakTree.TreeModel` must have a tag called `Detail_Small`. This allows CollectionService to get the tree model and index it for VisTools use.
