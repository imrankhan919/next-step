import { useQuery, useQueryClient } from '@tanstack/react-query';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Button from '../components/Button';
import StatusBadge from '../components/StatusBadge';
import adminService from '../services/adminService';
import LoadingScreen from '../components/LoadingScreen';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setAdminData } from '../features/admin/adminSlice';
import toast from 'react-hot-toast';


export default function AdminOverview() {

  const dispatch = useDispatch()

  const { user } = useSelector(state => state.auth)

  const { data, isLoading, isSuccess, isError, error } = useQuery({ queryKey: ["admin"], queryFn: () => adminService.fetchAdminOverview(user.token) })


  const systemLogs = [
    { time: '14:22 IST', event: 'New Counselor Approval Request', detail: 'Prof. Rajesh Verma applied' },
    { time: '13:45 IST', event: 'Credit Purchase Completed', detail: 'Student #ST-902 bought 300 Credits (₹699)' },
    { time: '12:10 IST', event: 'AI Engine Execution', detail: 'Generated 42 roadmaps in past 1 hour' },
  ];


  useEffect(() => {

    if (isSuccess) {
      dispatch(setAdminData(data))
    }

    if (isError) {
      toast.error(error?.response?.data?.message, { position: "top-center" })
    }

  }, [isSuccess, isError, error, data])


  if (isLoading) {
    return (
      <LoadingScreen loadingMessage='Fetching All Data...' />
    )
  }




  return (
    <div className="min-h-screen bg-parchment flex flex-col">
      <Navbar activePage="admin" />

      <div className="flex-1 flex">
        <Sidebar activeTab="admin_overview" role="admin" />

        <main className="flex-1 p-8 bg-grid-pattern overflow-y-auto">
          {/* Header */}
          <div className="bg-navy text-white border-4 border-navy rounded-3xl p-6 shadow-pop mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div className="inline-block bg-yellow text-navy font-mono text-[10px] font-bold px-3 py-1 rounded-full uppercase mb-2">
                  ADMIN SUPERVISOR SUITE
                </div>
                <h1 className="font-grotesk font-extrabold text-3xl text-white">
                  CareerBridge <span className="text-yellow">Platform Control</span>
                </h1>
                <p className="font-body text-xs text-parchment-dim mt-1">
                  Global system metrics, user growth analytics, counselor approvals, and credit circulation monitoring.
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <Button variant="primary" size="md">
                  System Health Report 📊
                </Button>
              </div>
            </div>
          </div>

          {/* Metrics Overview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card color="white">
              <div className="font-mono text-xs font-bold text-navy-muted uppercase">Total Registered Users</div>
              <div className="font-grotesk font-extrabold text-3xl text-navy mt-2">24,520</div>
              <div className="text-xs text-rust font-bold mt-1">+1,240 students this week</div>
            </Card>

            <Card color="white">
              <div className="font-mono text-xs font-bold text-navy-muted uppercase">Active Counselors</div>
              <div className="font-grotesk font-extrabold text-3xl text-navy mt-2">142 Mentors</div>
              <div className="text-xs text-teal font-bold mt-1">8 Pending Applications</div>
            </Card>

            <Card color="white">
              <div className="font-mono text-xs font-bold text-navy-muted uppercase">Credits Circulating</div>
              <div className="font-grotesk font-extrabold text-3xl text-navy mt-2">1.82M pts</div>
              <div className="text-xs text-rust font-bold mt-1">₹4.2L Monthly Credit Revenue</div>
            </Card>

            <Card color="yellow">
              <div className="font-mono text-xs font-bold text-navy uppercase">AI Roadmaps Generated</div>
              <div className="font-grotesk font-extrabold text-3xl text-navy mt-2">84,100</div>
              <div className="text-xs text-navy font-bold mt-1">99.8% System Uptime</div>
            </Card>
          </div>

          {/* Activity Log & Pending Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-parchment-card border-4 border-navy rounded-3xl p-6 shadow-pop">
                <h2 className="font-grotesk font-extrabold text-xl text-navy mb-4">Real-Time System Log</h2>
                <div className="space-y-3 font-mono text-xs">
                  {systemLogs.map((log, i) => (
                    <div key={i} className="bg-parchment border-2 border-navy p-3 rounded-xl flex justify-between items-center">
                      <div>
                        <span className="font-bold text-rust">[{log.time}]</span>{' '}
                        <span className="font-bold text-navy">{log.event}</span>
                        <div className="text-navy-muted text-[11px] mt-0.5">{log.detail}</div>
                      </div>
                      <StatusBadge text="LOGGED" status="info" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-rust-container border-4 border-navy rounded-3xl p-6 shadow-pop">
                <StatusBadge text="ACTION REQUIRED" status="warning" />
                <h3 className="font-grotesk font-extrabold text-lg text-navy mt-3">Pending Moderation Queue</h3>
                <ul className="mt-3 space-y-2 font-mono text-xs text-navy">
                  <li className="flex justify-between">
                    <span>• Counselor Approvals:</span>
                    <span className="font-bold text-rust">8 Applications</span>
                  </li>
                  <li className="flex justify-between">
                    <span>• Manual Credit Grants:</span>
                    <span className="font-bold text-rust">3 Requests</span>
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
