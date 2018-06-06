export const createActionTypes = (base, actions = []) => actions.reduce((acc, type) => {
  acc[type] = `${base}_${type}`

  return acc
}, {})

export default createActionTypes
