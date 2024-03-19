$(function () {
    $("#accordion").accordion({
        heightStyle: "content"
    });
});

$(document).ready(function () {

    county = toTitleCase(getQueryVariable("id"));

    $("#Sec2").css("pointer-events", "none");
    $("#Sec2").addClass("inActive");
    $("#Sec3").css("pointer-events", "none");
    $("#Sec3").addClass("inActive");
    $("#Sec4").css("pointer-events", "none");
    $("#Sec4").addClass("inActive");
    $("#Sec5").css("pointer-events", "none");
    $("#Sec5").addClass("inActive");
    $("#Sec6").css("pointer-events", "none");
    $("#Sec6").addClass("inActive");

    $('#Sec1').click(function () {
        $("#Sec6").css("pointer-events", "auto");
        $("#Sec6").removeClass("inActive");


    });

    $('#Sec6').click(function () {
        $("#Sec5").css("pointer-events", "auto");
        $("#Sec5").removeClass("inActive");

    });

    $('#Sec5').click(function () {
        $("#Sec6").css("pointer-events", "auto");
        $("#Sec6").removeClass("inActive");

    });

    if (county == 'Sonoma') {
        $('#mapList').append(sonomaMaps)
        parcelURL = 'https://services.arcgis.com/0xnwbwUttaTjns4i/ArcGIS/rest/services/SonomaBaseData/FeatureServer'
    }
    if (county == 'Napa') {
        $('#mapList').append(napaMaps)
        parcelURL = 'https://services.arcgis.com/0xnwbwUttaTjns4i/ArcGIS/rest/services/Napa_Parcels/FeatureServer'
    }

});

var apn,
    county,
    parcelURL,
    apnText = '',
    apnWhere = '',
    apnList,
    apnList2,
    apnArr = [],
    apnClean,
    gpTaskUrl,
    gpTask,
    acres,
    fmText = "(Find('NB', fm, 0) > -1), 0, ",
    fmArr,
    fmArr2,
    fmCodes = [],
    fmJoin,
    fmSQL = 'Code LIKE "GR%" OR Code LIKE "GS%" OR Code LIKE "SH%" OR Code LIKE "FS%" OR Code LIKE "FR%"',
    fmPrior,
    fmPriorJoin,
    fmClass,
    vegArr,
    vegGroup,
    vegTable,
    vegTreatment,
    vegJoin,
    vegFullGroup,
    fullArr,
    areaArr,
    totArea,
    fmGroup,
    wsVal,
    wsName,
    //fcText = "(Find('NO', fc, 0) > -1), 0, ",
    hpText = "",
    fcArr,
    fcSQL,
    slopeArr = [],
    hydroArr,
    roadArr,
    erodeArr,
    sliderTotal,
    winnerArcade,
    strengthArcade,
    renderer,
    slopeCutoffArr,
    selectParcel = [],
    parcelGroup,
    statsArr,
    slopeText,
    vegTreatTest,
    costTable,
    treatText,
    streamVal,
    roadVal,
    buildVal,
    erodVal,
    totVal,
    priorVal,
    priorCode,
    distText = "($feature.Dist_Road > 100 && $feature.Dist_Build > 100), 0, $feature.Dist_Hyd <= 100, 0, ",
    distSQL = "(Dist_Road <= 100 OR Dist_Build <= 100) AND Dist_Hyd > 100"
sonomaMaps = '<li class="list-group-item"><input class="form-check-input me-1" type="checkbox" name="mapList" value="Street Map" aria-label="...">Streets</li><li class="list-group-item"><input class="form-check-input me-1" type="checkbox" name="mapList" value="Hillshade" aria-label="...">Hillshade</li><li class="list-group-item"><input class="form-check-input me-1" type="checkbox" name="mapList" value="2013 Imagery" aria-label="...">2013 Imagery</li><li class="list-group-item"><input class="form-check-input me-1" type="checkbox" name="mapList" value="2020 Imagery" aria-label="...">2020 Imagery</li><li class="list-group-item"><input class="form-check-input me-1" type="checkbox" name="mapList" value="Slope" aria-label="...">Slope</li><li class="list-group-item"><input class="form-check-input me-1" type="checkbox" name="mapList" value="Soils" aria-label="...">Soils</li><li class="list-group-item"><input class="form-check-input me-1" type="checkbox" name="mapList" value="Vegetation" aria-label="...">Vegetation</li><li class="list-group-item"><input class="form-check-input me-1" type="checkbox" name="mapList" value="Vegetation Height" aria-label="...">Vegetation Height</li><li class="list-group-item"><input class="form-check-input me-1" type="checkbox" name="mapList" value="Ladder Fuels" aria-label="...">Ladder Fuels</li><li class="list-group-item"><input class="form-check-input me-1" type="checkbox" name="mapList" value="Fuel Model" aria-label="...">Fuel Model</li>'
napaMaps = '<li class="list-group-item"><input class="form-check-input me-1" type="checkbox" name="mapList" value="2021 Imagery and Place Names" aria-label="...">2021 Imagery</li><li class="list-group-item"><input class="form-check-input me-1" type="checkbox" name="mapList" value="Streams and Water Bodies" aria-label="...">Streams</li><li class="list-group-item"><input class="form-check-input me-1" type="checkbox" name="mapList" value="Flame Length" aria-label="...">Flame Length</li>'


