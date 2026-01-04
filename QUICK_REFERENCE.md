# ⚡ Quick Reference: Image & Video Optimization

## 🖼️ Image Optimization Patterns

### Hero Image (Above the Fold)
```tsx
<Image
  src="/images/hero.webp"
  alt="Smart Brains Hero"
  width={1920}
  height={1080}
  priority  // ⚠️ ONLY for hero/LCP image
  sizes="100vw"
  className="object-cover"
/>
```

### Section Image (Below the Fold)
```tsx
<Image
  src="/images/section.webp"
  alt="Description"
  width={1200}
  height={800}
  loading="lazy"  // ✅ Lazy load
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="object-cover"
/>
```

### Fill Container Image (Responsive)
```tsx
<div className="relative w-full aspect-[16/9]">
  <Image
    src="/images/photo.webp"
    alt="Description"
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover"
    loading="lazy"
  />
</div>
```

### External Image (Pexels, etc.)
```tsx
<Image
  src="https://images.pexels.com/photos/..."
  alt="Description"
  width={800}
  height={600}
  loading="lazy"
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-cover"
/>
```

---

## 🎬 Video Optimization

### YouTube Embed (Lite Component)
```tsx
import { LiteYouTubeEmbed } from '@/components/shared/LiteYouTubeEmbed';

<LiteYouTubeEmbed
  videoId="dQw4w9WgXcQ"
  title="Video Title"
  className="w-full h-[260px]"
/>
```

### Extract Video ID from URL
```
https://www.youtube.com/watch?v=dQw4w9WgXcQ
                                  ↑↑↑↑↑↑↑↑↑↑↑
                                  Video ID

https://www.youtube.com/embed/dQw4w9WgXcQ
                              ↑↑↑↑↑↑↑↑↑↑↑
                              Video ID
```

---

## 📏 Image Size Targets

| Type | Dimensions | Quality | Size | Example |
|------|-----------|---------|------|---------|
| Hero | 1920×1080 | 85% | <200KB | hero1.webp |
| Section | 1200×800 | 85% | <150KB | workshops.webp |
| Thumbnail | 600×400 | 80% | <80KB | thumb.webp |
| OG Image | 1200×630 | 85% | <150KB | og-default.webp |

---

## 🚫 Common Mistakes to Avoid

### ❌ DON'T
```tsx
// Missing width/height
<Image src="/image.jpg" alt="..." />

// Using priority on all images
<Image src="/image.jpg" alt="..." priority />

// No sizes attribute
<Image src="/image.jpg" alt="..." width={1200} height={800} />

// Heavy YouTube iframe
<iframe src="https://www.youtube.com/embed/..." />

// Regular img tag
<img src="/image.jpg" alt="..." />
```

### ✅ DO
```tsx
// Proper dimensions
<Image src="/image.webp" alt="..." width={1200} height={800} />

// Priority ONLY for hero
<Image src="/hero.webp" alt="..." width={1920} height={1080} priority />

// With sizes attribute
<Image 
  src="/image.webp" 
  alt="..." 
  width={1200} 
  height={800}
  sizes="(max-width: 768px) 100vw, 50vw"
/>

// Lite YouTube embed
<LiteYouTubeEmbed videoId="..." title="..." />

// Next.js Image component
<Image src="/image.webp" alt="..." width={800} height={600} loading="lazy" />
```

---

## 🔄 Quick Conversion Commands

### Convert Single Image
```bash
npx sharp-cli --input hero.jpg --output hero.webp --webp-quality 85
```

### Convert All Images in Directory
```bash
node scripts/convert-images-to-webp.js
```

### Check Image Size
```bash
# Windows
dir /s *.webp

# Mac/Linux
du -sh public/images/*.webp
```

---

## ✅ Pre-Deployment Checklist

- [ ] All JPG/PNG converted to WebP
- [ ] All `<img>` tags replaced with `<Image>`
- [ ] Hero image has `priority` prop
- [ ] Other images have `loading="lazy"`
- [ ] All images have `width` and `height` (or `fill`)
- [ ] All images have `sizes` attribute
- [ ] YouTube embeds use `LiteYouTubeEmbed`
- [ ] `next.config.js` has remote patterns
- [ ] Build succeeds (`npm run build`)
- [ ] Test on mobile and desktop
- [ ] Run PageSpeed Insights

---

## 📱 Responsive Sizes Guide

### Full Width
```tsx
sizes="100vw"
```

### Half Width on Desktop
```tsx
sizes="(max-width: 768px) 100vw, 50vw"
```

### Third Width on Desktop
```tsx
sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
```

### Fixed Max Width
```tsx
sizes="(max-width: 768px) 100vw, 1200px"
```

---

## 🎯 Performance Targets

| Metric | Good | Needs Improvement | Poor |
|--------|------|-------------------|------|
| LCP | <2.5s | 2.5-4s | >4s |
| FID | <100ms | 100-300ms | >300ms |
| CLS | <0.1 | 0.1-0.25 | >0.25 |
| TBT | <200ms | 200-600ms | >600ms |

---

## 🔗 Quick Links

- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Next.js Image Docs](https://nextjs.org/docs/app/api-reference/components/image)
- [WebP Converter](https://squoosh.app/)
- [Image Size Analyzer](https://www.websiteplanet.com/webtools/imagecompressor/)

---

**Keep this file handy for quick reference!** 📌
