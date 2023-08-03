import { StatisticCard } from "./StatisticCard"

export const Statistics = ({ items }) => {
   // console.log(items)
   return (
      <div>
         <section className="statistics">
            <h2 className="title">Upload stats</h2>
            <ul className="stat-list">
               {items.map(item => (
               <li key={item.id} className="item">
                  <StatisticCard item={item} />
               </li>
               ))}
            </ul>
         </section>
      </div>
   )
} 



