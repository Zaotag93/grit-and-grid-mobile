// --- MOBILE APP 4-TAB MANAGER ---
function switchTab(tabName) {
    // Hide all tabs
    document.getElementById('tab_sheet').classList.remove('active-tab');
    document.getElementById('tab_inv').classList.remove('active-tab');
    document.getElementById('tab_magic').classList.remove('active-tab');
    document.getElementById('tab_ref').classList.remove('active-tab');

    // Remove active state from buttons
    document.getElementById('tab_btn_sheet').classList.remove('active');
    document.getElementById('tab_btn_inv').classList.remove('active');
    document.getElementById('tab_btn_magic').classList.remove('active');
    document.getElementById('tab_btn_ref').classList.remove('active');

    // Show target tab and highlight button
    document.getElementById('tab_' + tabName).classList.add('active-tab');
    document.getElementById('tab_btn_' + tabName).classList.add('active');
}

// --- GRIT & GRID SLOT MANAGEMENT ---
let lastProfession = "";

function getActiveSlotKey() {
    const slotSelect = document.getElementById('charSlotSelect');
    return slotSelect ? slotSelect.value : 'char1';
}

function saveCharacterSlot() {
    const slotKey = getActiveSlotKey();
    const charData = {};
    const query = 'input, select, textarea';
    const inputs = document.querySelectorAll(query);

    inputs.forEach(el => {
        if (el.id && !['charSlotSelect', 'ref_categorySelect', 'backpack_notes', 'leftPaneSelect', 'rightPaneSelect', 'grimoire_type'].includes(el.id)) {
            if (el.type === 'checkbox') charData[el.id] = el.checked;
            else charData[el.id] = el.value;
        }
    });

    localStorage.setItem('gritGrid_' + slotKey, JSON.stringify(charData));
    const slotName = document.getElementById('charSlotSelect').options[document.getElementById('charSlotSelect').selectedIndex].text;
    alert('Contractor dossier saved to ' + slotName + '!');
}

function switchCharacterSlot() {
    const slotKey = getActiveSlotKey();
    const saved = localStorage.getItem('gritGrid_' + slotKey);
    const query = 'input, select, textarea';
    const inputs = document.querySelectorAll(query);

    if (saved) {
        const charData = JSON.parse(saved);
        inputs.forEach(el => {
            if (charData[el.id] !== undefined) {
                if (el.type === 'checkbox') el.checked = charData[el.id];
                else el.value = charData[el.id];
            }
        });
    } else {
        inputs.forEach(el => {
            if (['charSlotSelect', 'ref_categorySelect', 'backpack_notes'].includes(el.id)) return;
            if (el.type === 'checkbox') el.checked = false;
            else if (el.tagName === 'SELECT') el.selectedIndex = 0;
            else if (el.type === 'number') el.value = (el.id.startsWith('stat_')) ? '30' : '';
            else el.value = '';
        });

        document.getElementById('char_currHp').value = '8';
        document.getElementById('char_maxHp').value = '8';
        document.getElementById('inv_gold').value = '20';
    }

    const profSelect = document.getElementById('char_prof_select');
    lastProfession = profSelect ? profSelect.value : "";

    const customBox = document.getElementById('char_prof_custom');
    if (profSelect && profSelect.value === 'Custom') customBox.style.display = 'block';
    else if (customBox) customBox.style.display = 'none';

    toggleMasterBackpack();
    toggleGrimoireSize();
    calcSkills();
}

function createNewCharacterSlot() {
    if (confirm("Are you sure you want to clear this slot? This will wipe the character data permanently.")) {
        localStorage.removeItem('gritGrid_' + getActiveSlotKey());
        switchCharacterSlot();
        alert("Slot cleared!");
    }
}

function setAsActive() {
    const currentSlot = getActiveSlotKey();
    if (currentSlot === 'char1') {
        alert("This character is already your Active Contractor!");
        return;
    }
    if (confirm("Move this character to the Active Contractor slot?")) {
        const savedData = localStorage.getItem('gritGrid_' + currentSlot);
        if (savedData) {
            localStorage.setItem('gritGrid_char1', savedData);
            localStorage.removeItem('gritGrid_' + currentSlot);
            document.getElementById('charSlotSelect').value = 'char1';
            switchCharacterSlot();
            alert("Character is now Active!");
        } else {
            alert("Save the character first!");
        }
    }
}

