export type ServerActionResponse<T> = {
    isError?: boolean
    data?: T
    errorMessage?: string
    validationError?: any
}