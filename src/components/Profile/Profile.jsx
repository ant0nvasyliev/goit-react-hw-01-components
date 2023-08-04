import { ProfileCard } from '../ProfileCard/ProfileCard';
import { ProfileWrapper } from './Profile.styled';

export const Profile = ({ items }) => {
  // console.log(items)
  return (
    <>
      <ProfileWrapper>
        {items.map(item => (
          <li key={item.username}>
            <ProfileCard item={item} />
          </li>
        ))}
      </ProfileWrapper>
    </>
  );
};
