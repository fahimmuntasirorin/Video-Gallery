import { useDispatch, useSelector } from "react-redux";
import { tagRemoved, tagSelected } from "../../Features/Filter/filterSlice";

const Tag = ({ tag }) => {
    const { title } = tag;
    const dispatch = useDispatch();
    const {selectedTags} = useSelector(state=>state.filters)
    const isSelected = selectedTags.includes(title)
    const handleTagSelected = (title)=>{
        if(isSelected){
            dispatch(tagRemoved(title))
            
        }else{
            dispatch(tagSelected(title))
        }
        
    }
    const style = isSelected ? 'bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer': 'bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer'
    return (
        <div onClick={()=>handleTagSelected(title)}
            className={style}
        >
            {title}
        </div>

    );
};

export default Tag;


{/* <div
    class="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
>
    redux
</div> */}





