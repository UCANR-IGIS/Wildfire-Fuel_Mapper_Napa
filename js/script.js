$(function () {
    $("#accordion").accordion({
        heightStyle: "content"
    });
    $("#accordion2").accordion({
        heightStyle: "content"
    });
});

$(document).ready(function () {

    county = toTitleCase(getQueryVariable("id"));

    $('#Sec1').hide()
            $('#Sec5').hide()
            $('#Sec6').hide()

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
        $("#fuel").append("<p><a href='county_IDX.html?id=" + county + "'>Return</a> to main fuel mapper page for " + county + " County</p>")
        $("#fuel2").append("<p><a href='county_IDX.html?id=" + county + "'>Return</a> to main fuel mapper page for " + county + " County</p>")
        parcelURL = 'https://services.arcgis.com/0xnwbwUttaTjns4i/ArcGIS/rest/services/SonomaBaseData/FeatureServer'
        webmapID1 = '10553bd512be4a41af9ca4f18378a2f6'
        webmapID2 = '46aa11afd9d7477d9f39ed059b5d88d0'
    }
    if (county == 'Napa') {
        $('#mapList').append(napaMaps)
        $("#fuel").append("<p><a href='county_IDX.html?id=" + county + "'>Return</a> to main fuel mapper page for " + county + " County</p>")
        $("#fuel2").append("<p><a href='county_IDX.html?id=" + county + "'>Return</a> to main fuel mapper page for " + county + " County</p>")
        parcelURL = 'https://services.arcgis.com/0xnwbwUttaTjns4i/ArcGIS/rest/services/Napa_Parcels/FeatureServer'
        webmapID1 = '272a5b4b0f0f4d408c18b1163500227a'
        webmapID2 = '199321f06a9d4d9bbcf40eb72fe734bf'
    }
    if (county == 'Alameda') {
        $('#mapList').append(alccMaps)
        $('#infoDiv').append('<p>For live webmaps that include many of the datasets displayed in the PDF maps, visit this <a href="https://fuelsmapping.com/alcc_risk_webapp" target="_blank">Risk/Hazard WebApp</a>, this <a href="https://fuelsmapping.com/alcc_risk_story" target="_blank">Risk/Hazard story map</a>, and this <a href="https://experience.arcgis.com/experience/99b6b77a7f104071bc253ea1bb7acd04/" target="_blank">4-Pane Viewer</a>. For GIS users, download many of these datasets at <a href="https://pacificvegmap.org" target="_blank">Pacific Veg Map</a>.</p>')
        $("#fuel").append("<p><a href='county_IDX.html?id=" + county + "'>Return</a> to main fuel mapper page for " + county + " County</p>")
        $("#fuel2").append("<p><a href='county_IDX.html?id=" + county + "'>Return</a> to main fuel mapper page for " + county + " County</p>")
        parcelURL = 'https://services.arcgis.com/0xnwbwUttaTjns4i/arcgis/rest/services/ALCC_Parcels/FeatureServer'
        webmapID1 = 'f0ed7918b46f471bb2749136873e64e9'
        webmapID2 = '03f482960cae4d3e982a9c386407f550'
    }
    if (county == 'Contra%20costa') {
        county = 'Contra Costa'
        $('#mapList').append(alccMaps)
        $('#infoDiv').append('<p>For live webmaps that include many of the datasets displayed in the PDF maps, visit this <a href="https://fuelsmapping.com/alcc_risk_webapp" target="_blank">Risk/Hazard WebApp</a>, this <a href="https://fuelsmapping.com/alcc_risk_story" target="_blank">Risk/Hazard story map</a>, and this <a href="https://experience.arcgis.com/experience/99b6b77a7f104071bc253ea1bb7acd04/" target="_blank">4-Pane Viewer</a>. For GIS users, download many of these datasets at <a href="https://pacificvegmap.org" target="_blank">Pacific Veg Map</a>.</p>')
        $("#fuel").append("<p><a href='county_IDX.html?id=" + county + "'>Return</a> to main fuel mapper page for " + county + " County</p>")
        $("#fuel2").append("<p><a href='county_IDX.html?id=" + county + "'>Return</a> to main fuel mapper page for " + county + " County</p>")
        parcelURL = 'https://services.arcgis.com/0xnwbwUttaTjns4i/arcgis/rest/services/ALCC_Parcels/FeatureServer'
        webmapID1 = 'ab22fcb3e7594b03a590e0ea90151095'
        webmapID2 = '03f482960cae4d3e982a9c386407f550'
    }

});

