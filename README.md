# Tinua Fashion Web App
## Introduction
This is a Fashion web app. The Internet has changed the way we thought about fashion.
By using this web app customer can buy cloths, handbags, accessories, and shoes from anywhere.
Because of this Fashion web app, shopping for stuff is more fun than its ever been before.
People can buy whatever they want, wherever they want because everything is online now. 
If anyone shopping for some unique, expensive, or stylish items, this is the best fashion web apps.
This web app will allow users to __register__ and __login__. When a user register 
in this app,then they can easily buy product from here.<br>
[AngularJS](https://angularjs.org/)framework is used for this web app and its styled by [Bootstrap](http://getbootstrap.com/).

## Structure
This web app is basically consist of five parts:<br>
* __bower_coponents:__ where all the dependencies files those are needed for the app.
* __controllers:__ is responsible for instantiating controllers for the app. 
* __templates:__ where all the html file are showed.
* __index.html:__ is the default HTML file that appears in a browser when a user invokes for the Web app application.
* __main.js:__  where routes and data connection are managed. <br>
  Project Tree: <br>
  ![pic1](https://user-images.githubusercontent.com/24476948/30787078-1f9d11b0-a179-11e7-98d4-1b9c3324061d.png)

  
## Main Steps to create
1. __main.js:__ 
To bind controllers to HTML Angular [UI-Router](https://ui-router.github.io/ng1/) is used in here. It is a client-side [Single Page Application](https://en.wikipedia.org/wiki/Single-page_application) routing framework for [AngularJS](https://angularjs.org/).Routing frameworks for SPAs update the browser's URL as the user navigates through the app. Conversely, this allows changes to the browser's URL to drive navigation through the app, thus allowing the user to create a bookmark to a location deep within the SPA.
By using UI-Router all connection is pass in __$stateProvider__ and __$urlRouterProvider__ . $stateProvider is a module that is contained within the __ui-sref__ .
2. __controllers:__ 
* A [Controller](https://docs.angularjs.org/guide/controller) is attached to the DOM via the [ng-controller](https://docs.angularjs.org/api/ng/directive/ngController) directive, AngularJS will instantiate a new Controller object, using the specified Controller's constructor function. A new child scope will be created and made available as an injectable parameter to the Controller's constructor function as ```$scope``` .
Here all controllers are developed for the app like womenDressCtrl.js, womenJecketCtrl.js, BabyDressCtrl.js, shoesCtrl.js, ect.
* [Directive](https://docs.angularjs.org/guide/directive) is used in this app for repeating code. AngularJS comes with a set of these directives built-in, like ngBind, ngModel, and ngClass. When AngularJS bootstraps in application, the HTML compiler traverses the DOM matching directives against the DOM elements. In here ng-repeat is used for productDirective.js. 
3. __style.css:__
All custom styles are done in this file.
4. __html templates:__
All html files are developed in this folder to show the app like home.html,shop.html,signIn.html.
5. __product.json:__
To store the product brand name this json file is used.

## Content
This app consists of two parts separated into different pages, one for 
__user registration__ and the other one for a detaile of all __products__.
## Part 1 -User Registration:
   * __SignIn or Register:__
   All the user are need to singin or register to buy the products from the app.<br>
   __SignIn Instruction__
  Anyone can see the SignIn or Register option at the top of the home page.<br>
  ![pic2](https://user-images.githubusercontent.com/24476948/30801768-3c583a06-a1dc-11e7-8d67-16e66ce891fb.png)
  To SignIn or Register go to this page:<br>
  ![pic3](https://user-images.githubusercontent.com/24476948/30802358-26eae554-a1de-11e7-9a13-c0c0b5b9b79d.png)
  <br>
  Then SignIn Here:
  ![pic4](https://user-images.githubusercontent.com/24476948/30802733-60612108-a1df-11e7-8cb0-677fc0aaca40.png)

  


  
   
## Technology Stack
<h4>There are some tech used includes: </h4>
<ul>
  <b>AngularJS</b>
  <li>I use AngularJS ui-Router to manage tha pages and also use it to 
  make calls to the REST API. I also build services and custom directives.</li>
</ul>
<ul>
  <b>Bootstrap</b>
  <li>I use Bootstrap to make my app simple and responsive for every device.</li>
</ul>
<ul>
  <b>Bower</b>
  <li>By using bower I managed the installation of my libraries 
  and frameworks.</li>
</ul>
<ul>
  <b>npm</b>
  <li>I used npm to help manage some of  the dependencies in my application.</li>
</ul>

## Instruction
<h4>Getting the code up and running:</h4>
<p>
1)Firstly user will need to clone this repository by running the
 git clone <https://github.com/hureferdous/Stream-One-Project.git> command <br>
 2)Then they will need to make sure that they have npm and bower installed <br>
 3)Once npm and bower are installed, they will need to install all of the 
 dependencies in <b>package.json </b>and <b>bower.json</b> <br>
 4)when dependencies have been installed they will need to install <b>http-server</b> <br>
 5)Once <b>http-server</b> is installed then run http-server <br>
 6)The app will now run on <b>localhost</b><br>


