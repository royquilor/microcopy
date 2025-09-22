// Usage tracking system for AI generations
// Tracks daily and monthly usage with localStorage

export interface UsageData {
  dailyGenerations: number;
  monthlyGenerations: number;
  lastResetDate: string;
  tier: 'free' | 'pro';
}

const STORAGE_KEY = 'microcopy-usage';
const DAILY_LIMIT = 3;
const MONTHLY_LIMIT = 100;

// Get current usage data
export const getUsageData = (): UsageData => {
  if (typeof window === 'undefined') {
    return {
      dailyGenerations: 0,
      monthlyGenerations: 0,
      lastResetDate: new Date().toISOString().split('T')[0],
      tier: 'free'
    };
  }

  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    return {
      dailyGenerations: 0,
      monthlyGenerations: 0,
      lastResetDate: new Date().toISOString().split('T')[0],
      tier: 'free'
    };
  }

  const data = JSON.parse(stored);
  
  // Reset daily count if it's a new day
  const today = new Date().toISOString().split('T')[0];
  if (data.lastResetDate !== today) {
    data.dailyGenerations = 0;
    data.lastResetDate = today;
    saveUsageData(data);
  }

  return data;
};

// Save usage data
export const saveUsageData = (data: UsageData): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

// Check if user can generate AI variants
export const canGenerateAI = (usage: UsageData): boolean => {
  if (usage.tier === 'pro') return true;
  return usage.dailyGenerations < DAILY_LIMIT;
};

// Increment usage count
export const incrementUsage = (): UsageData => {
  const current = getUsageData();
  const updated = {
    ...current,
    dailyGenerations: current.dailyGenerations + 1,
    monthlyGenerations: current.monthlyGenerations + 1
  };
  saveUsageData(updated);
  return updated;
};

// Get usage status for UI
export const getUsageStatus = (usage: UsageData) => {
  const remaining = DAILY_LIMIT - usage.dailyGenerations;
  const isLimitReached = !canGenerateAI(usage);
  
  return {
    remaining,
    isLimitReached,
    dailyLimit: DAILY_LIMIT,
    monthlyLimit: MONTHLY_LIMIT
  };
};
