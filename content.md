# Flexbox

## Introduction - Flexbox

Flexbox is a layout model, which is essentially a set of CSS properties that work together to arrange items on a page. Note: In this presentation I use pixels for ease of understanding, but in real-life you would often use rems.

### Flex Container

A "flex container" is an element that has a display type of "flex". Here is my flex container.

```css
.container {
    display: flex;
    width: 300px;
    height: 300px;
}
```

Example Details:

```css
.container {
    border: solid 5px #42bee3;
}
```

```html
<div class="container"></div>
```

### Flex Items

Containers, of course, are meant to contain items. So let's put some elements into the container. These elements become "flex items" because they are inside a flex container.

```css
.description {
    background: white;
}

.low-temperature {
    background: cornflowerblue;
}

.high-temperature {
    background: tomato;
}
```

Example Details:

```css
.container {
    display: flex;
    width: 300px;
    height: 300px;
    border: solid 5px #42bee3;
}

.description,
.low-temperature,
.high-temperature {
    padding: 5px;
}

.low-temperature,
.high-temperature {
    color: white;
}
```

```html
<div class="container">
    <div class="description">
        Mars is the fourth planet from the sun. Its climate is much colder than
        Earth's.
    </div>
    <div class="low-temperature">-225 °F</div>
    <div class="high-temperature">70 °F</div>
</div>
```

### Gap

I can easily add extra space between items by setting the gap.

```css
.container {
    column-gap: 10px;
}
```

### Flex-Direction

These items are arranged as a row by default. But we can change the direction with "flex-direction" and arrange the items into a column. Notice how we use row-gap and column-gap.

```css
.row-container {
    flex-direction: row;
    column-gap: 10px;
}

.column-container {
    flex-direction: column;
    row-gap: 10px;
}
```

Example Details:

```css
.container {
    display: flex;
    border: solid 5px #42bee3;
    width: 300px;
    height: 300px;
}

.description {
    background: white;
}

.low-temperature {
    background: cornflowerblue;
}

.high-temperature {
    background: tomato;
}

.description,
.low-temperature,
.high-temperature {
    padding: 5px;
}

.low-temperature,
.high-temperature {
    color: white;
}
```

```html
<div class="container row-container">
    <div class="description">
        Mars is the fourth planet from the sun. Its climate is much colder than
        Earth's.
    </div>
    <div class="low-temperature">-225 °F</div>
    <div class="high-temperature">70 °F</div>
</div>
<br />
<div class="container column-container">
    <div class="description">
        Mars is the fourth planet from the sun. Its climate is much colder than
        Earth's.
    </div>
    <div class="low-temperature">-225 °F</div>
    <div class="high-temperature">70 °F</div>
</div>
```

### Responsive Design and Gap Shorthand

For responsive design, we can use a flex-direction of "column" for mobile devices, and a flex-direction of "row" for larger screens. We can use shorthand syntax for gap to set the row and column gap to 10px;

```css
.container {
    flex-direction: column;
    gap: 10px;
}

@container (min-width: 300px) {
    .container {
        flex-direction: row;
    }
}
```

Example Details:

```css
.container {
    display: flex;
    border: solid 5px #42bee3;
}

.description {
    background: white;
}

.low-temperature {
    background: cornflowerblue;
}

.high-temperature {
    background: tomato;
}

.description,
.low-temperature,
.high-temperature {
    padding: 5px;
}

.low-temperature,
.high-temperature {
    color: white;
}

.desktop-device {
    border: solid 10px black;
    width: 400px;
    height: 250px;
    container-type: inline-size;
    position: relative;
    display: inline-block;
}

.desktop-device::after {
    content: '';
    background: black;
    height: 20px;
    width: 100px;
    position: absolute;
    left: calc(50% - 50px);
    bottom: -30px;
}

.mobile-device {
    border: solid 10px black;
    width: 160px;
    height: 280px;
    margin: 100px;
    container-type: inline-size;
    position: relative;
    display: inline-block;
}

.mobile-device::after {
    content: 'O';
    color: white;
    background: black;
    padding: 5px 0;
    width: 100%;
    position: absolute;
    bottom: -8px;
    text-align: center;
}
```

```html
<div class="mobile-device">
    <div class="container">
        <div class="description">
            Mars is the fourth planet from the sun. Its climate is much colder
            than Earth's.
        </div>
        <div class="low-temperature">-225 °F</div>
        <div class="high-temperature">70 °F</div>
    </div>
</div>
<div class="desktop-device">
    <div class="container">
        <div class="description">
            Mars is the fourth planet from the sun. Its climate is much colder
            than Earth's.
        </div>
        <div class="low-temperature">-225 °F</div>
        <div class="high-temperature">70 °F</div>
    </div>
</div>
```

### Flex-Basis

