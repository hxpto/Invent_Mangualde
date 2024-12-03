var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Freguesias_Mangualde_2 = new ol.format.GeoJSON();
var features_Freguesias_Mangualde_2 = format_Freguesias_Mangualde_2.readFeatures(json_Freguesias_Mangualde_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Freguesias_Mangualde_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Freguesias_Mangualde_2.addFeatures(features_Freguesias_Mangualde_2);
var lyr_Freguesias_Mangualde_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Freguesias_Mangualde_2, 
                style: style_Freguesias_Mangualde_2,
                popuplayertitle: "Freguesias_Mangualde",
                interactive: false,
                title: '<img src="styles/legend/Freguesias_Mangualde_2.png" /> Freguesias_Mangualde'
            });
var format_Pontos_GNSS_trees_Mangualde_BD_3 = new ol.format.GeoJSON();
var features_Pontos_GNSS_trees_Mangualde_BD_3 = format_Pontos_GNSS_trees_Mangualde_BD_3.readFeatures(json_Pontos_GNSS_trees_Mangualde_BD_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pontos_GNSS_trees_Mangualde_BD_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pontos_GNSS_trees_Mangualde_BD_3.addFeatures(features_Pontos_GNSS_trees_Mangualde_BD_3);
var lyr_Pontos_GNSS_trees_Mangualde_BD_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pontos_GNSS_trees_Mangualde_BD_3, 
                style: style_Pontos_GNSS_trees_Mangualde_BD_3,
                popuplayertitle: "Pontos_GNSS_trees_Mangualde_BD",
                interactive: true,
                title: '<img src="styles/legend/Pontos_GNSS_trees_Mangualde_BD_3.png" /> Pontos_GNSS_trees_Mangualde_BD'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_Freguesias_Mangualde_2.setVisible(true);lyr_Pontos_GNSS_trees_Mangualde_BD_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_Freguesias_Mangualde_2,lyr_Pontos_GNSS_trees_Mangualde_BD_3];
lyr_Freguesias_Mangualde_2.set('fieldAliases', {'fid': 'fid', 'DICOFRE': 'DICOFRE', 'Freguesia': 'Freguesia', 'Municipio': 'Municipio', 'Distrito': 'Distrito', 'TAA': 'TAA', 'Area_T_ha': 'Area_T_ha', 'Area_EA_ha': 'Area_EA_ha', 'Des_Simpli': 'Des_Simpli', });
lyr_Pontos_GNSS_trees_Mangualde_BD_3.set('fieldAliases', {'LINK_GNSS': 'LINK_GNSS', 'xcoord': 'xcoord', 'ycoord': 'ycoord', 'Data': 'Data', 'DICOFRE': 'DICOFRE', 'Freguesia': 'Freguesia', 'N_ARV': 'N_ARV', 'ID_TREE': 'ID_TREE', 'BD_N.Cient': 'BD_N.Cient', 'BD_Classe_': 'BD_Classe_', 'BD_G_m2': 'BD_G_m2', 'BD_DAP_cm': 'BD_DAP_cm', 'BD_PAP_cm': 'BD_PAP_cm', 'BD_H_m': 'BD_H_m', 'BD_HBCP_m': 'BD_HBCP_m', 'BD_DCP_m': 'BD_DCP_m', 'BD_IDADE': 'BD_IDADE', 'BD_Nivel d': 'BD_Nivel d', 'BD_FOTO_GE': 'BD_FOTO_GE', });
lyr_Freguesias_Mangualde_2.set('fieldImages', {'fid': 'TextEdit', 'DICOFRE': 'TextEdit', 'Freguesia': 'TextEdit', 'Municipio': 'TextEdit', 'Distrito': 'TextEdit', 'TAA': 'TextEdit', 'Area_T_ha': 'TextEdit', 'Area_EA_ha': 'TextEdit', 'Des_Simpli': 'TextEdit', });
lyr_Pontos_GNSS_trees_Mangualde_BD_3.set('fieldImages', {'LINK_GNSS': 'TextEdit', 'xcoord': 'TextEdit', 'ycoord': 'TextEdit', 'Data': 'Hidden', 'DICOFRE': 'TextEdit', 'Freguesia': 'TextEdit', 'N_ARV': 'TextEdit', 'ID_TREE': 'TextEdit', 'BD_N.Cient': 'TextEdit', 'BD_Classe_': 'TextEdit', 'BD_G_m2': 'TextEdit', 'BD_DAP_cm': 'TextEdit', 'BD_PAP_cm': 'TextEdit', 'BD_H_m': 'TextEdit', 'BD_HBCP_m': 'TextEdit', 'BD_DCP_m': 'TextEdit', 'BD_IDADE': 'TextEdit', 'BD_Nivel d': 'TextEdit', 'BD_FOTO_GE': 'TextEdit', });
lyr_Freguesias_Mangualde_2.set('fieldLabels', {'fid': 'hidden field', 'DICOFRE': 'inline label - always visible', 'Freguesia': 'inline label - always visible', 'Municipio': 'inline label - always visible', 'Distrito': 'inline label - always visible', 'TAA': 'hidden field', 'Area_T_ha': 'inline label - always visible', 'Area_EA_ha': 'hidden field', 'Des_Simpli': 'hidden field', });
lyr_Pontos_GNSS_trees_Mangualde_BD_3.set('fieldLabels', {'LINK_GNSS': 'hidden field', 'xcoord': 'inline label - always visible', 'ycoord': 'inline label - always visible', 'DICOFRE': 'hidden field', 'Freguesia': 'hidden field', 'N_ARV': 'inline label - always visible', 'ID_TREE': 'inline label - always visible', 'BD_N.Cient': 'inline label - always visible', 'BD_Classe_': 'hidden field', 'BD_G_m2': 'hidden field', 'BD_DAP_cm': 'inline label - always visible', 'BD_PAP_cm': 'hidden field', 'BD_H_m': 'inline label - always visible', 'BD_HBCP_m': 'inline label - always visible', 'BD_DCP_m': 'inline label - always visible', 'BD_IDADE': 'inline label - always visible', 'BD_Nivel d': 'inline label - always visible', 'BD_FOTO_GE': 'inline label - always visible', });
lyr_Pontos_GNSS_trees_Mangualde_BD_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});