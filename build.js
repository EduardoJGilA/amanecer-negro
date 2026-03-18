const fs = require('fs');
const path = require('path');

const output = {
    "_meta": {
        "sources": [
            {
                "json": "AN",
                "abbreviation": "AN",
                "full": "Amanecer Negro Expansión",
                "authors": ["MiGaki", "User"],
                "convertedBy": ["MiGaki", "Gemini"],
                "version": "0.1",
                "color": "ffffff",
                "dateReleased": "2023-04-22"
            },
            {
                "json": "WildCardHomebrew",
                "abbreviation": "WCHB",
                "full": "Wild Card Rogue (Revised)",
                "authors": ["User"],
                "convertedBy": ["Gemini"],
                "version": "1.0.0"
            }
        ],
        "status": "wip",
        "dateAdded": 1682210907,
        "dateLastModified": Math.round(Date.now() / 1000)
    },
    "subclass": [],
    "subclassFeature": [],
    "race": [],
    "item": []
};

// Folders to scan
const directoriesToScan = [
    { dir: 'subclasses', keys: ['subclass', 'subclassFeature', 'item'] },
    { dir: 'races', keys: ['race', 'item'] }
];

directoriesToScan.forEach(({ dir, keys }) => {
    const fullPath = path.join(__dirname, dir);
    if (fs.existsSync(fullPath)) {
        const files = fs.readdirSync(fullPath);
        for (const file of files) {
            if (!file.endsWith('.json')) continue;
            try {
                const data = JSON.parse(fs.readFileSync(path.join(fullPath, file), 'utf-8'));
                
                // Collect sources
                if (data._meta && data._meta.sources) {
                    data._meta.sources.forEach(source => {
                        const exists = output._meta.sources.find(s => s.json === source.json);
                        if (!exists) {
                            output._meta.sources.push(source);
                        }
                    });
                }

                // Append arrays for specific keys
                keys.forEach(key => {
                    if (data[key] && Array.isArray(data[key])) {
                        output[key].push(...data[key]);
                    }
                });
            } catch (err) {
                console.error(`Error parsing ${file}:`, err);
            }
        }
    }
});

// Remove empty arrays to keep JSON clean
['subclass', 'subclassFeature', 'race', 'item'].forEach(key => {
    if (output[key].length === 0) delete output[key];
});

fs.writeFileSync(path.join(__dirname, 'amanecer-negro.json'), JSON.stringify(output, null, 2));
console.log('Successfully compiled amanecer-negro.json!');
