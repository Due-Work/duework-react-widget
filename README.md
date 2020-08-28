# React Widgets

The simplete way to integrate wiki and knowledge base, customer feedback, onboarding for growing teams. Beautiful, feature rich, and components.

## Widgets Demo

- [Popup Widget Demo](https://www.due.work/use-cases/samples/popup.html){"\_blank"}
- [Inline Widget Demo](https://www.due.work/use-cases/samples/inline.html){"\_blank"}
- [Dialog Widget Demo](https://www.due.work/use-cases/samples/dialog.html){"\_blank"}

## Standalone Link Demo

- [Sample Link](https://www.due.work/u/lsnWIg3c3G/help-and-support/lsnWIg3c3G){"\_blank"}

## Installation

```
npm install react-widgets --save
```

```
yarn add react-widgets
```

## How to use

```js
import ReactWidget from 'react-widgets';
```

```js
<ReactWidget
  workspaceId={workspaceId} //Required - follow step at bottom to get your workspaceId
  widget="popup" // popup | dialog | inline
  onLoad={() => {
    console.log('Widget has loaded successfully.');
  }}
/>
```

## Props

| Name              | Required | Type         | Default   | Description                                                                                                            |
| :---------------- | :------- | :----------- | :-------- | :--------------------------------------------------------------------------------------------------------------------- |
| `onLoad`          |          | `Function`   |           | A callback to be called when widget is loaded successfully. `function onLoad() { /* Widget Loaded Successfully */ }` } |
| `element`         |          | `Component`  | `'div'`   | Name of the element that the component should render as.                                                               |
| `hasMore`         |          | `Boolean`    | `false`   | Whether there are more items to be loaded. Event listeners are removed if `false`.                                     |
| `initialLoad`     |          | `Boolean`    | `true`    | Whether the component should load the first set of items.                                                              |
| `isReverse`       |          | `Boolean`    | `false`   | Whether new items should be loaded when user scrolls to the top of the scrollable area.                                |
| `loader`          |          | `Component`  |           | A React component to render while more items are loading. The parent component must have a unique key prop.            |
| `pageStart`       |          | `Number`     | `0`       | The number of the first page to load, With the default of `0`, the first page is `1`.                                  |
| `getScrollParent` |          | `Function`   |           | Override method to return a different scroll listener if it's not the immediate parent of InfiniteScroll.              |
| `threshold`       |          | `Number`     | `250`     | The distance in pixels before the end of the items that will trigger a call to `loadMore`.                             |
| `useCapture`      |          | `Boolean`    | `false`   | Proxy to the `useCapture` option of the added event listeners.                                                         |
| `useWindow`       |          | `Boolean`    | `true`    | Add scroll listeners to the window, or else, the component's `parentNode`.                                             |
