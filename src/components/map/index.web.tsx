import React from "react"
import { View, StyleSheet } from "react-native"

export function MapView({ children, initialRegion, style }: any) {
  const lat = initialRegion?.latitude || -23.561187
  const lng = initialRegion?.longitude || -46.656451

  const markers: any[] = []

  const processChild = (child: any) => {
    if (!child) return
    if (Array.isArray(child)) {
      child.forEach(processChild)
    } else if (child?.props?.coordinate) {
      let title = child.props.identifier || "Local"
      // Check if callout child has text info
      if (child.props.children) {
        const callout = Array.isArray(child.props.children)
          ? child.props.children.find((c: any) => c?.type?.name === "Callout" || c?.props?.onPress)
          : child.props.children
      }
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
          L.marker([m.lat, m.lng]).addTo(map).bindPopup(m.title);
        });
      </script>
    </body>
    </html>
  `

  return (
    <View style={[styles.container, style]}>
      <iframe
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
