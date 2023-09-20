import React from "react";

export default function PDFViewer({ pdfUrl }) {
  return (
    <object
      data={pdfUrl}
      type="application/pdf"
      width="100%"
      height="500px" // Set an appropriate height
    >
      <p>
        It appears you don&#39;t have a PDF plugin for this browser. You can{" "}
        <a href={pdfUrl}>click here to download the PDF file.</a>
      </p>
    </object>
  );
}
