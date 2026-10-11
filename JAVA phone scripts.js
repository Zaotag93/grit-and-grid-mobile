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
        if (el.id && !['charSlotSelect', 'ref_categorySelect', 'backpack_notes', 'grimoire_type'].includes(el.id)) {
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

    calcSkills();
}

function createNewCharacterSlot() {
    if (confirm("Clear this slot permanently?")) {
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
        html = `<table class="store-table"><tr><th>Rule</th><th>Definition</th></tr><tr><td><b>Wear Tax</b></td><td>Units digit 2, 3, or 4 on hit = Weapon Notch (-1 Dmg).</td></tr></table>`;
    }
    container.innerHTML = html;
}

window.addEventListener('DOMContentLoaded', () => {
    switchCharacterSlot();
    showRefCategory(); 
});
