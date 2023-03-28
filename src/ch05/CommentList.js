import Comment from "./Comment";


const comments =[
    {
        name : '이고잉',
        comment : '안녕하세요 소플입니다.'
    },
    {
        name : 'unkown',
        comment : 'goodgoodgood'
    },
    {
        name : '홍길동',
        comment : ' 반갑습니다.'
    },

]

export default function CommentList(props){
    return(
        <div>
           {comments.map((c) => {
            return(
            <Comment name = {c.name} comment = {c.comment}/>
            );
           })}
        </div>
    )

}