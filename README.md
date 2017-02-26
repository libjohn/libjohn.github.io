# See http://libjohn.github.io

# How I build and serve my website

- The back-end of this website is built at http://github.com/libjohn/website using Rmarkdown-website [builder](http://rmarkdown.rstudio.com/rmarkdown_websites.html)
- The web pages are served via [GitHub Pages](https://pages.github.com/) at **http://libjohn.github.io**
- Individual subdirectories are built from separate repositories using tools like [Bookdown](https://bookdown.org/yihui/bookdown/), [Xaringan](https://slides.yihui.name/xaringan/#1), [R Notebooks](http://rmarkdown.rstudio.com/r_notebooks.html) and [R HTML Documents](http://rmarkdown.rstudio.com/html_document_format.html).
    - The resulting HTML output is moved manually into a subdir of this repo.