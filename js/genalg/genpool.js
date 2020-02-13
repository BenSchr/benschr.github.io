class GenAlg{
    constructor(canvas){
        this.cities=[]
        this.canvas=canvas
    }

    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }


    createRandomCities(ncities){
            var height=this.canvas.height
            var width=this.canvas.width
            for (var i = 0; i < ncities; i++) {
                var x = this.getRndInteger(10, width - 10);
                var y = this.getRndInteger(10, height - 10)
                this.cities.push({ "x": x, "y": y })
            }
    }

    createCircleCities(ncities){
            var radius = this.canvas.width / 2 - 100;
            var x = this.canvas.width / 2 - 10;
            var y = this.canvas.height / 2 - 10;
            var angle = 2 * Math.PI / ncities;
            for (var i = 1; i <= ncities; i++) {
                var point_x = x + radius * Math.cos(i * angle)
                var point_y = y + radius * Math.sin(i * angle)
                this.cities.push({ "x": point_x, "y": point_y })
            }
        }



    getCities(){
        return this.cities
    }

    shuffleCities() {
        var newarray = JSON.parse(JSON.stringify(this.cities));
        for (var i = newarray.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = newarray[i];
            newarray[i] = newarray[j];
            newarray[j] = temp;
        }
        return newarray
    }

    




}