# React Widgets

The simplete way to integrate wiki and knowledge base, customer feedback, onboarding for growing teams. Beautiful, feature rich, and components.

## Demo

- [Popup Widget Demo](https://www.due.work/use-cases/samples/popup.html)
- [Inline Widget Demo](https://www.due.work/use-cases/samples/inline.html)
- [Dialog Widget Demo](https://www.due.work/use-cases/samples/dialog.html)

## Standalone Link Demo

- [Standalone Link](https://www.due.work/u/lsnWIg3c3G/help-and-support/lsnWIg3c3G)

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
  workspaceId={workspaceId} //
  widget="popup" // popup | dialog | inline
  onLoad={() => {
    console.log('Widget has loaded successfully.');
  }}
/>
```
