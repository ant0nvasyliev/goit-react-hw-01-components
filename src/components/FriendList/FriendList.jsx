import { FriendCard } from "./FriendCard";

export const FriendList = ({ items }) => {
   return ( <div>
               <ul className="friend-list">
               {items.map(item => (
                  <li key={item.id} className="item">
                     <FriendCard item={item} />
                  </li>
                  ))}
               </ul>
            </div>
      
   );
};