import { StatisticCard } from '../StatisticsCard/StatisticCard';
import { UploadWrapper, UploadTitle, StatsContainer, StatsItem } from '../Statistics/Statistics.styled';

export const Statistics = ({ items, title }) => {
  // console.log(items)
   return (
   <>
      <UploadWrapper className="statistics">
         {title && <UploadTitle className="title">{title}</UploadTitle>}
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
