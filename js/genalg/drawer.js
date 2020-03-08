class Drawer {
    constructor() {


    }


    drawPoints(arr,el) {
        // console.log(arr)
        var x = []
        var y = []
        
        for (var i = 0; i < arr.length; i++) {
            x.push(arr[i]["x"])
            y.push(arr[i]["y"])
        }
        var data = {
            name:'Points',
            x: x,
            y: y,
            mode: 'markers',
            marker:{color:'green'}
        }
        var layout = {hovermode:'closest',
        margin: {
            l: 40,
            r: 20,
            b: 20,
            t: 20,
            pad: 4
          },     
          showlegend: false,
        automargin: false};

        var config = {responsive: true,'displayModeBar': false}


        Plotly.newPlot(el,[data],layout,config);
    }

    drawLines(arr,el) {
        var canvas = el
        var x = []
        var y = []

        for (var i = 0; i < arr.length; i++) {
            x.push(arr[i]["x"])
            y.push(arr[i]["y"])
        }
        x.push(arr[0]["x"])
        y.push(arr[0]["y"])

        var data1 = {
            name:'Path',
            x: x,
            y: y,
            mode: 'lines'
        }
        var data2 = {
            name:'Points',
            x: x,
            y: y,
            mode: 'markers',
            marker:{color:'green'}
        }
        var layout = {hovermode:'closest',
        margin: {
            l: 40,
            r: 20,
            b: 20,
            t: 20,
            pad: 4
          },     
          showlegend: false,  
        automargin: false};

        var config = {responsive: true,
            'displayModeBar': false}

        var data = [data1, data2]
        Plotly.newPlot(canvas, data,layout,config);


    }

    drawPerformance(obj,el){
        var canvas = el
        var x = obj["x"]
        var y = obj["y"]


        var data = {
            name:'Path',
            x: x,
            y: y,
            mode: 'lines'
        }
        var layout = {hovermode:'closest',
        margin: {
            l: 40,
            r: 20,
            b: 20,
            t: 20,
            pad: 4
          },     
          showlegend: false,  
        automargin: false};

        var config = {responsive: true,
            'displayModeBar': false}

        
        Plotly.newPlot(canvas, [data],layout,config);
    }


}