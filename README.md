# gnome-shell-extension-bottompanel
Move your GNOME 3.16 shell panel to the bottom

## To Use:
```
git clone https://github.com/Thoma5/gnome-shell-extension-bottompanel.git
cp gnome-shell-extension-bottompanel ~/.local/share/gnome-shell/extensions/bottompanel@tmoer93
```
And activate it in the gnome-tweak-tool under extensions

## Known issues:
+ Strange context menu behavior for legacy tray icons when topicon extension is activated (not showing up, Workaround: deactivating/activating the topicon extension or using the GNOME 3.16 standard for legacy tray icons)
+ The panel bubble (e.g. Gnome global menu, date etc.) is placed about 10 px too high-- possible fixable
