window.GG_REFERENCE = {
  glossary: {headers:['Rule / Term','PDF Rule','Page'], rows:[
    ['Starting capabilities','Method A: d100 in STR, INT, WIS, DEX, CON, CHA order; clamp 30–70. Method B: 30 each +120 allocation points, maximum 70.','10'],
    ['Starting skills','Profession: +20 to two skills, +10 to one, tool; plus 50 free points (maximum +20 free points per skill). Total vocational skill cap 80%.','10–11'],
    ['Starting HP and stipend','Starting HP = tens digit of CON + 3. Start with 20 sp, Basic Backpack, Waterskin (5 charges), Tinderbox, 3 torches, 7 ration-days, Slag Rank Tag, and profession tool.','10, 20'],
    ['Currency','10 cp = 1 sp; 10 sp = 1 gp; 100 cp = 1 gp.','94'],
    ['Attack and damage','d100 roll equal to or under melee/ranged skill. On success, base damage = units digit of that roll, capped by current weapon Max Dmg.','26'],
    ['Critical Hit','Doubles under the relevant attack skill: weapon Max Dmg and one Armor Sunder on target.','92'],
    ['Wear Tax','A successful melee hit with units digit 2, 3 or 4 normally gives a Weapon Notch (−1 Max Dmg each); breaks at 3. Damage before newly caused wear. Equipment exceptions override.','24'],
    ['Armor Sunder','1 tick: −1 DR; 2: −2 DR; 3: armor destroyed. Shields do not contribute passive DR.','18, 24'],
    ['Shield or Staff Deflection','Eligible defender gets one defensive reaction per round after an incoming hit and before damage. Shield uses DEX skill and its own splinter threshold; staff threshold 4; Flicker shares the reaction.','23, 30'],
    ['Blinding Dark','−20% to physical actions; native monsters +20% accuracy. Native monsters gain automatic Surprise only if encounter BEGINS in darkness, not on mid-fight lights-out.','22'],
    ['Subdual / Lethargy','Subdual subtracts from the same HP pool. Subdual at 0 HP: unconscious for 3 rounds, wake with 1 HP and Lethargy (−20% physical checks; half movement). 1-hour Short Rest + 1 Waterskin charge clears Lethargy and restores only unrecovered Subdual HP.','26'],
    ['Infection','One post-combat CON check for any qualifying filth-blade slices per encounter. Infection prevents natural healing and costs 1 HP each morning; cure with Antidote Flask or Purify Food & Water.','26'],
    ['Cognitive Strain','−20 percentage points on all checks, armor DR −2, speed halved; clears after four hours safe rest. Arcane Level 0 critical failure; Arcane Level 1+ critical failure; or failed final-slot raw CON check where applicable.','27, 29'],
    ['Spell Slots','Arcane daily slots = tens digit of INT; Sanctified = tens digit of WIS. Level 0 uses none. Safe overnight rest restores used personal slots; dungeon rest does not.','27, 29'],
    ['Spell Pages','Each Level 0 or 1 inscription uses 1 book page; Level 2 uses 2; Level 3 uses 3. Traveling Folio 10 pages, Arcane Grimoire 30; permanent inscriptions cannot be erased.','20, 33'],
    ['Waterskin','One Waterskin holds 5 charges, costing 1 inventory Slot full or empty. Event-based spending ONLY, never automatic daily use. Suitable clean water refills to five charges.','19–20'],
    ['Promotion','Guild Ledger Review is CHA based, not XP. Promotion: Max HP increases by d10 + tens of beginning CON; 20 vocational points (max +10 one skill per promotion); +2 one capability and chance to harden second. Rank 6 breaks 70 capability cap.','35–36']
  ]},
  melee:{headers:['Gate','Weapon','Max Dmg','Slots','Price','Rules / Notes','Page'],rows:[
    [10,'Improvised (Shiv / Rock)',2,'1','—','Shatters on any Notch (2,3,4).',14],
    [10,'Dagger / Stiletto',4,'1','5 sp','Concealable.',14],
    [10,'Studded Cestus / Fist-Blade',3,'1 (worn)','12 sp','Forearm mounted; hand free; cannot be disarmed/dropped.',14],
    [10,'Iron Pick / Handaxe',5,'1','8 sp','Climbing/breaching tool.',14],
    [10,'Scavenged Iron Cleaver',6,'1','12 sp','SPECIAL: Notch on successful hit with units digit 1, 2, 3 OR 4.',14],
    [10,'Shortsword / Machete',6,'1','15 sp','Standard contractor sidearm.',14],
    [10,'Spear / Pitchfork',6,'2','10 sp','Reach; attack from behind vanguard ally.',14],
    [10,'Mace / Warhammer',7,'1','25 sp','Cathedral sanctioned.',14],
    [8,'Heavy Footman’s Mace',7,'2','30 sp','Heavy; crushing momentum.',14],
    [8,'Heavy Pike / Lucerne Hammer',7,'2','35 sp','Heavy, Reach; −40% accuracy in tight quarters.',14],
    [8,'Battleaxe / Longsword',8,'2','40 sp','Heavy.',14],
    [8,'Guild Halberd',10,'3','75 sp','Heavy, Reach.',14],
    [6,'Master-Forged Estoc',8,'2','12 gp','Bypasses 1 armor DR on successful piercing thrust.',14],
    [6,'Runed Executioner’s Greatsword',9,'3','25 gp','Heavy; ignores first Notch result per excursion.',14],
    [5,'Cold-Iron Sanctified Morningstar',8,'2','30 gp','Full structural damage against stone constructs; ignores standard shield deflection thresholds.',14],
    [5,'Barony Vanguard Poleaxe',10,'3','35 gp','Heavy, Reach; crushing/piercing hybrid.',14]
  ]},
  ranged:{headers:['Gate','Weapon / Ammo','Max Dmg','Slots','Price','Rules / Notes','Page'],rows:[
    [10,'Hunting Shortbow',5,2,'25 sp','Two hands; range up to 60 ft.',17],
    [10,'Composite Recurve Bow',6,2,'50 sp','STR under 40: −20% accuracy. No categorical ban on drawing.',17],
    [10,'Scavenged Crossbow',6,2,'45 sp','Stationary 1-full-action reload; pierces 1 armor DR.','17, 23'],
    [10,'Quiver of Arrows / Bolts (10)','—',1,'5 cp','Track individual arrows/bolts; bundled 1 Slot.',17],
    [8,'Heavy Arbalest',8,3,'9 gp','Heavy; stationary 2-full-action reload, ignores standard shielding DR.','17, 23'],
    [6,'Composite War-Bow',7,2,'18 gp','Requires STR 50% to draw; up to 100 ft range; pierces 1 armor DR.',17],
    [5,'Cold-Iron Siege Crossbow',9,3,'40 gp','Stationary 2-full-action reload; specialized bolts ignore shield DR.','17, 23'],
    [5,'Quiver of Master-Grade Bolts (10)','—',1,'2 sp','Reduces ammunition breakage on recovery checks.',17]
  ]},
  armor:{headers:['Gate','Armor Type','DR','Slots','Price','Rules / Notes','Page'],rows:[
    [10,'Thick Rags / Gambeson',1,1,'10 sp','No movement penalty.',17],
    [10,'Boiled Leather',2,2,'30 sp','Lightweight.',17],
    [10,'Studded Leather Jacket',2,2,'45 sp','Iron rivets vulnerable to rust spores.',17],
    [10,'Chain Mail',3,3,'75 sp','Heavy Armor Tolerance check to sprint/swim/climb.',17],
    [9,'Riveted Brigandine',2,3,'55 sp','Greater structural durability.',17],
    [8,'Splint / Scale Mail',4,4,'15 gp','Heavy; −20% Sneak & Infiltrate.',17],
    [7,'Iron-Bound Leather Cuirass',3,2,'22 gp','Lightweight cold-iron plates; no heavy movement penalty.',17],
    [6,'Master-Forged Steel Hauberk',4,3,'32 gp','Heavy Armor movement penalty reduced to −10% check.',17],
    [5,'Cold-Iron Etched Scale Coat',4,4,'45 gp','Treated to resist acid and rust-spore degradation (not immunity).',17],
    [4,'Guild-Forged Plate',5,5,'40 gp','Heavy; −20% Sneak; −10% Dodge/Agility checks.',17]
  ]},
  shields:{headers:['Gate','Shield','Slots','Price','Splinters when blocked damage exceeds','Special rules','Page'],rows:[
    [10,'Reinforced Buckler Shield',1,'20 sp',3,'Active deflection; never passive DR.',18],
    [10,'Spiked Punching Shield (Brawler’s Gauntlet)',2,'35 sp',4,'Also melee weapon Max Dmg 4 (Close-Quarter Combat).',18],
    [10,'Wooden Target Shield',2,'15 sp',5,'Active deflection.',18],
    [10,'Iron Kite Shield',3,'50 sp',9,'Heavy defensive barrier.',18],
    [9,'Scouter’s Pavise',3,'55 sp',10,'Plant 1 action for absolute cover vs missiles/traps; +10% accuracy for Scavenged Crossbow or Composite Recurve Bow fired behind it. Vulnerable to fire/acid/moisture.',18],
    [8,'Wooden Vanguard Tower Shield',4,'75 sp',12,'Plant 1 action for absolute cover vs missile/traps. Fire/acid vulnerable; soaked wood adds 1 item-weight.',18],
    [7,'Iron-Banded Scouter’s Shield',2,'14 gp',7,'Once/day absorbs feedback of a failed Level 1 Arcane/Sanctified check without Strain or faith loss.',18],
    [6,'Steel Warden’s Heater',3,'21 gp',11,'When bracing doorway: +10% melee defense checks.',18],
    [5,'Guild-Forged Iron Tower Shield',4,'12 gp',16,'Plant 1 action for absolute cover. Impervious to fire/acid, rust-spore maintenance; permanent −10% Dodge/Agility.',18]
  ]},
  logistics:{headers:['Item / Unit','Price','Slots','Field Use / Conditions','Page'],rows:[
    ['Iron Spikes (12)','1 sp','1','Wedge door open/shut with hammer/mace (1 standard action per spike).',19],
    ['Hemp Rope (50 ft)','1 sp','1','Supports 300 lb; knotted climbing no routine DEX; unknotted DEX.',19],
    ['Waterskin (5 charges)','1 sp','1','Event-triggered charge spending; no automatic daily use. Clean source refills to 5.','19–20'],
    ['Silk Rope (50 ft)','10 sp','½','Supports 400 lb, quiet/rot-resistant. Knotted: no routine DEX; unknotted: DEX.',19],
    ['Bag of Caltrops (20)','1 sp','1','1 action to spread 5×5 ft; unarmored entering/re-entering must DEX or stop and take 1 flat damage.',19],
    ['Bag of Marbles (100)','5 cp','1','1 action across suitable smooth hard level 5×5 ft. DEX on entering/re-entering or Prone (−2 effective DR; drops held items).',19],
    ['Flour Sack (5 lb)','2 cp','1','Five 1-lb uses. 10-ft cone reveals coated invisible/cloaked predators, tests drafts.',19],
    ['Polished Steel Mirror','5 sp','½','One action to inspect one accessible corner from cover (light/sightline permitting).',19],
    ['Suture Needle & Thread','1 sp','½','One exploration Turn after combat; +10% on next eligible Infection CON check, no HP healing.',19],
    ['Grease Pot (5 portions)','3 cp','1','1 action to quiet hinges (+20% eligible Sneak at door) or slick 5×5 ft (DEX on entry or Prone). Separate action to ignite; 3 rounds, 1 fire damage/round ignores ordinary DR.',19],
    ['Heavy Canvas Tarp','8 cp','1','1 action to smother 5×5 ft localized chemical fire; two haulers can haul up to 400 lb; or screen camp.',19],
    ['Animal Scent Flask','2 sp','½','1 action; 1 hour; scent-based detection/tracking by wild predators −20%.',20],
    ['Antidote Flask','15 sp','½','1 standard action, single use; cures Infection not lost HP. Rank 10 limit two carried per excursion.',20],
    ['Iron Grappling Hook','1 sp','1','Attach rope 1 action; separate DEX throw to plausible anchor; reusable if physically usable/accessed.',20],
    ['Fish Glue Vial','5 cp','½','1 action minor bond; cannot repair numeric item damage.',20],
    ['Chalk Sticks (5)','2 cp','½','1 action/mark; marks resist moisture and slime rot; no light.',20],
    ['Empty Glass Vials (3)','1 sp','½','Reusable; filling and stopping 1 action; opening/closing/decanting separate action. Harvesting rules apply.',20],
    ['Lead-Weighted Sounder Line (50 ft)','3 cp','½','Marked every 5 ft; probes depths and murky water.',20],
    ['Pitch-Soaked Flare Tubes (3)','1 sp','1','Self-igniting; each burns 3 turns with bright, smoky light.',20],
    ['Bone-Ash Cleansing Chalk (5)','5 cp','½','Discourages Rank 10–9 undead or disrupts visual tracking after LOS breaks; not a barrier.',20],
    ['Collapsible 10-Foot Pole','15 sp','2','Supports static vertical load up to 200 lb with proper brace; tests reachable plates.',20],
    ['Alchemist’s Smelling Salts (3)','2 sp','½','+10% on eligible Lethargy/capability recovery check only if check required.',20],
    ['Waxed Scroll Case','5 sp','½','Up to 3 rolled scrolls; protects against rain/mud, not immersion/fire/acid/crushing.',20],
    ['Traveling Folio (10 pages)','5 sp','½','One physical book; page use follows L0-1=1, L2=2, L3=3.','20, 33'],
    ['Arcane Grimoire (30 pages)','5 gp','1','One physical book; page use follows L0-1=1, L2=2, L3=3.','20, 33']
  ]},
  backpack:{headers:['Customization','Price','Function','Trade-off','Page'],rows:[
    ['Exterior Cargo Loops','30 sp','Four external lash-points; no internal Slot cost.','Exposed to hazards and inaccessible during combat.',21],
    ['Sconce Rig','20 sp','Holds torch/lantern; 360° light at normal source range.','When lit, completely ruins stealth.',21],
    ['Iron-Plate Baffle','50 sp','ONCE PER ENCOUNTER protects up to 1 Slot of packed contents from a rear trap/ambush damaging gear.','Permanent weight; never protects HP or worn gear.',21],
    ['Oiled-Hide Water-Seal','40 sp','Protects packed items from moisture/slime/acid while intact.','Puncture can trap moisture.',21],
    ['Quiver-Latch & Scabbard Mount','25 sp','Secures heavy secondary weapon to pack frame.','Drawing costs an extra tactical action.',21],
    ['Apothecary Tray','45 sp','Cushions vials against blunt damage.','Permanently uses 2 of 12 internal Slots.',21],
    ['Bedroll & Camp Sling','20 sp','Underslung bedroll/pot lower center of gravity; remove applicable ledge-balance penalties.','Wider pack obstructs narrow crawls.',21],
    ['Drop-Away Emergency Release','35 sp','Instantly release entire backpack.','All carried backpack gear left behind.',21],
    ['Signal-Bell & Tripwire Rig','25 sp','Tripwire perimeter alert.','−10% eligible Sneak in ultra-quiet dungeon areas ONLY.',21],
    ['Scavenger’s Gut-Hook & Tarp','30 sp','Facilitates clean harvest of fresh pelts/meat/glands.','Unwashed gore attracts scent predators farther away.',21]
  ]},
  arcane:{headers:['Lvl','Arcane Spell','Cast / Range','Effect / Restrictions','Page'],rows:[
    [0,'Spark','1 action / Touch','Ignites a single flammable object; no daily slot.',27],
    [0,'Apprentice’s Murmur','1 action / 30 ft','Projects whisper to one point to distract; no daily slot.',27],
    [0,'Chilling Touch','1 action / Touch','Lowers small object/liquid by 20 degrees; no damage.',27],
    [0,'Gilding Dust','1 action / 15 ft','Faint glowing residue on target/object for 10 minutes.',27],
    [0,'Lead Weight','1 action / Touch','Unattended loose object +up to 10 lb for 1 round.',27],
    [0,'Dampen Odor','1 action / Self','10 minutes; +10% to avoid scent detection by wilderness predators.',27],
    [1,'Apprentice Sleep','1 action / 30 ft','10 total HP of low-tier creatures sleep for 1d10 Turns (Referee rolls); awakening requires action or damage.',30],
    [1,'Void Slick (Grease)','1 action / 15 ft','10×10 ft for 3 Turns; DEX or Prone, drop held light, −2 DR.',30],
    [1,'Aether Dart','1 action / 60 ft','Auto-hits for 4 physical damage; bypasses standard armor DR.',30],
    [1,'Shatter-Lock','1 Turn / Touch','Opens standard lock/door/hinge with loud noise: immediate Wandering Monster check.',30],
    [1,'Flicker (Blink)','1 reaction / Self','On incoming successful melee attack, teleports up to 10 ft and negates strike if cast succeeds; extra raw CON Strain check. Uses one defensive reaction/round.',30],
    [2,'Grave Web','1 action / 60 ft','20×20 ft, 1 hour. STR or pinned (DR −2, cannot move/cast); standard action STR retry. Flammable: burning inflicts 5 damage to trapped.',31],
    [2,'Shadow Blur','1 action / Self','10 Turns; attacks against caster have −30% accuracy.',31],
    [2,'Levitation','1 action / Self or target','30 min; rise vertically 10 ft per round.',31],
    [3,'Abyssal Detonation','1 action / 100 ft','20-ft radius, 20 damage to all targets; automatic cave-in HAZARD CHECK if in tight quarters, not guaranteed collapse.',31],
    [3,'Aetheric Haste','1 action / Touch','5 Turns; +20% DEX defensive checks; tactical move 20 ft/full move 60 ft; up to two attacks with ONE normal attack action, not two actions. On end: 1 subdual damage.',31]
  ]},
  divine:{headers:['Lvl','Sanctified Rite','Cast / Range','Effect / Restrictions','Page'],rows:[
    [0,'Seal of the Seven','1 action / Touch','Chalk symbol on door; forcing entrance requires WIS or hesitate 1 round.',27],
    [0,'Acolyte’s Cleanse','1 action / Touch','Removes ordinary dirt/stains; not poison or Infection.',27],
    [0,'Bore’s Echo','1 action / Self','Voice carries through wind, vents or caverns without needing to shout.',27],
    [0,'Purity Gauge','1 action / Touch','Silver fingertips turn dull grey for spoiled/contaminated water or food.',27],
    [0,'Vigilant Eye','1 action / Self','+5% specific trap/wire/tampering detection for 1 minute.',27],
    [0,'Muted Step','1 action / Self','3 Turns; suppresses standard narrow-stone gear clank, not full silence.',27],
    [1,'Purify Food & Water','10 minutes / Touch','Clears filth, poison and rot from food or water; cures biological Filth-Blade Infection.',30],
    [1,'Star’s Radiance (Light)','1 action / Touch','Heatless light 30 ft for 3 hours; eliminates Blinding Dark penalties.',30],
    [1,'Mend Flesh','1 action / Touch','Heal 2 + tens digit of caster Congregational Resolve skill; caster cannot move remainder of round.',30],
    [1,'Sanctuary Ward','1 action / Self','1d10 Turns; hostile trying to physically strike must pass WIS or waste attack.',30],
    [1,'Turn the Void','1 action / 30 ft','Eligible hostile combined MAX HP ≤10; targets morale/resolve or flee. NOT 10 direct damage.',30],
    [2,'Paralyze Heretic','1 action / 60 ft','Up to 2 enemies WIS or freeze; melee hits automatically land for max structural damage.',31],
    [2,'Vow of Silence','1 action / 30 ft','15-ft radius for 10 Turns; silences sounds, sound alarms, verbal casting; DOES NOT disable physical tripwire triggers.',31],
    [2,'Cleanse Pathology','10 minutes / Touch','Cures Sewer Fever and Cognitive Strain; does NOT remove Sanctified faith penalty.',31],
    [3,'Choir of the Stars','1 action / 30-ft radius','5 Turns. Allies inside +10% hit and +1 armor DR; foes −10% hit. No maintenance action; another spell/silencing ends early.',31],
    [3,'Resuscitate','1 hour / Touch','Within 24 hours of death: revive at 1 HP, permanently −10 CON, Guild rank suspended pending review.',31]
  ]}
};


