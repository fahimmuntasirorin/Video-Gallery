import { Link } from "react-router-dom";

const RelatedVideo = ({video}) => {
    const {id , thumbnail,title , author , date , views} = video
    return (
        <div className="w-full flex flex-row gap-2 mb-4">
            <div
                className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]"
            >
                <Link to={`/videos/${id}`}>
                    <img
                        src={thumbnail}
                        className="object-cover"
                        alt="Some video title"
                    />
                </Link>
                <p
                    className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py"
                >
                    {date}
                </p>
            </div>

            <div className="flex flex-col w-full">
                <a href="#">
                    <p
                        className="text-slate-900 text-sm font-semibold"
                    >
                        {title}
                    </p>
                </a>
                <a
                    className="text-gray-400 text-xs mt-2 hover:text-gray-600"
                    href="#"
                >
                    {author}
                </a>
                <p className="text-gray-400 text-xs mt-1">
                    {views} views . {date}
                </p>
            </div>
        </div>
    );
};

export default RelatedVideo;