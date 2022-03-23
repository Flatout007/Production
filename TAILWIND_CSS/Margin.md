# Margin

Tailwind uses utility classes for controlling an element's ```margin``` **3** ways.
**N.B** _```margin``` controls the perimeter or space around an ```element```_


## 1. Specify All Sides
:heavy_check_mark: Set margin to all sides by using the "p-n" class, where ```n``` is an ```integer``` that's the ```strength``` of the ```margin```.
```html
    <!-- SETS A MARGIN OF 0 TO ALL SIDES  -->
    <ele class="p-0"/>
```
|  Tailwind CSS | CSS  |
|----|----|
**"p-0"**|  ```margin: 0;```

## 2. Specify Left & Right Sides / Top & Bottom Sides with Coordinates ```x``` ```y```
:heavy_check_mark: Set ```margin``` to only the ```left``` & ```right``` sides by using the ```"mx-n"``` ```class```, where ```x``` is the left or right positions <br>
:heavy_check_mark: Set ```margin``` to only the ```top``` & ```bottom``` sides by using the ```"my-n"``` ```class``` where ```y``` is the ```top``` or ```bottom``` positions
```html
    <!-- SETS A MARGIN OF 0 TO LEFT & RIGHT SIDES -->
    <ele class="mx-0"/>
    <!-- SETS A MARGIN OF 0 TO TOP & BOTTOM SIDES -->
    <ele class="my-0"/>
```
|  Tailwind CSS | CSS  |
|----|----|
**"mx-0"**|  ```margin-right: 0;``` ```margin-left: 0;```
**"my-0"**|  ```margin-top: 0;``` ```margin-bottom: 0;```

## 3. Specify Top, Left, Right or Bottom Sides Individually
:heavy_check_mark: Set ```margin``` to only the ```left``` & ```right``` sides by using the ```"md-n"``` ```class```, where ```d``` is the direction ```l,r,t,b``` left, right, top,or bottom<br>
```html
    <!-- SETS A MARGIN OF 0 TO LEFT SIDE -->
    <ele class="ml-0"/>
    <!-- SETS A MARGIN OF 0 TO RIGHT SIDE -->
    <ele class="mr-0"/>
    <!-- SETS A MARGIN OF 0 TO TOP SIDE -->
    <ele class="mt-0"/>
    <!-- SETS A MARGIN OF 0 TO BOTTOM SIDE -->
    <ele class="mb-0"/>
```
|  Tailwind CSS | CSS  |
|----|----|
**"ml-0"**|  ```margin-left: 0;``` 
**"mr-0"**|  ```margin-right: 0;```
**"mt-0"**|  ```margin-top: 0;``` 
**"mb-0"**|  ```margin-bottom: 0;```
<br>
### Tailwind CSS Margin Documentation :page_facing_up:
https://tailwindcss.com/docs/margin