Flex-basis can be used to set suggested sizes. Flexbox will try to respect those sizes, but minimum widths take priority. In this example, the temperature items each take up 30% of the horizontal space. The description could not be shrunk to fit 1%, so flexbox made the description as small as it could.

```css
.low-temperature,
.high-temperature {
    flex-basis: 30%;
}

.description {
    flex-basis: 5%;
}
```

Example Details:

```css
.container {
    display: flex;
    border: solid 5px #42bee3;
    width: 300px;
    height: 300px;
}

.description {
    background: white;
}

.low-temperature {
    background: cornflowerblue;
}

.high-temperature {
    background: tomato;
}

.description,
.low-temperature,
.high-temperature {
    padding: 5px;
}

.low-temperature,
.high-temperature {
    color: white;
}
```

```html
<div class="container">
    <div class="description">
        Mars is the fourth planet from the sun. Its climate is much colder than
        Earth's.
    </div>
    <div class="low-temperature">-225 °F</div>
    <div class="high-temperature">70 °F</div>
</div>
```

### Flex-Basis Versus Width - Overflow

If I use width instead of flex-basis, flexbox uses it strictly, which causes the content to be cut off.

```css
.description {
    width: 5%;
}
```

Example Details:

```css
.low-temperature,
.high-temperature {
    flex-basis: 30%;
}

.container {
    display: flex;
    border: solid 5px #42bee3;
    width: 300px;
    height: 300px;
}

.description {
    background: white;
}

.low-temperature {
    background: cornflowerblue;
}

.high-temperature {
    background: tomato;
}

.description,
.low-temperature,
.high-temperature {
    padding: 5px;
}

.low-temperature,
.high-temperature {
    color: white;
}
```

```html
<div class="container">
    <div class="description">
        Mars is the fourth planet from the sun. Its climate is much colder than
        Earth's.
    </div>
    <div class="low-temperature">-225 °F</div>
    <div class="high-temperature">70 °F</div>
</div>
```

### Flex-Basis Versus Width - Direction

Also, unlike width, flex-basis automatically corresponds to flex-direction.

```css
.row-container {
    flex-direction: row;
}

.column-container {
    flex-direction: column;
}

.description {
    flex-basis: 50%;
}
```

Example Details:

```css
.container {
    display: flex;
    border: solid 5px #42bee3;
    width: 300px;
    height: 300px;
}

.description {
    background: white;
}

.low-temperature {
    background: cornflowerblue;
}

.high-temperature {
    background: tomato;
}

.description,
.low-temperature,
.high-temperature {
    padding: 5px;
}

.low-temperature,
.high-temperature {
    color: white;
}
```

```html
<div class="container row-container">
    <div class="description">
        Mars is the fourth planet from the sun. Its climate is much colder than
        Earth's.
    </div>
    <div class="low-temperature">-225 °F</div>
    <div class="high-temperature">70 °F</div>
</div>
<br />
<div class="container column-container">
    <div class="description">
        Mars is the fourth planet from the sun. Its climate is much colder than
        Earth's.
    </div>
    <div class="low-temperature">-225 °F</div>
    <div class="high-temperature">70 °F</div>
</div>
```

## Growing and Shrinking

### Flex-Shrink

By default, flex-shrink is 1, which means that items in a flex container will shrink when there isn't enough space in the flex container. In this case I set the flex-shrink of Earth to 0, so it will maintain its original size, even in the smaller container.

```css
.container1 {
    width: 700px;
}

.container2 {
    width: 420px;
}

.planet {
    flex-shrink: 1; /* default */
}

.earth {
    flex-shrink: 0;
}
```

Example Details:

```css
.container {
    display: flex;
    border: solid 5px #42bee3;
    width: 600px;
    height: 130px;
    gap: 2px;
}

.container > div {
    display: inline-block;
    padding: 15px;
    background: black;
    color: white;
    text-align: center;
}

.container img {
    width: 50px;
}
```

```html
<h3>Plenty of Space</h3>
<div class="container container1">
    <div class="planet">
        <img src="images/mercury.svg" /><br />Mercury (4,879 km)
    </div>
    <div class="planet">
        <img src="images/venus.svg" /><br />Venus (12,104 km)
    </div>
    <div class="planet earth">
        <img src="images/earth.svg" /><br />Earth (12,756 km)
    </div>
    <div class="planet"><img src="images/mars.svg" /><br />Mars (6,792 km)</div>
</div>
<br />
<br />
<h3>Not Enough Space</h3>
<div class="container container2">
    <div class="planet">
        <img src="images/mercury.svg" /><br />Mercury (4,879 km)
    </div>
    <div class="planet">
        <img src="images/venus.svg" /><br />Venus (12,104 km)
    </div>
    <div class="planet earth">
        <img src="images/earth.svg" /><br />Earth (12,756 km)
    </div>
    <div class="planet"><img src="images/mars.svg" /><br />Mars (6,792 km)</div>
</div>
```

### Flex-Grow

