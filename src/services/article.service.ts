import api from 'src/api'

const getArticles = (params: any) => new Promise((resolve, reject) => {
  api.get('/search_by_date', { params })
    .then((response) => {
      resolve(response)
    })
    .catch((err) => {
      reject(err)
    })
})

// const getRoom = (id) => new Promise((resolve, reject) => {
//   api.get(`/rooms/${id}`)
//     .then((response) => {
//       resolve(response.room)
//     })
//     .catch((err) => {
//       reject(err)
//     })
// })

// const createRoom = (room) => new Promise((resolve, reject) => {
//   api.post('/rooms', room)
//     .then((response) => {
//       resolve(response.room)
//     })
//     .catch((err) => {
//       reject(err)
//     })
// })

// const editRoom = (room) => new Promise((resolve, reject) => {
//   api.put(`/rooms/${room.id}`, room)
//     .then((response) => {
//       resolve(response.room)
//     })
//     .catch((err) => {
//       reject(err)
//     })
// })

export default {
  getArticles
}
