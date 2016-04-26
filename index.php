<html>
  <head>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="tweetLinkIt.js"></script>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="//twemoji.maxcdn.com/2/twemoji.min.js"></script>
    <script src="https://www.google.com/jsapi"></script>
    <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
    <script src="http://absurdjs.com/builds/absurd.organic.js"></script>
    <script src="http://absurdjs.com/builds/absurd.js"></script>
  </head>
  <body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12 banner">
          <img src="header.svg" class="header"/>
        </div>
      </div>
      <div class="row" id="maprow">
        <div class="col-xs-12"><div id="map" style="width: 100%; float: left;"></div></div>
      </div>
      <div class="row" id="bottom">
        <div class="reax">
          <h1>see the ri-action<br /><span class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span></h1>
        </div>
        <div class="reax2">
          <h1><span class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span><br />back to map</h1>
        </div>
        </span>
        <div class="col-xs-12 col-md-4 section" id="newssection">
          <h1>News</h1>
          <div id="content" class="expandable">
          </div>
        </div>
         <div class="col-xs-12 col-md-4 section" id="twittersection">
         <h1>twitter</h1>
         <div class="alltweets expandable">
          <?php
          ini_set('display_errors', 1);
          require_once('TwitterAPIExchange.php');

          /** Set access tokens here - see: https://dev.twitter.com/apps/ **/
          $settings = array(
              'oauth_access_token' => "388403805-VAKWcQBDcTXAgP5qn5gcGFxLdwlAR44mb8YUmCYM",
              'oauth_access_token_secret' => "YErvjxkl7EgDRyktu0CeTg7jDbioUNEQ0Ia7ARr9pDLaU",
              'consumer_key' => "AM02yWzKKuRHbdmLnVyH88U2T",
              'consumer_secret' => "N8EkSbkTHBkWXfWFqmzn49ccQNHv9Nl7LoeFwl9MxYkqO9eVwe"
          );

          /** URL for REST request, see: https://dev.twitter.com/docs/api/1.1/ **/
          $url = 'https://api.twitter.com/1.1/blocks/create.json';
          $requestMethod = 'POST';

          /** POST fields required by the URL above. See relevant docs as above **/
          $postfields = array(
              'screen_name' => 'usernameToBlock',
              'skip_status' => '1'
          );

          /** Perform a POST request and echo the response **/
          // $twitter = new TwitterAPIExchange($settings);
          // echo $twitter->buildOauth($url, $requestMethod)
          //              ->setPostfields($postfields)
          //              ->performRequest();

          /** Perform a GET request and echo the response **/
          /** Note: Set the GET field BEFORE calling buildOauth(); **/
          $url = 'https://api.twitter.com/1.1/search/tweets.json';
          $getfield = '?q=%23antiworldtour';
          $requestMethod = 'GET';
          $twitter = new TwitterAPIExchange($settings);
          // echo $twitter->setGetfield($getfield)
          //              ->buildOauth($url, $requestMethod)
          //              ->performRequest();

          $tweetData = json_decode($twitter->setGetfield($getfield)
                       ->buildOauth($url, $requestMethod)
                       ->performRequest(),$assoc= True);

          $tweetMedia = array();
          $tweetUsers = array();
          console.log($tweetData);
          foreach($tweetData['statuses'] as $index => $items)
            {

              $entitiesArray = $items['entities'];

              echo "<div class='tweet'>";

              if (isset($entitiesArray['media'])) {
                $mediaArray = $entitiesArray['media'];
                $tweetMedia = $mediaArray[0];

                echo "<a target='_blank' href='" . $tweetMedia['expanded_url'] . "'><img target='_blank' src='" . $tweetMedia['media_url'] . "'></a>";
              }

              echo "<div class='twContent'><img class='avi' src='".$items['user']['profile_image_url']."'/><div class='username'><span> ".$items['user']['name']."</span><br />".$items['user']['screen_name']."</div>";

              echo "<div class='tweettext'>" . $items ['text'] . "</br>" . "</div></div>";




              echo "</div>";
            }

            ?>
        </div>
      </div>
        <div class="col-xs-12 col-md-4 section" id="twittersection">
          <h1>Instagram</h1>
          <div class="allig expandable" id="results">
          </div>
        </div>
      </div>
      <div id="footer">
        <span class="glyphicon glyphicon-copyright-mark" aria-hidden="true"></span> Langston Taylor 2015
      </div>
    </div>
    <div class="back">
      <h1>hide<br/><span class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span></h1>
    </div>

    <script>

        $('.tweettext').tweetLinkify();
        $(document).ready(function(){

          if ($('.back').width() <= 991 ){

          $('.section').click(function(){
            // console.log(this.id);
            $('.section').height("6.7%");
            $(this).height("86.6%");
            $('#bottom').animate({top:'9%'},1000);
            $('.expandable').hide();
            $(this).children().show();

              $('.back').show();


            $(window).on('swipedown',function(){
              $('.expandable').hide();
              $('.section').height("33%");
              $('.back').hide();
              $('#bottom').animate({top:'80%'},1000);
            });

          });



          $('.back').click(function(){
            $('.expandable').hide();
            $('.section').height("33%");
            $(this).hide();
            $('#bottom').animate({top:'80%'},1000);
          });

        };


        $('.reax').click(function(){
          $('html, body').animate({
            scrollTop: $("#bottom").offset().top
          }, 1000);
          $('.reax2').show();
          $('.reax').hide();

        });

        $('.reax2').click(function(){
          $("html, body").animate({ scrollTop: 0 }, "slow");
          $('.reax').show();
          $('.reax2').hide();

        });

        });

    </script>
    <script src="instagram.js"></script>
    <script src="news.js"></script>
    <script src="map.js"></script>


  </body>
</html>
