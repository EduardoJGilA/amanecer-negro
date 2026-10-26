# 🌑 Amanecer Negro 🌑

**Amanecer Negro** es una expansión de contenido (Homebrew) para **Dungeons & Dragons 5ª Edición**, enfocada en temáticas oscuras, hemomancia y especializaciones únicas. Este suplemento está diseñado específicamente para integrarse con **Foundry VTT** a través del módulo **Plutonium** o herramientas compatibles con el formato de **5eTools**.

---

## 🎭 Contenido Incluido

Todos los archivos han sido estandarizados en inglés y validados con el formato y esquema de **5eTools / Plutonium** para garantizar una importación fluida en Foundry VTT.

### 🗡️ Subclases (Subclasses)
Especializaciones que se vinculan directamente a las clases base de la 5ª Edición (`PHB`):
*   **Bard:** [College of Healing](subclasses/college-of-healing.json) — Maestros de la recuperación rítmica y primeros auxilios arcanos.
*   **Fighter:** [Blood Knight](subclasses/blood-knight.json) — Marciales que sacrifican vitalidad para fusionar y potenciar sus armas.
*   **Sorcerer:** [Bloodtouched](subclasses/sorcerer-blood.json) y [Pale Master](subclasses/pale-master.json) — Manipuladores de sangre y nigromantes con cohortes no-muertas.
*   **Paladin:** [Oath of the Blood](subclasses/oath-of-blood.json) y [Oath of Twilight](subclasses/oath-of-twilight.json) — Paladines de sangre primordial y guardianes del umbral entre luz y sombra (niveles 3 a 20 completos con hechizos de juramento).
*   **Rogue:** [Wild Card](subclasses/wildcard.json) (Revisado 2014), [Wild Card 2024](subclasses/wildcard_2024.json) y [Rogue of Blood](subclasses/rogue-of-blood.json) — Maestros de la cartomancia y proyectiles serrados de sangre.

### 🧬 Razas (Races)
Opciones de linaje para personajes con trasfondos oscuros o míticos:
*   **Kindred:** La dualidad entre el Lobo y la Oveja, espíritus de la muerte con Marca de Muerte.
*   **Pureblood Vampire:** Sangre pura de la noche con sed de vitalidad y encantos hipnóticos.
*   **Qilin:** Sabios celestiales con magia arcana y aliento radiante.

---

## 🚀 Cómo Usarlo en Foundry VTT (Plutonium)

Este suplemento NO es un módulo de Foundry tradicional, es un **Data Package** de 5eTools.

1.  Copia la **URL del archivo Raw** de `amanecer-negro.json` desde este repositorio de GitHub (o usa el archivo local).
2.  En **Foundry VTT**, abre el módulo **Plutonium**.
3.  Ve a la herramienta de importación de contenido:
    *   Para subclases: abre el importador de **Classes & Subclasses**.
    *   Para razas: abre el importador de **Races**.
4.  Haz clic en el botón de configuración (engranaje) o **"Homebrew"**.
5.  Si usas GitHub, pega la URL en la sección de **"URL"** y dale a **"Add"**. Si es local, usa el importador de archivos JSON.
6.  ¡Listo! El contenido aparecerá unificado bajo la fuente **AN (Amanecer Negro Expansion)** listo para ser asignado a las hojas de personaje.

---

## 🛠️ Herramientas de Desarrollo

El proyecto utiliza un sistema modular para facilitar la edición.

### Compilación
Si modificas los archivos individuales en las carpetas `/subclasses` o `/races`, debes regenerar el índice principal:

1.  Instala Node.js.
2.  Ejecuta el script:
    ```bash
    node build.js
    ```
    Esto combinará y validará automáticamente todos los archivos `.json` en el archivo maestro `amanecer-negro.json`.

---

## 🤝 Contribuciones
¡Las ideas son bienvenidas! Si tienes una nueva subclase o raza que encaje con el tono de **Amanecer Negro**, no dudes en abrir un *Pull Request*.

## 📄 Licencia
Este proyecto es de código abierto y está disponible bajo la licencia [MIT](LICENSE).

---
*Creado con pasión por el contenido Homebrew de calidad.*