export default [
  {
    type: "folder",
    name: "myFirstFolder",
    elements: [
      {
        type: "object",
        name: "myObject1",
        add: {
          path: "parent.child.child",
          value: "value",
          min: 1,
          max: 10,
          step: 0.001,
        },
      },
      {
        type: "folder",
        name: "mySecondFolder",
        elements: [
          {
            type: "object",
            name: "myObjectWithChange",
            add: {
              path: "parent.child.child",
              value: "value",
              min: 1,
              max: 10,
              step: 0.001,
              onChange: {
                type: "function",
                value: "myFunction",
              },
            },
          },
          {
            type: "object",
            name: "myObjectWithFinishChange",
            add: {
              path: "parent.child.child",
              value: "value",
              min: 1,
              max: 10,
              step: 0.001,
              onFinishChange: {
                type: "function",
                value: "myFunction",
              },
            },
          },
        ],
      },
    ],
  },
  {
    type: "folder",
    name: "colorFolder",
    elements: [
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
      },
      {
        type: "color",
        name: "myColor2",
        add: {
          path: "parent.child.child",
          value: "value",
          onFinishChange: {
            type: "function",
            value: "myFunction",
          },
        },
      },
    ],
  },
];
