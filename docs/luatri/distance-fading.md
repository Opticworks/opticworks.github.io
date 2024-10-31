---
outline: deep
---

# Setting up distance fading

Distance fading is the act of having small details fade out when they contribute very little to any certain scene or frame.

## Setup

The best way to set up distance fading is through pressing `[CTRL]` + `[F]` to search for your objects, selecting their models, and applying the relevant tags to those models.

**Pay attention.** Do not fade objects that are game-centric, i.e. item chests, collectables and so on, as in the event of Luatri crashing they may not re-appear.

### Tags

#### Detail_Small

Used for details such as plants, trash, and pottery.
Change the range of this by updating `cfg.DISTANCE_FADING_RANGE_SMALL` to however much you want. Default is 250.

#### Detail_Medium

Used for details such as bus stops, balconies, dumpsters, rooftop units and window units. 
Change the range of this by updating `cfg.DISTANCE_FADING_RANGE_MEDIUM` to however much you want. Default is 500.


#### Detail_Large

Used for streetlights and traffic lights.
Change the range of this by updating `cfg.DISTANCE_FADING_RANGE_LARGE` to however much you want. Default is 750.

#### Detail_Ultra

Not used by anything but it's there if you need it.
Change the range of this by updating `cfg.DISTANCE_FADING_RANGE_ULTRA` to however much you want. Default is 1000.
