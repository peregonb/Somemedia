import {
  parse,
  format,
  isAfter,
  isBefore,
  isSameDay,
  addDays,
  differenceInCalendarDays
} from "date-fns";

const DATE_FORMAT = "yyyy-MM-dd";
const DAY_MS = 86400000;

const appendDate = arr =>
  arr.map(i => ({ ...i, dateMs: parse(i.date, DATE_FORMAT, new Date()) }));

const isSameOrAfter = (dateLeft, dateRight) =>
  isSameDay(dateLeft, dateRight) || isAfter(dateLeft, dateRight);

const isSameOrBefore = (dateLeft, dateRight) =>
  isSameDay(dateLeft, dateRight) || isBefore(dateLeft, dateRight);

const usersJSON = require("./data/users.json");
const statsJSON = appendDate(require("./data/users_statistic.json"));

export default {
  async getUserByID(id, startDate, endDate) {
    const person = usersJSON.filter(u => u.id === +id)[0];
    const statistics = statsJSON.filter(stat => stat.user_id === +id);
    const rangedData = statistics.filter(
      stat => isAfter(stat.dateMs, startDate) && isBefore(stat.dateMs, endDate)
    );

    return {
      person,
      statistics,
      rangedData
    };
  },

  async getMaxDate(id) {
    let personStatistics = statsJSON.filter(
      stat => stat.user_id === parseInt(id)
    );
    let datesArr = [];
    personStatistics.map(stat => datesArr.push(stat.dateMs));
    let maxDate = new Date(Math.max.apply(null, datesArr));
    let minDate = new Date(Math.min.apply(null, datesArr));
    let pastDate = new Date(maxDate - DAY_MS * 6);
    return {
      maxDate,
      pastDate,
      minDate
    };
  },
  fillEmptyDaysInStats(stats, startDate, endDate) {
    const statsGroupedByDate = new Map();
    stats.forEach(stat => {
      if (!statsGroupedByDate.has(stat.date)) {
        statsGroupedByDate.set(stat.date, [stat]);
        return;
      }

      statsGroupedByDate.get(stat.date).push(stat);
    });

    const filledStats = [];

    const daysCount = differenceInCalendarDays(endDate, startDate);
    for (let i = 0; i <= daysCount; i++) {

      const date = addDays(startDate, i);
      const dateStr = format(date, DATE_FORMAT);

      if (statsGroupedByDate.has(dateStr)) {
        filledStats.push(...statsGroupedByDate.get(dateStr));
        continue;
      }


      filledStats.push({
        user_id: stats.user_id,
        date: dateStr,
        dateMs: date,
        page_views: 0,
        clicks: 0
      });
    }

    return filledStats;
  },

  async getUsers(limit, offset) {
    let arrLength = usersJSON.slice(offset, offset + limit).length;
    let arrCommon = [];
    for (let i = 0; i < arrLength; i++) {
      let finalClicks = statsJSON
        .filter(arr => arr.user_id === i + 1)
        .map(el => el.clicks)
        .reduce((prevValue, curValue) => {
          let sum = prevValue + curValue;
          return !sum ? 0 : sum;
        });
      let finalViews = statsJSON
        .filter(arr => arr.user_id === i + 1)
        .map(el => el.page_views)
        .reduce((prevValue, curValue) => {
          let sum = prevValue + curValue;
          return !sum ? 0 : sum;
        });
      arrCommon.push({
        id: i + 1,
        total_clicks: finalClicks,
        total_page_views: finalViews
      });
    }
    let recievedElements = usersJSON.slice(offset, offset + limit);
    let finalArray = recievedElements.map((item, i) =>
      Object.assign({}, item, arrCommon[i])
    );
    return {
      total: usersJSON.length,
      items: finalArray
    };
  },

  async getUserStatsInPeriod(userID, startDate, endDate) {
    return statsJSON.filter(
      stat =>
        stat.user_id === userID &&
        isSameOrAfter(stat.dateMs, startDate) &&
        isSameOrBefore(stat.dateMs, endDate)
    );
  },

};
