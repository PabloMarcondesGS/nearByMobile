import React from "react"
import { View, StyleSheet } from "react-native"

export function MapView({ children, initialRegion, region, style }: any) {
  const currentRegion = region || initialRegion
  const lat = currentRegion?.latitude || -23.561187
  const lng = currentRegion?.longitude || -46.656451

  const markers: any[] = []

  const processChild = (child: any) => {
    if (!child) return
    if (Array.isArray(child)) {
      child.forEach(processChild)
    } else if (child?.props?.coordinate) {
      let title = child.props.identifier || "Ponto de Referência"
      markers.push({
        lat: child.props.coordinate.latitude,
        lng: child.props.coordinate.longitude,
        title: title,
      })
    }
  }

  React.Children.forEach(children, processChild)

  const markersJson = JSON.stringify(markers)

  const mapHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
      <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
      <style>
        html, body, #map { height: 100%; width: 100%; margin: 0; padding: 0; }
        .custom-popup { font-family: sans-serif; font-size: 13px; font-weight: bold; color: #257F49; }
      </style>
    </head>
    <body>
      <div id="map"></div>
      <script>
        const map = L.map('map').setView([${lat}, ${lng}], 15);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '© OpenStreetMap'
        }).addTo(map);

        const markersData = ${markersJson};
        markersData.forEach(m => {
          L.marker([m.lat, m.lng]).addTo(map).bindPopup('<div class="custom-popup">' + m.title + '</div>').openPopup();
        });
      </script>
    </body>
    </html>
  `

  return (
    <View style={[styles.container, style]}>
      <iframe
        key={`${lat}-${lng}-${markers.length}`}
        srcDoc={mapHtml}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
        title="Map"
      />
    </View>
  )
}

export function Marker({ children }: any) {
  return null
}

export function Callout({ children }: any) {
  return null
}

export default MapView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    minHeight: 350,
  },
})
