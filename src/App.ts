class App {
    init() {
        let canvas = <HTMLCanvasElement>document.getElementById('root');
        let ctx = canvas.getContext('2d');
        return ctx;
    }
}

export default App