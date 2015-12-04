
const Main = imports.ui.main;
const PanelBox = Main.layoutManager.panelBox;

let MonitorsChangedListener = null;

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
    _toBottom();
}

function disable() {
    if(MonitorsChangedListener !== null) {
        global.screen.disconnect(MonitorsChangedListener);
    }
    _toTop();
}