require([
    "esri/Map",
    "esri/Graphic",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/layers/GraphicsLayer",
    "esri/widgets/Legend",
    "esri/widgets/Search",
    "esri/tasks/QueryTask",
    "esri/tasks/support/Query",
    "esri/tasks/Geoprocessor",
    "esri/core/watchUtils",
    "dojo/domReady!"
], function (Map, Graphic, MapView, FeatureLayer, GraphicsLayer, Legend, Search, QueryTask, Query, Geoprocessor, watchUtils) {
    
    gpTaskUrlSonoma = "https://arcgis.ucanr.edu/server/rest/services/Sonoma/SonomaWFM2/GPServer/SonomaWFM2/";
    gpTaskSonoma = new Geoprocessor(gpTaskUrlSonoma);

    gpTaskUrlNapa = "https://arcgis.ucanr.edu/server/rest/services/Sonoma/NapaFM/GPServer/NapaFM/";
    gpTaskNapa = new Geoprocessor(gpTaskUrlNapa);

    Parcels2 = new FeatureLayer({
        url: parcelURL,
        layerId: 0,
        title: "Parcels"
    });

    var searchWidget = new Search({
        view: view2,
        allPlaceholder: "Search Address or APN (xxx-xxx-xxx)",
        sources: [{
            layer: Parcels2,
            searchFields: ["apn"],
            displayField: "apn",
            exactMatch: false,
            outFields: ["apn"],
            name: "Parcels",
            placeholder: "example: 139-100-014"
        }]
    });

    Parcels2.renderer = {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: {
            type: "simple-fill", // autocasts as new SimpleFillSymbol()
            color: [255, 255, 255, 0],
            outline: {
                width: 1,
                color: [109, 111, 113, 0.7]
            }
        }
    };

   



    graphicsFM = new GraphicsLayer;



    var map2 = new Map({
        basemap: "dark-gray-vector"
    });




    var view2 = new MapView({
        container: "viewDiv2",
        map: map2,
        center: [-122.837214, 38.512354],
        zoom: 10,
        constraints: {
            snapToZoom: false
        }
    });

    view2.map.add(Parcels2)
    view2.map.add(graphicsFM)


    view2.ui.add(searchWidget, {
        position: "top-left",
        index: 0
    });




    view2.when(function () {


        var legend2 = new Legend({
            view: view2
        });

        view2.ui.add(legend2, "top-right");

        searchWidget.on("select-result", function (event) {
            searchCoordinates(event);
        });

        view2.on("click", function (event) {
            clickCoordinates(event);
        });
    });

    view2.whenLayerView(Parcels2)
        .then((layerView) => {
            return watchUtils.whenFalseOnce(layerView, 'updating', function() {
            console.log('layerView is done loading and drawing', layerView);
            layerView.queryExtent().then(function (response) {
                // go to the extent of all the graphics in the layer view
                view2.goTo(response.extent.expand(1.2));
            });
        })
        });

    

    function searchCoordinates(event) {
        $.ajaxSetup({
            async: false
        });


        mp = (event.result.feature.geometry);

        if (mp.centroid) {
           
            executeParcelQuery(mp.centroid);

        } else {
           
            executeParcelQuery(mp);

        };
    };

    function clickCoordinates(event) {
        $.ajaxSetup({
            async: false
        });

        mp = (event.mapPoint);

       
        executeParcelQuery(mp);
        //executeFMQuery();
    };



    $("#resetSelect").click(function () {
        apnArr = [];
        apnText = '';
        apnWhere = '';
        //FM.renderer = renderer;
        graphicsFM.removeAll();
        $("#Sec2").css("pointer-events", "none");
        $("#Sec2").addClass("inActive");
        $("#Sec3").css("pointer-events", "none");
        $("#Sec3").addClass("inActive");
        $("#Sec4").css("pointer-events", "none");
        $("#Sec4").addClass("inActive");
        $("#Sec6").css("pointer-events", "none");
        $("#Sec6").addClass("inActive");
        $('#apnText').empty();
        $('#wsText').empty();
        $('#areaText').empty();
        $("#report").hide();
    });

    parcelQueryTask = new QueryTask({
        url: parcelURL + "/0"
    });
    parcelQuery = new Query();
    parcelQuery.returnGeometry = true;
    parcelQuery.outFields = ["*"];


    function executeParcelQuery(event) {
        $.ajaxSetup({
            async: false
        });

        $("#Sec6").css("pointer-events", "auto");
        $("#Sec6").removeClass("inActive");
        $("#Sec2").css("pointer-events", "auto");
        $("#Sec2").removeClass("inActive");
        $("#Sec3").css("pointer-events", "auto");
        $("#Sec3").removeClass("inActive");
        $("#Sec4").css("pointer-events", "auto");
        $("#Sec4").removeClass("inActive");
        $("#report").show();

        parcelQuery.geometry = event;
        parcelQuery.spatialRelationship = "intersects";
        parcelQueryTask.execute(parcelQuery).then(function (result) {

            var graphic = new Graphic({
                attributes: result.features[0].attributes,
                geometry: result.features[0].geometry,
                symbol: {
                    type: "simple-fill", // autocasts as new SimpleFillSymbol()
                    color: [0, 0, 255, 0],
                    outline: {
                        width: 1.25,
                        color: [241, 90, 41, 1]
                    }
                }
            });
            //Add graphic to the map graphics layer.
            graphicsFM.add(graphic);


            view2.goTo({
                target: graphicsFM.graphics
            });

            apn = result.features[0].attributes.APN;
            apnArr.push(result.features[0].attributes.APN);
            acres = result.features[0].attributes.Acres;
            fmArr = '';
            fmArr2 = [];
            vegArr = [];
            vegFullArr = [];

            fmGroup = [];
            vegGroup = [];
            apnClean = [];
            slopeCutoffArr = [];
            parcelGroup = [];
            statsArr = [];
            slopeArr = [];
            selectParcel = [];

            apnClean = eliminateDuplicates(apnArr);
            apnCheck();


            areaArr = [];

           
           

        });
    };

});

