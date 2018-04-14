
export const STICKY_NAVIGATION = 'sticky_navigation'
export function setHeaderScroll(scroll) {
    return {
        type: STICKY_NAVIGATION,
        payload: scroll
    }
}