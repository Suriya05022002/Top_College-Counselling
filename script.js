 // College data - in a real application, this would come from a database or API
 const colleges = [
    {
        id: 1,
        code: "0001",
        name: "UNIVERSITY DEPARTMENTS OF ANNA UNIVERSITY, CHENNAI - CEG CAMPUS",
        location: "Chennai",
        ranking: "#1 in Tamil Nadu",
        description: "The College of Engineering, Guindy (CEG) is a public engineering college in Chennai, India. Founded in 1794, it is one of the oldest engineering institutions in the world and the first engineering college established in India.",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop",
        website: "https://www.annauniv.edu/",
        
    },
    {
        id: 2,
        code: "0004",
        name: "UNIVERSITY DEPARTMENTS OF ANNA UNIVERSITY, CHENNAI - MIT CAMPUS",
        location: "Chennai",
        ranking: "#2 in Tamil Nadu",
        description: "Madras Institute of Technology (MIT) is an engineering institute located in Chromepet, Chennai, India. It is one of the four autonomous constituent colleges of Anna University. MIT was founded in 1949 by Chinnaswami Rajam as the first self-financing engineering institute in the country.",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop",
        website: "https://www.mitindia.edu/",
        
    },
    {
        id: 3,
        code: "1315",
        name: "SSN COLLEGE OF ENGINEERING (AUTONOMOUS)",
        location: "Kancheepuram",
        ranking: "#3 in Tamil Nadu",
        description: "SSN College of Engineering (SSNCE) is an autonomous engineering institution located in Kalavakkam, Tamil Nadu, India. It was established in 1996 by Shiv Nadar, the founder of HCL Technologies.",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop",
        website: "https://www.ssn.edu.in/",
       
    },
    {
        id: 4,
        code: "2006",
        name: "P.S.G. COLLEGE OF TECHNOLOGY (AUTONOMOUS)",
        location: "Coimbatore",
        ranking: "#4 in Tamil Nadu",
        description: "PSG College of Technology is an autonomous, government aided, private engineering college located in Coimbatore, India. It was founded in 1951 and is affiliated to Anna University. The institution is accredited by the National Board of Accreditation (NBA).",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop",
        website: "https://www.psgtech.edu/",
        
    },
    {
        id: 5,
        code: "2007",
        name: "COIMBATORE INSTITUTE OF TECHNOLOGY (AUTONOMOUS)",
        location: "Coimbatore",
        ranking: "#5 in Tamil Nadu",
        description: "Coimbatore Institute of Technology (CIT) is an autonomous engineering college in Coimbatore, Tamil Nadu, India. Founded in 1956, it is affiliated with Anna University and accredited by the National Board of Accreditation (NBA).",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop",
        website: "https://www.cit.edu.in/",
       
    },
    {
        id: 6,
        code: "2005",
        name: "GOVERNMENT COLLEGE OF TECHNOLOGY, COIMBATORE (AUTONOMOUS)",
        location: "Coimbatore",
        ranking: "#6 in Tamil Nadu",
        description: "Government College of Technology, Coimbatore (GCT) is a public engineering college in Coimbatore, Tamil Nadu, India. Established in 1945, it is affiliated with Anna University and has been granted autonomous status.",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop",
        website: "https://gct.ac.in/",
   
    },
    {
        id: 7,
        code: "5008",
        name: "THIAGARAJAR COLLEGE OF ENGINEERING (AUTONOMOUS)",
        location: "Madurai",
        ranking: "#7 in Tamil Nadu",
        description: "Thiagarajar College of Engineering (TCE) is an autonomous engineering college located in Madurai, Tamil Nadu, India. Established in 1957, it is affiliated with Anna University and is known for its academic excellence and industry connections.",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop",
        website: "https://www.tce.edu/",
       
    },
    {
        id: 8,
        code: "0002",
        name: "UNIVERSITY DEPARTMENTS OF ANNA UNIVERSITY, CHENNAI - ACT CAMPUS",
        location: "Chennai",
        ranking: "#8 in Tamil Nadu",
        description: "Alagappa College of Technology (ACT) is one of the four constituent colleges of Anna University. Located in Chennai, it offers various undergraduate and postgraduate programs in engineering and technology.",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop",
        website: "https://www.annauniv.edu/",
       
    },
    {
        id: 9,
        code: "1219",
        name: "SRI VENKATESWARA COLLEGE OF ENGINEERING",
        location: "Kancheepuram",
        ranking: "#9 in Tamil Nadu",
        description: "Sri Venkateswara College of Engineering (SVCE) is an autonomous engineering college located in Sriperumbudur, Kancheepuram district, Tamil Nadu, India. Founded in 1985, it is affiliated with Anna University and offers various undergraduate and postgraduate programs.",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop",
        website: "https://www.svce.ac.in/",
      
    },
    {
        id: 10,
        code: "2615",
        name: "GOVERNMENT COLLEGE OF ENGINEERING - SALEM (AUTONOMOUS)",
        location: "Salem",
        ranking: "#10 in Tamil Nadu",
        description: "Government College of Engineering, Salem (GCE) is an autonomous engineering college located in Salem, Tamil Nadu, India. Established in 1966, it is affiliated with Anna University and offers various undergraduate and postgraduate programs in engineering.",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop",
        website: "https://www.gcesalem.edu.in/",
       
    }
];

