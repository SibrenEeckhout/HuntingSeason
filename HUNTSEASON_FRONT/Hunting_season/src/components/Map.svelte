<script>
    import { onMount } from 'svelte';
    import L from 'leaflet';

    // Import Leaflet CSS
    import 'leaflet/dist/leaflet.css';

    let map;

    const locations = [
        { name: 'Location 1', location: [50.9244, 3.2069] },
        { name: 'Location 2', location: [50.9325, 3.2128] },
        { name: 'Location 3', location: [50.9174, 3.2035] }
        ];
        
    onMount(() => {
        // Initialize the map
        map = L.map('map').setView([50.9244, 3.2069], 14);

        // Add a tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        const customIcon = L.icon({
            iconUrl: '/Images/output-onlinejpgtools.png', // URL to your custom icon image
            iconSize: [32, 32], // Size of the icon
            iconAnchor: [16, 32], // Anchor point of the icon
            popupAnchor: [0, -32] // Popup anchor point
        });

        // Loop through the list of locations and add markers with custom icons
        locations.forEach(location => {
            L.marker(location.location, { icon: customIcon }).addTo(map)
                .bindPopup(location.name);
        });
    });
</script>

<style>
    #map {
        height: 100%;
        width: 100%;
    }
</style>

<div id="map"></div>
