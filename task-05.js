    // Area of a triangle given the length of its three sides
    function areaOfTriangle(sideA, sideB, sideC){
        // semiperimeter of a triangle
        var semiperimeter = (sideA + sideB + sideC) / 2;
        // Using Heron's formula 
        var sideAdifference = semiperimeter - sideA;
        var sideBdifference = semiperimeter - sideB;
        var sideCdifference = semiperimeter - sideC;
        
        var area = Math.sqrt(semiperimeter * sideAdifference * sideBdifference * sideCdifference);
        console.log("Area of Triangle: " + area);
    }

    areaOfTriangle(8, 9, 10);