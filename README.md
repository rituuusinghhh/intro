# Rituraj Singh — Personal Portfolio Website

A premium, fast, fully responsive personal website. **100% free** — no paid hosting, domain, database or subscription. It runs on **GitHub Pages** and you update it by editing **one text file** (`content.js`) and uploading photos. You never have to touch the HTML or CSS.

---

## 1. What is in this folder

```
rituraj-portfolio/
├── index.html        ← page structure (don't edit)
├── style.css         ← design (don't edit)
├── script.js         ← makes the page work (don't edit)
├── content.js        ← ★ ALL YOUR TEXT, LINKS & PHOTO NAMES — edit this one ★
├── favicon.svg       ← small icon shown in the browser tab
├── .nojekyll         ← tells GitHub to publish files as they are (keep it)
├── README.md         ← this guide
└── assets/
    └── images/       ← ★ YOUR PHOTOS GO HERE ★
        ├── profile.jpg   (you add this: your main photo)
        ├── placeholder-profile.svg / placeholder.svg   (shown until you add real photos)
        ├── projects/     ← project pictures
        └── gallery/      ← gallery photos
```

Everything shown in the website right now is **sample placeholder content**. Anything written like `[EDIT: ...]` is a placeholder and is **highlighted with a dotted underline** on the live site, so you can easily see what is left to fill in. Nothing about you has been invented — only the details you gave (your name, profession, and your association with *VIJAY SHREE POP & PVC* and *A.S. Computer & Coaching Classes*).

---

## 2. Create a free GitHub account

