import * as moment from 'moment';

const usersJSON = require('./data/users.json');
const statsJSON = appendDate(require('./data/users_statistic.json'));

function appendDate(arr) {
    return arr.map(i => ({...i, date: moment(i.date, 'YYYY-MM-DD')}))
}

export default {
    async getUserByID(id) {
        return usersJSON.filter(u => u.id === parseInt(id))[0];
    },

    // 10 на странице (n)
    // 5 страница (p)
    // offset = p * n
    async getUsers(limit, offset) {
        let arrLength = usersJSON.slice(offset, offset + limit).length;
        let arrCommon = [];
        for (let i = 0; i < arrLength; i++) {
            let finalClicks = statsJSON.filter(arr => arr.user_id === i + 1).map(el => el.clicks).reduce((prevValue, curValue) => {
                let sum = prevValue + curValue;
                return !sum ? 0 : sum;
            });
            let finalViews = statsJSON.filter(arr => arr.user_id === i + 1).map(el => el.page_views).reduce((prevValue, curValue) => {
                let sum = prevValue + curValue;
                return !sum ? 0 : sum;
            });
            arrCommon.push({
                id: i + 1,
                total_clicks: finalClicks,
                total_page_views: finalViews
            })
        }
        let recievedElements = usersJSON.slice(offset, offset + limit);
        let finalArray = recievedElements.map((item, i) => Object.assign({}, item, arrCommon[i]));
        return {
            total: usersJSON.length,
            items: finalArray
        };
    },

    async changeUsersPage(currentPage, pageSize, pageNumber) {

    },

    async getUserStats(userId) {
        return statsJSON.filter(stat => stat.user_id === userId);
    },

    async getAllStats(limit, offset) {
        return {
            total: statsJSON.length,
            items: statsJSON.slice(offset, offset + limit)
        }
    },

    /**
     * Get statsJSON between start and end date
     * @param {Moment} startDate Start date
     * @param {Moment} endDate End date
     */
    async getStatsInPeriod(startDate, endDate) {
        return statsJSON.filter(stat => stat.date.isAfter(startDate) && stat.date.isBefore(endDate))
    }
};