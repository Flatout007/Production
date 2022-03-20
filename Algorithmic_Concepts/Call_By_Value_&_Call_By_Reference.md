## Call By Value & Call By Reference

:heavy_check_mark: To understand ```Call``` By ```Value``` & ```Call``` By ```Reference```, is to first understand ```variables``` & the behavior / "side effects" of ```variables```, particularly when using them as ```parameters``` in ```function``` ```calling```. 

### Variables
:heavy_check_mark: ```Variables``` are blocks of memory the computer uses & to keep track of data types

:heavy_check_mark: those blocks of memory consist of many ```properties``` such as a ```value``` &  ```memory address```

### Formal & Actual Parameters
:heavy_check_mark: There are two key features ```variables``` have when being used a ```parameters```.

:heavy_check_mark: <b>Actual Parameters</b>: the ```parameters``` given to a ```function``` when being used / ```called```.
 ```c
 fun(m,n) // m & n are the actual parameters
 ```

<b>N.B</b> _```m``` & ```n``` are the actual parameters_

:heavy_check_mark: <b>Formal Parameters</b>: the ```parameters``` ```defined``` or received by a ```function``` when being designed
```c
fun(m, n) { // m & n are the formal parameters
  // code 
} 
 ```
 
 ### Call By Value
 :heavy_check_mark: When ```calling```by value, the "values" of the ```actual``` ```parameters``` will be copied to the ```formal``` ```parameters```. 
 in other words, only the "value" of the ```variables``` are given to  the ```function``` & not the ```variable``` itself