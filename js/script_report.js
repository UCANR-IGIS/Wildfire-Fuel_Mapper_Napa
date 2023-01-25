function createWhereText(params, type1) {
    params = params[0].split("")

    where = ''

    if (type1 == 'fc') {
        if (params[0] == 0) {
            where = where + "(Find('NO', fc, 0) > -1), 0, "
        }
    } else if (type1 == 'hp') {
        if (params[0] == 0) {
            where = where + "(Find('Y', hp, 0) > -1), 0, "
        }
    }
    else if (type1 == 'fm') {
        if (params[0] == 0) {
            where = where + "(Find('GR', fm, 0) > -1), 0, "
        }
        if (params[1] == 0) {
            where = where + "(Find('GS', fm, 0) > -1), 0, "
        }
        if (params[2] == 0) {
            where = where + "(Find('SH', fm, 0) > -1), 0, "
        }
        if (params[3] == 0) {
            where = where + "(Find('FS', fm, 0) > -1), 0, "
        }
        if (params[4] == 0) {
            where = where + "(Find('FR', fm, 0) > -1), 0, "
        }
        if (params[5] == 0) {
            where = where + "(Find('NB', fm, 0) > -1), 0, "
        }
    }

    return where
}

function createfmSQL(params) {
    params = params[0].split("")

    where = ''

    tCount = 0

    if (params[0] == 1) {
        if (tCount == 1) {
            where = where + " OR "
        }
        where = where + "Code LIKE 'GR%'"
        tCount = 1
    }
    if (params[1] == 1) {
        if (tCount == 1) {
            where = where + " OR "
        }
        where = where + "Code LIKE 'GS%'"
        tCount = 1
    }
    if (params[2] == 1) {
        if (tCount == 1) {
            where = where + " OR "
        }
        where = where + "Code LIKE 'SH%'"
        tCount = 1
    }
    if (params[3] == 1) {
        if (tCount == 1) {
            where = where + " OR "
        }
        where = where + "Code LIKE 'FS%'"
        tCount = 1
    }
    if (params[4] == 1) {
        if (tCount == 1) {
            where = where + " OR "
        }
        where = where + "Code LIKE 'FR%'"
        tCount = 1
    }
    if (params[5] == 1) {
        if (tCount == 1) {
            where = where + " OR "
        }
        where = where + "Code LIKE 'NB%'"
        tCount = 1
    }

    return where
}

function getparams(name) {
    var arr = []
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    } else {
        $.each(results, function (i, val) {
            arr.push(val.replace("?", ""))
        });
        //return decodeURI(results[1]) || 0;
        return arr
    }
}

var apn,
    apnText = '',
    apnList,
    apnArr = [],
    apnClean,
    acres,
    //fmText = "(Find('NB', fm, 0) > -1), 0, ",
    fmArr,
    fmArr2,
    fmCodes = [],
    fmJoin,
    fmSQL,
    vegArr,
    vegGroup,
    vegTable,
    vegTreatment,
    vegJoin,
    areaArr,
    totArea,
    fmGroup,
    wsVal,
    //fcText = "",
    fcArr,
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
    t1,
    treatText,
    streamVal,
    roadVal,
    buildVal,
    erodVal,
    totVal,
    priorVal,
    priorCode

