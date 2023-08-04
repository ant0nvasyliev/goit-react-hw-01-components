import styled from 'styled-components';

export const UploadWrapper = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 450px;
   border: 1px solid purple;
   border-radius: 8px;
   margin: 0 auto;
   background-color: rgba(229, 229, 229, 1);
   color: rgba(70, 70, 70, 1);
`;

export const UploadTitle = styled.h2`
padding: 15px;
font-size: 30px;
font-weight: 500;
`;

export const StatsContainer = styled.ul`
display: flex;
`;

export const StatsItem = styled.li`
display: flex;
flex-direction: column;
padding: 20px;
align-items: center;
gap: 10px;
border-top: 1px solid purple;
/* background-color: yellow; */
`;
