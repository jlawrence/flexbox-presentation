import express from 'express'

export default function startServer(port, renderPage) {
    const app = express()
    app.use(express.static('public'))

    app.get('/', (req, res) => {
        sendHtmlResponse(res, renderPage(0))
    })

    app.get('/:slideIndex', (req, res) => {
        sendHtmlResponse(
            res,
            renderPage(Number.parseInt(req.params.slideIndex, 10)),
        )
    })

    app.listen(port)
    console.log(`Go to http://localhost:${port} in a web browser`)
}

function sendHtmlResponse(res, html) {
    res.setHeader('content-type', 'text/html')
    res.send(html)
}
