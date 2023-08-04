import styled from 'styled-components';

export const CardImage = styled.img`
  max-width: 100%;
`;

export const CardDescrWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-bottom: 10px;
`;

export const ProfileName = styled.p`
  font-size: 32px;
  font-weight: 500;
`;

export const ProfileInfo = styled.p`
  color: rgba(128, 128, 128, 0.8);
`;

export const ActivitiesWrapper = styled.ul`
  display: flex;
  padding: 0;
  justify-content: space-evenly;
  border-top: 1px solid rgba(39, 153, 245, 0.8);
`;

export const ActivitiesItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-top: 10px;
  color: rgba(128, 128, 128, 0.8);
`;
