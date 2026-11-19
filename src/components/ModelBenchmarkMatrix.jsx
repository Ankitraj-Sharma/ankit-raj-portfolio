import React, { useState } from 'react';
import { 
  BarChart2, 
  Brain, 
  Cpu, 
  Activity, 
  CheckCircle2, 
  Zap, 
  Layers,
  Sparkles
} from 'lucide-react';
import { playSound } from '../utils/audio';

export default function ModelBenchmarkMatrix() {
  const [activeTab, setActiveTab] = useState('ALL');

  const models = [
    {
      name: "Sentinel Android On-Device ML",
      category: "CYBERSECURITY & ML",
      type: "Threat Classifier",
      accuracy: 97.4,
      precision: 98.2,
      recall: 96.5,
      f1: 97.3,
      latency: "1.2 ms",
      environment: "Android Offline / Thread-Safe",
      highlight: true
    },
    {
      name: "YOLOv8 Real-Time Object Detection",
      category: "COMPUTER VISION",
      type: "Ultralytics YOLOv8",
      accuracy: 92.6,
      precision: 89.4,
      recall: 91.1,
      f1: 90.2,
      latency: "24.0 ms",
      environment: "Streamlit / OpenCV / GPU",
      highlight: true
    },
    {
      name: "Exam Proctoring Vision Suite",
      category: "COMPUTER VISION",
      type: "MediaPipe 3D Landmark",
      accuracy: 96.1,
      precision: 95.8,
      recall: 96.4,
      f1: 96.1,
      latency: "16.5 ms",
      environment: "WebRTC Real-Time Stream",
      highlight: false
    },
    {
      name: "Hybrid Movie Recommendation Engine",
      category: "DATA SCIENCE & ML",
      type: "TF-IDF + Cosine Sim",
      accuracy: 94.8,
      precision: 93.5,
      recall: 95.2,
      f1: 94.3,
      latency: "8.4 ms",
      environment: "Scikit-Learn + Supabase",
      highlight: false
    },
    {
      name: "GraphRAG Multi-Hop RAG",
      category: "GENAI & KNOWLEDGE GRAPH",
      type: "Hierarchical Graph",
      accuracy: 91.5,
      precision: 94.0,
      recall: 89.8,
      f1: 91.8,
      latency: "210 ms",
      environment: "Vector Embeddings + LLM",
      highlight: false
    }
  ];

  const tabs = ['ALL', 'CYBERSECURITY & ML', 'COMPUTER VISION', 'DATA SCIENCE & ML'];

  const filtered = activeTab === 'ALL'
    ? models
    : models.filter(m => m.category === activeTab);

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-md">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="p-1.5 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
              <Brain className="w-4 h-4" />
            </span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              Empirical ML Performance Benchmarks
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
            Model Evaluation & Inference Telemetry
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 font-mono mt-1">
            Empirical metrics across computer vision, threat classifiers, recommendation systems, and RAG pipelines.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20">
            Scikit-Learn · YOLOv8 · MediaPipe
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              playSound('click');
              setActiveTab(tab);
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono tracking-wider uppercase transition-all border ${
              activeTab === tab
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-transparent font-bold shadow-sm'
                : 'bg-slate-50 dark:bg-[#0f172a] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-[#ff5e14]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Benchmark Matrix Cards */}
      <div className="space-y-3.5">
        {filtered.map((item, idx) => (
          <div
            key={idx}
            className={`p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#080d16] border transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-4 ${
              item.highlight 
                ? 'border-orange-500/40 hover:border-[#ff5e14]' 
                : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
            }`}
          >
            {/* Model Info */}
            <div className="min-w-[240px]">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-orange-500/10 text-orange-600 dark:text-orange-400 font-bold">
                  {item.category}
                </span>
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                  {item.type}
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                {item.name}
              </h4>
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block mt-0.5">
                Runtime: {item.environment}
              </span>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 flex-1 max-w-xl">
              
              {/* Accuracy */}
              <div className="p-2.5 rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-center">
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block">
                  Accuracy / mAP
                </span>
                <span className="text-sm font-bold font-mono text-emerald-600 dark:text-emerald-400">
                  {item.accuracy}%
                </span>
              </div>

              {/* Precision */}
              <div className="p-2.5 rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-center">
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block">
                  Precision
                </span>
                <span className="text-sm font-bold font-mono text-slate-900 dark:text-white">
                  {item.precision}%
                </span>
              </div>

              {/* Recall */}
              <div className="p-2.5 rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-center">
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block">
                  Recall
                </span>
                <span className="text-sm font-bold font-mono text-slate-900 dark:text-white">
                  {item.recall}%
                </span>
              </div>

              {/* Latency */}
              <div className="p-2.5 rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-center">
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block">
                  Inference
                </span>
                <span className="text-sm font-bold font-mono text-[#ff5e14]">
                  {item.latency}
                </span>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
