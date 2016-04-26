// JavaScript Document


//Use this url below to get your access token
//https://instagram.com/oauth/authorize/?display=touch&client_id=1305ecaf399a47aa9941e7cfb970e8ae&redirect_uri=http://steventking.com/apps/instagram&response_type=token

//if you need a user id for yourself or someone else use:
//http://jelled.com/instagram/lookup-user-id


$(function() {

	var tag= "antiworldtour";

	var IGapiurl = "https://api.instagram.com/v1/tags/"+tag+"/media/recent?access_token=248660894.aee21ef.0cb44e17e81547ef994d0de5ff989bbc&callback=?"
	var access_token = location.hash.split('=')[1];
	var igHtml = ""

		$.ajax({
			type: "GET",
			dataType: "json",
			cache: false,
			url: IGapiurl,
			success: IGparseData
		});


		function IGparseData(json){
			console.log(json);

			$.each(json.data,function(i,data){

				if (data.tags.length<20) {
					style="url('"+data.images.low_resolution.url+"')";
					igHtml +="<div class='igpic'><img class = 'img-circle igAvi' src='"+data.user.profile_picture+"'/><span>"+data.user.username+"</span>";
					igHtml += '<div class="wrapper"><a target="_blank" href="'+data.link+'"><img class="igmedia" src ="' + data.images.low_resolution.url + '"></a></div>';

					igHtml+= "<span class='glyphicon glyphicon-heart' aria-hidden='true' style='margin-right:20px;'></span><span> " + data.likes.count + " LIKES</span><br /> " + data.caption.text + "</div>";
				}
				else{
					console.log(data.tags)
				}

			});

			// console.log(igHtml);
			$("#results").append(igHtml);

		}

	})
