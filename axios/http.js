
export const get = (url, params = {}) => http.get(url, { params })
export const post = http.post
export const deleted = (url, params = {}) => http.delete(url, { params })
export const put = http.put