function backupCharacter() {
    const currentSlot = getActiveSlotKey();
    if (['char2', 'char3', 'char4', 'char5'].includes(currentSlot)) {
        alert("Already in a Backup slot!");
        return;
    }
    if (confirm("Move this character to the Backup Roster?")) {
        const savedData = localStorage.getItem('gritGrid_' + currentSlot);
        if (savedData) {
            let targetSlot = null;
            for (let i = 2; i <= 5; i++) {
                if (!localStorage.getItem('gritGrid_char' + i)) {
                    targetSlot = 'char' + i;
                    break;
                }
            }
            if (!targetSlot) {
                alert("Backup Roster is full!");
                return;
            }
            localStorage.setItem('gritGrid_' + targetSlot, savedData);
            localStorage.removeItem('gritGrid_' + currentSlot);
            switchCharacterSlot();
            alert("Moved to " + targetSlot + "!");
        } else {
            alert("Save the character first!");
        }
    }
}

function archiveCharacter() {
    const currentSlot = getActiveSlotKey();
    if (['char8', 'char9', 'char10'].includes(currentSlot)) {
        alert("Already in the Morgue!");
        return;
    }
    if (confirm("Send this character to the Morgue (Archive)?")) {
        const savedData = localStorage.getItem('gritGrid_' + currentSlot);
        if (savedData) {
            let targetSlot = null;
            for (let i = 8; i <= 10; i++) {
                if (!localStorage.getItem('gritGrid_char' + i)) {
                    targetSlot = 'char' + i;
                    break;
                }
            }
            if (!targetSlot) {
                alert("The Morgue is full!");
                return;
            }
            localStorage.setItem('gritGrid_' + targetSlot, savedData);
            localStorage.removeItem('gritGrid_' + currentSlot);
            switchCharacterSlot();
            alert("Moved to " + targetSlot + " in the Morgue!");
        } else {
            alert("Save the character first!");
        }
    }
}

// --- AUTO-FILL & MATH LOGIC ---
function autoFillProfession() {
    const profSelect = document.getElementById('char_prof_select');
    const customBox = document.getElementById('char_prof_custom');
    const newProf = profSelect.value;

    if (newProf === 'Custom') customBox.style.display = 'block';
    else { customBox.style.display = 'none'; customBox.value = ''; }

    const dict = {
        "Tunnel Miner": { bonuses: { cqc: 20, tra: 20, arm: 10 }, tool: "Iron Pick" },
        "Acolyte Expulsee": { bonuses: { res: 20, med: 20, fai: 10 }, tool: "Carved Symbol of the Stars" },
        "Borderland Deserter": { bonuses: { sne: 20, shi: 20, tra: 10 }, tool: "Hemp Rope (50 ft)" },
        "Grave Robber": { bonuses: { loc: 20, sne: 20, cqc: 10 }, tool: "Iron Grappling Hook" },
        "Disgraced Scribe": { bonuses: { scr: 20, arc: 20, med: 10 }, tool: "3 Empty Glass Vials" }
    };

    if (lastProfession && lastProfession !== "Custom" && dict[lastProfession]) {
        const oldData = dict[lastProfession];
        for (const [skillId, value] of Object.entries(oldData.bonuses)) {
            const input = document.getElementById('bon_' + skillId);
            if (input) input.value = Math.max(0, (parseInt(input.value) || 0) - value);
        }
        for (let i = 1; i <= 12; i++) {
            const invSlot = document.getElementById('inv_s' + i);
            if (invSlot && invSlot.value === oldData.tool) { invSlot.value = ""; break; }
        }
    }

    if (newProf && newProf !== "Custom" && dict[newProf]) {
        const newData = dict[newProf];
        for (const [skillId, value] of Object.entries(newData.bonuses)) {
            const input = document.getElementById('bon_' + skillId);
            if (input) input.value = (parseInt(input.value) || 0) + value;
        }
        for (let i = 1; i <= 12; i++) {
            const invSlot = document.getElementById('inv_s' + i);
            if (invSlot && invSlot.value.trim() === "") { invSlot.value = newData.tool; break; }
        }
    }
    lastProfession = newProf;
    calcSkills();
}

