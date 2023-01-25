vegTreatment = [];
//vegTreatment1 = [];
vegTreatmentInit = [];



vegTreatmentInit.push({
    Treatment: "Prescribed Grazing",
    TreatmentDesc: "Managing the harvest of vegetation with grazing and/or browsing animals with the intent to achieve specific ecological, economic, and management objectives.",
    VegType: ["GR", "GS", "SH"]
})

vegTreatmentInit.push({
    Treatment: "Prescribed Burning",
    TreatmentDesc: "Using controlled fire to manage vegetation and reduce fuel loads.",
    VegType: ["GR", "GS", "SH", "FS", "FR"]
})

vegTreatmentInit.push({
    Treatment: "Brush Management",
    TreatmentDesc: "The management or removal of woody (nonherbaceous or succulent) plants including those that are invasive and noxious, using mechanical, chemical or biological methods either alone or in combination.",
    VegType: ["GS", "SH", "FS"]
})

vegTreatmentInit.push({
    Treatment: "Woody Residue Treatment",
    TreatmentDesc: "The treatment of residual woody material that is created due to management activities or natural disturbances. Treatment methods may include piling, burning, chipping/masticating, lop and scatter, offsite removal, or crushing.",
    VegType: ["SH", "FS", "FR"]
})

vegTreatmentInit.push({
    Treatment: "Tree/Shrub Pruning",
    TreatmentDesc: "Tree/shrub pruning is a treatment applied to trees and shrubs that involves the removal of selected branches, shoots, or roots. It may also be applied to the removal of all above-ground material where a coppicing technique is being used to renew the growth of trees or shrubs.",
    VegType: ["FS", "FR"]
})

vegTreatmentInit.push({
    Treatment: "Forest Stand Improvement",
    TreatmentDesc: "The manipulation of species composition, stand structure, or stand density by cutting or killing selected trees or understory vegetation to achieve desired forest conditions or obtain ecosystem services.",
    VegType: ["FS", "FR"]
})

vegTreatmentInit.push({
    Treatment: "Fuel Break",
    TreatmentDesc: "A strip or block of land on which the vegetation, debris, and detritus have been reduced and/or modified to control or diminish the risk of the spread of fire crossing the strip or block of land.",
    VegType: ["GS", "SH", "FS", "FR"]
})

vegTreatmentInit.push({
    Treatment: "",
    TreatmentDesc: "",
    VegType: ["NB"]
})

//treatCount = [1, 2, 3, 4, 5, 6, 7, 8, 9]
slopeCount = ['< 30%', '> 30%']
$.each(vegTreatmentInit, function (index, value) {
    //t = value0.VegType
    $.each(value.VegType, function (index1, value1) {
        //$.each(slopeCount, function (index2, value2) {
            //$.each(treatCount, function (index3, value3) {
            vegTreatment.push({
                FMG: value1,
                Treatment: value.Treatment,
                //Slope: value2,
                Cost: 0.00,
                TreatmentDesc: value.TreatmentDesc
            })
            //});
        //});
    });
});
/*$.each(vegTreatmentInit, function (index0, value0) {
    $.each(value0.VegType, function (index1, value1) {
        $.each(slopeCount, function (index2, value2) {
            //$.each(treatCount, function (index3, value3) {
            vegTreatment.push({
                Code: value1,
                Treatment: value0.Treatment,
                Slope: value2,
                Cost: 0.00,
                TreatmentDesc: value0.TreatmentDesc
            })
            //});
        });
    });
});*/

