import { useEffect, useState } from "react";
import ModifyCom from "../components/ModifyCom";
import { useNavigate, useParams } from "react-router-dom";
import { getOne, modify } from "../service/member";

function ModifyCon() {
    const params = useParams();
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const result = await getOne(params.id); 
            setData(result);
            setLoading(false);
        };
        fetchData();
    }, [params]);

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await modify(data); 
        navigate("/member/one?id=" + data.id);
    };

    return (
        <>
            <ModifyCom onChange={onChange} onSubmit={onSubmit} data={data} loading={loading} />
        </>
    );
}
export default ModifyCon;