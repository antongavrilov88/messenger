function last(list) {
    if (Array.isArray(list)) {
        if (list.legth != 0) {
            let lastListItem = list[list.length - 1]
            return lastListItem
        } else {
            return undefined
        }
    } else {
        return undefined
    }
}