function initMap() {
    
    var obamaIl = {
        lat: 39.698333,
        lng: -89.619722
    };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: {
            lat: 40.810556,
            lng: -96.680278
        }
    });


    // For custom svg icon for Markers
    //            var squareicon = {
    //                    path: 'M22-48h-44v43h16l6 5 6-5h16z',
    //                    fillColor: 'lightblue',
    //                    fillOpacity: 0.8,
    //                    scale: 1,
    //  };



    // Barack Obama

    // Variable for dislplaying Content in Window when Clicked   

    var contentString = '<div id="content">' +
        '<div>' +'<h2>Presindent Barack Obama</h2>' + '<ul><li>44th President</li><li>Born in Honolulu, Hawaii, U.S</li><li>Senetor from Illinios</li><li>Term:January 20,2009 - Present</li></ul>' + '</div>';

//Assigning content to window to open
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });


    //For position of Marker in map       

    var marker = new google.maps.Marker({
        position: obamaIl,
        map: map,
        title: 'Barack Obama',
        //          icon: squareicon

    });

    // Click event listenerfunction showing Window message

    marker.addListener('click', function () {
        infowindow.open(map, this);
    });

    // Hover function for images

    google.maps.event.addListener(marker, 'mouseover', function () {
        this.setIcon('img/rsz_obama.jpg');
    });

    google.maps.event.addListener(marker, 'mouseout', function () {
        this.setIcon('');
    });




//Bush

 //Varibale for holding the custom html content for Windowinfo

    var contentStringTwo = '<div id="content">' +'<div>' +'<h2>Presindent George W Bush</h2>' + '<ul><li>43th President</li><li>Born in New Haven, Conecticut, U.S</li><li>Senetor from Texas</li><li>Term:January 20,2001</li></ul>' + '</div>';


    var infowindow2 = new google.maps.InfoWindow({
        content: contentStringTwo
    });

//For position of Marker in map 

    var bushTx = {
        lat: 32.775833,
        lng: -96.796667
    }


    var marker = new google.maps.Marker({
        position: bushTx,
        map: map,
        title: 'Bush',
        //          icon : 'bush.jpg'
    });

 // event listener for Click showing Window message      
    marker.addListener('click', function () {
        infowindow2.open(map, this);
    });

// event listener for Hover, showing the image       
    google.maps.event.addListener(marker, 'mouseover', function () {
        this.setIcon('img/rsz_bush.jpg');
    });

    google.maps.event.addListener(marker, 'mouseout', function () {
        this.setIcon('');
    });

//Bill
    
    //Varibale for holding the custom html content for Windowinfo

    var contentStringThree = '<div id="content">' +'<div>' +'<h2>Presindent Bill Clinton</h2>' + '<ul><li>4th President</li><li>Born in Hope, Arkansas, U.S</li><li>Governor from Arkansas </li><li>Term:January 20,1993</li></ul>' + '</div>';


    var infowindowThree = new google.maps.InfoWindow({
        content: contentStringThree
    });

    var billAr = {
        lat: 33.667778,
        lng: -93.59
    };

    var marker = new google.maps.Marker({
        position: billAr,
        map: map,
        title: 'Bill Clinton',
        //          icon: 'billclinton.jpg'
    });

// event listener for Click showing Window message      
    marker.addListener('click', function () {
        infowindowThree.open(map, this);
    });

    google.maps.event.addListener(marker, 'mouseover', function () {
        this.setIcon('img/rsz_billclinton.jpg');
    });

    google.maps.event.addListener(marker, 'mouseout', function () {
        this.setIcon('');
    });



 // George
    
    //Varibale for holding the custom html content for Windowinfo

    var contentStringFour = '<div id="content">' +'<div>' +'<h2>Presindent George H.W.Bush</h2>' + '<ul><li>41st President</li><li>Born in Milton,Massachusetts, U.S</li><li>U.S representatives from Texas</li><li>Term:January 20,1989</li></ul>' + '</div>';


    var infowindowFour = new google.maps.InfoWindow({
        content: contentStringFour
    });
    var georgeTx = {
        lat: 29.762778,
        lng: -95.383056
    }

    var marker = new google.maps.Marker({
        position: georgeTx,
        map: map,
        title: 'George Bush',
        //              icon: 'GeorgeHWBush.jpg'
    });

// event listener for Click showing Window message      
    marker.addListener('click', function () {
        infowindowFour.open(map, this);
    });
    
    google.maps.event.addListener(marker, 'mouseover', function () {
        this.setIcon('img/rsz_georgehwbush.jpg');
    });

    google.maps.event.addListener(marker, 'mouseout', function () {
        this.setIcon('');
    });

// Ronald Regan
    
    //Varibale for holding the custom html content for Windowinfo

    var contentStringFive = '<div id="content">' +'<div>' +'<h2>Presindent Ronald Regan</h2>' + '<ul><li>40th President</li><li>Born in Tampico, Illinois, U.S</li><li>Governor from California</li><li>Term:January 20,1981</li></ul>' + '</div>';


    var infowindowFive = new google.maps.InfoWindow({
        content: contentStringFive
    });
    
    var ronaldLa = {
        lat: 34.08333,
        lng: -118.44778
    };

    var marker = new google.maps.Marker({
        position: ronaldLa,
        map: map,
        title: 'Ronald Regan',
        //            icon: 'Ronaldregan.jpg'
    });

// event listener for Click showing Window message      
    marker.addListener('click', function () {
        infowindowFive.open(map, this);
    });

    google.maps.event.addListener(marker, 'mouseover', function () {
        this.setIcon('img/rsz_ronaldregan.jpg');
    });

    google.maps.event.addListener(marker, 'mouseout', function () {
        this.setIcon('');
    });

