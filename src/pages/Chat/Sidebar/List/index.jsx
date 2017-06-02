/*
 * @authors :Bin Mei
 * @date    :2017-05-22
 * @description：react-redux-chat  -> 仿微信聊天工具
 */

import React, { Component, PropTypes } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import classnames from 'classnames';
import actions from "src/actions";
import Scroll from 'src/components/common/Scroll'

// import dia from 'src/utils/dia';

import './Index.scss';




class List extends Component{
	constructor(props){
		super(props);

    	this.state = {
    	};
	}
	componentDidMount(){

	}
	Iscrolls(y){
		// console.log(y)
	}
	render(){
		let {_sessions,_currentId,_currentChat,ACTIONS} = this.props;
		return ( 
			<div className="list-wrap">
				<div className="list">
					<Scroll allowScroll={false} scrollbar="custom">
					    <ul>
					    	{
					    	_sessions.map((item,i)=>{
					    		return (
					    			<li key={"index"+i} className={classnames({"active":(item.id === _currentId&&_currentId==_currentChat.id)})} onClick={()=>ACTIONS.set_session(item.id)}>
							            <p className="avatar">
							                <img   width="40" height="40"src={item.user.img||"https://ps.ssl.qhimg.com/t01531c2d8bd3dbe644.jpg"} />
							            </p>
							            <p className="name">{item.user.name}</p>
							            <i className={classnames("dot")} ></i>
							        </li>
					    		);
					    	})
					    	}
					    </ul>
					</Scroll>
				</div>
			    <p className="logout"><button>退出登录</button></p>
			</div>
		);
	}
};

let mapStateToProps=(state)=>{
	let {sessions,user,currentChat,currentUserId} = state.chatIndex;
	return {
		_sessions:sessions,
		_user:user,
		_currentChat:currentChat,
		_currentId:currentUserId
	};
}; 

let mapDispatchToProps=(dispatch)=>{
	return {
		ACTIONS:bindActionCreators(actions,dispatch)
	};
};
export default connect(mapStateToProps,mapDispatchToProps)(List);

