const READING_STATES = [
    "READ_LATER",
    "READING",
    "READ",
    "WISHLIST"
]

export function indexOfReadingState(state) {
    return READING_STATES.indexOf(state)
}
