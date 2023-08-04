import {TableCells} from '../TransactionCard/TransactionCard.styled'

export const TransactionCard = ({ item: {type, amount, currency}}) => {
   return <>
            <TableCells>{type}</TableCells>
            <TableCells>{amount}</TableCells>
            <TableCells>{currency}</TableCells>
         </>
}