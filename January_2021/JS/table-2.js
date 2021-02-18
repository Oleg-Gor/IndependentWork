'use strict';


// add events on all `th` cells of tables which have class `table-sort`
document.querySelectorAll("table.table-sort th").forEach((th) =>
  th.addEventListener("click", () => {
    const table = th.closest("table");
    sortTableByColumn(table, th);
  })
);

// add elment <i> inside th - it will help to draw an arrow to show sort direction
document
  .querySelectorAll("table.table-sort th")
  .forEach((th) => th.appendChild(document.createElement("I")));

/**
 *
 * @param table Element
 * @param th Element
 */
function sortTableByColumn(table, th) {
  const ASC = "dir-asc";
  const DESC = "dir-desc";

  let currentSortDirection = th.className;
  let newSortDirection = "";

  let columnIndex = Array.from(th.parentNode.children).indexOf(th);

  let sortedRows = Array.from(table.rows).slice(1); // slice starts with 1 to skip row with `th`-s

  switch (currentSortDirection) {
    case DESC:
      newSortDirection = ASC;
      sortedRows.sort((rowA, rowB) =>
        rowA.cells[columnIndex].innerHTML < rowB.cells[columnIndex].innerHTML
          ? 1
          : -1
      );
      break;
    case ASC:
    default:
      newSortDirection = DESC;
      sortedRows.sort((rowA, rowB) =>
        rowA.cells[columnIndex].innerHTML > rowB.cells[columnIndex].innerHTML
          ? 1
          : -1
      );
      break;
  }
  table.tBodies[0].append(...sortedRows);

  // clear all class names connected to sort direction for all th-s
  table.querySelectorAll("th." + ASC).forEach((el) => el.classList.remove(ASC));
  table
    .querySelectorAll("th." + DESC)
    .forEach((el) => el.classList.remove(DESC));

  // add current sort direction as a class to draw arrow
  if (th.classList.length === 0) {
    th.className = newSortDirection;
  } else {
    th.classList.add(newSortDirection);
  }
}
