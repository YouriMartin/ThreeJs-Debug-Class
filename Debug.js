import GUI from "lil-gui";

export default class Debug {
  constructor() {
    this.active = window.location.hash === "#debug";
    if (this.active) {
      this.ui = new GUI();
    }
  }

  setDebug(debugArray, debugFolder, context) {
    debugArray.forEach((element) => {
      switch (element.type) {
        case "folder":
          const folderName = debugFolder.addFolder(element.name);
          if (element.elements.length) {
            this.setDebug(element.elements, folderName, context);
          }
          break;
        case "object":
          if (element.add.onChange) {
            debugFolder
              .add(
                this.unStringPath(element.add.path, context),
                element.add.value
              )
              .min(element.add.min)
              .max(element.add.max)
              .step(element.add.step)
              .name(element.name)
              .onChange(() => {
                this.unStringCallback(element.add.onChange, context);
              });
          } else if (element.add.onFinishChange) {
            debugFolder
              .add(
                this.unStringPath(element.add.path, context),
                element.add.value
              )
              .min(element.add.min)
              .max(element.add.max)
              .step(element.add.step)
              .name(element.name)
              .onFinishChange(() => {
                this.unStringCallback(element.add.onFinishChange, context);
              });
          } else {
            debugFolder
              .add(
                this.unStringPath(element.add.path, context),
                element.add.value
              )
              .min(element.add.min)
              .max(element.add.max)
              .step(element.add.step)
              .name(element.name);
          }
          break;
        case "color":
          if (element.add.onChange) {
            debugFolder
              .addColor(
                this.unStringPath(element.add.path, context),
                element.add.value
              )
              .name(element.name)
              .onChange(() => {
                this.unStringCallback(element.add.onChange, context);
              });
          } else if (element.add.onFinishChange) {
            debugFolder
              .addColor(
                this.unStringPath(element.add.path, context),
                element.add.value
              )
              .name(element.name)
              .onFinishChange(() => {
                this.unStringCallback(element.add.onFinishChange, context);
              });
          }
          break;
      }
    });
  }

  unStringPath(pathString, context) {
    let path;
    const pathArray = pathString.split(".");
    pathArray.forEach((element) => {
      if (!path) {
        path = context[element];
      } else {
        path = path[element];
      }
    });
    return path;
  }

  unStringCallback(callBack, context) {
    let path;
    const pathArray = callBack.value.split(".");
    pathArray.forEach((element) => {
      if (!path) {
        path = context[element];
      } else {
        path = path[element];
      }
    });

    switch (callBack.type) {
      case "function":
        return path.call(context);
        break;
      case "path":
        return path;
        break;
      default:
        return path;
        break;
    }
  }
}
