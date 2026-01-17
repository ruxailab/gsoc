// Global variables
let allProjects = [];
let filteredProjects = [];

// DOM elements
const projectsTableBody = document.getElementById('projectsTableBody');
const sizeFilter = document.getElementById('sizeFilter');
const difficultyFilter = document.getElementById('difficultyFilter');
const searchInput = document.getElementById('searchInput');
const resetBtn = document.getElementById('resetBtn');
const projectModal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close-btn');

// Load projects from JSON file
async function loadProjects() {
    try {
        const categories = ['heuristic', 'nlp', 'ruxailab', 'eye-tracker', 'accessibility', 'user-test', 'sentimental'];
        const projectPromises = categories.map(category => 
            fetch(`gsoc-ideas/${category}/2026.json`)
                .then(res => res.ok ? res.json() : null)
                .catch(() => null)
        );
        
        const results = await Promise.all(projectPromises);
        const allCategoryProjects = results
            .filter(data => data !== null)
            .flatMap(data => data.projects.map(p => ({...p, category: data.category, year: 2026})));
        
        allProjects = allCategoryProjects;
        
        // Sort by title
        allProjects.sort((a, b) => a.title.localeCompare(b.title));
        
        filteredProjects = [...allProjects];
        renderProjects();
    } catch (error) {
        console.error('Error loading projects:', error);
        console.error('Please refresh the page.');
    }
}

// Render projects in the table
function renderProjects() {
    projectsTableBody.innerHTML = '';
    
    if (filteredProjects.length === 0) {
        projectsTableBody.innerHTML = `
            <tr>
                <td colspan="8" style="text-align: center; padding: 40px; color: #999;">
                    No projects found matching your filters. Try adjusting your search criteria.
                </td>
            </tr>
        `;
        return;
    }
    
    filteredProjects.forEach(project => {
        const row = document.createElement('tr');
        
        // Truncate description for table view
        const maxLength = 120;
        const shortDescription = project.description.length > maxLength 
            ? project.description.substring(0, maxLength) + '...'
            : project.description;
        
        row.innerHTML = `
            <td><strong>${project.title}</strong></td>
            <td><span class="size-badge size-${project.size}">${capitalizeFirst(project.size)}</span></td>
            <td>${project.hours}h</td>
            <td><span class="difficulty-badge difficulty-${project.difficulty}">${project.difficulty}</span></td>
            <td>${project.mentor}</td>
            <td>
                <div class="keywords-list">
                    ${project.keywords.map(keyword => `<span class="keyword-tag">${keyword}</span>`).join('')}
                </div>
            </td>
            <td>
                <div class="skills-list">
                    ${project.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </td>
            <td class="description-cell">${shortDescription}</td>
        `;
        
        row.addEventListener('click', () => showProjectDetail(project));
        projectsTableBody.appendChild(row);
    });
}

// Filter projects based on all criteria
function filterProjects() {
    const sizeValue = sizeFilter.value;
    const difficultyValue = difficultyFilter.value;
    const searchValue = searchInput.value.toLowerCase();
    
    filteredProjects = allProjects.filter(project => {
        // Size filter
        if (sizeValue !== 'all' && project.size !== sizeValue) {
            return false;
        }
        
        // Difficulty filter
        if (difficultyValue !== 'all' && project.difficulty !== difficultyValue) {
            return false;
        }
        
        // Search filter
        if (searchValue) {
            const searchableText = [
                project.title,
                project.description,
                project.mentor,
                ...project.keywords,
                ...project.skills
            ].join(' ').toLowerCase();
            
            if (!searchableText.includes(searchValue)) {
                return false;
            }
        }
        
        return true;
    });
    
    renderProjects();
}

// Reset all filters
function resetFilters() {
    sizeFilter.value = 'all';
    difficultyFilter.value = 'all';
    searchInput.value = '';
    filterProjects();
}

// Show project detail in modal
function showProjectDetail(project) {
    let modalContent = `
        <div class="modal-header">
            <h2 class="modal-title">${project.title}</h2>
            <div class="modal-meta">
                <span class="year-badge">${project.year}</span>
                <span class="size-badge size-${project.size}">${capitalizeFirst(project.size)} Project</span>
                <span class="difficulty-badge difficulty-${project.difficulty}">${project.difficulty}</span>
            </div>
        </div>
        
        <div class="modal-section">
            <h3>Description</h3>
            <p>${project.description}</p>
        </div>
    `;
    
    // Add Key Features if available
    if (project.keyFeatures && project.keyFeatures.length > 0) {
        modalContent += `
        <div class="modal-section">
            <h3>Key Features</h3>
            <ul class="modal-features-list">
                ${project.keyFeatures.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
        `;
    }
    
    // Add Expected Outcome if available
    if (project.expectedOutcome) {
        modalContent += `
        <div class="modal-section">
            <h3>Expected Outcome</h3>
            <p>${project.expectedOutcome}</p>
        </div>
        `;
    }
    
    modalContent += `
        <div class="modal-section">
            <h3>Project Information</h3>
            <div class="modal-info-grid">
                <div class="modal-info-item">
                    <div class="modal-info-label">Duration</div>
                    <div class="modal-info-value">${project.hours} hours</div>
                </div>
                <div class="modal-info-item">
                    <div class="modal-info-label">Project Size</div>
                    <div class="modal-info-value">${capitalizeFirst(project.size)}</div>
                </div>
                <div class="modal-info-item">
                    <div class="modal-info-label">Difficulty</div>
                    <div class="modal-info-value">${project.difficulty}</div>
                </div>
                <div class="modal-info-item">
                    <div class="modal-info-label">Mentor</div>
                    <div class="modal-info-value">${project.mentor}</div>
                </div>
            </div>
        </div>
        
        <div class="modal-section">
            <h3>Keywords</h3>
            <div class="modal-list">
                ${project.keywords.map(keyword => `<span class="modal-list-item">${keyword}</span>`).join('')}
            </div>
        </div>
        
        <div class="modal-section">
            <h3>Required Skills</h3>
            <div class="modal-list">
                ${project.skills.map(skill => `<span class="modal-list-item">${skill}</span>`).join('')}
            </div>
        </div>
    `;
    
    modalBody.innerHTML = modalContent;
    projectModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Hide modal
function hideModal() {
    projectModal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Helper function to capitalize first letter
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Event listeners
sizeFilter.addEventListener('change', filterProjects);
difficultyFilter.addEventListener('change', filterProjects);
searchInput.addEventListener('input', filterProjects);
resetBtn.addEventListener('click', resetFilters);

// Modal event listeners
closeBtn.addEventListener('click', hideModal);
projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        hideModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.classList.contains('show')) {
        hideModal();
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
});

// Add some statistics display
function getProjectStatistics() {
    const stats = {
        byYear: {},
        bySize: {},
        byDifficulty: {}
    };
    
    allProjects.forEach(project => {
        // Count by year
        stats.byYear[project.year] = (stats.byYear[project.year] || 0) + 1;
        
        // Count by size
        stats.bySize[project.size] = (stats.bySize[project.size] || 0) + 1;
        
        // Count by difficulty
        stats.byDifficulty[project.difficulty] = (stats.byDifficulty[project.difficulty] || 0) + 1;
    });
    
    return stats;
}

// Log statistics to console for debugging
window.addEventListener('load', () => {
    setTimeout(() => {
        if (allProjects.length > 0) {
            console.log('Project Statistics:', getProjectStatistics());
            console.log('Total Projects:', allProjects.length);
        }
    }, 1000);
});
