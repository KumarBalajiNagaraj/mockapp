"use client"

import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

interface Location {
  city: string
  country: string
  label: string
  lat: number
  lng: number
}

/**
 * Orange-themed OpenStreetMap with custom markers.
 * Rendered client-side only (loaded via next/dynamic with ssr: false).
 */
export default function LocationMap({ locations }: { locations: Location[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<L.Map | null>(null)

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    /* ── Initialise map ── */
    const map = L.map(containerRef.current, {
      center: [30, 20],
      zoom: 2,
      minZoom: 2,
      maxZoom: 6,
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: false,
      dragging: true,
    })

    /* Light/muted tile layer — CartoDB Positron suits cream themes */
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      {
        subdomains: "abcd",
        maxZoom: 19,
      }
    ).addTo(map)

    /* Zoom control in bottom-right */
    L.control.zoom({ position: "bottomright" }).addTo(map)

    /* ── Custom orange markers ── */
    locations.forEach((loc) => {
      /* Pulsing outer ring via CSS animation */
      const pulseHtml = `
        <div style="position:relative;width:36px;height:36px;">
          <div style="
            position:absolute;inset:0;
            border-radius:50%;
            border:2px solid #ff612b;
            opacity:0.4;
            animation:locPulse 2.5s ease-out infinite;
          "></div>
          <div style="
            position:absolute;
            top:50%;left:50%;
            transform:translate(-50%,-50%);
            width:14px;height:14px;
            border-radius:50%;
            background:#ff612b;
            box-shadow:0 0 8px rgba(255,97,43,0.5);
          ">
            <div style="
              position:absolute;
              top:50%;left:50%;
              transform:translate(-50%,-50%);
              width:6px;height:6px;
              border-radius:50%;
              background:white;
            "></div>
          </div>
        </div>
      `

      const icon = L.divIcon({
        html: pulseHtml,
        className: "",
        iconSize: [36, 36],
        iconAnchor: [18, 18],
      })

      const marker = L.marker([loc.lat, loc.lng], { icon }).addTo(map)

      /* Tooltip styled to match the theme */
      marker.bindTooltip(
        `<div style="text-align:center;font-family:system-ui,sans-serif;">
          <div style="font-weight:600;font-size:13px;color:#1c1c1c;">${loc.city}</div>
          <div style="font-size:11px;color:#ff612b;font-weight:500;">${loc.label}</div>
        </div>`,
        {
          direction: "top",
          offset: [0, -20],
          opacity: 1,
          className: "loc-tooltip",
        }
      )
    })

    /* Fit bounds to show all markers with padding */
    const group = L.featureGroup(
      locations.map((l) => L.marker([l.lat, l.lng]))
    )
    map.fitBounds(group.getBounds().pad(0.4))

    mapRef.current = map

    return () => {
      map.remove()
      mapRef.current = null
    }
  }, [locations])

  return (
    <>
      {/* Pulse animation keyframes */}
      <style>{`
        @keyframes locPulse {
          0%   { transform: scale(0.6); opacity: 0.5; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        .loc-tooltip {
          background: white !important;
          border: 1px solid #e5e5e5 !important;
          border-radius: 8px !important;
          padding: 6px 10px !important;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08) !important;
        }
        .loc-tooltip::before {
          border-top-color: #e5e5e5 !important;
        }
        /* Mute the Leaflet default link styling */
        .leaflet-container a { color: inherit; }
      `}</style>
      <div
        ref={containerRef}
        className="w-full h-[360px] md:h-[440px] bg-white"
      />
    </>
  )
}
