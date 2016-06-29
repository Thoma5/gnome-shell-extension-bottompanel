
const Main = imports.ui.main;
const PanelBox = Main.layoutManager.panelBox;

let MonitorsChangedListener = null;
let HeightNotifyListener = null;

function _toTop() {
    PanelBox.set_anchor_point(0,0);
}

function _toBottom() {
    let monitor = Main.layoutManager.primaryMonitor;
    PanelBox.set_anchor_point(0,(-1)*(monitor.height-PanelBox.height));
}

function init() { }

function enable() {
    MonitorsChangedListener = global.screen.connect("monitors-changed", _toBottom);
    HeightNotifyListener = PanelBox.connect("notify::height", _toBottom);
    _toBottom();
    Main.panel.actor.add_style_class_name("popup-menu");
}

function disable() {
    if(HeightNotifyListener !== null) {
        PanelBox.disconnect(HeightNotifyListener);
    }
    if(MonitorsChangedListener !== null) {
        global.screen.disconnect(MonitorsChangedListener);
    }
    _toTop();
    Main.panel.actor.remove_style_class_name("popup-menu");
}
