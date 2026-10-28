/**
 * IndexNow Submission Utility for Bing & Search Engines
 * Domain: tizipingce.autos
 * Key: 0d4957e8492040689b7c8449c258d4a1
 */

import fs from 'fs';
import path from 'path';
import { AIRPORTS } from '../src/data/airports';

const HOST = 'tizipingce.autos';
const KEY = '0d4957e8492040689b7c8449c258d4a1';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';
const CACHE_FILE = path.resolve(process.cwd(), '.indexnow-cache.json');

interface SubmissionPayload {
  host: string;
  key: string;
  keyLocation: string;
  urlList: string[];
}

interface CacheData {
  submittedUrls: Record<string, string>; // url -> lastSubmittedISO
}

function loadCache(): CacheData {
  try {
    if (fs.existsSync(CACHE_FILE)) {
      return JSON.parse(fs.readFileSync(CACHE_FILE, 'utf-8'));
    }
  } catch (e) {
    console.warn('[IndexNow] Could not read cache file, initializing fresh.');
  }
  return { submittedUrls: {} };
}

function saveCache(cache: CacheData) {
  try {
    fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2), 'utf-8');
  } catch (e) {
    console.error('[IndexNow] Failed to persist cache:', e);
  }
}

async function submitWithRetry(payload: SubmissionPayload, maxRetries = 3): Promise<boolean> {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`[IndexNow] Sending request to ${INDEXNOW_ENDPOINT} (Attempt ${attempt}/${maxRetries})...`);
      const response = await fetch(INDEXNOW_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      console.log(`[IndexNow] HTTP Status Code: ${response.status} (${response.statusText})`);

      if (response.status === 200) {
        console.log('[IndexNow] ✅ Success (200 OK): URLs submitted and validated immediately.');
        return true;
      } else if (response.status === 202) {
        console.log('[IndexNow] ✅ Accepted (202 Accepted): URL received, key pending verification or queued.');
        return true;
      } else if (response.status === 400) {
        const text = await response.text();
        console.error('[IndexNow] ❌ Bad Request (400): Invalid format or parameter.', text);
        return false;
      } else if (response.status === 403) {
        console.error('[IndexNow] ❌ Forbidden (403): Key not found or does not match host key file at', KEY_LOCATION);
        return false;
      } else if (response.status === 422) {
        console.error('[IndexNow] ❌ Unprocessable Entity (422): URLs do not belong to the host or key mismatch.');
        return false;
      } else if (response.status === 429) {
        console.warn('[IndexNow] ⚠️ Too Many Requests (429): Rate limited, waiting before retry...');
        await new Promise((r) => setTimeout(r, attempt * 2000));
        continue;
      } else {
        const text = await response.text();
        console.warn(`[IndexNow] Server responded with unexpected code ${response.status}: ${text}`);
      }
    } catch (err: any) {
      console.error(`[IndexNow] Network error on attempt ${attempt}:`, err?.message || err);
      if (attempt < maxRetries) {
        await new Promise((r) => setTimeout(r, attempt * 1500));
      }
    }
  }
  return false;
}

