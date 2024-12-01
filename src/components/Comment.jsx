import { USER_ICON } from '../utils/constants';

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 my-2 rounded-md">
      <img src={USER_ICON} alt="user" className="h-8 mt-4"></img>
      <div className="p-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
