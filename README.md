# Staff Planning - ID Deactivation Tracker

A web-based dashboard to track ID deactivation status for transitioning staff members.

## Features

- 📊 **Real-time Dashboard** - View statistics for pending, in-progress, and completed deactivations
- 🔍 **Advanced Filtering** - Filter by name, fleet, vendor, transition status, and deactivation status
- ✏️ **Inline Editing** - Update deactivation status and submitter information directly in the table
- 💾 **Auto-save** - All changes are automatically saved to browser localStorage
- 📥 **Export to CSV** - Download filtered data for reporting
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile devices

## Quick Start

### Option 1: GitHub Pages (Recommended)

1. Visit the live demo: `https://chakn005.github.io/staff-planning-tracker/`

### Option 2: Local Development

1. Clone the repository:
```bash
git clone https://github.com/chakn005/staff-planning-tracker.git
cd staff-planning-tracker
```

2. Open `index.html` in your browser:
```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

Or use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server
```

Then navigate to `http://localhost:8000`

## Usage

### Tracking ID Deactivations

1. **View Staff List**: The dashboard displays all staff members with transition status "x"
2. **Update Status**: Click the dropdown in the "ID Deactivation Status" column to change status:
   - **Pending** - Deactivation request not yet submitted
   - **In Progress** - Request submitted and being processed
   - **Completed** - ID successfully deactivated
3. **Record Submitter**: Enter the name of the person who submitted the deactivation request
4. **Filter Data**: Use the filter controls at the top to narrow down the list
5. **Export Data**: Click "Export to CSV" to download the current filtered view

### Dashboard Statistics

The top of the page shows:
- Total number of staff with "x" transition status
- Count of pending deactivations
- Count of in-progress deactivations
- Count of completed deactivations

## Data Management

### Adding New Staff Members

Edit the `staffData` array in `app.js`:

```javascript
{
    name: "John Doe",
    fleet: "Engineering",
    application: "Platform Services",
    role: "SDET",
    vendor: "Vendor Name",
    rank: "1",
    transition: "x",
    endDate: "12/31/26",
    manager: "Manager Name",
    idStatus: "Pending",
    submittedBy: ""
}
```

### Data Persistence

- All changes are automatically saved to browser localStorage
- Data persists between browser sessions
- To reset data, clear browser localStorage or use browser developer tools

### Importing from Excel

To import data from your Excel file:

1. Export your Excel data to CSV
2. Use the provided data structure in `app.js` as a template
3. Update the `staffData` array with your records

## Project Structure

```
staff-planning-tracker/
├── index.html          # Main HTML structure
├── styles.css          # Styling and layout
├── app.js              # Application logic and data
├── README.md           # This file
└── .gitignore          # Git ignore rules
```

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- LocalStorage API

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues or questions, please open an issue on GitHub.

## Roadmap

- [ ] Add bulk import from CSV/Excel
- [ ] Add user authentication
- [ ] Add backend API integration
- [ ] Add email notifications
- [ ] Add audit log/history tracking
- [ ] Add advanced reporting features

## Screenshots

### Dashboard View
![Dashboard](screenshots/dashboard.png)

### Filtered View
![Filtered View](screenshots/filtered.png)

---

Made with ❤️ for efficient staff transition management
