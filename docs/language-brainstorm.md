Saffron will be a mixed platform that will enable people to code & design
at the same time. This means that Saffron will need to implement some sort
of language. Here are some goals:

- familiarity -- developers need to use existing knowledge to work with lang
- opinionated. Necessary for the editor to properly edit source code. Cannot be
as expressive as languages such as JavaScript. Markup would be a good alternative.
- built for design first. The language will be a *design* language first and foremost.
This will enable sophisticated features before they're available in UI form.
- compilable. Language needs to be translatable to stuff like HTML, canvas, react,
angular, etc.
- flexible. Should be opinionated, yet flexible enough to do many sophisticated things. Need
to allow people creativity around how they organize & write code that meshes will with this sort
of system

Markup seems like the most appropriate language here since it's been around. 
Developers will also find this format more familiar. Here's an example:

```html
<saffron>
  
  <!-- resources can be loaded in here. Note that the mime-type will be used
  to figure out how to handle this in the saffron editor -->
  <link rel="text/css" href="./style.css" />
  
  <!-- A template. This thing can be re-used multiple times --> 
  <template id="button">
     <div class="m-button">
       { label } 
     </div>
  </template>
  
  <!-- A list component which can be re-used multiple times -->
  <template id='list'>
    <!-- this needs to be thought out a bit. Something such as a list component
    will likely be a "fragment" -- something that is not required for the editor. 
    A list component will also likely need to support multiple target platforms --
    React, angular, canvas, SVG, iOS, and other tools. -->  
  </template>
</saffrom>
```

Saffron would simply act as a visual editor with no programing capabilities. This
means that developers can use any text editor they want. When they save a
document, those changes then get reflected in the visual editor. Ideally, visiaul elements
would appear one-by-one as the user writes code. A "template" for instance is a registered component
that would appear as an iframe on stage -- the UI around this would be similar to Sketch's "frame" feature.
As UI elements show up, users can move items around on the stage and save them there -- reflecting changes back into
the editor that they're using. There are a few problems with this however:

- there will be conflicts with unsaved changes if the user forgets
- the saved document from the application-side will not conform to the user's programming style guide

The last point here is pretty simple to fix. Just add a feature in the visual editor to save documents with whitespace 
rules to conform to the style guide set by the user.

Another nifty feature that comes as a result from developing a programing language in this fashion is the possibility
of programming saffron itself -- designing UI components with the editor, then using those UI components for the saffron
editor to develop additional UI components. This feature would actually be important validation for the concept considering
the complexity of this task. If done right and is scalable, Saffron will be usable with *any* type of application.

Here's some super quick pseudocode:

```javascript
<saffron>
	<fragment namespace="blarg">
		<template>
		</template>
	</fragment>
</saffron>
```

Not only that, but this sort of idea isn't entirely coupled to UI programming. Saffron can *also* serve 
as a visual code editor for [flow-based](https://en.wikipedia.org/wiki/Flow-based_programming) programming. Here's an example:


```javascript
<saffron>
  
  <template id="backend" public>
    <firebase-service id="databaseService" source={ firebaseUrl || 'http://firebaseurl.com' } />
    <property id="people" value={databaseService.value} public />
  </template>
  
</saffron>
```  

Pretty self explainatory, and should be familiar as well. The above example is W3C compliant, meaning that anyone
who knows HTML should be able to work with saffron immediately. No inventy stuff here. Also note that *based* off of this
example, we can create a visual representation of code which can be manipulated by the user. We can also programatically
access this code if we transpile it to JavaScript. Here goes it:

```javascript
var service = require('./backend.sfn');
var backend = service.backend.create();
backend.observe(function() {
  console.log(backend.people); // [ collection, of, people ]
});
```

JavaScript API is obviously subject to change, but you get the gist. Also note that it's very unlikely that anyone
will create a functional application which handles all business edge cases through the saffron language. Application specificities
are better left to more expressive languages such as JavaScript. Likely, the saffron language in this case would be used in cases
where code re-usability is helpful. It's limitations may also be helpful for individuals who are less technically savvy. For devs
looking to crank out prototypes, this may also be a nice thing to have. 


Because saffron is a code-first editor, it combines awesome practices from both worlds -- being able to read the code which is producing
functionality, and visually seeing the code in an editor which can them be used to implement more sophisticated features. Also keep
in mind that users of Saffron can use the UI part, or just the code part -- they're not dependent on each other.





