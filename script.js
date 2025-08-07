document.addEventListener("DOMContentLoaded", function () {
  // Files data
  const classifiedFiles = [
    {
      title: "PROJECT RED ECHO",
      desc: "OPERATIONAL DETAILS ████████",
      description: "Experimental communications protocol",
      stamp: "TOP SECRET",
      content:
        "PROJECT RED ECHO INVOLVES EXPERIMENTAL ████████ TECHNOLOGY. PRIMARY OBJECTIVE: ████████. CURRENT STATUS: ACTIVE BUT ████████. AUTHORIZED PERSONNEL ONLY.",
      date: "██/██/1984",
      coords: "██°██'N ██°██'W",
      attachment: "PHOTOGRAPH",
    },
    {
      title: "UNIDENTIFIED OBJECT_04",
      desc: "SIGHTING REPORT ████████",
      description: "Recovered artifact analysis",
      stamp: "CONFIDENTIAL",
      content:
        "OBJECT SPOTTED IN ████████ REGION ON ██/██/2023. EXHIBITS UNUSUAL ████████ PROPERTIES. ALL EVIDENCE CLASSIFIED UNDER DIRECTIVE ████████.",
      date: "██/██/2023",
      coords: "██°██'N ██°██'W",
      attachment: "RADAR DATA",
    },
    {
      title: "EXPERIMENTAL ZONE REPORT",
      desc: "TEST RESULTS ████████",
      description: "Field observations from restricted area",
      content:
        "ZONE ██ SHOWS PROMISING BUT UNSTABLE RESULTS. SUBJECTS EXHIBIT ████████ AFTER EXPOSURE. RECOMMEND ████████ BEFORE PROCEEDING TO PHASE ██.",
      date: "██/██/1999",
      coords: "██°██'N ██°██'W",
      attachment: "VIDEO FOOTAGE",
    },
    {
      title: "FILE_██████",
      desc: "EYES ONLY ████████",
      description: "Contents unknown - access restricted",
      stamp: "TOP SECRET",
      content:
        "THIS FILE CONTAINS INFORMATION ABOUT ████████. ALL ACCESS ATTEMPTS ARE LOGGED. UNAUTHORIZED VIEWING WILL RESULT IN ████████.",
      date: "██/██/20██",
      coords: "██°██'N ██°██'W",
      attachment: "AUDIO RECORDING",
    },
    {
      title: "OPERATION DARK STAR",
      desc: "MISSION DEBRIEF ████████",
      description: "Meteorological anomaly tracking",
      content:
        "OPERATION DARK STAR INITIATED ON ██/██/2012. PRIMARY OBJECTIVE: ████████. SECONDARY OBJECTIVES: ████████. MISSION STATUS: ████████.",
      date: "██/██/2012",
      coords: "██°██'N ██°██'W",
      attachment: "SATELLITE IMAGERY",
    },
    {
      title: "SUBJECT ALPHA-9",
      desc: "PSYCH EVALUATION ████████",
      description: "Biological research dossier",
      stamp: "CONFIDENTIAL",
      content:
        "SUBJECT DISPLAYS UNUSUAL ████████ CAPABILITIES. RECOMMEND TRANSFER TO FACILITY ██ FOR FURTHER TESTING. WARNING: SUBJECT IS ████████.",
      date: "██/██/2021",
      coords: "██°██'N ██°██'W",
      attachment: "MEDICAL REPORT",
    },
    {
      title: "DIRECTIVE 7-12",
      desc: "CLASSIFIED ORDERS ████████",
      description: "Field recording transcript",
      content:
        "UNDER DIRECTIVE 7-12, ALL AGENTS ARE TO ████████. FAILURE TO COMPLY WILL RESULT IN ████████. THIS DIRECTIVE OVERRIDES ALL PREVIOUS ████████.",
      date: "██/██/2023",
      coords: "██°██'N ██°██'W",
      attachment: "ENCRYPTED MESSAGE",
    },
    {
      title: "FACILITY X-RAY",
      desc: "BLUEPRINTS ████████",
      description: "Reverse engineering analysis",
      stamp: "TOP SECRET",
      content:
        "FACILITY LOCATED AT ████████. PRIMARY FUNCTION: ████████. SECURITY LEVEL: ████████. CONTAINS ████████ UNITS OF ████████ MATERIAL.",
      date: "██/██/1989",
      coords: "██°██'N ██°██'W",
      attachment: "SCHEMATIC",
    },
    {
      title: "INCIDENT 0-0-7",
      desc: "AFTER ACTION REPORT ████████",
      description: "Monitoring activity summary",
      content:
        "INCIDENT OCCURRED DURING ████████. CAUSE: ████████. CASUALTIES: ████████. RECOMMENDATIONS: ████████ ALL FUTURE ████████.",
      date: "██/██/2018",
      coords: "██°██'N ██°██'W",
      attachment: "SURVEILLANCE FOOTAGE",
    },
    {
      title: "PROTOCOL PHOENIX",
      desc: "CONTINGENCY PLAN ████████",
      description: "Partially redacted archive",
      stamp: "CONFIDENTIAL",
      content:
        "TO BE ACTIVATED ONLY IN EVENT OF ████████. AUTHORIZATION REQUIRED FROM ████████. INITIATION SEQUENCE: ████████. WARNING: IRREVERSIBLE AFTER ████████.",
      date: "██/██/2020",
      coords: "██°██'N ██°██'W",
      attachment: "ACCESS CODES",
    },
    {
      title: "SUBJECT ALPHA-9",
      desc: "CLASSIFIED ORDERS ████████",
      description: "Biological research dossier",
      content: `
                <p><strong>SUBJECT:</strong> ALPHA-9</p>
                <p><strong>STATUS:</strong> CONTAINED</p>
                <p><strong>LAST OBSERVED:</strong> ██/██/20██</p>
                <p>Subject exhibits ████████ beyond normal human parameters. Testing reveals ████████ in DNA structure.</p>
                <p>WARNING: Do not make direct ████████ with subject. Use ████████ protocol at all times.</p>
                <p>Transport to ████████ facility scheduled for ██/██/20██.</p>
            `,
      date: "██/██/2018",
      coords: "██°██'N ██°██'W",
    },
    {
      title: "AUDIO LOG #742",
      desc: "CLASSIFIED ORDERS ████████",
      description: "Field recording transcript",
      content: `
                <p><strong>SUBJECT:</strong> FIELD RECORDING #742</p>
                <p><strong>STATUS:</strong> INCONCLUSIVE</p>
                <p><strong>DATE:</strong> ██/██/20██</p>
                <p>Recording recovered from ████████ site. Contents suggest ████████ event.</p>
                <p>Transcript (partial):</p>
                <p>"...can't explain what we're seeing... the ████████ is moving against the wind... oh god, the ████████... [static]... we need to ████████ immediately..."</p>
                </div>
                <p>Full analysis pending. Team ████████ dispatched for follow-up.</p>
            `,
      date: "██/██/2018",
      coords: "██°██'N ██°██'W",
    },
    {
      title: "TECHNOLOGY REPORT #17",
      desc: "MISSION DEBRIEF ████████",
      description: "Reverse engineering analysis",
      content: `
                <p><strong>SUBJECT:</strong> RECOVERED TECHNOLOGY #17</p>
                <p><strong>STATUS:</strong> ANALYSIS IN PROGRESS</p>
                <p><strong>LOCATION:</strong> SITE ██</p>
                <p>Artifact displays properties inconsistent with known ████████. Energy signature matches ████████ pattern.</p>
                <p>Testing reveals:</p>
                <ul>
                    <li>Non-standard ████████ emission</li>
                    <li>Self-repair capability</li>
                    <li>Resistant to ████████ up to ████°C</li>
                </ul>
                <p>Recommend immediate ████████ protocol implementation.</p>
            `,
      date: "██/██/2018",
      coords: "██°██'N ██°██'W",
    },
  ];

  // DOM Elements
  const filesGrid = document.querySelector(".files-grid");
  const modal = document.getElementById("file-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalContent = document.querySelector(".modal-body");
  const closeModal = document.querySelector(".close-modal");
  const logFeed = document.getElementById("log-feed");
  const initPopup = document.querySelector(".init-popup");
  const closeInit = document.querySelector(".close-init");
  const typedText = document.getElementById("typed-text");
  const terminalContainer = document.querySelector(".terminal-container");
  const commandInput = document.getElementById("command-input");
  const typewriterSound = document.getElementById("typewriter-sound");
  const glitchEffect = document.querySelector(".glitch-effect");

  // Initialize the site
  function initSite() {
    // Typewriter effect for initialization text
    const initText =
      "> INITIALIZING CLASSIFIED VAULT SYSTEM...\n> DECRYPTING MAINFRAME...\n> VERIFYING USER CREDENTIALS...\n> WARNING: UNAUTHORIZED ACCESS DETECTED\n> OVERRIDE ACCEPTED\n> WELCOME, VISITOR. PROCEED WITH CAUTION.";
    let i = 0;
    const typingSpeed = 30;

    function typeWriter() {
      if (i < initText.length) {
        typedText.innerHTML += initText.charAt(i);
        i++;

        // Play typewriter sound randomly
        if (Math.random() > 0.7) {
          typewriterSound.currentTime = 0;
          typewriterSound.play();
        }

        setTimeout(typeWriter, typingSpeed);
      } else {
        // Show close button when done
        setTimeout(() => {
          closeInit.style.opacity = "1";
        }, 500);
      }
    }

    typeWriter();

    // Simulate progress bar animation
    const progressBar = document.querySelector(".progress-bar");
    let progress = 47;

    const progressInterval = setInterval(() => {
      progress += Math.random() * 5;
      if (progress >= 100) {
        progress = 100;
        clearInterval(progressInterval);

        // Close popup automatically when reaches 100%
        setTimeout(() => {
          initPopup.style.opacity = "0";
          setTimeout(() => {
            initPopup.style.display = "none";
            terminalContainer.style.opacity = "1";

            // Generate files after popup closes
            generateFiles();

            // Add initial log entries
            addLogEntry("SYSTEM READY");
            addLogEntry("AWAITING USER INPUT");
          }, 500);
        }, 300);
      }
      progressBar.style.width = `${progress}%`;
      document.querySelector(
        ".progress-text"
      ).textContent = `DECRYPTING FILES... ${Math.floor(progress)}%`;
    }, 300);
  }

  // Close initialization popup
  closeInit.addEventListener("click", function () {
    initPopup.style.opacity = "0";
    setTimeout(() => {
      initPopup.style.display = "none";
      terminalContainer.style.opacity = "1";

      // Generate files after popup closes
      generateFiles();

      // Add initial log entries
      addLogEntry("SYSTEM READY");
      addLogEntry("AWAITING USER INPUT");
    }, 500);
  });

  // Generate file cards
  function generateFiles() {
    classifiedFiles.forEach((file, index) => {
      const fileCard = document.createElement("div");
      fileCard.className = "file-card";
      fileCard.dataset.index = index;

      fileCard.innerHTML = `
                <h3 class="file-title">${file.title}</h3>
                <p class="file-desc">${file.desc}</p>
                <p>${file.description}</p>
                ${
                  file.stamp
                    ? `<div class="file-stamp">${file.stamp}</div>`
                    : ""
                }
                <div class="file-classified">CLASSIFIED</div>
            `;

      fileCard.addEventListener("click", function () {
        openFileModal(index);

        // Random chance for glitch effect
        if (Math.random() > 0.7) {
          triggerGlitch();
        }
      });

      filesGrid.appendChild(fileCard);
    });
  }

  // Open file modal
  function openFileModal(index) {
    const file = classifiedFiles[index];

    // Update modal content
    modalTitle.textContent = file.title;

    document.querySelector(".document-stamp").textContent =
      file.stamp || "CONFIDENTIAL";
    document.querySelector(".document-date").textContent = `DATE: ${file.date}`;
    document.querySelector(
      ".document-coords"
    ).textContent = `COORDINATES: ${file.coords}`;

    document.querySelector(".document-content").innerHTML = `
            <p>SUBJECT: <span class="redacted">${file.title}</span></p>
            <p>STATUS: <span class="redacted">███████</span></p>
            <p>DESCRIPTION: ${file.content}</p>
            <p>ACCESS RESTRICTED TO LEVEL <span class="redacted">████</span> PERSONNEL ONLY.</p>
            <p>UNAUTHORIZED ACCESS WILL RESULT IN <span class="redacted">████████</span>.</p>
        `;

    document.querySelector(
      ".attachment-label"
    ).textContent = `ATTACHMENT: ${file.attachment}`;

    // Show modal
    modal.style.display = "flex";

    // Add log entry
    addLogEntry(`ACCESSING FILE: ${file.title}`);
  }

  // Close modal
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close modal when clicking outside
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Add entry to log feed
  function addLogEntry(text) {
    const entry = document.createElement("div");
    entry.textContent = `> ${text}`;
    logFeed.appendChild(entry);

    // Scroll to bottom
    logFeed.scrollTop = logFeed.scrollHeight;
  }

  // Command line input
  commandInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const command = this.value.trim();

      if (command) {
        addLogEntry(`COMMAND: ${command}`);

        // Process some fake commands
        if (command.toLowerCase() === "help") {
          addLogEntry("AVAILABLE COMMANDS: HELP, CLEAR, ACCESS, DECRYPT");
        } else if (command.toLowerCase() === "clear") {
          logFeed.innerHTML = "";
          addLogEntry("LOG CLEARED");
        } else if (command.toLowerCase() === "access") {
          addLogEntry("ERROR: INSUFFICIENT CLEARANCE LEVEL");
        } else if (command.toLowerCase() === "decrypt") {
          addLogEntry("INITIATING DECRYPTION SEQUENCE...");
          addLogEntry("ERROR: DECRYPTION KEY REQUIRED");
        } else {
          addLogEntry("ERROR: UNRECOGNIZED COMMAND");
        }

        this.value = "";
      }
    }
  });

  // Trigger glitch effect
  function triggerGlitch() {
    glitchEffect.style.opacity = "0.3";
    setTimeout(() => {
      glitchEffect.style.opacity = "0";
    }, 300);
  }

  // Start initialization
  initSite();
});