By default items won't expand (they have a flex-grow of 0). We can make items expand to fill the available space by using flex-grow: 1. Since the flex-direction is "row", the Earth expands to fill the available horizontal space

```css
.planet {
    flex-grow: 0; /* default */
}

.container2 .earth {
    flex-grow: 1;
}
```

Example Details:

```css
.container {
    display: flex;
    border: solid 5px #42bee3;
    width: 600px;
    height: 130px;
    gap: 2px;
}

.container > div {
    display: inline-block;
    padding: 15px;
    background: black;
    color: white;
    text-align: center;
}

.container img {
    width: 50px;
}
```

```html
<h3>Inner Planets</h3>
<div class="container container1">
    <div class="planet"><img src="images/mercury.svg" /><br />Mercury</div>
    <div class="planet"><img src="images/venus.svg" /><br />Venus</div>
    <div class="planet earth"><img src="images/earth.svg" /><br />Earth</div>
    <div class="planet"><img src="images/mars.svg" /><br />Mars</div>
</div>
<br />
<br />
<h3>Inner Planets</h3>
<div class="container container2">
    <div class="planet"><img src="images/mercury.svg" /><br />Mercury</div>
    <div class="planet"><img src="images/venus.svg" /><br />Venus</div>
    <div class="planet earth"><img src="images/earth.svg" /><br />Earth</div>
    <div class="planet"><img src="images/mars.svg" /><br />Mars</div>
</div>
```

### Implicit Minimum Size

Sometimes things have a minimum size even if you don't specify it. For example, images and tables can have an implicit minimum width.

In this case, even though flex-shrink is 1, the image won't shrink by default. You can see the details in the Firefox Inspector's Layout tab.

However, you can remove the implicit minimum size and make the item fit within the flexbox. Simply set min-width to 0.

```css
.planet {
    flex-shrink: 1; /* default */
}

.earth {
    min-width: 0;
}
```

Example Details:

```css
label {
    width: 60px;
    flex-grow: 0;
    flex-shrink: 0;
    display: block;
    border-bottom: solid 2px black;
    font-weight: bold;
}

.container {
    display: inline flex;
    border: solid 5px #42bee3;
    width: 120px;
    height: 120px;
    align-items: start;
    margin-right: 100px;
}
```

```html
<h3>The native size of both images is 100x100 pixels.</h3>
<div class="container">
    <label>Venus</label>
    <img class="venus planet" src="images/venus-100px.jpg" />
</div>
<div class="container">
    <label>Earth</label>
    <img class="earth planet" src="images/earth-100px.jpg" />
</div>
```

### Max and Min

If I specify a width (or flex-basis), the flex item can still grow and shrink based on flex-grow and flex-shrink. But if I specify a max-width or min-width, those are strictly enforced. Firefox shows what happens when you reach a max-width in its developer tools sidebar. The same principle applies to height when using flex-direction: column.

```css
.planet-grow {
    flex-grow: 1;
    width: 90px;
}

.earth {
    max-width: 90px;
}
```

Example Details:

```css
.container {
    display: flex;
    border: solid 5px #42bee3;
    width: 600px;
    height: 100px;
    gap: 2px;
}

.container > div {
    display: inline-block;
    padding: 15px;
    background: black;
    color: white;
    text-align: center;
}

.container img {
    width: 50px;
}
```

```html
<h3>Inner Planets</h3>
<div class="container">
    <div class="planet-grow"><img src="images/mercury.svg" /><br />Mercury</div>
    <div class="planet-grow"><img src="images/venus.svg" /><br />Venus</div>
    <div class="planet-grow earth">
        <img src="images/earth.svg" /><br />Earth
    </div>
    <div class="planet-grow"><img src="images/mars.svg" /><br />Mars</div>
</div>
```

## Growing and Shrinking - Details

I will now fill in some details that were not previously mentioned.

### Rate of Growth

First I have two spans, one for Mercury, and one for Mars. Mercury is originally bigger than Mars.

I set flex-grow to 1 for both of them. This will make them grow at the same rate into the free space. Notice how they are not the same size because flex-grow defines the ratio of growth, not the final ratio. You can see the free space in the Firefox Inspector's Layout tab.

I then set flex-grow for Mars to 2, which will make it grow twice as fast. Again, Mars is not twice as large as Mercury because we are only specifying growth rate.

Flex-shrink behaves similarly, but I won't show it here. I'll just mention that an item with a flex-shrink of 2 will shrink twice as fast as an item with a flex-shrink of 1.

```css
.container2 {
    .mercury {
        flex-grow: 1;
    }

    .mars {
        flex-grow: 1;
    }
}

.container3 {
    .mercury {
        flex-grow: 1;
    }

    .mars {
        flex-grow: 2;
    }
}
```

Example Details:

