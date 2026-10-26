'use strict';

/* Grit & Grid: The Contractor's Manual, uploaded PDF (96 pages),
 * Chapters 1-4 and Appendix A. This is a REFERENCE, not a shop checkout.
 * Monetary units are cp/sp/gp; inventory Slots are not individual item rows.
 */
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

/* Grit & Grid — Clerk's Register. Rules checked against uploaded 96-page
 * Contractor's Manual (esp. pp.10–11, 14, 17–24, 26–33, 35, 92–95).
 * Roster and UI are app features; progression and action decisions remain manual.
 */

const SKILL_BASE = Object.freeze({
    cqc:'str', shi:'dex', arm:'con', ran:'dex',
    fai:'str', med:'int', res:'wis', voi:'int',
    tra:'wis', loc:'dex', sne:'dex', trk:'wis',
    arc:'int', scr:'int', stf:'dex', app:'int'
});
const SKILL_LABELS = Object.freeze({
    cqc:'Close-Quarter Combat', shi:'Shield Deflection', arm:'Heavy Armor Tolerance', ran:'Ranged Precision',
    fai:'Faith & Clerical Arms', med:'Alchemical Medicine', res:'Congregational Resolve', voi:'Void Pathology',
    tra:'Trap & Hazard Sensing', loc:'Lock & Mech. Handling', sne:'Sneak & Infiltrate', trk:'Wilderness Tracking',
    arc:'Arcane Channeling', scr:'Scroll Transcription', stf:'Staff Deflection', app:'Artifact Appraisal'
});
const PROFESSIONS = Object.freeze({
    'Tunnel Miner':{bonuses:{cqc:20,tra:20,arm:10},tool:'Iron Pick'},
    'Acolyte Expulsee':{bonuses:{res:20,med:20,fai:10},tool:'Carved Symbol of the Stars'},
    'Borderland Deserter':{bonuses:{sne:20,shi:20,tra:10},tool:'Hemp Rope (50 ft)'},
    'Grave Robber':{bonuses:{loc:20,sne:20,cqc:10},tool:'Iron Grappling Hook'},
    'Disgraced Scribe':{bonuses:{scr:20,arc:20,med:10},tool:'3 Empty Glass Vials'},
    'Forgeworker':{bonuses:{arm:20,shi:20,cqc:10},tool:'Mace/Warhammer'},
    'Beast Culler':{bonuses:{cqc:20,trk:20,sne:10},tool:'Scavenged Iron Cleaver'},
    'Route Runner':{bonuses:{trk:20,tra:20,ran:10},tool:'Bag of Caltrops (20)'},
    'Flesh-Stitcher':{bonuses:{med:20,res:20,voi:10},tool:'Suture Needle & Thread'},
    'Quartermaster':{bonuses:{app:20,loc:20,scr:10},tool:'Traveling Folio'}
});
const CUSTOM_TOOLS = [
    'Traveling Folio', 'Iron Pick', 'Carved Symbol of the Stars', 'Hemp Rope (50 ft)',
    'Iron Grappling Hook', '3 Empty Glass Vials', 'Suture Needle & Thread',
    'Flour Sack (5 lbs)', 'Grease Pot (Lard)', 'Bag of Caltrops (20)'
];
let currentLeft='p1', currentRight='p2', lastProfession='', lastTool='';
let lastDiscipline='none', lastSlotCapacity=0;
const el = id => document.getElementById(id);
const asNum = id => Number(el(id)?.value) || 0;

/* Storage must never block the visible interface or reference tables.
   If a sandbox/browser blocks localStorage, navigation still works.
   Saving is explicitly reported unavailable; no false success is shown. */
let storageUnavailable = false;
function reportStorageBlocked() {
    storageUnavailable = true;
    const note = el('storage_status');
    if (note) {
        note.hidden = false;
        note.textContent = 'This browser is blocking local character storage. Dropdowns and reference tables still work, but this session cannot save characters. Open the site where browser storage is permitted to save.';
    }
}
const GGStore = {
    getItem(key) {
        try { return window.localStorage.getItem(key); }
        catch (error) { reportStorageBlocked(); return null; }
    },
    setItem(key,value) {
        try { window.localStorage.setItem(key,value); return true; }
        catch (error) { reportStorageBlocked(); return false; }
    },
    removeItem(key) {
        try { window.localStorage.removeItem(key); return true; }
        catch (error) { reportStorageBlocked(); return false; }
    }
};


