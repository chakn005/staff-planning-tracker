// Staff Planning Data
let staffData = [
    // Globant staff with "x" transition
    { name: "Candy Guerrero", fleet: "Title Planning", application: "Title Core: DTM", role: "SDET", vendor: "Globant", rank: "0", transition: "x", endDate: "4/30/26", manager: "Abramyan", idStatus: "Pending", submittedBy: "" },
    { name: "Dorian Escobar", fleet: "Asset & Media", application: "ARIEL", role: "SDET", vendor: "Globant", rank: "1", transition: "x", endDate: "4/30/26", manager: "Yurch", idStatus: "Pending", submittedBy: "" },
    { name: "Vaibhav Magar", fleet: "Title Planning", application: "CPT", role: "SDET", vendor: "Globant", rank: "0", transition: "x", endDate: "4/30/26", manager: "Abramyan", idStatus: "Pending", submittedBy: "" },
    { name: "Victor Gomez", fleet: "Asset & Media", application: "Mobius", role: "SDET", vendor: "Globant", rank: "1", transition: "x", endDate: "5/29/26", manager: "Yurch", idStatus: "Pending", submittedBy: "" },
    { name: "Bernardo Vargas", fleet: "Title Planning", application: "CPT", role: "SDET", vendor: "Globant", rank: "1", transition: "x", endDate: "4/30/26", manager: "Abramyan", idStatus: "Pending", submittedBy: "" },
    { name: "Cristian Manzo", fleet: "Title Planning", application: "CAP", role: "SDET", vendor: "Globant", rank: "1", transition: "x", endDate: "4/30/26", manager: "Abramyan", idStatus: "Pending", submittedBy: "" },
    { name: "Esteban Zuluaga", fleet: "Title Planning", application: "CAP", role: "SDET", vendor: "Globant", rank: "1", transition: "x", endDate: "4/30/26", manager: "Abramyan", idStatus: "Pending", submittedBy: "" },
    { name: "Ilian Burgos", fleet: "Asset & Media", application: "Wonderland/Mandalorian", role: "SDET", vendor: "Globant", rank: "0", transition: "x", endDate: "5/29/26", manager: "Yurch", idStatus: "Pending", submittedBy: "" },
    { name: "Jimena Aldape", fleet: "Title Planning", application: "Milestone Insights", role: "SDET", vendor: "Globant", rank: "1", transition: "x", endDate: "4/30/26", manager: "Yurch", idStatus: "Pending", submittedBy: "" },
    { name: "Jonathan Morales", fleet: "Title Planning", application: "CPT", role: "SDET", vendor: "Globant", rank: "1", transition: "x", endDate: "4/30/26", manager: "Abramyan", idStatus: "Pending", submittedBy: "" },
    { name: "Nikita Naik", fleet: "PE", application: "Mandalorian - Pod 2", role: "SDET", vendor: "Globant", rank: "0", transition: "x", endDate: "4/30/26", manager: "Yurch", idStatus: "Pending", submittedBy: "" },
    { name: "Oscaromar Martinez", fleet: "Title Planning", application: "Milestone Insights", role: "SDET", vendor: "Globant", rank: "1", transition: "x", endDate: "4/30/26", manager: "Yurch", idStatus: "Pending", submittedBy: "" },
    { name: "Sampada Kshirsagar", fleet: "PE", application: "Mandalorian - Pod 2", role: "SDET", vendor: "Globant", rank: "0", transition: "x", endDate: "5/8/26", manager: "Yurch", idStatus: "Pending", submittedBy: "" },
    { name: "Supriya Game", fleet: "Asset & Media", application: "Wonderland", role: "SDET", vendor: "Globant", rank: "0", transition: "x", endDate: "6/30/26", manager: "Yurch", idStatus: "Pending", submittedBy: "" },
    
    // Beqisoft staff with "x" transition
    { name: "Kulasekarapandiyan Dhinagaran", fleet: "MPSE", application: "Content Scheduling", role: "Manual QA", vendor: "Beqisoft", rank: "0", transition: "x", endDate: "6/12/26", manager: "Chakraborty", idStatus: "Pending", submittedBy: "" },
    { name: "Hopeson Singh", fleet: "MPSE", application: "PALO", role: "Manual QA", vendor: "Beqisoft", rank: "0", transition: "x", endDate: "6/12/26", manager: "Chakraborty", idStatus: "Pending", submittedBy: "" },
    { name: "Venkat Hariharan", fleet: "Asset & Media", application: "WF/AMP/SIP", role: "Lead/Mgr", vendor: "Beqisoft", rank: "0", transition: "x", endDate: "6/12/26", manager: "Chakraborty", idStatus: "Pending", submittedBy: "" },
    { name: "Thoufeek Ahamed", fleet: "MPSE", application: "Content Manager (GECC)", role: "Manual QA", vendor: "Beqisoft", rank: "0", transition: "x", endDate: "6/12/26", manager: "Vibert", idStatus: "Pending", submittedBy: "" },
    { name: "Agile Mathew", fleet: "Asset & Media", application: "DMM/TMM", role: "Manual QA", vendor: "Beqisoft", rank: "1", transition: "x", endDate: "6/12/26", manager: "Chakraborty", idStatus: "Pending", submittedBy: "" },
    
    // Zucitech staff with "x" transition
    { name: "Sonu Patil", fleet: "PE", application: "Mandalorian - Pod 1", role: "SDET", vendor: "Zucitech", rank: "0", transition: "x", endDate: "4/30/26", manager: "Niloy", idStatus: "Pending", submittedBy: "" },
    { name: "Chandulal Karthava Rayan", fleet: "Asset & Media", application: "ARIEL", role: "Manual QA", vendor: "Zucitech", rank: "1", transition: "x", endDate: "4/30/26", manager: "Yurch", idStatus: "Pending", submittedBy: "" },
    { name: "Manoj Kumar", fleet: "Asset & Media", application: "DOT", role: "Manual QA", vendor: "Zucitech", rank: "0", transition: "x", endDate: "4/30/26", manager: "Yurch", idStatus: "Pending", submittedBy: "" },
    { name: "Sai Rohit Voleti", fleet: "Asset & Media", application: "CAM - Sports Artwork", role: "SDET", vendor: "Zucitech", rank: "0", transition: "x", endDate: "5/8/26", manager: "Yurch", idStatus: "Pending", submittedBy: "" },
    { name: "Akhil Kumar Betapudi", fleet: "Asset & Media", application: "SIP/AMP", role: "Manual QA", vendor: "Zucitech", rank: "0", transition: "x", endDate: "5/29/26", manager: "Chakraborty", idStatus: "Pending", submittedBy: "" },
    { name: "Karthik Krishna", fleet: "Rights", application: "Apollo Cloud", role: "SDET", vendor: "Zucitech", rank: "1", transition: "x", endDate: "5/31/26", manager: "Vibert", idStatus: "Pending", submittedBy: "" },
    { name: "Manjunatha Veerashekara", fleet: "Asset & Media", application: "DOT", role: "Manual QA", vendor: "Zucitech", rank: "0", transition: "x", endDate: "6/30/26", manager: "Yurch", idStatus: "Pending", submittedBy: "" },
    { name: "Arvind (Tumbeti) Ravi", fleet: "Rights", application: "Falcon", role: "Manual QA", vendor: "Zucitech", rank: "0", transition: "x", endDate: "6/30/26", manager: "Vibert", idStatus: "Pending", submittedBy: "" },
    { name: "Sachin Kumar", fleet: "Rights", application: "Falcon", role: "Manual QA", vendor: "Zucitech", rank: "0", transition: "x", endDate: "6/30/26", manager: "Vibert", idStatus: "Pending", submittedBy: "" },
    { name: "Raghavendra Velpula", fleet: "Title Planning", application: "Title Core: Bolt/Belle/Sonar/Mars", role: "Manual QA", vendor: "Zucitech", rank: "0", transition: "x", endDate: "7/30/26", manager: "Abramyan", idStatus: "Pending", submittedBy: "" },
    { name: "Anusha Torgalmath", fleet: "Title Planning", application: "Title Core: TRM/CPM/XAVIER", role: "Manual QA", vendor: "Zucitech", rank: "0", transition: "x", endDate: "7/30/26", manager: "Abramyan", idStatus: "Pending", submittedBy: "" },
    
    // LTI staff with "x" transition
    { name: "Ashish Lamba", fleet: "Asset & Media", application: "Mobius", role: "SDET", vendor: "LTI", rank: "1", transition: "x", endDate: "5/30/26", manager: "Yurch", idStatus: "Pending", submittedBy: "" },
    { name: "Sanjeevanee Kanase", fleet: "Asset & Media", application: "Mobius", role: "SDET", vendor: "LTI", rank: "1", transition: "x", endDate: "5/30/26", manager: "Yurch", idStatus: "Pending", submittedBy: "" },
];

