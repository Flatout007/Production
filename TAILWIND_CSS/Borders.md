# Borders

:heavy_check_mark: Tailwind uses utility classes for controlling an element's ```borders``` in **3** ways .

### 1. Specify All Border sides
:heavy_check_mark: use tailwind's ```"border-n"``` class to give a ```border width``` to all sides 
where ```n``` is the ```strength``` of the ```border width```
|  Tailwind CSS | CSS  |
|----|----|
**"border-0"**|  ```border-width: 0;``` 

```html
    <!-- SETS A WIDTH OF 0 TO ALL BORDERS  -->
    <ele class="border-0"/>
```

### 2. Specify Left & Right Sides / Top & Bottom Borders with Coordinates ```x``` ```y```
:heavy_check_mark: Set only the ```left``` & ```right``` ```borders``` by using the ```"border-x-n"``` ```class```, where ```x``` is the ```left``` or ```right``` positions <br>
:heavy_check_mark: Set only the ```top``` & ```bottom``` ```borders``` by using the ```"border-y-n"``` ```class``` where ```y``` is the ```top``` or ```bottom``` positions
```html
    <!-- SETS A WIDTH OF 0 TO LEFT & RIGHT BORDERS -->
    <ele class="border-x-0"/>
    <!-- SETS A WIDTH OF 0 TO TOP & BOTTOM BORDERS -->
    <ele class="border-y-0"/>
```
|  Tailwind CSS | CSS  |
|----|----|
**"border-x-0"**|  ```border-left-width: 0px;``` ```border-right-width: 0px;```
**"border-y-0"**|  ```padding-top-bottom: 0px;``` ```padding-top-width: 0px;```

### 2. Specify Border Sides Individually
:heavy_check_mark: use tailwind's ```"border-d-n"``` class to give a ```border width``` to each individual side where ```d``` is ```l,r,t,b``` & ```n``` is the ```strength``` of the ```border width```

## Border Color
:heavy_check_mark: use tailwinds ```"border-color-n"``` class to set a ```color``` on a ```border```, where ```n``` is the ```strength``` of ```color```
```html
<!-- SETS A COLOR OF YELLOW TO ALL BORDERS -->
    <ele class="border-yellow-500"/>
```

**N.B** _there's no ```"border-d-1"``` class. ```"border-d-1" is "border-d" ```_
|  Tailwind CSS | CSS  |
|----|----|
**"border-l-0"**|  ```border-left-width: 0px;```
**"border-r-0"**|  ```border-right-width: 0px;```
**"border-t-0"**|  ```border-top-width: 0px;```
**"border-b-0"**|  ```border-bottom-width: 0px;```

### Tailwind CSS Border Width Documentation :page_facing_up:
https://tailwindcss.com/docs/border-width