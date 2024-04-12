const getLocalStorageItem = (key: string) => {
    const item = localStorage.getItem(key)

    if (item === null) return undefined
    if (item === "null") return null
    if (item === "undefined") return undefined

    return item
  }

const setLocalStorageItem = (key: string, value: any) => {
    if (value === undefined) {
        localStorage.removeItem(key)
    } else {
        localStorage.setItem(key, value)
    }
}

export {
    getLocalStorageItem,
    setLocalStorageItem,
}