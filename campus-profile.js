(function () {
  const portal = window.SummitPortal;
  const root = document.querySelector("[data-campus-id]");

  if (!root) return;

  const campus = portal.getCampusById(root.dataset.campusId);

  if (!campus) {
    root.innerHTML = `
      <section class="notice">
        <h1>Campus profile unavailable</h1>
        <p>The requested campus profile could not be found in the current release.</p>
      </section>
    `;
    return;
  }

  const title = document.querySelector(".profile-title");
  const lede = document.querySelector(".profile-lede");
  if (title) title.textContent = campus.name;
  if (lede) lede.textContent = `${campus.city}, ${campus.region} | ${campus.gradeBand} | ${campus.reportYear} current report`;
  document.title = `${campus.name} | Summit Public Accountability Portal`;

  const risk = portal.riskLevel(campus);
  const riskSignals = portal.riskSignals(campus).map((signal) => `<li>${signal}</li>`).join("");

  root.innerHTML = `
    <section class="profile-hero ${risk}">
      <div>
        <p class="eyebrow">Campus profile</p>
        <h1>${campus.name}</h1>
        <p class="lede">${campus.story}</p>
        <div class="profile-actions">
          <a class="button primary" href="${portal.reportHref(campus, true)}" download>Download Current Report Card PDF</a>
          <a class="button secondary" href="../campus-directory.html">Back to Directory</a>
        </div>
        <p class="download-note">Current PDF is hosted in the public report archive for this campus.</p>
      </div>
      <dl class="facts">
        <div><dt>Campus ID</dt><dd>${campus.id}</dd></div>
        <div><dt>Region</dt><dd>${campus.region}</dd></div>
        <div><dt>City</dt><dd>${campus.city}</dd></div>
        <div><dt>Grade Band</dt><dd>${campus.gradeBand}</dd></div>
        <div><dt>Enrollment</dt><dd>${campus.enrollment.toLocaleString()}</dd></div>
        <div><dt>Overall Grade</dt><dd><span class="badge ${portal.gradeClass(campus.letterGrade)}">${campus.letterGrade}</span></dd></div>
      </dl>
    </section>

    <section class="metric-grid" aria-label="Current report-card metrics">
      <article class="metric-card">
        <span class="metric-value">${campus.math}%</span>
        <span class="metric-label">Math proficiency</span>
        <span class="source-note">Source page ${campus.academicSourcePage}</span>
      </article>
      <article class="metric-card">
        <span class="metric-value">${campus.ela}%</span>
        <span class="metric-label">ELA proficiency</span>
        <span class="source-note">Source page ${campus.academicSourcePage}</span>
      </article>
      <article class="metric-card">
        <span class="metric-value">${portal.graduationText(campus)}</span>
        <span class="metric-label">Graduation rate</span>
        <span class="source-note">Source page ${campus.academicSourcePage}</span>
      </article>
      <article class="metric-card">
        <span class="metric-value">${campus.absenteeism}%</span>
        <span class="metric-label">Chronic absenteeism</span>
        <span class="source-note">Source page ${campus.attendanceSourcePage}</span>
      </article>
    </section>

    <section class="content-grid">
      <article>
        <p class="eyebrow">Current priority</p>
        <h2>${campus.focus}</h2>
        <p>${campus.profileNote}</p>
        <ul class="check-list">${riskSignals}</ul>
      </article>
      <article>
        <p class="eyebrow">Report-card guidance</p>
        <h2>Source Notes</h2>
        <p>${campus.pdfNote}</p>
        <p>Academic values should be cited from page ${campus.academicSourcePage}; attendance and enrollment values should be cited from page ${campus.attendanceSourcePage}.</p>
      </article>
    </section>

    <section class="directory-panel">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Reports</p>
          <h2>Campus Report Archive</h2>
        </div>
        <span class="status-pill ${risk}">${portal.riskLabel(campus)}</span>
      </div>
      <div class="report-list">
        <a class="report-row current" href="${portal.reportHref(campus, true)}" download>
          <span>
            <strong>${campus.reportYear} Current Report Card</strong>
            <small>PDF download link for the current accountability release</small>
          </span>
          <em>Current PDF</em>
        </a>
        <a class="report-row" href="${portal.archiveHref(campus, "2024-2025", true)}">
          <span>
            <strong>2024-2025 Accountability Report</strong>
            <small>Archive placeholder</small>
          </span>
          <em>Archive</em>
        </a>
        <a class="report-row" href="${portal.archiveHref(campus, "2023-2024", true)}">
          <span>
            <strong>2023-2024 Accountability Report</strong>
            <small>Archive placeholder</small>
          </span>
          <em>Archive</em>
        </a>
      </div>
    </section>

    <section class="notice">
      <h2>Synthetic Data Notice</h2>
      <p>This campus profile and its report links are fictional training assets. They are designed for workflow practice and do not describe a real campus or public accountability record.</p>
    </section>
  `;
})();
