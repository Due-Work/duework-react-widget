# React Widgets

The simplete way to integrate wiki and knowledge base, customer feedback, onboarding for growing teams. Beautiful, feature rich, and components.

## All in one customer engagement

`Knowledge base | Live Chat | User Onboarding | Customer Feedback`

## Website

[Due.Work](https://www.due.work)

## Due.Work Feedback

![Feedback](https://www.due.work/home/Feedback.png)

## Due.Work Onboarding

![Onboarding](https://www.due.work/home/onboarding.png)

## Due.Work Live Chat

![Live Chat](https://www.due.work/home/Live_Chat.png)

## Widgets Demo

- [Popup Widget Demo](https://www.due.work/use-cases/samples/popup.html)
- [Inline Widget Demo](https://www.due.work/use-cases/samples/inline.html)
- [Dialog Widget Demo](https://www.due.work/use-cases/samples/dialog.html)

## Standalone Link Demo

- [Sample Link](https://www.due.work/u/lsnWIg3c3G/help-and-support/lsnWIg3c3G)

## Installation

```
npm install react-widget-plugins --save
```

```
yarn add react-widgets-plugins
```

## How to use

```js
import ReactWidget from 'react-widget-plugins';
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

| Name           | Required | Type         | Default   | Description                                                                                                          |
| :------------- | :------- | :----------- | :-------- | :------------------------------------------------------------------------------------------------------------------- |
| `onLoad`       |          | `Function`   |           | A callback to be called when widget is loaded successfully. `function onLoad() { /* Widget Loaded Successfully */ }` |
| `widget`       |          | `String`     | `popup`   | Type of widget on which you want to load your plugins `popup|dialog|inline`                                          |

## How to get workspaceId

1. Signup/Login to [www.due.work](https://www.due.work)
2. Create a project (From templates or an empty project)
3. Click on button **Add to website**
4. Activate your plugins of your choice `( Knowledge base | Live Chat | User Onboarding | Customer Feedback )`
5. Go to embed code option and **first argument** of the code will be workspaceId. `duework.popup.init("H01xss")`. Here `"H01xss"` is **workspaceId**
6. For more help check our support page [Due.Work Help and Support](https://www.due.work/u/lsnWIg3c3G/add-to-website/9jAXYrUTb)

## Contact Us and Help

For more info contact us at `support@due.work`  
Our Help and Support Page [Due.Work Help and Support](https://www.due.work/u/lsnWIg3c3G/add-to-website/9jAXYrUTb)
