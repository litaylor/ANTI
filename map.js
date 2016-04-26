var mapStyle = [
{
    "featureType": "administrative",
    "elementType": "all",
    "stylers": [
        {
            "hue": "#000000"
        },
        {
            "lightness": -100
        },
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [
        {
            "hue": "#dddddd"
        },
        {
            "saturation": -100
        },
        {
            "lightness": -3
        },
        {
            "visibility": "on"
        }
    ]
},
{
    "featureType": "landscape",
    "elementType": "labels",
    "stylers": [
        {
            "hue": "#000000"
        },
        {
            "saturation": -100
        },
        {
            "lightness": -100
        },
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "landscape.natural.landcover",
    "elementType": "geometry.fill",
    "stylers": [
        {
            "color": "#fbfaec"
        }
    ]
},
{
    "featureType": "landscape.natural.landcover",
    "elementType": "geometry.stroke",
    "stylers": [
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "poi",
    "elementType": "all",
    "stylers": [
        {
            "hue": "#000000"
        },
        {
            "saturation": -100
        },
        {
            "lightness": -100
        },
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
        {
            "hue": "#bbbbbb"
        },
        {
            "saturation": -100
        },
        {
            "lightness": 26
        },
        {
            "visibility": "on"
        }
    ]
},
{
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
        {
            "hue": "#ffffff"
        },
        {
            "saturation": -100
        },
        {
            "lightness": 100
        },
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "road.local",
    "elementType": "all",
    "stylers": [
        {
            "hue": "#ffffff"
        },
        {
            "saturation": -100
        },
        {
            "lightness": 100
        },
        {
            "visibility": "on"
        }
    ]
},
{
    "featureType": "transit",
    "elementType": "labels",
    "stylers": [
        {
            "hue": "#000000"
        },
        {
            "lightness": -100
        },
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
        {
            "saturation": -100
        },
        {
            "lightness": 100
        },
        {
            "visibility": "on"
        },
        {
            "color": "#cfcec5"
        }
    ]
},
{
    "featureType": "water",
    "elementType": "geometry.stroke",
    "stylers": [
        {
            "weight": "9.00"
        },
        {
            "color": "#822c2c"
        },
        {
            "saturation": "100"
        },
        {
            "lightness": "100"
        },
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "water",
    "elementType": "labels",
    "stylers": [
        {
            "hue": "#000000"
        },
        {
            "saturation": -100
        },
        {
            "lightness": -100
        },
        {
            "visibility": "off"
        }
    ]
}
];

var map = new google.maps.Map(document.getElementById('map'), {
zoom: 4,
center: {lat: 39.97712, lng: -97.734375},
mapTypeId: google.maps.MapTypeId.TERRAIN,
styles: mapStyle,
streetViewControl: false,
mapTypeControl: false,
scrollwheel: false
});



var tourDates = {
"dates": [
  { "date": { month: '03', date: '12', city:'Jacksonville, Florida'}},
  { "date": { month: '03', date: '13', city:'Tampa, Florida'}},
  { "date": { month: '03', date: '15', city:'Miami, Florida'}},
  { "date": { month: '03', date: '18', city:'Nashville, Tennessee'}},
  { "date": { month: '03', date: '19', city:'Cincinnati, Ohio'}},
  { "date": { month: '03', date: '20', city:'Charlotte, North Carolina'}},
  { "date": { month: '03', date: '22', city:'Washington, D.C.'}},
  { "date": { month: '03', date: '23', city:'Buffalo, New York'}},
  { "date": { month: '03', date: '24', city:'Auburn Hills, Michigan'}},
  { "date": { month: '03', date: '26', city:'Hartford, Connecticut'}},
  { "date": { month: '03', date: '27', city:'Brooklyn, New York'}},
  { "date": { month: '03', date: '30', city:'Brooklyn, New York'}},
  { "date": { month: '04', date: '02', city:'Newark, New Jersey'}},
  { "date": { month: '04', date: '3', city:'Philadelphia, Pennsylvania'}},
  { "date": { month: '04', date: '5', city:'Quebec City, Quebec'}},
  { "date": { month: '04', date: '6', city:'Montreal, Quebec'}},
  { "date": { month: '04', date: '7', city:'Montreal, Quebec'}},
  { "date": { month: '04', date: '9', city:'Baltimore, Maryland'}},
  { "date": { month: '04', date: '10', city:'Boston, Massachusetts'}},
  { "date": { month: '04', date: '13', city:'Toronto, Ontario'}},
  { "date": { month: '04', date: '14', city:'Toronto, Ontario'}},
  { "date": { month: '04', date: '15', city:'Chicago, Illinois'}},
  { "date": { month: '04', date: '18', city:'Winnipeg, Manitoba'}},
  { "date": { month: '04', date: '20', city:'Edmonton, Alberta'}},
  { "date": { month: '04', date: '21', city:'Calgary, Alberta'}},
  { "date": { month: '04', date: '23', city:'Vancouver, British Columbia'}},
  { "date": { month: '04', date: '24', city:'Seattle, Washington'}},
  { "date": { month: '04', date: '27', city:'Salt Lake City, Utah'}},
  { "date": { month: '04', date: '29', city:'Las Vegas, Nevada'}},
  { "date": { month: '04', date: '30', city:'Las Vegas, Nevada'}},
  { "date": { month: '05', date: '1', city:'Phoenix, Arizona'}},
  { "date": { month: '05', date: '3', city:'Los Angeles, California'}},
  { "date": { month: '05', date: '4', city:'Los Angeles, California'}},
  { "date": { month: '05', date: '6', city:'San Jose, California'}},
  { "date": { month: '05', date: '7', city:'Oakland, California'}},
  { "date": { month: '05', date: '9', city:'San Diego, California'}},
  { "date": { month: '05', date: '13', city:'Dallas, Texas'}},
  { "date": { month: '05', date: '14', city:'Austin, Texas'}},
  { "date": { month: '05', date: '15', city:'Houston, Texas'}},
  { "date": { month: '05', date: '17', city:'New Orleans, Louisiana'}},
  { "date": { month: '05', date: '18', city:'Atlanta, Georgia'}}
]
};

var months = ["March","April","May"]

var tourPath=[
new google.maps.LatLng(30.3321838, -81.65565099999999),
new google.maps.LatLng(27.950575, -82.4571776),
new google.maps.LatLng(25.7616798, -80.1917902),
new google.maps.LatLng(36.1626638, -86.7816016),
new google.maps.LatLng(39.1031182, -84.5120196),
new google.maps.LatLng(35.2270869, -80.8431267),
new google.maps.LatLng(38.9071923, -77.0368707),
new google.maps.LatLng(42.88644679999999, -78.8783689),
new google.maps.LatLng(42.6875323, -83.2341028),
new google.maps.LatLng(41.76371109999999, -72.6850932),
new google.maps.LatLng(40.6781784, -73.9441579),
new google.maps.LatLng(40.6781784, -73.9441579),
new google.maps.LatLng(40.735657, -74.1723667),
new google.maps.LatLng(39.9525839, -75.1652215),
new google.maps.LatLng(46.8138783, -71.2079809),
new google.maps.LatLng(45.5016889, -73.567256),
new google.maps.LatLng(45.5016889, -73.567256),
new google.maps.LatLng(39.2903848, -76.6121893),
new google.maps.LatLng(42.3600825, -71.0588801),
new google.maps.LatLng(43.653226, -79.3831843),
new google.maps.LatLng(43.653226, -79.3831843),
new google.maps.LatLng(41.8781136, -87.6297982),
new google.maps.LatLng(49.8997541, -97.1374937),
new google.maps.LatLng(53.544389, -113.4909267),
new google.maps.LatLng(51.0486151, -114.0708459),
new google.maps.LatLng(49.2827291, -123.1207375),
new google.maps.LatLng(47.6062095, -122.3320708),
new google.maps.LatLng(40.7607793, -111.8910474),
new google.maps.LatLng(36.1699412, -115.1398296),
new google.maps.LatLng(36.1699412, -115.1398296),
new google.maps.LatLng(33.4483771, -112.0740373),
new google.maps.LatLng(34.0522342, -118.2436849),
new google.maps.LatLng(34.0522342, -118.2436849),
new google.maps.LatLng(37.3382082, -121.8863286),
new google.maps.LatLng(37.8043637, -122.2711137),
new google.maps.LatLng(32.715738, -117.1610838),
new google.maps.LatLng(32.7766642, -96.79698789999999),
new google.maps.LatLng(30.267153, -97.7430608),
new google.maps.LatLng(29.7604267, -95.3698028),
new google.maps.LatLng(29.95106579999999, -90.0715323),
new google.maps.LatLng(33.7489954, -84.3879824)
];

tourLength=tourPath.length-1;

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;

for (i=0;i<tourLength;i++) {
if(tourDates.dates[i].date.month<=mm) {
  if (tourDates.dates[i].date.date<=dd) {
    console.log(tourDates.dates[i].date.city);
    lastStop=i;
  }
}
}

drawTheMap(map,tourDates,tourPath,lastStop,tourLength);


function drawTheMap(map,tourDates,tourPath,lastStop,tourLength) {
    var circle=[];
    for (i=0;i<lastStop;i++) {
        shade = 255*((i)/lastStop);
        shadeHex = (Math.round(shade)).toString(16);
        vColor='#'+shadeHex+'0000';
        var flightPath = new google.maps.Polyline({
          path: [tourPath[i],tourPath[i+1]],
          geodesic: true,
          strokeColor: vColor,
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
        flightPath.setMap(map);

        circle.push(new google.maps.Circle({
          strokeColor: '#FFFFFF',
          strokeOpacity: 1,
          strokeWeight: 2,
          fillColor: vColor,
          fillOpacity: 1,
          map: map,
          center: tourPath[i],
          radius: 40000
        }));
        circle[i]["cid"]=i;
        x=tourDates.dates[i].date;
        circle[i]["details"]="<span class='poLoc'>"+x.city+"</span><br /><span class='poDate'>"+months[x.month-3]+" "+x.date+"</span>";
    };

    for (i=lastStop;i<tourLength;i++) {
      vColor='#cfcec5';
      // console.log(vColor);
      var flightPath = new google.maps.Polyline({
        path: [tourPath[i],tourPath[i+1]],
        geodesic: true,
        strokeColor: vColor,
        strokeOpacity: 1.0,
        strokeWeight: 2
      });
      flightPath.setMap(map);
      circle.push(new google.maps.Circle({
        strokeColor: '#CB2029',
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: '#cfcec5',
        fillOpacity: 1,
        map: map,
        center: tourPath[i+1],
        radius: 40000
      }));
      circle[i-1]["cid"]=i;
      x=tourDates.dates[i].date;
      circle[i-1]["details"]="<span class='poLoc'>"+x.city+"</span><br /><span class='poDate'>"+months[x.month-3]+" "+x.date+"</span>";
    };

    ///// DO IT ONE MORE TIME FOR END OF TOUR


    circle.push(new google.maps.Circle({
      strokeColor: '#CB2029',
      strokeOpacity: 1,
      strokeWeight: 2,
      fillColor: '#cfcec5',
      fillOpacity: 1,
      map: map,
      center: tourPath[i+1],
      radius: 40000
    }));

    x=tourDates.dates[i].date;
    circle[i-1]["details"]="<span class='poLoc'>"+x.city+"</span><br /><span class='poDate'>"+months[x.month-3]+" "+x.date+"</span>";

    var infowindow = new google.maps.InfoWindow({
    });

    // circle[lastStop-1]["details"]=tourDates.dates[lastStop-1].date.city;
    x=tourDates.dates[lastStop-1].date;
    circle[lastStop-1]["details"]="<span class='poLoc'>"+x.city+"</span><br /><span class='poDate'>"+months[x.month-3]+" "+x.date+"</span>";

    // CURRENT STOP

    i++;

    circle.push(new google.maps.Circle({
      strokeColor: '#FFFFFF',
      strokeOpacity: 1,
      strokeWeight: 2,
      fillColor: '#CB2029',
      fillOpacity: 1,
      map: map,
      center: tourPath[lastStop],
      radius: 100000
    }));
    x=tourDates.dates[lastStop].date
    circle[i]["details"]="<span class='poHighlight'>Most Recent Show:</span><br/><span class='poLoc'>"+x.city+"</span><br /><span class='poDate'>"+months[x.month-3]+" "+x.date+"</span>";


    content = circle[i].details;
    position=circle[i].center;
    infowindow.setContent(content);
    infowindow.setPosition(position);
    // console.log(infowindow.position);
    infowindow.open(map);

    var absurd = Absurd();
    absurd.component('MyComp', {
      html: {},
      css: {},
      ready: function(dom, mq) {
        this.set('parent', dom('body').el).populate();
        mq('all and (min-width: 768px)', function(match) {
          if(match) {
            for (i=0;i<=tourLength+1;i++) {
              circle[i].addListener('click', function() {
                content = this.details;
                position=this.center;
                infowindow.setContent(content);
                infowindow.setPosition(position);
                // console.log(infowindow.position);
                infowindow.open(map);
              });
              google.maps.event.addDomListener(window, 'resize', function() {
                map.setCenter({lat: 39.97712, lng: -97.734375});
              });
            }
        } else {
          for (i=0;i<=tourLength+1;i++) {
            google.maps.event.addDomListener(window, 'resize',
            function() {
              map.setCenter(tourPath[lastStop]);
            });
            circle[i].addListener('mousedown', function() {
              content = this.details;
              position=this.center;
              infowindow.setContent(content);
              infowindow.setPosition(position);
              // console.log(infowindow.position);
              infowindow.open(map);
            });

          }
        }
        this.populate();
    }, true);
}
})();


}
