import moment from "moment-timezone";

export const formatDateTime = (unixTimestamp, timeZone) => {
  if (!timeZone) return { formattedTime: "", formattedDate: "" };
  const date = moment.unix(unixTimestamp).tz(timeZone);
  const formattedTime = date.format("HH:mm");
  const formattedDate = date.format("DD/MM");
  return { formattedTime, formattedDate };
};
