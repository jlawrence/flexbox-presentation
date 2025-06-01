import fs from 'node:fs'
import { marked } from 'marked'

export default function loadSlides() {
    const content = fs.readFileSync('content.md', { encoding: 'utf-8' })
    const markdownTokens = marked.lexer(
        content.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, ''),
    )

    const slides = []
    let currentSlide = null
    let inExample = false

    for (const token of markdownTokens) {
        if (token.type === 'heading' && token.depth > 1 && token.depth < 4) {
            if (slides.length > 1 && !inExample && currentSlide.level === 3) {
                // inherit example from previous slide if this slide has no example specified
                currentSlide.exampleCss =
                    slides.at(-2).exampleCss + '\n\n' + slides.at(-2).displayCss
                currentSlide.exampleHtml = slides.at(-2).exampleHtml
            }

            currentSlide = {
                title: token.text,
                notes: '',
                level: token.depth,
            }
            slides.push(currentSlide)
            inExample = false
        } else if (currentSlide) {
            if (
                token.type === 'paragraph' &&
                token.text.trim() === 'Example Details:'
            ) {
                inExample = true
            } else {
                if (inExample) {
                    if (token.type === 'code' && token.lang === 'css') {
                        currentSlide.exampleCss = token.text
                    } else {
                        if (token.type === 'code' && token.lang === 'html') {
                            currentSlide.exampleHtml = token.text
                        }
                    }
                } else if (token.type === 'code' && token.lang === 'css') {
                    currentSlide.displayCss = token.text
                } else if (token.type === 'paragraph') {
                    currentSlide.notes += token.text
                } else if (token.type === 'space') {
                    currentSlide.notes += token.raw
                }
            }
        }
    }

    for (let slide of slides) {
        slide.notes = slide.notes.trim()
    }

    return slides
}
