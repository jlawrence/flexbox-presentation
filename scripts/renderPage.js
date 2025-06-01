export default function renderPage(slides, template, currentSlideIndex) {
    const currentSlide = slides[currentSlideIndex]

    if (!currentSlide) {
        return `There is no slide with the index "${currentSlideIndex}"`
    }

    return addSlideTitleAndNavigation(
        addSlideContent(template, currentSlide),
        slides,
        currentSlideIndex,
    )
}

function addSlideTitleAndNavigation(html, slides, currentSlideIndex) {
    const currentSlide = slides[currentSlideIndex]

    return html
        .replaceAll('$slideTitle', specialHtmlEncode(currentSlide.title))
        .replaceAll('$slideLevel', currentSlide.level)
        .replaceAll(
            '$slideListItems',
            slides
                .map((slide, index) =>
                    createListItem(slide, index, currentSlideIndex),
                )
                .join('\n'),
        )
        .replaceAll(
            '$previousSlideIndex',
            currentSlideIndex - 1 < 0 ? '' : currentSlideIndex - 1,
        )
        .replaceAll(
            '$nextSlideIndex',
            currentSlideIndex + 1 >= slides.length ? '' : currentSlideIndex + 1,
        )
}

function createListItem(slide, index, currentSlideIndex) {
    const isCurrentSlide = index === currentSlideIndex
    return (
        `<li><a href="/${index}" class="slide-list__link slide-list__link--level${slide.level} ${isCurrentSlide ? 'slide-list__link--current' : ''}">` +
        specialHtmlEncode(slide.title) +
        '</a></li>'
    )
}

function addSlideContent(html, slide) {
    return html
        .replace(
            '$example',
            `\n<style>${slide.exampleCss ?? ''}\n\n${slide.displayCss ?? ''}</style>\n${slide.exampleHtml ?? ''}\n`,
        )
        .replace('$notes', specialHtmlEncode(slide.notes))
        .replace('$displayCss', format(slide.displayCss))
}

// html-encodes in a special way to make syntax-highlighting easier
function specialHtmlEncode(text) {
    if (!text) {
        return ''
    }
    return text.replace(
        /[&<>'";]/g,
        (character) =>
            ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;',
                ';': '&semi;',
            })[character],
    )
}

function format(text) {
    return specialHtmlEncode(text)
        .replace(
            /^(\s+[a-z0-9-]+:)(.+?)&semi;/gim,
            (_, capture1, capture2) =>
                `<span class="css-property">${capture1}</span><span class="css-property-value">${capture2}</span>&semi;`,
        )
        .replace(
            /\/\*.*?\*\//gs,
            (match) => `<span class="comment">${match}</span>`,
        )
        .replace(
            /\&lt;([a-z0-9_-]+)(?=\s|&gt;)/gi,
            (_, capture1) => `&lt;<span class="tag-name">${capture1}</span>`,
        )
        .replace(
            /([a-z0-9_-]+)&gt;/gi,
            (_, capture1) => `<span class="tag-name">${capture1}</span>&gt;`,
        )
        .replace(
            /([a-z0-9_-]+)=(&quot;.*?&quot;)/gi,
            (_, capture1, capture2) =>
                `<span class="attribute-name">${capture1}</span>=<span class="attribute-value">${capture2}</span>`,
        )
}
