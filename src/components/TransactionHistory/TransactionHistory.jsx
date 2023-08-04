import { TransactionCard } from "../TransactionCard/TransactionCard"

export const TransactionList = ({items}) => {
   // console.log(props.items)
   return (
      <>
         <table className="transaction-history">
            <thead>
               <tr>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Currency</th>
               </tr>
            </thead>
            <tbody>
            {items.map(item =>
               <tr key={item.id}>
                  <TransactionCard item={item} />
               </tr>)}
            </tbody>
         </table>   
      </>
   )
}