var date = new Date();

if (date instanceof Date && !isNaN(date.valueOf())) {
    document.write("Variable tipo Date");
} else {
    document.write("Variable de otro tipo");
}