var apn,
    county,
    parcelURL,
    webmap,
    view,
    webmap2,
    view3,
    webmapID1,
    webmapID2,
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
    distSQL = "(Dist_Road <= 100 OR Dist_Build <= 100) AND Dist_Hyd > 100",
    sonomaMaps = '<li class="list-group-item"><input class="form-check-input me-1" type="checkbox" id="selectall" name="selectall" autocomplete="off" onclick="eventCheckBox()">Select All</li><li class="list-group-item"><input class="form-check-input me-1" type="checkbox" name="mapList" value="Street Map" aria-label="...">Streets</li><li class="list-group-item"><input class="form-check-input me-1" type="checkbox" name="mapList" value="Hillshade" aria-label="...">Hillshade</li><li class="list-group-item"><input class="form-check-input me-1" type="checkbox" name="mapList" value="2013 Imagery" aria-label="...">2013 Imagery</li><li class="list-group-item"><input class="form-check-input me-1" type="checkbox" name="mapList" value="2020 Imagery" aria-label="...">2020 Imagery</li><li class="list-group-item"><input class="form-check-input me-1" type="checkbox" name="mapList" value="Slope" aria-label="...">Slope</li><li class="list-group-item"><input class="form-check-input me-1" type="checkbox" name="mapList" value="Soils" aria-label="...">Soils</li><li class="list-group-item"><input class="form-check-input me-1" type="checkbox" name="mapList" value="Vegetation" aria-label="...">Vegetation</li><li class="list-group-item"><input class="form-check-input me-1" type="checkbox" name="mapList" value="Vegetation Height" aria-label="...">Vegetation Height</li><li class="list-group-item"><input class="form-check-input me-1" type="checkbox" name="mapList" value="Ladder Fuels" aria-label="...">Ladder Fuels</li><li class="list-group-item"><input class="form-check-input me-1" type="checkbox" name="mapList" value="Fuel Model" aria-label="...">Fuel Model</li><li class="list-group-item"><input class="form-check-input me-1" type="checkbox" name="mapList" value="Flame Length" aria-label="...">Flame Length</li>',
    napaMaps = '<li class="list-group-item"><input class="form-check-input me-1" type="checkbox" id="selectall" name="selectall" autocomplete="off" onclick="eventCheckBox()">Select All</li><li class="list-group-item"><input class="form-check-input me-1" type="checkbox" name="mapList" value="2021 Imagery and Place Names" aria-label="...">2021 Imagery</li><li class="list-group-item"><input class="form-check-input me-1" type="checkbox" name="mapList" value="Streams and Water Bodies" aria-label="...">Streams</li><li class="list-group-item"><input class="form-check-input me-1" type="checkbox" name="mapList" value="Flame Length" aria-label="...">Flame Length</li>',
    alccMaps = '<li class="list-group-item"><input class="form-check-input me-1" type="checkbox" id="selectall" name="selectall" autocomplete="off" onclick="eventCheckBox()">Select All</li><li class="list-group-item"><input class="form-check-input me-1" type="checkbox" name="mapList" value="2022 Imagery and Place Names" aria-label="...">2022 Imagery</li><li class="list-group-item"><input class="form-check-input me-1" type="checkbox" name="mapList" value="Streams and Water Bodies" aria-label="...">Hydrology</li><li class="list-group-item"><input class="form-check-input me-1" type="checkbox" name="mapList" value="Fire History (1991-2022)" aria-label="...">Fire History</li><li class="list-group-item"><input class="form-check-input me-1" type="checkbox" name="mapList" value="Fire Districts and Responsibility Areas" aria-label="...">Fire Districts</li><li class="list-group-item"><input class="form-check-input me-1" type="checkbox" name="mapList" value="Predicted Flame Length" aria-label="...">Flame Length</li><li class="list-group-item"><input class="form-check-input me-1" type="checkbox" name="mapList" value="Ladder Fuels" aria-label="...">Ladder Fuels</li><li class="list-group-item"><input class="form-check-input me-1" type="checkbox" name="mapList" value="Wildfire Hazard" aria-label="...">Wildfire Hazard</li><li class="list-group-item"><input class="form-check-input me-1" type="checkbox" name="mapList" value="Wildfire Risk to Structures" aria-label="...">Risk to Structures</li><li class="list-group-item"><input class="form-check-input me-1" type="checkbox" name="mapList" value="Slope" aria-label="...">Slope</li><li class="list-group-item"><input class="form-check-input me-1" type="checkbox" name="mapList" value="Vegetation Height" aria-label="...">Vegetation Height</li><li class="list-group-item"><input class="form-check-input me-1" type="checkbox" name="mapList" value="Enhanced Lifeform Map" aria-label="...">Lifeforms</li><li class="list-group-item"><input class="form-check-input me-1" type="checkbox" name="mapList" value="Soils Map" aria-label="...">Soils</li>'



