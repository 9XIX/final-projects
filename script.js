document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality
    const modal = document.getElementById('projectModal');
    const closeButton = document.querySelector('.close-button');
    const viewDetailsButtons = document.querySelectorAll('.view-details-btn');

    // Project data (for demonstration)
    const projects = {
        project1: {
            title: 'Innovative Branding Campaign',
            image: 'https://via.placeholder.com/600x400?text=Project+1+Detail',
            description: 'This project involved developing a comprehensive branding strategy for a tech startup, including logo design, color palette, typography, and brand guidelines. The goal was to create a modern and memorable brand identity that resonates with their target audience.'
        },
        project2: {
            title: 'E-commerce Website Redesign',
            image: 'https://via.placeholder.com/600x400?text=Project+2+Detail',
            description: 'A complete redesign of an existing e-commerce platform to improve user experience, visual appeal, and conversion rates. Focused on intuitive navigation, responsive design, and compelling product presentation.'
        },
        project3: {
            title: 'Editorial Layout for Magazine',
            image: 'https://via.placeholder.com/600x400?text=Project+3+Detail',
            description: 'Designed the layout and visuals for a feature article in a lifestyle magazine. Emphasized clean typography, engaging imagery, and a harmonious flow to enhance readability and visual interest.'
        },
        project4: {
            title: 'Social Media Content Creation',
            image: 'https://via.placeholder.com/600x400?text=Project+4+Detail',
            description: 'Developed a series of engaging graphics and animations for social media campaigns across various platforms. Focused on consistent branding and compelling calls to action to increase audience engagement.'
        }
    };

    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectKey = this.closest('.project-thumbnail').dataset.project;
            const project = projects[projectKey];

            if (project) {
                document.getElementById('modalProjectTitle').textContent = project.title;
                document.getElementById('modalProjectImage').src = project.image;
                document.getElementById('modalProjectDescription').textContent = project.description;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
            }
        });
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = ''; // Restore scrolling
        }
    });
});
