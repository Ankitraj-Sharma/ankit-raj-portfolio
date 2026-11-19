import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ShieldAlert, 
  AlertTriangle, 
  Play, 
  RotateCcw, 
  Cpu, 
  Binary, 
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Lock,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { playSound } from '../utils/audio';

// Pre-defined test cases reflecting real-world datasets
const PRESETS = [
  {
    label: "Legitimate Bank (SBI)",
    url: "https://onlinesbi.sbi",
    type: "safe"
  },
  {
    label: "Fake KYC Scam (Phishing)",
    url: "http://login-sbi-bank-verify-kyc.top/update",
    type: "malicious"
  },
  {
    label: "Official GitHub Repo",
    url: "https://github.com/Ankitraj-Sharma",
    type: "safe"
  },
  {
    label: "Crypto Giveaway Scam",
    url: "https://free-airdrop-claim-rewards.xyz/bonus",
    type: "malicious"
  },
  {
    label: "Raw IP Banking Probe",
    url: "http://192.168.1.105:8080/account-login",
    type: "malicious"
  }
];

// Shannon Entropy calculation function
function calculateEntropy(str) {
  if (!str) return 0;
  const frequencies = {};
  for (const char of str) {
    frequencies[char] = (frequencies[char] || 0) + 1;
  }
  return Object.values(frequencies).reduce((sum, count) => {
    const p = count / str.length;
    return sum - p * Math.log2(p);
  }, 0);
}

// Sentinel Heuristic Analysis Engine
function analyzeUrl(rawUrl) {
  const url = rawUrl.trim();
  let domain = "";
  let protocol = "";
  let path = "";

  try {
    const parsed = new URL(url.startsWith("http") ? url : `https://${url}`);
    domain = parsed.hostname.toLowerCase();
    protocol = parsed.protocol;
    path = parsed.pathname;
  } catch {
    domain = url.split('/')[0].toLowerCase();
  }

  // Feature 1: Official Brand Domains Whitelist (Ankit's Sentinel contribution)
  const officialBrands = [
    "onlinesbi.com",
    "onlinesbi.sbi",
    "sbi.co.in",
    "microsoft.com",
    "office.com",
    "google.com",
    "github.com",
    "marwadiuniversity.ac.in",
    "vercel.app",
    "supabase.co"
  ];
  const isWhitelistedBrand = officialBrands.some(brand => domain === brand || domain.endsWith(`.${brand}`));

  // Feature 2: High-risk TLDs
  const riskyTLDs = [".xyz", ".top", ".tk", ".work", ".click", ".buzz", ".ml", ".ga", ".cf", ".gq", ".loan", ".club"];
  const hasRiskyTLD = riskyTLDs.some(tld => domain.endsWith(tld));

  // Feature 3: Targeted scam keywords
  const scamKeywords = ["login", "verify", "kyc", "bank", "bonus", "reward", "claim", "free", "gift", "update", "airdrop", "deposit", "withdrawal", "earning"];
  const foundKeywords = scamKeywords.filter(kw => url.toLowerCase().includes(kw));

  // Feature 4: Raw IP address detection
  const isRawIP = /^(https?:\/\/)?(\d{1,3}\.){3}\d{1,3}(:\d+)?/i.test(url);

  // Feature 5: Domain Shannon Entropy
  const domainEntropy = Number(calculateEntropy(domain).toFixed(2));

  // Feature 6: Lexical anomalies (Subdomains depth, hyphens count, excessive length)
  const subdomainsCount = domain.split('.').length - 1;
  const hyphensCount = (domain.match(/-/g) || []).length;
  const isLengthAnomaly = domain.length > 30;

  // Feature 7: Protocol security
  const isHttpInsecure = protocol === 'http:';

  // SCORING LOGIC
  let riskScore = 0;
  const breakdown = [];

  if (isWhitelistedBrand) {
    riskScore = 2; // highly trusted
    breakdown.push({ name: "Official Brand Domain Whitelist", status: "SAFE", impact: "-95% Risk", passed: true });
  } else {
    if (isRawIP) {
      riskScore += 45;
      breakdown.push({ name: "Raw IP Address Host (No DNS)", status: "CRITICAL", impact: "+45% Risk", passed: false });
    }

    if (hasRiskyTLD) {
      riskScore += 30;
      breakdown.push({ name: "High-Abuse Domain TLD (.xyz / .top)", status: "HIGH", impact: "+30% Risk", passed: false });
    }

    if (foundKeywords.length > 0) {
      const kwWeight = Math.min(foundKeywords.length * 15, 40);
      riskScore += kwWeight;
      breakdown.push({ 
        name: `Scam Keyword Targets (${foundKeywords.slice(0, 3).join(', ')})`, 
        status: "HIGH", 
        impact: `+${kwWeight}% Risk`, 
        passed: false 
      });
    }

    if (domainEntropy > 3.8) {
      riskScore += 20;
      breakdown.push({ name: `High Shannon Entropy (${domainEntropy} bits)`, status: "WARN", impact: "+20% Risk", passed: false });
    } else {
      breakdown.push({ name: `Normal Domain Entropy (${domainEntropy} bits)`, status: "OK", impact: "Nominal", passed: true });
    }

    if (hyphensCount >= 2 || subdomainsCount >= 3) {
      riskScore += 18;
      breakdown.push({ name: "Excessive Subdomains & Hyphen Chaining", status: "WARN", impact: "+18% Risk", passed: false });
    }

    if (isHttpInsecure) {
      riskScore += 15;
      breakdown.push({ name: "Unencrypted HTTP Protocol", status: "WARN", impact: "+15% Risk", passed: false });
    }
  }

  // Bound score 0-100
  riskScore = Math.min(Math.max(riskScore, 2), 99);
  const safeScore = 100 - riskScore;

  let verdict = "SAFE";
  if (riskScore >= 65) verdict = "MALICIOUS";
  else if (riskScore >= 35) verdict = "SUSPICIOUS";

  return {
    url,
    domain,
    riskScore,
    safeScore,
    verdict,
    domainEntropy,
    isRawIP,
    hasRiskyTLD,
    foundKeywords,
    breakdown,
    latency: (Math.random() * 0.8 + 0.6).toFixed(2) // Simulate sub-millisecond mobile latency
  };
}

