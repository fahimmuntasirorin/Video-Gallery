import { useDispatch, useSelector } from "react-redux";
import Tag from "./Tag";
import { useEffect } from "react";
import { fetchTags } from "../../Features/Tags/TagsSlice";

const Tags = () => {
    const dispatch = useDispatch();
    const {tags} = useSelector(state=>state.tags)
    useEffect(()=>{
        dispatch(fetchTags())
    },[dispatch])
    console.log(tags);
    return (
        <section>
            <div
                className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto"
            >
                <Tag/>
               
            </div>
        </section>
    );
};

export default Tags;
 {/* <!-- selected --> */}
                {/* <div
                    className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
                >
                    redux
                </div> */}








