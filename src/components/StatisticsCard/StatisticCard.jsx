export const StatisticCard = ({ item: { label, percentage } }) => {
   return (
      <>
         <span className="label">{label}</span>
         <span className="percentage">{percentage}%</span>
      </>
   )
};