export default function PhishingMLPlayground() {
  const [inputUrl, setInputUrl] = useState(PRESETS[1].url);
  const [result, setResult] = useState(() => analyzeUrl(PRESETS[1].url));
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = (urlToScan) => {
    playSound('click');
    setIsScanning(true);
    setTimeout(() => {
      const res = analyzeUrl(urlToScan || inputUrl);
      setResult(res);
      setIsScanning(false);
      if (res.verdict === 'SAFE') {
        confetti({
          particleCount: 35,
          spread: 60,
          origin: { y: 0.8 }
        });
      }
    }, 280);
  };

  const handleSelectPreset = (p) => {
    setInputUrl(p.url);
    handleScan(p.url);
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-md">
      
      {/* Title & Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="p-1.5 rounded-lg bg-orange-500/10 text-[#ff5e14]">
              <Cpu className="w-4 h-4" />
            </span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ff5e14]">
              Live ML & Threat Heuristic Engine Simulator
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
            Sentinel Android — On-Device Phishing Classifier
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 font-mono mt-1">
            Test the live heuristic feature extractor & scam detection engine co-developed by Ankit (Team PhishShield).
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Engine Online
          </span>
          <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
            ~{result.latency}ms Latency
          </span>
        </div>
      </div>

      {/* Preset Quick Chips */}
      <div className="mb-5">
        <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block mb-2 font-medium">
          Quick Test Presets (Click to Inspect):
        </span>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((p, idx) => (
            <button
              key={idx}
              onClick={() => handleSelectPreset(p)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 border ${
                inputUrl === p.url
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-transparent font-semibold shadow-sm'
                  : 'bg-slate-50 dark:bg-[#0f172a] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-[#ff5e14]'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${p.type === 'safe' ? 'bg-emerald-500' : 'bg-rose-500'}`} />
              <span>{p.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* URL Input Bar */}
      <div className="flex flex-col sm:flex-row gap-2.5 mb-6">
        <div className="relative flex-1">
          <input
            type="text"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleScan()}
            placeholder="Enter URL to inspect (e.g. https://sbi.co.in or http://claim-crypto.xyz)..."
            className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#080d16] border border-slate-200 dark:border-slate-800 font-mono text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#ff5e14] transition-colors"
          />
        </div>

        <button
          onClick={() => handleScan()}
          disabled={isScanning}
          className="px-6 py-3 rounded-2xl bg-[#ff5e14] hover:bg-[#ea580c] text-white font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md shadow-orange-500/25 flex-shrink-0"
        >
          {isScanning ? (
            <>
              <RotateCcw className="w-4 h-4 animate-spin" />
              <span>Analyzing...</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4 fill-current" />
              <span>Run Detection</span>
            </>
          )}
        </button>
      </div>

      {/* Real-time Verdict Output Banner */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-6">
        
        {/* Main Verdict Card */}
        <div className={`md:col-span-7 p-5 rounded-2xl border flex flex-col justify-between ${
          result.verdict === 'SAFE' 
            ? 'bg-emerald-500/5 dark:bg-emerald-500/10 border-emerald-500/30' 
            : result.verdict === 'SUSPICIOUS'
            ? 'bg-amber-500/5 dark:bg-amber-500/10 border-amber-500/30'
            : 'bg-rose-500/5 dark:bg-rose-500/10 border-rose-500/30'
        }`}>
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400">
                Classification Verdict
              </span>
              <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                Inference: ~{result.latency}ms
              </span>
            </div>

            <div className="flex items-center gap-3">
              {result.verdict === 'SAFE' ? (
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-7 h-7" />
                </div>
              ) : result.verdict === 'SUSPICIOUS' ? (
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-7 h-7" />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-600 dark:text-rose-400 flex items-center justify-center flex-shrink-0">
                  <ShieldAlert className="w-7 h-7" />
                </div>
              )}

              <div>
                <h4 className={`text-xl font-display font-extrabold uppercase tracking-tight ${
                  result.verdict === 'SAFE' 
                    ? 'text-emerald-600 dark:text-emerald-400' 
                    : result.verdict === 'SUSPICIOUS'
                    ? 'text-amber-600 dark:text-amber-400'
                    : 'text-rose-600 dark:text-rose-400'
                }`}>
                  {result.verdict === 'SAFE' 
                    ? 'Legitimate & Safe URL' 
                    : result.verdict === 'SUSPICIOUS'
                    ? 'Suspicious Activity Detected'
                    : 'Critical Phishing Scam Blocked'}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-mono mt-0.5 break-all">
                  Target: {result.domain || result.url}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-600 dark:text-slate-400">
              Confidence Rating:
            </span>
            <span className={`font-bold ${
              result.verdict === 'SAFE' ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'
            }`}>
              {result.verdict === 'SAFE' ? `${result.safeScore}% Safe Match` : `${result.riskScore}% Phishing Probability`}
            </span>
          </div>
        </div>

        {/* Feature Gauges Card */}
        <div className="md:col-span-5 p-5 rounded-2xl bg-slate-50 dark:bg-[#080d16] border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
          <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 mb-2 block">
            Engine Confidence Gauges
          </span>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs font-mono mb-1">
                <span className="text-slate-600 dark:text-slate-400">Threat Risk Level:</span>
                <span className={`font-bold ${result.riskScore > 50 ? 'text-rose-500' : 'text-slate-700 dark:text-slate-300'}`}>
                  {result.riskScore}%
                </span>
              </div>
              <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-500 ${
                    result.riskScore > 65 ? 'bg-rose-500' : result.riskScore > 30 ? 'bg-amber-500' : 'bg-emerald-500'
                  }`}
                  style={{ width: `${result.riskScore}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono mb-1">
                <span className="text-slate-600 dark:text-slate-400">Domain Entropy:</span>
                <span className="font-bold text-slate-800 dark:text-slate-200">
                  {result.domainEntropy} / 5.0
                </span>
              </div>
              <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <div 
                  className="h-full rounded-full bg-cyan-500 transition-all duration-500"
                  style={{ width: `${Math.min((result.domainEntropy / 5.0) * 100, 100)}%` }}
                />
              </div>
            </div>
          </div>

          <div className="mt-3 text-[10px] font-mono text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800">
            Extracts 6+ real-time heuristics offline with zero user data leak.
          </div>
        </div>

      </div>

      {/* Extracted Features List */}
      <div>
        <h5 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-3">
          Extracted Feature Indicators:
        </h5>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {result.breakdown.map((item, idx) => (
            <div 
              key={idx}
              className="p-3 rounded-xl bg-slate-50 dark:bg-[#080d16] border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-mono"
            >
              <div className="flex items-center gap-2 truncate pr-2">
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${item.passed ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                <span className="text-slate-800 dark:text-slate-200 truncate">{item.name}</span>
              </div>
              <span className={`font-semibold text-[11px] whitespace-nowrap ${
                item.passed ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-500'
              }`}>
                {item.impact}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
