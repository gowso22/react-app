import React from "react";
import Notification from "./Notification";


const reserveNotification = [
    {
        message : "안녕하세요, 오늘의 일정을 알려드립니다.",
        id : 1
    },
    {
        message : "점심식사 시간입니다.",
        id :2
    },
    {
        message : "이제 곧 미팅이 시작됩니다.",
        id : 3
    },
]

let timer;

class NotificationList extends React.Component{
constructor(props){
    super(props);

    this.state = {
        notifications : [],
    }
}

componentDidMount(){
    const {notifications} = this.state;
    timer = setInterval(() => {
        if(notifications.length < reserveNotification.length){
            const index = notifications.length;
            notifications.push(reserveNotification[index]);
            this.setState(
                {
                    notifications : notifications,
                }
            )
        }else{
            // 컴포넌트가 생성되고 업데이트가 끝났다면 
            // notifitions 빈 배열로 설정
            this.setState({
                notifications : [],
            })
            clearInterval(timer);
        }
    }, 1000);
}



render(){
    return(
        <div>
            {this.state.notifications.map((notification) =>{
                return <Notification 
                key={notification.id}
                id = {notification.id}
                message = {notification.message}/>
            })}
        </div>
    )
}




}

export default NotificationList;