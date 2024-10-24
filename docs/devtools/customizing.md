---
outline: deep
---

# Customizing DevTools

You can customize DevTools to your liking, by letting you pick your own colors, setting whether or not text is laid out right-to-left (for support of languages that need it,) and fonts. This section will need you to venture into the theme ModuleScript found in `StarterGui.dGUI.Theme`.

I'm sure you're already fainting at the sight of how many sections there are in this guide.
**Keep in mind that following this guide is optional. By default, DevTools is already set up for Luatri functionality.** 
You should only follow this guide if you want to customize DevTools.

## Pre-made themes

There are a few themes already pre-made for your choosing. If you want to try them out, they are [here](https://github.com/Opticworks/Luatri/tree/main/src/custom_themes).

## Variables

### `globalFontId`

Font IDs can be found in the [Roblox Creator Hub](https://create.roblox.com/store/fonts). Pick a font you like and extract the ID from your browser's address bar and replace the original font with the ID of your liking.

### `rightToLeft` 

Set this to `true` if you use DevTools with languages and scripts that are right-to-left, like Arabic, Persian, or Hebrew.. or for style points.

### `color = {}`

This is a color table that is already populated with the default colors. You can add your own colors in this table and then reference them to your liking for the next elements.

#### `ui_background_color`

The background color of the main Frame that houses all DevTools elements.

#### `ui_titlebar_color`

The color of the Titlebar that houses DevTools' title and close button.

#### `ui_titlebar_content_color` 

The color of titlebar content, which includes the DevTools' title and close button.

#### `ui_stroke_color`

The color of the stroke that surrounds the main Frame of DevTools and the Titlebar.

#### `ui_button_background_color`

The color of button backgrounds, which includes ToggleButtons and MomentaryButtons.

#### `ui_button_text_color` 

The color of button text labels, which includes ToggleButtons and MomentaryButtons.

#### `ui_button_tooltip_background_color`

The color of tooltip backgrounds.

#### `ui_button_tooltip_text_color` 

The color of tooltip labels.

#### `ui_divider_group_color`

The color of category divider groups, including text and the horizontal lines.

#### `ui_button_slider_on_color`

The accent color that signifies when a value that is updated by a button is on or `true`.

#### `ui_button_slider_off_color`

The accent color that signifies when a value that is updated by a button is on or `false`.

#### `ui_button_slider_circle_color`

The color of the slider knob.

#### `ui_scrollbar_color`

The color of the ScrollingFrame scrollbars.