1. Go to **https://github.com** and click **Sign up**.
2. Enter your **email address**, create a **password**, and choose a **username**.
   - ⚠️ Your username becomes your website address: `https://USERNAME.github.io`. Choose something short and professional, like `riturajsingh`. (If it's taken, try `rituraj-singh` or `riturajsingh01`.)
3. Solve the puzzle, then enter the **verification code** GitHub emails to you.
4. When asked for a plan, choose **Free**.

---

## 3. Upload the website files

1. Click the **+** (top right) → **New repository**.
2. **Repository name:** type exactly `YOUR-USERNAME.github.io`
   (example: if your username is `riturajsingh`, the name is `riturajsingh.github.io`).
3. Choose **Public**.
4. Tick **Add a README file** (this lets you upload from the website easily). Click **Create repository**.
5. On the repository page click **Add file → Upload files**.
6. On your computer, open the `rituraj-portfolio` folder, select **everything inside it** (not the folder itself) and **drag it into the GitHub page**. Make sure the `assets` folder comes along.
   - If your computer hides the file `.nojekyll`, don't worry — the site works without it.
   - Tip: if folders won't drag, open the `assets` folder and upload its files into the same folder names on GitHub (see section 6 for how to upload into a folder).
7. Wait for the upload bars to finish. Scroll down and click the green **Commit changes** button.

When you finish you should see `index.html`, `style.css`, `script.js`, `content.js`, `favicon.svg` and the `assets` folder in the list.

---

## 4. Turn on GitHub Pages (this publishes your website)

1. In your repository click **Settings** (top row of tabs).
2. In the left menu click **Pages**.
3. Under **Build and deployment → Source** choose **Deploy from a branch**.
4. Under **Branch** choose **main** and the folder **/ (root)**, then click **Save**.
5. Wait 1–3 minutes and refresh the page. A box appears at the top: **"Your site is live at …"**.

---

## 5. Your permanent public website link

Your link is always:

### `https://YOUR-USERNAME.github.io`

(Example: `https://riturajsingh.github.io`). It is free, permanent and can be shared on WhatsApp, Instagram bio, LinkedIn, business cards and visiting cards. Open it on your phone as well to see the mobile version.

> **Optional, one-time:** for a nicer preview picture when you share the link on WhatsApp/Facebook, open `index.html` once, find `YOUR-USERNAME` (in the `og:image` line near the top) and replace it with your GitHub username. The site works perfectly without this.

---

## 6. How to update your website in the future

All edits are done in the GitHub website — no software needed. After every change click **Commit changes**; your live site updates in about **1 minute** (press **Ctrl + F5** or pull-to-refresh to see it).

### A) Change text (name, tagline, about, skills, achievements, links…)

1. Open your repository on GitHub → click **`content.js`**.
2. Click the **✏️ pencil icon** (top right of the file) to edit.
3. Change the text **inside the "quotes"**. Replace every `[EDIT: ...]` (including the brackets) with your real information.
4. Click **Commit changes…** (green button) → **Commit changes** again.

**Golden rules (so nothing breaks):**
- Only change words between `"double quotes"`.
- Don't delete quotes `"`, commas `,`, brackets `[ ]` or braces `{ }`.
- Need a quote inside your text? Type it as `\"`.
- Every item in a list needs a comma after it.
- If the site ever shows *"content.js could not be read"*, you have a missing quote or comma. Click **History** on the file and go back to the last working version.

### B) Replace your profile photo
1. Prepare a **portrait** photo (see "Prepare your photos" below). Name it **`profile.jpg`**.
2. On GitHub open the folder **assets → images**.
3. Click **Add file → Upload files**, drop `profile.jpg`, then **Commit changes**.
4. Done — it appears automatically in the hero and About sections.
   - Want a different name or type (`.png`, `.webp`)? Upload it and change `photo: "assets/images/profile.jpg"` in `content.js` to match. File names are **case-sensitive** (`Photo.JPG` ≠ `photo.jpg`).
   - Want a different picture in the About section? Upload it and set `photo:` under `about:` in `content.js`.

### C) Add new gallery photos
1. Open **assets → images → gallery** → **Add file → Upload files** → drop your photos → **Commit changes**.
2. Open `content.js`, find `gallery: [` and copy one line, for example:
   ```js
   { src: "assets/images/gallery/my-photo.jpg", caption: "Photoshoot at the studio", category: "Portraits" },
   ```
3. Paste it as a new line, change the file name, caption and category, **Commit changes**.
   Categories create the filter buttons automatically. To remove a photo, delete its line.

### D) Add, edit or delete a project
1. Upload the project picture to **assets → images → projects**.
2. In `content.js`, find `projects:` → `items: [`.
3. **Add:** copy one whole `{ ... },` block, paste it, then change `category`, `title`, `text`, `image` and (optional) `link`.
   - `category` must match one of the names in the `categories` line above it (spelled exactly).
   - Leave `link: ""` if you don't want a "View project" button.
4. **Edit:** change the words. **Delete:** remove the whole `{ ... },` block.

### E) Update skills, achievements, timeline, interests, goals
Same idea — each is a list in `content.js`. Edit the words, copy a block to add one, delete a block to remove one.
To show a **progress bar** on skills, set `showSkillLevels: true` near the top and set each skill's `level` (0–100) honestly.

### F) Update WhatsApp, Instagram, Email, LinkedIn and other social links
In `content.js` find `contact:`.
- **WhatsApp number:** digits only with the country code, no `+` and no spaces. India example: `919876543210`.
- **Email:** replace `your-email@example.com`.
- **Social links:** replace `YOUR_USERNAME` with your real username or paste the full profile link. To add another network, copy a line in `links:` (icons: `instagram, linkedin, facebook, youtube, twitter, github, globe, phone, mail, whatsapp`).
- Until a link is replaced, the button shows a friendly "not set up yet" message instead of opening a wrong page.

### G) Change colours or theme
In `content.js`, `settings:` →  `accentColor: "#d4af6a"` (gold). Try electric blue `"#4f8cff"`. `defaultTheme` can be `"dark"` or `"light"`.

### H) When everything is filled in
Set `highlightPlaceholders: false` to remove the dotted highlight.

---

## 7. Prepare your photos (so the site stays fast)

- **Format:** JPG (photos) or WebP. PNG only for logos/graphics with transparency.
- **Size:** about **1600 pixels** on the longest side is plenty.
- **File weight:** aim for **under 300 KB** per photo (profile photo under 500 KB).
- **Free tool:** open **https://squoosh.app** in your browser, drop a photo, choose *MozJPEG* or *WebP*, quality ~75, download. No account needed.
- Profile photo works best as a **portrait (4:5)** with your face in the upper-middle of the frame.
- Use simple file names: lowercase, no spaces (`studio-shoot-1.jpg`).

---

## 8. Troubleshooting

| Problem | Fix |
|---|---|
| Link shows 404 | Wait 2–5 minutes after enabling Pages. Check the repo name is exactly `USERNAME.github.io` and that `index.html` is in the top level (not inside another folder). |
| I changed something but don't see it | Wait 1–2 minutes, then hard-refresh (**Ctrl + F5**, or clear the browser tab on mobile). |
| A photo doesn't show | Check the file name and extension match exactly, including capital letters, and that it was uploaded into the correct folder. A grey sample picture appears when a file is missing. |
| "content.js could not be read" | Missing quote/comma. Use **History → previous version** on the file. |
| Social button says "not set up yet" | You still have `YOUR_USERNAME` / `example.com` in that link — replace it. |

---

## 9. About this website

- Built with plain **HTML5, CSS3 and vanilla JavaScript** — no frameworks, no build step, no database.
- Features: animated hero, interactive filterable timeline, skills, filterable projects, responsive gallery with lightbox (keyboard + swipe), achievements, interests & goals, contact (WhatsApp / email / social), dark & light theme, smooth scrolling, scroll animations, SEO metadata, custom favicon, automatic copyright year.
- Respects visitors' "reduce motion" setting and is keyboard accessible.
- Uses only free resources: the free Google Fonts (Inter & Playfair Display) and free open-source icons drawn inline. If the fonts can't load, the site automatically uses system fonts.
