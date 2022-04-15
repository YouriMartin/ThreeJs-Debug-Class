// ...
import debugArray from "./MyClassDebug ";

export default class MyClass {
  constructor() {
    // ...

    // Debug
    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder("MyClass");
      this.debug.setDebug(debugArray, this.debugFolder, this);
    }
  }
  // ...
}
