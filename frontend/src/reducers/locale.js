const SET_LOCALE = 'locale/SET_LOCALE';

export default function reducer(state = {}, action) {
    switch(action.type) {
        case SET_LOCALE:
            return {
                currentLocale: action.locale
            }
            break;
        default:
            return state;
    }
}

// Public action creators and async actions
/**
 * Sets the given locale as currentLocale for the application
 * @param locale
 * @returns {{type: string, locale: *}}
 */
export function setLocale(locale) {
    return {
        type: SET_LOCALE,
        locale
    }
}