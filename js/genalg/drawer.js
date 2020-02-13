class Drawer{
    constructor(canvas){
        this.canvas=canvas
        this.ctx=canvas.getContext("2d");
        this.ctx.lineWidth=8
    }


    drawPoints(arr){
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.fillStyle = "black";
        for(var i=0; i<arr.length; i++){
            var x=arr[i]["x"]
            var y=arr[i]["y"]
            this.ctx.fillRect(x, y, 10, 10)
        }
    }

    drawLines(arr){
        
        this.ctx.beginPath()
            var offset= 10 /2
            for (var i = 0; i < arr.length; i++) {
                var nextobj = (i + 1) % arr.length
                this.ctx.moveTo(arr[i]["x"] + offset, arr[i]["y"] +offset)
                this.ctx.lineTo(arr[nextobj]["x"] + offset, arr[nextobj]["y"] +offset)
            }
            this.ctx.closePath()
        
            this.ctx.stroke()

    }


}