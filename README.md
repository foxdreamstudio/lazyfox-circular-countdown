# React-native-component : lazyfox-circular-countdown
[![version](https://img.shields.io/npm/v/lazyfox-circular-countdown.svg)](https://www.npmjs.com/package/lazyfox-circular-countdown)
[![downloads](https://img.shields.io/npm/dy/lazyfox-circular-countdown.svg)](https://www.npmjs.com/package/lazyfox-circular-countdown)
<!--[![foxdream Entertainment](https://www.http://foxdreamstudio.github.io)](https://www.http://foxdreamstudio.github.io)-->
<!--[![Ridwan Foxdream](https://www.http://foxdreamer.000webhost.com/ridwan)](https://www.http://foxdreamer.000webhost.com/ridwan)-->
<!--[![license](https://img.shields.io/npm/l/react-native-svg-charts.svg)](https://github.com/foxdreamstudio/lazyfox-circular-countdown/blob/master/LICENSE)-->

## Prerequisites

This library uses [react-native-svg](https://github.com/react-native-community/react-native-svg) to render this component, Therefore this library needs to be installed **AND** linked into your project to work.

if there's any problem when you install this component, just trying to run **react-native link react-native-svg**, Other than the above dependency this library uses pure javascript and supports both iOS and Android.

## Motivation

I made this library motivated by my last project, which requires a component countdown circle, whereas when I look for it on Google, there is no component that matches the apps I made, so I tried making it by myself using the svg technique.

## Installation

To install this component to your **react-native project**, please just following this instruction bellow.
```bash
#on your root project, enter command
$ npm install --save lazyfox-circular-countdown react-native-svg

#after downlaoding the dependencies, please enter this command to linked the dependencies of react-native-svg
$ react-native link react-native-svg

```

## Example code

To install this component to your **react-native project**, please just following this instruction bellow.
```jsx
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import LazyFoxCircularCountDown from "lazyfox-circular-countdown";

export default class App extends Component<Props> {
  render() {
    return (
      <View style={{flex:1}}>
        <Text style={{fontSize:20}}>React-native countdown circle</Text>
        <LazyFoxCircularCountDown
          ref={ref=>this.timer=ref} // component reference
          seconds={10} // how long countdown start counting
          secondsLenght={10} // maximum countdown *optional* default null
          onTimesUp={(value)=>console.log(value)} // callback when counting finish *optional* default null
          onCounting={(value)=>console.log(value)} // callback on counting *optional* default null
          circleWidth={120} // the size of circle *optional*
          strokeWidth={5} // the size of outside circle ring *optional*
          fill="#fff" //the color of inside circle *optional*
          stroke="#0B2534" // the color of outside circle ring *optional*
          backStroke="#457A80" // the color of outside circle ring path *optional*
          color="#457A80" // color of text *optional*
          centerFontSize={20} // size of text *default = 20*
         />
      </View>
    );
  }
}

```

if you want to start the coundown manually, you can add props **isAutoStart={true}** and call the method on **componentDidMount** or another function, you can follow this example code.

```jsx
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import LazyFoxCircularCountDown from "lazyfox-circular-countdown";

export default class App extends Component<Props> {
  componentDidMount=()=>{
      this.time.start();
  }
  render() {
    return (
      <View style={{flex:1}}>
        <Text style={{fontSize:20}}>React-native countdown circle</Text>
        <LazyFoxCircularCountDown
          ref={ref=>this.timer=ref} // component reference
          isAutoStart={true}
          seconds={10} // how long countdown start counting
          secondsLenght={10} // maximum countdown *optional* default null
          onTimesUp={(value)=>console.log(value)} // callback when counting finish *optional* default null
          onCounting={(value)=>console.log(value)} // callback on counting *optional* default null
          circleWidth={120} // the size of circle *optional*
          strokeWidth={5} // the size of outside circle ring *optional*
          fill="#fff" //the color of inside circle *optional*
          stroke="#0B2534" // the color of outside circle ring *optional*
          backStroke="#457A80" // the color of outside circle ring path *optional*
          color="#457A80" // color of text *optional*
          centerFontSize={20} // size of text *default = 20*
         />
      </View>
    );
  }
}

```

## defaultProps

So you can add many properties, you can look at the list of defaultprops / properties

```jsx
// Propeties 

LazyFoxCircularCountDown.defaultProps = {
  offset: 0,
  stroke: 0,
  r: 20,
  circleWidth:120,
  strokeWidth:8,
  fill:"#fff",
  stroke:"green",
  backStroke:"#0B2534",
  centerFontSize:20,
  color:"#333",
  seconds:10,
  secondsLenght:null,
  onTimesUp:()=>null,
  onCounting:()=>null,
  useDecimal:true,
  isMinutes:false,
  isSeconds:false,
  delayTime:null,
  isAutoStart:true,
  isShow:true,
  defaultValue:10,
};

```


## Dependencies

This component using react  **[react-native-svg](https://github.com/react-native-community/react-native-svg)**

## License

**MIT** Licences
