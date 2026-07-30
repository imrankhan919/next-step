import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Button from '../components/Button';
import StatusBadge from '../components/StatusBadge';

export default function AdminAiAssistant() {
  return (
    <div className="min-h-screen bg-parchment flex flex-col">
      <Navbar activePage="admin" />

      <div className="flex-1 flex">
        <Sidebar activeTab="admin_ai" role="admin" />

        <main className="flex-1 p-8 bg-grid-pattern overflow-y-auto">
          <div className="mb-8">
            <div className="inline-block bg-yellow border-3 border-navy px-3 py-1 rounded-full shadow-pop-sm font-mono text-xs font-bold text-navy mb-2">
              AI ENGINE PROMPTS
            </div>
            <h1 className="font-grotesk font-extrabold text-3xl text-navy">
              AI Roadmap <span className="text-rust">Prompt Configuration</span>
            </h1>
            <p className="font-body text-sm text-navy-muted mt-1">
              Tune system prompts, tokens usage budgets, and model parameters for the CareerBridge AI generator.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-parchment-card border-4 border-navy rounded-3xl p-6 shadow-pop space-y-6">
                <div>
                  <label className="block font-grotesk font-extrabold text-sm uppercase text-navy mb-2">
                    Global System Prompt Instruction
                  </label>
                  <textarea
                    rows={6}
                    defaultValue="You are CareerBridge AI, an expert career advisor specializing in the Indian job market. Always structure roadmaps in 4 distinct phases (Foundations, Core Stack, Real-World Projects, Placement & Salary Prep). Benchmarks must reflect realistic INR packages in Indian tech hubs."
                    className="w-full bg-parchment border-3 border-navy rounded-xl p-4 font-mono text-xs text-navy shadow-pop-sm focus:outline-none"
                  ></textarea>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-grotesk font-bold text-xs uppercase text-navy mb-1">
                      Model Temperature
                    </label>
                    <input
                      type="text"
                      defaultValue="0.4 (Balanced & Precise)"
                      className="w-full bg-parchment border-3 border-navy rounded-xl px-4 py-2 font-mono text-xs text-navy shadow-pop-sm"
                    />
                  </div>

                  <div>
                    <label className="block font-grotesk font-bold text-xs uppercase text-navy mb-1">
                      Max Output Tokens
                    </label>
                    <input
                      type="text"
                      defaultValue="2,048 Tokens"
                      className="w-full bg-parchment border-3 border-navy rounded-xl px-4 py-2 font-mono text-xs text-navy shadow-pop-sm"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t-2 border-navy/20 flex justify-end">
                  <Button variant="primary" size="md">
                    Save AI Prompt Config 💾
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-yellow border-4 border-navy rounded-3xl p-6 shadow-pop">
                <StatusBadge text="TOKEN USAGE" status="success" />
                <h3 className="font-grotesk font-extrabold text-xl text-navy mt-3">Daily AI Cost Metrics</h3>
                <div className="mt-4 space-y-2 font-mono text-xs text-navy">
                  <div className="flex justify-between">
                    <span>• Roadmaps Today:</span>
                    <span className="font-bold">412 calls</span>
                  </div>
                  <div className="flex justify-between">
                    <span>• Avg Token Latency:</span>
                    <span className="font-bold">1.2 seconds</span>
                  </div>
                  <div className="flex justify-between">
                    <span>• API Model Cost:</span>
                    <span className="font-bold text-rust">$4.20 / day</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