require([
    "esri/Map",
    "esri/Graphic",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/layers/GraphicsLayer",
    "esri/layers/MapImageLayer",
    "esri/layers/VectorTileLayer",
    "esri/tasks/QueryTask",
    "esri/tasks/support/Query",
    "esri/tasks/IdentifyTask",
    "esri/tasks/support/IdentifyParameters",
    "dojo/domReady!"
], function (Map, Graphic, MapView, FeatureLayer, GraphicsLayer, MapImageLayer, VectorTileLayer, QueryTask, Query, IdentifyTask, IdentifyParameters) {
    var identifyTask = new IdentifyTask(),
        params = new IdentifyParameters()

    $("#viewDiv").css("pointer-events", "none");
    $("#viewDiv1").css("pointer-events", "none");
    $("#viewDiv2").css("pointer-events", "none");
    $("#viewDiv3").css("pointer-events", "none");

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    //urlParams = getparams(queryString);

    apns = urlParams.getAll('apn')
    wshed = urlParams.getAll('wshed')
    wsVal = "<b>Watershed Name:</b> " + wshed;

    // parse priority values for slider variables
    /* prior = urlParams.getAll('prior')
    prior = prior[0].split(".")
    sliderValRd = prior[0]
    sliderValBd = prior[2]
    sliderValEr = "0"
    sliderValSt = prior[1]
    sliderValSp = "0"*/

    dist = urlParams.getAll('dist')
    dist = dist[0].split(".")
    streamsVal = dist[0]
    roadsVal = dist[1]
    buildsVal = dist[2]

    //distText = "$feature.Dist_Hyd > " + streamsVal + " && $feature.Dist_Road > " + roadsVal + " && $feature.Dist_Build > " + buildsVal + ", 0, "
    //distSQL = "Dist_Hyd <= " + streamsVal + " OR Dist_Road <= " + roadsVal + " OR Dist_Build <= " + buildsVal

    distText = "($feature.Dist_Road > " + roadsVal + " && $feature.Dist_Build > " + buildsVal + "), 0, $feature.Dist_Hyd <= " + streamsVal + " , 0, "
    distSQL = "(Dist_Road <= " + roadsVal + " OR Dist_Build <= " + buildsVal + ") AND Dist_Hyd > " + streamsVal

    fmText = urlParams.getAll('fmText')
    fmSQL = createfmSQL(fmText)
    fmText = createWhereText(fmText, "fm")
    fcText = urlParams.getAll('fcText')
    fcText = createWhereText(fcText, "fc")
    hpText = urlParams.getAll('hpText')
    hpText = createWhereText(hpText, "hp")

    apnsWhere = "";
    apnsCount = 0;
    $.each(apns, function (i, val) {
        if (apnsCount == 0) {
            apnsWhere = "APN='" + val + "'"
            apnsCount = 1
        } else {
            apnsWhere = apnsWhere + " OR APN='" + val + "'"
        }
    });

    $("#slope").hide();
    $("#slopeVal").hide();
    $.getJSON("https://services.arcgis.com/0xnwbwUttaTjns4i/arcgis/rest/services/FMCodes/FeatureServer/0/query?where=1%3D1&objectIds=&time=&resultType=none&outFields=*&returnHiddenFields=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&sqlFormat=none&f=pjson&token=", function (data) {
        $.each(data.features, function (i, val) {
            fmCodes.push({
                fm: val.attributes.Code,
                name: val.attributes.Name
            });
        })
    });
    //sliderValues();

    var defaultRenderer = {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: {
            type: "simple-fill", // autocasts as new SimpleFillSymbol()
            color: [255, 255, 255, 0],
            outline: {
                width: 0
            }
        }
    }

    Parcels = new FeatureLayer({
        url: "https://services.arcgis.com/0xnwbwUttaTjns4i/ArcGIS/rest/services/Dry_Creek_Final/FeatureServer",
        layerId: 0,
        legendEnabled: false,
        title: "Parcels"
    });

    Parcels2 = new FeatureLayer({
        url: "https://services.arcgis.com/0xnwbwUttaTjns4i/ArcGIS/rest/services/Dry_Creek_Final/FeatureServer",
        layerId: 0,
        legendEnabled: false,
        title: "Parcels"
    });

    Parcels3 = new FeatureLayer({
        url: "https://services.arcgis.com/0xnwbwUttaTjns4i/ArcGIS/rest/services/Dry_Creek_Final/FeatureServer",
        layerId: 0,
        legendEnabled: false,
        title: "Parcels"
    });
    Parcels4 = new FeatureLayer({
        url: "https://services.arcgis.com/0xnwbwUttaTjns4i/ArcGIS/rest/services/Dry_Creek_Final/FeatureServer",
        layerId: 0,
        legendEnabled: false,
        title: "Parcels"
    });

    Roads = new FeatureLayer({
        url: "https://services.arcgis.com/0xnwbwUttaTjns4i/ArcGIS/rest/services/Dry_Creek_Final/FeatureServer",
        layerId: 1,
        legendEnabled: false,
        minScale: 80000,
        title: "Roads"
    })

    Streams = new FeatureLayer({
        url: "https://services.arcgis.com/0xnwbwUttaTjns4i/ArcGIS/rest/services/Dry_Creek_Final/FeatureServer",
        layerId: 2,
        legendEnabled: false,
        minScale: 80000,
        title: "Streams"
    })

    Structures = new FeatureLayer({
        url: "https://services.arcgis.com/0xnwbwUttaTjns4i/ArcGIS/rest/services/Dry_Creek_Final/FeatureServer",
        layerId: 3,
        legendEnabled: false,
        minScale: 80000,
        title: "Structures"
    })

    Watersheds = "https://hydro.nationalmap.gov/arcgis/rest/services/wbd/MapServer";

    VegGen = new FeatureLayer({
        url: "https://services.arcgis.com/0xnwbwUttaTjns4i/ArcGIS/rest/services/Dry_Creek_Final/FeatureServer",
        layerId: 11,
        legendEnabled: false,
        opacity: 0.5,
        renderer: defaultRenderer
    });

    FuelModel = new FeatureLayer({
        url: "https://services.arcgis.com/0xnwbwUttaTjns4i/ArcGIS/rest/services/Dry_Creek_Final/FeatureServer",
        layerId: 10,
        legendEnabled: false,
        opacity: 0.5,
        renderer: defaultRenderer
    });

    VegMap = new FeatureLayer({
        url: "https://services.arcgis.com/0xnwbwUttaTjns4i/ArcGIS/rest/services/Dry_Creek_Final/FeatureServer",
        layerId: 12,
        legendEnabled: false,
        opacity: 0.5,
        renderer: defaultRenderer
    });

    Streams.renderer = {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: {
            type: "simple-line", // autocasts as new SimpleFillSymbol()
            color: "blue",
            //color: [185, 228, 255, 1],
            width: 1

        }
    }

    Roads.renderer = {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: {
            type: "simple-line", // autocasts as new SimpleFillSymbol()
            color: [105, 105, 105, 1],
            width: 1

        }
    }

    Parcels.renderer = {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: {
            type: "simple-fill", // autocasts as new SimpleFillSymbol()
            color: [255, 255, 255, 0],
            outline: {
                width: 1.5,
                color: [255, 255, 255, 0.7]
            }
        }
    }

    Parcels2.renderer = {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: {
            type: "simple-fill", // autocasts as new SimpleFillSymbol()
            color: [255, 255, 255, 0],
            outline: {
                width: 1.5,
                color: [255, 255, 255, 0.7]
            }
        }
    }

    Parcels3.renderer = {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: {
            type: "simple-fill", // autocasts as new SimpleFillSymbol()
            color: [255, 255, 255, 0],
            outline: {
                width: 1.5,
                color: [255, 255, 255, 0.7]
            }
        }
    }

    Parcels4.renderer = {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: {
            type: "simple-fill", // autocasts as new SimpleFillSymbol()
            color: [255, 255, 255, 0],
            outline: {
                width: 1.5,
                color: [255, 255, 255, 0.7]
            }
        }
    }


    graphicsFM = new GraphicsLayer;
    graphicsFM1 = new GraphicsLayer;
    graphicsFM2 = new GraphicsLayer;
    graphicsFM3 = new GraphicsLayer;

    FM = new FeatureLayer({
        url: "https://services.arcgis.com/0xnwbwUttaTjns4i/ArcGIS/rest/services/Dry_Creek_Final/FeatureServer/",
        definitionExpression: "APN = '0'",
        layerId: 10,
        legendEnabled: false,
        //renderer: renderer,
        title: "Parcels"
    });



    var map = new Map({
        basemap: "topo-vector",
        layers: [FM, graphicsFM2]
    });

    var map2 = new Map({
        basemap: "topo-vector",
        layers: [VegGen, graphicsFM]
    });
    var map3 = new Map({
        basemap: "topo-vector",
        layers: [VegMap, graphicsFM3]
    });
    var map1 = new Map({
        basemap: "topo-vector",
        layers: [FuelModel, graphicsFM1]
    });

    var view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-123.038959, 38.732321],
        zoom: 11,
        ui: {
            components: [] //"attribution"]
        }
    });

    var view1 = new MapView({
        container: "viewDiv1", // Reference to the scene div created in step 5
        map: map1,
        center: [-123.038959, 38.732321],
        zoom: 11,
        ui: {
            components: [] //"attribution"]
        }
    });

    var view2 = new MapView({
        container: "viewDiv2", // Reference to the scene div created in step 5
        map: map2,
        center: [-123.038959, 38.732321],
        zoom: 11,
        ui: {
            components: [] //"attribution"]
        }
    });

    var view3 = new MapView({
        container: "viewDiv3", // Reference to the scene div created in step 5
        map: map3,
        center: [-123.038959, 38.732321],
        zoom: 11,
        ui: {
            components: [] //"attribution"]
        }
    });

    view2.when(function () {

        view2.on("click", function (event) {
            //executeIdentifyTask(event);
            //executeParcelQuery(event);
            $("#Sec2").css("pointer-events", "auto");
            $("#Sec2").removeClass("inActive");


        });

        identifyTask.url = Watersheds;


        params.tolerance = 3;
        params.layerIds = [5];
        params.layerOption = "all";
        params.width = view.width;
        params.height = view.height;
    });

    function executeIdentifyTask(event) {
        $.ajaxSetup({
            async: false
        });
        wsVal = '';
        // Set the geometry to the location of the view click
        params.geometry = event.mapPoint;
        params.mapExtent = view.extent;

        // This function returns a promise that resolves to an array of features
        // A custom popupTemplate is set for each feature based on the layer it
        // originates from
        identifyTask
            .execute(params)
            .then(function (response) {
            var results = response.results;
            wsVal += "<b>Watershed Name:</b> " + results[0].feature.attributes.Name;
        })
    };

    parcelQueryTask = new QueryTask({
        url: "https://services.arcgis.com/0xnwbwUttaTjns4i/ArcGIS/rest/services/Dry_Creek_Final/FeatureServer/0"
    });
    parcelQuery = new Query();
    parcelQuery.returnGeometry = true;
    parcelQuery.outFields = ["*"];

    fmQueryTask = new QueryTask({
        url: "https://services.arcgis.com/0xnwbwUttaTjns4i/ArcGIS/rest/services/Dry_Creek_Final/FeatureServer/10/query?where=APN+%3D+'139-100-014'"
    });
    fmQuery = new Query();
    fmQuery.returnGeometry = true;
    fmQuery.outFields = ["*"];

    function executeParcelQuery() {
        $.ajaxSetup({
            async: false
        });
        parcelQuery.where = apnsWhere
        parcelQueryTask.execute(parcelQuery).then(function (result) {

            $.each(result.features, function (i, val) {
                var graphic = new Graphic({
                    geometry: val.geometry,
                    symbol: {
                        type: "simple-fill", // autocasts as new SimpleFillSymbol()
                        color: [255, 255, 255, 0],
                        outline: {
                            width: 2,
                            color: [0, 0, 0, 1]
                        }
                    }
                });
                var graphic1 = new Graphic({
                    geometry: val.geometry,
                    symbol: {
                        type: "simple-fill", // autocasts as new SimpleFillSymbol()
                        color: [255, 255, 255, 0],
                        outline: {
                            width: 2,
                            color: [0, 0, 0, 1]
                        }
                    }
                });
                var graphic2 = new Graphic({
                    geometry: val.geometry,
                    symbol: {
                        type: "simple-fill", // autocasts as new SimpleFillSymbol()
                        color: [255, 255, 255, 0],
                        outline: {
                            width: 2,
                            color: [0, 0, 0, 1]
                        }
                    }
                });
                var graphic3 = new Graphic({
                    geometry: val.geometry,
                    symbol: {
                        type: "simple-fill", // autocasts as new SimpleFillSymbol()
                        color: [255, 255, 255, 0],
                        outline: {
                            width: 2,
                            color: [0, 0, 0, 1]
                        }
                    }
                });
                //Add graphic to the map graphics layer.
                graphicsFM.add(graphic);
                graphicsFM1.add(graphic1);
                graphicsFM2.add(graphic2);
                graphicsFM3.add(graphic3);
            });

            view.goTo({
                target: graphicsFM.graphics
            });

            view1.goTo({
                target: graphicsFM.graphics
            });

            view2.goTo({
                target: graphicsFM.graphics
            });

            view3.goTo({
                target: graphicsFM.graphics
            });

            apn = result.features[0].attributes.APN;
            apnArr.push(result.features[0].attributes.APN);
            acres = result.features[0].attributes.Acres;
            fmArr = '';
            fmArr2 = [];
            vegArr = [];
            vegFullArr = [];
            areaArr = [];
            fmGroup = [];
            vegGroup = [];
            apnClean = [];
            slopeCutoffArr = [];
            parcelGroup = [];
            statsArr = [];
            slopeArr = [];
            selectParcel = [];

            apnClean = eliminateDuplicates(apns);
            apnCheck();


            $.each(apnClean, function (i, val) {
                $.getJSON("https://services.arcgis.com/0xnwbwUttaTjns4i/ArcGIS/rest/services/Dry_Creek_Final/FeatureServer/11/query?where=APN+%3D+'" + val + "'&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnHiddenFields=false&returnGeometry=false&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=", function (data) {
                    $.each(data.features, function (i, val) {
                        if (val.attributes.LF_FOREST == 'Herbaceous') {
                            val.attributes.LF_Class = 0;
                        } else if (val.attributes.LF_FOREST == 'Herbaceous Wetland') {
                            val.attributes.LF_Class = 1;
                        } else if (val.attributes.LF_FOREST == 'Shrub') {
                            val.attributes.LF_Class = 2;
                        } else if (val.attributes.LF_FOREST == 'Riparian Shrub') {
                            val.attributes.LF_Class = 3;
                        } else if (val.attributes.LF_FOREST == 'Non-native Shrub') {
                            val.attributes.LF_Class = 4;
                        } else if (val.attributes.LF_FOREST == 'Hardwood Forest') {
                            val.attributes.LF_Class = 5;
                        } else if (val.attributes.LF_FOREST == 'Mixed Conifer-Hardwood Forest') {
                            val.attributes.LF_Class = 6;
                        } else if (val.attributes.LF_FOREST == 'Conifer Forest') {
                            val.attributes.LF_Class = 7;
                        } else if (val.attributes.LF_FOREST == 'Riparian Forest') {
                            val.attributes.LF_Class = 8;
                        } else if (val.attributes.LF_FOREST == 'Non-native Forest') {
                            val.attributes.LF_Class = 9;
                        } else if (val.attributes.LF_FOREST == 'Forest Sliver') {
                            val.attributes.LF_Class = 10;
                        } else if (val.attributes.LF_FOREST == 'Barrren and Sparsely Vegetated') {
                            val.attributes.LF_Class = 11;
                        } else if (val.attributes.LF_FOREST == 'Developed') {
                            val.attributes.LF_Class = 12;
                        } else if (val.attributes.LF_FOREST == 'Agriculture') {
                            val.attributes.LF_Class = 13;
                        } else if (val.attributes.LF_FOREST == 'Water') {
                            val.attributes.LF_Class = 14;
                        } else if (val.attributes.LF_FOREST == 'Aquatic Vegetation') {
                            val.attributes.LF_Class = 15;
                        }
                        vegArr.push({
                            VegType: val.attributes.LF_FOREST,
                            b: val.attributes.Acres,
                            c: val.attributes.LF_Class
                        });
                    });
                });
                $.getJSON("https://services.arcgis.com/0xnwbwUttaTjns4i/ArcGIS/rest/services/Dry_Creek_Final/FeatureServer/12/query?where=APN+%3D+'" + val + "'&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnHiddenFields=false&returnGeometry=false&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=", function (data) {
                    $.each(data.features, function (i, val) {
                        t = val.attributes.Abbrv
                        t = t.replace(" ", "_")
                        t = t.replace(".", "_")
                        t = t.toLowerCase()
                        vegFullArr.push({
                            MAP_CLASS: val.attributes.MAP_CLASS,
                            Abbrv: t,
                            b: val.attributes.Acres
                        });
                    });
                });
            });
            vegGroup = alasql('SELECT VegType , SUM (b) AS b, c FROM ? GROUP BY VegType, c ORDER BY c ASC', [vegArr]);
            vegFullGroup = alasql('SELECT Abbrv, MAP_CLASS , SUM (b) AS b FROM ? GROUP BY Abbrv, MAP_CLASS ORDER BY MAP_CLASS ASC', [vegFullArr]);




            fmQuery.where = apnWhere;
            areaArr = [];
            var grArr = [];

            fmQueryTask.execute(fmQuery).then(function (result) {


                $.each(result.features, function (i, val) {
                    var graphic = new Graphic({
                        attributes: val.attributes,
                        geometry: val.geometry
                    });
                    //Add graphic to the map graphics layer.
                    grArr.push(graphic);

                    areaArr.push(val.attributes.Area);
                    //Strip out riparian classes
                    if (val.attributes.FuelModTxt.length > 3) {
                        val.attributes.FuelModTxt = val.attributes.FuelModTxt.replace("r", "");
                    }
                    if (val.attributes.Slope_Mean < 30) {
                        val.attributes.slopeCutoff = "< 30%";
                        val.attributes.ltArea = val.attributes.Area
                    } else {
                        val.attributes.slopeCutoff = "> 30%";
                        val.attributes.gtArea = val.attributes.Area
                    }
                    if (val.attributes.FM_Group == "GR") {
                        val.attributes.GroupText = "Grass"
                        val.attributes.TypeOrder = 1
                    }
                    if (val.attributes.FM_Group == "GS") {
                        val.attributes.GroupText = "Grass-Shrub"
                        val.attributes.TypeOrder = 2
                    }
                    if (val.attributes.FM_Group == "SH") {
                        val.attributes.GroupText = "Shrub"
                        val.attributes.TypeOrder = 3
                    }
                    if (val.attributes.FM_Group == "FS") {
                        val.attributes.GroupText = "Forest-Shrub"
                        val.attributes.TypeOrder = 4
                    }
                    if (val.attributes.FM_Group == "FR") {
                        val.attributes.GroupText = "Forest"
                        val.attributes.TypeOrder = 5
                    }
                    if (val.attributes.FM_Group == "NB") {
                        val.attributes.GroupText = "Non-Burnable"
                        val.attributes.TypeOrder = 6
                    }
                    selectParcel.push(val.attributes);

                });
                FM.definitionExpression = apnWhere;

                //fmJoin = alasql('SELECT * FROM ? selectParcel JOIN ? vegTreatment ON selectParcel.FuelModTxt = vegTreatment.Code ORDER BY vegTreatment.Code', [selectParcel, vegTreatment]);

                parcelGroup = alasql('SELECT FuelModTxt AS Code, FM_Group AS FMG, GroupText AS GroupDesc, FIRST(TypeOrder) AS TypeOrder, SUM (Area) as Area FROM ? GROUP BY FuelModTxt, FM_Group, GroupText ORDER BY Code', [selectParcel]);
                //parcelGroup = alasql('SELECT FuelModTxt AS Code, FM_Group AS FMG, GroupText AS GroupDesc, slopeCutoff AS Slope, SUM (Area) as Area FROM ? GROUP BY FuelModTxt, FM_Group, GroupText, slopeCutoff ORDER BY Code', [selectParcel]);
                //parcelGroupLF = alasql('SELECT FuelModTxt AS Code, LFClass, slopeCutoff AS Slope, SUM (Area) as Area FROM ? GROUP BY FuelModTxt, LFClass, slopeCutoff ORDER BY Code', [selectParcel]);
                statsArr = alasql('SELECT Round(MAX (Dist_Hyd), 2) as HydMax, Round(MAX (Dist_Road), 2) as RoadMax, Round(MAX (Dist_Build), 2) as BuildMax, Round(MAX (Slope_Mean), 2) as SlopeMax FROM ?', [selectParcel]);
                /*statsArr = alasql('SELECT Round(MIN (Dist_Hyd_Min), 2) as HydMin, Round(AVG (Dist_Hyd_Mean), 2) as HydMean, Round(MAX (Dist_Hyd_Max), 2) as HydMax, Round(MAX (Dist_Hyd_Mean), 2) as HydMax, Round(MIN (Dist_Road_Min), 2) as RoadMin, Round(AVG (Dist_Road_Mean), 2) as RoadMean, Round(MAX (Dist_Road_Max), 2) as RoadMax, Round(MAX (Dist_Road_Mean), 2) as RoadMax, Round(MIN (Dist_Build_Min), 2) as BuildMin, Round(AVG (Dist_Build_Mean), 2) as BuildMean, Round(MAX (Dist_Build_Max), 2) as BuildMax, Round(MAX (Dist_Build_Mean), 2) as BuildMax, Round(MIN (Erod_Min), 2) as ErodMin, Round(AVG (Erod_Mean), 2) as ErodMean, Round(MAX (Erod_Max), 2) as ErodMax, Round(MAX (Erod_Mean), 2) as ErodMax, Round(MAX (Slope_Mean), 2) as SlopeMax  FROM ?', [selectParcel]);*/
                slopeArr = alasql('SELECT slopeCutoff, ROUND(SUM (Area), 2) AS Area FROM ? GROUP BY slopeCutoff', [selectParcel]);


                setRenderer();
                updateTable();
            });

        })
    }

    executeParcelQuery();
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

