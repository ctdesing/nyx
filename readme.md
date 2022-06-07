# Nyx - A web frontend library using JSX and React syntax.
>### The mision of this project is to help understand how react hooks and react state works, as it is doing a lot of magic under the hood and is not easily understood. This project is to be used strictly for learning purporses, not to be used in production.

<br>
<br>

<br>
<br>

>Questions
>* How to compile JSX code to CommonJS? eg: ```<h1></h1>``` to ```Nyx.createElement('h1')```. <span style="color:green">Implemented.</span>
>- - Answer: 
>- - - using babel as JSX compiler and setting pragma option to Nyx.createElement instead of React.createElement
>- - - babel send at least 3 arguments to Nyx.createElement, which are tag, options and child
>- - - the tag can either be a class component, functional component or the element tag, eg: 'h1'.
>- - - Parcel is being used as a bundler on top of babel to make development efficient. 
>
>* How to render content on the document? <span style="color:green">Implemented.</span>
>- - Answer:
>- - - When render is called all the elements have been created by ```Nyx.createElement```.
>- - - The ```Nyx.render``` function must be called from src/index with 2 arguments.
>- - - Elements:
>- - - - React components converted to html elements by ```Nyx.createElement``` with a parent element.
>- - - Mounting Element:
>- - - -  An existing document element accessed by ```querySelector(id)``` or ```getElementById```.
>
>* How to create an unique id for every useState? <span style="color:yellow">Yet to be tested.</span>
>- - Answer: 
>- - - function.toString() - change useState to useState with id
>- - - then eval("var fn = function(){ blah1;blah2;blah3; }"); save and return fn()
>- How to re-render only that component? <span style="color:red">Yet to be answered.</span>