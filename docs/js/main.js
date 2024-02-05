
      $(document).ready(function(){
        
      $('.bike-slider').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000

    });
    // slider02
      $('.slider').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000

    });
  
          

    });
    // ---------------------------------------------------
     var m = [1, 2, 3, 4, 5, 6, 7, 8, 9]
     var ms = m.sort(function(){
                return Math.random() - 0.5
                
            })
    console.log(ms)
    // ----------------------------------------------------
    const map = new Map()
    map.set('0', '1')
    map.set('s2', '2s')
    map.set('3s', 's3')
    const arrA = [map.values()]
    const arr = [...map.values()]
    const result = arr.map(value => parseInt(value, 10))
    console.log(arrA)
    console.log(result)
    console.log(map)        
    // -----------------------------------------------------
    const VS = new Set(['S', 'F', 'D'])
    console.log(VS);
    const people = [
        {name: 'Max', age: 31, status: 'I'},
        {name: 'Sam', age: 31, status: 'D'},
        {name: 'Dan', age: 31, status: 'S'}
    ]
    const peopleWidthValidStatus = people
      .filter(person => VS.has(person.status))
      .map(person => person.name)
    console.log(peopleWidthValidStatus);  //Sam, Dan 
    // ----------------------------------------------------
    const result01 = [5, 7, 9]
    const result02 = result01.slice(1);
        console.log(result02);
        result02.pop()
        // pop() removes the last element of an array
        console.log(result02)
        result02.push(4)
        console.log(result02); 
    // ------------------------------------------------------
    const animals = ["ant", "bison", "camel", "duck", "elephant"];

    console.warn(animals.slice(1));
    console.log(animals.slice(2));
    // Expected output: Array ["camel", "duck", "elephant"]

    console.log(animals.slice(1, 4));
    // Expected output: Array ["bison", "camel", "duck"]
    //Вызов slice(1, 4) извлечёт элементы со второго по четвёртый (элементы по индексам 1, 2 и 3)
    console.log(animals.slice(2, 4));
    // Expected output: Array ["camel", "duck"]

    console.log(animals.slice(1, 5));
    // Expected output: Array ["bison", "camel", "duck", "elephant"]

    console.log(animals.slice(-2));
    // Expected output: Array ["duck", "elephant"]

    console.log(animals.slice(2, -1));
    // Expected output: Array ["camel", "duck"]

    console.log(animals.slice());
    // --------------------------------------------------------