require([
    "esri/Map",
    "esri/WebMap",
    "esri/Graphic",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/layers/GraphicsLayer",
    "esri/layers/support/LabelClass",
    "esri/widgets/Legend",
    "esri/widgets/Search",
    "esri/tasks/QueryTask",
    "esri/tasks/support/Query",
    "esri/tasks/Geoprocessor",
    "esri/core/watchUtils",
    "esri/widgets/BasemapGallery",
    "esri/widgets/Expand",
    "dojo/domReady!"
], function (Map, WebMap, Graphic, MapView, FeatureLayer, GraphicsLayer, LabelClass, Legend, Search, QueryTask, Query, Geoprocessor, watchUtils, BasemapGallery, Expand) {

    gpTaskUrlSonoma = "https://arcgis.ucanr.edu/server/rest/services/Sonoma/SonomaWFM2/GPServer/SonomaWFM2/";
    gpTaskSonoma = new Geoprocessor(gpTaskUrlSonoma);

    gpTaskUrlNapa = "https://arcgis.ucanr.edu/server/rest/services/Sonoma/NapaFM/GPServer/NapaFM/";
    gpTaskNapa = new Geoprocessor(gpTaskUrlNapa);

    gpTaskUrlALCC = "https://arcgis.ucanr.edu/server/rest/services/Sonoma/ALCCFM/GPServer/ALCCFM/";
    gpTaskALCC = new Geoprocessor(gpTaskUrlALCC);

    const labelClass = {
        // autocasts as new LabelClass()
        symbol: {
            type: "text", // autocasts as new TextSymbol()
            color: "white",
            haloColor: "grey",
            haloSize: 1,
            font: {
                // autocast as new Font()
                family: "Arial",
                size: 10
            }
        },
        labelPlacement: "above-center",
        labelExpressionInfo: {
            expression: "$feature.APN"
        },
        maxScale: 0,
        minScale: 250000,
    };

    Parcels2 = new FeatureLayer({
        url: parcelURL,
        layerId: 0,
        //minScale: 100000,
        title: "Parcels",
        labelingInfo: [labelClass]
    });

    Counties = new FeatureLayer({
        url: "https://services.arcgis.com/0xnwbwUttaTjns4i/arcgis/rest/services/California_County_and_MCP_Boundaries/FeatureServer",
        layerId: 0,
        definitionExpression: "name = '" + county + "'",
        title: "County Boundary"
    });

    Counties.maxScale = 250000
    Parcels2.minScale = 250000

    

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

    Counties.renderer = {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: {
            type: "simple-fill", // autocasts as new SimpleFillSymbol()
            color: [255, 255, 255, 0.2],
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

    webmap = new WebMap({
        portalItem: {
            id: webmapID1
        }
    });

    

    view = new MapView({
        container: "viewDiv",

        map: webmap

    });

    webmap2 = new WebMap({
        portalItem: {
            id: webmapID2
        }
    });

    view3 = new MapView({
        container: "viewDiv3",

        map: webmap2

    });



    var view2 = new MapView({
        container: "viewDiv2",
        map: map2,
        center: [-122.837214, 38.512354],
        zoom: 8,
        constraints: {
            snapToZoom: false
        }
    });

    const searchWidget = new Search({
        view: view2,
        allPlaceholder: "Search Address or APN (xxx-xxx-xxx)",
        sources: [{
            layer: Parcels2,
            searchFields: ["APN"],
            displayField: "APN",
            exactMatch: false,
            outFields: ["APN"],
            name: "Parcels",
            placeholder: "example: 139-100-014"
        }]
    });

    view2.map.add(Counties)
    view2.map.add(Parcels2)
    view2.map.add(graphicsFM)


    view2.ui.add(searchWidget, {
        position: "top-left",
        index: 0
    });

    
    const basemapGallery = new BasemapGallery({
        view: view
      });
     

      const basemapGallery2 = new BasemapGallery({
        view: view2
      });
      
      const expandForBasemaps = new Expand({
        view: view,
        content: basemapGallery,
        expanded: false
      });
    
      view.ui.add([expandForBasemaps], "top-right");

      const expandForBasemaps2 = new Expand({
        view: view2,
        content: basemapGallery2,
        expanded: false
      });
    
      view2.ui.add([expandForBasemaps2], "top-right");


    view.when(function() {
        const singleParcel = webmap.allLayers.find(function(layer) {
            return layer.title === "Parcel Maps";
           })
           const searchWidget2 = new Search({
            view: view,
            allPlaceholder: "Search Address or APN (xxx-xxx-xxx)",
            sources: [{
                layer: singleParcel,
                searchFields: ["APN"],
                displayField: "APN",
                exactMatch: false,
                outFields: ["APN"],
                name: "Parcels",
                placeholder: "example: 139-100-014"
            }]
        });
        view.ui.add(searchWidget2, {
            position: "top-left",
            index: 0
        });
    
        searchWidget2.on("select-result", function (event) {
            view.goTo(event.result.extent.expand(1.2));
        });
    })

    view2.when(function () {


        var legend2 = new Legend({
            view: view2
        });

        view2.ui.add(legend2, "top-right");

        searchWidget.on("select-result", function (event) {
            view2.goTo(event.result.extent.expand(1.2));
            searchCoordinates(event);
        });

        view2.on("click", function (event) {
            clickCoordinates(event);
        });
    });

    view2.whenLayerView(Counties)
        .then((layerView) => {
            return watchUtils.whenFalseOnce(layerView, 'updating', function () {
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
        $("#Sec5").css("pointer-events", "none");
        $("#Sec5").addClass("inActive");
        $("#Sec6").css("pointer-events", "none");
        $("#Sec6").addClass("inActive");
        $('#apnText').empty();
        $('#wsText').empty();
        $('#areaText').empty();
        $("#report").hide();
    });

    $('#radForm input').on("change", function () {
        console.log($(this).attr('value'));
        apnArr = [];
        apnText = '';
        apnWhere = '';
        //FM.renderer = renderer;
        graphicsFM.removeAll();
        /* $("#Sec2").css("pointer-events", "none");
        $("#Sec2").addClass("inActive");
        $("#Sec3").css("pointer-events", "none");
        $("#Sec3").addClass("inActive");
        $("#Sec4").css("pointer-events", "none");
        $("#Sec4").addClass("inActive"); */
        $("#Sec6").css("pointer-events", "none");
        $("#Sec6").addClass("inActive");
        $('#apnText').empty();
        $('#wsText').empty();
        $('#areaText').empty();
        $("#report").hide();
        view2.whenLayerView(Counties)
            .then((layerView) => {
                return watchUtils.whenFalseOnce(layerView, 'updating', function () {
                    console.log('layerView is done loading and drawing', layerView);
                    layerView.queryExtent().then(function (response) {
                        // go to the extent of all the graphics in the layer view
                        view2.goTo(response.extent.expand(1.2));
                    });
                })
            });
        webmap = new WebMap({
            portalItem: {
                id: webmapID1
            }
        });

        view.map = webmap

        webmap2 = new WebMap({
            portalItem: {
                id: webmapID2
            }
        });

        view3.map = webmap2
        if ($(this).attr('value') == 'single') {
            $('#viewDiv2').hide()
            $('#viewDiv3').hide()
            $('#Sec1').hide()
            $('#Sec5').hide()
            $('#Sec6').hide()
            $('#viewDiv').show()
            $('#Sec2').show()
            $('#Sec3').show()
            $('#Sec4').show()
            apnArr = [];
            apnText = '';
            apnWhere = '';
            //FM.renderer = renderer;
            graphicsFM.removeAll();
         /*    $("#Sec2").css("pointer-events", "none");
            $("#Sec2").addClass("inActive");
            $("#Sec3").css("pointer-events", "none");
            $("#Sec3").addClass("inActive");
            $("#Sec4").css("pointer-events", "none");
            $("#Sec4").addClass("inActive"); */
            $("#Sec6").css("pointer-events", "none");
            $("#Sec6").addClass("inActive");
            $('#apnText').empty();
            $('#wsText').empty();
            $('#areaText').empty();
            $("#report").hide();
        }
        if ($(this).attr('value') == 'multi') {
            $('#viewDiv').hide()
            $('#viewDiv3').hide()
            $('#Sec2').hide()
            $('#Sec3').hide()
            $('#Sec4').hide()
            $('#viewDiv2').show()
            $('#Sec1').show()
            $('#Sec5').show()
            $('#Sec6').show()

        }
        if ($(this).attr('value') == 'water') {
            $('#viewDiv').hide()
            $('#viewDiv2').hide()
            $('#Sec1').hide()
            $('#Sec5').hide()
            $('#Sec6').hide()
            $('#viewDiv3').show()
            $('#Sec2').show()
            $('#Sec3').show()
            $('#Sec4').show()

        }
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
            if (result.features.length == 0) {
                $('#errModal').modal('show');
            } else {
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
            }).then(function(response) {
                var zoomView = {};
                zoomView = view2.extent.expand(1.2);
                view2.goTo(zoomView); 
          });
        }
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
    if (county == 'Alameda' || county == 'Contra Costa') {
        gpTaskALCC.submitJob(params).then(onTaskComplete, errBack, progTest);
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


function eventCheckBox() {
    let checkboxs = document.getElementsByName("mapList");
    for (let i = 0; i < checkboxs.length; i++) { //zero-based array
        checkboxs[i].checked = !checkboxs[i].checked;
    }
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