```css
.container {
    display: flex;
    width: 350px;
    border: solid 5px #42bee3;
    align-items: center;
}

.mercury {
    background-color: gray;
}

.mars {
    background-color: red;
}

.container span {
    color: white;
    text-align: center;
    font-weight: bold;
    letter-spacing: 6px;
    line-height: 50px;
}
```

```html
<h3>Original</h3>
<div class="container container1">
    <span class="mercury">Mercury</span>
    <span class="mars">Mars</span>
</div>
<h3>flex-grow: 1, flex-grow: 1</h3>
<div class="container container2">
    <span class="mercury">Mercury</span>
    <span class="mars">Mars</span>
</div>
<h3>flex-grow: 1, flex-grow: 2</h3>
<div class="container container3">
    <span class="mercury">Mercury</span>
    <span class="mars">Mars</span>
</div>
```

### Equal Columns - Simple Case

Let's say I want equal columns for Mercury and Mars. I can set flex-basis to 0. This will cause each item to first imaginarily shrink to 0. And then the normal rules of flex-grow are applied, causing the items to expand equally.

```css
.container3 > * {
    flex-basis: 0;
    flex-grow: 1;
}
```

Example Details:

```css
.container {
    display: flex;
    width: 350px;
    border: solid 5px #42bee3;
    align-items: center;
}

.mercury {
    background-color: gray;
}

.mars {
    background-color: red;
}

.container span {
    color: white;
    text-align: center;
    font-weight: bold;
    letter-spacing: 6px;
    line-height: 50px;
}

.container2 > * {
    flex-basis: 0;
    min-width: 0;
    overflow: hidden;
}
```

```html
<h3>Original</h3>
<div class="container container1">
    <span class="mercury">Mercury</span>
    <span class="mars">Mars</span>
</div>
<h3>Imaginary Step 1</h3>
<div class="container container2">
    <span class="mercury">Mercury</span>
    <span class="mars">Mars</span>
</div>
<h3>flex-basis: 0, flex-grow: 1</h3>
<div class="container container3">
    <span class="mercury">Mercury</span>
    <span class="mars">Mars</span>
</div>
```

### Equal Columns - Complex Case

What if any of the items have padding, margin, or borders? These are unshrinkable. Each item's box-sizing box will be shrunk as much as possible, up to the limit of those.

In this example, Mercury has total padding of 60px. Even though it grows at the same rate as Mars, it starts out with 60px instead of 0, so it is larger in the end.

A solution is to wrap each item in container div. Note that using a container div can affect the content inside it. In this case, I needed to modify the styles of each span inside the div to make it take up the full space occupied by the div.

As a note, instead of using container divs, you could use grid layout instead of flexbox.

```css
.mercury {
    padding-left: 30px;
    padding-right: 30px;
}

.container3 > * {
    flex-basis: 0;
    flex-grow: 1;
}

.container4 > div {
    flex-basis: 0;
    flex-grow: 1;
}

.container4 > div > * {
    display: block;
}
```

Example Details:

```css
.container {
    display: flex;
    width: 350px;
    border: solid 5px #42bee3;
    align-items: center;
}

.mercury {
    background-color: gray;
}

.mars {
    background-color: red;
}

.container span {
    color: white;
    text-align: center;
    font-weight: bold;
    letter-spacing: 6px;
    line-height: 50px;
}

.container2 > * {
    flex-basis: 0;
    min-width: 0;
    width: 0;
    overflow: hidden;
}
```

```html
<h3>Original</h3>
<div class="container container1">
    <span class="mercury">Mercury</span>
    <span class="mars">Mars</span>
</div>
<h3>Imaginary Step 1</h3>
<div class="container container2">
    <span class="mercury">Mercury</span>
    <span class="mars">Mars</span>
</div>
<h3>No Container Divs</h3>
<div class="container container3">
    <span class="mercury">Mercury</span>
    <span class="mars">Mars</span>
</div>
<h3>With Container Divs</h3>
<div class="container container4">
    <div><span class="mercury">Mercury</span></div>
    <div><span class="mars">Mars</span></div>
</div>
```

### Flex Shorthand

You can use "flex" as a shorthand syntax to set flex item property values. Note that the shorthand uses different default values than the individual properties. In the first container the default value for flex-basis is 0%. This causes the flex items to share space equally. But in the second container the default value for flex-basis is "auto", so Mercury is larger than Mars.

```css
.container1 > * {
    flex: 1;
    /* equivalent to:  */
    /* flex-grow: 1;   */
    /* flex-shrink: 1; */
    /* flex-basis: 0%; */
}

.container2 > * {
    flex-grow: 1;
    /* equivalent to:    */
    /* flex-grow: 1;     */
    /* flex-shrink: 1;   */
    /* flex-basis: auto; */
}
```

Example Details:

```css
.container {
    display: flex;
    width: 350px;
    border: solid 5px #42bee3;
    align-items: center;
}

.mercury {
    background-color: gray;
}

.mars {
    background-color: red;
}

.container span {
    color: white;
    text-align: center;
    font-weight: bold;
    letter-spacing: 6px;
    line-height: 50px;
}
```

