import { StatisticCard } from '../StatisticsCard/StatisticCard';
import { UploadWrapper, UploadTitle, StatsContainer, StatsItem } from '../Statistics/Statistics.styled';

export const Statistics = ({ items }) => {
  // console.log(items)
   return (
   <>
      <UploadWrapper className="statistics">
         <UploadTitle className="title">Upload stats</UploadTitle>
         <StatsContainer className="stat-list">
            {items.map(item => (
            <StatsItem key={item.id} className="item">
               <StatisticCard item={item} />
            </StatsItem>
            ))}
         </StatsContainer>
      </UploadWrapper>
      </>
   );
};
