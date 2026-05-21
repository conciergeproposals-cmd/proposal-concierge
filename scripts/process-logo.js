// One-time script: removes near-white background from logo.png
// Run with: node scripts/process-logo.js

const sharp = require('sharp')
const path = require('path')

const INPUT  = path.join(__dirname, '../public/logo.png')
const OUTPUT = path.join(__dirname, '../public/logo-transparent.png')

const THRESHOLD = 240 // pixels with R, G, and B all >= this become transparent

async function main() {
  const { data, info } = await sharp(INPUT)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  const { width, height, channels } = info
  const pixels = new Uint8Array(data)

  for (let i = 0; i < pixels.length; i += channels) {
    const r = pixels[i]
    const g = pixels[i + 1]
    const b = pixels[i + 2]
    if (r >= THRESHOLD && g >= THRESHOLD && b >= THRESHOLD) {
      pixels[i + 3] = 0
    }
  }

  await sharp(Buffer.from(pixels.buffer), {
    raw: { width, height, channels },
  })
    .png()
    .toFile(OUTPUT)

  console.log(`Saved transparent logo to ${OUTPUT}`)
}

main().catch((err) => { console.error(err); process.exit(1) })
