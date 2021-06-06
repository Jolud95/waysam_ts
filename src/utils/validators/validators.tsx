export type FieldValidatorType = (value: string) => string | undefined

export const required: FieldValidatorType= (value) => {
    if (value) {
        return undefined
    } else {
        return "Field is required"
    }
}

export const maxLengthCreator = (maxLength: number): FieldValidatorType => {
    return (value) => {
        if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    }
}
