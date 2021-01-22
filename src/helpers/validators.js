export const requiredField = (value) => {
  if (value) {
    return undefined
  }
  return 'Field is required'
}
export const maxLengthCreator = (rule, value, callback, _source, options) => {
  if (value.length > 5) {
    return `Max length is 5 simbols`
  } else {
    callback()
  }
}
