$(function () {
    $("#accordion").accordion({
        heightStyle: "content"
    });
});

$(document).ready(function () {

    $('#report').click(function () {
        //priorityBool = "&prior=" + sliderDistRoad.value + "." + sliderDistStream.value + "." + sliderDistStructure.value + "." + sliderErod.value

        distBool = "&dist=100." + $("#roads").val() + "." + $("#build").val()

        if ($("#fm1").is(':checked')) {
            fm1 = "1"
        } else {
            fm1 = "0"
        }
        if ($("#fm2").is(':checked')) {
            fm2 = "1"
        } else {
            fm2 = "0"
        }
        if ($("#fm3").is(':checked')) {
            fm3 = "1"
        } else {
            fm3 = "0"
        }
        if ($("#fm4").is(':checked')) {
            fm4 = "1"
        } else {
            fm4 = "0"
        }
        if ($("#fm5").is(':checked')) {
            fm5 = "1"
        } else {
            fm5 = "0"
        }
        if ($("#fm7").is(':checked')) {
            fm7 = "1"
        } else {
            fm7 = "0"
        }
        fmTextBool = '&fmText=' + fm1 + fm2 + fm3 + fm4 + fm5 + fm7

        if ($("#nt1").is(':checked')) {
            fc1 = "1"
        } else {
            fc1 = "0"
        }
        fcTextBool = '&fcText=' + fc1

        if ($("#hp1").is(':checked')) {
            hp1 = "1"
        } else {
            hp1 = "0"
        }
        hpTextBool = '&hpText=' + hp1

        apnCount1 = 0
        $.each(apnClean, function (i, val) {
            if (apnCount1 == 0) {
                apnCount1 = 1
                apnBool = '?apn=' + val
            } else {
                apnBool = apnBool + '&apn=' + val
            }
        })

        wshedBool = "&wshed=" + wsName;

        urlParams = apnBool + wshedBool + fcTextBool + fmTextBool + hpTextBool + distBool

        url = "./report.html" + urlParams
        var win = window.open(url, '_blank');
        if (win) {
            //Browser has allowed it to be opened
            win.focus();
        } else {
            //Browser has blocked it
            alert('Please allow popups for this website');
        }
    });

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
        $("#viewDiv").hide();
        $("#viewDiv3").hide();
        $("#viewDiv4").hide();
        $("#viewDiv5").hide();
        $("#viewDiv2").show();
        FuelModel.visible = false;
        VegMap.visible = false;
        VegGen.visible = false;
        StreamBuffer.visible = false;
        SlopeClass.visible = false;

    });

    $('#Sec6').click(function () {
        $("#Sec2").css("pointer-events", "auto");
        $("#Sec2").removeClass("inActive");
        $("#viewDiv").hide();
        $("#viewDiv3").show();
        $("#viewDiv4").hide();
        $("#viewDiv5").hide();
        $("#viewDiv2").hide();
        FuelModel.visible = false;
        VegMap.visible = false;
        VegGen.visible = true;
        StreamBuffer.visible = false;
        SlopeClass.visible = false;
    });

    $('#Sec2').click(function () {
        $("#Sec3").css("pointer-events", "auto");
        $("#Sec3").removeClass("inActive");
        $("#viewDiv").hide();
        $("#viewDiv3").hide();
        $("#viewDiv4").show();
        $("#viewDiv5").hide();
        $("#viewDiv2").hide();
        FuelModel.visible = false;
        VegMap.visible = false;
        VegGen.visible = false;
        StreamBuffer.visible = true;
        SlopeClass.visible = true;
    });

    $('#Sec3').click(function () {
        $("#Sec4").css("pointer-events", "auto");
        $("#Sec4").removeClass("inActive");
        $("#viewDiv").hide();
        $("#viewDiv3").hide();
        $("#viewDiv4").hide();
        $("#viewDiv5").show();
        $("#viewDiv2").hide();
        FuelModel.visible = true;
        VegMap.visible = false;
        VegGen.visible = false;
        StreamBuffer.visible = false;
        SlopeClass.visible = false;
    });

    $('#Sec4').click(function () {
        $("#Sec5").css("pointer-events", "auto");
        $("#Sec5").removeClass("inActive");
        $("#viewDiv2").hide();
        $("#viewDiv3").hide();
        $("#viewDiv4").hide();
        $("#viewDiv5").hide();
        $("#viewDiv").show();
    });
});

