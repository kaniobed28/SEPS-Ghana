const fs = require('fs');

let content = fs.readFileSync('src/app/programs/page.tsx', 'utf8');

// 1. First, we need to add IDs to the specific subsections if they don't have them.
// "1. Earth, Atmospheric & Environmental Sciences"
content = content.replace(/<h4 style={{ fontSize: '1.4rem', color: 'var\(--color-secondary\)', marginBottom: '20px' }}>1\. Earth, Atmospheric & Environmental Sciences<\/h4>/g, '<h4 id="earth-science" style={{ fontSize: \'1.4rem\', color: \'var(--color-secondary)\', marginBottom: \'20px\' }}>1. Earth, Atmospheric & Environmental Sciences</h4>');

// "2. Heliophysics & Space Weather"
content = content.replace(/<h4 style={{ fontSize: '1.4rem', color: 'var\(--color-secondary\)', marginBottom: '20px' }}>2\. Heliophysics & Space Weather<\/h4>/g, '<h4 id="heliophysics" style={{ fontSize: \'1.4rem\', color: \'var(--color-secondary)\', marginBottom: \'20px\' }}>2. Heliophysics & Space Weather</h4>');

// "3. Astronomy & Astrophysics"
content = content.replace(/<h4 style={{ fontSize: '1.4rem', color: 'var\(--color-secondary\)', marginBottom: '20px' }}>3\. Astronomy & Astrophysics<\/h4>/g, '<h4 id="astronomy" style={{ fontSize: \'1.4rem\', color: \'var(--color-secondary)\', marginBottom: \'20px\' }}>3. Astronomy & Astrophysics</h4>');

// "4. Planetary & Solar System Sciences"
content = content.replace(/<h4 style={{ fontSize: '1.4rem', color: 'var\(--color-secondary\)', marginBottom: '20px' }}>4\. Planetary & Solar System Sciences<\/h4>/g, '<h4 id="planetary" style={{ fontSize: \'1.4rem\', color: \'var(--color-secondary)\', marginBottom: \'20px\' }}>4. Planetary & Solar System Sciences</h4>');

// "1. Space Systems Engineering"
content = content.replace(/<h4 style={{ fontSize: '1.4rem', color: 'var\(--color-secondary\)', marginBottom: '20px' }}>1\. Space Systems Engineering<\/h4>/g, '<h4 id="systems-eng" style={{ fontSize: \'1.4rem\', color: \'var(--color-secondary)\', marginBottom: \'20px\' }}>1. Space Systems Engineering</h4>');

// "2. Satellite & Spacecraft Technology"
content = content.replace(/<h4 style={{ fontSize: '1.4rem', color: 'var\(--color-secondary\)', marginBottom: '20px' }}>2\. Satellite & Spacecraft Technology<\/h4>/g, '<h4 id="satellite-tech" style={{ fontSize: \'1.4rem\', color: \'var(--color-secondary)\', marginBottom: \'20px\' }}>2. Satellite & Spacecraft Technology</h4>');

// "3. Space Instrumentation & Robotics"
content = content.replace(/<h4 style={{ fontSize: '1.4rem', color: 'var\(--color-secondary\)', marginBottom: '20px' }}>3\. Space Instrumentation & Robotics<\/h4>/g, '<h4 id="robotics" style={{ fontSize: \'1.4rem\', color: \'var(--color-secondary)\', marginBottom: \'20px\' }}>3. Space Instrumentation & Robotics</h4>');

// "1. Space Data Science"
content = content.replace(/<h4 style={{ fontSize: '1.4rem', color: 'var\(--color-secondary\)', marginBottom: '20px' }}>1\. Space Data Science<\/h4>/g, '<h4 id="data-science" style={{ fontSize: \'1.4rem\', color: \'var(--color-secondary)\', marginBottom: \'20px\' }}>1. Space Data Science</h4>');

