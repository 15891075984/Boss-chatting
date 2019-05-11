import React from 'react';
import {NavBar} from 'antd-mobile'
import {Switch,Route,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import NavLinkBar from '../navLinkBar/navLinkBar'
import Boss from '../boss/boss'
function Genius(){
    return <div>Genius</div>
}
function Msg(){
    return <div>Msg</div>
}
function Me(){
    return <div>Me</div>
}
@withRouter
@connect(
    state=>state
)
 class DashBoard extends React.Component{
    render(){
        const user=this.props.user
        const pathname=this.props.location.pathname
        const navList=[
            {
                path:"/boss",
                text:"牛人",
                icon:"boss",
                title:"牛人列表",
                component:Boss,
                hide:user.type=="genius"
            },
            {
                path:"/genius",
                text:"BOSS",
                icon:"job",
                title:"BOSS列表",
                component:Genius,
                hide:user.type=="boss"
            },
            {
                path:"/msg",
                text:"消息",
                icon:"msg",
                title:"消息列表",
                component:Msg
            },
            {
                path:"/me",
                text:"我",
                icon:"user",
                title:"个人中心",
                component:Me
            }
        ]
        return (
            <div>
                <div style={{position:"fixed",top:0,width:"100%"}}>
                    <NavBar mode="dark">
                        {navList.filter(v=>v.path==pathname)[0].title}
                    </NavBar>
                </div>
                <div style={{marginTop:"45px"}}>
                    <Switch>
                        {navList.map(v=>(
                            <Route key={v.path} path={v.path} component={v.component}/>
                        ))}
                    </Switch>
                </div>
                <div style={{position:"fixed",bottom:0,width:"100%"}}>
                    <NavLinkBar data={navList} pathname={pathname}/>
                </div>
            </div>
        )
    }
}
export default DashBoard