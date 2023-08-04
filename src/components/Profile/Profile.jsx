import { ProfileCard } from './ProfileCard';

export const Profile = ({ items }) => {
  // console.log(items)
  return (
    <>
      <ul>
        {items.map(item => (
          <li key={item.username}>
            <ProfileCard item={item} />
          </li>
        ))}
      </ul>
    </>
  );
};