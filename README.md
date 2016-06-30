# gnome-shell-extension-bottompanel
Move your GNOME 3.16 - 3.2x shell panel to the bottom

## To Use:
```
git clone https://github.com/Thoma5/gnome-shell-extension-bottompanel.git
cp -r gnome-shell-extension-bottompanel ~/.local/share/gnome-shell/extensions/bottompanel@tmoer93
```
And activate it in the gnome-tweak-tool under extensions.

For transparency use this extension:
https://extensions.gnome.org/extension/358/activities-configurator/
## Planned Features:
+ Settings to configure the panel

## Known issues:
+ Need to restart the shell for full functionality (Alt+F2 , type "r" and press enter)
+ Sometimes strange context menu behavior for legacy tray icons when topicon extension is activated (not showing up, Workaround: deactivating/activating the topicon extension or using the GNOME 3.16/3.18 standard for legacy tray icons)
+ Strange window behaviour if you try to move a snapped window by dragging from the panel --probably not fixable without patches on mutter

## Thanks to:
github.com/tuxor1337 for code cleanup and adding multi-monitor support.
github.com/achadwick for fixing some glitches related to panel height.
github.com/robbiewxyz for a hint, to use css to fix the gap issue.