$('#report').click(function () {

    var maps = $("input[name='mapList']:checked").map(function () {
        return this.value;
    }).get().join(',');

    var email = $("input[name='mail']").val();

    var params = {
        "APN(s)": apnList2,
        "Email": email,
        "Map(s)": maps
    };

    // Setup event handlers.
    if (county == 'Sonoma') {
        gpTaskSonoma.submitJob(params).then(onTaskComplete, errBack, progTest);
    }
    if (county == 'Napa') {
        gpTaskNapa.submitJob(params).then(onTaskComplete, errBack, progTest);
    }

    // Event handler for onJobComplete event
    function onTaskComplete(jobInfo) {
        $('#loadModal').modal('show');
    }

    function progTest(value) {
        console.log(value.jobStatus);
    }

    function errBack(err) {
        console.log("gp error: ", err);
    }

});




function eliminateDuplicates(arr) {
    var i,
        len = arr.length,
        out = [],
        obj = {};

    for (i = 0; i < len; i++) {
        obj[arr[i]] = 0;
    }
    for (i in obj) {
        out.push(i);
    }
    return out;
}


function apnCheck() {
    apnText = '';
    apnWhere = '';
    apnList = '';
    apnList2 = '';
    layerCounter = 1;
    $.each(apnClean, function (i, val) {
        if (layerCounter == 1) {
            apnText += "parcelAPN != '" + val + "' "
            apnWhere += "apn = '" + val + "' "
            apnList += "<b>APN(s):</b> " + val;
            apnList2 += "" + val;
            layerCounter += 1
        } else {
            apnText += "&& parcelAPN != '" + val + "' "
            apnWhere += "OR apn = '" + val + "' "
            apnList += ", " + val;
            apnList2 += "," + val;
        }
    })
    $('#apnText').empty();
    $('#apnText').append(apnList);
}



function apnFilter() {
    var string = "var parcelAPN = $feature.apn;\ var factors = When(" + apnText + ", 0, 1);\
return factors;"

    return string;
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return "the";
}

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}