function switchTab(tabName) {
    document.getElementById('tab_sheet').classList.remove('active-tab');
    document.getElementById('tab_inv').classList.remove('active-tab');
    document.getElementById('tab_magic').classList.remove('active-tab');
    document.getElementById('tab_ref').classList.remove('active-tab');

    document.getElementById('tab_btn_sheet').classList.remove('active');
    document.getElementById('tab_btn_inv').classList.remove('active');
    document.getElementById('tab_btn_magic').classList.remove('active');
    document.getElementById('tab_btn_ref').classList.remove('active');

    document.getElementById('tab_' + tabName).classList.add('active-tab');
    document.getElementById('tab_btn_' + tabName).classList.add('active');
}

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
        if (el.id && !['charSlotSelect', 'ref_categorySelect', 'backpack_notes'].includes(el.id)) {
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
    if (confirm("Are you sure you want to clear this slot permanently?")) {
        localStorage.removeItem('gritGrid_' + getActiveSlotKey());
        switchCharacterSlot();
        alert("Slot cleared!");
    }
}

function setAsActive() {
    const currentSlot = getActiveSlotKey();
    if (currentSlot === 'char1') return alert("Already Active!");
    if (confirm("Move to Active Contractor?")) {
        const savedData = localStorage.getItem('gritGrid_' + currentSlot);
        if (savedData) {
            localStorage.setItem('gritGrid_char1', savedData);
            localStorage.removeItem('gritGrid_' + currentSlot);
            document.getElementById('charSlotSelect').value = 'char1';
            switchCharacterSlot();
            alert("Now Active!");
        } else { alert("Save first!"); }
    }
}

function backupCharacter() {
    const currentSlot = getActiveSlotKey();
    if (['char2', 'char3', 'char4', 'char5'].includes(currentSlot)) return alert("Already in Backup!");
    if (confirm("Move to Backup Roster?")) {
        const savedData = localStorage.getItem('gritGrid_' + currentSlot);
        if (savedData) {
            let targetSlot = null;
            for (let i = 2; i <= 5; i++) {
                if (!localStorage.getItem('gritGrid_char' + i)) { targetSlot = 'char' + i; break; }
            }
            if (!targetSlot) return alert("Backup Roster full!");
            localStorage.setItem('gritGrid_' + targetSlot, savedData);
            localStorage.removeItem('gritGrid_' + currentSlot);
            switchCharacterSlot();
            alert("Moved to " + targetSlot + "!");
        } else { alert("Save first!"); }
    }
}

function archiveCharacter() {
    const currentSlot = getActiveSlotKey();
    if (['char8', 'char9', 'char10'].includes(currentSlot)) return alert("Already in Morgue!");
    if (confirm("Send to Morgue?")) {
        const savedData = localStorage.getItem('gritGrid_' + currentSlot);
        if (savedData) {
            let targetSlot = null;
            for (let i = 8; i <= 10; i++) {
                if (!localStorage.getItem('gritGrid_char' + i)) { targetSlot = 'char' + i; break; }
            }
            if (!targetSlot) return alert("Morgue full!");
            localStorage.setItem('gritGrid_' + targetSlot, savedData);
            localStorage.removeItem('gritGrid_' + currentSlot);
            switchCharacterSlot();
            alert("Moved to " + targetSlot + "!");
        } else { alert("Save first!"); }
    }
}

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
        "Disgraced Scribe": { bonuses: { scr: 20, arc: 20, med: 10 }, tool: "3 Empty Glass Vials" },
        "Forgeworker": { bonuses: { arm: 20, shi: 20, cqc: 10 }, tool: "Mace/Warhammer" },
        "Beast Culler": { bonuses: { cqc: 20, trk: 20, sne: 10 }, tool: "Scavenged Iron Cleaver" },
        "Route Runner": { bonuses: { trk: 20, tra: 20, ran: 10 }, tool: "Bag of Caltrops (20)" },
        "Flesh-Stitcher": { bonuses: { med: 20, res: 20, voi: 10 }, tool: "Suture Needle & Thread" },
        "Quartermaster": { bonuses: { app: 20, loc: 20, scr: 10 }, tool: "Traveling Folio" }
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

