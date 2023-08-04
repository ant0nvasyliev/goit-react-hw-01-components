import { FriendCard } from "../FriendCard/FriendCard";
import { FriendCardItem, FriendCardList} from '../FriendList/FriendList.styled'

export const FriendList = ({ items }) => {
   return ( <>
               <FriendCardList className="friend-list">
               {items.map(item => (
                  <FriendCardItem key={item.id} className="item">
                     <FriendCard item={item} />
                  </FriendCardItem>
                  ))}
               </FriendCardList>
            </>
      
   );
};