/*
vegTreatment.push({
    Code: "GR1",
    VegType: "Short, Sparse Dry Climate Grass (Dynamic)",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GR2",
    VegType: "Low Load, Dry Climate Grass (Dynamic)",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GR3",
    VegType: "Low Load, Very Coarse, Humid Climate Grass (Dynamic)",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GR4",
    VegType: "Moderate Load, Dry Climate Grass (Dynamic)",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GR5",
    VegType: "Low Load, Humid Climate Grass (Dynamic)",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GR6",
    VegType: "Moderate Load, Humid Climate Grass (Dynamic)",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GR7",
    VegType: "High Load, Dry Climate Grass (Dynamic)",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GR8",
    VegType: "High Load, Very Coarse, Humid Climate Grass (Dynamic)",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GR9",
    VegType: "Very High Load, Humid Climate Grass (Dynamic)",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GS1",
    VegType: "Low Load, Dry Climate Grass-Shrub (Dynamic)",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GS2",
    VegType: "Moderate Load, Dry Climate Grass-Shrub (Dynamic)",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GS3",
    VegType: "Moderate Load, Humid Climate Grass-Shrub (Dynamic)",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GS4",
    VegType: "High Load, Humid Climate Grass-Shrub (Dynamic)",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SH1",
    VegType: "Low Load Dry Climate Shrub (Dynamic)",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SH2",
    VegType: "Moderate Load Dry Climate Shrub",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SH3",
    VegType: "Moderate Load, Humid Climate Shrub",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SH4",
    VegType: "Low Load, Humid Climate Timber-Shrub",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SH5",
    VegType: "High Load, Dry Climate Shrub",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SH6",
    VegType: "Low Load, Humid Climate Shrub",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SH7",
    VegType: "Very High Load, Dry Climate Shrub",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SH8",
    VegType: "High Load, Humid Climate Shrub",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SH9",
    VegType: "Very High Load, Humid Climate Shrub (Dynamic)",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TU1",
    VegType: "Low Load Dry Climate Timber-Grass-Shrub (Dynamic)",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TU2",
    VegType: "Moderate Load, Humid Climate Timber-Shrub",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TU3",
    VegType: "Moderate Load, Humid Climate Timber-Grass-Shrub (Dynamic)",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TU4",
    VegType: "Dwarf Conifer With Understory",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TU5",
    VegType: "Very High Load, Dry Climate Timber-Shrub",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TL1",
    VegType: "Low Load Compact Conifer Litter",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TL2",
    VegType: "Low Load Broadleaf Litter",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TL3",
    VegType: "Moderate Load Conifer Litter",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TL4",
    VegType: "Small Downed Logs",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TL5",
    VegType: "High Load Conifer Litter",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TL6",
    VegType: "Moderate Load Broadleaf Litter",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TL7",
    VegType: "Large Downed Logs",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TL8",
    VegType: "Long-Needle Litter",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TL9",
    VegType: "Very High Load Broadleaf Litter",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SB1",
    VegType: "Low Load Activity Fuel",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SB2",
    VegType: "Moderate Load Activity Fuel or Low Load Blowdown",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SB3",
    VegType: "High Load Activity Fuel or Moderate Load Blowdown",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SB4",
    VegType: "High Load Blowdown",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "NB1",
    VegType: "Urban/Developed",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "NB2",
    VegType: "Snow/Ice",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "NB3",
    VegType: "Agricultural",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "NB8",
    VegType: "Open Water",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "NB9",
    VegType: "Bare Ground",
    Treatment: "Thinning",
    Slope: "< 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})
vegTreatment.push({
    Code: "GR1",
    VegType: "Short, Sparse Dry Climate Grass (Dynamic)",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GR2",
    VegType: "Low Load, Dry Climate Grass (Dynamic)",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GR3",
    VegType: "Low Load, Very Coarse, Humid Climate Grass (Dynamic)",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GR4",
    VegType: "Moderate Load, Dry Climate Grass (Dynamic)",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GR5",
    VegType: "Low Load, Humid Climate Grass (Dynamic)",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GR6",
    VegType: "Moderate Load, Humid Climate Grass (Dynamic)",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GR7",
    VegType: "High Load, Dry Climate Grass (Dynamic)",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GR8",
    VegType: "High Load, Very Coarse, Humid Climate Grass (Dynamic)",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GR9",
    VegType: "Very High Load, Humid Climate Grass (Dynamic)",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GS1",
    VegType: "Low Load, Dry Climate Grass-Shrub (Dynamic)",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GS2",
    VegType: "Moderate Load, Dry Climate Grass-Shrub (Dynamic)",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GS3",
    VegType: "Moderate Load, Humid Climate Grass-Shrub (Dynamic)",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GS4",
    VegType: "High Load, Humid Climate Grass-Shrub (Dynamic)",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SH1",
    VegType: "Low Load Dry Climate Shrub (Dynamic)",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SH2",
    VegType: "Moderate Load Dry Climate Shrub",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SH3",
    VegType: "Moderate Load, Humid Climate Shrub",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SH4",
    VegType: "Low Load, Humid Climate Timber-Shrub",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SH5",
    VegType: "High Load, Dry Climate Shrub",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SH6",
    VegType: "Low Load, Humid Climate Shrub",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SH7",
    VegType: "Very High Load, Dry Climate Shrub",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SH8",
    VegType: "High Load, Humid Climate Shrub",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SH9",
    VegType: "Very High Load, Humid Climate Shrub (Dynamic)",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TU1",
    VegType: "Low Load Dry Climate Timber-Grass-Shrub (Dynamic)",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TU2",
    VegType: "Moderate Load, Humid Climate Timber-Shrub",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TU3",
    VegType: "Moderate Load, Humid Climate Timber-Grass-Shrub (Dynamic)",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TU4",
    VegType: "Dwarf Conifer With Understory",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TU5",
    VegType: "Very High Load, Dry Climate Timber-Shrub",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TL1",
    VegType: "Low Load Compact Conifer Litter",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TL2",
    VegType: "Low Load Broadleaf Litter",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TL3",
    VegType: "Moderate Load Conifer Litter",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TL4",
    VegType: "Small Downed Logs",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TL5",
    VegType: "High Load Conifer Litter",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TL6",
    VegType: "Moderate Load Broadleaf Litter",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TL7",
    VegType: "Large Downed Logs",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TL8",
    VegType: "Long-Needle Litter",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TL9",
    VegType: "Very High Load Broadleaf Litter",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SB1",
    VegType: "Low Load Activity Fuel",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SB2",
    VegType: "Moderate Load Activity Fuel or Low Load Blowdown",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SB3",
    VegType: "High Load Activity Fuel or Moderate Load Blowdown",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SB4",
    VegType: "High Load Blowdown",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "NB1",
    VegType: "Urban/Developed",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "NB2",
    VegType: "Snow/Ice",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "NB3",
    VegType: "Agricultural",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "NB8",
    VegType: "Open Water",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "NB9",
    VegType: "Bare Ground",
    Treatment: "Thinning",
    Slope: "> 30%",
    Cost: 100.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})
vegTreatment.push({
    Code: "GR1",
    VegType: "Short, Sparse Dry Climate Grass (Dynamic)",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GR2",
    VegType: "Low Load, Dry Climate Grass (Dynamic)",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GR3",
    VegType: "Low Load, Very Coarse, Humid Climate Grass (Dynamic)",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GR4",
    VegType: "Moderate Load, Dry Climate Grass (Dynamic)",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GR5",
    VegType: "Low Load, Humid Climate Grass (Dynamic)",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GR6",
    VegType: "Moderate Load, Humid Climate Grass (Dynamic)",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GR7",
    VegType: "High Load, Dry Climate Grass (Dynamic)",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GR8",
    VegType: "High Load, Very Coarse, Humid Climate Grass (Dynamic)",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GR9",
    VegType: "Very High Load, Humid Climate Grass (Dynamic)",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GS1",
    VegType: "Low Load, Dry Climate Grass-Shrub (Dynamic)",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GS2",
    VegType: "Moderate Load, Dry Climate Grass-Shrub (Dynamic)",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GS3",
    VegType: "Moderate Load, Humid Climate Grass-Shrub (Dynamic)",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GS4",
    VegType: "High Load, Humid Climate Grass-Shrub (Dynamic)",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SH1",
    VegType: "Low Load Dry Climate Shrub (Dynamic)",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SH2",
    VegType: "Moderate Load Dry Climate Shrub",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SH3",
    VegType: "Moderate Load, Humid Climate Shrub",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SH4",
    VegType: "Low Load, Humid Climate Timber-Shrub",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SH5",
    VegType: "High Load, Dry Climate Shrub",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SH6",
    VegType: "Low Load, Humid Climate Shrub",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SH7",
    VegType: "Very High Load, Dry Climate Shrub",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SH8",
    VegType: "High Load, Humid Climate Shrub",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SH9",
    VegType: "Very High Load, Humid Climate Shrub (Dynamic)",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TU1",
    VegType: "Low Load Dry Climate Timber-Grass-Shrub (Dynamic)",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TU2",
    VegType: "Moderate Load, Humid Climate Timber-Shrub",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TU3",
    VegType: "Moderate Load, Humid Climate Timber-Grass-Shrub (Dynamic)",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TU4",
    VegType: "Dwarf Conifer With Understory",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TU5",
    VegType: "Very High Load, Dry Climate Timber-Shrub",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TL1",
    VegType: "Low Load Compact Conifer Litter",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TL2",
    VegType: "Low Load Broadleaf Litter",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TL3",
    VegType: "Moderate Load Conifer Litter",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TL4",
    VegType: "Small Downed Logs",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TL5",
    VegType: "High Load Conifer Litter",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TL6",
    VegType: "Moderate Load Broadleaf Litter",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TL7",
    VegType: "Large Downed Logs",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TL8",
    VegType: "Long-Needle Litter",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TL9",
    VegType: "Very High Load Broadleaf Litter",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SB1",
    VegType: "Low Load Activity Fuel",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SB2",
    VegType: "Moderate Load Activity Fuel or Low Load Blowdown",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SB3",
    VegType: "High Load Activity Fuel or Moderate Load Blowdown",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SB4",
    VegType: "High Load Blowdown",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "NB1",
    VegType: "Urban/Developed",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "NB2",
    VegType: "Snow/Ice",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "NB3",
    VegType: "Agricultural",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "NB8",
    VegType: "Open Water",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "NB9",
    VegType: "Bare Ground",
    Treatment: "Burning",
    Slope: "< 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})
vegTreatment.push({
    Code: "GR1",
    VegType: "Short, Sparse Dry Climate Grass (Dynamic)",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GR2",
    VegType: "Low Load, Dry Climate Grass (Dynamic)",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GR3",
    VegType: "Low Load, Very Coarse, Humid Climate Grass (Dynamic)",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GR4",
    VegType: "Moderate Load, Dry Climate Grass (Dynamic)",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GR5",
    VegType: "Low Load, Humid Climate Grass (Dynamic)",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GR6",
    VegType: "Moderate Load, Humid Climate Grass (Dynamic)",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GR7",
    VegType: "High Load, Dry Climate Grass (Dynamic)",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GR8",
    VegType: "High Load, Very Coarse, Humid Climate Grass (Dynamic)",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GR9",
    VegType: "Very High Load, Humid Climate Grass (Dynamic)",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GS1",
    VegType: "Low Load, Dry Climate Grass-Shrub (Dynamic)",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GS2",
    VegType: "Moderate Load, Dry Climate Grass-Shrub (Dynamic)",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GS3",
    VegType: "Moderate Load, Humid Climate Grass-Shrub (Dynamic)",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "GS4",
    VegType: "High Load, Humid Climate Grass-Shrub (Dynamic)",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SH1",
    VegType: "Low Load Dry Climate Shrub (Dynamic)",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SH2",
    VegType: "Moderate Load Dry Climate Shrub",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SH3",
    VegType: "Moderate Load, Humid Climate Shrub",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SH4",
    VegType: "Low Load, Humid Climate Timber-Shrub",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SH5",
    VegType: "High Load, Dry Climate Shrub",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SH6",
    VegType: "Low Load, Humid Climate Shrub",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SH7",
    VegType: "Very High Load, Dry Climate Shrub",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SH8",
    VegType: "High Load, Humid Climate Shrub",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SH9",
    VegType: "Very High Load, Humid Climate Shrub (Dynamic)",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TU1",
    VegType: "Low Load Dry Climate Timber-Grass-Shrub (Dynamic)",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TU2",
    VegType: "Moderate Load, Humid Climate Timber-Shrub",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TU3",
    VegType: "Moderate Load, Humid Climate Timber-Grass-Shrub (Dynamic)",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TU4",
    VegType: "Dwarf Conifer With Understory",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TU5",
    VegType: "Very High Load, Dry Climate Timber-Shrub",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TL1",
    VegType: "Low Load Compact Conifer Litter",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TL2",
    VegType: "Low Load Broadleaf Litter",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TL3",
    VegType: "Moderate Load Conifer Litter",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TL4",
    VegType: "Small Downed Logs",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TL5",
    VegType: "High Load Conifer Litter",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TL6",
    VegType: "Moderate Load Broadleaf Litter",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TL7",
    VegType: "Large Downed Logs",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TL8",
    VegType: "Long-Needle Litter",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "TL9",
    VegType: "Very High Load Broadleaf Litter",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SB1",
    VegType: "Low Load Activity Fuel",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SB2",
    VegType: "Moderate Load Activity Fuel or Low Load Blowdown",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SB3",
    VegType: "High Load Activity Fuel or Moderate Load Blowdown",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "SB4",
    VegType: "High Load Blowdown",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "NB1",
    VegType: "Urban/Developed",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "NB2",
    VegType: "Snow/Ice",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "NB3",
    VegType: "Agricultural",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "NB8",
    VegType: "Open Water",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

vegTreatment.push({
    Code: "NB9",
    VegType: "Bare Ground",
    Treatment: "Burning",
    Slope: "> 30%",
    Cost: 75.00,
    TreatmentDesc: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})
*/