function updateBackpackNotes() {
    const a1 = document.getElementById('inv_attach1').value;
    const a2 = document.getElementById('inv_attach2').value;
    const notesBox = document.getElementById('backpack_notes');
    const bpDict = {
        "Exterior Cargo Loops": "Adds 4 exterior lash-points. Inaccessible in combat.",
        "Sconce Rig": "Hands-free 360 light. Ruins stealth.",
        "Iron-Plate Baffle": "Absorbs rear hits (-1 slot Wear Tax).",
        "Oiled-Hide Water-Seal": "Protects against slime/rot. If punctured, traps moisture.",
        "Quiver-Latch": "Carry heavy secondary. Drawing takes extra action.",
        "Apothecary Tray": "Prevents vials shattering. Takes 2 internal slots.",
        "Bedroll & Camp Sling": "Shifts center of gravity downward.",
        "Drop-Away Release": "Instantly drop pack in emergencies.",
        "Signal-Bell": "Tripwire camp alarm. Minor stealth penalty.",
        "Scavenger Hook": "Keeps harvest clean. Attracts predators."
    };
    let result = "";
    if (a1 !== "None" && bpDict[a1]) result += "1. " + bpDict[a1] + "\n";
    if (a2 !== "None" && bpDict[a2]) result += "2. " + bpDict[a2] + "\n";
    notesBox.value = result.trim();
}

function toggleMasterBackpack() {
    const bp = document.getElementById('inv_backpack');
    const menu = document.getElementById('masterBackpackAttachments');
    if (bp && menu) {
        menu.style.display = (bp.value === 'Master') ? 'block' : 'none';
        if (bp.value === 'Master') updateBackpackNotes();
    }
}

function toggleGrimoireSize() {
    const type = document.getElementById('grimoire_type').value;
    for (let i = 11; i <= 30; i++) {
        const row = document.getElementById('grim_row_' + i);
        if (row) row.style.display = (type === '30') ? 'table-row' : 'none';
    }
}

function calcSkills() {
    const getVal = (id) => parseInt(document.getElementById(id).value) || 0;
    const str = getVal('stat_str'), dex = getVal('stat_dex'), int = getVal('stat_int');
    const wis = getVal('stat_wis'), con = getVal('stat_con'), cha = getVal('stat_cha');

    const skills = [
        { id: 'cqc', stat: str }, { id: 'shi', stat: dex }, { id: 'arm', stat: con }, { id: 'ran', stat: dex },
        { id: 'fai', stat: str }, { id: 'med', stat: int }, { id: 'res', stat: wis }, { id: 'voi', stat: int },
        { id: 'tra', stat: wis }, { id: 'loc', stat: dex }, { id: 'sne', stat: dex }, { id: 'trk', stat: wis },
        { id: 'arc', stat: wis }, { id: 'scr', stat: int }, { id: 'stf', stat: dex }, { id: 'app', stat: int }
    ];

    skills.forEach(sk => {
        const baseSpan = document.getElementById(`b_${sk.id}`);
        const totalSpan = document.getElementById(`t_${sk.id}`);
        const bonusInput = getVal(`bon_${sk.id}`);
        if (baseSpan && totalSpan) {
            baseSpan.innerText = sk.stat;
            totalSpan.innerText = Math.min(80, sk.stat + bonusInput);
        }
    });
}

