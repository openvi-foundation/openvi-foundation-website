import { execFile } from 'node:child_process';
import { mkdir, mkdtemp, rm, writeFile, rename } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { promisify } from 'node:util';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const run = promisify(execFile);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public/articles');
const lib = (file) => pathToFileURL(path.join(root, 'node_modules', file)).href;

const chrome =
    process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const presets = [
    { name: 'Aura', global: 'Aura', file: '@openvue/themes/umd/aura.min.js' },
    { name: 'Nide', global: 'Nide', file: '@openvue/themes/umd/nide.min.js' }
];

const figures = [
    {
        slug: 'nide-vs-aura-colour',
        width: 520,
        height: 250,
        template: `
            <div class="stack">
                <div class="row">
                    <Button label="Save changes" />
                    <Button label="Cancel" severity="secondary" />
                    <Button label="Preview" outlined />
                </div>
                <Message severity="success">Invoice sent to the customer.</Message>
                <Message severity="error">The payment could not be processed.</Message>
                <div class="row">
                    <Tag value="Paid" severity="success" />
                    <Tag value="Pending" severity="warn" />
                    <Tag value="Overdue" severity="danger" />
                    <Tag value="Draft" severity="secondary" />
                </div>
            </div>`
    },
    {
        slug: 'nide-vs-aura-segmented',
        width: 520,
        height: 215,
        template: `
            <div class="stack">
                <Tabs value="0">
                    <TabList>
                        <Tab value="0">Overview</Tab>
                        <Tab value="1">Activity</Tab>
                        <Tab value="2">Settings</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel value="0"><p class="text">Revenue is up 12% on last month.</p></TabPanel>
                    </TabPanels>
                </Tabs>
                <SelectButton v-model="period" :options="['Day', 'Week', 'Month']" />
            </div>`,
        data: { period: 'Week' }
    },
    {
        slug: 'nide-vs-aura-density',
        width: 520,
        height: 380,
        template: `
            <div class="stack">
                <div class="field">
                    <label class="label" for="name">Name</label>
                    <InputText id="name" v-model="name" />
                </div>
                <div class="field">
                    <label class="label">Role</label>
                    <Select v-model="role" :options="['Admin', 'Editor', 'Viewer']" />
                </div>
                <div class="row">
                    <div class="check"><Checkbox inputId="c1" v-model="email" binary /><label for="c1">Email updates</label></div>
                    <div class="check"><Checkbox inputId="c2" v-model="digest" binary /><label for="c2">Weekly digest</label></div>
                </div>
                <div class="row">
                    <div class="check"><RadioButton inputId="r1" value="monthly" v-model="plan" /><label for="r1">Monthly</label></div>
                    <div class="check"><RadioButton inputId="r2" value="yearly" v-model="plan" /><label for="r2">Yearly</label></div>
                </div>
                <div class="check"><ToggleSwitch v-model="twoFactor" /><span>Two-factor sign-in</span></div>
                <div class="row">
                    <Button label="Create user" />
                    <Button label="Cancel" severity="secondary" text />
                </div>
            </div>`,
        data: { name: 'Ana Petrović', role: 'Editor', email: true, digest: false, plan: 'monthly', twoFactor: true }
    }
];

const componentNames = [
    'Button',
    'Message',
    'Tag',
    'Tabs',
    'TabList',
    'Tab',
    'TabPanels',
    'TabPanel',
    'SelectButton',
    'InputText',
    'Select',
    'Checkbox',
    'RadioButton',
    'ToggleSwitch'
];

const panelPage = (preset, figure) => `<!doctype html>
<html><head><meta charset="utf-8"><style>
    *, *::before, *::after { box-sizing: border-box; }
    html, body { margin: 0; background: var(--p-content-background, #fff); color: var(--p-text-color); }
    body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased; padding: 28px;
    }
    .stack { display: flex; flex-direction: column; gap: 18px; }
    .row { display: flex; flex-wrap: wrap; align-items: center; gap: 10px 14px; }
    .field { display: flex; flex-direction: column; gap: 6px; }
    .field > .p-inputtext, .field > .p-select { width: 100%; }
    .label { font-size: 0.875rem; font-weight: 500; }
    .check { display: flex; align-items: center; gap: 8px; font-size: 0.9375rem; }
    .text { margin: 0; font-size: 0.9375rem; color: var(--p-text-muted-color); }
</style>
<script src="${lib('vue/dist/vue.global.prod.js')}"></script>
<script src="${lib('openvue/umd/openvue.min.js')}"></script>
<script src="${lib(preset.file)}"></script>
</head>
<body><div id="app"></div>
<script>
    const app = Vue.createApp({
        template: ${JSON.stringify(figure.template)},
        data: () => (${JSON.stringify(figure.data ?? {})})
    });
    app.use(OpenVue.Config, { theme: { preset: OpenVue.Themes.${preset.global}, options: { darkModeSelector: '.dark' } } });
    ${JSON.stringify(componentNames)}.forEach((name) => app.component(name, OpenVue[name]));
    app.mount('#app');
</script>
</body></html>`;

const gap = 28;
const pad = 40;
const labelHeight = 34;

const sheet = (figure) => `<!doctype html>
<html><head><meta charset="utf-8"><style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
        background: #f3f4f6; padding: ${pad}px;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
    }
    .grid { display: grid; grid-template-columns: repeat(2, ${figure.width}px); gap: ${gap}px; }
    .name { height: ${labelHeight}px; font-size: 15px; font-weight: 600; color: #1f2329; letter-spacing: 0.01em; }
    iframe {
        display: block; width: ${figure.width}px; height: ${figure.height}px; border: 1px solid #e3e5e8;
        border-radius: 12px; background: #fff;
    }
</style></head>
<body><div class="grid">
    ${presets
        .map(
            (preset) => `<div><div class="name">${preset.name}</div>
    <iframe src="${preset.global.toLowerCase()}-${figure.slug}.html" scrolling="no"></iframe></div>`
        )
        .join('')}
</div></body></html>`;

const dir = await mkdtemp(path.join(tmpdir(), 'nide-'));
await mkdir(outDir, { recursive: true });

for (const figure of figures) {
    for (const preset of presets) {
        await writeFile(
            path.join(dir, `${preset.global.toLowerCase()}-${figure.slug}.html`),
            panelPage(preset, figure)
        );
    }
    const page = path.join(dir, `${figure.slug}.html`);
    await writeFile(page, sheet(figure));

    const width = pad * 2 + figure.width * 2 + gap;
    const height = pad * 2 + labelHeight + figure.height;
    const shot = path.join(dir, `${figure.slug}.png`);

    await run(chrome, [
        '--headless',
        '--disable-gpu',
        '--hide-scrollbars',
        '--allow-file-access-from-files',
        '--force-device-scale-factor=2',
        `--window-size=${width},${height}`,
        '--virtual-time-budget=5000',
        `--screenshot=${shot}`,
        `file://${page}`
    ]);

    const out = path.join(outDir, `${figure.slug}.png`);
    await rename(shot, out);
    console.log('wrote', path.relative(root, out), `${width * 2}x${height * 2}`);
}

await rm(dir, { recursive: true, force: true });
