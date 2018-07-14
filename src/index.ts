import App from './App';
import Drawer from './Drawer';

let app = new App();
let ctx = app.init();
let drawer = new Drawer(ctx);
drawer.drawNumbers();