// Function to render college cards with animation
function renderColleges(collegesList) {
    const container = document.getElementById('colleges-container');
    const tableBody = document.getElementById('table-body');
    
    container.innerHTML = '';
    tableBody.innerHTML = '';

    if (collegesList.length === 0) {
        container.innerHTML = '<div class="no-results">No colleges found matching your search criteria.</div>';
        return;
    }

    // Add delay for animation effect
    collegesList.forEach((college, index) => {
        // Card View
        const collegeCard = document.createElement('div');
        collegeCard.className = 'college-card';
        collegeCard.style.animationDelay = `${index * 0.1}s`;
        
        // Add GR badge if recommended
        const grBadge = college.grRecommended ? `<div class="gr-badge">GR Recommended</div>` : '';
        
        collegeCard.innerHTML = `
            <div class="college-image" style="background-image: url('${college.image}')">
                <div class="college-code">${college.code}</div>
                ${grBadge}
            </div>
            <div class="college-info">
                <h2>${college.name}</h2>
                <div class="college-meta">
                    <span>${college.location}</span>
                    <span>${college.ranking}</span>
                </div>
                <p>${college.description}</p>
                <a href="${college.website}" class="college-link" target="_blank">Visit Website</a>
            </div>
        `;
        container.appendChild(collegeCard);

        // Table View
        const tableRow = document.createElement('tr');
        tableRow.innerHTML = `
            <td><span class="table-code">${college.code}</span></td>
            <td>${college.name} ${college.grRecommended ? '<span class="gr-recommended-text">★ GR Recommended</span>' : ''}</td>
            <td>${college.location}</td>
            <td>${college.ranking}</td>
            <td><a href="${college.website}" class="table-link" target="_blank">Visit</a></td>
        `;
        tableBody.appendChild(tableRow);
    });

    // Trigger animation for cards
    setTimeout(() => {
        document.querySelectorAll('.college-card').forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
            }, index * 100);
        });
    }, 100);
}

// Initial render
renderColleges(colleges);

// Search functionality with enhanced animation
document.getElementById('search-button').addEventListener('click', performSearch);
document.getElementById('search-input').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
    showLoading();
    
    setTimeout(() => {
        const searchTerm = document.getElementById('search-input').value.toLowerCase();
        const locationFilter = document.getElementById('filter-location').value;
        
        let filteredColleges = colleges;
        
        // Apply location filter
        if (locationFilter !== 'all') {
            filteredColleges = filteredColleges.filter(college => college.location === locationFilter);
        }
        
        // Apply search term
        if (searchTerm) {
            filteredColleges = filteredColleges.filter(college => 
                college.name.toLowerCase().includes(searchTerm) || 
                college.description.toLowerCase().includes(searchTerm) ||
                college.location.toLowerCase().includes(searchTerm) ||
                college.code.toLowerCase().includes(searchTerm)
            );
        }
        
        renderColleges(filteredColleges);
        hideLoading();
        
        // Show toast notification
        if (filteredColleges.length > 0) {
            showToast(`Found ${filteredColleges.length} colleges matching your criteria.`, 'success');
        } else {
            showToast('No colleges found. Try different search terms.', 'error');
        }
    }, 800); // Simulate loading delay for animation
}

// Location filter
document.getElementById('filter-location').addEventListener('change', performSearch);

