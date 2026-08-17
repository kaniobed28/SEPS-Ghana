const fs = require('fs');

let content = fs.readFileSync('src/app/programs/page.tsx', 'utf8');

const newSection = `{/* 2. Young Space Scientists Program */}
              <div>
                <h4 style={{ fontSize: '1.4rem', color: 'var(--color-secondary)', marginBottom: '20px' }}>2. Young Space Scientists Program</h4>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', marginBottom: '20px' }}>
                  This is the bridge from education to research.
                </p>
                <div className="grid-layout" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', alignItems: 'stretch' }}>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '25px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '15px', fontSize: '1.1rem' }}>Undergraduate</h5>
                    <h6 style={{ color: 'var(--color-text-primary)', marginBottom: '10px', fontSize: '1rem' }}>SRI-Ghana Undergraduate Research Program</h6>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>Research internships</li>
                      <li>Student research projects</li>
                      <li>Laboratory training</li>
                      <li>Space-data projects</li>
                      <li>Mentorship</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '25px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '15px', fontSize: '1.1rem' }}>Master's Specialization</h5>
                    <h6 style={{ color: 'var(--color-text-primary)', marginBottom: '10px', fontSize: '1rem' }}>SRI-Ghana Graduate Research Program</h6>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>Research assistantships</li>
                      <li>Graduate research projects</li>
                      <li>Laboratory research</li>
                      <li>International research placements</li>
                      <li>Scientific workshops</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '25px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '15px', fontSize: '1.1rem' }}>Postdoctoral</h5>
                    <h6 style={{ color: 'var(--color-text-primary)', marginBottom: '10px', fontSize: '1rem' }}>SRI-Ghana Postdoctoral Research Fellowship</h6>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>Independent research</li>
                      <li>Research leadership</li>
                      <li>International collaboration</li>
                      <li>Supervision and mentorship</li>
                    </ul>
                  </div>
                </div>
              </div>
              
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
            </div>
            
          </div>
        </div>

        {/* STEM Outreach */}`;

content = content.replace(/\{\/\* 2\. Young Space Scientists Program \*\/\}(.|\n)*\{\/\* STEM Outreach \*\/\}/, newSection);

// Fix Ghana's to Ghana&apos;s
content = content.replace(/Ghana's/g, 'Ghana&apos;s');

fs.writeFileSync('src/app/programs/page.tsx', content);
console.log("Fixed HTML structure in programs page!");
