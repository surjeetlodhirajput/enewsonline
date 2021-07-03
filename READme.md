first we are going to craete the express simple server and 
//
after we are going to create the mongoose model for posts,comments and users
// 
after creating the db modle we need to create the different route which handel different requests

//we need to craete the login -register and logout route in the user route file

//we need to create write read post

//and then create the front end using html css js and botstrap

//after creating the all make a link

--dbs folder structure
|-user.js database model
|-post.js  database model
|-comment.js database model

--middelware folder structure
|- user.js  contain the user middeleare which atunticate the session

--public folder structure
 +|--css folder structure
    +|-dashboard.css
    +|-index.css
    +|-login.css
    +|-read.css 
 +|-- images folder this contain all the images
 +| --js folder structure
    +|- dashboard.js
    +|- login.js
    +|- read_post.js

--routes folder structure
 +|-- post route folder structure
    +|- comment.js this file conatin all the routes related to the comment
    +|- posts.js this file conatain all the routes related to the post read and write and also dashboard 
 +| --user route folder structure
    +|user.js file conatain teh route related to the login and user registration

--views folder structure
 +| category.ejs this is file to display the category selected posts
 +| footer.ejs this file is mostly common to all ejs file it is footer of website
 +| index.ejs this is the home 
 +| leftpane.ejs this file containe the code related to the left pane in the write_post.ejs file
 +| login_register.ejs this file is for login aand register form
 +| navbar.ejs this conatain the common code for the navbar
 +| read_post.ejs this file contain the code for reading the post content
 +| write_post.ejs this is for writing and deleting post created by the user

+| -server.js this file contain the code for server 