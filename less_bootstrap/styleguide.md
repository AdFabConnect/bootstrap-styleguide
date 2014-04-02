# Kss bootstrap theme styleguide

Bootstrap 3 styleguide themes github <https://github.com/AdFabConnect/boostrap-styleguide>

###see <a href="../components/index.html">components styleguide</a>

Part one
======

Requirement ?

- npm
- bower
- grunt

How It work's ?

1. edit file package.json and change variable localConfig with your config

"localConfig": {
    "host": "http://localhost:8888/", // your localhost
    "pathname": // if the folder isn't root folder

2. run > git clone https://github.com/AdFabConnect/boostrap-styleguide

3. run > npm install

4. run > bower install

5. run > grunt

6. keep running grunt...

7. In your browser open http:// [ host ]/ [ pathname ]/styleguide/index.html

You should see bootstrap default styleguide !

Now customize bootstrap by editing file /less/bootstrap_override/variables.less
( PS : this file is the best way to override bootstrap with less)

8. edit variables.less

9. Refresh your browser and see that your styleguide has been updated !

You can now include css/bootstrap.css to your website

Part Two
======

Make your own components

1. Create a new less file into less/components/mycomponent.less

2. include mycomponent.less to the file less/style.less

3. comment your less file with kss styleguide reference <http://warpspire.com/kss/>

Example :

````
/* [ NAME ]

[ DESCRIPTION ]

Markup : [ HTML TAGS ]

[ Classes et States ]

Styleguide [ STYLEGUIDE NUMBER ]
*/````

Real example :

/* My component

Description of my component

Markup: <div class="mon-div {$modifiers}">Bla bla bla</div>

:hover - Do something when hover state is actif
.myClass - Do stuff when myClass is added to the element

Styleguide 1
*/

Note that you need to increment "Styleguide {NUMB}" each time you add one and start after bootstrap indexes

{$modifiers} will duplicate into styleguide and show states and classes used

Bonus
======

Thanks to bootstrap-styleguide you can edit your less files directly into chrome browser by adding it to chrome browser and map files on source
