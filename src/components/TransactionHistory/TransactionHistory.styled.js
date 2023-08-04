import styled from 'styled-components';

export const TableWrapper = styled.table`
margin: 0 auto;
box-shadow: 0 0 20px rgba(0, 135, 255, 0.8);
margin-bottom: 100px;
border-radius: 6px;
`;

export const TransactionHeader = styled.th`
background-color: rgba(0, 162, 255, 0.8);
color: white;
text-transform: uppercase;
padding: 18px 54px;
border: 1px solid rgba(0, 135, 255, 0.8);
border-radius: 6px;
`;

export const TableCellsColor = styled.tbody`
tr:nth-child(even) {
      background-color: #d7e3f5;
   }
`;


