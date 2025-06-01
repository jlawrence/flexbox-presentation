import fs from 'node:fs'
import loadSlides from './scripts/loadSlides.js'
import renderPage from './scripts/renderPage.js'
import startServer from './scripts/startServer.js'
const PORT = 3000

startServer(PORT, (slideIndex) => {
    const slides = loadSlides()
    const template = fs.readFileSync('template.html', 'utf8')
    return renderPage(slides, template, slideIndex)
})
