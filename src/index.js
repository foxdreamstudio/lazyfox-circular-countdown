/**
 * LazyFox-Circular-Countdown
 * https://github.com/Ridwan_Foxdream/react-native/LazyFox-Circular-Countdown
 *
 * @format
 * @flow
 */

import React,{Component} from 'react'
import {View, StyleSheet,Text} from 'react-native'
import Svg, {Circle} from 'react-native-svg'


class LazyFoxCircularCountDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer:null,
      status:true,
      strokeOffset: 0,
      strokeArray: 0,
      cx:( this.props.circleWidth / 2 ),
      cy:( this.props.circleWidth / 2 ),
      r: ( this.props.circleWidth / 2 ) - (this.props.strokeWidth /2),
      circleWidth:this.props.circleWidth,
      strokeWidth:this.props.strokeWidth,
      stroke:this.props.stroke,
      fill:this.props.fill,
      centerFontSize:this.props.centerFontSize,
      color:this.props.color,
      tempseconds:this.props.seconds,
      transform: "rotate(-90 "+(( this.props.circleWidth / 2 ))+" "+(( this.props.circleWidth / 2 ))+")",
      useDecimal:this.props.useDecimal,
      timeLeftPoint:0,

      timeSeconds:0,
      timeMinutes:0,
    }
    this.count= this.props.seconds*1000;
    this.delay=20;
    this.initTick = 0;
    this.circleI=0;
  }
  componentDidMount = () => {
    if(this.props.isAutoStart){
      this.start();
    }
  };
  componentWillUnmount=()=>{
    clearTimeout(this.state.timer);
  };

  now=()=>{
    return Date.now();
  }
  counting=()=>{
    let remaining = (this.count - (this.now() - this.initTick)) / 1000;

    remaining=remaining>=0?remaining:0;
    this.setState({
      timeSeconds: (remaining.toFixed(2)%60).toFixed(this.props.isMinutes?0:this.props.isSeconds?0:2),
      strokeArray:Math.PI * this.state.r*2,
      strokeOffset:this.circleI,
      timeMinutes:((remaining.toFixed(2) - (remaining.toFixed(2)%60))/60).toFixed(0),
    });
    if (remaining) {setTimeout(this.counting, this.delay);}
    let divCount=this.props.secondsLenght!==null?this.props.secondsLenght*1000:this.count;
    this.circleI=remaining*((this.state.strokeArray/divCount)*1000);

    this.props.onCounting(this.state.status?this.props.seconds:remaining);
    if(remaining<=0) {
      this.setState({
          status:true,
      },()=>{
        this.props.onTimesUp(remaining.toFixed(6));
      });
    }
  }

  start=()=>{
    if(this.state.status){
      this.initTick=this.now();
      this.setState({
          status:false,
      })
      setTimeout(this.counting, this.delay)
    }
  };
  stop=()=>{
    clearTimeout(this.state.timer);
  }
  render() {
    if(this.props.isShow){
      return (
        <View style={styles.container}>
            <Svg height={this.props.circleWidth} width={this.props.circleWidth} style={{transform:[{rotate:'-90deg'}]}}>
              <Circle
                cx={this.state.cx}
                cy={this.state.cy}
                fill="none" stroke={this.props.backStroke}
                strokeWidth={this.props.strokeWidth}
                r={this.state.r}/>
               <Circle
                  cx={this.state.cx}
                  cy={this.state.cy}
                  r={this.state.r}
                  strokeDasharray={this.state.strokeArray}
                  strokeDashoffset={this.state.strokeOffset}
                  fill="none" stroke={this.state.stroke}
                  strokeWidth={this.props.strokeWidth} />
                <Circle
                  style={{shadowColor: '#333'}}
                  cx={this.state.cx}
                  cy={this.state.cy}
                  fill={this.state.fill} stroke="none"
                  //strokeWidth={this.props.strokeWidth}
                  r={(this.state.r - 15) }/>
           </Svg>
           <View style={styles.circleText}>
            {this.props.children &&
              children
            }
            {!this.props.children &&
              <View>
                {this.state.timeSeconds !==0 &&
                  <Text style={{fontSize: this.state.centerFontSize,color:this.state.color,fontWeight: 'bold'}}>
                    { this.props.isAutoStart && this.props.isMinutes &&
                      `${this.state.timeMinutes.length>1?'':'0'}${this.state.timeMinutes}:${this.state.timeSeconds.length>1?'':'0'}${this.state.timeSeconds}`
                    }
                    {this.props.isAutoStart &&
                      !this.props.isMinutes &&
                      !this.props.isSeconds &&
                      `${this.state.timeSeconds.length<=4?'0':''}${this.state.timeSeconds}`
                    }
                    {this.props.isAutoStart &&
                      this.props.isSeconds&&
                      `${this.state.timeSeconds}`
                    }
                    {!this.props.isAutoStart &&
                      `${this.props.seconds.length<2?'0':''}${this.props.seconds.toFixed(2)}`
                    }
                  </Text>
                }
                {this.state.timeSeconds===0 &&
                  <Text style={{fontSize: this.state.centerFontSize,color:this.state.color,fontWeight: 'bold'}}>
                    {`${this.props.seconds.length<2?'0':''}${this.props.seconds.toFixed(2)}`}
                  </Text>
                }
              </View>
            }
           </View>
        </View>
      );
    }else{
      return null;
    }
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    margin: 0,
    position: 'relative',
  },
  circleText:{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    margin: "auto",
    zIndex:10,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
LazyFoxCircularCountDown.defaultProps = {
  offset: 0,
  stroke: 0,
  r: 20,
  circleWidth:120,
  // circleHeight:120,
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
export default LazyFoxCircularCountDown;
