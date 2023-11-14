import { OstDocument } from 'outstatic'
import { TagObject } from '../Search/type'

export type OutstaticSchema<
    TSchema extends { [key: string]: unknown } = { [key: string]: unknown },
> = TSchema &
    OstDocument & {
        __outstatic: {
            hash: string
            path: string
            commit: string
        }
        tags?: Array<TagObject>
        iframes?: string
    }