function showRefCategory() {
    const cat = document.getElementById('ref_categorySelect').value;
    const container = document.getElementById('store_container');
    let html = '';

    if (cat === 'glossary') {
        html = `
        <table class="store-table">
            <tr><th>Rule / Term</th><th>Definition</th></tr>
            <tr><td><b>Wear Tax</b></td><td>Units digit 2, 3, or 4 on hit = Weapon Notch (-1 Dmg). Broken at 3.</td></tr>
            <tr><td><b>Blinding Dark</b></td><td>-20% physical checks, monsters gain +20% accuracy.</td></tr>
            <tr><td><b>Subdual Damage</b></td><td>Non-lethal drain. 0 HP drops contractor unconscious for 3 rounds.</td></tr>
            <tr><td><b>Infection</b></td><td>Failed CON vs filth. No natural healing, lose 1 HP daily.</td></tr>
        </table>`;
    }
    else if (cat === 'melee') {
        html = `
        <table class="store-table">
            <tr><th>Weapon</th><th>Dmg</th><th>Cost</th><th>Notes</th></tr>
            <tr><td>Improvised</td><td>2</td><td>-</td><td>Shatters on any Notch.</td></tr>
            <tr><td>Dagger</td><td>4</td><td>5 gp</td><td>Easily concealed.</td></tr>
            <tr><td>Shortsword</td><td>6</td><td>15 gp</td><td>Standard sidearm.</td></tr>
            <tr><td>Mace / Warhammer</td><td>7</td><td>25 gp</td><td>Cathedral sanctioned blunt.</td></tr>
            <tr><td>Battleaxe</td><td>8</td><td>40 gp</td><td>Heavy.</td></tr>
            <tr><td>Guild Halberd</td><td>10</td><td>75 gp</td><td>Heavy. Reach.</td></tr>
        </table>`;
    }
    else if (cat === 'ranged') {
        html = `
        <table class="store-table">
            <tr><th>Weapon</th><th>Dmg</th><th>Cost</th><th>Notes</th></tr>
            <tr><td>Hunting Shortbow</td><td>5</td><td>25 gp</td><td>60 ft range. Two hands.</td></tr>
            <tr><td>Composite Recurve</td><td>6</td><td>50 gp</td><td>Requires STR 40%.</td></tr>
            <tr><td>Scavenged Crossbow</td><td>6</td><td>45 gp</td><td>1 action reload. Pierces 1 DR.</td></tr>
        </table>`;
    }
    else if (cat === 'armor') {
        html = `
        <table class="store-table">
            <tr><th>Armor Type</th><th>DR</th><th>Cost</th><th>Notes</th></tr>
            <tr><td>Thick Rags</td><td>1</td><td>10 gp</td><td>Standard issue.</td></tr>
            <tr><td>Boiled Leather</td><td>2</td><td>30 gp</td><td>Lightweight.</td></tr>
            <tr><td>Chain Mail</td><td>3</td><td>75 gp</td><td>Heavy. Sprint/climb penalty.</td></tr>
            <tr><td>Splint Mail</td><td>4</td><td>150 gp</td><td>Heavy. -20% Sneak.</td></tr>
        </table>`;
    }
    else if (cat === 'shields') {
        html = `
        <table class="store-table">
            <tr><th>Shield Type</th><th>Cost</th><th>Function</th></tr>
            <tr><td>Reinforced Buckler</td><td>20 gp</td><td>Splinters if damage > 3.</td></tr>
            <tr><td>Wooden Target</td><td>15 gp</td><td>Splinters if damage > 5.</td></tr>
            <tr><td>Wooden Vanguard</td><td>75 gp</td><td>Planted cover. Splinters > 12.</td></tr>
        </table>`;
    }
    else if (cat === 'logistics') {
        html = `
        <table class="store-table">
            <tr><th>Item</th><th>Cost</th><th>Utility</th></tr>
            <tr><td>Iron Spikes (12)</td><td>1 gp</td><td>Wedges doors shut.</td></tr>
            <tr><td>Hemp Rope (50ft)</td><td>1 gp</td><td>Supports 300 lbs.</td></tr>
            <tr><td>Caltrops (20)</td><td>1 gp</td><td>Halts pursuers, 1 dmg.</td></tr>
            <tr><td>Grappling Hook</td><td>1 gp</td><td>Secures rope over chasms.</td></tr>
        </table>`;
    }
    else if (cat === 'backpack') {
        html = `
        <table class="store-table">
            <tr><th>Attachment</th><th>Cost</th><th>Effect</th></tr>
            <tr><td>Cargo Loops</td><td>30 sp</td><td>4 exterior lash-points.</td></tr>
            <tr><td>Sconce Rig</td><td>20 sp</td><td>Hands-free light. Ruins stealth.</td></tr>
            <tr><td>Iron-Plate Baffle</td><td>50 sp</td><td>Absorbs rear Wear Tax hits.</td></tr>
        </table>`;
    }
    else if (cat === 'arcane') {
        html = `
        <table class="store-table">
            <tr><th>Lvl</th><th>Spell</th><th>Effect</th></tr>
            <tr><td>0</td><td>Spark</td><td>Ignites flammable objects instantly.</td></tr>
            <tr><td>0</td><td>Murmur</td><td>Projects whisper 30 ft.</td></tr>
            <tr><td>1</td><td>Aether Dart</td><td>Auto-hits for 4 dmg, bypasses DR.</td></tr>
            <tr><td>1</td><td>Shatter-Lock</td><td>Opens locks loudly.</td></tr>
        </table>`;
    }
    else if (cat === 'divine') {
        html = `
        <table class="store-table">
            <tr><th>Lvl</th><th>Prayer</th><th>Effect</th></tr>
            <tr><td>0</td><td>Seal of Seven</td><td>Temporary chalk ward.</td></tr>
            <tr><td>1</td><td>Purify Food/Water</td><td>Cures Infection.</td></tr>
            <tr><td>1</td><td>Mend Flesh</td><td>Heals HP = 2 + Tens Digit of Resolve.</td></tr>
        </table>`;
    }
    container.innerHTML = html;
}

window.addEventListener('DOMContentLoaded', () => {
    switchCharacterSlot();
    showRefCategory();
});