```html
<h3>flex: 1</h3>
<div class="container container1">
    <span class="mercury">Mercury</span>
    <span class="mars">Mars</span>
</div>
<br />
<h3>flex-grow: 1</h3>
<div class="container container2">
    <span class="mercury">Mercury</span>
    <span class="mars">Mars</span>
</div>
```

### Flex-Basis 0 vs 0%

Flex-basis 0 usually acts like 0%, but not always. Suppose we have a container with a flex-direction of column, but no specified height. Since the flex container doesn't have a specified height, then 0% of undefined makes no sense, so it is just treated as 'flex-basis: auto'".

```css
.container {
    flex-direction: column;
}

.container > * {
    min-height: 30px;
    width: 100px;
}

.container1 > * {
    flex-basis: 0;
}

.container2 > * {
    flex-basis: 0%;
}
```

Example Details:

```css
.container {
    display: flex;
    width: 110px;
    border: solid 5px #42bee3;
    align-items: center;
}

.container span {
    color: white;
    text-align: center;
    font-weight: bold;
    letter-spacing: 6px;
    line-height: 50px;
    display: block;
}
```

```html
<h3>flex-basis: 0</h3>
<div class="container container1">
    <img src="images/mercury-100px.jpg" />
    <img src="images/mars-100px.jpg" />
</div>
<br />
<h3>flex-basis: 0%</h3>
<div class="container container2">
    <img src="images/mercury-100px.jpg" />
    <img src="images/mars-100px.jpg" />
</div>
```

## Alignment

When there is extra space left over, we need to decide what to do. How do we align items within the extra space?

### Axes

The "main axis" is along the flex direction and the "cross axis" is perpendicular to it. Here's what the axes look like for each flex direction.

```css
.container-row {
    flex-direction: row;
}

.container-column {
    flex-direction: column;
}
```

Example Details:

```css
.container {
    display: flex;
}

.container {
    position: relative;
}

.container-2 {
    width: 100px;
}

.container-1 .main-axis {
    width: 550px;
    color: red;
    border-bottom: solid 4px red;
    position: absolute;
    top: 30px;
    left: -100px;
}

.container-1 .cross-axis {
    height: 150px;
    color: blue;
    border-left: solid 4px blue;
    position: absolute;
    left: 200px;
    top: -20px;
}

.container-2 .main-axis {
    height: 450px;
    width: 100px;
    color: red;
    border-left: solid 4px red;
    position: absolute;
    left: 50px;
    top: -19px;
}

.container-2 .cross-axis {
    width: 250px;
    color: blue;
    border-bottom: solid 4px blue;
    position: absolute;
    top: 200px;
    left: -100px;
}
```

```html
<h3>flex-direction: row</h3>
<div class="container container-1">
    <div class="container container-row">
        <img src="images/ganymede-100px.jpg" />
        <img src="images/callisto-100px.jpg" />
        <img src="images/io-100px.jpg" />
        <img src="images/europa-100px.jpg" />
    </div>
    <div class="main-axis">Main Axis</div>
    <div class="cross-axis">Cross Axis</div>
</div>
<br />
<br />
<h3>flex-direction: column</h3>
<div class="container container-2">
    <div class="container container-column">
        <img src="images/ganymede-100px.jpg" />
        <img src="images/callisto-100px.jpg" />
        <img src="images/io-100px.jpg" />
        <img src="images/europa-100px.jpg" />
    </div>
    <div class="main-axis">Main Axis</div>
    <div class="cross-axis">Cross Axis</div>
</div>
```

### Justify-Content

Justify-content moves items along the main axis.

```css
.container-1 {
    justify-content: flex-start;
}

.container-2 {
    justify-content: flex-end;
}

.container-3 {
    justify-content: center;
}
```

Example Details:

```css
.container {
    display: flex;
    flex-direction: row;
    width: 600px;
    border: solid 5px #42bee3;
}

.container div {
    text-align: center;
    background: black;
    color: white;
}
```

```html
<h3>flex-start</h3>
<div class="container container-1">
    <div><img src="images/ganymede-100px.jpg" /><br />Ganymede</div>
    <div><img src="images/callisto-100px.jpg" /><br />Callisto</div>
    <div><img src="images/io-100px.jpg" /><br />Io</div>
    <div><img src="images/europa-100px.jpg" /><br />Europa</div>
</div>
<h3>flex-end</h3>
<div class="container container-2">
    <div><img src="images/ganymede-100px.jpg" /><br />Ganymede</div>
    <div><img src="images/callisto-100px.jpg" /><br />Callisto</div>
    <div><img src="images/io-100px.jpg" /><br />Io</div>
    <div><img src="images/europa-100px.jpg" /><br />Europa</div>
</div>
<h3>center</h3>
<div class="container container-3">
    <div><img src="images/ganymede-100px.jpg" /><br />Ganymede</div>
    <div><img src="images/callisto-100px.jpg" /><br />Callisto</div>
    <div><img src="images/io-100px.jpg" /><br />Io</div>
    <div><img src="images/europa-100px.jpg" /><br />Europa</div>
</div>
```