//Probably best just to copy and paste this whole function
function updateTable() {
    hydroArr = '';
    roadArr = '';
    erodeArr = '';
    fmArr = '';
    vegTable = '';
    slopeText = '';
    costTable = '';
    treatText = '';
    fullArr = '';
    layerCounter = 1;
    layerCounter2 = 1;
    totArea = '';
    apnList = '';
    fmClass = [];

    //vegTreatment = alasql('SELECT vegTreatment.*, fmCodes.name as VegType FROM ? vegTreatment JOIN ? fmCodes ON vegTreatment.Code = fmCodes.fm', [vegTreatment, fmCodes]);

    fmJoin = alasql('SELECT * FROM ? parcelGroup JOIN ? vegTreatment USING Code ORDER BY Code', [parcelGroup, vegTreatment]);

    //vegDesc = alasql('SELECT FMG, GroupDesc, FIRST(Area) AS Area, Treatment, TreatmentDesc FROM ? GROUP BY FMG, GroupDesc, Treatment, TreatmentDesc ', [fmJoin]);

    //vegTreatment = alasql('SELECT * FROM ? ORDER BY FMG, Slope', [fmJoin]);

    treatVeg = alasql('SELECT Treatment, TreatmentDesc FROM ? ORDER BY Treatment', [vegTreatment]);

    $.each(selectParcel, function (i, val) {
        /*streamVal = (1 - (val.Dist_Hyd / statsArr[0].HydMax)) * sliderVal2;
        roadVal = (1 - (val.Dist_Road / statsArr[0].RoadMax)) * sliderVal;
        erodVal = (val.Erod_Mean / statsArr[0].ErodMax) * sliderVal4;
        buildVal = (1 - (val.Dist_Build / statsArr[0].BuildMax)) * sliderVal5;
        totVal = streamVal + roadVal + erodVal + buildVal;
        priorVal = (totVal / sliderTotal) * 100;

        if (priorVal <= 25) {
            priorCode = 1;
        } else if (priorVal > 25 && priorVal <= 50) {
            priorCode = 2;
        } else if (priorVal > 50 && priorVal <= 75) {
            priorCode = 3;
        } else {
            priorCode = 4;
        }*/

        fmClass.push({
            Code: val.FM_Group,
            GroupDesc: val.GroupText,
            ltArea: val.ltArea,
            gtArea: val.gtArea,
            Area: val.Area,
            //Slope: val.slopeCutoff,
            Dist_Road: val.Dist_Road,
            Dist_Hyd: val.Dist_Hyd,
            Dist_Build: val.Dist_Build
        });
    });

    vegCount = 0;
    vegTreatTest = [];
    for (i in fmJoin) {
        if (vegCount == 0) {
            vegCount = 1
            vegType = fmJoin[i].Code
            veg = fmJoin[i].FMG
            area = fmJoin[i].Area
            //vegSlope = vegTreatment[i].Slope
            vegTreat = fmJoin[i].Treatment
            vegCode = fmJoin[i].GroupDesc
            vegOrder = fmJoin[i].TypeOrder
        } else {
            if ((vegType == fmJoin[i].Code)) {
                vegTreat = vegTreat + "<br>" + fmJoin[i].Treatment
            } else {
                vegTreatTest.push({
                    VegType: vegType,
                    VegGroup : veg,
                    Area: area,
                    //Slope: vegSlope,
                    Treatment: vegTreat,
                    Code: vegCode,
                    VegOrder: vegOrder
                })
                vegType = fmJoin[i].Code
                veg = fmJoin[i].FMG
                area = fmJoin[i].Area
                //vegSlope = vegTreatment[i].Slope
                vegTreat = fmJoin[i].Treatment
                vegCode = fmJoin[i].GroupDesc
                vegOrder = fmJoin[i].TypeOrder
            }
        }
    }
    vegTreatTest.push({
        VegType: vegType,
        VegGroup : veg,
        Area: area,
        //Slope: vegSlope,
        Treatment: vegTreat,
        Code: vegCode,
        VegOrder: vegOrder
    })

    vegCount = 0;
    for (i in treatVeg) {
        if (vegCount == 0) {
            vegCount = 1
            vegType = treatVeg[i].Treatment
            treatText += '<h4>' + treatVeg[i].Treatment + '</h4><p4>' + treatVeg[i].TreatmentDesc + '</p4>'
        } else {
            if (vegType == treatVeg[i].Treatment) {
                vegCount += 1
            } else {
                vegType = treatVeg[i].Treatment
                treatText += '<h4>' + treatVeg[i].Treatment + '</h4><p4>' + treatVeg[i].TreatmentDesc + '</p4>'
            }
        }
    }

    vegTreatTest = alasql('SELECT VegGroup, FIRST(VegOrder) AS VegOrder, SUM (Area) AS Area, FIRST(Treatment) AS Treatment, FIRST(Code) AS Code FROM ? GROUP BY VegGroup ORDER BY VegOrder ASC', [vegTreatTest]);

    vegCount = 0;
    for (i in vegTreatTest) {
        if (vegCount == 0) {
            vegCount = 1
            vegType = vegTreatTest[i].VegGroup;
            vegTable += '<tr><td><span class="legend fuel ' + vegTreatTest[i].VegGroup.split(" ").join("_") + ' _2">&#9608;</span>' + vegTreatTest[i].Code + '</td><td align="right"> ' + vegTreatTest[i].Area.toFixed(2) + '</td><td>' + vegTreatTest[i].Treatment + '</td></tr>';
        } else {
            if (vegType == vegTreatTest[i].VegGroup) {
                vegCount += 1;
            } else {
                vegType = vegTreatTest[i].VegGroup;
                vegTable += '<tr><td><span class="legend fuel ' + vegTreatTest[i].VegGroup.split(" ").join("_") + ' _2">&#9608;</span>' + vegTreatTest[i].Code + '</td><td align="right"> ' + vegTreatTest[i].Area.toFixed(2) + '</td><td>' + vegTreatTest[i].Treatment + '</td></tr>';
            }
        }
    }

    fmGroup = alasql('SELECT Code, GroupDesc, PriorClass, Dist_Hyd, Dist_Road, Dist_Build, SUM(ltArea) AS ltArea, SUM(gtArea) AS gtArea FROM ? GROUP BY Code, GroupDesc, PriorClass, Dist_Hyd, Dist_Road, Dist_Build', [fmClass]);

    //fmPriorJoin = alasql('SELECT fmGroup.Code, fmClass.GroupDesc, fmGroup.PriorClass, fmGroup.Dist_Hyd, fmGroup.Dist_Road, fmGroup.Dist_Build, MAX(fmGroup.ltArea) AS ltArea, MAX(fmGroup.gtArea) AS gtArea FROM ? fmGroup LEFT JOIN ? fmClass ON fmGroup.Code = fmClass.Code GROUP BY fmGroup.Code, fmClass.GroupDesc, fmGroup.PriorClass, fmGroup.Dist_Hyd, fmGroup.Dist_Road, fmGroup.Dist_Build ORDER BY fmGroup.Code, fmGroup.PriorClass', [fmGroup, fmClass]);

    fmDist = alasql('SELECT Code, GroupDesc, SUM(ltArea) AS ltArea, SUM(gtArea) AS gtArea FROM ? WHERE ' + distSQL + ' GROUP BY Code, GroupDesc', [fmGroup]);

    fmPrior = alasql('SELECT * FROM ? WHERE ' + fmSQL + '', [fmDist]);

    $.each(apnClean, function (i, val) {
        if (layerCounter == 1) {
            apnList += "<b>APN(s):</b> " + val;
            layerCounter += 1;
        } else {
            apnList += ", " + val;
        }
    });

    $.each(vegGroup, function (i, val) {

        fmArr += '<tr><td><span class="legend lifeform ' + val.VegType.split(" ").join("_") + ' _2">&#9608;</span>' + val.VegType + '</td><td align="right"> ' + (val.b).toFixed(2) + '</td></tr>';

    });

    $.each(vegFullGroup, function (i, val) {

        fullArr += '<tr><td><span class="legend mapclass ' + val.Abbrv.split(" ").join("_") + ' _2">&#9608;</span>' + val.MAP_CLASS + '</td><td align="right"> ' + (val.b).toFixed(2) + '</td></tr>';

    });

    $.each(fmPrior, function (i, val) {

        costTable += '<tr><td><span class="legend fuel ' + val.Code.split(" ").join("_") + ' _2">&#9608;</span>' + val.GroupDesc + '</td><td align="right"> ' + (val.ltArea).toFixed(2) + '</td><td align="right">' + (val.gtArea).toFixed(2) + '</td><td align="right">' + (val.ltArea + val.gtArea).toFixed(2) + '</td></tr>';

    });

    $.each(slopeArr, function (i, val) {
        if (layerCounter2 == 1) {
            slopeText += "<b>Slope Classes:</b></br> " + val.slopeCutoff + ": " + val.Area + "</br>";
            layerCounter2 += 1;
        } else {
            slopeText += val.slopeCutoff + ": " + val.Area;
        }
    });

    totArea += '<b>Total Area:</b> ' + (areaArr.reduce(function (a, b) {
        return a + b;
    }, 0)).toFixed(2) + ' acres';
    /* hydroArr += '<b>Distance to Streams (feet)</b><br>Min: ' + statsArr[0].HydMin + '<br>Max: ' + statsArr[0].HydMax + '<br>Mean: ' + statsArr[0].HydMean;
    roadArr += '<b>Distance to Roads (feet)</b><br>Min: ' + statsArr[0].RoadMin + '<br>Max: ' + statsArr[0].RoadMax + '<br>Mean: ' + statsArr[0].RoadMean;
    erodeArr += '<b>Soil Erodibility Factor</b><br>Min: ' + statsArr[0].ErodMin / 100 + '<br>Max: ' + statsArr[0].ErodMax / 100 + '<br>Mean: ' + statsArr[0].ErodMean / 100;
*/
    $('#apnText').empty();
    $('#apnText').append(apnList);
    $('#wsText').empty();
    $('#wsText').append(wsVal);
    $('#areaText').empty();
    $('#areaText').append(totArea);
    $('#dataTable tbody tr').remove();
    $('#dataTable tbody').append(fmArr);
    $('#dataTable2 tbody tr').remove();
    $('#dataTable2 tbody').append(vegTable);
    $('#dataTable4 tbody tr').remove();
    $('#dataTable4 tbody').append(fullArr);
    $('#treatText').empty();
    $('#treatText').append(treatText);
    $('#dataTable3 tbody tr').remove();
    $('#dataTable3 tbody').append(costTable);
    /* $('#hydroText').empty();
    $('#hydroText').append(hydroArr);
    $('#roadText').empty();
    $('#roadText').append(roadArr);
    $('#erodeText').empty();
    $('#erodeText').append(erodeArr);
    $('#slopeText').empty();
    $('#slopeText').append(slopeText);*/
}

