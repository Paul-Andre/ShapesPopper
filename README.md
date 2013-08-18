js13kbCompressor
================
This is a huble little tool I made for the js13kb competition. It's a node.js script that automatically minimizes all js and css files, zips your project, and tells you if you are within the 13kb limit.

How to use:
----------------
Assuming you have node.js and npm fully functional, install the dependencies:
       $ npm install

Next, replace the contents of "public" by your own files.
 
Finally execute the compress.js script.
       $ nodejs compress.js

It will create a "publicMin" folder with the minimized code, and "publicMin.zip", which is the compressed project.

Consider though that this was made by a noob from peices found on the internet.