### Justify-Content - More Examples

Here are some more values for justify-content

```css
.container-1 {
    justify-content: space-between;
}

.container-2 {
    justify-content: space-around;
}

.container-3 {
    justify-content: space-evenly;
}
```

Example Details:

```css
.container {
    display: flex;
    flex-direction: row;
    width: 600px;
    border: solid 5px #42bee3;
}

.container div {
    text-align: center;
    background: black;
    color: white;
}
```

```html
<h3>space-between</h3>
<div class="container container-1">
    <div><img src="images/ganymede-100px.jpg" /><br />Ganymede</div>
    <div><img src="images/callisto-100px.jpg" /><br />Callisto</div>
    <div><img src="images/io-100px.jpg" /><br />Io</div>
    <div><img src="images/europa-100px.jpg" /><br />Europa</div>
</div>
<h3>space-around</h3>
<div class="container container-2">
    <div><img src="images/ganymede-100px.jpg" /><br />Ganymede</div>
    <div><img src="images/callisto-100px.jpg" /><br />Callisto</div>
    <div><img src="images/io-100px.jpg" /><br />Io</div>
    <div><img src="images/europa-100px.jpg" /><br />Europa</div>
</div>
<h3>space-evenly</h3>
<div class="container container-3">
    <div><img src="images/ganymede-100px.jpg" /><br />Ganymede</div>
    <div><img src="images/callisto-100px.jpg" /><br />Callisto</div>
    <div><img src="images/io-100px.jpg" /><br />Io</div>
    <div><img src="images/europa-100px.jpg" /><br />Europa</div>
</div>
```

### Gap Versus Space-between

Use gap when you want a specific amount of space. Use space-between when you don't know how much space you want, you just want to distribute the remaining space.

In this example, the first container uses justify-content to distribute all remaining space. The second container has a fixed gap and then uses flex-grow to make the flex items expand to fill the remaining space.

```css
.container-1 {
    justify-content: space-between;
}

.container-2 {
    gap: 20px;
}

.container-2 div {
    flex-grow: 1;
}
```

Example Details:

```css
.container {
    display: flex;
    flex-direction: row;
    width: 600px;
    border: solid 5px #42bee3;
}

.container div {
    text-align: center;
    background: black;
    color: white;
}
```

```html
<h3>space-between</h3>
<div class="container container-1">
    <div><img src="images/ganymede-100px.jpg" /><br />Ganymede</div>
    <div><img src="images/callisto-100px.jpg" /><br />Callisto</div>
    <div><img src="images/io-100px.jpg" /><br />Io</div>
    <div><img src="images/europa-100px.jpg" /><br />Europa</div>
</div>
<h3>gap</h3>
<div class="container container-2">
    <div><img src="images/ganymede-100px.jpg" /><br />Ganymede</div>
    <div><img src="images/callisto-100px.jpg" /><br />Callisto</div>
    <div><img src="images/io-100px.jpg" /><br />Io</div>
    <div><img src="images/europa-100px.jpg" /><br />Europa</div>
</div>
```

### Align-Items

Align-items aligns items on the cross-axis.

```css
.container-1 {
    align-items: flex-start;
}

.container-2 {
    align-items: flex-end;
}

.container-3 {
    align-items: center;
}
```

Example Details:

```css
.container {
    display: flex;
    flex-direction: row;
    height: 200px;
    border: solid 5px #42bee3;
}

.container div {
    text-align: center;
    background: black;
    color: white;
}
```

```html
<h3>flex-start</h3>
<div class="container container-1">
    <div><img src="images/ganymede-100px.jpg" /><br />Ganymede</div>
    <div><img src="images/callisto-100px.jpg" /><br />Callisto</div>
    <div><img src="images/io-100px.jpg" /><br />Io</div>
    <div><img src="images/europa-100px.jpg" /><br />Europa</div>
</div>
<h3>flex-end</h3>
<div class="container container-2">
    <div><img src="images/ganymede-100px.jpg" /><br />Ganymede</div>
    <div><img src="images/callisto-100px.jpg" /><br />Callisto</div>
    <div><img src="images/io-100px.jpg" /><br />Io</div>
    <div><img src="images/europa-100px.jpg" /><br />Europa</div>
</div>
<h3>center</h3>
<div class="container container-3">
    <div><img src="images/ganymede-100px.jpg" /><br />Ganymede</div>
    <div><img src="images/callisto-100px.jpg" /><br />Callisto</div>
    <div><img src="images/io-100px.jpg" /><br />Io</div>
    <div><img src="images/europa-100px.jpg" /><br />Europa</div>
</div>
```

