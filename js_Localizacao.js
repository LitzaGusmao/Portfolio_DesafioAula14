
    function initMap() {
        // Coordenadas da localização do Shopping da Bahia
        var shoppingBahia = { lat: -12.980528105253303, lng: -38.46518158502145 };

        // Crie um novo mapa
        var mapa = new google.maps.Map(document.getElementById('mapa'), {
            center: shoppingBahia,
            zoom: 15 // Ajuste o nível de zoom conforme necessário
        });

        // Adicione um marcador para a localização do Shopping da Bahia
        var marcador = new google.maps.Marker({
            position: shoppingBahia,
            map: mapa,
            title: Mary Christmas Store
        });
    }


