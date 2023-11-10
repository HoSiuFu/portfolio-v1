import { OstDocument } from 'outstatic'

export type OutstaticSchema<
    TSchema extends { [key: string]: unknown } = { [key: string]: unknown },
> = TSchema &
    OstDocument & {
        __outstatic: {
            hash: string
            path: string
            commit: string
        }
    }
