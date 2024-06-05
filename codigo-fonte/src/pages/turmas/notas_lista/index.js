
import './index.css';

export default {
    init() {
        console.log('turma notas');
        document.getElementById('searchButton').addEventListener('click', function() {
            const query = document.getElementById('searchInput').value.toLowerCase();
            filterTable(query);
        });
        
        function filterTable(query) {
            const tableRows = document.querySelectorAll('.tableValues tr');
        
            tableRows.forEach(function(row) {
                const rowData = Array.from(row.children).map(cell => cell.textContent.toLowerCase());
                const rowMatchesQuery = rowData.some(data => data.includes(query));
                
                if (rowMatchesQuery) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
            
        }    }
}