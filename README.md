# React Widgets

The simplete way to integrate wiki and knowledge base, customer feedback, onboarding for growing teams. Beautiful, feature rich, and components.

## Widgets Demo

- [Popup Widget Demo](https://www.due.work/use-cases/samples/popup.html)
- [Inline Widget Demo](https://www.due.work/use-cases/samples/inline.html)
- [Dialog Widget Demo](https://www.due.work/use-cases/samples/dialog.html)

## Standalone Link Demo

- [Sample Link](https://www.due.work/u/lsnWIg3c3G/help-and-support/lsnWIg3c3G)

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

| Name           | Required | Type         | Default   | Description                                                                                                            |
| :------------- | :------- | :----------- | :-------- | :--------------------------------------------------------------------------------------------------------------------- |
| `onLoad`       |          | `Function`   |           | A callback to be called when widget is loaded successfully. `function onLoad() { /* Widget Loaded Successfully */ }` } |
| `widget`       |          | `String`     | `'popup'` | Type of widget on which you want to load your plugins. `[popup|dialog|inline]`                                         |
