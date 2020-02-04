import usersAPI from '../api/api';
const TOGGLE_FETCHING = "TOGGLE_FETCHING",
    SET_USERS = "SET_USERS",
    SET_CURRENT_PAGE = 'SET-CURRENT-PAGE',
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    totalUsersCount: 0,
    isFetching: false,
    currentPage: 1,
    users: [],
    pageSize: 6,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FETCHING :
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case SET_USERS :
            return {
                ...state,
                users: action.users,
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }
        default:
            return state
    }
}

export const setIsFetching = isFetching => {
    return {
        type: TOGGLE_FETCHING,
        isFetching,
    }
}
export const setUsers = users => {
    return {
        type: SET_USERS,
        users,
    }
}
export const setTotalUsersCount = totalUsersCount => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount,
    }
}
export const setCurrentPage = currentPage => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage,
    }
}

export const getUsersTC = (currentPage, pageSize) => {
    return dispatch => {
        dispatch(setIsFetching(true));
        usersAPI.getUsers().then(
            data => {
                dispatch(setIsFetching(false));
                // dispatch(setUsers(users))
                dispatch(setTotalUsersCount(data.total));
            }
        )


        // usersAPI.getUsers(currentPage, pageSize).then(data => {
        //     dispatch(setIsFetching(false));
        //     dispatch(setUsers(data.items));
        //     dispatch(setTotalUsersCount(data.totalCount));
        // })

    }
}

export default usersReducer