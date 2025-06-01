;(function () {
    const presentingCssClass = 'body--presenting'
    const presentingStorageKey = 'presenting'
    const scrollPositionStorageKey = 'scrollPosition'

    function updateDisplay() {
        if (isPresenting()) {
            document.body.classList.add(presentingCssClass)
        } else {
            document.body.classList.remove(presentingCssClass)
        }
    }

    function isPresenting() {
        return JSON.parse(sessionStorage.getItem(presentingStorageKey)) ?? false
    }

    function updateScrollPosition() {
        const savedScrollPosition = sessionStorage.getItem(
            scrollPositionStorageKey,
        )
        if (savedScrollPosition) {
            document.querySelector('nav').scrollTop = savedScrollPosition
        }
    }

    function addKeyboardShortcuts() {
        window.addEventListener('keydown', (event) => {
            if (event.code === 'ArrowRight' || event.code === 'ArrowDown') {
                document.getElementById('nextSlideButton').click()
            } else if (event.code === 'ArrowLeft' || event.code === 'ArrowUp') {
                document.getElementById('previousSlideButton').click()
            } else if (event.code === 'KeyP') {
                document.getElementById('presentButton').click()
            }
        })
    }

    function registerButtonHandlers() {
        document
            .getElementById('presentButton')
            .addEventListener('click', () => {
                sessionStorage.setItem(presentingStorageKey, !isPresenting())
                updateDisplay()
            })
    }

    function registerScrollEndHandler() {
        document.querySelector('nav').addEventListener('scroll', () => {
            sessionStorage.setItem(
                scrollPositionStorageKey,
                document.querySelector('nav').scrollTop,
            )
        })
    }

    document.addEventListener('DOMContentLoaded', () => {
        addKeyboardShortcuts()
        registerButtonHandlers()
        updateDisplay()
        updateScrollPosition()
        registerScrollEndHandler()
    })
})()
