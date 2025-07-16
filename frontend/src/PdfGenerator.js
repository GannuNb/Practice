// PdfGenerator.js

import React from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const PdfGenerator = () => {
  const data = [
    { id: 1, name: "John Doe", email: "john@example.com", age: 28 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", age: 34 },
    { id: 3, name: "Sam Green", email: "sam@example.com", age: 45 },
  ];

  const generatePDF = () => {
    // Create a new PDF document
    const doc = new jsPDF();

    // Set the title
    doc.setFontSize(18);
    doc.text("User Report", 14, 22);

    // Table headers and rows
    const headers = [["ID", "Name", "Email", "Age"]];
    const rows = data.map((item) => [
      item.id,
      item.name,
      item.email,
      item.age,
    ]);

    // Create the table
    autoTable(doc, {
      startY: 30,
      head: headers,
      body: rows,
      theme: "striped",
      headStyles: { fillColor: [44, 62, 80] },
      styles: { fontSize: 12, cellPadding: 3 },
    });

    // Save the PDF
    doc.save("user-report.pdf");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>PDF Report Generator</h2>
      <button onClick={generatePDF}>Download PDF</button>
    </div>
  );
};

export default PdfGenerator;
