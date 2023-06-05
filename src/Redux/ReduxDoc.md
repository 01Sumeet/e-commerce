#This is the default file structure for the redux state mangement process.
In a single Application it cant't be use twic.

src/
├── actions/
│ ├── actionTypes.js
│ ├── counterActions.js
│ └── todosActions.js
├── components/
│ ├── Counter.js
│ └── Todos.js
├── reducers/
│ ├── counterReducer.js
│ ├── todosReducer.js
│ └── rootReducer.js
├── store/
│ └── configureStore.js
└── App.js
