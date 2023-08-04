import { TransactionCard } from "../TransactionCard/TransactionCard"
import {TransactionHeader, TableWrapper, TableCellsColor} from '../TransactionHistory/TransactionHistory.styled'

export const TransactionList = ({items}) => {
   // console.log(props.items)
   return (
      <>
         <TableWrapper className="transaction-history">
            <thead>
               <tr>
                  <TransactionHeader>Type</TransactionHeader>
                  <TransactionHeader>Amount</TransactionHeader>
                  <TransactionHeader>Currency</TransactionHeader>
               </tr>
            </thead>
            <TableCellsColor>
            {items.map(item =>
               <tr key={item.id}>
                  <TransactionCard item={item} />
               </tr>)}
            </TableCellsColor>
         </TableWrapper>   
      </>
   )
}