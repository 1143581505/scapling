import React, { Component } from 'react';
import styles from './market.less';
import {connect} from 'dva';
import dateParse from '../../utils/dateParse';

class One extends Component {

    componentDidMount(){
        this.props.dispatch({type:'market/fetchLoadMarketDetails',payload:{id:this.props.market.setId.id}});
    }

    render() {
        return (
            <div className={styles.content}>
                <div className={styles.content_title}> 推广员详情</div>
                <div style={{marginBottom:'1em',}}>
                    <div style={{fontWeight:700,padding:'0 20px'}}>[基本信息]</div>  
                </div>
                <div className={styles.content_content}>
                    <div className={styles.content_content_message}>
                        <div className={styles.content_content_message_leftOne}><span>推广员ID:&emsp;</span></div>
                        <div className={styles.content_content_message_leftTwo}><span>{this.props.market.marketDetailsData.id}</span></div>
                        <div className={styles.content_content_message_rightOne}><span>用户名:&emsp;</span></div>
                        <div className={styles.content_content_message_rightTwo}><span>{this.props.market.marketDetailsData.username}</span></div>
                    </div>
                    <div className={styles.content_content_message}>
                        <div className={styles.content_content_message_leftOne}><span>QQ:&emsp;</span></div>
                        <div className={styles.content_content_message_leftTwo}><span>{this.props.market.marketDetailsData.qq}</span></div>
                        <div className={styles.content_content_message_rightOne}><span>手机号:&emsp;</span></div>
                        <div className={styles.content_content_message_rightTwo}><span>{this.props.market.marketDetailsData.telephone}</span></div>
                    </div>
                    <div className={styles.content_content_message}>
                        <div className={styles.content_content_message_leftOne}><span>微信号:&emsp;</span></div>
                        <div className={styles.content_content_message_leftTwo}><span>{this.props.market.marketDetailsData.wxid}</span></div>
                        <div className={styles.content_content_message_rightOne}><span>注册时间:&emsp;</span></div>
                        <div className={styles.content_content_message_rightTwo}><span>{dateParse(this.props.market.marketDetailsData.registerTime)}</span></div>
                    </div>
                    <div className={styles.content_content_message}>
                        <div className={styles.content_content_message_leftOne}><span>上次登录时间:&emsp;</span></div>
                        <div className={styles.content_content_message_leftTwo}><span>{this.props.market.marketDetailsData.lastLoginTime}</span></div>
                        <div className={styles.content_content_message_rightOne}><span>状态:&emsp;</span></div>
                        <div className={styles.content_content_message_rightTwo}><span>{this.props.market.marketDetailsData.status}</span></div>
                    </div>
                    <div className={styles.content_content_message}>
                        <div className={styles.content_content_message_leftOne}><span>备注:&emsp;</span></div>
                        <div className={styles.content_content_message_leftTwo}><span>{this.props.market.marketDetailsData.comment}</span></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state=>state)(One);