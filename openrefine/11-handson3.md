# Hands-on: reshape

**Reshaping Your Data**  

For this project you will take data in one format and reshape into a more optimal format for analysis.  We'll assume the analysis will be done in another tool.  OpenRefine can export data in multiple formats after the data has been wrangled into the proper structure.  In this lab we continue exploring how OpenRefine can import various data formats, this time Excel. 

**Goals**  
1. Import Excel worksheets  
2. Faceting & Filtering for select data cleaning  
3. Transforming:  Adding columns and using fill-down to fill in data  





Basically you are making minor changes to the shape of the data by transforming some horizontal data into a more vertical format.  This is a common data wrangling need.  Below are two tables, cropped, to briefly illustrate the before data wrangling table \@ref(tab:beforetable) and after data wrangling result \@ref(tab:wrangled-table). I encourage you to [download](https://github.com/libjohn/openrefine/raw/master/data/salary.xlsx) the Excel spreadsheet to look through the raw data.^[The data, “Salary.xslx”, are NBA salary data.]  Doing so will help you see how the data transformation progresses.  




Table: Unprocessed:  A selective 10 rows of the 2013-2014 Salary.xls data

X__1             X__2       X__3                              
---------------  ---------  ----------------------------------
Cartier Martin   876332     c$754,250, r1/7, s2/1-2/18, s2/21 
Mike Scott       778872     minimum                           
Mike Muscala     57668      signed 2/27, released 3/23        
James Nunnally   57668      signed 1/11, released 2/1         
Dexter Pittman   53888      c $52,017, signed 2/22, rel 2/27  
NA               NA         NA                                
----             NA         NA                                
NA               NA         NA                                
Boston Celtics   NA         NA                                
Kris Humphries   12000000   NA                                


Table: Wrangled:  same 10 rows of the 2013-2014 Salary.xls data

Player           Team             Salary     Notes                             
---------------  ---------------  ---------  ----------------------------------
Cartier Martin   Atlanta Hawks    876332     c$754,250, r1/7, s2/1-2/18, s2/21 
Mike Scott       Atlanta Hawks    778872     minimum                           
Mike Muscala     Atlanta Hawks    57668      signed 2/27, released 3/23        
James Nunnally   Atlanta Hawks    57668      signed 1/11, released 2/1         
Dexter Pittman   Atlanta Hawks    53888      c $52,017, signed 2/22, rel 2/27  
Kris Humphries   Boston Celtics   12000000   NA                                
Rajon Rondo      Boston Celtics   12000000   NA                                
Gerald Wallace   Boston Celtics   10105855   NA                                
Jeff Green       Boston Celtics   8700000    NA                                
Brandon Bass     Boston Celtics   6450000    NA                                



## Ingest Excel data  

1. Open  Data  
    * <span class="or-menu">Create Project  > Web Addresses (URLs) > </span>  `https://github.com/libjohn/openrefine/raw/master/data/salary.xlsx`
    * <span class="or-menu">Next >> </span>  
    * You many want to give your project a pretty title
    * Parse data as 
        1. Worksheets to Import: 
            + **Check** "2013-2014 666 rows"
            + **UnCheck** "2014-2015 599 rows"  
        2. **UnCheck** "Store blank rows" 
            + Notice lines 20 & 22 disappear  
        3. **UnCheck** "Parse Next" 1 lines as column headers 
            + Notice the "Atlanta Hawks" are no longer the column header for the first column  
    * Project name = `salary data` <span class="or-menu">> Create Project </span>  
2. Rename Columns: "Player", "Salary", "Notes" ^[<span class="or-menu">Column Header > Edit Column > Rename this column </span>]    
3. Show as: rows to '25' (notice row 21)

## Facets
4. Remove all rows where '----' exist in the Player column  
    + <span class="or-menu">Player > Facet > Text Facet** > </span>  
        * Sort by: count > click: '----' :  
        * You should now have 29 matching rows that begin '----'  
    + <span class="or-menu">All > Edit rows > Remove all matching rows  </span>  
    + Click:  **Remove All** in the **Facet/Filter** sidebar  
    
> Notice: in the next step, team names precede each team roster and are followed by two blank cells in the same row.  Scroll through the screens (Click "next >") a few times; return to the first screen  

5. Make a column for team name and fill it.  
    + Isolate team-name rows using a facet on the blank cells in the Salary column  
        1. <span class="or-menu">Salary > Facet > Customized facets > Facet by blank </span> 
            + <ul class="no-bullet">
               <div class="challenge">
               <li>Why do you think **this doesn’t work**?</li>
               <p>Those cells are actually filled with whitespace -- invisible to the naked eye but legitimate characters for a computer:  a space (`\s`).  They’re not actually blank and only appear blank. So,  **regular expressions** to the rescue!  </p>
               </div>
               </ul>
        2. Close the facet  
    + <span class="or-menu">Salary > Text filter > check "regular expression" > `^\s`  </span> 
        + `\s` means “a space”; `^` means “must begin the line”  
    + **Mouseover** the the "Cleveland Cavaliers" **Salary cell**:  
        + edit > highlight all the text EXCEPT the first space:  "Tot   $66,611,520" > \<\<cut to clipboard\>\> > Apply  
        + BE SURE to leave a blank space where the Salary data was  
    + Edit the individual Notes cell for the "Cleveland Cavaliers" cell:  
        + edit > \<\<paste from clipboard\>\> "Tot $66,611,520" > Apply  
        + This time you do not need a leading blank space  
        
## Text Filter  

6. Add the team name as a new column for each player then remove team name from the Player Column  
    1. <span class="or-menu">Player > Edit column > Add column based on this column ... > New column name = `Team` > OK  </span>   
    2. Remove All facets  
    3. <span class="or-menu">Team > Edit cells > Fill down  </span>   
    4. <span class="or-menu">Salary > Text filter > check "regular expression" > `^\s` </span>   
    5. <span class="or-menu">All > Edit rows > Remove all matching rows  </span>   
    6. Close (or "X out") the Salary text filter

<iframe width="560" height="315" src="https://www.youtube.com/embed/20plnBsmz_A?list=PLIUcX1JrVUNXSgBbyMCluwaJYTWJ--fDd" frameborder="0" allowfullscreen></iframe>


<!-- special thanks to the folks at software carpentry.  I riffed from their
workshop template to create the Q&A javacript/style.  See https://github.com/swcarpentry/workshop-template -->
<script src="assets/js/qa.js"></script>
