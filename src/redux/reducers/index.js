import types from '../types'

export function subjectReducer(subject=[], action) {
    switch (action.type) {
        case types.GET_SUBJECT:
            return action.payload;
        case types.GET_SUBJECT_ERROR:
            return action.payload.message;
        default:
            return subject;
    }
}
export function partnersReducer(partners=[], action) {
    switch (action.type) {
        case types.GET_PARTNERS:
            return action.payload;
        case types.GET_PARTNERS_ERROR:
            return action.payload.message;
        default:
            return partners;
    }
}

export function contactReducer(contact={}, action) {
    switch (action.type) {
        case types.GET_CONTACT:
            return action.payload;
        case types.GET_CONTACT_ERROR:
            return action.payload.message;
        default:
            return contact;
    }
}

export function socialsReducer(socials=[], action) {
    switch (action.type) {
        case types.GET_SOCIALS:
            return action.payload;
        case types.GET_SOCIALS_ERROR:
            return action.payload.message;
        default:
            return socials;
    }
}

export function aboutReducer(about=[], action) {
    switch (action.type) {
        case types.GET_ABOUT:
            return action.payload;
        case types.GET_ABOUT_ERROR:
            return action.payload.message;
        default:
            return about;
    }
}

export function yearsReducer(years=[], action) {
    switch (action.type) {
        case types.GET_YEARS:
            return action.payload;
        case types.GET_YEARS_ERROR:
            return action.payload.message;
        default:
            return years;
    }
}

// export function supportReducer(support=[], action) {
//     switch (action.type) {
//         case types.GET_SUPPORT:
//             return action.payload;
//         case types.GET_SUPPORT_ERROR:
//             return action.payload.message;
//         default:
//             return support;
//     }
// }
export function supportFullReducer(supportFull= {}, action) {
    switch (action.type) {
        case types.GET_SUPPORT_FULL:
            return action.payload;
        case types.GET_SUPPORT_FULL_ERROR:
            return action.payload.message;
        default:
            return supportFull;
    }
}

export function freeSupportFullReducer(freeSupportFull= {}, action) {
    switch (action.type) {
        case types.GET_FREE_SUPPORT_FULL:
            return action.payload;
        case types.GET_FREE_SUPPORT_FULL_ERROR:
            return action.payload.message;
        default:
            return freeSupportFull;
    }
}
export function newsFullReducer(newsFull={}, action) {
    switch (action.type) {
        case types.GET_NEWS_FULL:
            return action.payload;
        case types.GET_NEWS_FULL_ERROR:
            return action.payload.message;
        default:
            return newsFull;
    }
}
export function workersFullReducer(workersFull={}, action) {
    switch (action.type) {
        case types.GET_WORKERS_FULL:
            return action.payload;
        case types.GET_WORKERS_FULL_ERROR:
            return action.payload.message;
        default:
            return workersFull;
    }
}
export function workersReducer(workers=[], action) {
    switch (action.type) {
        case types.GET_WORKERS:
            return action.payload;
        case types.GET_WORKERS_ERROR:
            return action.payload.message;
        default:
            return workers;
    }
}