// Storage errors must not disable navigation or the rules dropdown.
// Keep original gritGrid_char1...char10 keys and all original saved field IDs.
const safeCharacterStorage = {
    getItem(key) {
        try { return localStorage.getItem(key); }
        catch (error) { console.warn('Character saves unavailable in this browser:', error); return null; }
    },
    setItem(key, value) {
        try { localStorage.setItem(key, value); return true; }
        catch (error) { console.warn('Could not save character:', error); return false; }
    },
    removeItem(key) {
        try { localStorage.removeItem(key); return true; }
        catch (error) { console.warn('Could not clear character:', error); return false; }
    }
};

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

    if (!safeCharacterStorage.setItem('gritGrid_' + slotKey, JSON.stringify(charData))) {
        alert('Browser storage is blocked. The dossier remains visible, but this save did not complete.');
        return;
    }
    const slotName = document.getElementById('charSlotSelect').options[document.getElementById('charSlotSelect').selectedIndex].text;
    alert('Contractor dossier saved to ' + slotName + '!');
}

function switchCharacterSlot() {
    const slotKey = getActiveSlotKey();
    const saved = safeCharacterStorage.getItem('gritGrid_' + slotKey);
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
        document.getElementById('char_currHp').value = '6';
        document.getElementById('char_maxHp').value = '6';
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
        safeCharacterStorage.removeItem('gritGrid_' + getActiveSlotKey());
        switchCharacterSlot();
        alert("Slot cleared!");
    }
}