### Align-Items - Stretch

A value of "stretch" for align-items causes the flex items to expand to fill the cross axis. When images are the flex items and align-items is "stretch", images will maintain their aspect ratio. Note that the default value for align-items is "normal", which behaves the same as "stretch".

```css
.container {
    align-items: stretch;
}

.container-3 img {
    width: 100px;
}
```

Example Details:

```css
.container {
    display: flex;
    flex-direction: row;
    height: 200px;
    border: solid 5px #42bee3;
    width: 410px;
}

.container div {
    text-align: center;
    background: black;
    color: white;
}
```

```html
<h3>Divs as Flex Items</h3>
<div class="container container-1">
    <div><img src="images/ganymede-100px.jpg" /><br />Ganymede</div>
    <div><img src="images/callisto-100px.jpg" /><br />Callisto</div>
    <div><img src="images/io-100px.jpg" /><br />Io</div>
    <div><img src="images/europa-100px.jpg" /><br />Europa</div>
</div>
<h3>Images as Flex Items</h3>
<div class="container container-2">
    <img src="images/ganymede-100px.jpg" />
    <img src="images/callisto-100px.jpg" />
    <img src="images/io-100px.jpg" />
    <img src="images/europa-100px.jpg" />
</div>
<h3>Images as Flex Items with Forced Width</h3>
<div class="container container-3">
    <img src="images/ganymede-100px.jpg" />
    <img src="images/callisto-100px.jpg" />
    <img src="images/io-100px.jpg" />
    <img src="images/europa-100px.jpg" />
</div>
```

### Align-Self

Align-self can be used to affect an individual item on the cross axis.

```css
.container {
    align-items: flex-start;
}

.io {
    align-self: flex-end;
}
```

Example Details:

```css
.container {
    display: flex;
    flex-direction: row;
    height: 200px;
    border: solid 5px #42bee3;
}

.container div {
    text-align: center;
    background: black;
    color: white;
}
```

```html
<h3>Galilean Moons of Jupiter</h3>
<div class="container">
    <div><img src="images/ganymede-100px.jpg" /><br />Ganymede</div>
    <div><img src="images/callisto-100px.jpg" /><br />Callisto</div>
    <div class="io"><img src="images/io-100px.jpg" /><br />Io</div>
    <div><img src="images/europa-100px.jpg" /><br />Europa</div>
</div>
```

### Why Is There No Justify-Self?

There is no justify-self because when using justify-content, all extra space is redistributed all at once. But when using align-items each item has its own private extra space.

However, you can strategically use auto margins to automatically fill up extra space. In this example, it appears that the first three moons are aligned left and Europa is aligned right. This is because Europa uses an auto left margin to use up all the space, thus pushing it to the right.

```css
.europa {
    margin-left: auto;
}
```

Example Details:

```css
.container {
    display: flex;
    flex-direction: row;
    width: 600px;
    border: solid 5px #42bee3;
}

.container div {
    text-align: center;
    background: black;
    color: white;
}
```

```html
<h3>Galilean Moons of Jupiter</h3>
<div class="container">
    <div><img src="images/ganymede-100px.jpg" /><br />Ganymede</div>
    <div><img src="images/callisto-100px.jpg" /><br />Callisto</div>
    <div><img src="images/io-100px.jpg" /><br />Io</div>
    <div class="europa"><img src="images/europa-100px.jpg" /><br />Europa</div>
</div>
```

## Wrapping

### Flex-Wrap

By default, content will overflow if it won't fit. But if you set flex-wrap to "wrap", then the content will wrap when necessary.

```css
.container {
    flex-wrap: wrap;
}
```

Example Details:

```css
.container {
    display: flex;
    flex-direction: row;
    width: 300px;
    height: 700px;
    border: solid 5px #42bee3;
    align-items: flex-start;
}

.container div {
    text-align: center;
    background: white;
    padding: 0 3px;
}
```

```html
<div class="container">
    <div>
        <img
            src="images/mercury-redstone.png"
            style="height:83px"
        /><br />Mercury-Redstone
    </div>
    <div><img src="images/gemini.jpg" style="height:127px" /><br />Gemini</div>
    <div>
        <img src="images/saturn-ib.jpg" style="height:178px" /><br />Saturn IB
    </div>
    <div>
        <img src="images/saturn-v.png" style="height:363px" /><br />Saturn V
    </div>
    <div>
        <img src="images/shuttle.png" style="height:184px" /><br />Space Shuttle
    </div>
</div>
```

### Flex-Flow

Flex-flow is shorthand syntax for flex-direction and flex-wrap.

```css
.container {
    flex-flow: column wrap;
    /* equivalent to:           */
    /* flex-direction: column;  */
    /* flex-wrap: wrap;         */
}
```

Example Details:

