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
document, those changes then get reflected in the visual editor. 





