function ModifyCom ({data, onChange, onSubmit}) {
    return(<>
    <form onSubmit={onSubmit} >
        <input type="text"  name="id" value={data.id || ""} readOnly /> <br/>
        <input type="text"  name="pwd" onChange={onChange} value={data.pwd || ""} /> <br/>
        <input type="text"  name="name" onChange={onChange} value={data.name || ""} /> <br/>
        <input type="text"  name="addr" onChange={onChange} value={data.addr || ""} /> <br/>
        <button>수정</button>
    </form>
    </>)
}
export default ModifyCom;