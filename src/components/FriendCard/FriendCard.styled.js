import styled from 'styled-components';

export const FriendName = styled.p`
font-size: 18px;
font-weight: 500;
`;

export const FriendStatus = styled.span`
display: block;
width: 12px;
height: 12px;
border-radius: 50%;
background-color: ${props => {
   switch (props.$isonline) {
      case 'true':
         return 'green';
      case 'false':
         return 'red';
      default:
         return 'yellow';
   }
}};
`;