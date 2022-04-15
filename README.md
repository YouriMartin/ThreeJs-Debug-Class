# ThreeJs-Debug-Class
Debug class based on the Bruno Simon's Debug class

With this class you can write your debug in an other file.

In the debug file you can write three different objects : 
    
    1. Folder : 
        It looks like :
        {
            type: "folder",
            name: "myFolderName",
            elements : []
        }

        It corresponds to the lil-gui : 
            const folder = debugFolder.add(name)

        In the elements array you can put object / colors / folder

    
    2. Object :
        It looks like :
        {
            type: "object",
            name: "myObjectName",
            add : {
                path: "parent.child.child",
                value : "value",
                min: 1,
                max : 10,
                step: 0.001,
            }
        }

        You can add in the "add" object a callBack function :

            - onChange :

                add : {
                    ...

                    onChange: {
                        type: "function", // there are 2 types :   "function" or "path"
                        value: "myFunction" // if path value: "parent.child.child"
                    }
                }
            
            - onFinishChange :

                add : {
                    ...

                    onFinishChange: {
                        type: "function", // there are 2 types :   "function" or "path"
                        value : "myFunction", // if path value: "parent.child.child"
                    }
                }
        
         It corresponds to the lil-gui : 
            debugFolder.add(add.path, add.value)
                .min(add.min)
                .max(add.max)
                .step(add.step)
                .name(name)
                .onFinishChange(()=>{
                    myFunction();
                })
    
    3. Color :
         It looks like :
         {
            type: "color",
            name: "myColor",
            add: {
                path: "parent.child.child",
                value: "value",
                onChange: {
                    type: "path",
                    value: "parent.child.child",
                },
            },
         }

        It's like with the object, you can add callBack function.

        It corresponds to the lil-gui : 
            debugFolder.addColor(add.path, add.value)
                .name(name)
                .onChange(() =>{
                    parent.child.child;
                })


The way to call that debug function :


    In your class :
        - import :
    import debugArray from "./MyClassDebug ";

        - in the constructor :
    ...
    // Debug
    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder("MyClass");
      this.debug.setDebug(debugArray, this.debugFolder, this);
    }
    
