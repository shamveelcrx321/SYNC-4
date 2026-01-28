# 🔐 SYNC-4

A logic-based number guessing game where players decrypt a hidden 4-digit sequence using systematic feedback.

## 📘 Overview

**SYNC-4** is a web-based number guessing game designed to enhance logical reasoning and pattern analysis.  
The system generates a secret 4-digit sequence, and the player attempts to decrypt it by providing inputs and interpreting the feedback returned after each attempt.

The game encourages structured thinking, where every input helps narrow down the possible solutions.

---

## 🎮 How the Game Works

1. The system generates a random **4-digit sequence**.
2. The player provides an **INPUT** (a 4-digit number).
3. The system performs a **decryption analysis** and returns:
   - **PRESENT** — Number of digits that exist in the secret sequence, irrespective of position.
   - **POSITION** — Number of digits that are in the correct position.
4. Using this feedback, the player refines subsequent inputs.
5. The game concludes when all digits are correctly positioned.

---

## 🧠 Core Concepts

- Logical deduction over trial-and-error  
- Clear and consistent feedback mechanism  
- Progressive refinement of guesses  

---

## 🛠️ Technology Stack

- **Backend:** Flask (Python)
- **Frontend:** HTML, CSS, JavaScript
- **Data Handling:** Session-based (no database)

---

## 👥 Contributors

- **Jasem Saleh** — Game logic and conceptual design  
- **Shamveel C** -Programming and Implementation
- **Aboobacker Sidhique** -Programming and Implementation

---

## 📄 License
MIT License
