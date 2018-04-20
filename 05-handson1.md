# Hands-on: basic transformations {#start}

## Getting Started
We'll use a **subset**[^1] of [Raleigh Building Permits data](https://github.com/libjohn/openrefine/tree/master/data) 

1. Launch the Open-Refine icon from your computer (find and double-click the jewel icon.)
    + [Installations / Start / Stop instructions](https://github.com/OpenRefine/OpenRefine/wiki/Installation-Instructions) 
    + [Owen Stephens's helpful video illustrating installation](https://summit.uwaterloo.ca/p389l6kkluv/?launcher=false&fcsContent=true&pbMode=normal)
    + Remember: The User Interface for Refine is Chrome or Firefox 
        + If your default browser is one of these, Refine will auto-launch to http://127.0.0.1:3333
        + If your default browser is IE, you’ll need to open the following URL http://127.0.0.1:3333 in Chrome or Firefox
2. <span class="or-menu">Create Project  > Web Addresses (URLs) ></span> `https://github.com/libjohn/openrefine/raw/master/data/subset%20Raleigh%20Building%20Permits.csv`  
3. Click <span class="or-menu">Next >></span> 
4. Select:  Columns are separated by “commas (CSV)”
5. Change the Project Name to `Raleigh Building Permits` and click Create Project >> (top-right) 

<div class="video"> 
<iframe width="560" height="315" src="https://www.youtube.com/embed/lPN6fHjmzZA" frameborder="0" allowfullscreen></iframe>
</div>

## Shutting Down OpenRefine

It's IMPORTANT to properly shutdown the application.  OpenRefine will automatically save your project as you transform your data. **However**, in my experience your **last operation** *may* have to be **manually saved** by following the procedures below...


**Windows**:  `Control-C`
**Mac**:  Click the OR app in the doc, invoke Quit


NOTE:  It is possible, but not guaranteed, to lose data if you don't follow the rather unintuitive shutdown procedures.  Better safe than sorry.


## Facets & Cluster


### Facet & Cluster {-}
Goal 1:  Create a facet of authorized work.  Cluster & Merge types of authorized work.

1. <ul class="no-bullet">
     <div class="challenge">
     <li>How many rows are in this dataset?</li>
     <p>21,982 rows</p>
     </div>
     </ul>

2. Slide the bottom column navigation bar to the right
    + find the authorized_work column 
    + click the column header:  <span class="or-menu">authorized_work > Facet > Text facet</span>
    
3. <ul class="no-bullet">
     <div class="challenge">
     <li>How many facets are there?</li>
     <p>7633 choices</p>
     </div>
   </ul>
       - You may see a program warning, a dialog-box error message [screen shot](images/facet_max_number.png) prompting you to <i>set the maximum number of choices show in the text facet</i>.  If so, accept the default and proceed.

4. In the Facet box, click `count`.  
    - <ul class="no-bullet">
     <div class="challenge">
     <li>What is the 4th most popular type of authorized work?</li>
     <p>SCREEN PORCH</p>
     </div>
     </ul>
    - <ul class="no-bullet">
     <div class="challenge">
     <li>How many permits are recorded?</li>
     <p>233</p>
     </div>
     </ul>

5. To find spelling clusters, click the `Cluster` button in the facet box
6. Click the `Select All` button, then the `Merge Selected & Re-Cluster` button, to merge all terms (accepting the default: Method = “key collision” ; Keying Function = “fingerprint”)
7. Repeat previous step using the “ngram-fingerprint” Keying Function, then close the Cluster & Edit dialog box
8. <ul class="no-bullet">
     <div class="challenge">
     <li>How many SCREEN PORCH facets now exist?</li>
     <p>238 - Compare to your answer in #4 above</p>
     </div>
     </ul>

<div class="video"> 
<iframe width="560" height="315" src="https://www.youtube.com/embed/QjXkUoFykkk" frameborder="0" allowfullscreen></iframe>
</div>

### Compound Facets {-}

1. Select the DECK Facet.  
    - <ul class="no-bullet">
    <div class="challenge">
    <li>How many matching rows match the Deck Facet?</li>
    <p>340 matching rows</p>
    </div>
    </ul>

2. Select the SCREEN PORCH facet combined with the DECK Facet. (Hover your mouse over the facet, click `include`) 
    - <ul class="no-bullet">
    <div class="challenge">
    <li>Now how many matching rows exist?</li>
    <p>578 matching rows</p>
    </div>
    </ul>

3. On the “land_use_code” column, make a text facet and limit to “SINGLE FAMILY”  
4. On the “county” column, make a text facet and limit to Durham County (DURH)  
    - <ul class="no-bullet">
    <div class="challenge">
    <li>How many “Single Family” homes received permits in Durham County for Screen Porches or Decks?</li>
    <p>3</p>
    </div>
    </ul>
    - <ul class="no-bullet">
    <div class="challenge">
    <li>Is the authorized work for Screen Porches, Decks, or both?</li>
    <p>both</p>
    </div>
    </ul>

5. Click the “Remove All” button to remove all text facets.  
    - <ul class="no-bullet">
    <div class="challenge">
    <li>How many matching rows are in the dataset now?</li>
    <p>21,982</p>
    </div>
    </ul>

<div class="video"> 
<iframe width="560" height="315" src="https://www.youtube.com/embed/orkVO4ORV-4" frameborder="0" allowfullscreen></iframe>
</div class="video"> 


### Mass Editing {-}
It's important to understand OpenRefine was designed to transform data in bulk.  It is possible to edit single data cells but it is not as convenient as some other, more WYSWIG, tools.  This exercise will help you learn how to accomplish these kinds of mass data transformations

1. Make a *Text facet* on the work_type_description column
2. There are two facets for new buildings:  “NEW BUILDING” and “New Building”.
    - <ul class="no-bullet">
    <div class="challenge">
    <li>How many “NEW BUILDING” rows exist? (click to reveal answer)</li>
    <p>3 matching rows</p>
    </div>
    </ul>
    - <ul class="no-bullet">
    <div class="challenge">
    <li>how many “New Building” rows exist?</li>
    <p>9,668 matching rows</p>
    </div>
    </ul>

3. Select “NEW BUILDING” facet, limiting to 3 matching rows. To the right of the “NEW BUILDING” facet,  hover your mouse over   the “edit” feature; click “edit” and alter the text to title case:  “New Building” ; click Apply
    - <ul class="no-bullet">
    <div class="challenge">
    <li>How many “New Building” rows exist now?</li>
    <p>9,671 matching rows</p>
    </div>
    </ul>

4. Mass edit “OTHER” & “Other” so they have the same value
5. Mass edit “ALTERATIONS/REPAIRS” and “Alterations/repairs” so they have 
the same value
6. Click “Remove All” to remove the facet window

<div class="video">  
<iframe width="560" height="315" src="https://www.youtube.com/embed/2lrGWTXjgtw" frameborder="0" allowfullscreen></iframe>
</div>

## Split data in cells
1. <span class="or-menu">address > Edit column > Split into several columns…</span>  
    + Separator = `(` > OK
2. <span class="or-menu">address 2 > Edit column > Split into several columns…</span>  
    + Separator = `,` (i.e. accept default and click) >  OK
3. <span class="or-menu">address 2 1 > Edit column > rename this column</span>  
    + `latitude`
4. <span class="or-menu">address 2 2 > Edit column > rename this column</span>  
    + `longitude`  
    
(more data transformation could be done, but let’s move on for now…)

<div class="video"> 
<iframe width="560" height="315" src="https://www.youtube.com/embed/gURKGsumqRw" frameborder="0" allowfullscreen></iframe>
</div>

## Concatenate cells together
1. <span class="or-menu">square_feet > Edit column > Add column based on this column…</span>  
    a. New column name = `Full Description`
    b. Expression = `value + cells["proposed_work"].value`

The last step adds two columns together, but the preview screen is hard to read. Make it readable by using the next expression instead ...  

2. Expression = `value + " sq ft. " + cells["proposed_work"].value` > OK

## More Transformations

Looking at the latitude and longitude cells, one column appears in green text (indicating OpenRefine considers data those cells as numbers) and one column appears in black with a closing parenthesis in the last position.  Convert both columns to text, trim leading and trailing spaces, and then find and replace the parenthesis

### Data Types {-}    
1. <span class="or-menu">latitude > Edit cells > common transformations > To text</span>  

### Whitespace {-}   
2. <span class="or-menu">longitude > Edit cells > common transformations > Trim leading and trailing whitespace </span>  

### Search & Replace {-}  
3. <span class="or-menu">longitude > Edit cells > Transform… </span>
    + Expression = `value.replace(")","")`
    
    <img src="images/searchReplace.PNG" alt="image of expression dialog box" class="center" />

## Web Scraping

### Select a subset {#subset -}

We want to gather the FIPS code for a subset of the data.  The government server returns data in a JSON format so we’ll parse the data after we retrieve it. First we’ll subset our dataset for expediency.  This limits our waiting time during the workshop.


1. <span class="or-menu">issue_date > Facet > Custom text facet… </span>
    + expression = `value.slice(6,10)`
2. select the “2014” facet
3. <span class="or-menu"> authorized_work > Facet > Text facet </span>
4. select the “3 SEASON ROOM” facet

You should now have 6 matching rows.  

### API {-}

Now let’s fetch the data from an [API](http://www.broadbandmap.gov/developer/) made available via the [National Broadband Map](http://www.broadbandmap.gov/). This API returns a FIPS code if we give it a county name (or in this case, even a partial county name.)


5. fetch JSON data from the National Broadband Map.  We’ll use the [API documentation for Geography by Name API](http://www.broadbandmap.gov/developer/api/census-api-by-geography-name) which returns Census geography for a geography name (e.g. Durham)  
    + Documentation
        + The documentation informs us that the format of the URL we want to construct is as follows:
http://www.broadbandmap.gov/broadbandmap/census/county/durh?format=json 
        + Notice the data values in the “county” column.  All we do is construct a URL which calls the value of the cells from each row of the “country” column
    + <span class="or-menu"> county > Edit column > Add column by fetching URLs… </span>
    + New column name = `JSON data`
    + Throttle delay = `2000`
    + Expression = <br>
`'https://www.broadbandmap.gov/broadbandmap/census/county/'+value+'?format=json'`
    + OK
        + Wait for the results.  If you limited to the matching rows in the [select subset](#subset) section this will only take a few seconds.

### Parse {-}

Now parse the value of the JSON data “fips” element; call the “<span class="highlight-yellow-fixed">fips</span>” key when traversing the “<span class="highlight-turq-fixed">county</span>” objects from the <span class="highlight-green-fixed">Results</span> set.


6. <span class="or-menu"> JSON data > Edit column > Add column based on this column ... </span> 
    * New column name = `FIPS Code`  
    * expression = `value.parseJson().Results.county[0].fips`  
    * Note the square-bracket (`[0]`) notation in the `ParseJson()` function denotes and identifies the first array element.  It's the first element because in OpenRefine counting begins with zero (e.g. 0,1,2,3,4,5).  The <span class="highlight-turq-fixed">county</span> array in the example below consists of only 1 value element (consisting of four, named key/value pairs; of which fips is one key).  Since the JSON notation indicates county is an array, in this case of quantity 1, we identify that first element of the array by the number '0'.  See the JSON example below   
<div class="video">     
<iframe width="560" height="315" src="https://www.youtube.com/embed/DbjpmVEpMiI" frameborder="0" allowfullscreen></iframe>
<div class="video">     
    
#### JSON Data Example {-}

JSON ^[[Wikipedia entry for JSON](https://en.wikipedia.org/wiki/JSON)] is JavaScript Object Notation a data wrapper.  The API, in this case, returns the data in a JSON format.

<pre>
{
  "status": "OK",  
  "responseTime": 14,  
  "message": [  ],  
  "<span class="highlight-green-fixed">Results</span>": {  
    "<span class="highlight-turq-fixed">county</span>": [  
      {  
        "geographyType": "COUNTY2010",  
        "stateFips": "37",  
        "<span class="highlight-yellow-fixed">fips</span>": "37063",  
        "name": "Durham"  
      }  
    ]  
  }  
}  
</pre>


<!-- special thanks to the folks at software carpentry.  I riffed from their
workshop template to create the Q&A javacript/style.  See https://github.com/swcarpentry/workshop-template -->
<script src="assets/js/qa.js"></script>




  [^1]: Original Data Source:  [Master Building Permit Data Set](https://data.raleighnc.gov/Urban-Planning/City-of-Raleigh-Building-Permits-from-Jan-2000/hk3n-ieai?category=Permits)
