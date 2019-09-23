import moment from 'moment';

export function timeElapsed(createdAt, updatedAt) {
  const formattedDate = date => new Date(date).toLocaleDateString();

  const dateToUse = createdAt === updatedAt ? createdAt : updatedAt;

  return moment(formattedDate(dateToUse), 'MM/DD/YYYY').fromNow();
}

export function upvotePercentage(upvotes, downvotes) {
  return Math.floor((upvotes / (upvotes + downvotes)) * 100);
}
