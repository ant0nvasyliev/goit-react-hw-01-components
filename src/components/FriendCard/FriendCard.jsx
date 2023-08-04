import {FriendStatus, FriendName} from '../FriendCard/FriendCard.styled';

export const FriendCard = ({ item: {isOnline, avatar, name} }) => {
   return (
      <>
         <FriendStatus className="status">{isOnline}</FriendStatus>
         <img className="avatar" src={avatar} alt="User avatar" width="48" />
         <FriendName className="name">{name}</FriendName>
      </>
   );
};