// "2. Computational Space Science"
content = content.replace(/<h4 style={{ fontSize: '1.4rem', color: 'var\(--color-secondary\)', marginBottom: '20px' }}>2\. Computational Space Science<\/h4>/g, '<h4 id="comp-science" style={{ fontSize: \'1.4rem\', color: \'var(--color-secondary)\', marginBottom: \'20px\' }}>2. Computational Space Science</h4>');

// "3. Artificial Intelligence & Machine Learning for Space"
content = content.replace(/<h4 style={{ fontSize: '1.4rem', color: 'var\(--color-secondary\)', marginBottom: '20px' }}>3\. Artificial Intelligence & Machine Learning for Space<\/h4>/g, '<h4 id="ai" style={{ fontSize: \'1.4rem\', color: \'var(--color-secondary)\', marginBottom: \'20px\' }}>3. Artificial Intelligence & Machine Learning for Space</h4>');


// 2. Now replace the sidebar with a more detailed one.
const oldSidebar = `<div style={{ position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', gap: '15px', paddingRight: '20px', borderRight: '1px solid rgba(255,255,255,0.1)' }} className="programs-sidebar">
              <h4 style={{ color: 'var(--color-text-primary)', marginBottom: '10px', fontSize: '1.2rem' }}>Directorates</h4>
              <a href="#dir-science" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', transition: 'color 0.2s', padding: '5px 0' }}>Space Science & Exploration</a>
              <a href="#dir-engineering" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', transition: 'color 0.2s', padding: '5px 0' }}>Space Engineering & Tech</a>
              <a href="#dir-data" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', transition: 'color 0.2s', padding: '5px 0' }}>Data, Computing & AI</a>
              <a href="#dir-education" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', transition: 'color 0.2s', padding: '5px 0' }}>Education & Training</a>
            </div>`;

const newSidebar = `<div style={{ position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', gap: '10px', paddingRight: '20px', borderRight: '1px solid rgba(255,255,255,0.1)', maxHeight: 'calc(100vh - 120px)', overflowY: 'auto' }} className="programs-sidebar">
              <h4 style={{ color: 'var(--color-text-primary)', marginBottom: '5px', fontSize: '1.1rem' }}>Space Science</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', paddingLeft: '10px', marginBottom: '10px', borderLeft: '2px solid rgba(255,255,255,0.05)' }}>
                <a href="#earth-science" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Earth & Environment</a>
                <a href="#heliophysics" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Heliophysics & Space Wx</a>
                <a href="#astronomy" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Astronomy</a>
                <a href="#planetary" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Planetary Science</a>
              </div>

              <h4 style={{ color: 'var(--color-text-primary)', marginBottom: '5px', fontSize: '1.1rem' }}>Space Engineering</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', paddingLeft: '10px', marginBottom: '10px', borderLeft: '2px solid rgba(255,255,255,0.05)' }}>
                <a href="#systems-eng" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Systems Engineering</a>
                <a href="#satellite-tech" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Satellite Technology</a>
                <a href="#robotics" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Robotics & Instruments</a>
              </div>

              <h4 style={{ color: 'var(--color-text-primary)', marginBottom: '5px', fontSize: '1.1rem' }}>Data & AI</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', paddingLeft: '10px', marginBottom: '10px', borderLeft: '2px solid rgba(255,255,255,0.05)' }}>
                <a href="#data-science" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Data Science</a>
                <a href="#comp-science" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Computational Science</a>
                <a href="#ai" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Artificial Intelligence</a>
              </div>
              
              <h4 style={{ color: 'var(--color-text-primary)', marginBottom: '5px', fontSize: '1.1rem' }}>Education & Training</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', paddingLeft: '10px', marginBottom: '10px', borderLeft: '2px solid rgba(255,255,255,0.05)' }}>
                <a href="#dir-education" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Outreach & Programs</a>
              </div>
            </div>`;

content = content.replace(oldSidebar, newSidebar);

fs.writeFileSync('src/app/programs/page.tsx', content);
console.log("Updated programs sidebar to include subsections!");
