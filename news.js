      // This code generates a "Raw Searcher" to handle search queries. The Raw
      // Searcher requires you to handle and draw the search results manually.
      google.load('search', '1');

      var newsSearch;

      function searchComplete() {

        // Check that we got results
        document.getElementById('content').innerHTML = '';
        var html='';
        if (newsSearch.results && newsSearch.results.length > 0) {

          for (var i = 0; i < newsSearch.results.length; i++) {

            // Create HTML elements for search results

            item = newsSearch.results[i];
            image = item.image;

            item.url;
            item.title;

            html +=
            "<div class='newsItem'><a href='"+item.unescapedUrl+
            "'><h2>"+item.title+
            "</h2>";

            if (image) {
              html += '<div class="newsImg"><img src="'+image.tbUrl+'"/></div>';
            };

            html+=
            "<div class='newsText'><h6>"+item.publisher+
            "&nbsp; | &nbsp;"+item.publishedDate+
            "</h6>"+item.content+"</div>";



            html+="</a></div><br/>";

          }

          document.getElementById('content').innerHTML=html;

        }
      }

      function onLoad() {

        // Create a News Search instance.
        newsSearch = new google.search.NewsSearch();

        // Set searchComplete as the callback function when a search is
        // complete.  The newsSearch object will have results in it.
        newsSearch.setSearchCompleteCallback(this, searchComplete, null);

        // Specify search quer(ies)
        newsSearch.execute('rihanna anti world tour');

        // Include the required Google branding
        google.search.Search.getBranding('branding');
      }

      // Set a callback to call your code when the page loads
      google.setOnLoadCallback(onLoad);
