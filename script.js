function createTable() {
    let row = parseInt(prompt("please enter a number:"));
    let column = parseInt(prompt("please enter a number:"));
    createTable(row, column)

    function createTable(row = 1, column = 1) {

        if (row > 0 && column > 0) {

            let tableHeader = '';

            tableHeader += '<tr>'
            for (i = 0; i <= row; i++) {
                tableHeader += "<td>" + i + "</td>"
            }
            tableHeader += '</tr>'

            let tablebody = '';

            for (r = 1; r <= column; r++) {
                tablebody += '<tr>'
                tablebody += "<td>" + r + "</td>"
                for (i = 1; i <= row; i++) {

                    tablebody += "<td>" + i * r + "</td>"
                }
                tablebody += '</tr>'
            }

            document.write(`<table border> ${tableHeader} ${tablebody} </table>`)

        } else if(column <=0 || row <=0) {
            let row = parseInt(prompt("please enter another number:"));
            let column = parseInt(prompt("please enter another number:"));
            createTable(row, column)

        }
    }
}
createTable();