async function main() {
  console.log('====================================================');
  console.log('   梯子评测网 (tizipingce.autos) IndexNow 提交系统');
  console.log('====================================================');

  const args = process.argv.slice(2);
  const cache = loadCache();

  let targetUrls: string[] = [];

  // Parse manual flags
  const urlArgIndex = args.indexOf('--url');
  if (urlArgIndex !== -1 && args[urlArgIndex + 1]) {
    targetUrls.push(args[urlArgIndex + 1]);
  }

  const allFlag = args.includes('--all');

  if (targetUrls.length === 0) {
    // Collect site core URLs
    const defaultSiteUrls = [
      `https://${HOST}/`,
      `https://${HOST}/recommend/`,
      `https://${HOST}/recommend/budget/`,
      `https://${HOST}/recommend/premium/`,
      `https://${HOST}/recommend/beginner/`,
      `https://${HOST}/recommend/stable/`,
      `https://${HOST}/recommend/ai/`,
      `https://${HOST}/recommend/streaming/`,
      `https://${HOST}/ranking/overall/`,
      `https://${HOST}/ranking/value/`,
      `https://${HOST}/ranking/budget/`,
      `https://${HOST}/ranking/stable/`,
      `https://${HOST}/compare/`,
      `https://${HOST}/review/`,
      ...AIRPORTS.map((a) => `https://${HOST}/review/${a.slug}/`),
      ...AIRPORTS.map((a) => `https://${HOST}/airport/${a.slug}/`),
      `https://${HOST}/guides/`,
      `https://${HOST}/guides/windows/`,
      `https://${HOST}/guides/android/`,
      `https://${HOST}/guides/ios/`,
      `https://${HOST}/guides/macos/`,
      `https://${HOST}/guides/appletv-router/`,
      `https://${HOST}/blog/`,
      `https://${HOST}/blog/vpn-vs-airport-guide/`,
      `https://${HOST}/blog/how-to-choose-airport/`,
      `https://${HOST}/blog/subscription-security/`,
      `https://${HOST}/blog/clients-comparison/`,
      `https://${HOST}/blog/airport-speed-test-truth/`,
      `https://${HOST}/glossary/`,
      `https://${HOST}/glossary/node-types/`,
      `https://${HOST}/glossary/what-is-vpn-node/`,
      `https://${HOST}/glossary/protocols/`,
      `https://${HOST}/glossary/subconverter/`,
      `https://${HOST}/glossary/gfw-dpi/`,
      `https://${HOST}/about/`,
      `https://${HOST}/editorial-policy/`,
      `https://${HOST}/contact/`,
      `https://${HOST}/privacy-policy/`,
      `https://${HOST}/disclaimer/`,
    ];

    if (allFlag) {
      console.log('[IndexNow] Force submit mode (--all): submitting all declared URLs.');
      targetUrls = defaultSiteUrls;
    } else {
      // Incremental submission: filter URLs submitted within the last 24 hours
      const now = Date.now();
      const ONE_DAY_MS = 24 * 60 * 60 * 1000;

      targetUrls = defaultSiteUrls.filter((url) => {
        const lastSub = cache.submittedUrls[url];
        if (!lastSub) return true;
        const diff = now - new Date(lastSub).getTime();
        return diff > ONE_DAY_MS;
      });

      console.log(`[IndexNow] Incremental check: ${defaultSiteUrls.length} total URLs, ${targetUrls.length} new/updated pending submission.`);
    }
  }

  if (targetUrls.length === 0) {
    console.log('[IndexNow] All URLs have been submitted recently within 24h. No new URLs to submit.');
    console.log('[IndexNow] Tip: Use `npm run indexnow -- --all` to force resubmission if needed.');
    return;
  }

  console.log(`[IndexNow] Preparing to submit ${targetUrls.length} URLs to Bing & IndexNow:`);
  targetUrls.slice(0, 5).forEach((u) => console.log(`  - ${u}`));
  if (targetUrls.length > 5) {
    console.log(`  ... and ${targetUrls.length - 5} more`);
  }

  const payload: SubmissionPayload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: targetUrls,
  };

  const success = await submitWithRetry(payload);

  if (success) {
    const nowIso = new Date().toISOString();
    targetUrls.forEach((u) => {
      cache.submittedUrls[u] = nowIso;
    });
    saveCache(cache);
    console.log('[IndexNow] ✅ State saved to cache. Submission successfully registered with IndexNow.');
    console.log('📌 重要提示：IndexNow 接收成功代表搜索引擎已被快速通知该 URL 存在更新，但并不代表 Bing 会保证立刻收录或给予特定排名。收录仍由 Bing 索引算法根据页面质量和原创度决定。');
  } else {
    console.error('[IndexNow] ❌ Submission failed after retries. Please check host configuration and network access.');
  }
}

main().catch(console.error);
