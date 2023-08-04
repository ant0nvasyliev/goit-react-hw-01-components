export const FriendCard = ({ item: {isOnline, avatar, name} }) => {
   return (
      <>
         <span className="status">{isOnline}</span>
         <img className="avatar" src={avatar} alt="User avatar" width="48" />
         <p className="name">{name}</p>
      </>
   );
};