let data_set = [
    { id: "user01", pwd: "pw123", name: "김철수", addr: "서울특별시 강남구" },
    { id: "user02", pwd: "pass02", name: "박영희", addr: "부산광역시 해운대구" },
    { id: "user03", pwd: "mypwd03", name: "이민호", addr: "대구광역시 수성구" },
    { id: "user04", pwd: "hello04", name: "최수정", addr: "인천광역시 연수구" },
    { id: "user05", pwd: "test05", name: "정우성", addr: "경기도 성남시" },
    { id: "user06", pwd: "secure06", name: "한지민", addr: "광주광역시 북구" },
    { id: "user07", pwd: "pw777", name: "강동원", addr: "대전광역시 유성구" },
    { id: "user08", pwd: "admin08", name: "김태리", addr: "울산광역시 남구" },
    { id: "user09", pwd: "login09", name: "유재석", addr: "제주특별자치도 제주시" },
    { id: "user10", pwd: "qwerty10", name: "장도연", addr: "강원도 춘천시" },
]
const getList = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data_set);
        }, 1000); 
    });
};
const register = async (user) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            data_set = data_set.concat(user);
            resolve(1);
        }, 1000); 
    });
};
const loginCheck = async (id, pwd) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = data_set.filter(data => data.id === id);
            if (data.length !== 0) {
                if (data[0].pwd === pwd) {
                    resolve(0);
                } else {
                    resolve(1);
                }
            } else {
                resolve(-1);
            }
        }, 1000); 
    });
};
export const modify = (user) => {
    data_set = data_set.map( (item) => item.id === user.id ? user : item );
    
    return 1;
}
export const getOne = ( id ) => 
    data_set.filter( (item) => item.id === id )[0];

export const deleteOne = ( id ) => {
    data_set =data_set.filter( (item) => item.id !== id );
    return 1;
}
export { register ,  getList, loginCheck }

