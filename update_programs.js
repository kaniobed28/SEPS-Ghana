const fs = require('fs');

let content = fs.readFileSync('src/app/programs/page.tsx', 'utf8');

// 1. Add sticky sidebar
const oldHeader = `<div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            
            {/* I. Space Science & Exploration */}
            <div>`;
const newHeader = `<div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '40px', alignItems: 'start' }} className="programs-layout">
            {/* Sticky Sidebar */}
            <div style={{ position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', gap: '15px', paddingRight: '20px', borderRight: '1px solid rgba(255,255,255,0.1)' }} className="programs-sidebar">
              <h4 style={{ color: 'var(--color-text-primary)', marginBottom: '10px', fontSize: '1.2rem' }}>Directorates</h4>
              <a href="#dir-science" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', transition: 'color 0.2s', padding: '5px 0' }}>Space Science & Exploration</a>
              <a href="#dir-engineering" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', transition: 'color 0.2s', padding: '5px 0' }}>Space Engineering & Tech</a>
              <a href="#dir-data" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', transition: 'color 0.2s', padding: '5px 0' }}>Data, Computing & AI</a>
              <a href="#dir-education" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', transition: 'color 0.2s', padding: '5px 0' }}>Education & Training</a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            
            {/* I. Space Science & Exploration */}
            <div id="dir-science">`;
content = content.replace(oldHeader, newHeader);

// Add IDs to other directorates
content = content.replace('{/* II. Space Engineering & Technology */}\n            <div>', '{/* II. Space Engineering & Technology */}\n            <div id="dir-engineering">');
content = content.replace('{/* III. Space Data, Computing & AI */}\n            <div>', '{/* III. Space Data, Computing & AI */}\n            <div id="dir-data">');
content = content.replace('{/* IV. Education, Research Training & Innovation */}\n            <div>', '{/* IV. Education, Research Training & Innovation */}\n            <div id="dir-education">');

// 2. Remove PhD research areas.
// We need to match the div containing the PhD research h5 and ul.
// Regex to match a div block that starts with <div style={{ background: 'rgba... and contains PhD research areas
const phdRegex = /<div style={{ background: 'rgba\(255,255,255,0\.02\)', padding: '20px', borderRadius: '12px', border: '1px solid rgba\(255,255,255,0\.05\)' }}>\s*<h5[^>]*>PhD research areas<\/h5>[\s\S]*?<\/div>/g;
content = content.replace(phdRegex, '');

// Also remove PhD research for Data science which might have slightly different title
const phdRegex2 = /<div style={{ background: 'rgba\(255,255,255,0\.02\)', padding: '20px', borderRadius: '12px', border: '1px solid rgba\(255,255,255,0\.05\)' }}>\s*<h5[^>]*>PhD [Rr]esearch.*?<\/h5>[\s\S]*?<\/div>/g;
content = content.replace(phdRegex2, '');

// Also remove PhD in Education section: <h5 style={{ color: 'var(--color-primary)', marginBottom: '15px', fontSize: '1.1rem' }}>PhD Research areas</h5>
const phdRegex3 = /<div style={{ background: 'rgba\(255,255,255,0\.02\)', padding: '25px', borderRadius: '12px', border: '1px solid rgba\(255,255,255,0\.05\)' }}>\s*<h5[^>]*>PhD Research areas<\/h5>[\s\S]*?<\/div>/g;
content = content.replace(phdRegex3, '');


// 3. Add CTAs at the end of each Directorate
const ctaScience = `
              <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <Link href="/research" className="btn-secondary" style={{ padding: '10px 25px', borderRadius: '8px', border: '1px solid var(--color-primary)', color: 'var(--color-primary)', textDecoration: 'none', display: 'inline-block' }}>
                  Explore Science Research
                </Link>
              </div>
            </div>`;
content = content.replace(/<\/div>\s*\{\/\* II\. Space Engineering/g, ctaScience + '\n\n            {/* II. Space Engineering');

const ctaEng = `
              <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <Link href="/research" className="btn-secondary" style={{ padding: '10px 25px', borderRadius: '8px', border: '1px solid var(--color-secondary)', color: 'var(--color-secondary)', textDecoration: 'none', display: 'inline-block' }}>
                  Explore Engineering Research
                </Link>
              </div>
            </div>`;
content = content.replace(/<\/div>\s*\{\/\* III\. Space Data/g, ctaEng + '\n\n            {/* III. Space Data');

const ctaData = `
              <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <Link href="/research" className="btn-secondary" style={{ padding: '10px 25px', borderRadius: '8px', border: '1px solid var(--color-primary)', color: 'var(--color-primary)', textDecoration: 'none', display: 'inline-block' }}>
                  Explore Data & AI Research
                </Link>
              </div>
            </div>`;
content = content.replace(/<\/div>\s*\{\/\* IV\. Education/g, ctaData + '\n\n            {/* IV. Education');

const ctaEdu = `
              <div style={{ marginTop: '40px', textAlign: 'center', background: 'rgba(255,255,255,0.02)', padding: '30px', borderRadius: '12px' }}>
                <h4 style={{ color: 'var(--color-text-primary)', marginBottom: '15px' }}>Ready to take the next step?</h4>
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link href="/contact" className="btn-primary" style={{ padding: '10px 25px', borderRadius: '8px', textDecoration: 'none' }}>
                    Apply for Internships
                  </Link>
                  <Link href="/contact" className="btn-secondary" style={{ padding: '10px 25px', borderRadius: '8px', border: '1px solid var(--color-secondary)', color: 'var(--color-secondary)', textDecoration: 'none' }}>
                    Register Your School
                  </Link>
                </div>
              </div>
            </div>`;

content = content.replace(/<\/div>\s*<\/div>\s*\{\/\* STEM Outreach \*\/\}/g, ctaEdu + '\n            </div>\n          </div>\n        </div>\n\n        {/* STEM Outreach */}');


// Close the grid layout properly at the end
// The layout was opened inside "Detailed Academic Pathways" -> <div style={{ display: 'grid' ... }}> ... <div style={{ display: 'flex' ... }}>
// We need to close the flex and the grid. 
// We already replaced the ending above `</div>\n            </div>\n          </div>\n        </div>\n\n        {/* STEM Outreach */}` with `ctaEdu` which closed the flex, then we added `</div>\n          </div>\n        </div>` which closes the two wrapper divs. Wait, let's trace:
// original:
//             </div> // closes Directorate IV
//             
//           </div> // closes display: flex gap: 60px
//         </div> // closes glass-panel
//
// We need to close:
// 1. Directorate IV (handled by ctaEdu which outputs `</div>`)
// 2. The inner display: flex column (for the 4 directorates)
// 3. The new display: grid (for sidebar + content)
// 4. The glass-panel
//
// So we need 4 closing divs.

fs.writeFileSync('src/app/programs/page.tsx', content);
console.log("Updated programs page!");
