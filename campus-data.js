(function () {
  const campuses = [
    {
      id: "SCS-001",
      name: "Summit Gateway Academy",
      slug: "summit-gateway-academy",
      region: "Central",
      city: "Phoenix",
      gradeBand: "K-8",
      enrollment: 642,
      letterGrade: "B",
      math: 48,
      ela: 51,
      graduationRate: null,
      absenteeism: 15.8,
      reportYear: "2025-2026",
      academicSourcePage: 2,
      attendanceSourcePage: 3,
      story: "Stable mid-performing campus with attendance improving just under the internal watch threshold.",
      profileNote: "Stable campus with improving attendance and no urgent alert.",
      focus: "Steady academic monitoring",
      pdfNote: "K-8 campus; graduation rate appears as Not Applicable."
    },
    {
      id: "SCS-002",
      name: "Summit Mesa Prep",
      slug: "summit-mesa-prep",
      region: "East Valley",
      city: "Mesa",
      gradeBand: "9-12",
      enrollment: 518,
      letterGrade: "B",
      math: 54,
      ela: 57,
      graduationRate: 86,
      absenteeism: 21.5,
      reportYear: "2025-2026",
      academicSourcePage: 2,
      attendanceSourcePage: 3,
      story: "Academics are solid, but chronic absenteeism crossed above 20% and continues rising.",
      profileNote: "Attendance watch status despite acceptable academics.",
      focus: "Attendance recovery",
      pdfNote: "High school campus; graduation rate is included."
    },
    {
      id: "SCS-003",
      name: "Summit Tucson South",
      slug: "summit-tucson-south",
      region: "Southern Arizona",
      city: "Tucson",
      gradeBand: "K-8",
      enrollment: 474,
      letterGrade: "D",
      math: 27,
      ela: 31,
      graduationRate: null,
      absenteeism: 24.7,
      reportYear: "2025-2026",
      academicSourcePage: 2,
      attendanceSourcePage: 3,
      story: "Low proficiency campus showing early recovery but still below target, with absenteeism above 20%.",
      profileNote: "Academic recovery and attendance support are current priorities.",
      focus: "Academic recovery",
      pdfNote: "K-8 campus; math below 30% should be easy to locate."
    },
    {
      id: "SCS-004",
      name: "Summit Flagstaff North",
      slug: "summit-flagstaff-north",
      region: "Northern Arizona",
      city: "Flagstaff",
      gradeBand: "K-8",
      enrollment: 389,
      letterGrade: "A",
      math: 67,
      ela: 69,
      graduationRate: null,
      absenteeism: 10.8,
      reportYear: "2025-2026",
      academicSourcePage: 2,
      attendanceSourcePage: 3,
      story: "Strong performer and useful benchmark campus with low absenteeism.",
      profileNote: "High-performing comparison campus.",
      focus: "Benchmark practices",
      pdfNote: "K-8 campus; graduation rate appears as Not Applicable."
    },
    {
      id: "SCS-005",
      name: "Summit Yuma Desert View",
      slug: "summit-yuma-desert-view",
      region: "Western Arizona",
      city: "Yuma",
      gradeBand: "K-8",
      enrollment: 431,
      letterGrade: "C",
      math: 39,
      ela: 34,
      graduationRate: null,
      absenteeism: 19.2,
      reportYear: "2025-2026",
      academicSourcePage: 2,
      attendanceSourcePage: 3,
      story: "ELA is declining and absenteeism is approaching the 20% threshold.",
      profileNote: "ELA intervention focus and attendance approaching watch status.",
      focus: "ELA intervention",
      pdfNote: "K-8 campus; ELA concern should be visible without overstating the risk."
    },
    {
      id: "SCS-006",
      name: "Summit Chandler Innovation",
      slug: "summit-chandler-innovation",
      region: "East Valley",
      city: "Chandler",
      gradeBand: "9-12",
      enrollment: 562,
      letterGrade: "A",
      math: 63,
      ela: 66,
      graduationRate: 91,
      absenteeism: 12.6,
      reportYear: "2025-2026",
      academicSourcePage: 2,
      attendanceSourcePage: 3,
      story: "Strong high school campus with stable academics, low absenteeism, and strong graduation indicators.",
      profileNote: "Strong campus with continued monitoring.",
      focus: "Sustain high school outcomes",
      pdfNote: "High school campus; graduation rate should be prominent but not the only story."
    },
    {
      id: "SCS-007",
      name: "Summit Glendale West",
      slug: "summit-glendale-west",
      region: "Western Arizona",
      city: "Glendale",
      gradeBand: "K-8",
      enrollment: 603,
      letterGrade: "F",
      math: 24,
      ela: 28,
      graduationRate: null,
      absenteeism: 29.4,
      reportYear: "2025-2026",
      academicSourcePage: 2,
      attendanceSourcePage: 3,
      story: "Urgent watch campus: proficiency below 30%, absenteeism near 30%, and enrollment slipping.",
      profileNote: "Urgent support needed and current report available.",
      focus: "Urgent academic and attendance support",
      pdfNote: "K-8 campus; this is the clearest watch-list case."
    },
    {
      id: "SCS-008",
      name: "Summit Tempe Bridge",
      slug: "summit-tempe-bridge",
      region: "Central",
      city: "Tempe",
      gradeBand: "6-12",
      enrollment: 489,
      letterGrade: "D",
      math: 32,
      ela: 41,
      graduationRate: null,
      absenteeism: 23.1,
      reportYear: "2025-2026",
      academicSourcePage: 2,
      attendanceSourcePage: 3,
      story: "Combined math and attendance concern, with math declining over the four-week trend period.",
      profileNote: "Math recovery and attendance coordination are current priorities.",
      focus: "Math recovery",
      pdfNote: "6-12 campus; graduation rate appears as Not Applicable in this scenario."
    },
    {
      id: "SCS-009",
      name: "Summit Maricopa Valley",
      slug: "summit-maricopa-valley",
      region: "Southern Arizona",
      city: "Maricopa",
      gradeBand: "K-8",
      enrollment: 456,
      letterGrade: "C",
      math: 43,
      ela: 45,
      graduationRate: null,
      absenteeism: 20.8,
      reportYear: "2025-2026",
      academicSourcePage: 2,
      attendanceSourcePage: 3,
      story: "Near-average academics, but absenteeism has crossed into watch status and is trending up.",
      profileNote: "Attendance watch status with otherwise steady academics.",
      focus: "Attendance watch",
      pdfNote: "K-8 campus; chronic absenteeism is the main risk, not academics."
    },
    {
      id: "SCS-010",
      name: "Summit Prescott Heights",
      slug: "summit-prescott-heights",
      region: "Northern Arizona",
      city: "Prescott",
      gradeBand: "9-12",
      enrollment: 344,
      letterGrade: "A",
      math: 71,
      ela: 73,
      graduationRate: 94,
      absenteeism: 9.6,
      reportYear: "2025-2026",
      academicSourcePage: 2,
      attendanceSourcePage: 3,
      story: "Strong high school benchmark with high proficiency, low absenteeism, and strong graduation readiness.",
      profileNote: "Strong benchmark campus for high school outcomes.",
      focus: "Graduation readiness benchmark",
      pdfNote: "High school campus; include graduation rate and college-ready language in a measured way."
    }
  ];

  function profileHref(campus, fromProfile) {
    const prefix = fromProfile ? "" : "campuses/";
    return `${prefix}${campus.slug}.html`;
  }

  function reportHref(campus, fromProfile) {
    const prefix = fromProfile ? "../" : "";
    return `${prefix}reports/current/${campus.slug}-current-report-card.pdf`;
  }

  function archiveHref(campus, year, fromProfile) {
    const prefix = fromProfile ? "../" : "";
    return `${prefix}reports/archive/${campus.slug}-${year}-report-card.pdf`;
  }

  function gradeClass(grade) {
    return `badge-${String(grade).toLowerCase()}`;
  }

  function graduationText(campus) {
    return campus.graduationRate == null ? "Not Applicable" : `${campus.graduationRate}%`;
  }

  function riskLevel(campus) {
    if (campus.letterGrade === "F" || campus.absenteeism >= 28 || campus.math < 30 || campus.ela < 30) {
      return "urgent";
    }
    if (campus.letterGrade === "D" || campus.absenteeism >= 20 || campus.math < 35 || campus.ela < 35) {
      return "watch";
    }
    if (campus.letterGrade === "C" || campus.absenteeism >= 18) {
      return "monitor";
    }
    return "steady";
  }

  function riskLabel(campus) {
    const level = riskLevel(campus);
    if (level === "urgent") return "Urgent support";
    if (level === "watch") return "Watch status";
    if (level === "monitor") return "Monitor";
    return "Steady";
  }

  function riskSignals(campus) {
    const signals = [];
    if (campus.absenteeism > 20) signals.push(`Chronic absenteeism is ${campus.absenteeism}%`);
    if (campus.math < 30) signals.push(`Math proficiency is ${campus.math}%`);
    if (campus.ela < 30) signals.push(`ELA proficiency is ${campus.ela}%`);
    if (campus.letterGrade === "D" || campus.letterGrade === "F") signals.push(`Overall letter grade is ${campus.letterGrade}`);
    if (signals.length === 0) signals.push(campus.profileNote);
    return signals;
  }

  function sortByName(items) {
    return [...items].sort((a, b) => a.name.localeCompare(b.name));
  }

  window.SummitPortal = {
    campuses,
    sortByName,
    profileHref,
    reportHref,
    archiveHref,
    gradeClass,
    graduationText,
    riskLevel,
    riskLabel,
    riskSignals,
    getCampusById(id) {
      return campuses.find((campus) => campus.id === id);
    },
    getCampusBySlug(slug) {
      return campuses.find((campus) => campus.slug === slug);
    }
  };
})();