// View toggle functionality with smooth transitions
const gridViewBtn = document.getElementById('grid-view-btn');
const tableViewBtn = document.getElementById('table-view-btn');
const collegesGrid = document.getElementById('colleges-container');
const collegesTable = document.getElementById('colleges-table');

gridViewBtn.addEventListener('click', function() {
    if (!gridViewBtn.classList.contains('active')) {
        showLoading();
        
        setTimeout(() => {
            collegesGrid.style.display = 'grid';
            collegesTable.style.display = 'none';
            gridViewBtn.classList.add('active');
            tableViewBtn.classList.remove('active');
            hideLoading();
            
            // Trigger animation for cards
            document.querySelectorAll('.college-card').forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                }, index * 100);
            });
        }, 500);
    }
});

tableViewBtn.addEventListener('click', function() {
    if (!tableViewBtn.classList.contains('active')) {
        showLoading();
        
        setTimeout(() => {
            collegesGrid.style.display = 'none';
            collegesTable.style.display = 'table';
            gridViewBtn.classList.remove('active');
            tableViewBtn.classList.add('active');
            hideLoading();
        }, 500);
    }
});

// Table sorting functionality with animation
document.querySelectorAll('.colleges-table th[data-sort]').forEach(header => {
    header.addEventListener('click', function() {
        const sortBy = this.dataset.sort;
        const isAscending = !this.classList.contains('sort-asc');
        
        // Remove sort classes from all headers
        document.querySelectorAll('.colleges-table th').forEach(th => {
            th.classList.remove('sort-asc', 'sort-desc');
        });
        
        // Add sort class to clicked header
        this.classList.add(isAscending ? 'sort-asc' : 'sort-desc');
        
        // Sort colleges
        const sortedColleges = [...colleges].sort((a, b) => {
            if (sortBy === 'code') {
                return isAscending ? a.code.localeCompare(b.code) : b.code.localeCompare(a.code);
            } else if (sortBy === 'name') {
                return isAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
            } else if (sortBy === 'location') {
                return isAscending ? a.location.localeCompare(b.location) : b.location.localeCompare(a.location);
            } else if (sortBy === 'ranking') {
                // Extract numeric part from ranking for comparison
                const rankA = parseInt(a.ranking.match(/\d+/)[0]);
                const rankB = parseInt(b.ranking.match(/\d+/)[0]);
                return isAscending ? rankA - rankB : rankB - rankA;
            }
        });
        
        showLoading();
        setTimeout(() => {
            renderColleges(sortedColleges);
            hideLoading();
            showToast(`Colleges sorted by ${sortBy} ${isAscending ? 'ascending' : 'descending'}.`, 'success');
        }, 400);
    });
});

// Toast notification system
function showToast(message, type = 'success') {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <span class="toast-message">${message}</span>
        <button class="toast-close">&times;</button>
    `;
    
    toastContainer.appendChild(toast);
    
    // Add event listener to close button
    toast.querySelector('.toast-close').addEventListener('click', () => {
        toast.style.animation = 'slideOutRight 0.3s forwards';
        setTimeout(() => {
            toastContainer.removeChild(toast);
        }, 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (toastContainer.contains(toast)) {
            toast.style.animation = 'slideOutRight 0.3s forwards';
            setTimeout(() => {
                if (toastContainer.contains(toast)) {
                    toastContainer.removeChild(toast);
                }
            }, 300);
        }
    }, 5000);
}

// Loading animation functions
function showLoading() {
    document.getElementById('loading').style.display = 'block';
    document.getElementById('colleges-container').style.display = 'none';
    document.getElementById('colleges-table').style.display = 'none';
}

function hideLoading() {
    document.getElementById('loading').style.display = 'none';
    if (gridViewBtn.classList.contains('active')) {
        document.getElementById('colleges-container').style.display = 'grid';
    } else {
        document.getElementById('colleges-table').style.display = 'table';
    }
}

// Add scroll animation for cards
function animateOnScroll() {
    const cards = document.querySelectorAll('.college-card');
    
    cards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (cardPosition < screenPosition) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
        }
    });
}

// Initialize animations
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', function() {
    hideLoading();
    animateOnScroll();
    
    // Welcome toast
    setTimeout(() => {
        showToast(
            '<span class="gowthamraj-text">Gowthamraj Network!</span>  Explore the best colleges in Tamil Nadu.',
            'success'
        );
    }, 1000);
    
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: 'smooth'
            });
        }
    });
});
