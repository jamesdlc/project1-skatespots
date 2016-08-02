##Project 1 TODO items:
- You have bower as a dependency in your `package.json`, you have `bower_components` present in your project, and you are using bower to hold all of your front-end third party files - to reduce the size of your project you should run `bower init` to create a `bower.json` file and THEN install your packages. Also include `bower_components` in your `.gitignore` file. This puts it on the developer who cloned your repo to install your packages via both npm and bower.  

- Consider moving your `font` and `fonts` folders into your `public` folder as they are client-facing and have no real utility on your server side. This will make your file directory cleaner.

- `<p>` tags are not for spacing, us CSS styling for the *look* of your page.  Also remember that all `<p>` tags need to be closed with a `</p>`.

- console.log messages are fantastic! I'm glad you're using them.  In production code the only time you really want to see them is if you encounter an error.  These should only be in db calls inside if(err) or in handleError callbacks for ajax calls. By the time you're ready to push to production, you should be confident in all the things that are working correctly.
