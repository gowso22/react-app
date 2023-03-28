import React from 'react';



const styles = {
    wrapper : {
        margin : 8,
        padding : 8,
        display : "felx",
        flexDirection : "row",
        border : "1px solid grey",
        borderRadius : 16,
    },
    messageText : {
        color : "black",
        fontSize : 16,
    },
}

class Notification extends React.Component{
    constructor(props){
        super(props);

        // state에 아무런 값이 없도록 생성
        this.state = {};
    }

    componentDidMount(){
        console.log(`${this.props.id} 디드 마운트`);
    }
    componentDidUpdate(){
        console.log(`${this.props.id} 디드 업데이트`);
    }
    componentWillUnmount(){
        console.log(`${this.props.id} 디드 언마운트`);
    }

    render(){
        return(
            <div style={styles.wrapper}>
                <span style={styles.messageText}>{this.props.message}</span>
            </div>
        )
    }
}

export default Notification;