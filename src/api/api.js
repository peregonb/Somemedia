import * as moment from 'moment';
const users = require('./data/users.json');
const stats = appendDate(require('./data/users_statistic.json'));

function appendDate(arr) {
    return arr.map(i => ({...i, date: moment(i.date, 'YYYY-MM-DD')}))
}

export default {
    async getUserByID(id) {
        return users.filter(u => u.id === id)[0];
    },

    // 10 на странице (n)
    // 5 страница (p)
    // offset = p * n
    async getUsers(limit, offset) {
        return {
            total: users.length,
            items: users.slice(offset, offset+limit),
        };
    },

    async getUserStats(userId) {
        return stats.filter(stat => stat.user_id === userId);
    },

    async getAllStats(limit, offset) {
        return {
            total: stats.length,
            items: stats.slice(offset, offset + limit)
        }
    },

    /**
     * Get stats between start and end date
     * @param {Moment} startDate Start date
     * @param {Moment} endDate End date
     */
    async getStatsInPeriod(startDate, endDate) {
        return stats.filter(stat => stat.date.isAfter(startDate) && stat.date.isBefore(endDate))
    }
};