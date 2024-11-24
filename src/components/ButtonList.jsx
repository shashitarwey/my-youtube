import Button from './Button';

const btnNames = [
  'All',
  'Music',
  'Dubbing',
  'Thrillers',
  'Akshay Kumar',
  'Games',
  'Jukebox',
  'Live',
  'Motu Patlu',
  'Arijit Singh',
  'React Routers',
  'Wickets',
];
const ButtonList = () => {
  return (
    <div className="flex">
      {btnNames.map((name, index) => (
        <Button key={index} name={name}></Button>
      ))}
    </div>
  );
};

export default ButtonList;