/*
var sliderVal = 1;
var sliderVal2 = 1;
var sliderVal3 = 0;
var sliderVal4 = 1;
var sliderVal5 = 1;
*/

var apn,
    apnText = '',
    apnWhere = '',
    apnList,
    apnArr = [],
    apnClean,
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


require([
    "esri/Map",
    "esri/Graphic",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/layers/MapImageLayer",
    "esri/layers/GraphicsLayer",
    "esri/layers/VectorTileLayer",
    "esri/widgets/Legend",
    "esri/widgets/Search",
    "esri/tasks/QueryTask",
    "esri/tasks/support/Query",
    "esri/tasks/IdentifyTask",
    "esri/tasks/support/IdentifyParameters",
    "dojo/domReady!"
], function (Map, Graphic, MapView, FeatureLayer, MapImageLayer, GraphicsLayer, VectorTileLayer, Legend, Search, QueryTask, Query, IdentifyTask, IdentifyParameters) {
    var identifyTask = new IdentifyTask(),
        params = new IdentifyParameters()

    $("#slope").hide();
    $("#slopeVal").hide();
    $("#distStream").hide();
    $("#distStreamVal").hide();
    $("#Erod").hide();
    $("#ErodVal").hide();
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
    };

    Parcels = new FeatureLayer({
        url: "https://services.arcgis.com/0xnwbwUttaTjns4i/arcgis/rest/services/SonomaBaseData/FeatureServer",
        layerId: 0,
        title: "Parcels"
    });

    Parcels2 = new FeatureLayer({
        url: "https://services.arcgis.com/0xnwbwUttaTjns4i/arcgis/rest/services/SonomaBaseData/FeatureServer",
        layerId: 0,
        title: "Parcels"
    });

    Watershed = new FeatureLayer({
        url: "https://services.arcgis.com/0xnwbwUttaTjns4i/ArcGIS/rest/services/Dry_Creek_Final/FeatureServer",
        layerId: 6,
        title: "Watershed Boundary"
    });

    Roads = new FeatureLayer({
        url: "https://services.arcgis.com/0xnwbwUttaTjns4i/ArcGIS/rest/services/Dry_Creek_Final/FeatureServer",
        layerId: 1,
        minScale: 80000,
        legendEnabled: false,
        title: "Roads"
    });

    Roads2 = new FeatureLayer({
        url: "https://socogis.sonomacounty.ca.gov/map/rest/services/BASEPublic/Streets/FeatureServer/",
        layerId: 0,
        minScale: 80000,
        title: "Roads"
    });

    Streams = new FeatureLayer({
        url: "https://services.arcgis.com/0xnwbwUttaTjns4i/ArcGIS/rest/services/Dry_Creek_Final/FeatureServer",
        layerId: 2,
        minScale: 80000,
        title: "Streams"
    });

    Structures = new FeatureLayer({
        url: "https://services.arcgis.com/0xnwbwUttaTjns4i/ArcGIS/rest/services/Dry_Creek_Final/FeatureServer",
        layerId: 3,
        minScale: 5000,
        title: "Structures"
    });

    StructuresPts = new FeatureLayer({
        url: "https://services.arcgis.com/0xnwbwUttaTjns4i/ArcGIS/rest/services/Dry_Creek_Final/FeatureServer",
        layerId: 4,
        minScale: 80000,
        maxScale: 5000,
        title: "Structures"
    });

    Roads3 = new FeatureLayer({
        url: "https://services.arcgis.com/0xnwbwUttaTjns4i/ArcGIS/rest/services/Dry_Creek_Final/FeatureServer",
        layerId: 1,
        minScale: 80000,
        legendEnabled: false,
        title: "Roads"
    });

    Roads4 = new FeatureLayer({
        url: "https://socogis.sonomacounty.ca.gov/map/rest/services/BASEPublic/Streets/FeatureServer/",
        layerId: 0,
        minScale: 80000,
        title: "Roads"
    });

    Streams2 = new FeatureLayer({
        url: "https://services.arcgis.com/0xnwbwUttaTjns4i/ArcGIS/rest/services/Dry_Creek_Final/FeatureServer",
        layerId: 2,
        minScale: 80000,
        title: "Streams"
    });

    Structures2 = new FeatureLayer({
        url: "https://services.arcgis.com/0xnwbwUttaTjns4i/ArcGIS/rest/services/Dry_Creek_Final/FeatureServer",
        layerId: 3,
        minScale: 5000,
        title: "Structures"
    });

    StructuresPts2 = new FeatureLayer({
        url: "https://services.arcgis.com/0xnwbwUttaTjns4i/ArcGIS/rest/services/Dry_Creek_Final/FeatureServer",
        layerId: 4,
        minScale: 80000,
        maxScale: 5000,
        title: "Structures"
    });

    VegGen = new FeatureLayer({
        url: "https://services.arcgis.com/0xnwbwUttaTjns4i/arcgis/rest/services/SonomaBaseData/FeatureServer",
        layerId: 2,
        legendEnabled: false,
        opacity: 0.5,
        renderer: defaultRenderer,
        visible: false
    });

    SlopeClass = new FeatureLayer({
        url: "https://services.arcgis.com/0xnwbwUttaTjns4i/arcgis/rest/services/Sonoma_Slope_Hydro/FeatureServer",
        layerId: 0,
        minScale: 80000,
        title: "Slope >30%",
        legendEnabled: false,
        visible: false,
        blendMode: "multiply"
    });

    StreamBuffer = new FeatureLayer({
        url: "https://services.arcgis.com/0xnwbwUttaTjns4i/arcgis/rest/services/Sonoma_Slope_Hydro/FeatureServer",
        layerId: 1,
        minScale: 80000,
        title: "Riparian Setback Area",
        legendEnabled: false,
        visible: false,
        blendMode: "multiply"
    });

    var template = {
        // autocasts as new PopupTemplate()
        title: "APN: {APN}",
        content: [
            {
                // It is also possible to set the fieldInfos outside of the content
                // directly in the popupTemplate. If no fieldInfos is specifically set
                // in the content, it defaults to whatever may be set within the popupTemplate.
                type: "fields",
                fieldInfos: [
                    {
                        fieldName: "LF_FOREST",
                        label: "Veg Class"
                    }
                ]
            }
        ]
    };

    var template2 = {
        // autocasts as new PopupTemplate()
        title: "APN: {APN}",
        content: [
            {
                // It is also possible to set the fieldInfos outside of the content
                // directly in the popupTemplate. If no fieldInfos is specifically set
                // in the content, it defaults to whatever may be set within the popupTemplate.
                type: "fields",
                fieldInfos: [
                    {
                        fieldName: "MAP_CLASS",
                        label: "Veg Class"
                    }
                ]
            }
        ]
    };

    FuelModel = new FeatureLayer({
        url: "https://services.arcgis.com/0xnwbwUttaTjns4i/arcgis/rest/services/Sonoma_App_Data/FeatureServer",
        layerId: 0,
        legendEnabled: false,
        opacity: 0.5,
        renderer: defaultRenderer,
        visible: false
    });

    Watersheds = "https://hydro.nationalmap.gov/arcgis/rest/services/wbd/MapServer";

    VegMap = new FeatureLayer({
        url: "https://services.arcgis.com/0xnwbwUttaTjns4i/arcgis/rest/services/SonomaBaseData/FeatureServer",
        layerId: 1,
        legendEnabled: false,
        opacity: 0.5,
        renderer: defaultRenderer,
        visible: false
    });

    var searchWidget = new Search({
        view: view2,
        allPlaceholder: "Search Address or APN (xxx-xxx-xxx)",
        sources: [
            {
                layer: Parcels2,
                searchFields: ["APN"],
                displayField: "APN",
                exactMatch: false,
                outFields: ["APN"],
                name: "Parcels",
                placeholder: "example: 139-100-014"
            }
        ]
    });

    Streams.renderer = {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: {
            type: "simple-line", // autocasts as new SimpleFillSymbol()
            color: "blue",
            width: 1

        }
    };

    Streams2.renderer = {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: {
            type: "simple-line", // autocasts as new SimpleFillSymbol()
            color: "blue",
            width: 1

        }
    };

    Parcels.renderer = {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: {
            type: "simple-fill", // autocasts as new SimpleFillSymbol()
            color: [255, 255, 255, 0],
            outline: {
                width: 1.5,
                color: [35, 35, 35, 0.7]
            }
        }
    };

    SlopeClass.renderer = {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: {
            type: "simple-fill", // autocasts as new SimpleFillSymbol()
            color: [0, 0, 0, 1],
            style: "backward-diagonal",
            outline: {
                width: 1,
                color: [0, 0, 0, 0.7]
            }
        }
    };

    StreamBuffer.renderer = {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: {
            type: "simple-fill", // autocasts as new SimpleFillSymbol()
            color: [0, 0, 0, 1],
            style: "diagonal-cross",
            outline: {
                width: 1,
                color: [0, 0, 0, 0.7]
            }
        }
    };

    Watershed.renderer = {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: {
            type: "simple-fill", // autocasts as new SimpleFillSymbol()
            color: [255, 255, 255, 0],
            outline: {
                width: 1.5,
                color: [0, 0, 185, 0.7]
            }
        }
    };

    Parcels2.renderer = {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: {
            type: "simple-fill", // autocasts as new SimpleFillSymbol()
            color: [255, 255, 255, 0],
            outline: {
                width: 1.5,
                color: [35, 35, 35, 0.7]
            }
        }
    };

    Roads.renderer = {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: {
            type: "simple-fill", // autocasts as new SimpleFillSymbol()
            color: [230, 230, 230, 0.7],
            outline: {
                width: 1.5,
                color: [230, 230, 230, 0.7]
            }
        }
    };

    Roads3.renderer = {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: {
            type: "simple-fill", // autocasts as new SimpleFillSymbol()
            color: [230, 230, 230, 0.7],
            outline: {
                width: 1.5,
                color: [230, 230, 230, 0.7]
            }
        }
    };

    Roads2.renderer = {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: {
            type: "simple-line", // autocasts as new SimpleFillSymbol()
            color: [230, 230, 230, 0.7],
            width: 2

        }
    };

    Roads4.renderer = {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: {
            type: "simple-line", // autocasts as new SimpleFillSymbol()
            color: [230, 230, 230, 0.7],
            width: 2

        }
    };



    graphicsFM = new GraphicsLayer;

    //FM = new GraphicsLayer;

    FM = new FeatureLayer({
        url: "https://services.arcgis.com/0xnwbwUttaTjns4i/arcgis/rest/services/Sonoma_App_Data/FeatureServer/",
        definitionExpression: "APN = '0'",
        layerId: 0,
        legendEnabled: false,
        //renderer: renderer,
        title: "Parcels"
    });

    VegGen.popupTemplate = template;

    VegMap.popupTemplate = template2;

    var map = new Map({
        basemap: "topo-vector",
        layers: [FM, Streams, Roads2, Roads, Structures, StructuresPts, Parcels, graphicsFM]
    });

    var map2 = new Map({
        basemap: "topo-vector",
        layers: [VegMap, VegGen, SlopeClass, StreamBuffer, FuelModel, Streams2, Roads4, Roads3, Structures2, StructuresPts2, Parcels2, graphicsFM]
    });

    var view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-122.837214, 38.512354],
        zoom: 10
    });

    var view2 = new MapView({
        container: "viewDiv2",
        map: map2,
        center: [-122.837214, 38.512354],
        zoom: 10
    });

    var view3 = new MapView({
        container: "viewDiv3",
        map: map2,
        center: [-122.837214, 38.512354],
        zoom: 10
    });

    var view4 = new MapView({
        container: "viewDiv4",
        map: map2,
        center: [-122.837214, 38.512354],
        zoom: 10
    });

    var view5 = new MapView({
        container: "viewDiv5",
        map: map2,
        center: [-122.837214, 38.512354],
        zoom: 10
    });

    view2.ui.add(searchWidget, {
        position: "top-left",
        index: 0
    });

    view.when(function () {
        var legend = new Legend({
            view: view
        });
        view.ui.add(legend, "top-right");
    });

    view3.when(function () {
        var legend3 = new Legend({
            view: view3
        });
        view3.ui.add(legend3, "top-right");
    });

    view4.when(function () {
        var legend4 = new Legend({
            view: view4
        });
        view4.ui.add(legend4, "top-right");
    });

    view5.when(function () {
        var legend5 = new Legend({
            view: view5
        });
        view5.ui.add(legend5, "top-right");
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

        identifyTask.url = Watersheds;


        params.tolerance = 3;
        params.layerIds = [5];
        params.layerOption = "all";
        params.width = view2.width;
        params.height = view2.height;
    });

    function searchCoordinates(event) {
        $.ajaxSetup({
            async: false
        });


        mp = (event.result.feature.geometry);

        if (mp.centroid) {
            executeIdentifyTask(mp.centroid);
            executeParcelQuery(mp.centroid);

            executeFMQuery();
        } else {
            executeIdentifyTask(mp);
            executeParcelQuery(mp);

            executeFMQuery();
        };
    };

    function clickCoordinates(event) {
        $.ajaxSetup({
            async: false
        });

        mp = (event.mapPoint);

        executeIdentifyTask(mp);
        executeParcelQuery(mp);
        //executeFMQuery();
    };

    function executeIdentifyTask(event) {
        $.ajaxSetup({
            async: false
        });
        wsVal = '';
        // Set the geometry to the location of the view click
        params.geometry = event;
        params.mapExtent = view2.extent;

        // This function returns a promise that resolves to an array of features
        // A custom popupTemplate is set for each feature based on the layer it
        // originates from
        identifyTask
            .execute(params)
            .then(function (response) {
            var results = response.results;
            wsName = results[0].feature.attributes.Name;
            wsVal += "<b>Watershed Name:</b> " + results[0].feature.attributes.Name;
        })
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
        url: "https://services.arcgis.com/0xnwbwUttaTjns4i/arcgis/rest/services/SonomaBaseData/FeatureServer/0"
    });
    parcelQuery = new Query();
    parcelQuery.returnGeometry = true;
    parcelQuery.outFields = ["*"];

    fmQueryTask = new QueryTask({
        url: "https://services.arcgis.com/0xnwbwUttaTjns4i/arcgis/rest/services/Sonoma_App_Data/FeatureServer/0/query?where=APN+%3D+'139-100-014'"
    });
    fmQuery = new Query();
    fmQuery.returnGeometry = true;
    fmQuery.outFields = ["*"];

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
                        width: 1.5,
                        color: [255, 0, 0, 1]
                    }
                }
            });
            //Add graphic to the map graphics layer.
            graphicsFM.add(graphic);

            view.goTo({
                target: graphicsFM.graphics
            });

            view2.goTo({
                target: graphicsFM.graphics
            });

            view3.goTo({
                target: graphicsFM.graphics
            });

            view4.goTo({
                target: graphicsFM.graphics
            });

            view5.goTo({
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

            $.each(apnClean, function (i, val) {
                $.getJSON("https://services.arcgis.com/0xnwbwUttaTjns4i/arcgis/rest/services/SonomaBaseData/FeatureServer/2/query?where=APN+%3D+'" + val + "'&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnHiddenFields=false&returnGeometry=false&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=", function (data) {
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
                /*$.getJSON("https://services.arcgis.com/0xnwbwUttaTjns4i/arcgis/rest/services/SonomaBaseData/FeatureServer/1/query?where=APN+%3D+'" + val + "'&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnHiddenFields=false&returnGeometry=false&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=", function (data) {
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
                });*/
            });
            vegGroup = alasql('SELECT VegType , SUM (b) AS b, c FROM ? GROUP BY VegType, c ORDER BY b ASC', [vegArr]);
            //vegFullGroup = alasql('SELECT Abbrv, MAP_CLASS , SUM (b) AS b FROM ? GROUP BY Abbrv, MAP_CLASS ORDER BY MAP_CLASS ASC', [vegFullArr]);




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

                    areaArr.push(val.attributes.Acres);
                    //Strip out riparian classes
                    /*if (val.attributes.FuelModTxt.length > 3) {
                        val.attributes.FuelModTxt = val.attributes.FuelModTxt.replace("r", "");
                    }*/
                    if (val.attributes.AboveSlp == 0) {
                        val.attributes.slopeCutoff = "< 30%";
                        val.attributes.ltArea = val.attributes.Acres
                    } else {
                        val.attributes.slopeCutoff = "> 30%";
                        val.attributes.gtArea = val.attributes.Acres
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

                parcelGroup = alasql('SELECT FM_Group AS FMG, GroupText AS GroupDesc, FIRST(TypeOrder) AS TypeOrder, SUM (Acres) as Area FROM ? GROUP BY FM_Group, GroupText ORDER BY FMG', [selectParcel]);
                //parcelGroup = alasql('SELECT FuelModTxt AS Code, FM_Group AS FMG, GroupText AS GroupDesc, slopeCutoff AS Slope, SUM (Area) as Area FROM ? GROUP BY FuelModTxt, FM_Group, GroupText, slopeCutoff ORDER BY Code', [selectParcel]);
                //parcelGroupLF = alasql('SELECT FuelModTxt AS Code, LFClass, slopeCutoff AS Slope, SUM (Area) as Area FROM ? GROUP BY FuelModTxt, LFClass, slopeCutoff ORDER BY Code', [selectParcel]);
                statsArr = alasql('SELECT Round(MAX (Dist_Hyd), 2) as HydMax, Round(MAX (Dist_Road), 2) as RoadMax, Round(MAX (Dist_Build), 2) as BuildMax, Round(MAX (Slope_Mean), 2) as SlopeMax FROM ?', [selectParcel]);
                /*statsArr = alasql('SELECT Round(MIN (Dist_Hyd_Min), 2) as HydMin, Round(AVG (Dist_Hyd_Mean), 2) as HydMean, Round(MAX (Dist_Hyd_Max), 2) as HydMax, Round(MAX (Dist_Hyd_Mean), 2) as HydMax, Round(MIN (Dist_Road_Min), 2) as RoadMin, Round(AVG (Dist_Road_Mean), 2) as RoadMean, Round(MAX (Dist_Road_Max), 2) as RoadMax, Round(MAX (Dist_Road_Mean), 2) as RoadMax, Round(MIN (Dist_Build_Min), 2) as BuildMin, Round(AVG (Dist_Build_Mean), 2) as BuildMean, Round(MAX (Dist_Build_Max), 2) as BuildMax, Round(MAX (Dist_Build_Mean), 2) as BuildMax, Round(MIN (Erod_Min), 2) as ErodMin, Round(AVG (Erod_Mean), 2) as ErodMean, Round(MAX (Erod_Max), 2) as ErodMax, Round(MAX (Erod_Mean), 2) as ErodMax, Round(MAX (Slope_Mean), 2) as SlopeMax  FROM ?', [selectParcel]);*/
                slopeArr = alasql('SELECT slopeCutoff, ROUND(SUM (Area), 2) AS Area FROM ? GROUP BY slopeCutoff', [selectParcel]);


                setRenderer();
                updateTable();
            });

        });
    };

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

    fmJoin = alasql('SELECT * FROM ? parcelGroup JOIN ? vegTreatment USING FMG ORDER BY FMG', [parcelGroup, vegTreatment]);

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
            Area: val.Acres,
            TypeOrder: val.TypeOrder,
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
            //vegType = fmJoin[i].Code
            veg = fmJoin[i].FMG
            area = fmJoin[i].Area
            //vegSlope = vegTreatment[i].Slope
            vegTreat = fmJoin[i].Treatment
            vegCode = fmJoin[i].GroupDesc
            vegOrder = fmJoin[i].TypeOrder
        } else {
            if ((veg == fmJoin[i].FMG)) {
                vegTreat = vegTreat + "<br>" + fmJoin[i].Treatment
            } else {
                vegTreatTest.push({
                    //VegType: vegType,
                    VegGroup : veg,
                    Area: area,
                    //Slope: vegSlope,
                    Treatment: vegTreat,
                    Code: vegCode,
                    VegOrder: vegOrder
                })
                //vegType = fmJoin[i].Code
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
        //VegType: vegType,
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

    vegTreatTest = alasql('SELECT VegGroup, FIRST(VegOrder) AS VegOrder, SUM (Area) AS Area, FIRST(Treatment) AS Treatment, FIRST(Code) AS Code FROM ? GROUP BY VegGroup ORDER BY Area ASC', [vegTreatTest]);

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

    fmGroup = alasql('SELECT Code, FIRST(TypeOrder) AS TypeOrder, GroupDesc, PriorClass, Dist_Hyd, Dist_Road, Dist_Build, SUM(ltArea) AS ltArea, SUM(gtArea) AS gtArea FROM ? GROUP BY Code, GroupDesc, PriorClass, Dist_Hyd, Dist_Road, Dist_Build ORDER BY TypeOrder ASC', [fmClass]);

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

    /*$.each(vegFullGroup, function (i, val) {

        fullArr += '<tr><td><span class="legend mapclass ' + val.Abbrv.split(" ").join("_") + ' _2">&#9608;</span>' + val.MAP_CLASS + '</td><td align="right"> ' + (val.b).toFixed(2) + '</td></tr>';

    });*/

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
    /*$('#dataTable4 tbody tr').remove();
    $('#dataTable4 tbody').append(fullArr);*/
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
                symbol: createSymbol("#ffaf00"),
                label: "Grass-Shrub"
            },
            {
                value: "NB",
                symbol: createSymbol("#a8a8a8"),
                label: "Non-Burnable"
            },
            {
                value: "SH",
                symbol: createSymbol("#ff5600"),
                label: "Shrub"
            },
            {
                value: "FR",
                symbol: createSymbol("#00a624"),
                label: "Forest"
            },
            {
                value: "FS",
                symbol: createSymbol("#0b5200"),
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
        valueExpression: "var fmClass = $feature.FM_Group; return fmClass",
        uniqueValueInfos: [
            {
                value: "GR",
                symbol: createSymbol("#ffee00"),
                label: "Grass"
            },
            {
                value: "GS",
                symbol: createSymbol("#ffaf00"),
                label: "Grass-Shrub"
            },
            {
                value: "NB",
                symbol: createSymbol("#a8a8a8"),
                label: "Non-Burnable"
            },
            {
                value: "SH",
                symbol: createSymbol("#ff5600"),
                label: "Shrub"
            },
            {
                value: "FR",
                symbol: createSymbol("#00a624"),
                label: "Forest"
            },
            {
                value: "FS",
                symbol: createSymbol("#0b5200"),
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
    
    SlopeClass.renderer = {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: {
            type: "simple-fill", // autocasts as new SimpleFillSymbol()
            color: [0, 255, 0, 1],
            outline: {
                width: 0,
                color: [0, 0, 0, 0.7]
            }
        },
        visualVariables: [
        {
            type: "opacity",
            valueExpression: apnFilter(),
            stops: [
                {
                    value: 0,
                    opacity: 0
                },
                {
                    value: 1,
                    opacity: 0.5
                }]

        }]
    };

    StreamBuffer.renderer = {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: {
            type: "simple-fill", // autocasts as new SimpleFillSymbol()
            color: [0, 0, 255, 1],
            outline: {
                width: 0,
                color: [0, 0, 0, 0.7]
            }
        },
        visualVariables: [
        {
            type: "opacity",
            valueExpression: apnFilter(),
            stops: [
                {
                    value: 0,
                    opacity: 0
                },
                {
                    value: 1,
                    opacity: 0.5
                }]

        }]
    };
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
    var string = "var fm = $feature.FM_Group; var parcelAPN = $feature.APN;  var factors = When(" + apnText + ", 0, " + fmText + distText + "1);\
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

$( "select[name='dist']" ).change(function() {
    distText = "($feature.Dist_Road > " + $("#roads").val() + " && $feature.Dist_Build > " + $("#build").val() + "), 0, $feature.Dist_Hyd <= 100 , 0, ";
    distSQL = "(Dist_Road <= " + $("#roads").val() + " OR Dist_Build <= " + $("#build").val() + ") AND Dist_Hyd > 100";
    setRenderer();
    updateTable();
})

$("#ly1").click(function () {
    if ($(this).is(":not(:checked)")) {
        SlopeClass.visible = false;
    } else {
        SlopeClass.visible = true;
    }

});

$("#ly2").click(function () {
    if ($(this).is(":not(:checked)")) {
        StreamBuffer.visible = false;
    } else {
        StreamBuffer.visible = true;
    }

});
