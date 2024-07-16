export type IPath = Record<string, string | {
    path: string,
    operation: {
        summary: string,
        description: string
    }
}> 