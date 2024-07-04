const person = { name: 'kalory', age:18}
person.onwer = person

const cur = (data, cache = new Set()) => {
  const values = Object.values(data)
  for(let i=0; i<values.length; ++i) {
    if(cache.has(values[i])) return true
    if(values[i] === null || typeof values[i] !== 'object') continue
    cache.add(values[i])
    const flag = cur(values[i], cache) // 这里要注意
    if(flag) return true
  }
  return false
}

console.log(cur(person))
