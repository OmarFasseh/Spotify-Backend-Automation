const express = require('express')
const app = express()
app.use(express.json()) // to have body to requests specially for post methods
const AppError = require('./utils/appError')
const errorController = require('./controllers/errorController')

app.use('/public', express.static('./public'))

const userRouter = require('./routes/userRouters')
const artistRouter = require('./routes/artistRoutes')
const artistAlbumRouter = require('./routes/artistAlbumRoutes')
const artistStatsRouter = require('./routes/artistStatsRoutes')
const categoryRouter = require('./routes/categoryRoutes')
const playlistRouter = require('./routes/playlistRoutes')
const trackRouter = require('./routes/trackRoutes')
const albumRouter = require('./routes/albumRoutes.js')
const playerRouter = require('./routes/playerRoutes')

const searchRouter = require('./routes/searchRoutes')

// Mounting the Routers
app.use('/', userRouter)
app.use('/search', searchRouter)
app.use('/artists', artistRouter)
app.use('/browse/categories', categoryRouter) //   act as middleware for this route only
app.use('/playlists', playlistRouter)
app.use('/tracks', trackRouter)
app.use('/albums', albumRouter)
app.use('/me/player', playerRouter)
app.use('/me/albums', artistAlbumRouter)
app.use('/me/stats', artistStatsRouter)

// Middlewares
// after all handeled routes
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404))
})

// handled undefined routes
app.use(errorController)

module.exports = app
