const fetchPokemon = () => {
  const promises = [];
  for (let i = 1; i <= 18; i++) {
      const url = `https://pokeapi.co/api/v2/type/${i}`;
      promises.push(fetch(url).then((res) => res.json()));
  }
  Promise.all(promises).then((results) => {
      const pokemon = results.map((result) => ({
          name: result.name,
          pokemon_count: result.pokemon.length
      }));
      var count = 0;
      var pokemon_name = [];
      var pokemon_x = [];
      for (i=0; i<18; i++) {
        count = count + pokemon[i].pokemon_count
        pokemon_name.push(pokemon[i].name);
        pokemon_x.push(pokemon[i].pokemon_count)
      }
      console.log(pokemon_name);
      console.log(pokemon_x)

      var pokeData = {
        labels: pokemon_name,
        datasets: [{
            data: pokemon_x,
            backgroundColor: [
              "rgba(206, 176, 44, 0.81)",
              "rgba(255, 0, 0, 0.77)",
              "rgba(197, 120, 212, 0.42)",
              "rgba(197, 120, 249, 0.99)",
              "rgba(197, 169, 50, 0.99)",
              "rgba(197, 138, 0, 0.99)",
              "rgba(197, 217, 0, 0.99)",
              "rgba(197, 62, 224, 0.39)",
              "rgba(151, 243, 239, 0.21)",
              "rgba(241, 98, 12, 0.89)",
              "rgba(24, 100, 240, 0.9)",
              "rgba(24, 241, 97, 0.9)",
              "rgba(249, 225, 23, 0.9)",
              "rgba(233, 28, 158, 0.82)",
              "rgba(0, 225, 245, 0.74)",
              "rgba(130, 97, 255, 1)",
              "rgba(130, 99, 26, 0.31)",
              "rgba(206, 90, 73, 0.81)"
            ]
        }]
      };
      var ctx = document.getElementById('myChart').getContext('2d');
      var polarAreaChart = new Chart(ctx, {
        type: 'polarArea',
        data: pokeData
      });
    });     
  };

fetchPokemon()