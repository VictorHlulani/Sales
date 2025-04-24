var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_geoMap_geocodedUpworkMarketDemandsales_1 = new ol.format.GeoJSON();
var features_geoMap_geocodedUpworkMarketDemandsales_1 = format_geoMap_geocodedUpworkMarketDemandsales_1.readFeatures(json_geoMap_geocodedUpworkMarketDemandsales_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geoMap_geocodedUpworkMarketDemandsales_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geoMap_geocodedUpworkMarketDemandsales_1.addFeatures(features_geoMap_geocodedUpworkMarketDemandsales_1);
var lyr_geoMap_geocodedUpworkMarketDemandsales_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geoMap_geocodedUpworkMarketDemandsales_1, 
                style: style_geoMap_geocodedUpworkMarketDemandsales_1,
                popuplayertitle: 'geoMap_geocoded - Upwork Market Demand (sales)',
                interactive: true,
                title: '<img src="styles/legend/geoMap_geocodedUpworkMarketDemandsales_1.png" /> geoMap_geocoded - Upwork Market Demand (sales)'
            });
var format_geoMap_geocodedUpworkMarketDemandHeatmap_2 = new ol.format.GeoJSON();
var features_geoMap_geocodedUpworkMarketDemandHeatmap_2 = format_geoMap_geocodedUpworkMarketDemandHeatmap_2.readFeatures(json_geoMap_geocodedUpworkMarketDemandHeatmap_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geoMap_geocodedUpworkMarketDemandHeatmap_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geoMap_geocodedUpworkMarketDemandHeatmap_2.addFeatures(features_geoMap_geocodedUpworkMarketDemandHeatmap_2);
var lyr_geoMap_geocodedUpworkMarketDemandHeatmap_2 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_geoMap_geocodedUpworkMarketDemandHeatmap_2, 
                radius: 3 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
    weight: function(feature){
        var weightField = 'No of Sales Jobs';
        var featureWeight = feature.get(weightField);
        var maxWeight = 3248;
        var calibratedWeight = featureWeight/maxWeight;
        return calibratedWeight;
    },
                title: 'geoMap_geocoded - Upwork Market Demand Heatmap'
            });
var format_geoMap_geocodedUpworkInvites_3 = new ol.format.GeoJSON();
var features_geoMap_geocodedUpworkInvites_3 = format_geoMap_geocodedUpworkInvites_3.readFeatures(json_geoMap_geocodedUpworkInvites_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geoMap_geocodedUpworkInvites_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geoMap_geocodedUpworkInvites_3.addFeatures(features_geoMap_geocodedUpworkInvites_3);
var lyr_geoMap_geocodedUpworkInvites_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geoMap_geocodedUpworkInvites_3, 
                style: style_geoMap_geocodedUpworkInvites_3,
                popuplayertitle: 'geoMap_geocoded - Upwork Invites',
                interactive: true,
                title: '<img src="styles/legend/geoMap_geocodedUpworkInvites_3.png" /> geoMap_geocoded - Upwork Invites'
            });

lyr_OSMStandard_0.setVisible(true);lyr_geoMap_geocodedUpworkMarketDemandsales_1.setVisible(true);lyr_geoMap_geocodedUpworkMarketDemandHeatmap_2.setVisible(true);lyr_geoMap_geocodedUpworkInvites_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_geoMap_geocodedUpworkMarketDemandsales_1,lyr_geoMap_geocodedUpworkMarketDemandHeatmap_2,lyr_geoMap_geocodedUpworkInvites_3];
lyr_geoMap_geocodedUpworkMarketDemandsales_1.set('fieldAliases', {'Region': 'Region', 'No of Sales Jobs': 'No of Sales Jobs', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_geoMap_geocodedUpworkInvites_3.set('fieldAliases', {'Region': 'Region', 'No of Sales Jobs': 'No of Sales Jobs', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_geoMap_geocodedUpworkMarketDemandsales_1.set('fieldImages', {'Region': '', 'No of Sales Jobs': '', 'Latitude': '', 'Longitude': '', });
lyr_geoMap_geocodedUpworkInvites_3.set('fieldImages', {'Region': 'TextEdit', 'No of Sales Jobs': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_geoMap_geocodedUpworkMarketDemandsales_1.set('fieldLabels', {'Region': 'no label', 'No of Sales Jobs': 'inline label - always visible', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_geoMap_geocodedUpworkInvites_3.set('fieldLabels', {'Region': 'no label', 'No of Sales Jobs': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_geoMap_geocodedUpworkInvites_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});