#!/usr/bin/env bash
set -e
echo "→ Limpiando public/…"
rm -rf public
echo "→ Creando public/…"
mkdir -p public
echo "→ Copiando index.html…"
cp index.html public/
echo "→ Copiando CSS, JS y assets…"
cp -r css public/
cp -r javascript public/
cp -r assets public/
echo "→ Copiando vistas…"
mkdir -p public/views
cp views/*.html public/views/
echo "✅ Build completo."
