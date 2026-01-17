# GSoC Ideas - JSON Data Structure

This folder contains separate JSON files for each year of Google Summer of Code projects.

## Structure

Each year has its own JSON file:
- `2021.json` - GSoC 2021/2022 projects
- `2023.json` - GSoC 2023 projects
- `2024.json` - GSoC 2024 projects
- `2025.json` - GSoC 2025 projects
- `2026.json` - GSoC 2026 projects

## JSON Schema

Each file follows this structure:

```json
{
  "year": 2026,
  "projects": [
    {
      "title": "Project Title",
      "size": "big|medium|small",
      "hours": 350,
      "description": "Detailed project description",
      "keywords": ["keyword1", "keyword2", "..."],
      "skills": ["skill1", "skill2", "..."],
      "mentor": "Mentor Name",
      "difficulty": "Easy|Medium|Hard"
    }
  ]
}
```

## Project Sizes

- **Big**: ~350 hours
- **Medium**: ~175 hours
- **Small**: ~90 hours

## Difficulty Levels

- **Easy**: Suitable for beginners
- **Medium**: Requires some experience
- **Hard**: Requires advanced skills and experience

## Adding New Projects

To add a new project:

1. Open the appropriate year's JSON file
2. Add a new project object to the `projects` array
3. Ensure all required fields are filled
4. Validate the JSON syntax (use https://jsonlint.com)
5. Test the website to ensure the project displays correctly

## Creating a New Year

To add projects for a new year:

1. Create a new file: `YYYY.json` (e.g., `2027.json`)
2. Follow the schema above
3. Update `app.js` to include the new year in the `years` array:
   ```javascript
   const years = [2021, 2023, 2024, 2025, 2026, 2027];
   ```
4. Add the new year option to the year filter in `index.html`:
   ```html
   <option value="2027">2027</option>
   ```

## Data Source

These JSON files are extracted from the original markdown files:
- `/ideas2021.md`
- `/ideas2023.md`
- `/ideas2024.md`
- `/ideas2025.md`
- `/ideas2026.md`

## Validation

Before committing changes:

1. ✅ Validate JSON syntax
2. ✅ Check all required fields are present
3. ✅ Test the dashboard locally
4. ✅ Verify filters work correctly
5. ✅ Ensure modal displays all information

## Statistics

Total projects by year:
- 2021: 11 projects
- 2023: 5 projects
- 2024: 4 projects
- 2025: 11 projects
- 2026: 6 projects

**Total: 37 projects across all years**
