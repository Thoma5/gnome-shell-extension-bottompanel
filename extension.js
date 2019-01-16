
const Main = imports.ui.main;
const Meta = imports.gi.Meta;
const PanelBox = Main.layoutManager.panelBox;

let MonitorsChangedListener = null;
let HeightNotifyListener = null;
let rightPanelBarrier = null;

function _toTop() {
   let monitor = Main.layoutManager.primaryMonitor; 
   if (this.rightPanelBarrier) {
        this.rightPanelBarrier.destroy()
   }
   this.rightPanelBarrier = new Meta.Barrier({
       display: global.display,
       x1: monitor.width, 
       x2: monitor.width, 
       y1: PanelBox.height, 
       y2: 0, 
       directions: Meta.BarrierDirection.NEGATIVE_Y
   });
   PanelBox.set_anchor_point(0,0);
}

function _toBottom() {
    let monitor = Main.layoutManager.primaryMonitor;
    if (this.rightPanelBarrier) {
        this.rightPanelBarrier.destroy()
    }
    this.rightPanelBarrier = new Meta.Barrier({
        display: global.display, 
        x1: monitor.width, 
        x2: monitor.width, 
        y1: monitor.height - PanelBox.height, 
        y2: monitor.height,
        directions: Meta.BarrierDirection.NEGATIVE_Y
    });
    // TODO: find a way to replace the rightPanelBarrier instead of destroying
    Main.layoutManager._rightPanelBarrier.destroy()
    PanelBox.set_anchor_point(0,(-1)*(monitor.height-PanelBox.height));
}

function init() { }

function enable() {
    MonitorsChangedListener = Main.layoutManager.connect("monitors-changed", _toBottom);
    HeightNotifyListener = PanelBox.connect("notify::height", _toBottom);
    _toBottom();
    Main.panel.actor.add_style_class_name("popup-menu");
}

function disable() {
    if(HeightNotifyListener !== null) {
        PanelBox.disconnect(HeightNotifyListener);
    }
    if(MonitorsChangedListener !== null) {
        Main.layoutManager.disconnect(MonitorsChangedListener);
    }
    _toTop();
    Main.panel.actor.remove_style_class_name("popup-menu");
}
