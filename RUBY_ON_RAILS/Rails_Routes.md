# Rails's Router

:pushpin: When the Rails ```server``` is listening for ```requests``` the Rails ```router``` is able to recognize & ```switch``` on ```url strings``` to choose a ```controller method``` to which the request is ```dispatched``` to for processing.<br> 
:pushpin:<b>i.e</b> The router receives a ```GET``` ```request``` for ```"/photo/17"``` & realizes that ```PhotosController#show()``` should be called on/for an instance of ```Photo``` with the ```:id``` of a ```number``` 17. <b>N.B</b> <i>the ```router``` ```switches``` on both ```HTTP``` ```method``` & ```path``` name.</i>

**N.B**<i> navigate to ```# config/routes.rb``` to begin drawing ```url``` route ```resources``` for your ```Application``` </i>
```ruby
# config/routes.rb
Photo::Application.routes.draw do
  # draw only index & show REST-ful url route resources
  resources :photo, only: [:index, :show] 
end
```

:pushpin: To get a complete list of the available routes you set up so far in your ```Application```, execute the ```rails routes``` command
```
$ rails routes
```

### Rails restful sample routes for a Photo 

| HTTP Request | Route / HTTP Method | Action & Description of Action |  
|---------------|   --------------- | --------------- |
| GET	| /photos	| <b>index</b>	- display a list of all photos
| GET	| /photos/new	| <b>new</b> - return an HTML form for creating a new photo
| POST	| /photos	| <b>create</b> - upload and create a new photo
| GET	| /photos/:id	| <b>show</b> - display a specific photo
| GET	| /photos/:id/edit	| <b>edit</b> - return an HTML form for editing a photo
| PATCH or PUT	| /photos/:id	| <b>update</b> - update a specific photo
| DELETE	| /photos/:id	| <b>destroy</b> - delete a specific photo


### Rails's Router Helper Methods

:pushpin: <i>If you build URLs by hand in Rails, you're doing it wrong.</i> <br>
:pushpin: Always prefer the routing helpers to building your own URLs through string interpolation. The routing helpers are less error prone and tedious.

| Name / Required Arguments | Returns the URL: |   
|---------------|   --------------- |
| photos_url()	| http://www.example-site.com/photos
| new_photo_url()	| http://www.example-site.com/photos/new
| photo_url(@photo)	| http://www.example-site.com/photos/#{@photo.id}
| edit_photo_url(@photo)	| http://www.example-site.com/photos/#{@photo.id}/edit

<b>N.B</b> <i>you can embed query-string options into the url-helpers easily:</i>

<b>E.x</b> ```photos_url(recent: true) == http://www.example-site.com/photos?recent=true```

:pushpin: You can specify the controller action that Rails should run for ```GET/``` by using the root method:

:pushpin:```root to: posts#index```
This invokes the PostsController's index method when the root URL is requested.

### REST philosophy

:pushpin: things like "liking a photo", should be thought of in terms of CRUD (create,read,update,destroy) ```actions``` on ```resources```. 

:pushpin: **i.e**, instead of creating a custom, non-RESTful ```controller action``` to "like" a photo, we might create a new ```resource```, a ```Like``` ```object```, which we could have actions such as create, destroy, etc..

