# 🌑 Amanecer Negro 🌑

**Amanecer Negro** es una expansión de contenido (Homebrew) para **Dungeons & Dragons 5ª Edición**, enfocada en temáticas oscuras, hemomancia y especializaciones únicas. Este suplemento está diseñado específicamente para integrarse con **Foundry VTT** a través del módulo **Plutonium** o herramientas compatibles con el formato de **5eTools**.

---

## 🎭 Contenido Incluido

### 🗡️ Subclases (7)
Nuevas especializaciones cargadas de sabor y mecánicas únicas:
*   **Bardo:** [Colegio de Sanación](subclasses/college-of-healing.json) — Maestros de la recuperación rítmica.
*   **Guerrero:** [Caballero de Sangre (Blood Knight)](subclasses/blood-knight.json) — Marciales que sacrifican vitalidad por poder.
*   **Hechicero:** [Bloodtouched (Sorcerer)](subclasses/sorcerer-blood.json) — Magia nacida de una esencia vital alterada.
*   **Paladín:** [Oath of the Blood](subclasses/oath-of-blood.json) y [Juramento del Crepúsculo](subclasses/oath-of-twilight.json).
*   **Pícaro:** [Wild Card](subclasses/wildcard.json) (Revisado) y [Rogue Of Blood](subclasses/rogue-of-blood.json).

### 🧬 Razas (3)
Opciones de linaje para personajes con trasfondos profundos:
*   **Kindred:** La dualidad entre el Lobo y la Oveja.
*   **Pureblood Vampire:** Sangre pura con habilidades ancestrales de la noche.
*   **Qilin:** Seres celestiales con sabiduría arcana.

---

## 🚀 Cómo Usarlo en Foundry VTT (Plutonium)

Este suplemento NO es un módulo de Foundry tradicional, es un **Data Package** de 5eTools.

1.  Copia la **URL del archivo Raw** de `amanecer-negro.json` desde este repositorio de GitHub (o usa el archivo local).
2.  En **Foundry VTT**, abre el módulo **Plutonium**.
3.  Ve a la herramienta de importación de contenido (ej: *Classes* o *Races*).
4.  Haz clic en el botón de configuración (engranaje) o **"Homebrew"**.
5.  Si usas GitHub, pega la URL en la sección de **"URL"** y dale a **"Add"**. Si es local, usa el importador de archivos JSON.
6.  ¡Listo! El contenido aparecerá disponible para importar directamente a tus hojas de personaje.

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
    Esto combinará automáticamente todos los archivos `.json` en el archivo maestro `amanecer-negro.json`.

---

## 🤝 Contribuciones
¡Las ideas son bienvenidas! Si tienes una nueva subclase o raza que encaje con el tono de **Amanecer Negro**, no dudes en abrir un *Pull Request*.

## 📄 Licencia
Este proyecto es de código abierto y está disponible bajo la licencia [MIT](LICENSE).

---
*Creado con pasión por el contenido Homebrew de calidad.*