// Save data to localStorage
function saveData() {
    localStorage.setItem('staffPlanningData', JSON.stringify(staffData));
}

// Load data from localStorage
function loadData() {
    const saved = localStorage.getItem('staffPlanningData');
    if (saved) {
        staffData = JSON.parse(saved);
    }
}

// Initialize
loadData();
populateFilters();
renderTable();
updateStats();

function populateFilters() {
    const fleets = [...new Set(staffData.map(s => s.fleet))].sort();
    const vendors = [...new Set(staffData.map(s => s.vendor))].sort();
    
    const fleetSelect = document.getElementById('filterFleet');
    fleets.forEach(fleet => {
        const option = document.createElement('option');
        option.value = fleet;
        option.textContent = fleet;
        fleetSelect.appendChild(option);
    });
    
    const vendorSelect = document.getElementById('filterVendor');
    vendors.forEach(vendor => {
        const option = document.createElement('option');
        option.value = vendor;
        option.textContent = vendor;
        vendorSelect.appendChild(option);
    });
}

function getFilteredData() {
    const searchName = document.getElementById('searchName').value.toLowerCase();
    const filterFleet = document.getElementById('filterFleet').value;
    const filterVendor = document.getElementById('filterVendor').value;
    const filterTransition = document.getElementById('filterTransition').value;
    const filterStatus = document.getElementById('filterStatus').value;

    return staffData.filter(staff => {
        if (searchName && !staff.name.toLowerCase().includes(searchName)) return false;
        if (filterFleet && staff.fleet !== filterFleet) return false;
        if (filterVendor && staff.vendor !== filterVendor) return false;
        if (filterTransition && staff.transition !== filterTransition) return false;
        if (filterStatus && staff.idStatus !== filterStatus) return false;
        return true;
    });
}

