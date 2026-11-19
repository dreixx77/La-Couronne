# La Couronne — Website

A responsive, animated static website for La Couronne, a sustainable beauty brand featuring cluster false eyelashes made from pineapple leaf fiber (PALF).

## Files

- `index.html` — page content and sections
- `style.css` — responsive styling, transitions, and animations
- `script.js` — mobile navigation, scroll reveals, product selection notification, and contact form behavior
- `assets/` — your supplied logo and product image, plus the two supplied design references

## Preview locally

Open `index.html` in a browser. For a more reliable local preview, run a small static server from this folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a new repository on GitHub (for example, `la-couronne-website`).
2. Upload the contents of this folder to the repository's root. Make sure `index.html`, `style.css`, `script.js`, and `assets/` are at the top level.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then click **Save**.
6. Wait for GitHub Pages to publish. Your site URL will appear in the Pages settings.

## Before publishing — customize these details

Open `script.js` and update:

```js
const SITE_CONFIG = {
  contactEmail: "YOUR_OFFICIAL_EMAIL",
  links: {
    ecommerce: "YOUR_SHOP_URL",
    facebook: "YOUR_FACEBOOK_PAGE",
    instagram: "YOUR_INSTAGRAM_PROFILE",
    tiktok: "YOUR_TIKTOK_PROFILE"
  }
};
```

Use your real business email and profile/store URLs. The contact form uses the visitor's email app (`mailto:`); it does not store or send messages through a server. To collect inquiries directly on the website, connect a form service or backend.

## Notes

- No prices, business email, phone number, or profile URLs were invented. Add confirmed details before launch.
- Google Fonts are loaded online; the site still has serif and sans-serif fallback fonts if unavailable.
- The product selection button is a front-end interaction/demo, not a payment or checkout system.
