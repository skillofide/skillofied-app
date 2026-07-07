import React, { useState, useEffect } from 'react';
import styles from './ReferralSection.module.css';
import { getReferralsApi } from '../../api';

interface ReferralRecord {
  id: string;
  name: string;
  date: string;
  status: 'Completed' | 'Pending';
}

const ReferralSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [referrals, setReferrals] = useState<ReferralRecord[]>([]);
  const [loading, setLoading] = useState(true);

  // Generate dynamic referral code based on user's ID
  const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
  const userIdSegment = storedUser.id ? storedUser.id.substring(0, 4).toUpperCase() : 'USER';
  const referralCode = `KNOV-${userIdSegment}-${new Date().getFullYear()}`;

  useEffect(() => {
    getReferralsApi()
      .then((data) => setReferrals(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const completedCount = referrals.filter((r) => r.status === 'Completed').length;
  const pendingCount = referrals.filter((r) => r.status === 'Pending').length;
  const totalEarned = completedCount * 500; // Assume 500 points/INR per successful referral

  return (
    <div className={styles.container}>
      {/* ── Hero / Invite Card ── */}
      <div className={styles.heroCard}>
        <h2 className={styles.heroTitle}>Invite Friends, Earn Rewards</h2>
        <p className={styles.heroSub}>
          Share your unique referral code with friends. When they sign up and enroll in a course, you both earn ₹500 in Knovate credits!
        </p>

        <div className={styles.codeWrap}>
          <span className={styles.codeText}>{referralCode}</span>
          <button className={styles.copyBtn} onClick={handleCopy}>
            {copied ? (
              <>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                Copied
              </>
            ) : (
              <>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
                Copy Code
              </>
            )}
          </button>
        </div>

        <div className={styles.shareGrid}>
          <button className={styles.shareBtn} aria-label="Share on WhatsApp" title="Share on WhatsApp">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </button>
          <button className={styles.shareBtn} aria-label="Share on X" title="Share on X">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </button>
          <button className={styles.shareBtn} aria-label="Share via Email" title="Share via Email">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </button>
        </div>
      </div>

      {/* ── Stats Grid ── */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.green}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
          </div>
          <div className={styles.statLabel}>Total Earned</div>
          <div className={styles.statValue}>₹{totalEarned}</div>
        </div>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.purple}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
          </div>
          <div className={styles.statLabel}>Successful Invites</div>
          <div className={styles.statValue}>{completedCount}</div>
        </div>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.orange}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <div className={styles.statLabel}>Pending Invites</div>
          <div className={styles.statValue}>{pendingCount}</div>
        </div>
      </div>

      {/* ── How It Works ── */}
      <div className={styles.howItWorks}>
        <h3 className={styles.sectionTitle}>How It Works</h3>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
            </div>
            <div className={styles.stepTitle}>1. Share Code</div>
            <div className={styles.stepDesc}>Send your unique code to friends via social media or email.</div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
            </div>
            <div className={styles.stepTitle}>2. Friends Sign Up</div>
            <div className={styles.stepDesc}>They register using your link and enroll in any course.</div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/></svg>
            </div>
            <div className={styles.stepTitle}>3. Get Rewards</div>
            <div className={styles.stepDesc}>Both of you receive ₹500 in your wallets instantly!</div>
          </div>
        </div>
      </div>

      {/* ── Recent Referrals ── */}
      <div className={styles.tableCard}>
        <h3 className={styles.sectionTitle}>Recent Referrals</h3>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Friend</th>
                <th>Date Signed Up</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={3} style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '24px' }}>Loading referrals...</td>
                </tr>
              ) : referrals.length === 0 ? (
                <tr>
                  <td colSpan={3} style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '24px' }}>You haven't referred anyone yet. Share your code to get started!</td>
                </tr>
              ) : (
                referrals.map((ref) => {
                  const initials = ref.name.split(' ').map((n) => n[0]).join('');
                  return (
                    <tr key={ref.id}>
                      <td>
                        <div className={styles.nameCol}>
                          <div className={styles.avatar}>{initials}</div>
                          <span>{ref.name}</span>
                        </div>
                      </td>
                      <td>{ref.date}</td>
                      <td>
                        <span className={`${styles.statusPill} ${ref.status === 'Completed' ? styles.completed : styles.pending}`}>
                          {ref.status}
                        </span>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default ReferralSection;
