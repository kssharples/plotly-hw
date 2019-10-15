function buildMetadata(sample) {
    var metadataURL = "/metadata/" + sample;
    var panelMetadata = d3.select("#sample-metadata");

    panelMetadata.html("");
    d3.json(metadataURL).then(function (data) {
        Object.entries(data).forEach(([key, value]) => {
            panelMetadata.appen("h6").text(`${key}: ${value}`
            );
        })
    })
}