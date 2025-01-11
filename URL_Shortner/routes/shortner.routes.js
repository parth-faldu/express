import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';
import { Router } from 'express';

const router = Router();

const DATA_FILE = path.join("data", "links.json");

const loadLinks = async () => {
    try {
        const data = await fs.readFile(DATA_FILE, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        if (error.code === "ENOENT") {
            await writeFile(DATA_FILE, JSON.stringify({}));
            return {};
        }
        throw error;
    }
}
const saveLinks = async (links) => {
    await writeFile(DATA_FILE, JSON.stringify(links));
}

router.get("/", async (req, res) => {
    try {
        const file = await fs.readFile(path.join("views", "index.html"));
        const links = await loadLinks();

        const content = file.toString().replaceAll("{{ Shortened_urls }}",Object.entries(links).map(([shortCode,url]) => 
            `<li><a href="/${shortCode}" target="_blank">${req.host}/${shortCode}</a> -> ${url}</li>`).join(""));

        return res.send(content);
    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal server error");
    }
});

router.post("/", async (req, res) => {
    try {
        const { url, shortCode } = req.body;
        const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");

        const links = await loadLinks();

        if (links[finalShortCode]) {
            return res.status(400).send("Short Code Already Exists. Please Choose Another..!!");
        }

        links[finalShortCode] = url;
        await saveLinks(links);
        return res.redirect("/");
    } catch (error) {
        console.error(error);
    }
});

router.get("/:shortCode",async (req,res) => {
    try {
        const {shortCode} = req.params;
        const links = await loadLinks();

        if(!links[shortCode]) return res.status(404).send("404 error occurred");

        return res.redirect(links[shortCode]);
    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal server error");
    }
});

// default export
// export default router;

// Named exports
export const shortnerRoutes = router;