function switchTab(tabName) {
    const allowed = ['sheet', 'inv', 'magic', 'ref'];
    if (!allowed.includes(tabName)) return;
    for (const name of allowed) {
        const tab = el('tab_' + name), button = el('tab_btn_' + name);
        if (tab) tab.classList.toggle('active-tab', name === tabName);
        if (button) {
            button.classList.toggle('active', name === tabName);
            button.setAttribute('aria-selected', String(name === tabName));
        }
    }
    document.body.classList.add('js-ready');
}
function getActiveSlotKey() {return el('charSlotSelect')?.value || 'char1';}
const saveQuery='#tab_sheet input, #tab_inv input, #tab_magic input, #tab_sheet select, #tab_inv select, #tab_magic select, #tab_sheet textarea, #tab_inv textarea, #tab_magic textarea';
const derivedIds = new Set(['backpack_notes','spl_max','total_dr']);
function savedFields() {return Array.from(document.querySelectorAll(saveQuery)).filter(n=>n.id&&!derivedIds.has(n.id)&&!n.id.startsWith('lib') || false).concat(
    Array.from(document.querySelectorAll(saveQuery)).filter(n=>/^lib\d+_[lns]$/.test(n.id))
);}
function readCharacterData() {
    const data={__sheetVersion:2};
    for(const node of savedFields()) data[node.id]=node.type==='checkbox'?node.checked:node.value;
    return data;
}
function saveCharacterSlot() {
    const key=getActiveSlotKey();
    try {
        if (!GGStore.setItem('gritGrid_'+key,JSON.stringify(readCharacterData()))) {
            alert('Character not saved: this browser does not permit local storage.');
            return;
        }
        alert('Contractor dossier saved to '+el('charSlotSelect').selectedOptions[0].text+'.');
    } catch(err) {alert('Unable to save this dossier: '+err.message);}
}
function defaultFields() {
    for (const node of savedFields()) {
        if(node.type==='checkbox') node.checked=false;
        else if(node.tagName==='SELECT') node.selectedIndex=0;
        else if(node.type==='number') node.value=node.id.startsWith('stat_')?'30':'0';
        else node.value='';
    }
    for(const id of ['char_currHp','char_maxHp']) el(id).value='6'; // baseline CON 30 => 3 + 3 HP
    el('char_rank').value='Rank 10 (Slag)';
    el('inv_backpack').value='Normal';el('grimoire_type').value='10';
    el('inv_gold').value='0';el('inv_silver').value='20';el('inv_copper').value='0';
    el('cons_torches').value='3';el('cons_rations').value='7';
    ['Waterskin (5 charges)','Tinderbox','Mundane Torches (3)','Iron Rations (7 days)','Slag Rank Tag']
        .forEach((item,i)=>{el('inv_s'+(i+1)).value=item;});
    for(let n=1;n<=5;n++) el('water_'+n).checked=true;
    for(const n of ['custom_major1','custom_major2','custom_minor','custom_tool']) el(n).value='';
}
function migrateLegacyData(data) {
    // Original JS stored background bonuses inside bon_*; remove only once.
    if(!data || Number(data.__sheetVersion)>=2) return data;
    const copy={...data,__sheetVersion:2};
    // Old phone HTML used cons_anti, before aligning with desktop's cons_antidote.
    if (copy.cons_antidote===undefined && copy.cons_anti!==undefined) {
        copy.cons_antidote=copy.cons_anti;
    }
    const bonuses=PROFESSIONS[copy.char_prof_select]?.bonuses||{};
    for(const [id,n] of Object.entries(bonuses)) {
        const k='bon_'+id;
        if(copy[k]!==undefined) copy[k]=String(Math.max(0,(Number(copy[k])||0)-n));
    }
    // Legacy inv_gold was labeled gp but defaulted to 20 (manual's 20 sp).
    // Monetary figures cannot safely be converted without knowing whether user edited them.
    // Existing gp is preserved. New sp defaults remain 20 until the user reviews it.
    return copy;
}
function switchCharacterSlot() {
    const key=getActiveSlotKey();
    defaultFields();
    const raw=GGStore.getItem('gritGrid_'+key);
    if(raw) {
        try {
            const d=migrateLegacyData(JSON.parse(raw));
            for(const node of savedFields()) {
                if(d[node.id]!==undefined) {
                    if(node.type==='checkbox') node.checked=Boolean(d[node.id]);
                    else node.value=d[node.id];
                }
            }
            if(Number(JSON.parse(raw).__sheetVersion||0)<2) {
                const banner=el('legacy_notice');
                if(banner) banner.textContent='Legacy save loaded: profession training has been separated from free training. Verify saved gp/sp balances, shield threshold, and starting equipment before saving.';
            } else if(el('legacy_notice')) el('legacy_notice').textContent='';
        } catch(err) {alert('Unable to read saved slot; displaying new character defaults: '+err.message);}
    } else if(el('legacy_notice')) el('legacy_notice').textContent='';
    lastProfession=el('char_prof_select').value;
    lastTool=getCurrentProfessionTool();
    lastDiscipline=el('caster_disc').value;
    lastSlotCapacity=lastDiscipline==='arcane'?Math.floor(asNum('stat_int')/10):lastDiscipline==='sanctified'?Math.floor(asNum('stat_wis')/10):0;
    showCustomPackage();toggleMasterBackpack();toggleGrimoireSize();
    calcSkills();calcSpellCapacity();updateArmorDR();updateWaterskinCount();
}
function createNewCharacterSlot() {
    if(confirm('Permanently clear this roster slot?')) {
        if (!GGStore.removeItem('gritGrid_'+getActiveSlotKey())) {
            alert('Cannot clear a saved slot while browser storage is blocked.');
            return;
        }
        switchCharacterSlot();alert('Slot cleared.');
    }
}
function moveSlot(dest,reason) {
    const from=getActiveSlotKey();
    if(from===dest) return alert('Already in that slot.');
    const data=GGStore.getItem('gritGrid_'+from);
    if(!data) return alert('Save the current character first.');
    if(!confirm(reason+' This moves the saved dossier. Continue?')) return;
    if(GGStore.getItem('gritGrid_'+dest) && !confirm('Destination contains a saved character. Overwrite it?')) return;
    if (!GGStore.setItem('gritGrid_'+dest,data)) { alert('Unable to move character: browser storage is blocked.'); return; }
    if (!GGStore.removeItem('gritGrid_'+from)) { alert('Could not remove the original slot; verify the roster before continuing.'); return; }
    el('charSlotSelect').value=dest;switchCharacterSlot();
}
function setAsActive() {moveSlot('char1','Move to Active Contractor?');}
function backupCharacter() {
    if(['char2','char3','char4','char5'].includes(getActiveSlotKey())) return alert('Already in Backup.');
    const dest=[2,3,4,5].map(n=>'char'+n).find(k=>!GGStore.getItem('gritGrid_'+k));
    if(!dest) return alert('Backup roster is full.');moveSlot(dest,'Move to Backup roster?');
}
function archiveCharacter() {
    if(['char8','char9','char10'].includes(getActiveSlotKey())) return alert('Already in Morgue.');
    const dest=[8,9,10].map(n=>'char'+n).find(k=>!GGStore.getItem('gritGrid_'+k));
    if(!dest) return alert('Morgue roster is full.');moveSlot(dest,'Send to Morgue?');
}
function fillCustomOptions() {
    for(const id of ['custom_major1','custom_major2','custom_minor']) {
        const s=el(id);s.innerHTML='';s.add(new Option('— choose skill —',''));
        for(const [key,name] of Object.entries(SKILL_LABELS))s.add(new Option(name,key));
    }
    const s=el('custom_tool');s.innerHTML='';s.add(new Option('— choose approved tool —',''));
    for(const tool of CUSTOM_TOOLS)s.add(new Option(tool,tool));
}
function getCurrentProfessionTool() {
    const p=el('char_prof_select').value;
    if(p==='Custom')return el('custom_tool').value;
    return PROFESSIONS[p]?.tool||'';
}
function showCustomPackage() {
    const custom=el('char_prof_select').value==='Custom';
    el('char_prof_custom').style.display=custom?'block':'none';
    el('custom_package').style.display=custom?'block':'none';
}
function autoFillProfession() {
    const p=el('char_prof_select').value;
    showCustomPackage();
    const newTool=getCurrentProfessionTool();
    if(lastTool && lastTool!==newTool) {
        const found=Array.from({length:12},(_,i)=>el('inv_s'+(i+1))).find(n=>n?.value===lastTool);
        if(found) found.value='';
    }
    if(newTool && lastTool!==newTool) {
        const free=Array.from({length:12},(_,i)=>el('inv_s'+(i+1))).find(n=>!n?.value.trim());
        if(free) free.value=newTool;
        else alert('No empty inventory row for the profession tool. Record the granted tool manually.');
    }
    lastProfession=p;lastTool=newTool;calcSkills();
}
function getProfessionBonuses() {
    const p=el('char_prof_select').value;
    if(p!=='Custom') return PROFESSIONS[p]?.bonuses||{};
    const vals=[el('custom_major1').value,el('custom_major2').value,el('custom_minor').value];
    const totals={};
    vals.forEach((id,i)=>{if(id) totals[id]=(totals[id]||0)+(i===2?10:20);});
    return totals;
}
function calcSkills() {
    const prof=getProfessionBonuses();let free=0,warning=[];
    for(const [id,base] of Object.entries(SKILL_BASE)) {
        const core=asNum('stat_'+base),pro=prof[id]||0;
        const f=asNum('bon_'+id),promotion=asNum('adv_'+id);
        free+=f;
        if(f<0||f>20) warning.push(SKILL_LABELS[id]+' free allocation must be 0–20 at creation');
        if(promotion<0) warning.push(SKILL_LABELS[id]+' promotion training cannot be negative');
        const total=Math.min(80,core+pro+f+promotion);
        if(el('b_'+id)) el('b_'+id).textContent=core;
        if(el('prof_'+id))el('prof_'+id).textContent=pro;
        if(el('t_'+id))el('t_'+id).textContent=total;
    }
    const rank=Number((el('char_rank').value.match(/\d+/)||['10'])[0]);
    const cap=rank>=7?70:Infinity; // PDF only states the Rank 10–7 cap; no new numeric cap is assigned after Rank 6.
    for(const id of ['str','dex','con','int','wis','cha']){
        const n=asNum('stat_'+id);
        if(n>cap) warning.push(id.toUpperCase()+' exceeds the Rank '+rank+' capability cap '+cap);
        if(n<0) warning.push(id.toUpperCase()+' cannot be negative');
    }
    if(free>50) warning.push('Free training exceeds the starting allowance of 50 points.');
    if(el('char_prof_select').value==='Custom') {
        const [a,b,c]=['custom_major1','custom_major2','custom_minor'].map(k=>el(k).value);
        if(a&&b&&a===b)warning.push('Appendix B describes two Major specializations; select two different skills.');
        if(!a||!b||!c)warning.push('Custom profession needs two Major and one Minor specialization.');
    }
    const msg='Creation free points used: '+free+'/50. '+(warning.length?'Review: '+warning.join('; '):'Standard total vocational skill ceiling: 80%.');
    const target=el('training_summary'); if(target) {target.textContent=msg;target.classList.toggle('rule-warning',warning.length>0);}
    calcSpellCapacity();
}
function setStartingHP() {
    if(!confirm('Replace current and maximum HP with new-contractor starting HP? This does not include promotion HP.'))return;
    const hp=Math.floor(Math.max(0,asNum('stat_con'))/10)+3;
    el('char_maxHp').value=hp;el('char_currHp').value=hp;
}
function calcSpellCapacity() {
    const discipline=el('caster_disc').value;
    const max=discipline==='arcane'?Math.floor(asNum('stat_int')/10):discipline==='sanctified'?Math.floor(asNum('stat_wis')/10):0;
    el('spl_max').value=Math.max(0,max);
    const disciplineChanged=discipline!==lastDiscipline;
    for(let i=1;i<=10;i++) {
        const cb=el('sp_s'+i);if(!cb)continue;
        const on=i<=max;
        if(!on) cb.checked=false;
        else if(disciplineChanged || i>lastSlotCapacity) cb.checked=true;
        cb.disabled=!on;
    }
    lastDiscipline=discipline;
    lastSlotCapacity=max;
}
function updateArmorDR() {
    const sunders=[1,2,3].filter(i=>el('arm_c'+i).checked).length;
    const base=Math.max(0,asNum('arm_d'));
    const strain=el('path_cog').checked?2:0;
    el('total_dr').value=sunders===3?0:Math.max(0,base-sunders-strain);
}
const ATTACHMENT_RULES = Object.freeze({
    'Exterior Cargo Loops':'Four outside lash-points; no internal Slots. Inaccessible in combat; exposed to harm.',
    'Sconce Rig':'Hands-free 360° light at normal source range. While lit: completely ruins stealth.',
    'Iron-Plate Baffle':'Once/encounter protects up to 1 Slot of packed items against one rear equipment-damaging trap or ambush; does NOT protect HP or worn gear.',
    'Oiled-Hide Water-Seal':'Protects packed gear from moisture, slime and acid while intact; puncture can trap moisture.',
    'Quiver-Latch':'Secures a heavy secondary weapon. Drawing takes an EXTRA tactical action.',
    'Apothecary Tray':'Cushions glass vials. Occupies 2 of the 12 internal Slots permanently (10 remain).',
    'Bedroll & Camp Sling':'Underslung bedroll/pot lower center of gravity; remove applicable ledge-balance penalties; pack becomes wider.',
    'Drop-Away Release':'Quick-release drops the entire pack immediately. All backpack equipment/loot stays behind.',
    'Signal-Bell':'Tripwire perimeter warning. −10% to eligible Sneak in ULTRA-QUIET dungeons ONLY.',
    'Scavenger Hook':'Harvest cleanly. Unwashed organic gore attracts scent-tracking predators from farther away.'
});
function updateBackpackNotes() {
    const a=el('inv_attach1').value,b=el('inv_attach2').value;
    el('backpack_notes').value=[a,b].filter(x=>x&&x!=='None').map((x,i)=>(i+1)+'. '+ATTACHMENT_RULES[x]).join('\n');
    el('inventory_capacity').textContent='Internal backpack capacity: '+([a,b].includes('Apothecary Tray')?'10':'12')+' Slots (Master pack: same 12; Apothecary Tray permanently costs 2). Item entries may be ½, 1, 2, or more Slots as printed; one row is NOT necessarily one Slot.';
}
function toggleMasterBackpack() {
    const master=el('inv_backpack').value==='Master';
    el('masterBackpackAttachments').style.display=master?'block':'none';
    if(!master){
        if(el('inv_attach1').value!=='None'||el('inv_attach2').value!=='None') {
            // Keep saved selections so changing pack type does not destroy user data;
            // but only installed Master-Grade attachments are active.
            el('backpack_notes').value='Attachments require the Master-Grade Backpack to be active.';
        }
        el('inventory_capacity').textContent='Basic Backpack: 12 internal Slots; selected Master-Grade attachments are inactive.';
    } else updateBackpackNotes();
}
function updateSpellPages() {
    let used=0,filled=0,invalid=[];
    for(let i=1;i<=30;i++){
        const name=el('lib'+i+'_n').value.trim(),lvlStr=el('lib'+i+'_l').value;
        const row=el('lib'+i+'_p');
        if(!name){row.value='';continue;}
        const lvl=Number(lvlStr);
        if(lvlStr===''||!Number.isInteger(lvl)||lvl<0||lvl>3){invalid.push(i);row.value='';continue;}
        const pages=Math.max(1,lvl);row.value=pages;used+=pages;filled++;
    }
    const limit=Number(el('grimoire_type').value)||10;
    const notes=['Pages occupied: '+used+' / '+limit+'.','Entries recorded: '+filled+'.'];
    if(used>limit)notes.push('OVER CAPACITY: a spell must fit entirely in ONE physical book.');
    if(invalid.length)notes.push('Set a valid level (0–3) for lines: '+invalid.join(', ')+'.');
    const s=el('spell_page_summary');s.textContent=notes.join(' ');s.classList.toggle('rule-warning',used>limit||invalid.length>0);
}
function toggleGrimoireSize() {
    // A folio has 10 PAGES, not a maximum of 10 different rows/spells.
    // Keep all 30 possible inscription rows accessible; validate pages used.
    for(let i=1;i<=30;i++)if(el('grim_row_'+i))el('grim_row_'+i).style.display='table-row';
    updateSpellPages();
}
function updateWaterskinCount() {
    const count=[1,2,3,4,5].filter(i=>el('water_'+i).checked).length;
    el('water_count').textContent=count+'/5';
}
function unbiasedDie(max) {
    // Uniform uint32 rejection sampling avoids modulo bias.
    const limit=Math.floor(4294967296/max)*max;const buf=new Uint32Array(1);
    do{window.crypto.getRandomValues(buf);}while(buf[0]>=limit);
    return(buf[0]%max)+1;
}
function toggleDiceModal() {
    const modal=el('diceModal'); if (!modal) return;
    const opening = getComputedStyle(modal).display === 'none';
    modal.style.display = opening ? 'flex' : 'none';
    modal.setAttribute('aria-hidden', String(!opening));
}
function mobileRoll(type) {
    const max = type==='d100'?100:10, result=unbiasedDie(max);
    const output=el('mobile_dice_output'); if(!output)return;
    const units = result%10;
    const doubles = result===100 || (result >= 11 && Math.floor(result/10)===units);
    let detail=type==='d100'?`Units digit: ${units}.`:'Standard d10 result.';
    if (type==='d100' && doubles) detail+=' Doubles: check critical rules if this is a successful attack.';
    if (type==='d100' && [2,3,4].includes(units)) detail+=' Possible Notch only for a successful melee hit; exceptions may apply.';
    output.textContent=type+' Result: '+result+' — '+detail;
}
function showRefCategory() {
    const category=el('ref_categorySelect')?.value;
    const data=window.GG_REFERENCE?.[category],container=el('store_container');
    if(!container)return;
    if(!data){container.textContent='No entry found in the current rules reference.';return;}
    const escape=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
    let out='<div class="table-scroller"><table class="store-table"><thead><tr>'+
        data.headers.map(x=>'<th>'+escape(x)+'</th>').join('')+'</tr></thead><tbody>';
    out+=data.rows.map(row=>'<tr>'+row.map(v=>'<td>'+escape(v)+'</td>').join('')+'</tr>').join('');
    out+='</tbody></table></div><p class="rule-note">Page references identify the uploaded Contractor’s Manual. Consult the complete printed entry when adjudicating unusual interactions.</p>';
    container.innerHTML=out;
}

