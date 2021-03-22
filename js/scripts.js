/*!
    * Start Bootstrap - Resume v6.0.2 (https://startbootstrap.com/theme/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery); // End of use strict

$(document).ready(function(){
    showQuote();
    
    $("#requestquote").on("click", function()
    {
      showQuote();
    })
    
    function showQuote()
    {
      var quotes = ["Whatever the mind of man can conceive and believe, it can achieve. ^Napoleon Hill", 
      "Strive not to be a success, but rather to be of value. ^Albert Einstein", 
      "Digital design is like painting, except the paint never dries. ^Neville Brody",
      "I attribute my success to this: I never gave or took any excuse. ^Florence Nightingale", 
      "You miss 100% of the shots you don’t take. ^Wayne Gretzky", 
      "The most difficult thing is the decision to act, the rest is merely tenacity. ^Amelia Earhart", 
      "Every strike brings me closer to the next home run. ^Babe Ruth", 
      "Definiteness of purpose is the starting point of all achievement. ^W. Clement Stone", 
      "Life isn’t about getting and having, it’s about giving and being. ^Kevin Kruse", 
      "Life is what happens to you while you’re busy making other plans. ^John Lennon", 
      "Design is intelligence made visible. ^Alina Wheeler",
      "The function of design is letting design function. ^Micha Commeren",
      "Make it simple, but significant. ^Don Drape",
      "Every great design begins with an even better story. ^Lorinda Mamo",
      "We become what we think about. ^Earl Nightingale", 
      "Have no fear of perfection—you’ll never reach it. ^Salvador Dali",
      "Life is 10% what happens to me and 90% of how I react to it. ^Charles Swindoll",
      "The best thing about a boolean is even i you are wrong, you are only off by a bit. ^Anonymous",
      "Without requirements or design, programming is the art of adding bugs to an empty text file. ^Louis Srygley",
      "Before software can be reusable it first has to be usable. ^Ralph Johnson",
      "The best method for accelerating a computer is the one that boosts it by 9.8 m/s2. ^Anonymous",
      "I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing. ^Oktal",
      "If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilization. ^Gerald Weinberg",
      "There are two ways to write error-free programs; only the third one works. ^Alan J. Perlis",
      "Ready, fire, aim: the fast approach to software development. Ready, aim, aim, aim, aim: the slow approach to software development. ^Anonymous",
      "It’s not a bug – it’s an undocumented feature. ^Anonymous",
      "One man’s crappy software is another man’s full-time job. ^Jessica Gaston",
      "A good programmer is someone who always looks both ways before crossing a one-way street. ^Doug Linder",
      "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. ^Martin Golding",
      "Programming is like sex. One mistake and you have to support it for the rest of your life. ^Michael Sinz",
      "Deleted code is debugged code. ^Jeff Sickel",
      "Walking on water and developing software from a specification are easy if both are frozen. ^Edward V Berard",
      "If debugging is the process of removing software bugs, then programming must be the process of putting them in. ^Edsger Dijkstra",
      "Software undergoes beta testing shortly before it’s released. Beta is Latin for “still doesn’t work. ^Anonymous",
      "It’s a curious thing about our industry: not only do we not learn from our mistakes, but we also don’t learn from our successes. ^Keith Braithwaite",
      "There are only two kinds of programming languages: those people always bitch about and those nobody uses. ^Bjarne Stroustrup",
      "In order to understand recursion, one must first understand recursion. ^Anonymous",
      "The cheapest, fastest, and most reliable components are those that aren’t there. ^Gordon Bell",
      "The best performance improvement is the transition from the nonworking state to the working state. ^J. Osterhout",
      "The trouble with programmers is that you can never tell what a programmer is doing until it’s too late. ^Seymour Cray",
      "Don’t worry if it doesn’t work right. If everything did, you’d be out of a job. ^Mosher’s Law of Software Engineering"];

      var index = Math.floor(Math.random() * (quotes.length + 1));
      var entry = quotes[index];
      entry = entry.split('^');
      $("#quoteContainer").empty();
      $("#quoteContainer").html("<div><p class='quote'>" + entry[0] + "</p><p class='quote author'>-- " + entry[1] + "</p></div>")
    }
  });