// Jimmy Carter
    //Varibale for holding the custom html content for Windowinfo

    var contentStringSix = '<div id="content">' +'<div>' +'<h2>Presindent Jimmy Carter</h2>' + '<ul><li>3th President</li><li>Born in Plains, Georgia, U.S</li><li>Governor from Georgia</li><li>Term:January 20,1977</li></ul>' + '</div>';


    var infowindowSix = new google.maps.InfoWindow({
        content: contentStringSix
    });
    
    var jimmyGa = {
        lat: 32.033611,
        lng: -84.39333
    };
    var marker = new google.maps.Marker({
        position: jimmyGa,
        map: map,
        title: 'Jimmy Carter',
        //            icon: 'Jimmycarter.jpg'
    });
    
// event listener for Click showing Window message      
    marker.addListener('click', function() {
        infowindowSix.open(map, this);
    });
    google.maps.event.addListener(marker, 'mouseover', function () {
        this.setIcon('img/rsz_jimmycarter.jpg');
    });

    google.maps.event.addListener(marker, 'mouseout', function () {
        this.setIcon('');
    });
    
// Gerald Ford
    
    //Varibale for holding the custom html content for Windowinfo

    var contentStringSeven = '<div id="content">' +'<div>' +'<h2>Presindent Gerald Ford</h2>' + '<ul><li>38th President</li><li>Born in Omaha, Nebraska, U.S</li><li>US House of Representative from Michigan</li><li>Term:August 9, 1974</li></ul>' + '</div>';


    var infowindowSeven = new google.maps.InfoWindow({
        content: contentStringSeven
    });
    
    var geraldMi = {
        lat: 42.96125,
        lng: -85.655719
    };
    
    var marker = new google.maps.Marker({
        position: geraldMi,
        map: map,
        title: 'Gerald Ford',
        //            icon: 'geraldford.jpg'
    });
    
// event listener for Click showing Window message      
    marker.addListener('click', function() {
        infowindowSeven.open(map, this);
    });
    
    google.maps.event.addListener(marker, 'mouseover', function () {
        this.setIcon('img/rsz_geraldford.jpg');
    });

    google.maps.event.addListener(marker, 'mouseout', function () {
        this.setIcon('');
    });
    
    // Richard Nixon
    
    //Varibale for holding the custom html content for Windowinfo

    var contentStringEight = '<div id="content">' +'<div>' +'<h2>Presindent Richard Nixon</h2>' + '<ul><li>37th President</li><li>Born in Yorba Linda, California, U.S</li><li>Senetor from California</li><li>Term:January 20,1969</li></ul>' + '</div>';


    var infowindowEight = new google.maps.InfoWindow({
        content: contentStringEight
    });
    
    var richardCa = {
        lat: 33.888551,
        lng: -117.813231
    };
    var marker = new google.maps.Marker({
        position: richardCa,
        map: map,
        title: 'Richard Nixon',
        //            icon: 'richardnixon.jpg'
    });
    
    // event listener for Click showing Window message      
    marker.addListener('click', function() {
        infowindowEight.open(map, this);
    });
    
    google.maps.event.addListener(marker, 'mouseover', function () {
        this.setIcon('img/rsz_richardnixon.jpg');
    });

    google.maps.event.addListener(marker, 'mouseout', function () {
        this.setIcon('');
    });

    // Lyndon Johnson
    
    //Varibale for holding the custom html content for Windowinfo

    var contentStringNine = '<div id="content">' +
        '<div>' +'<h2>Presindent Lydon Jhonson</h2>' + '<ul><li>36th President</li><li>Born in Stonewall, Texas, U.S</li><li>Senetor from Texas</li><li>Term:November 22,1963</li></ul>' + '</div>';


    var infowindowNine = new google.maps.InfoWindow({
        content: contentStringNine
    });
    
    var lyndonTx = {
        lat: 30.24,
        lng: -98.66
    };
    
    var marker = new google.maps.Marker({
        position: lyndonTx,
        map: map,
        title: 'Lyndon Johnson',
        //            icon: 'lydonjohnson.jpg'
    });
    
// event listener for Click showing Window message      
    marker.addListener('click', function() {
        infowindowNine.open(map, this);
    });
    
    google.maps.event.addListener(marker, 'mouseover', function () {
        this.setIcon('img/rsz_lydonjohnson.jpg');
    });

    google.maps.event.addListener(marker, 'mouseout', function () {
        this.setIcon('');
    });
    
 // John Kennedy
    
  //Varibale for holding the custom html content for Windowinfo

    var contentStringTen = '<div id="content">' +
        '<div>' +
        '<h2>Presindent John F Kennedy</h2>' + '<ul><li>35th President</li><li>Born in Brookline, Massachusetts, U.S</li><li>Senetor from Massachusetts</li><li>Term:January 20,1961</li></ul>' + '</div>';


    var infowindowTen = new google.maps.InfoWindow({
        content: contentStringTen
    });
    
    var johnMa = {
        lat: 42.331667,
        lng: -71.121667
    };
    
    var marker = new google.maps.Marker({
        position: johnMa,
        map: map,
        title: 'John Kennedy',
        //            icon: 'johnkennedy.jpg'
    });
    
 // event listener for Click showing Window message      
    marker.addListener('click', function() {
        infowindowTen.open(map, this);
    });
    
    google.maps.event.addListener(marker, 'mouseover', function () {
        this.setIcon('img/rsz_johnkennedy.jpg');
    });

    google.maps.event.addListener(marker, 'mouseout', function () {
        this.setIcon('');
    });
}