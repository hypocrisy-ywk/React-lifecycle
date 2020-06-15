import React, { Component } from 'react';

class Todolist extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    //这些生命周期函数存在于Component中,但是render函数例外,所以render函数必须写
    componentWillMount(){
        console.log('组件即将挂载前执行');
    }
    
    componentDidMount(){
        console.log('组件挂载完毕后执行');   
    }

    componentWillReceiveProps(){
        console.log('1.一个组件需要从父组件接收参数;2.父组件再次被render时执行');
    }

    shouldComponentUpdate(){
        console.log('在componentwillUpdate之前执行,返回一个布尔值用于决定组件是否更新')
    }

    componentWillUpdate(){
        console.log('组件被根性之前执行');
        
    }

    componentDidUpdate(){
        console.log('组件被更新之后执行')
    }

    componentWillUnmount(){
        console.log('组件即将卸载之前执行')
    }

    render(){       
        return <div>hello react</div>
    }
}

export default Todolist;