function apnCheck() {
    apnText = '';
    apnWhere = '';
    layerCounter = 1;
    $.each(apnClean, function (i, val) {
        if (layerCounter == 1) {
            apnText += "parcelAPN != '" + val + "' "
            apnWhere += "APN = '" + val + "' "
            layerCounter += 1
        } else {
            apnText += "&& parcelAPN != '" + val + "' "
            apnWhere += "OR APN = '" + val + "' "
        }
    })
}

function setRenderer() {
    var renderer3 = {
        type: "unique-value", // autocasts as new UniqueValueRenderer()
        field: "Abbrv",
        uniqueValueInfos: [{
            value: "ABGR",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                color: "#3DC90A",
                outline: {
                    width: 0
                }
            }
        }, {
            value: "ACMA",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                color: "#9FA681",
                outline: {
                    width: 0
                }
            }
        }, {
            value: "ADFA",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                color: "#D19F58",
                outline: {
                    width: 0
                }
            }
        }, {
            value: "AECA",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                color: "#526941",
                outline: {
                    width: 0
                }
            }
        }, {
            value: "ALER",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                color: "#F5DFA6",
                outline: {
                    width: 0
                }
            }
        }, {
            value: "AMAR",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                color: "#FCF5E3",
                outline: {
                    width: 0
                }
            }
        }, {
            value: "Ann Crop",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                color: "#CA47DE",
                outline: {
                    width: 0
                }
            }
        }, {
            value: "AR Spp.",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                color: "#CCA806",
                outline: {
                    width: 0
                }
            }
        }, {
            value: "ARBA",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                color: "#BD5002",
                outline: {
                    width: 0
                }
            }
        }, {
            value: "ARME",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                color: "#9AC77F",
                outline: {
                    width: 0
                }
            }
        }, {
            value: "ARVI",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                color: "#CC7F04",
                outline: {
                    width: 0
                }
            }
        }, {
            value: "BAPI",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                color: "#995D1D",
                outline: {
                    width: 0
                }
            }
        }, {
            value: "Barren",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                color: "#FFFFFF",
                outline: {
                    width: 0
                }
            }
        }, {
            value: "Bluff Scr",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                color: "#99734D",
                outline: {
                    width: 0
                }
            }
        }, {
            value: "CA Grass",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                color: "#E6CE9C",
                outline: {
                    width: 0
                }
            }
        }, {
            value: "CANU",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                color: "#FCFB9F",
                outline: {
                    width: 0
                }
            }
        }, {
            value: "CASE",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#36CCE0"
            }
        }, {
            value: "CECU",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#E3AD42"
            }
        }, {
            value: "CEOL",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#E6AB37"
            }
        }, {
            value: "CETH",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#E6AE3E"
            }
        }, {
            value: "Coast Grass",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#FCEFCF"
            }
        }, {
            value: "COCO",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#B87844"
            }
        }, {
            value: "Dev",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#828282"
            }
        }, {
            value: "dry Per grass",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#E6DFAC"
            }
        }, {
            value: "Dune mat",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#E8D690"
            }
        }, {
            value: "ERLU",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#A16908"
            }
        }, {
            value: "EU Spp.",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#93DE23"
            }
        }, {
            value: "Float",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#2FB2DE"
            }
        }, {
            value: "For Sliv",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#004D0D"
            }
        }, {
            value: "GARU",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#9C4A08"
            }
        }, {
            value: "Hay",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#B37DA3"
            }
        }, {
            value: "HEMC",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#A3F711"
            }
        }, {
            value: "HEMN",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#04B504"
            }
        }, {
            value: "HESA",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#0BA122"
            }
        }, {
            value: "Irr Pas",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#B54A9C"
            }
        }, {
            value: "JUAR",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#3292CF"
            }
        }, {
            value: "Mar Chap",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#9E8529"
            }
        }, {
            value: "Marsh",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#4DB7D1"
            }
        }, {
            value: "MECA",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#EBE9A2"
            }
        }, {
            value: "Mes Chap",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#E3883D"
            }
        }, {
            value: "NNF",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#00EB71"
            }
        }, {
            value: "NNS",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#DCFA16"
            }
        }, {
            value: "NODE",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#73945C"
            }
        }, {
            value: "Nursery",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#B76FE3"
            }
        }, {
            value: "Orchard",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#DE83D8"
            }
        }, {
            value: "Per Ag",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#DB63C9"
            }
        }, {
            value: "PIAT",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#3C9127"
            }
        }, {
            value: "PIL",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#91C95D"
            }
        }, {
            value: "PIMU",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#6DB34B"
            }
        }, {
            value: "PIP",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#5B8735"
            }
        }, {
            value: "PIQU",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#66AD47"
            }
        }, {
            value: "PIRA",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#40DB02"
            }
        }, {
            value: "POFR",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#00B392"
            }
        }, {
            value: "PSME",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#006100"
            }
        }, {
            value: "PSME-NODE",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#0BB505"
            }
        }, {
            value: "QU Spp.",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#874D00"
            }
        }, {
            value: "QUAG",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#9C4600"
            }
        }, {
            value: "QUCH",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#A35C50"
            }
        }, {
            value: "QUDO",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#5E6100"
            }
        }, {
            value: "QUDU",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#D4966A"
            }
        }, {
            value: "QUGA",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#875600"
            }
        }, {
            value: "QUKE",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#DE775F"
            }
        }, {
            value: "QULO",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#9E4A33"
            }
        }, {
            value: "QUWIS",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#A38107"
            }
        }, {
            value: "QUWIT",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#615600"
            }
        }, {
            value: "Rip SW Scrub",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#00F2C6"
            }
        }, {
            value: "Rip SW Wood",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#00997D"
            }
        }, {
            value: "Rip Van For",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#008068"
            }
        }, {
            value: "Rip Van Scrub",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#00D9B1"
            }
        }, {
            value: "Road",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#828282"
            }
        }, {
            value: "RUAR",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#BD6604"
            }
        }, {
            value: "Salt Marsh",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#64ADCC"
            }
        }, {
            value: "SESE",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#008717"
            }
        }, {
            value: "Stock",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#316BD6"
            }
        }, {
            value: "Tidal",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#4F77DB"
            }
        }, {
            value: "TODI",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#BF8630"
            }
        }, {
            value: "UMCA",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#758060"
            }
        }, {
            value: "Urban",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#828282"
            }
        }, {
            value: "Vernal",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#71A8E3"
            }
        }, {
            value: "Vineyard",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#8C41BA"
            }
        }, {
            value: "Water",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                outline: {
                    width: 0
                },
                color: "#004DA8"
            }
        }]
    };
    renderer3.visualVariables = [
        {
            type: "opacity",
            valueExpression: apnFilter(),
            valueExpressionTitle: "Share of registered voters comprising the dominant party",
            stops: [
                {
                    value: 0,
                    opacity: 0,
                    label: "< 33%"
                },
                {
                    value: 1,
                    opacity: 1,
                    label: "< 33%"
                }]

        }];

    var renderer = {
        type: "unique-value", // autocasts as new UniqueValueRenderer()
        field: "LF_FOREST",
        uniqueValueInfos: [{
            value: "Forest Sliver",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                color: "#5ee683",
                outline: {
                    width: 0
                }
            }
        }, {
            value: "Water",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                color: "#004DA8",
                outline: {
                    width: 0
                }
            }
        }, {
            value: "Herbaceous Wetland",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                color: "#4DB7D1",
                outline: {
                    width: 0
                }
            }
        }, {
            value: "Riparian Shrub",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                color: "#00F2C6",
                outline: {
                    width: 0
                }
            }
        }, {
            value: "Developed",
            symbol: {
                type: "simple-fill",
                color: "#828282",
                outline: {
                    width: 0
                }
            }
        }, {
            value: "Mixed Conifer-Hardwood Forest",
            symbol: {
                type: "simple-fill",
                color: "#f765a7",
                outline: {
                    width: 0
                }
            }
        }, {
            value: "Hardwood Forest",
            symbol: {
                type: "simple-fill",
                color: "#00a12b",
                outline: {
                    width: 0
                }
            }
        }, {
            value: "Conifer Forest",
            symbol: {
                type: "simple-fill",
                color: "#004a14",
                outline: {
                    width: 0
                }
            }
        }, {
            value: "Barrren and Sparsely Vegetated",
            symbol: {
                type: "simple-fill",
                color: "#ffffff",
                outline: {
                    width: 0
                }
            }
        }, {
            value: "Riparian Forest",
            symbol: {
                type: "simple-fill",
                color: "#00B392",
                outline: {
                    width: 0
                }
            }
        }, {
            value: "Agriculture",
            symbol: {
                type: "simple-fill",
                color: "#8c41ba",
                outline: {
                    width: 0
                }
            }
        }, {
            value: "Aquatic Vegetation",
            symbol: {
                type: "simple-fill",
                color: "#2FB2DE",
                outline: {
                    width: 0
                }
            }
        }, {
            value: "Shrub",
            symbol: {
                type: "simple-fill",
                color: "#995D1D",
                outline: {
                    width: 0
                }
            }
        }, {
            value: "Non-native Shrub",
            symbol: {
                type: "simple-fill",
                color: "#DCFA16",
                outline: {
                    width: 0
                }
            }
        }, {
            value: "Non-native Forest",
            symbol: {
                type: "simple-fill",
                color: "#f5b318",
                outline: {
                    width: 0
                }
            }
        }, {
            value: "Herbaceous",
            symbol: {
                type: "simple-fill",
                color: "#E6CE9C",
                outline: {
                    width: 0
                }
            }

        }]
    };
    renderer.visualVariables = [
        {
            type: "opacity",
            valueExpression: apnFilter(),
            valueExpressionTitle: "Share of registered voters comprising the dominant party",
            stops: [
                {
                    value: 0,
                    opacity: 0,
                    label: "< 33%"
                },
                {
                    value: 1,
                    opacity: 1,
                    label: "< 33%"
                }]

        }];


    var renderer2 = {
        type: "unique-value", // autocasts as new UniqueValueRenderer()
        field: "FM_Group",
        uniqueValueInfos: [
            {
                value: "GR",
                symbol: createSymbol("#ffee00"),
                label: "Grass"
            },
            {
                value: "GS",
                symbol: createSymbol("#ff5600"),
                label: "Grass-Shrub"
            },
            {
                value: "NB",
                symbol: createSymbol("#a8a8a8"),
                label: "Non-Burnable"
            },
            {
                value: "SH",
                symbol: createSymbol("#ffaf00"),
                label: "Shrub"
            },
            {
                value: "FR",
                symbol: createSymbol("#00a624"),
                label: "Forest"
            },
            {
                value: "FS",
                symbol: createSymbol("#5e8200"),
                label: "Forest-Shrub"
            }
        ]
    };
    renderer2.visualVariables = [
        {
            type: "opacity",
            valueExpression: strengthArcade2(/*sliderVal, sliderVal2, sliderVal3, sliderVal4, sliderVal5*/),
            valueExpressionTitle: "Share of registered voters comprising the dominant party",
            stops: [
                {
                    value: 0,
                    opacity: 0,
                    label: "< 33%"
                },
                {
                    value: 1,
                    opacity: 0.5,
                    label: "< 33%"
                }/*,
                {
                    value: 25,
                    opacity: 0.50,
                    label: "< 33%"
                },
                {
                    value: 50,
                    opacity: 0.75,
                    label: "< 33%"
                },
                {
                    value: 75,
                    opacity: 1.0,
                    label: "> 44%"
                }*/
            ]
        }
    ];

    var renderer4 = {
        type: "unique-value", // autocasts as new UniqueValueRenderer()
        valueExpression: "var fm = $feature.FuelModTxt; var fmClass = When((Find('NB', fm, 0) > -1), 'NB', (Find('GR', fm, 0) > -1), 'GR', (Find('GS', fm, 0) > -1), 'GS', (Find('SH', fm, 0) > -1), 'SH', (Find('TU', fm, 0) > -1), 'FS', (Find('TL3', fm, 0) > -1), 'FS', (Find('TL1', fm, 0) > -1), 'FR', (Find('TL2', fm, 0) > -1), 'FR', (Find('TL5', fm, 0) > -1), 'FR', (Find('TL6', fm, 0) > -1), 'FR', (Find('TL8', fm, 0) > -1), 'FR', (Find('TL9', fm, 0) > -1), 'FR', (Find('rNB', fm, 0) > -1), 'NB', (Find('rGR', fm, 0) > -1), 'GR', (Find('rGS', fm, 0) > -1), 'GS', (Find('rSH', fm, 0) > -1), 'SH', (Find('rTU', fm, 0) > -1), 'FS', (Find('rTL3', fm, 0) > -1), 'FS', (Find('rTL1', fm, 0) > -1), 'FR', (Find('rTL2', fm, 0) > -1), 'FR', (Find('rTL5', fm, 0) > -1), 'FR', (Find('rTL6', fm, 0) > -1), 'FR', (Find('rTL8', fm, 0) > -1), 'FR', (Find('rTL9', fm, 0) > -1), 'FR', 'N/A'); return fmClass",
        uniqueValueInfos: [
            {
                value: "GR",
                symbol: createSymbol("#ffee00"),
                label: "Grass"
            },
            {
                value: "GS",
                symbol: createSymbol("#ff5600"),
                label: "Grass-Shrub"
            },
            {
                value: "NB",
                symbol: createSymbol("#a8a8a8"),
                label: "Non-Burnable"
            },
            {
                value: "SH",
                symbol: createSymbol("#ffaf00"),
                label: "Shrub"
            },
            {
                value: "FR",
                symbol: createSymbol("#00a624"),
                label: "Forest"
            },
            {
                value: "FS",
                symbol: createSymbol("#5e8200"),
                label: "Forest-Shrub"
            }
        ]
    };
    renderer4.visualVariables = [
        {
            type: "opacity",
            valueExpression: apnFilter(),
            valueExpressionTitle: "Share of registered voters comprising the dominant party",
            stops: [
                {
                    value: 0,
                    opacity: 0,
                    label: "< 33%"
                },
                {
                    value: 1,
                    opacity: 1,
                    label: "< 33%"
                }]

        }];
    VegGen.renderer = renderer;
    FM.renderer = renderer2;
    VegMap.renderer = renderer3;
    FuelModel.renderer = renderer4;
}

function apnFilter() {
    var string = "var parcelAPN = $feature.APN;\ var factors = When(" + apnText + ", 0, 1);\
return factors;"

    return string;
}

function strengthArcade2(/*sliderValD, sliderValR, sliderValI, sliderValE, sliderValB*/) {
    var string = "var fm = $feature.FM_Group; var fc = $feature.Treatment; var hp = $feature.HiPrior; var parcelAPN = $feature.APN;  var factors = When(" + apnText + ", 0, " + fmText + fcText + hpText + distText + "1);\
var total = Sum(factors); return (total);"

    return string;
}

function createSymbol(color) {
    return {
        type: "simple-fill", // autocasts as new SimpleFillSymbol()
        color: color,
        outline: {
            width: 0,
            color: [0, 0, 0, 0.2]
        }
    };
}

/*function sliderValues() {
    var sliderArr = [sliderValRd, sliderValSt, sliderValSp, sliderValEr, sliderValBd];
    sliderTotal = 0;

    $.each(sliderArr, function (i, val) {

        sliderTotal += parseInt(val);

    })
}*/
