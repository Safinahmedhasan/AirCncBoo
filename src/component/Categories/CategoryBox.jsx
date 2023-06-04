import { useNavigate, useSearchParams } from "react-router-dom";
import qs from 'query-string';

const CategoryBox = ({ label, icon: Icon }) => {
    const [params, setParams] = useSearchParams();

    const  navigate = useNavigate();


    const HandleClick = () => {
        let currentQuery = {}
        if (params) {
            currentQuery = qs.parse(params.toString())
        }
        const updatedQuery = {
            ...currentQuery, category: label,
        }
        const url = qs.stringifyUrl({
            url: '/',
            query: updatedQuery
        },
            { skipNull: true }
        )
        navigate(url)
    }

    return (
        <div onClick={HandleClick} className="flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 border-transparent text-neutral-500">
            <Icon size={26}></Icon>

            <div className="text-sm font-medium">{label}</div>
        </div>
    );
};

export default CategoryBox;