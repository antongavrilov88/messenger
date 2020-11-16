function binarySearch(list, element) {
    let start = 0
    let end = list.length

    while (start < end) {

        let middleIndex = Math.floor((start + end) / 2)
        let middleValue = list[middleIndex]

        if (middleValue < element) {
            start = middleIndex + 1
        }
        if (middleValue > element) {
            end = middleIndex
        }
        if (middleValue == element) {
            return middleIndex
        }
    }
    return -1
}