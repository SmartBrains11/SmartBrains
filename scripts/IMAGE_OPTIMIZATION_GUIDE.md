# Image Optimization Guide

## 🎯 Quick Start

### 1. Install Dependencies
```bash
npm install --save-dev sharp
```

### 2. Run Conversion Script
```bash
node scripts/convert-images-to-webp.js
```

### 3. Update Image References
After conversion, update your code to use `.webp` extensions instead of `.jpg`/`.png`.

---

## 📋 Image Size Targets

| Image Type | Max Dimensions | Quality | Target Size | Examples |
|------------|---------------|---------|-------------|----------|
| **Hero Images** | 1920×1080 | 85% | <200 KB | hero1.jpg, hero-about.png |
| **Section Images** | 1200×800 | 85% | <150 KB | workshops.jpg, mentor.jpeg |
| **Thumbnails** | 600×400 | 80% | <80 KB | Small icons, avatars |
| **OG Images** | 1200×630 | 85% | <150 KB | og-default.jpg, og-about.jpg |

---

## 🔄 Before → After Examples

### Example 1: Hero Image
```tsx
// ❌ BEFORE (Heavy PNG)
<Image
  src="/images/hero1.png"
  alt="Smart Brains Hero"
  width={1920}
  height={1080}
  priority
/>

// ✅ AFTER (Optimized WebP)
<Image
  src="/images/hero1.webp"
  alt="Smart Brains Hero"
  width={1920}
  height={1080}
  priority
  sizes="100vw"
/>
```

### Example 2: Section Image
```tsx
// ❌ BEFORE (No lazy loading)
<Image
  src="/images/workshops.jpg"
  alt="Workshop"
  width={1200}
  height={800}
/>

// ✅ AFTER (WebP + lazy loading)
<Image
  src="/images/workshops.webp"
  alt="Workshop"
  width={1200}
  height={800}
  loading="lazy"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

---

## 🚀 Expected Performance Improvements

### Before Optimization
- **LCP:** 4.5-6s (mobile)
- **Total Image Size:** ~3-5 MB
- **PageSpeed Score:** 40-60

### After Optimization
- **LCP:** 2-3s (mobile) ✅
- **Total Image Size:** ~800KB-1.5MB ✅
- **PageSpeed Score:** 80-90+ ✅

### Specific Improvements
- ✅ **50-70% reduction** in image file sizes
- ✅ **Faster LCP** (Largest Contentful Paint)
- ✅ **Lower TBT** (Total Blocking Time) from YouTube embeds
- ✅ **Better CLS** (Cumulative Layout Shift) with proper dimensions

---

## 📝 Manual Optimization Checklist

### For Each Image:
- [ ] Convert to WebP format
- [ ] Add explicit `width` and `height` attributes
- [ ] Add `sizes` attribute for responsive images
- [ ] Use `priority` ONLY for hero/LCP images
- [ ] Use `loading="lazy"` for below-the-fold images
- [ ] Add descriptive `alt` text for SEO

### For External Images (Pexels, etc.):
```tsx
// ✅ Use Next.js Image with proper configuration
<Image
  src="https://images.pexels.com/photos/..."
  alt="Description"
  width={800}
  height={600}
  loading="lazy"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

Add to `next.config.js`:
```js
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.pexels.com',
    },
    {
      protocol: 'https',
      hostname: 'i.ytimg.com', // For YouTube thumbnails
    },
  ],
},
```

---

## 🎬 YouTube Embed Optimization

### Before (Heavy iframe):
```tsx
<iframe
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="Video"
  allowFullScreen
/>
```
**Impact:** ~500KB per video loaded immediately

### After (Lite component):
```tsx
import { LiteYouTubeEmbed } from '@/components/shared/LiteYouTubeEmbed';

<LiteYouTubeEmbed
  videoId="VIDEO_ID"
  title="Video Title"
  className="w-full h-[260px]"
/>
```
**Impact:** ~50KB thumbnail, iframe loads only on click

---

## 🔍 Testing & Validation

### 1. Local Testing
```bash
npm run build
npm run start
```

### 2. PageSpeed Insights
Test your live site:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- Test URL: `https://smartbrainsindia.in`

### 3. Key Metrics to Monitor
- **LCP:** Should be <2.5s (good), <4s (needs improvement)
- **FID:** Should be <100ms
- **CLS:** Should be <0.1
- **TBT:** Should be <200ms

---

## 🛠️ Troubleshooting

### Issue: Images not loading
- Check file paths are correct
- Verify WebP files were created successfully
- Check browser compatibility (WebP is supported in all modern browsers)

### Issue: Layout shift (CLS)
- Always add explicit `width` and `height` attributes
- Use `sizes` attribute for responsive images
- Reserve space with aspect-ratio CSS if needed

### Issue: Slow LCP
- Ensure hero image has `priority` prop
- Preload critical images in `<head>`
- Check image is actually WebP and optimized

---

## 📚 Additional Resources

- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Web.dev Image Optimization](https://web.dev/fast/#optimize-your-images)
- [WebP Format Guide](https://developers.google.com/speed/webp)

---

## 🎯 Future-Proof Workflow

### When Adding New Images:
1. **Resize** to appropriate dimensions before adding
2. **Convert** to WebP using the script or online tools
3. **Add** with Next.js `<Image>` component
4. **Specify** width, height, and sizes
5. **Use** `loading="lazy"` unless it's above the fold
6. **Test** on mobile and desktop

### Recommended Tools:
- **Squoosh:** https://squoosh.app/ (online image optimizer)
- **Sharp CLI:** For batch processing
- **ImageOptim:** For Mac users
- **TinyPNG:** For quick compression
