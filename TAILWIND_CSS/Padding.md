# Padding

Tailwind uses utility classes for controlling an element's ```padding``` **3** ways.
**N.B** _```padding``` controls the area inside an ```element```_


## 1. Specify All Sides
:heavy_check_mark: Set padding to all sides by using the "p-n" class, where ```n``` is an ```integer``` that's the ```strength``` of the ```padding```.
```html
    <!-- SETS A PADDING OF 0 TO ALL SIDES  -->
    <ele class="p-0"/>
```
|  Tailwind CSS | CSS  |
|----|----|
**"p-0"**|  ```padding: 0px;```

## 2. Specify Left & Right Sides / Top & Bottom Sides with Coordinates ```x``` ```y```
:heavy_check_mark: Set ```padding``` to only the ```left``` & ```right``` sides by using the ```"px-n"``` ```class```, where ```x``` is the left or right positions <br>
:heavy_check_mark: Set ```padding``` to only the ```top``` & ```bottom``` sides by using the ```"py-n"``` ```class``` where ```y``` is the ```top``` or ```bottom``` positions
```html
    <!-- SETS A PADDING OF 0 TO LEFT & RIGHT SIDES -->
    <ele class="px-0"/>
    <!-- SETS A PADDING OF 0 TO TOP & BOTTOM SIDES -->
    <ele class="py-0"/>
```
|  Tailwind CSS | CSS  |
|----|----|
**"px-0"**|  ```padding-right: 0px;``` ```padding-left: 0px;```
**"py-0"**|  ```padding-top: 0px;``` ```padding-bottom: 0px;```

## 3. Specify Top, Left, Right or Bottom Sides Individually
:heavy_check_mark: Set ```padding``` to only the ```left``` & ```right``` sides by using the ```"pd-n"``` ```class```, where ```d``` is the direction ```l,r,t,b``` left, right, top,or bottom<br>
```html
    <!-- SETS A PADDING OF 0 TO LEFT SIDE -->
    <ele class="pl-0"/>
    <!-- SETS A PADDING OF 0 TO RIGHT SIDE -->
    <ele class="pr-0"/>
    <!-- SETS A PADDING OF 0 TO TOP SIDE -->
    <ele class="pt-0"/>
    <!-- SETS A PADDING OF 0 TO BOTTOM SIDE -->
    <ele class="pb-0"/>
```
|  Tailwind CSS | CSS  |
|----|----|
**"pl-0"**|  ```padding-left: 0px;``` 
**"pr-0"**|  ```padding-right: 0px;```
**"pt-0"**|  ```padding-top: 0px;``` 
**"pb-0"**|  ```padding-bottom: 0px;```
<br>
### Tailwind CSS Padding Documentation :page_facing_up:
https://tailwindcss.com/docs/padding