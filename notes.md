-- CHECKLIST for setup --
- create folders and files for server/html/client/css
- bring in JQ

- PUSH TO GIT

- set up html site (DONE)
- set up server 
    - TO GET JSON
        - npm init --y
    - Install express
        - npm install express
- source the client and jquery, as well as css (DONE)

- PUSH TO GIT

-- CHECKLIST FOR ASSIGNMENT --
- Need HTML elements for 2 number input fields, a select box, and a calculation button
- Also need a UL for the outputs when they're eventually appended

- PUSH TO GIT

- create onReady function for client.js
- Link inputs from HTML to client.js
- Create a function to take inputs and operator
- and send them over to the server

- PUSH TO GIT

- before I send info to the server, I should create the get function
- add get function to onReady
- create new get function to GET info from server
- need to then display that information on the DOM

-- not working...
- I think I need to add the 'numbers.js' route in my server
-- SUCCESS!!!
    - I needed to add the following lines into my server.js
        - const numbers = require( './modules/numbers');
        - app.use( '/numbers', numbers);

- PUSH TO GIT