function setAsActive() {
    const currentSlot = getActiveSlotKey();
    if (currentSlot === 'char1') return alert("Already Active!");
    if (confirm("Move to Active Contractor?")) {
        const savedData = safeCharacterStorage.getItem('gritGrid_' + currentSlot);
        if (savedData) {
            if (!safeCharacterStorage.setItem('gritGrid_char1', savedData) ||
                !safeCharacterStorage.removeItem('gritGrid_' + currentSlot)) {
                alert('Storage blocked. Roster change was not completed.');
                return;
            }
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
        const savedData = safeCharacterStorage.getItem('gritGrid_' + currentSlot);
        if (savedData) {
            let targetSlot = null;
            for (let i = 2; i <= 5; i++) {
                if (!safeCharacterStorage.getItem('gritGrid_char' + i)) { targetSlot = 'char' + i; break; }
            }
            if (!targetSlot) return alert("Backup Roster full!");
            if (!safeCharacterStorage.setItem('gritGrid_' + targetSlot, savedData) ||
                !safeCharacterStorage.removeItem('gritGrid_' + currentSlot)) {
                alert('Storage blocked. Roster change was not completed.');
                return;
            }
            switchCharacterSlot();
            alert("Moved to " + targetSlot + "!");
        } else { alert("Save first!"); }
    }
}

function archiveCharacter() {
    const currentSlot = getActiveSlotKey();
    if (['char8', 'char9', 'char10'].includes(currentSlot)) return alert("Already in Morgue!");
    if (confirm("Send to Morgue?")) {
        const savedData = safeCharacterStorage.getItem('gritGrid_' + currentSlot);
        if (savedData) {
            let targetSlot = null;
            for (let i = 8; i <= 10; i++) {
                if (!safeCharacterStorage.getItem('gritGrid_char' + i)) { targetSlot = 'char' + i; break; }
            }
            if (!targetSlot) return alert("Morgue full!");
            if (!safeCharacterStorage.setItem('gritGrid_' + targetSlot, savedData) ||
                !safeCharacterStorage.removeItem('gritGrid_' + currentSlot)) {
                alert('Storage blocked. Roster change was not completed.');
                return;
            }
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
        { id: 'arc', stat: int }, { id: 'scr', stat: int }, { id: 'stf', stat: dex }, { id: 'app', stat: int }
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
        "Iron-Plate Baffle": "Once per encounter, protects up to 1 packed Slot from one rear gear-damaging ambush/trap. Does not prevent HP damage.",
        "Oiled-Hide Water-Seal": "Protects against slime/rot. If punctured, traps moisture.",
        "Quiver-Latch": "Secures a heavy secondary weapon; drawing it takes an EXTRA tactical action.",
        "Apothecary Tray": "Protects packed glass vials. Permanently consumes 2 of the backpack’s 12 internal Slots.",
        "Bedroll & Camp Sling": "Lowers center of gravity and helps with ledge balance. Makes the pack physically wider.",
        "Drop-Away Release": "Instantly drop backpack in emergencies. Your gear is left behind.",
        "Signal-Bell": "Wire bell warns camp; −10% to eligible Sneak checks in ULTRA-QUIET dungeons only.",
        "Scavenger Hook": "Keeps harvest clean; if unwashed, gore/musk attracts scent-tracking predators."
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
        output.innerHTML = `<b>${type} Result:</b> <span style="color:#F26522; font-size:18px;">${result}</span><br><span style="font-size:12px; color:#aaa;">Units Digit: ${units} (damage if attack hits; Notch only on successful melee hits)</span>`;
    }
}

function showRefCategory() {
    const select = document.getElementById('ref_categorySelect');
    const container = document.getElementById('store_container');
    if (!select || !container) return;
    const data = window.GG_REFERENCE && window.GG_REFERENCE[select.value];
    if (!data) {
        container.textContent = 'No reference data for this category.';
        return;
    }
    const escapeCell = (value) => String(value)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;')
        .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    let html = '<div style="overflow-x:auto; max-width:100%;"><table class="store-table"><thead><tr>';
    html += data.headers.map(h => '<th>' + escapeCell(h) + '</th>').join('');
    html += '</tr></thead><tbody>';
    html += data.rows.map(row => '<tr>' + row.map(cell => '<td>' + escapeCell(cell) + '</td>').join('') + '</tr>').join('');
    html += '</tbody></table></div>';
    container.innerHTML = html;
}

window.addEventListener('DOMContentLoaded', () => {
    try { showRefCategory(); } catch (error) { console.error('Reference dropdown:', error); }
    try { switchCharacterSlot(); } catch (error) { console.error('Character load:', error); } 
});