```css
.container {
    display: flex;
    width: 300px;
    height: 700px;
    border: solid 5px #42bee3;
    align-items: flex-start;
}

.container div {
    text-align: center;
    background: white;
    padding: 0 3px;
}
```

```html
<div class="container">
    <div>
        <img
            src="images/mercury-redstone.png"
            style="height:83px"
        /><br />Mercury-Redstone
    </div>
    <div><img src="images/gemini.jpg" style="height:127px" /><br />Gemini</div>
    <div>
        <img src="images/saturn-ib.jpg" style="height:178px" /><br />Saturn IB
    </div>
    <div>
        <img src="images/saturn-v.png" style="height:363px" /><br />Saturn V
    </div>
    <div>
        <img src="images/shuttle.png" style="height:184px" /><br />Space Shuttle
    </div>
</div>
```

### Align-Content

Align-content aligns the entire group of items (this property only applies when flex-wrap is "wrap"). Align-items aligns within each row that is generated by wrapping (assuming a flex-direction of row).

Notice that the entire group of rockets is vertically centered due to align-content: center. But within each row of rockets, the bases are all at the bottom due to align-items: flex-end.

```css
.container {
    flex-wrap: wrap;
    flex-direction: row;
    align-content: center;
    align-items: flex-end;
}
```

### Flex-Grow with Flex-Wrap

When you use flex-wrap, you can combine it with flex-grow to expand after wrapping.

```css
.container div {
    flex-grow: 1;
}
```

### Gap with Flex-Wrap

Gap can add both horizontal and vertical space when using flex-wrap.

```css
.container {
    row-gap: 20px;
    column-gap: 10px;
}
```

## Flex Container Special Behavior

### Inline Flex

By default, flex containers are block-level elements. But you can make them inline-level elements. This is useful to make the flex container to shrink to its content size.

```css
.container-1 {
    display: block flex;
    /* equivalent to: */
    /* display: flex  */
}

.container-2 {
    display: inline flex;
}
```

Example Details:

```css
.container {
    flex-direction: row;
    border: solid 5px #42bee3;
}

.container div {
    text-align: center;
    background: black;
    color: white;
}

.outer-container {
    width: 700px;
    border: solid 4px gray;
}
```

```html
<h3>Outer Planets</h3>
<div class="outer-container">
    <h3>block flex</h3>
    <div class="container container-1">
        <div><img src="images/jupiter-100px.jpg" /><br />Jupiter</div>
        <div><img src="images/saturn-100px.jpg" /><br />Saturn</div>
        <div><img src="images/uranus-100px.jpg" /><br />Uranus</div>
        <div><img src="images/neptune-100px.jpg" /><br />Neptune</div>
    </div>
    <br />
    <br />
    <h3>inline flex</h3>
    <div class="container container-2">
        <div><img src="images/jupiter-100px.jpg" /><br />Jupiter</div>
        <div><img src="images/saturn-100px.jpg" /><br />Saturn</div>
        <div><img src="images/uranus-100px.jpg" /><br />Uranus</div>
        <div><img src="images/neptune-100px.jpg" /><br />Neptune</div>
    </div>
</div>
```

### Gap with Inline Flex

Notice how the gap increases the total size of the flex container.

```css
.container-1 {
    display: inline flex;
}

.container-2 {
    display: inline flex;
    gap: 20px;
}
```

Example Details:

```css
.container {
    flex-direction: row;
    border: solid 5px #42bee3;
}

.container div {
    text-align: center;
    background: black;
    color: white;
}

.outer-container {
    width: 700px;
    border: solid 4px gray;
}
```

```html
<h3>Outer Planets</h3>
<div class="outer-container">
    <h3>no gap</h3>
    <div class="container container-1">
        <div><img src="images/jupiter-100px.jpg" /><br />Jupiter</div>
        <div><img src="images/saturn-100px.jpg" /><br />Saturn</div>
        <div><img src="images/uranus-100px.jpg" /><br />Uranus</div>
        <div><img src="images/neptune-100px.jpg" /><br />Neptune</div>
    </div>
    <br />
    <br />
    <h3>gap</h3>
    <div class="container container-2">
        <div><img src="images/jupiter-100px.jpg" /><br />Jupiter</div>
        <div><img src="images/saturn-100px.jpg" /><br />Saturn</div>
        <div><img src="images/uranus-100px.jpg" /><br />Uranus</div>
        <div><img src="images/neptune-100px.jpg" /><br />Neptune</div>
    </div>
</div>
```

### Vertical Margin Auto

Unlike inside regular divs, inside a flexbox you can set the top or bottom margin to "auto".
In this example we use "margin: auto" to horizontally and vertically center an item.

```css
.container {
    display: flex;
}

.container img {
    margin: auto;
}
```

Example Details:

```css
.container {
    height: 500px;
    width: 500px;
    border: solid 5px #42bee3;
}
```

```html
<div class="container">
    <img src="images/pluto.jpg" />
</div>
```