function calcSkills() {
    const getVal = (id) => { const el = document.getElementById(id); return el ? parseInt(el.value) || 0 : 0; };
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

// ==========================================
// RESTORED BACKPACK & GRIMOIRE LOGIC
// ==========================================
function updateBackpackNotes() {
    const a1 = document.getElementById('inv_attach1').value;
    const a2 = document.getElementById('inv_attach2').value;
    const notesBox = document.getElementById('backpack_notes');
    const bpDict = {
        "Exterior Cargo Loops": "Adds 4 exterior lash-points. Cannot be accessed in combat.",
        "Sconce Rig": "Hands-free 360 light. Ruins stealth checks entirely.",
        "Iron-Plate Baffle": "Absorbs rear hits, reducing Wear Tax damage to internals by 1 slot.",
        "Oiled-Hide Water-Seal": "Protects against slime/rot. If punctured, traps moisture.",
        "Quiver-Latch": "Carry heavy secondary without holding it. Drawing takes extra action.",
        "Apothecary Tray": "Prevents vials shattering. Takes 2 internal slots permanently.",
        "Bedroll & Camp Sling": "Shifts center of gravity downward. Makes pack taller/wider.",
        "Drop-Away Release": "Instantly drop backpack in emergencies. Your gear is left behind.",
        "Signal-Bell": "String wire around camp. Constant minor penalty to stealth.",
        "Scavenger Hook": "Keeps harvest clean. Retains organic musk, attracts predators."
    };
    let result = "";
    if (a1 !== "None" && bpDict[a1]) result += "1. " + bpDict[a1] + "\n";
    if (a2 !== "None" && bpDict[a2]) result += "2. " + bpDict[a2] + "\n";
    if (notesBox) notesBox.value = result.trim();
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
    const type = document.getElementById('grimoire_type');
    if (!type) return;
    for (let i = 11; i <= 30; i++) {
        const row = document.getElementById('grim_row_' + i);
        if (row) row.style.display = (type.value === '30') ? 'table-row' : 'none';
    }
}

// ==========================================
// DICE ROLLER & REFERENCE DATABASE
// ==========================================
function toggleDiceModal() {
    const modal = document.getElementById('diceModal');
    if (modal) modal.style.display = (modal.style.display === 'flex') ? 'none' : 'flex';
}

function mobileRoll(type) {
    let result = 0;
    if (type === 'd100') result = Math.floor(Math.random() * 100) + 1;
    if (type === 'd10') result = Math.floor(Math.random() * 10) + 1;
    const units = result % 10;
    const output = document.getElementById('mobile_dice_output');
    if (output) {
        output.innerHTML = `<b>${type} Result:</b> <span style="color:#F26522; font-size:18px;">${result}</span><br><span style="font-size:12px; color:#aaa;">Units Digit (Damage/Notch): ${units}</span>`;
    }
}

function showRefCategory() {
    const cat = document.getElementById('ref_categorySelect');
    if (!cat) return;
    const container = document.getElementById('store_container');
    if (!container) return;
    let html = '';

    if (cat.value === 'glossary') {
        html = `
        <table class="store-table">
            <tr><th>Rule / Term</th><th>Mechanical Definition</th></tr>
            <tr><td><b>Wear Tax</b></td><td>If units digit of successful melee hit is 2, 3, or 4, weapon takes Notch (-1 Dmg). Broken at 3 Notches.</td></tr>
            <tr><td><b>Blinding Dark</b></td><td>No light. -20% to physical actions. Native monsters gain surprise & +20% accuracy.</td></tr>
            <tr><td><b>Subdual Damage</b></td><td>Non-lethal drain. Reaching 0 HP drops contractor unconscious for 3 rounds, waking with Lethargy (-20% move/checks).</td></tr>
            <tr><td><b>Infection</b></td><td>Failed CON check vs filth. No natural healing, lose 1 HP daily. Needs Antidote.</td></tr>
            <tr><td><b>Cognitive Strain</b></td><td>Migraine from magic fail. -20% all checks, -2 AC DR, half speed. Needs 4 hours rest.</td></tr>
        </table>`;
    }
    else if (cat.value === 'melee') {
        html = `
        <table class="store-table">
            <tr><th>Rank Gate</th><th>Weapon</th><th>Max Dmg</th><th>Cost</th><th>Notes</th></tr>
            <tr><td>10</td><td>Improvised (Rock/Shiv)</td><td>2</td><td>-</td><td>Shatters on any Notch (2,3,4)</td></tr>
            <tr><td>10</td><td>Dagger / Stiletto</td><td>4</td><td>5 gp</td><td>Easily concealed</td></tr>
            <tr><td>10</td><td>Fist-Blade / Cestus</td><td>3</td><td>12 gp</td><td>Leaves hand free, cannot be dropped</td></tr>
            <tr><td>10</td><td>Iron Pick / Handaxe</td><td>5</td><td>8 gp</td><td>Climbing/Breaching tool</td></tr>
            <tr><td>10</td><td>Shortsword / Machete</td><td>6</td><td>15 gp</td><td>Standard sidearm</td></tr>
            <tr><td>10</td><td>Spear / Pitchfork</td><td>6</td><td>10 gp</td><td>Reach (Attack behind vanguard)</td></tr>
            <tr><td>10</td><td>Mace / Warhammer</td><td>7</td><td>25 gp</td><td>Cathedral sanctioned blunt</td></tr>
            <tr><td>8</td><td>Heavy Footman's Mace</td><td>7</td><td>30 gp</td><td>Heavy. Crushing momentum</td></tr>
            <tr><td>8</td><td>Battleaxe / Longsword</td><td>8</td><td>40 gp</td><td>Heavy.</td></tr>
            <tr><td>8</td><td>Guild Halberd</td><td>10</td><td>75 gp</td><td>Heavy. Reach.</td></tr>
            <tr><td>6</td><td>Master-Forged Estoc</td><td>8</td><td>120 gp</td><td>Bypasses 1 pt of armor DR on hit</td></tr>
            <tr><td>5</td><td>Vanguard Poleaxe</td><td>10</td><td>350 gp</td><td>Heavy. Reach. Ultimate hybrid weapon</td></tr>
        </table>`;
    }
    else if (cat.value === 'ranged') {
        html = `
        <table class="store-table">
            <tr><th>Rank Gate</th><th>Weapon</th><th>Max Dmg</th><th>Cost</th><th>Notes</th></tr>
            <tr><td>10</td><td>Hunting Shortbow</td><td>5</td><td>25 gp</td><td>60 ft range. Two hands.</td></tr>
            <tr><td>10</td><td>Composite Recurve</td><td>6</td><td>50 gp</td><td>Requires STR 40% to draw</td></tr>
            <tr><td>10</td><td>Scavenged Crossbow</td><td>6</td><td>45 gp</td><td>1 action reload. Pierces 1 DR</td></tr>
            <tr><td>10</td><td>Quiver (10 Arrows/Bolts)</td><td>-</td><td>5 sp</td><td>Bundled ammunition</td></tr>
            <tr><td>8</td><td>Heavy Arbalest</td><td>8</td><td>90 gp</td><td>2 actions reload. Pierces heavy armor/shields</td></tr>
            <tr><td>5</td><td>Siege Crossbow</td><td>9</td><td>400 gp</td><td>2 actions reload. Ignores shields entirely</td></tr>
        </table>`;
    }
    else if (cat.value === 'armor') {
        html = `
        <table class="store-table">
            <tr><th>Rank Gate</th><th>Armor Type</th><th>AC (DR)</th><th>Cost</th><th>Notes</th></tr>
            <tr><td>10</td><td>Thick Rags</td><td>1</td><td>10 gp</td><td>Standard issue</td></tr>
            <tr><td>10</td><td>Boiled Leather</td><td>2</td><td>30 gp</td><td>Reliable lightweight</td></tr>
            <tr><td>10</td><td>Chain Mail</td><td>3</td><td>75 gp</td><td>Heavy. Penalty to sprint/swim/climb</td></tr>
            <tr><td>8</td><td>Splint / Scale Mail</td><td>4</td><td>150 gp</td><td>Heavy. -20% to Sneak</td></tr>
            <tr><td>7</td><td>Sapphire Cuirass</td><td>3</td><td>220 gp</td><td>Cold-iron plate. No heavy penalty</td></tr>
            <tr><td>5</td><td>Ruby-Etched Scale</td><td>4</td><td>450 gp</td><td>Acid & rust-spore immune</td></tr>
            <tr><td>4</td><td>Guild-Forged Plate</td><td>5</td><td>400 gp</td><td>Heavy. -20% Sneak, -10% Dodge</td></tr>
        </table>`;
    }
    else if (cat.value === 'shields') {
        html = `
        <table class="store-table">
            <tr><th>Rank Gate</th><th>Shield Type</th><th>Cost</th><th>Splinter Threshold & Function</th></tr>
            <tr><td>10</td><td>Reinforced Buckler</td><td>20 gp</td><td>Splinters if hit exceeds 3 dmg</td></tr>
            <tr><td>10</td><td>Spiked Punching</td><td>35 gp</td><td>Functions as weapon (Max 4). Splinters > 4 dmg</td></tr>
            <tr><td>10</td><td>Wooden Target</td><td>15 gp</td><td>Splinters if hit exceeds 5 dmg</td></tr>
            <tr><td>8</td><td>Vanguard Tower</td><td>75 gp</td><td>Massive front cover. Splinters > 12 dmg. Flammable.</td></tr>
            <tr><td>5</td><td>Iron Tower Shield</td><td>120 gp</td><td>Indestructible Bulwark (> 16 dmg). -10% to all Dodge checks.</td></tr>
        </table>`;
    }
    else if (cat.value === 'logistics') {
        html = `
        <table class="store-table">
            <tr><th>Item & Unit</th><th>Cost / Slot</th><th>Field Utility</th></tr>
            <tr><td>Iron Spikes (12)</td><td>1 gp / 1</td><td>Wedges doors shut</td></tr>
            <tr><td>Hemp Rope (50ft)</td><td>1 gp / 1</td><td>300 lbs. Roll DEX to climb unknotted.</td></tr>
            <tr><td>Silk Rope (50ft)</td><td>10 gp / 0.5</td><td>400 lbs. Silent and rot-resistant.</td></tr>
            <tr><td>Caltrops (20)</td><td>1 gp / 1</td><td>1 flat dmg & halts unarmored pursuers.</td></tr>
            <tr><td>Marbles (100)</td><td>5 sp / 1</td><td>DEX check or fall prone on smooth stone.</td></tr>
            <tr><td>Flour Sack</td><td>2 sp / 1</td><td>Reveals invisible predators or drafts.</td></tr>
            <tr><td>Grease Pot</td><td>3 sp / 1</td><td>Silences hinges (+20% sneak) or makes fire slick.</td></tr>
            <tr><td>Scent Flask</td><td>2 gp / 0.5</td><td>Masks human scent (-20% to wolf tracking).</td></tr>
            <tr><td>Grappling Hook</td><td>1 gp / 1</td><td>Secures rope over chasms (DEX check).</td></tr>
            <tr><td>Empty Vials (3)</td><td>1 gp / 0.5</td><td>Harvests biological monster salvage.</td></tr>
        </table>`;
    }
    else if (cat.value === 'backpack') {
        html = `
        <table class="store-table">
            <tr><th>Attachment</th><th>Cost</th><th>Function & Trade-Off</th></tr>
            <tr><td>Exterior Cargo Loops</td><td>30 sp</td><td><b>Function:</b> Adds 4 exterior lash-points. <b>Trade-Off:</b> Inaccessible during combat.</td></tr>
            <tr><td>Sconce Rig</td><td>20 sp</td><td><b>Function:</b> Rigid iron swing-arm for lantern/torch. <b>Trade-Off:</b> Ruins stealth.</td></tr>
            <tr><td>Iron-Plate Baffle</td><td>50 sp</td><td><b>Function:</b> Absorbs rear hits (-1 slot Wear Tax). <b>Trade-Off:</b> Adds base weight.</td></tr>
            <tr><td>Oiled-Hide Water-Seal</td><td>40 sp</td><td><b>Function:</b> Seamless pigskin bladder. <b>Trade-Off:</b> If punctured, traps moisture.</td></tr>
            <tr><td>Quiver-Latch</td><td>25 sp</td><td><b>Function:</b> Side-mounted sleeves for secondary weapon. <b>Trade-Off:</b> Drawing takes an extra action.</td></tr>
            <tr><td>Apothecary Tray</td><td>45 sp</td><td><b>Function:</b> Prevents vials from shattering. <b>Trade-Off:</b> Takes 2 internal slots permanently.</td></tr>
            <tr><td>Bedroll & Camp Sling</td><td>20 sp</td><td><b>Function:</b> Shifts center of gravity downward. <b>Trade-Off:</b> Makes pack taller and wider.</td></tr>
            <tr><td>Drop-Away Release</td><td>35 sp</td><td><b>Function:</b> Instantly drop backpack. <b>Trade-Off:</b> Your gear is left behind.</td></tr>
            <tr><td>Signal-Bell</td><td>25 sp</td><td><b>Function:</b> String wire around camp, grants wake-up check. <b>Trade-Off:</b> Minor stealth penalty.</td></tr>
            <tr><td>Scavenger Hook</td><td>30 sp</td><td><b>Function:</b> Keeps harvest clean. <b>Trade-Off:</b> Retains organic musk, attracts predators.</td></tr>
        </table>`;
    }
    else if (cat.value === 'arcane') {
        html = `
        <table class="store-table">
            <tr><th>Lvl</th><th>Spell</th><th>Mechanic & Utility</th></tr>
            <tr><td>0</td><td>Spark</td><td>Ignites flammable objects instantly without tinderbox.</td></tr>
            <tr><td>0</td><td>Murmur</td><td>Projects disembodied whisper 30ft to distract.</td></tr>
            <tr><td>0</td><td>Chilling Touch</td><td>Cools objects/meat by 20 degrees.</td></tr>
            <tr><td>0</td><td>Gilding Dust</td><td>Glowing dust tracking powder (lasts 10 mins).</td></tr>
            <tr><td>1</td><td>Apprentice Sleep</td><td>Forces 10 HP worth of low-tier mobs to sleep.</td></tr>
            <tr><td>1</td><td>Void Slick</td><td>10x10 frictionless grease. DEX or prone (-2 DR).</td></tr>
            <tr><td>1</td><td>Aether Dart</td><td>Auto-hits for 4 physical dmg. Pierces standard DR.</td></tr>
            <tr><td>1</td><td>Shatter-Lock</td><td>Blows open locked doors. Causes massive noise.</td></tr>
            <tr><td>1</td><td>Flicker</td><td>Reaction: Teleports 10ft from attack. Forces Strain check.</td></tr>
            <tr><td>2</td><td>Grave Web</td><td>20x20 sticky web. STR check or pinned (-2 DR).</td></tr>
            <tr><td>2</td><td>Shadow Blur</td><td>All incoming physical/missile attacks suffer -30% acc.</td></tr>
            <tr><td>3</td><td>Abyssal Deton.</td><td>20ft radius explosion for 20 dmg. Triggers cave-in.</td></tr>
            <tr><td>3</td><td>Aetheric Haste</td><td>+20% DEX def, double speed, 2 attacks/round.</td></tr>
        </table>`;
    }
    else if (cat.value === 'divine') {
        html = `
        <table class="store-table">
            <tr><th>Lvl</th><th>Prayer</th><th>Mechanic & Utility</th></tr>
            <tr><td>0</td><td>Seal of Seven</td><td>Temporary chalk ward. Hostiles roll WIS to pass door.</td></tr>
            <tr><td>0</td><td>Purity Gauge</td><td>Fingertips glow grey if water/food is infected.</td></tr>
            <tr><td>0</td><td>Vigilant Eye</td><td>+5% to specific trap/wire spotting for 1 min.</td></tr>
            <tr><td>0</td><td>Muted Step</td><td>Dampens armor clanking for 3 turns.</td></tr>
            <tr><td>1</td><td>Purify Food/Water</td><td>Purges rot. Only spell capable of curing Filth-Blade Infection.</td></tr>
            <tr><td>1</td><td>Star's Radiance</td><td>Heatless 30ft light. Negates Blinding Dark ambushes.</td></tr>
            <tr><td>1</td><td>Mend Flesh</td><td>Heals HP = 2 + (Tens Digit of Resolve). Caster immobilized.</td></tr>
            <tr><td>1</td><td>Sanctuary Ward</td><td>Hostiles must pass WIS check to attack caster.</td></tr>
            <tr><td>1</td><td>Turn the Void</td><td>Blasts 10 HP of undead/cultists. Forces flee.</td></tr>
            <tr><td>2</td><td>Paralyze Heretic</td><td>Freezes 2 targets. Melee hits against them Auto-Max Dmg.</td></tr>
            <tr><td>2</td><td>Vow of Silence</td><td>15ft dead air sphere. Negates alarm strings/casting.</td></tr>
            <tr><td>2</td><td>Cleanse Pathology</td><td>Instantly cures Infection and Cognitive Strain migraines.</td></tr>
            <tr><td>3</td><td>Choir of Stars</td><td>Allies +10% Hit / +1 DR. Hostiles -10% Hit.</td></tr>
            <tr><td>3</td><td>Resuscitate</td><td>Drags dead ally to 1 HP. Ally loses 10% CON permanently.</td></tr>
        </table>`;
    }
    container.innerHTML = html;
}

window.addEventListener('DOMContentLoaded', () => {
    switchCharacterSlot();
    showRefCategory(); 
});
