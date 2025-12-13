const YEAR = 2026;
const MONTH_NAMES = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];
const WEEKDAYS = ["L", "M", "X", "J", "V", "S", "D"];

/**
 * 🔐 SEGURIDAD: OFUSCACIÓN DE DATOS (REGENERADA Y VERIFICADA)
 * Cadenas generadas con: btoa(unescape(encodeURIComponent(JSON.stringify({ title: "TÍTULO AQUÍ", body: "TEXTO AQUÍ\nCON SALTOS DE LÍNEA" }))))
 * Esto asegura compatibilidad total con emojis UTF-8.
 */
const ENCRYPTED_DB = {
    // Enero 1
    "2026-01-01": "eyJ0aXRsZSI6IkHDsW8gTnVldm8iLCJib2R5IjoiwqFCaWVudmVuaWRvIGFsIDIwMjYhIPCfkYIgXG5VbiBudWV2byBsaWJybyBkZSAzNjUgcMOhZ2luYXMgc2UgYWJyZSBob3kuIn0=",
    // Febrero 14
    "2026-02-14": "eyJ0aXRsZSI6IlNhbiBWYWxlbnTDrW4iLCJib2R5IjoiRWwgYW1vciBlc3TDoSBlbiBsb3MgcGVxdWXDsW9zIGRldGFsbGVzLiDinaQifQ==",
    // Junio 21
    "2026-06-21": "eyJ0aXRsZSI6IlNvbHN0aWNpbyIsImJvZHkiOiJFbCBkw61hIG3DoXMgbGFyZ28gZGVsIGHDsW8uIERpc2ZydXRhIGVsIHNvbC4ifQ==",
    // Octubre 31
    "2026-10-31": "eyJ0aXRsZSI6IkhhbGxvd2VlbiIsImJvZHkiOiJMYSBub2NoZSBkZSBsYXMgYnJ1amFzLiDwn46QIn0=",
    // Diciembre 25
    "2026-12-25": "eyJ0aXRsZSI6Ik5hdmlkYWQiLCJib2R5IjoiUGF6LCBhbW9yIHkgZXNwZXJhbnphIHBhcmEgZWwgcHLDs3hpbW8gYcOxby4ifQ=="
};

async function getColombiaDate() {
    try {
        const response = await fetch('https://worldtimeapi.org/api/timezone/America/Bogota', { signal: AbortSignal.timeout(2000) });
        const data = await response.json();
        return new Date(data.datetime);
    } catch (error) {
        console.warn("No se pudo obtener hora de Bogotá. Usando hora del dispositivo.");
        return new Date();
    }
}

function getDaysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(month, year) {
    const day = new Date(year, month, 1).getDay();
    return (day === 0 ? 6 : day - 1); 
}

async function initCalendar() {
    const grid = document.getElementById('calendar-grid');
    const nowAbs = await getColombiaDate();
    const colombiaString = nowAbs.toLocaleString('en-US', { timeZone: 'America/Bogota' });
    const colombiaDate = new Date(colombiaString);

    // DESCOMENTAR PARA PRUEBAS (Simular fecha 2026):
    // const colombiaDate = new Date(2026, 1, 15); 

    const currentYear = colombiaDate.getFullYear();
    const currentMonth = colombiaDate.getMonth();
    const currentDay = colombiaDate.getDate();

    const compareDate = new Date(colombiaDate);
    compareDate.setHours(0,0,0,0);

    for (let m = 0; m < 12; m++) {
        const monthCard = document.createElement('div');
        monthCard.className = 'month-card';
        monthCard.style.transitionDelay = `${m * 0.05}s`;

        const title = document.createElement('div');
        title.className = 'month-title';
        title.textContent = MONTH_NAMES[m];
        monthCard.appendChild(title);

        const weekRow = document.createElement('div');
        weekRow.className = 'weekdays';
        WEEKDAYS.forEach(d => {
            const span = document.createElement('span');
            span.textContent = d;
            weekRow.appendChild(span);
        });
        monthCard.appendChild(weekRow);

        const daysContainer = document.createElement('div');
        daysContainer.className = 'days-grid';

        const daysInMonth = getDaysInMonth(m, YEAR);
        const firstDayIdx = getFirstDayOfMonth(m, YEAR);

        for (let i = 0; i < firstDayIdx; i++) {
            const empty = document.createElement('div');
            empty.className = 'day-cell empty';
            daysContainer.appendChild(empty);
        }

        for (let d = 1; d <= daysInMonth; d++) {
            const cell = document.createElement('div');
            cell.className = 'day-cell';
            cell.textContent = d;

            const dateStr = `${YEAR}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
            
            const isToday = (YEAR === currentYear && m === currentMonth && d === currentDay);
            const isSpecial = ENCRYPTED_DB.hasOwnProperty(dateStr);
            
            const targetDate = new Date(YEAR, m, d);
            const isLocked = targetDate > compareDate;

            if (isToday) cell.classList.add('current-day');
            
            if (isSpecial) {
                cell.classList.add('special-day');
                cell.onclick = () => openModal(dateStr, isLocked, isSpecial);
            }

            daysContainer.appendChild(cell);
        }

        monthCard.appendChild(daysContainer);
        grid.appendChild(monthCard);
    }

    setTimeout(() => {
        document.querySelectorAll('.month-card').forEach(card => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
        });
    }, 500);
}

function openModal(dateStr, isLocked, isSpecial) {
    const overlay = document.getElementById('modal-overlay');
    const titleEl = document.getElementById('modal-title');
    const bodyEl = document.getElementById('modal-body');

    // 1. LIMPIEZA CRÍTICA: Borrar contenido anterior antes de nada
    titleEl.textContent = "";
    bodyEl.innerHTML = "";
    titleEl.style.color = ""; // Resetear color

    overlay.classList.add('active');

    if (isLocked) {
        titleEl.textContent = "⏳ Paciencia...";
        titleEl.style.color = "#999";
        bodyEl.innerHTML = `<p class="lock-message">Este día aún no ha llegado.<br>Vive el presente.</p>`;
        return;
    }

    if (isSpecial) {
        try {
            const encodedData = ENCRYPTED_DB[dateStr];
            
            // Decodificación UTF-8 robusta para Emojis
            const jsonString = decodeURIComponent(escape(window.atob(encodedData)));
            const eventData = JSON.parse(jsonString);

            titleEl.textContent = eventData.title;
            titleEl.style.color = "var(--accent-gold)";
            bodyEl.innerHTML = `<p>${eventData.body.replace(/\n/g, '<br>')}</p>`;

        } catch (e) {
            console.error("Error al decodificar:", e);
            titleEl.textContent = "Error";
            titleEl.style.color = "red";
            bodyEl.textContent = "No se pudo descifrar el mensaje secreto. Verifica la integridad de los datos.";
        }
    }
}

document.getElementById('modal-close').onclick = () => {
    document.getElementById('modal-overlay').classList.remove('active');
};

document.getElementById('modal-overlay').onclick = (e) => {
    if (e.target.id === 'modal-overlay') {
        e.target.classList.remove('active');
    }
};

window.addEventListener('load', () => {
    const intro = document.getElementById('intro-screen');
    const main = document.getElementById('main-container');

    setTimeout(() => {
        intro.style.opacity = '0';
        setTimeout(() => {
            intro.style.display = 'none';
            main.style.opacity = '1';
            initCalendar();
        }, 1500);
    }, 2500);
});