/** Generate repetitive sheet rows on load. No JavaScript is embedded in HTML. */
function createDossierRows() {
    const cantripRows=el('cantrip_rows');
    const grimoireRows=el('grimoire_rows');
    const inventoryRows=el('inventory_rows');
    if(cantripRows && !cantripRows.children.length) cantripRows.innerHTML=Array.from({length:8},(_,index)=>{
        const i=index+1;
        return `<tr><td>${i}.</td><td><input id="can${i}_n" style="width:90%;"></td><td><input id="can${i}_f" style="width:90%;"></td><td><input id="can${i}_e" style="width:95%;"></td></tr>`;
    }).join('');
    if(grimoireRows && !grimoireRows.children.length) grimoireRows.innerHTML=Array.from({length:30},(_,index)=>{
        const i=index+1;
        return `<tr id="grim_row_${i}"><td>${i}.</td><td><input id="lib${i}_l" type="number" min="0" max="3" oninput="updateSpellPages()" style="width:65px;"></td><td><input id="lib${i}_n" style="width:90%;" oninput="updateSpellPages()"></td><td><input id="lib${i}_p" style="width:65px;" readonly></td><td><input id="lib${i}_s" style="width:95%;"></td></tr>`;
    }).join('');
    if(inventoryRows && !inventoryRows.children.length) inventoryRows.innerHTML=Array.from({length:12},(_,index)=>{
        const i=index+1;
        return `<tr><td>${i}.</td><td><input id="inv_s${i}" style="width:95%;"></td></tr>`;
    }).join('');
}

window.addEventListener('DOMContentLoaded', () => {
    const scriptStatus = el('script_status');
    if (scriptStatus) scriptStatus.hidden = true;
    try { createDossierRows(); } catch (error) { console.error('Could not create some character fields:', error); }
    try { fillCustomOptions(); switchCharacterSlot(); } catch (error) { console.error('Character initialization issue:', error); }
    // Tabs and reference database must initialize even when localStorage is blocked.
    try { showRefCategory(); } catch (error) { console.error('Reference initialization issue:', error); }
    try { switchTab('sheet'); } catch (error) { console.error('Tab initialization issue:', error); }
    for (const id of ['arm_d','arm_c1','arm_c2','arm_c3','path_cog']) el(id)?.addEventListener('change', updateArmorDR);
    for (let i=1; i<=5; i++) el('water_'+i)?.addEventListener('change', updateWaterskinCount);
    el('char_rank')?.addEventListener('change', calcSkills);
    el('diceModal')?.addEventListener('click', event => { if (event.target === el('diceModal')) toggleDiceModal(); });
    document.addEventListener('keydown', event => { if (event.key === 'Escape' && el('diceModal')?.style.display === 'flex') toggleDiceModal(); });
});
