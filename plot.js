function draw() {
    try {
        const expressao = document.getElementById("equacao").value;

        const expressaoCompilada = math.compile(expressao);

        const valorX = math.range(-25, 25, 0.5).toArray();
        const valorY = valorX.map(function(x) {
            return expressaoCompilada.eval({ x: x });
        });

        const traco = {
            x: valorX,
            y: valorY,
            type: "scatter"
        };

        const data = [traco];
        Plotly.newPlot("plot", data);
    } catch (err) {
        console.error(err);
    }
}

document.getElementById("formulario").onsubmit = function(event) {
    event.preventDefault();
    draw();
};