function renderTable() {
    const tbody = document.getElementById('tableBody');
    const noResults = document.getElementById('noResults');
    const filteredData = getFilteredData();
    
    tbody.innerHTML = '';
    
    if (filteredData.length === 0) {
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    
    filteredData.forEach((staff) => {
        const row = document.createElement('tr');
        const originalIndex = staffData.indexOf(staff);
        const rankClass = staff.transition === 'x' ? 'rank-x' : '';
        
        row.innerHTML = `
            <td><strong>${staff.name}</strong></td>
            <td>${staff.fleet}</td>
            <td>${staff.application}</td>
            <td>${staff.role}</td>
            <td>${staff.vendor}</td>
            <td><span class="rank-badge ${rankClass}">${staff.rank}</span></td>
            <td><span class="rank-badge ${rankClass}">${staff.transition}</span></td>
            <td>${staff.endDate}</td>
            <td>${staff.manager}</td>
            <td>
                <select class="status-select" onchange="updateStatus(${originalIndex}, this.value)">
                    <option value="Pending" ${staff.idStatus === 'Pending' ? 'selected' : ''}>Pending</option>
                    <option value="In Progress" ${staff.idStatus === 'In Progress' ? 'selected' : ''}>In Progress</option>
                    <option value="Completed" ${staff.idStatus === 'Completed' ? 'selected' : ''}>Completed</option>
                </select>
            </td>
            <td>
                <input type="text" class="submitted-by" value="${staff.submittedBy}" 
                       onchange="updateSubmittedBy(${originalIndex}, this.value)"
                       placeholder="Enter name...">
            </td>
        `;
        
        tbody.appendChild(row);
    });
}

function updateStatus(index, status) {
    staffData[index].idStatus = status;
    saveData();
    updateStats();
}

function updateSubmittedBy(index, name) {
    staffData[index].submittedBy = name;
    saveData();
}

function updateStats() {
    const xStaff = staffData.filter(s => s.transition === 'x');
    const pending = xStaff.filter(s => s.idStatus === 'Pending').length;
    const inProgress = xStaff.filter(s => s.idStatus === 'In Progress').length;
    const completed = xStaff.filter(s => s.idStatus === 'Completed').length;
    
    document.getElementById('totalCount').textContent = xStaff.length;
    document.getElementById('pendingCount').textContent = pending;
    document.getElementById('inProgressCount').textContent = inProgress;
    document.getElementById('completedCount').textContent = completed;
}

function exportToCSV() {
    const filteredData = getFilteredData();
    const headers = ['Name', 'Fleet', 'Application', 'Role', 'Vendor', 'Rank', 'Transition', 'End Date', 'Manager', 'ID Deactivation Status', 'Submitted By'];
    
    let csv = headers.join(',') + '\n';
    
    filteredData.forEach(staff => {
        const row = [
            `"${staff.name}"`,
            `"${staff.fleet}"`,
            `"${staff.application}"`,
            `"${staff.role}"`,
            `"${staff.vendor}"`,
            staff.rank,
            staff.transition,
            staff.endDate,
            staff.manager,
            staff.idStatus,
            `"${staff.submittedBy}"`
        ];
        csv += row.join(',') + '\n';
    });
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `staff-planning-id-deactivation-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
}

// Add event listeners for filters
document.getElementById('searchName').addEventListener('input', renderTable);
document.getElementById('filterFleet').addEventListener('change', renderTable);
document.getElementById('filterVendor').addEventListener('change', renderTable);
document.getElementById('filterTransition').addEventListener('change', renderTable);
document.getElementById('filterStatus').addEventListener('change', renderTable);
