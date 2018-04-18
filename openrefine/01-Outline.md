# Workshop Outline {-}

*OpenRefine for Data Cleaning: An Outline for the Workshop*

John Little  
Data Analysis Librarian  
[Data & Visualization Services](http://library.duke.edu/data) (the /Edge - Bostock Library)  
Duke University Libraries  

## Workshop Structure {-}

**tl;dr...**  OpenRefne = good; data cleaning = good; learn by doing; [Skip to the hands-on](#start) sections in this workbook.

### Testimonial {-}  

I like OpenRefine for data cleaning, exploratory scripting, and data gathering including API orchestration. <i>Refine</i> is both very good and very easy to use.  The comparative advantage lies with the  ease of design and simple menu-navigation allowing the user to perform reproducible and shareable data transformations.  

There are other programming languages/tools (such as R, Python, Excel, or Google Sheets) which can accomplish many of the same tasks.  The unique advantage for <i>Refine may</i> be the clustering technology. It is easy to find and correct spelling variations, or generally clean dirty and unstructured data.  Indeed, for the specific task of data cleaning, OpenRefine is unquestionably easy to learn and easy to use.  The power of the menu operations afford sophistication without having to memorize programming language syntax or commands.  If you're not a programmer this can be a huge value.  Essentially you can remain a subject expert in your field but perform powerful transformations without feeling like you are on dual-track treadmill -- trying to become a programmer and a subject expert. 

OpenRefine relieves me of the need to memorize file handle syntax, file management, or even looping and logic structure syntax.  But all of those techniques are availble to me if and when I really want them.  For programmers there is a benefit of not clouding up your wetware with a whole passel of commands which might only confound you as they muddle your expertise with another programming language.  (Oh, I know this never happens to *you*, but it does to others -- I've heard told).  Combine ease-of-use qualities with reproducibility and it's almost mind boggling that <i>Refine</i> is not more famous.  The simple secret is <i>Refine</i> is easy to learn <i>and</i> offers an extensible  feature set.  In short, OpenRefine produces dividends for the effort you put into it.  And it really grows on you.  

I hope you enjoy learning about OpenRefine.

### Workshop Philosophy {-}

I developed this workbook to consist of hands-on exercises that will reinforce my in-person instruction.  My instruction is aimed at promoting a learn-by-doing, and learn-by-observation approach.  So, essentially, if you're in the workshop, you can **listen to my brief introdution and then skip to the hands-on sections**.  The remainder of this section consists of bullet points which I'll use in the instruction portion of the lecture.  

I like to think of this workshop and workbook as a cooking metaphor. I'll introducing you to a bunch of spices (functions).  Then I'll give you some recipes.  I won't give you a lot of theory.  If you complete each recipe and follow each step, the recipe will turn out.  If you pay attention, you learn something about how to combine the elements.  Your exposure to the spices will help you learn what works and what you like.  Best of all, as you gain experience with the possibilities you can learn more as you experiment on your own.  

<img src="images/DataCleaningPadawan.png" alt="tweet ~ data cleaning takes effort" class="center" />  

&nbsp;  

It has been [written](https://www.nytimes.com/2014/08/18/technology/for-big-data-scientists-hurdle-to-insights-is-janitor-work.html) that 80% of any data project is comprised of *data cleaning*.  




<img src="images/pie-1.png" alt="Data Project Elements" class="center" width="672"/>

Furthermore, of that 80% -- the part of your data project comprised of data cleaning -- 80% of that data cleaning is *tedious* while the remaining 20% is *confusing*.  



<img src="images/pie-2.png" alt="Data Cleaning Elements" class="center" width="672"/>

I prefer to think of data cleaning as a puzzle rather than a tedium.  Data cleaning is a necessary step. If given short shrift, your data will become problematic and the clearning process will still have to be addressed.   Finally, since this is not an analysis book,  let me remind you of the the old adage: "garbage in, garbage out".  Clean your data and decrease the chances of producing garbage.  Keeping in mind that the bulk of any data project involves data cleaning, you may as well have the best tools at your fingertips; you may as well do a good job; and you may as well enjoy the puzzle. OpenRefine to the rescue... 



<img src="images/pie-3.png" alt="Data Cleaning with OpenRefine" class="center" width="672"/>

One reason data cleaning is such a challenge is that information is naturally unstructured.  Meanwhile, most analysis tools prefer precise data structures.  Transforming your unstructure mass  into a proper structure is often as idiosyncratic as the data you are trying to analyze.  Therefore, I invite you to learn about data cleaning in this workshop.  Then meet with me when you have a specific project in mind.  I'll be happy to help you further.  (If you're reading this preface, and not enrolled in one of my workshops at Duke University, maybe you can get help on the [OpenRefine Mailing List](http://openrefine.org/documentation.html).  There you will find many helpful and knowledgeable people willing to help you learn.)

## Workshop Video {-}

I offer this workshop frequently, at least once a semester and you can watch a recording of this OpenRefine workshop (below).  On the [DVS workshop recordings](http://library.duke.edu/data/news/past-workshops) page you will  find the second and third parts of a workshop series going into more detail on [Regular Expressions](http://library.capture.duke.edu/Panopto/Pages/Viewer.aspx?id=dd4cd7cc-6aa7-4084-a229-615f3aebe6bd) and [Web Scraping](http://library.capture.duke.edu/Panopto/Pages/Viewer.aspx?id=5da46414-bd58-41e3-8ff1-3ecb1ad45fae).

<div class="video"> 
<iframe height="360" width="640" src="https://warpwire.duke.edu/w/-4YBAA/" frameborder="0" scrolling="0" allowfullscreen></iframe>
</div> 


## For best results {-}
1. The hands-on approach includes a reliance on the [data-science](http://drewconway.com/zia/2013/3/26/the-data-science-venn-diagram) notion of "[hacking](https://datajobs.com/what-is-data-science)" (not "cracking").  Pay attention to what you are seeing, what you are typing, what happens, what transforms, the end-result vis-a-vis the initial state of the data.  
2. Learn by doing  
3. Learn *best* by working on your own project  
4. Set up an appointment for consultations -- http://v.gd/littleconsult


## Overview {-}
* What is [OpenRefine](http://openrefine.org)
* What is a Project
* Reproducible Research

## Comparative Advantage {-}
* Easy   
    + Menu driven **faceting**, and **filtering**
    + Clean up data inconsistencies using powerful **clustering** and edit algorithms 
    + Transforming Data 
* Advanced power comes from Regular Expressions implementation via GREL  
* Web scraping:  API orchestration, HTML/JSON parsing
* Why Use OpenRefine? 
    + you don't want to be a data engineer, but you need to fix your data
        + Don't have to deal with file handling  
        + Don't have to deal with iterating (looping logic)  
        + Don't have to write complex conditional statements  
        + Don't have to think hard to manipulate arrays  
    + Or, you are a lazy programmer (i.e. a smart programmer) 
    + Or, you are a subject matter expert and Refine is the right tool for the job
* Frequently, OpenRefine is simpler to use than Excel for data transformations
    + Regular Expressions vs. Excel Formulas ^[The regex v excel-formul table is not a "fair fight" but it does illustrate what all regular expression users understand:   regex is a better tool than excel formulas for data cleaning.]


|  Expression Language | Expression |
|---|------------------------------------------------------------------------|
GREL | `value.match(/`<span class="highlight-yellow-fixed">(\^&#91;0-9&#93;\{1,2\}\\w\\w)</span>`\s(.*)/)[0]` 
Excel Formula | `INDEX(salary!$C$1:$C$4,MATCH(1,('player DB'!$A2=salary!$A$1:$A$4)*('player DB'!$B2=salary!$B$1:$B$4),0))`

## Characteristics {-}

### General {-}

[OpenRefine](http://openrefine.org) is an **open source data cleaning** and **transformation** application used for [Data Wrangling](https://en.wikipedia.org/wiki/Data_wrangling).

* Refine looks like a spreadsheet but it's really a database  
    + There is an OpenRefine statistical extension for simple statistics  
    + Extensions are listed on the download page  
* Transformations are performed on all MATCHING rows  
* Easily find the “shape” of the data  
* User Interface is your local web browser (Chrome or Firefox)  
    + Application is a Java Virtual Machine (JVM) on your local CPU -- not a cloud service  
* File ingest Formats include:  TSV, CSV, Excel, XML, RDF, JSON, Google Fusion Tables and Google Spreadsheets  
    - Paste in raw data  
    - Scrape from the Web  
    - Orchestrate API calls  
* File export Formats include: TSV, CSV, Excel, HTML table, Templating (e.g. JSON), and whole OpenRefine Projects  
    * Auto-save your projects  
    * Auto-save all processing steps  
    * Enables export and share  
* 50,000 Rows (1.4 GB RAM ) ; Upper limit is about 5 Million Rows (requires some memory allocation)  


### Video {-}
Watch this excellent and brief Video Introduction.  It only takes a few minutes.  And then watch part 2 and part 3 to expand your knowledge.  

<div class="video">
<iframe width="560" height="315" src="https://www.youtube.com/embed/B70J_H_zAWM?list=UUqwSVsJ8CWD9pQUZDbJC1ew" frameborder="0" allowfullscreen></iframe>
</div>













