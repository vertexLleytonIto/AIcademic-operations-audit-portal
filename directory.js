(function () {
  const portal = window.SummitPortal;
  const tableBody = document.getElementById("campusTableBody");
  const resultCount = document.getElementById("resultCount");
  const emptyState = document.getElementById("emptyState");
  const searchInput = document.getElementById("searchInput");
  const filters = {
    region: document.getElementById("regionFilter"),
    city: document.getElementById("cityFilter"),
    gradeBand: document.getElementById("gradeBandFilter"),
    letterGrade: document.getElementById("letterGradeFilter")
  };

  function uniqueValues(key) {
    return [...new Set(portal.campuses.map((campus) => campus[key]))].sort((a, b) => a.localeCompare(b));
  }

  function fillSelect(select, values) {
    values.forEach((value) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      select.appendChild(option);
    });
  }

  function campusMatches(campus) {
    const query = searchInput.value.trim().toLowerCase();
    const haystack = [
      campus.id,
      campus.name,
      campus.region,
      campus.city,
      campus.gradeBand,
      campus.letterGrade,
      campus.story
    ].join(" ").toLowerCase();

    return (!query || haystack.includes(query)) &&
      (!filters.region.value || campus.region === filters.region.value) &&
      (!filters.city.value || campus.city === filters.city.value) &&
      (!filters.gradeBand.value || campus.gradeBand === filters.gradeBand.value) &&
      (!filters.letterGrade.value || campus.letterGrade === filters.letterGrade.value);
  }

  function renderRows() {
    const matches = portal.sortByName(portal.campuses.filter(campusMatches));
    tableBody.innerHTML = matches.map((campus) => {
      const risk = portal.riskLevel(campus);
      return `
        <tr>
          <td>
            <strong>${campus.name}</strong>
            <span class="table-subtext">${campus.id}</span>
          </td>
          <td>${campus.region}</td>
          <td>${campus.city}</td>
          <td>${campus.gradeBand}</td>
          <td><span class="badge ${portal.gradeClass(campus.letterGrade)}">${campus.letterGrade}</span></td>
          <td>${campus.enrollment.toLocaleString()}</td>
          <td><span class="status-pill ${risk}">${portal.riskLabel(campus)}</span></td>
          <td><a class="text-link" href="${portal.profileHref(campus, false)}">View profile</a></td>
        </tr>
      `;
    }).join("");

    resultCount.textContent = `${matches.length} ${matches.length === 1 ? "campus" : "campuses"}`;
    emptyState.hidden = matches.length !== 0;
  }

  fillSelect(filters.region, uniqueValues("region"));
  fillSelect(filters.city, uniqueValues("city"));
  fillSelect(filters.gradeBand, uniqueValues("gradeBand"));
  fillSelect(filters.letterGrade, ["A", "B", "C", "D", "F"]);

  searchInput.addEventListener("input", renderRows);
  Object.values(filters).forEach((select) => select.addEventListener("change", renderRows));
  document.getElementById("clearFilters").addEventListener("click", () => {
    searchInput.value = "";
    Object.values(filters).forEach((select) => {
      select.value = "";
    });
    renderRows();
    searchInput.focus();
  });

  renderRows();
})();
