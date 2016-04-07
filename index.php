<html>
  <head>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="tweetLinkIt.js"></script>
  </head>
  <body>

    <div class = "alltweets">
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
          $getfield = '?q=%23ANTItour';
          $requestMethod = 'GET';
          $twitter = new TwitterAPIExchange($settings);
          // echo $twitter->setGetfield($getfield)
          //              ->buildOauth($url, $requestMethod)
          //              ->performRequest();

          $tweetData = json_decode($twitter->setGetfield($getfield)
                       ->buildOauth($url, $requestMethod)
                       ->performRequest(),$assoc= True);

          $tweetMedia = array();

          foreach($tweetData['statuses'] as $index => $items)
            {
              $entitiesArray = $items['entities'];
              echo "<div class='tweet'><div class='tweettext'>" . $items ['text'] . "</br></div>";

              if (isset($entitiesArray['media'])) {
                $mediaArray = $entitiesArray['media'];
                $tweetMedia = $mediaArray[0];

                echo "<a target='_blank' href='" . $tweetMedia['expanded_url'] . "'><img target='_blank' src='" . $tweetMedia['media_url'] . "'></a>" ;
              }

              echo "</div>";
            }

            ?>
    </div>
    <script>

        $('.tweettext').tweetLinkify();

    </script>

  </body>
</html>
