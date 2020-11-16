function first(list) {
    if (Array.isArray(list)) {
        if (list.legth != 0) {
            let lastListItem = list[0]
            return lastListItem
        } else {
            return undefined
        }
    } else {
        return undefined
    }
}