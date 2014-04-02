# Kss bootstrap theme styleguide

Bootstrap 3 styleguide themes github <https://github.com/AdFabConnect/boostrap-styleguide>

###see <a href="../bootstrap/index.html">bootstrap styleguide</a>

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
