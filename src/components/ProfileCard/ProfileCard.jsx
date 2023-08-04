import {
  CardImage,
  CardDescrWrapper,
  ProfileName,
  ProfileInfo,
  ActivitiesWrapper,
  ActivitiesItem,
} from './ProfileCard.styled';

export const ProfileCard = ({
  item: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <>
      <div className="profile">
        <CardDescrWrapper className="description">
          <CardImage src={avatar} alt="User avatar" className="avatar" />
          <ProfileName className="name">{username}</ProfileName>
          <ProfileInfo className="tag">{tag}</ProfileInfo>
          <ProfileInfo className="location">{location}</ProfileInfo>
        </CardDescrWrapper>

        <ActivitiesWrapper className="stats">
          <ActivitiesItem>
            <span className="label">Followers</span>
            <span className="quantity">{followers}</span>
          </ActivitiesItem>
          <ActivitiesItem>
            <span className="label">Views</span>
            <span className="quantity">{views}</span>
          </ActivitiesItem>
          <ActivitiesItem>
            <span className="label">Likes</span>
            <span className="quantity">{likes}</span>
          </ActivitiesItem>
        </ActivitiesWrapper>
      </div>
    </>
  );
};
