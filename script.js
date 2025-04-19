function toggleDarkMode() {
    document.body.classList.toggle('dark');
  }
  
  function downloadPDF() {
    const link = document.createElement("a");
    link.href = "resume.pdf";
    link.download = "Divyasree_Resume.pdf";
    link.click();
  }
