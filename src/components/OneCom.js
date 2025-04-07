

function OneCom ( {data, onDelete, onModify} ) {

    return (
        <div>
            <ul>
                <li>id : {data.id}</li>
                <li>pwd : {data.pwd}</li>
                <li>name : {data.name}</li>
                <li>addr : {data.addr}</li>
                
                <button onClick={ () => onDelete(data.id)}>삭제</button>
                <button onClick={ () => onModify(data.id)}>수정</button>
                
            </ul>
        </div>
    )
}
export default OneCom;