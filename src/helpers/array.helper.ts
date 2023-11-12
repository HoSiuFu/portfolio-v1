export const range = (start: number, stop: number, step = 1) => {
    const length = Math.ceil((stop - (start - 1)) / step)
    return Array.from({ length }, (_, index) => index * step + start)
}
