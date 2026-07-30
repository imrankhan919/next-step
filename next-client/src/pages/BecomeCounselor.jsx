import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Button from '../components/Button';
import StatusBadge from '../components/StatusBadge';

export default function BecomeCounselor() {
  return (
    <div className="min-h-screen bg-parchment flex flex-col">
      <Navbar activePage="counselors" />

      <div className="flex-1 flex">
        <Sidebar activeTab="become_counselor" role="student" />

        <main className="flex-1 p-8 bg-grid-pattern overflow-y-auto">
          {/* Header */}
          <div className="mb-8 max-w-3xl">
            <div className="inline-block bg-yellow border-3 border-navy px-3 py-1 rounded-full shadow-pop-sm font-mono text-xs font-bold text-navy mb-2">
              COUNSELOR PARTNER PROGRAM
            </div>
            <h1 className="font-grotesk font-extrabold text-3xl text-navy">
              Become a <span className="text-rust">Verified Mentor</span> on CareerBridge
            </h1>
            <p className="font-body text-sm text-navy-muted mt-1">
              Share your industry expertise, guide aspiring Indian students, and earn guaranteed credit payouts in INR.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Application Form */}
            <div className="lg:col-span-2">
              <div className="bg-parchment-card border-4 border-navy rounded-3xl p-8 shadow-pop relative">
                <div className="text-center mb-6 pb-6 border-b-2 border-navy/20">
                  <StatusBadge text="FAST-TRACK APPLICATION" status="success" />
                  <h2 className="font-grotesk font-extrabold text-xl text-navy mt-2">Counselor Onboarding Application</h2>
                </div>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-grotesk font-bold text-xs uppercase text-navy mb-1">
                        Full Name & Title
                      </label>
                      <input
                        type="text"
                        defaultValue="Vikramaditya Singh"
                        placeholder="e.g. Vikramaditya Singh"
                        className="w-full bg-parchment border-3 border-navy rounded-xl px-4 py-2.5 font-body text-sm text-navy shadow-pop-sm focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-grotesk font-bold text-xs uppercase text-navy mb-1">
                        Current Company / Designation
                      </label>
                      <input
                        type="text"
                        defaultValue="Staff Engineer @ Google India"
                        placeholder="e.g. Lead Designer @ Swiggy"
                        className="w-full bg-parchment border-3 border-navy rounded-xl px-4 py-2.5 font-body text-sm text-navy shadow-pop-sm focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-grotesk font-bold text-xs uppercase text-navy mb-1">
                        LinkedIn Profile URL
                      </label>
                      <input
                        type="text"
                        defaultValue="https://linkedin.com/in/vikramaditya-singh"
                        placeholder="https://linkedin.com/in/username"
                        className="w-full bg-parchment border-3 border-navy rounded-xl px-4 py-2.5 font-body text-sm text-navy shadow-pop-sm focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-grotesk font-bold text-xs uppercase text-navy mb-1">
                        Years of Industry Experience
                      </label>
                      <select className="w-full bg-parchment border-3 border-navy rounded-xl px-3 py-2.5 font-body text-sm text-navy shadow-pop-sm focus:outline-none">
                        <option>3 - 5 Years</option>
                        <option selected>6 - 10 Years</option>
                        <option>10+ Years</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-grotesk font-bold text-xs uppercase text-navy mb-1">
                      Primary Domain Expertise
                    </label>
                    <select className="w-full bg-parchment border-3 border-navy rounded-xl px-3 py-2.5 font-body text-sm text-navy shadow-pop-sm focus:outline-none">
                      <option selected>Software Engineering & Cloud</option>
                      <option>Data Science & AI</option>
                      <option>UI/UX Product Design</option>
                      <option>UPSC & Civil Services</option>
                      <option>MBA & Career Transitions</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-grotesk font-bold text-xs uppercase text-navy mb-1">
                      Brief Bio & Mentorship Philosophy
                    </label>
                    <textarea
                      rows={3}
                      defaultValue="Passionate about guiding students from Tier-2 & Tier-3 Indian colleges to clear technical interviews at top tier-1 product companies."
                      placeholder="Share your experience..."
                      className="w-full bg-parchment border-3 border-navy rounded-xl p-3 font-body text-sm text-navy shadow-pop-sm focus:outline-none"
                    ></textarea>
                  </div>

                  {/* Document Upload Mock */}
                  <div className="bg-sky/20 border-2 border-dashed border-navy p-4 rounded-xl text-center">
                    <div className="font-grotesk font-bold text-xs text-navy">📄 Upload Verification Document (ID / Work Email)</div>
                    <div className="font-mono text-[10px] text-navy-muted mt-1">PDF or PNG file up to 10MB (Mock Upload)</div>
                    <button type="button" className="mt-2 px-3 py-1 bg-white border border-navy rounded-lg font-mono text-xs font-bold text-navy shadow-pop-sm">
                      Select File
                    </button>
                  </div>

                  <div className="pt-4 border-t-2 border-navy/20">
                    <Button variant="accent" size="lg" className="w-full">
                      SUBMIT COUNSELOR APPLICATION →
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            {/* Perks Side Card */}
            <div className="space-y-6">
              <div className="bg-yellow border-4 border-navy rounded-3xl p-6 shadow-pop">
                <StatusBadge text="MENTOR BENEFITS" status="success" />
                <h3 className="font-grotesk font-extrabold text-xl text-navy mt-3">Why Join CareerBridge?</h3>
                <ul className="mt-4 space-y-3 font-body text-xs text-navy">
                  <li className="flex items-start space-x-2">
                    <span className="text-rust font-bold">✓</span>
                    <span>Set your own hours & flexible session availability</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-rust font-bold">✓</span>
                    <span>Guaranteed credit payouts directly into your Indian bank account</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-rust font-bold">✓</span>
                    <span>Verified mentor badge on your profile</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
