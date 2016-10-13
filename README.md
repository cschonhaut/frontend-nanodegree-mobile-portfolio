# Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

**Challenge accepted!**

##Part 1: Optimize PageSpeed Insights score for index.html

###My optimizations:
To complete this project I had to configure a Grunt workflow, which was very tedious and time-consuming but seems like it will be well worth the work in the future. Using Grunt, I was able to minify all of my images, minify my CSS, and inline my CSS. I added a media query to my CSS so that "print" styles would only load if the query was met. I also loaded my Javascript asynchronously to prevent JS render blocking.

##Part 2: Optimize Frames per Second in pizza.html

###My optimizations:
In order to view my page speed insights score, you can reference my GH page in my branch on Git, or reference this link: https://cschonhaut.github.io/frontend-nanodegree-mobile-portfolio/



### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
