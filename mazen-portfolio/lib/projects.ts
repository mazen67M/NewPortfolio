// ==========================================================================
// PROJECTS DATA — Single source of truth for all projects
// Real data from project intakes — images to be updated by user
// ==========================================================================

export type CaseStudySection = {
  problem: string;
  solution: string;
  architecture: string[];
  challenges: { challenge: string; solution: string }[];
  lessonsLearned: string[];
  codeSnippet?: {
    title: string;
    language: string;
    code: string;
  };
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  hook: string;
  description: string;
  category: string;
  year: string;
  role: string;
  duration: string;
  team: string;
  status: 'live' | 'in-development' | 'completed';
  image: string;
  heroImage: string;
  techStack: string[];
  links: {
    github?: string;
    demo?: string;
  };
  metrics?: { value: string; label: string }[];
  features: string[];
  gallery: { src: string; alt: string }[];
  caseStudy: CaseStudySection;
  isFlagship?: boolean;
  bentoSize: 'flagship' | 'secondary' | 'wide' | 'tall' | 'third';
  isPrivate?: boolean;
};

export const projects: Project[] = [
  // ─────────────────────────────────────────────────────────
  // 1. CV SCREENER — AI-Powered SaaS Platform (FLAGSHIP)
  // ─────────────────────────────────────────────────────────
  {
    id: 'cv-screener',
    slug: 'cv-screener',
    title: 'CV Screener',
    hook: 'Not just a score — an explainable three-dimensional breakdown of why your CV fits (or doesn\'t) a job.',
    description:
      'An AI-powered SaaS platform that matches a candidate CV against a Job Description using a hybrid scoring engine — TF-IDF semantic vectors, a curated 50-skill taxonomy, and experience rules — deployed on a .NET 8 + Next.js 14 + PostgreSQL stack with ONNX inference running fully in .NET.',
    category: 'Full Stack · AI · SaaS',
    year: '2026',
    role: 'Solo Developer (Full-Stack + ML)',
    duration: 'Active Development',
    team: 'Solo',
    status: 'live',
    image: '/images/CVScreener/untitled-08-18-2026_05_23_PM.png',
    heroImage: '/images/CVScreener/untitled-08-18-2026_05_23_PM.png',
    isFlagship: true,
    bentoSize: 'flagship',
    techStack: [
      '.NET 8 Web API',
      'C#',
      'Next.js 14',
      'TypeScript',
      'PostgreSQL',
      'Supabase',
      'Clerk Auth',
      'Python (ML Training)',
      'scikit-learn',
      'ONNX Runtime',
      'Tailwind CSS',
      'Vercel + Railway',
    ],
    links: {
      demo: 'https://cvscreener1.vercel.app/',
    },
    features: [
      'Hybrid AI scoring: TF-IDF semantic similarity (50%) + Skills Taxonomy (35%) + Experience rules (15%) — three-dimensional, not a black box',
      'PDF CV upload with PdfPig text extraction — file never stored, only extracted text persists (privacy by design)',
      'Three-tier skill classification: Matched / Partial / Missing against a curated 50-canonical-skill taxonomy with alias expansion',
      'Personalized learning path generated for every missing skill — targeted Doc/Course resources to close identified gaps',
      'Public share links via UUID — no auth required to view a shared analysis report',
      'Analysis history (last 50 per user) with score progression tracking',
      'User dashboard with aggregate metrics: total analyses, average score, best score achieved',
      'Role-based onboarding (Job Seeker / Recruiter) with Clerk JWT authentication',
      'ONNX ML inference running inside .NET as a Singleton — no Python runtime in production',
      'Strict Clean Architecture: Core → Infrastructure → API, with zero external NuGet packages in Core',
    ],
    metrics: [
      { value: '50',     label: 'Canonical Skills in Taxonomy' },
      { value: '166 KB', label: 'ONNX Model (from 9.4 MB corpus)' },
      { value: '3',      label: 'Scoring Dimensions' },
      { value: '8',      label: 'Frontend Pages' },
    ],
    gallery: [
      { src: '/images/CVScreener/untitled-08-18-2026_05_23_PM.png',                                       alt: 'Landing Page — Hero with Live Compatibility Scan Preview' },
      { src: '/images/CVScreener/CV-Screener-—-AI-Powered-Resume-Intelligence-08-18-2026_05_25_PM.png',   alt: 'How It Works — 5-Step AI Intelligence Pipeline' },
      { src: '/images/CVScreener/CV-Screener-—-AI-Powered-Resume-Intelligence-08-18-2026_05_27_PM.png',   alt: 'User Dashboard — Analysis Metrics & Recent Analyses' },
      { src: '/images/CVScreener/CV-Screener-—-AI-Powered-Resume-Intelligence-08-18-2026_05_28_PM.png',   alt: 'New Analysis — CV Upload & Job Description Input' },
      { src: '/images/CVScreener/CV-Screener-—-AI-Powered-Resume-Intelligence-08-18-2026_05_30_PM.png',   alt: 'Results — Overall Score & Dimensional Score Breakdown' },
      { src: '/images/CVScreener/CV-Screener-—-AI-Powered-Resume-Intelligence-08-18-2026_05_31_PM.png',   alt: 'Results — Skills Breakdown: Matched, Partial & Missing' },
      { src: '/images/CVScreener/CV-Screener-—-AI-Powered-Resume-Intelligence-08-18-2026_05_3_PM.png',    alt: 'Results — Recommended Learning Path & Experience Alignment' },
    ],
    caseStudy: {
      problem:
        'Job seekers send CVs blindly and never know why they\'re rejected. Recruiters process hundreds of applications manually with no objective ranking. Existing ATS tools give a score but no explanation — candidates can\'t act on "68%". CV Screener was built to surface exactly which dimension is dragging the score down and give users a concrete next step to fix it.',
      solution:
        'A fixed three-component weighted hybrid score: Text Similarity via a TF-IDF model (trained on 9.4 MB of real job descriptions, exported to ONNX, inferred in .NET — no Python in production); Skills Score via a curated taxonomy of 50 canonical skills with alias mapping; Experience Score via regex year extraction with a continuous ratio formula. Every result shows all three scores separately, a Matched/Partial/Missing skill breakdown, and a personalized learning path for every gap.',
      architecture: [
        'Backend: .NET 8 Web API with strict Clean Architecture — Core → Infrastructure → API. Zero external NuGet packages in Core. DI registered entirely in Program.cs.',
        'Frontend: Next.js 14 (App Router), TypeScript, Tailwind CSS, Clerk authentication. All API calls routed through a typed Axios lib layer.',
        'Database: PostgreSQL via Supabase with raw Npgsql SQL — intentionally no ORM. RLS enabled for row-level security.',
        'ML Pipeline: Python scikit-learn TF-IDF trained on 9.4 MB corpus → skl2onnx ONNX export (166 KB, 5000-word vocabulary) → Microsoft.ML.OnnxRuntime Singleton inference in .NET.',
        'Infrastructure: Vercel (frontend), Railway (backend .NET API), Supabase (PostgreSQL), Clerk (JWT auth + user management).',
        'Score labels (Poor / Below Average / Average / Good / Excellent) computed server-side to prevent client-side manipulation.',
      ],
      challenges: [
        {
          challenge: 'Running a Python-trained ML model inside a .NET production environment without a Python runtime dependency',
          solution:
            'Trained a TF-IDF model with scikit-learn, exported it to ONNX format via skl2onnx, then loaded it inside .NET via Microsoft.ML.OnnxRuntime as a Singleton service. InferenceSession is thread-safe — the model loads once at startup and serves all concurrent requests with zero Python involved.',
        },
        {
          challenge: 'Skill matching that handles terminology variance — ".NET" vs "ASP.NET Core" vs "dotnet"',
          solution:
            'Built a curated Skills Taxonomy JSON with 50 canonical skills, each with a list of known aliases. The SkillsEngine performs canonical matching first, then alias matching (counted as partial at 0.5 weight) — ensuring skill coverage is accurate across the wide variation in how technologies are named in CVs vs. job descriptions.',
        },
        {
          challenge: 'Designing a scoring formula that is explainable and resistant to single-dimension gaming (CV keyword stuffing)',
          solution:
            'Implemented a fixed three-component weighted formula (50/35/15). Each dimension is surfaced separately in the UI — users can see exactly which score is dragging them down, and a candidate who keyword-stuffs their CV will see high Text Similarity but low Skills/Experience scores, exposing the manipulation.',
        },
      ],
      lessonsLearned: [
        'ONNX is the right bridge between Python ML training and .NET production inference — training stays in Python\'s rich ecosystem while inference stays in a type-safe, dependency-free runtime.',
        'A curated taxonomy beats raw keyword matching: alias expansion dramatically reduces false negatives where a skill is present but named differently.',
        'Explainability is a feature, not an afterthought — surfacing each dimension separately makes the product trustworthy and actionable, not a black box.',
        'Clean Architecture\'s payoff is most visible at integration points: swapping the ONNX model version required changing only OnnxInferenceService, with zero changes to MatchingService, controllers, or DTOs.',
      ],
      codeSnippet: {
        title: 'Hybrid Scoring Orchestration — MatchingService',
        language: 'csharp',
        code: `// MatchingService orchestrates all three engines and persists the result.
// Weights are fixed: Text 50% + Skills 35% + Experience 15%
public async Task<AnalysisResult> AnalyzeAsync(string cvText, string jdText, Guid userId)
{
    var cleanedCv = TextCleaner.Clean(cvText);
    var cleanedJd = TextCleaner.Clean(jdText);

    // Three independent engines — run in any order
    var textSimilarity = await _tfIdfService.ComputeSimilarityAsync(cleanedCv, cleanedJd);
    var skillsResult   = _skillsEngine.Evaluate(cleanedCv, cleanedJd);
    var expResult      = _experienceEngine.Evaluate(cleanedCv, cleanedJd);

    // Fixed hybrid formula — prevents single-dimension gaming
    var overallScore = (int)Math.Round(
        (0.50 * textSimilarity +
         0.35 * skillsResult.Score +
         0.15 * expResult.Score) * 100
    );

    var result = new AnalysisResult
    {
        UserId          = userId,
        OverallScore    = overallScore,
        ScoreLabel      = ScoreLabel.FromScore(overallScore), // Server-side always
        TextSimilarity  = textSimilarity,
        SkillsScore     = skillsResult.Score,
        ExperienceScore = expResult.Score,
        MatchedSkills   = skillsResult.Matched,
        PartialSkills   = skillsResult.Partial,
        MissingSkills   = skillsResult.Missing,
        ExperienceData  = expResult,
        AnalysisVersion = "v2"
    };

    await _analysisRepository.SaveAsync(result);
    return result;
}`,
      },
    },
  },

  // ─────────────────────────────────────────────────────────
  // 2. SAMARA STUDIO MANAGEMENT SYSTEM
  // ─────────────────────────────────────────────────────────
  {
    id: 'samara-studio',
    slug: 'samara-studio',
    title: 'Samara Studio Management System',
    hook: 'Replaced Excel with a production-grade, real-time studio operations platform.',
    description:
      'A real-time, role-based web app that manages bookings, equipment, clients, finance, and daily closing for a photography studio — built with Next.js 16, Supabase, and PostgreSQL RPCs.',
    category: 'Full Stack · SaaS · Web App',
    year: '2026',
    role: 'Solo Developer (Full-Stack)',
    duration: '~2 months',
    team: 'Solo',
    status: 'in-development',
    image: '/images/Samara-Studio-Portfolio/Samara-Dashboard.png',
    heroImage: '/images/Samara-Studio-Portfolio/Samara-Dashboard.png',
    bentoSize: 'secondary',
    isPrivate: true,
    techStack: [
      'Next.js 16',
      'TypeScript 5',
      'Supabase (PostgreSQL)',
      'Row Level Security',
      'Supabase Realtime',
      'Zustand',
      'TanStack Query v5',
      'React Hook Form + Zod',
      'Tailwind CSS v4',
      'FullCalendar v6',
      '@react-pdf/renderer',
      'Recharts',
      'Playwright',
    ],
    links: {},
    features: [
      'Three-layer booking conflict prevention — frontend check → Next.js API guard → PostgreSQL FOR UPDATE lock + exclusion constraint',
      'Open-session (walk-in) billing with whole-hour ceiling rounding and 15-minute short-session guard',
      'Production vs. Rental booking categories with camera operator fee splitting',
      'Dynamic per-room buffer time engine visualized on FullCalendar resource-timegrid',
      'Pre-paid bundle management — group sessions sold at package price, individually schedulable',
      'Double-entry financial ledger — every charge, payment, and refund is an immutable ledger row',
      'Daily cash closing with drawer reconciliation and variance flagging',
      'Equipment quantity-aware reservation system — rejects bookings that exceed stock at API and DB level',
      'Excel + PDF export pipeline for financial reports, booking lists, and client ledgers',
      'E2E tests with Playwright + integration tests with Node.js native test runner',
    ],
    metrics: [
      { value: '10',  label: 'Core App Modules' },
      { value: '39',  label: 'SQL Migration Files' },
      { value: '3',   label: 'Conflict Validation Layers' },
      { value: '40+', label: 'PostgreSQL RPCs & Triggers' },
    ],
    gallery: [
      { src: '/images/Samara-Studio-Portfolio/Samara-Dashboard.png', alt: 'Operational Dashboard — Real-time metrics, active sessions, and quick actions' },
      { src: '/images/Samara-Studio-Portfolio/Samara-Calender.png', alt: 'Samara Studio — Interactive Resource & Booking Calendar' },
      { src: '/images/Samara-Studio-Portfolio/Samara-Booking-1.png', alt: 'Booking Wizard (Step 1) — Client profile and account details selection' },
      { src: '/images/Samara-Studio-Portfolio/Samara-Booking-2.png', alt: 'Booking Wizard (Step 2) — Room scheduler and time allocation with real-time conflict validation' },
      { src: '/images/Samara-Studio-Portfolio/Samara-Booking-3.png', alt: 'Booking Wizard (Step 3) — Equipment rental allocation checking real-time warehouse stock levels' },
      { src: '/images/Samara-Studio-Portfolio/Samara-Booking-4.png', alt: 'Booking Wizard (Step 4) — Invoice breakdown, deposits, and payment collection' },
      { src: '/images/Samara-Studio-Portfolio/Samara-Invoice-End-Session.png', alt: 'Walk-in Billing — Immediate session finalization, hourly ceilings, and automatic billing' },
      { src: '/images/Samara-Studio-Portfolio/Samara-Financial-Center.png', alt: 'Financial Ledger — Double-entry logs tracking all transactions, cash register balances, and cash-outs' },
      { src: '/images/Samara-Studio-Portfolio/Samara-Reports-Net-Profit.png', alt: 'Profitability Reports — Interactive charts showcasing net profit margins, costs, and P&L statements' },
      { src: '/images/Samara-Studio-Portfolio/Samara-Reports-Rooms-Usage.png', alt: 'Room Utilization Analytics — Occupancy trends, visual heatmap tracking room efficiency, and operator fee splits' },
      { src: '/images/Samara-Studio-Portfolio/Samara-Equipments.png', alt: 'Inventory Control — Comprehensive rental equipment catalog, stock tracking, and rental prices' },
      { src: '/images/Samara-Studio-Portfolio/Samara-Client-Account.png', alt: 'CRM Client Account Details — Credit balances, active bundles, invoices, and booking logs' }
    ],
    caseStudy: {
      problem:
        'Samara Studio — a photography, videography, and content-production studio — was running its entire operation on Excel spreadsheets. Staff manually tracked bookings, room occupancy, equipment loans, client balances, and daily cash closings across disconnected sheets. Double-bookings happened when two staff members booked the same room simultaneously without syncing. Equipment was overcommitted because there was no real-time visibility of active reservations. Financial drift crept in as partial payments and deposits were manually tracked. And daily closing required summing rows in a spreadsheet with no audit trail.',
      solution:
        'A real-time, role-based web application that centralizes every studio operation. Booking conflict prevention happens at three layers simultaneously: client-side validation, server-side API guards, and PostgreSQL exclusion constraints with row-level locking — making double-booking structurally impossible. All billing logic lives in PostgreSQL RPCs (`end_booking_session`, `confirm_booking`, `cancel_booking`), so the critical financial path is transactional, lock-aware, and database-enforced regardless of which client triggers it.',
      architecture: [
        'Browser: Next.js 16 App Router with React Server Components for the calendar, booking forms, finance, and settings modules.',
        'API Layer: Next.js Route Handlers (REST-style) serving all mutations and queries, backed by the Supabase JS SDK.',
        'Database: Supabase-hosted PostgreSQL with 39 migration files covering schema, triggers, RLS policies, ACID RPCs, and 13 performance indexes on hot query paths.',
        'Auth: Supabase Auth with JWT sessions and cookie-based SSR. Row Level Security on every table.',
        'Realtime: Supabase Realtime subscriptions keep the FullCalendar resource-timegrid live across all open tabs.',
        'State: React Query for all server state (targeted invalidation by key). Zustand for ephemeral UI state (booking form steps, drawer open/close, filter panels).',
      ],
      challenges: [
        {
          challenge: 'Race conditions on concurrent bookings — two staff booking the same room within milliseconds of each other',
          solution:
            'The `confirm_booking` RPC acquires a `FOR UPDATE` lock on the target room\'s active bookings before inserting. PostgreSQL serializes concurrent callers at the row-lock level. A PostgreSQL exclusion constraint on the `bookings` table using the `tstzrange` type additionally prevents overlapping time ranges from co-existing — even if a bug bypasses the application layer.',
        },
        {
          challenge: 'Billing accuracy across multiple pricing models — hourly, flat-rate, and camera-percentage variants',
          solution:
            'Migrated all billing math into the `end_booking_session` PostgreSQL function (migration 035). The function reads `camera_price_type`, applies `CEILING(ms / 3_600_000, 1)` for hourly items and uses the flat value for flat-fee items — all inside a single `BEGIN/COMMIT` block. No partial state is possible.',
        },
        {
          challenge: 'Schema evolution across 39 migrations with real data present from early development',
          solution:
            'Every change was written as an incremental, idempotent SQL migration using `CREATE OR REPLACE`, `ALTER TABLE ... ADD COLUMN IF NOT EXISTS`, and `CREATE INDEX IF NOT EXISTS`. Destructive operations were avoided by design, giving a linear, auditable history of every schema decision.',
        },
      ],
      lessonsLearned: [
        'Put critical logic in the database, not the app layer. Billing, conflict detection, and ledger updates that must not partially fail belong in PostgreSQL transactions — the switch to RPCs eliminated an entire class of data-consistency bugs.',
        'React Query\'s query key design deserves as much thought as the schema. Broad invalidations caused cascade re-fetches that hurt perceived performance; narrowing to specific keys (`[\'bookings\', bookingId]`) made the UI feel significantly more responsive.',
        'Schema migrations are permanent decisions — make them conservative. "Add, don\'t replace" prevented data loss but left some semantic debt. More upfront ERD planning before writing a single migration would pay dividends.',
      ],
      codeSnippet: {
        title: 'Whole-Hour Ceiling Billing with Short-Session Guard in a PostgreSQL RPC',
        language: 'sql',
        code: `-- From: 035_minimum_hour_billing.sql — end_booking_session()

-- 1. Fetch booking with exclusive row lock (prevents concurrent finalization)
SELECT * INTO v_booking
FROM bookings
WHERE id = p_booking_id AND deleted_at IS NULL
FOR UPDATE;

-- 2. Guard: reject sub-15-minute sessions
v_billing_origin   := COALESCE(v_booking.started_at, v_booking.start_time);
v_duration_minutes := EXTRACT(EPOCH FROM (v_end_time - v_billing_origin)) / 60.0;

IF v_duration_minutes < 15 THEN
    RAISE EXCEPTION
        'Session lasted less than 15 minutes (%.1f min). Use cancel_short_session instead.',
        v_duration_minutes;
END IF;

-- 3. Whole-hour ceiling billing, minimum 1 billable hour
v_duration_ms := EXTRACT(EPOCH FROM (v_end_time - v_billing_origin)) * 1000.0;
v_room_hours  := GREATEST(CEIL(v_duration_ms / 3600000.0), 1);
v_room_cost   := COALESCE(v_booking.room_hourly_rate, 0) * v_room_hours;

-- Equipment follows the same rule (non-camera items):
v_eq_hours := GREATEST(CEIL(v_duration_ms / 3600000.0), 1);
v_eq_total  := v_eq_hours * COALESCE(v_eq_row.unit_price, 0) * v_eq_row.quantity;`,
      },
    },
  },

  // ─────────────────────────────────────────────────────────
  // 2. BT-ADV AGENCY WEBSITE
  // ─────────────────────────────────────────────────────────
  {
    id: 'bt-advertising',
    slug: 'bt-advertising',
    title: 'BT-ADV Agency Website',
    hook: 'A full-stack agency platform with a secure booking wizard, bilingual RTL/LTR UI, and cinema-themed confirmation tickets.',
    description:
      'Production-quality agency website for a premium video production studio — built with Next.js 16, Supabase, and a 5-layer security stack. Converts lead inquiries through a structured 4-step booking wizard with cinema-style confirmation.',
    category: 'Full Stack · Web App',
    year: '2026',
    role: 'Full-Stack Developer — Architecture, UI/UX, Security, Deployment',
    duration: '2.5 Months',
    team: 'Solo',
    status: 'completed',
    image: '/images/bt-advertising/frontend-home-hero.png',
    heroImage: '/images/bt-advertising/frontend-home-hero.png',
    bentoSize: 'secondary',
    isPrivate: true,
    techStack: [
      'Next.js 16',
      'TypeScript 5',
      'Supabase (PostgreSQL + RLS)',
      'Tailwind CSS v4',
      'Framer Motion 12',
      'Zustand 5',
      'TanStack Query v5',
      'React Hook Form + Zod 4',
      'Upstash Redis (rate limiting)',
      'Resend (transactional email)',
      'Cloudinary',
      'Sentry',
    ],
    links: {
      demo: 'https://www.bt-advagency.com/',
    },
    features: [
      '4-step booking wizard with per-step validation — each step validates only its own fields, preventing advancement on errors',
      'Cinema-style booking confirmation ticket generated on screen and sent as branded HTML email (reference code: BT-A3F9C12E)',
      'Dual-layer rate limiting via Upstash Redis sliding window — 5 req/IP/10 min + 3 bookings/email/24h, running in parallel',
      'CSRF protection via double-submit cookie pattern with constant-time token comparison to prevent timing attacks',
      'Slot double-booking prevention: optimistic pre-check + PostgreSQL UNIQUE constraint as atomic last guard (catches 23505)',
      'Bilingual Arabic/English with automatic RTL layout swap — CSS logical properties, Cairo font for AR, Inter for EN',
      'JWT-embedded role check in Edge middleware — zero DB round-trip via custom Supabase Postgres access token hook',
      'Transactional HTML email system with XSS prevention via escapeHtml() before all user-value interpolation',
      'Admin CMS with full CRUD across 12 content types — bookings, works, clients, pricing, team, careers, BTS, reviews, messages, settings',
      'Next.js unstable_cache with tag-based revalidation — pages cached 1 hour, revalidated on-demand after admin mutations',
    ],
    metrics: [
      { value: '12',  label: 'Managed DB Tables' },
      { value: '5',   label: 'Security Layers on Booking Endpoint' },
      { value: '2',   label: 'Rate Limit Layers in Parallel' },
      { value: '3',   label: 'Sentry-Instrumented Runtimes (client, server, edge)' },
    ],
    gallery: [
      { src: '/images/bt-advertising/frontend-home-hero.png',     alt: 'BT-ADV — Homepage with cinema-themed hero banner' },
      { src: '/images/bt-advertising/frontend-works.png',         alt: 'BT-ADV — Selected agency works portfolio gallery' },
      { src: '/images/bt-advertising/frontend-clients.png',       alt: 'BT-ADV — Brand trust and client logo index' },
      { src: '/images/bt-advertising/frontend-pricing.png',       alt: 'BT-ADV — Showtime Rates and video packages page' },
      { src: '/images/bt-advertising/booking-step1-contact.png',  alt: 'BT-ADV — Booking wizard Step 1: Client contact intake' },
      { src: '/images/bt-advertising/booking-step3-project.png',  alt: 'BT-ADV — Booking wizard Step 3: Project scope details' },
      { src: '/images/bt-advertising/booking-step5-ticket.png',   alt: 'BT-ADV — Step 5: Cinema-style meeting reservation ticket' },
      { src: '/images/bt-advertising/admin-dashboard-home.png',   alt: 'BT-ADV — Secure Admin panel analytics home dashboard' },
      { src: '/images/bt-advertising/admin-bookings.png',         alt: 'BT-ADV — Admin bookings manager table with status checks' },
      { src: '/images/bt-advertising/admin-works.png',            alt: 'BT-ADV — Admin works manager for video content CRUD' },
    ],
    caseStudy: {
      problem:
        'BT-ADV is a premium video production and advertising studio. Before this platform, the agency had no structured digital presence — inquiries came through WhatsApp with no way to filter lead quality, capture project context, or confirm meetings with a paper trail. Brand managers commissioning high-budget advertising (EGP 300K–1M+) had no self-service intake flow. There was no central admin view of booking status and no bilingual support for the agency\'s Arabic-speaking market.',
      solution:
        'A full-stack agency website with a production-quality multi-step booking wizard, cinema-themed confirmation ticket, complete admin CMS, bilingual RTL/LTR, and a hardened security layer. The 4-step wizard pre-qualifies every lead before submission: contact info → company profile → project goals → meeting preferences and budget. Lead qualification is baked into the UX — each step acts as a filter. The dark Navy + Yellow cinema aesthetic communicates premium positioning.',
      architecture: [
        'Public-facing pages: Hero, Services, Works, Clients, Reviews, Booking wizard, Portfolio gallery, Pricing, About, Careers, Contact.',
        'Admin panel (/admin/*): Auth-gated CRUD across 12 content types — bookings, works, clients, pricing, team, careers, BTS media, reviews, messages, site settings.',
        'Edge Middleware: CSRF token injection (double-submit cookie pattern), Supabase session refresh, role check via JWT app_metadata (zero DB round-trip).',
        'API Routes: /api/booking (POST: validate → rate-limit → CSRF → insert → dual email), /api/booking/slots (GET: slot availability), /api/csrf, /api/upload (Cloudinary), /api/contact.',
        'Database: Supabase PostgreSQL with RLS on every table, UNIQUE constraint on (date, time_slot), custom JWT access token hook for role embedding.',
        'External: Upstash Redis (rate limiting), Resend (email), Cloudinary (CDN), Sentry (observability), Vercel (hosting + analytics).',
      ],
      challenges: [
        {
          challenge: 'Supabase cookie replacement silently discarding the CSRF token on session refresh',
          solution:
            'The CSRF token is generated before Supabase runs and stored in a local variable (`pendingCsrfToken`). After `supabase.auth.getUser()` resolves (potentially replacing the `response` object), the token is re-applied to whatever the final response is — requiring a deep understanding of Next.js middleware execution order and Supabase\'s internal cookie mutation pattern.',
        },
        {
          challenge: 'Slot double-booking race condition under concurrent load (TOCTOU vulnerability)',
          solution:
            'The pre-check provides a fast UX error. The real guarantee comes from a PostgreSQL UNIQUE constraint on `(date, time_slot)`. The API catches error code `23505` (unique violation) and returns a typed `SLOT_TAKEN` response — turning a raw DB error into a user-friendly message without exposing internals.',
        },
        {
          challenge: 'Admin role check adding DB latency on every Edge middleware request',
          solution:
            'Implemented a custom Supabase Postgres "Access Token Hook" that embeds the user\'s role into the JWT\'s `app_metadata` at issuance time. The Edge middleware reads the role directly from the decoded JWT — zero DB round-trip. A DB fallback is retained for old tokens, making the migration backwards-compatible.',
        },
      ],
      lessonsLearned: [
        'Middleware execution order matters as much as the code itself. In Next.js Edge middleware, `response` is not a stable object — any call to `NextResponse.next()` creates a new one. You must design around this, not fight it.',
        'Database constraints are a safety net, not an afterthought. Catching `23505` at the API boundary and returning a meaningful typed error is the correct pattern — not a hack.',
        'Bilingual RTL support is an architectural decision, not a feature flag. Building `dir` awareness into the layout from day one (automatic font swap, CSS logical properties, RTL-safe Framer Motion) saved significant rework.',
      ],
      codeSnippet: {
        title: 'Constant-Time CSRF Token Verification to Prevent Timing Attacks',
        language: 'typescript',
        code: `// src/lib/csrf.ts
/**
 * Primitive constant-time string comparison.
 * A naive \`tokenA === tokenB\` leaks timing information —
 * comparison short-circuits at the first mismatch, letting an
 * attacker measure response latency to brute-force the token.
 *
 * This always iterates every character regardless of where the
 * mismatch occurs, making response time independent of token value.
 */
function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i++) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}

export function verifyCsrfToken(req: Request): boolean {
  const cookieHeader = req.headers.get('cookie') ?? '';
  const tokenFromCookie = cookieHeader
    .split(';')
    .map((c) => c.trim())
    .find((c) => c.startsWith(\`\${CSRF_COOKIE}=\`))
    ?.split('=')[1];

  const tokenFromHeader = req.headers.get(CSRF_HEADER);
  if (!tokenFromCookie || !tokenFromHeader) return false;
  return timingSafeEqual(tokenFromCookie, tokenFromHeader);
}`,
      },
    },
  },

  // ─────────────────────────────────────────────────────────
  // 3. ARTIFACTIFY — Graduation Project
  // ─────────────────────────────────────────────────────────
  {
    id: 'artifactify',
    slug: 'artifactify',
    title: 'ARTifactify',
    hook: 'Identifying Egyptian artifacts through your camera — AI vision, AR, audio guides, and a Gemini chatbot in one platform.',
    description:
      'An AI-powered museum companion that uses a custom YOLOv8 model to identify 22 Egyptian artifacts from a photo, then delivers historical context via a Gemini chatbot, ElevenLabs audio guides, and AR 3D models. Three client surfaces: Flutter mobile, React web, ASP.NET Core API.',
    category: 'Full Stack · Mobile · AI · Backend',
    year: '2025–2026',
    role: 'Full-Stack Developer & AI Integration Lead',
    duration: '~8 months',
    team: 'Team of ~5 (graduation project)',
    status: 'live',
    image: '/images/artifactify/hero.png',
    heroImage: '/images/artifactify/hero.png',
    isFlagship: false,
    bentoSize: 'tall',
    techStack: [
      'ASP.NET Core 10 Web API',
      'C# / .NET 10',
      'CQRS / MediatR',
      'YOLOv8 (ONNX Runtime)',
      'Gemini AI (chatbot)',
      'ElevenLabs TTS',
      'Flutter / Dart',
      'React 19 (admin)',
      'Entity Framework Core',
      'SQL Server',
      'Stripe',
      'Cloudinary',
      'Polly (resilience)',
    ],
    links: {
      demo: 'https://artifactify.monsterasp.net',
    },
    features: [
      'YOLOv8 artifact detection via camera — custom ONNX model identifies 22 Egyptian artifacts; singleton session pool prevents cold-start latency',
      'Multi-modal AI chatbot (Gemini + HuggingFace STT + ElevenLabs TTS) — type or speak, answered in the user\'s preferred language',
      'JWT auth with rotating refresh tokens and in-memory JTI blacklist — prevents token reuse after logout or account deletion',
      'Account lockout + auth rate limiting — 5 failed attempts → 15-min freeze; 10 auth req/5 min IP-level throttle',
      'Google + Facebook OAuth social login with server-side ID token exchange and auto-provisioning',
      'Stripe payment integration with webhook signature verification for the museum store',
      'AR / 3D Model viewer in React (model-viewer) and Flutter (model_viewer_plus) — lazy-loaded .glb from Cloudinary',
      'AI quota enforcement per user via IMemoryCache — prevents Gemini API budget abuse without DB round-trips',
      'Magic-bytes image validation — checks JPEG/PNG/WebP/GIF file headers before ML inference to prevent MIME-spoofing',
      'Fire-and-forget scan history via IServiceScopeFactory — response never blocked by background Cloudinary upload + DB write',
    ],
    metrics: [
      { value: '22',     label: 'Artifact Classes (YOLOv8)' },
      { value: '640×640', label: 'ONNX Input Resolution' },
      { value: '18',     label: 'REST API Controllers' },
      { value: '4',      label: 'Auth Methods Supported' },
    ],
    gallery: [
      { src: '/images/artifactify/hero.png',   alt: 'ARTifactify — Artifact scanning interface' },
      { src: '/images/artifactify/detail.png', alt: 'ARTifactify — Artifact details with AI chatbot and AR viewer' },
    ],
    caseStudy: {
      problem:
        'Museums struggle to make their collections engaging and accessible. Traditional museum apps are static brochures that require you to already know what you\'re looking at. Audio guides cost extra, are device-bound, and are only available in one or two languages. Egyptian cultural heritage is extraordinarily rich but chronically under-digitized in interactive form. Visitors had no way to identify an artifact by pointing a phone at it, no interactive way to ask questions and get instant contextual answers, and no access to 3D models without specialized desktop software.',
      solution:
        'ARTifactify is a full-stack museum companion with three client surfaces — Flutter mobile, React web admin, and ASP.NET Core REST API. Users point their phone at any of 22 recognized Egyptian artifacts; the server\'s ONNX session pool identifies it in real time and returns metadata, location, and era. A Gemini-powered chatbot answers questions in the user\'s preferred language via text or voice. ElevenLabs synthesizes audio narration on demand. The entire AI inference pipeline runs server-side, so mobile clients need zero ML dependencies and the model can be updated without an app store release.',
      architecture: [
        'Domain Layer: Plain C# entities with soft-delete interface (`ISoftDelete`) and optimistic concurrency (`[Timestamp]` RowVersion).',
        'Application Layer: CQRS via MediatR — Commands, Queries, Handlers, DTOs, FluentValidation validators, AutoMapper profiles.',
        'Infrastructure Layer: EF Core DbContext with Repository pattern (UoW), and all external service integrations — YOLOv8 ONNX, Gemini, Stripe, Cloudinary, ElevenLabs, Gmail SMTP, HuggingFace STT.',
        'API Layer: 18 REST controllers, JWT middleware with in-memory JTI blacklist, global exception handler, rate-limiting policies, security headers, Brotli/Gzip response compression, health checks.',
        'AI Pipeline: YoloModelLoader singleton with a bounded Channel<InferenceSession> pool (size 2). ModelLoadingBackgroundService pre-warms the pool on startup asynchronously — zero cold-start on first user request.',
        'Clients: Flutter app (iOS/Android/Windows), React web admin (Vercel), Swagger API UI — all consuming the same REST API.',
      ],
      challenges: [
        {
          challenge: 'YOLOv8 ONNX model (~30 MB) causing 10–15 second cold-start on the first scan request',
          solution:
            'Implemented a `YoloModelLoader` singleton with a bounded `Channel<InferenceSession>` acting as a session pool (size 2). A hosted `ModelLoadingBackgroundService` pre-warms the pool on server startup asynchronously, so by the time the first real request arrives the model is already loaded. The singleton lives for the process lifetime, eliminating repeated file reads and ONNX session creation overhead.',
        },
        {
          challenge: 'ObjectDisposedException on scoped DbContext in background scan-history task',
          solution:
            'Used `IServiceScopeFactory.CreateAsyncScope()` inside `Task.Run(...)` to create a completely independent DI scope owned by the background task. All database and Cloudinary operations run in this fresh scope, ensuring the DbContext is alive for exactly as long as the background work needs it — then properly disposed via `await using`.',
        },
        {
          challenge: 'HuggingFace STT service cold-start of up to 120 seconds causing Polly to fire too early',
          solution:
            'Exposed `HuggingFaceChatbot:TimeoutSeconds` in `appsettings.json` (default 180s) and dynamically computed all Polly resilience parameters from it — `TotalRequestTimeout = timeout + 20s`, `AttemptTimeout = timeout`, `CircuitBreaker.SamplingDuration = timeout × 2 + 60s` (satisfying the framework invariant `SamplingDuration ≥ 2 × AttemptTimeout`). Retry count reduced to 1 because audio streams are not idempotent.',
        },
      ],
      lessonsLearned: [
        'Singleton vs. Scoped lifetime mismatches are a real production hazard. The `IServiceScopeFactory` pattern should be a first-class tool whenever background work touches scoped services.',
        'Rate limiting design requires knowing your abuse vectors upfront. Splitting into `fixed`, `ai_endpoint`, and `auth_endpoint` policies gave each surface its own tunable throttle without blanket over-restriction.',
        'AI model serving belongs on the server for a mobile app. Keeping inference server-side kept the Flutter APK thin, allowed model updates without app store releases, and eliminated platform-specific ML package dependencies.',
      ],
      codeSnippet: {
        title: 'Fire-and-Forget Scan Logging with Safe DI Scope Management',
        language: 'csharp',
        code: `// After returning the detection result to the client, persist the scan
// record and upload the image to Cloudinary in the background —
// without blocking the HTTP response or hitting ObjectDisposedException.

_ = Task.Run(async () =>
    await UploadAndLogDetectionAsync(
        capturedBytes, capturedMime, capturedArtifactId,
        capturedUserId, capturedConfidence));

// ...

private async Task UploadAndLogDetectionAsync(
    byte[] imageBytes, string detectedMime,
    int artifactId, string userId, double confidence)
{
    // Create a completely independent DI scope — the controller's scoped
    // DbContext is disposed as soon as the HTTP response is sent.
    await using var scope = _scopeFactory.CreateAsyncScope();
    var db        = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
    var cloudinary = scope.ServiceProvider.GetRequiredService<ICloudinaryService>();

    try
    {
        var publicId = $"scan_{DateTime.UtcNow:yyyyMMdd_HHmmss}_{Guid.NewGuid():N[..8]}";
        using var stream = new MemoryStream(imageBytes);
        var imageUrl = await cloudinary.UploadImageAsync(stream, publicId, "scans");

        db.DetectionHistories.Add(new DetectionHistory
        {
            AppUserId       = userId,
            ArtifactId      = artifactId,
            ScanDate        = DateTime.UtcNow,
            ScannedImageUrl = imageUrl,
            Confidence      = confidence
        });
        await db.SaveChangesAsync();
    }
    catch (Exception ex)
    {
        // Never let background failures surface to the user
        _logger.LogError(ex,
            "Failed to persist DetectionHistory for UserId: {UserId}, ArtifactId: {ArtifactId}",
            userId, artifactId);
    }
}`,
      },
    },
  },

  // ─────────────────────────────────────────────────────────
  // 4. E-COMMERCE PLATFORM
  // ─────────────────────────────────────────────────────────
  {
    id: 'e-commerce-platform',
    slug: 'e-commerce-platform',
    title: 'E-Commerce Platform',
    hook: 'Clean Architecture at scale — extensible, production-ready, AI-recommended.',
    description:
      'A full-featured e-commerce system with Clean Architecture, Redis caching, payment integration, and a collaborative-filtering recommendation engine. 26 screens, role-based auth, admin dashboard.',
    category: 'Full Stack · Backend · Architecture',
    year: '2024',
    role: 'Full-Stack Developer',
    duration: '3 months',
    team: 'Solo Project',
    status: 'completed',
    image: '/images/ecommerce/hero.jpg',
    heroImage: '/images/ecommerce/hero.jpg',
    bentoSize: 'wide',
    techStack: [
      'ASP.NET Core MVC',
      'C#',
      'Entity Framework Core',
      'SQL Server',
      'Redis',
      'Clean Architecture',
      'Bootstrap 5',
      'JavaScript',
    ],
    links: {
      github: 'https://github.com/mazen67M/E-Commerce-App-With-Recommendation',
    },
    features: [
      'Complete shopping cart with real-time AJAX updates and instant badge counter',
      'AI-powered product recommendation via collaborative filtering — no third-party ML service',
      'Secure payment integration with multiple providers, swappable via one infrastructure class',
      'Role-based authorization — Customer and Admin with separate interfaces',
      'Product management with categories, inventory tracking, and low-stock alerts',
      'Order tracking and management with full status history',
      'Advanced product search and filtering across categories and brands',
      'Product reviews and ratings with verified-purchase enforcement',
      'Admin analytics dashboard with sales reports and Chart.js visualizations',
      'Two-factor authentication via email OTP',
    ],
    metrics: [
      { value: '26',    label: 'Screens Built' },
      { value: 'Redis', label: 'Caching Layer' },
      { value: '4',     label: 'Clean Architecture Layers' },
    ],
    gallery: [
      { src: '/images/ecommerce/hero.jpg',         alt: 'E-Commerce — Homepage with featured products' },
      { src: '/images/ecommerce/shop.jpg',         alt: 'E-Commerce — Shop catalog with filters' },
      { src: '/images/ecommerce/dashboard.jpg',    alt: 'Admin Dashboard — Order and inventory management' },
      { src: '/images/ecommerce/reports.jpg',      alt: 'Sales Reports — Analytics and revenue tracking' },
      { src: '/images/ecommerce/cart.jpg',         alt: 'Shopping Cart — Checkout flow' },
      { src: '/images/ecommerce/products.jpg',     alt: 'Product Management — Admin panel' },
      { src: '/images/ecommerce/architecture.png', alt: 'System Architecture — Clean Architecture Layers' },
    ],
    caseStudy: {
      problem:
        'Standard e-commerce implementations result in tightly coupled controllers that become unmaintainable as features grow. Adding a new payment provider typically requires changes across 15+ files. This project demonstrated that Clean Architecture keeps e-commerce codebases extensible — adding a payment provider requires changing only one infrastructure class.',
      solution:
        'A four-layer Clean Architecture where all business rules live in framework-agnostic C# classes. Redis caches product listings at the infrastructure boundary, keeping the Application layer unaware of any caching strategy. A collaborative-filtering recommendation engine analyses purchase history to surface personalised suggestions without a third-party ML service.',
      architecture: [
        'Presentation Layer: ASP.NET Core MVC controllers and Razor Views.',
        'Application Layer: Service interfaces, DTOs, and all business logic.',
        'Domain Layer: Entities, business rules, and repository interfaces.',
        'Infrastructure Layer: EF Core, SQL Server, Redis caching, payment providers — all swappable behind interfaces.',
      ],
      challenges: [
        {
          challenge: 'Real-time cart updates without page refresh',
          solution:
            'Used AJAX with vanilla JavaScript to handle cart operations asynchronously, providing instant UI feedback and updating the cart counter badge without a full page reload.',
        },
        {
          challenge: 'Building a recommendation engine without ML dependencies',
          solution:
            'Implemented collaborative filtering in pure C# that analyses user purchase patterns and product category overlap to generate personalised recommendations — no ML.NET, no external service.',
        },
        {
          challenge: 'Inventory race conditions with concurrent orders',
          solution:
            'Used EF Core optimistic concurrency (RowVersion) wrapped in a database transaction — if two users buy the last item simultaneously, only one succeeds and the other receives a clear, actionable error message.',
        },
      ],
      lessonsLearned: [
        'Clean Architecture adds upfront complexity but pays dividends — adding Redis caching required zero changes to the Application layer.',
        'Collaborative filtering suffers from a cold-start problem for new users. A hybrid with content-based filtering as fallback is the correct production solution.',
        'Optimistic concurrency is non-negotiable for inventory systems — discovered a race condition during load testing that could have silently oversold stock.',
      ],
      codeSnippet: {
        title: 'Preventing Inventory Race Conditions — Optimistic Concurrency',
        language: 'csharp',
        code: `// When two users try to buy the last item simultaneously,
// only one transaction succeeds — the other receives a clear error.
public async Task<OrderResult> PlaceOrderAsync(OrderDto dto)
{
    await using var tx = await _context.Database.BeginTransactionAsync();
    try
    {
        var product = await _context.Products
            .FirstOrDefaultAsync(p => p.Id == dto.ProductId);

        if (product.Stock < dto.Quantity)
            return OrderResult.Failed("Insufficient stock");

        product.Stock -= dto.Quantity;

        // EF Core detects concurrent modifications via RowVersion
        // and throws DbUpdateConcurrencyException automatically
        await _context.SaveChangesAsync();
        await tx.CommitAsync();
        return OrderResult.Success();
    }
    catch (DbUpdateConcurrencyException)
    {
        await tx.RollbackAsync();
        return OrderResult.Failed("Item just purchased by another user.");
    }
}`,
      },
    },
  },

  // ─────────────────────────────────────────────────────────
  // 5. BLOG PLATFORM
  // ─────────────────────────────────────────────────────────
  {
    id: 'blog-platform',
    slug: 'blog-platform',
    title: 'Blog Platform (Blogify)',
    hook: 'Next-generation blogging — admin approval workflows, three-tier roles, and a premium glassmorphism dark UI.',
    description:
      'A multi-user blogging system built with ASP.NET Core MVC (.NET 9) featuring Identity-based authentication, rich text editing, category management, account approval workflows, and a comprehensive commenting system.',
    category: 'Full Stack · CMS · Web App',
    year: '2024',
    role: 'Full-Stack Developer',
    duration: '2 months',
    team: 'Solo Project',
    status: 'completed',
    image: '/images/blog/home.jpeg',
    heroImage: '/images/blog/home.jpeg',
    bentoSize: 'wide',
    techStack: [
      'ASP.NET Core MVC',
      'C# / .NET 9',
      'Entity Framework Core',
      'SQL Server',
      'ASP.NET Identity',
      'Bootstrap 5',
      'jQuery',
      'AJAX',
      'JavaScript',
    ],
    links: {
      github: 'https://github.com/mazen67M/BlogProjectDotNET-9',
    },
    features: [
      'Account approval workflow — new users must be vetted by an Admin before accessing the system',
      'Three-tier RBAC — Admin (dashboard/user management), Author (content creation), Reader (commenting)',
      'Rich text editor for creating fully formatted blog posts with image uploads',
      'Category and tag management for organizing content at scale',
      'Nested commenting system with per-post moderation controls',
      'Author profiles and bio pages with post history',
      'Full-text search and filtering across posts and categories',
      'Glassmorphism-inspired dark theme with gradient accents and smooth micro-animations',
      'CSRF protection, SQL injection prevention, XSS sanitization, and file upload validation',
      'Admin dashboard with real-time platform statistics and pending-approval queue',
    ],
    gallery: [
      { src: '/images/blog/home.jpeg',                 alt: 'Blogify — Blog home page' },
      { src: '/images/blog/Login.jpeg',                alt: 'Blogify — Login page' },
      { src: '/images/blog/Register.jpeg',             alt: 'Blogify — Registration page' },
      { src: '/images/blog/Approve.jpeg',              alt: 'Blogify — Account approval pending screen' },
      { src: '/images/blog/AuthorLogin.jpeg',          alt: 'Blogify — Author login page' },
      { src: '/images/blog/AuthorPostView.jpeg',       alt: 'Blogify — Author post management view' },
      { src: '/images/blog/postDetails.jpeg',          alt: 'Blogify — Post details page' },
      { src: '/images/blog/AdminView.jpeg',            alt: 'Blogify — Admin view page' },
      { src: '/images/blog/AdminDashboard.jpeg',       alt: 'Blogify — Admin dashboard with statistics' },
      { src: '/images/blog/ManageUsers.jpeg',          alt: 'Blogify — Manage users page' },
      { src: '/images/blog/CategoriesManagement.jpeg', alt: 'Blogify — Categories management page' },
      { src: '/images/blog/UserOptions.jpeg',          alt: 'Blogify — User options page' },
      { src: '/images/blog/UserProfile.jpeg',          alt: 'Blogify — User profile page' },
      { src: '/images/blog/AddNewComment.jpeg',        alt: 'Blogify — Add comment page' },
      { src: '/images/blog/Comments.jpeg',             alt: 'Blogify — Comments section' },
    ],
    caseStudy: {
      problem:
        'Most simple blogging demos ship basic CRUD with no real access control. Blogify was built to demonstrate that a full CMS for multiple authors needs a real approval gate — without vetting, spam and low-quality accounts pollute the platform immediately. The challenge was building a three-tier permission model where Admins control who can publish, Authors control their own content, and Readers interact only through comments.',
      solution:
        'A role-based multi-user CMS with a mandatory account approval workflow. New registrations land in a pending queue visible only to Admins, who can approve or reject with one click. Once approved, Authors get access to a rich text editor, category management, and image uploads. Readers can comment on any post. The entire UI runs on a custom premium dark glassmorphism theme built with pure CSS variables — theme switching is instant with no layout shift.',
      architecture: [
        'Presentation Layer: ASP.NET Core MVC controllers and Razor Views with Bootstrap 5 and jQuery for AJAX interactions.',
        'Application Layer: Service interfaces, DTOs, and business logic for post management, comments, and user workflows.',
        'Domain Layer: Entities and repository interfaces — Post, Category, Comment, ApplicationUser with approval state.',
        'Infrastructure Layer: EF Core + SQL Server, ASP.NET Identity for auth and role management.',
        'Security: CSRF protection via AntiForgery tokens, XSS sanitization on rich-text content, file-type validation on image uploads.',
      ],
      challenges: [
        {
          challenge: 'Implementing SEO-friendly URLs with auto-generated slugs and duplicate prevention',
          solution:
            'Created a slug generation service that converts post titles to URL-friendly lowercase strings, strips special characters, and appends a short hash suffix when a collision is detected — keeping URLs clean without breaking existing links.',
        },
        {
          challenge: 'Securing rich-text editor output against XSS while preserving legitimate HTML',
          solution:
            'Implemented a server-side HTML sanitizer that allows a safe allowlist of tags and attributes (headings, bold, italic, links, images) while stripping all script tags, event handlers, and unsafe attributes before persisting to the database.',
        },
      ],
      lessonsLearned: [
        'Role-based access controls (RBAC) require crystal-clear authorization boundaries — a missing [Authorize(Roles="Admin")] attribute on a single controller action is enough to create a privilege escalation vulnerability.',
        'Client-side debouncing is essential when implementing responsive live search — without it, every keystroke fires a database query and spikes load under concurrent users.',
        'Designing a custom theme with pure CSS variables makes runtime theme-switching trivially fast compared to swapping framework class sets.',
      ],
      codeSnippet: {
        title: 'Post Service — Create Post with Auto Slug Generation',
        language: 'csharp',
        code: `public class PostService : IPostService
{
    private readonly IPostRepository _postRepository;
    private readonly IMapper _mapper;

    public PostService(IPostRepository postRepository, IMapper mapper)
    {
        _postRepository = postRepository;
        _mapper = mapper;
    }

    public async Task<PostDto> CreatePostAsync(CreatePostDto dto, string authorId)
    {
        var post = new Post
        {
            Title      = dto.Title,
            Content    = dto.Content,
            Slug       = GenerateSlug(dto.Title),
            AuthorId   = authorId,
            CategoryId = dto.CategoryId,
            CreatedAt  = DateTime.UtcNow,
            IsPublished = dto.IsPublished
        };

        await _postRepository.AddAsync(post);
        return _mapper.Map<PostDto>(post);
    }

    private string GenerateSlug(string title)
    {
        return title.ToLower()
            .Replace(" ", "-")
            .Replace("--", "-");
    }
}`,
      },
    },
  },

  // ─────────────────────────────────────────────────────────
  // 6. RESTAURANT MANAGEMENT SYSTEM
  // ─────────────────────────────────────────────────────────
  {
    id: 'restaurant-management',
    slug: 'restaurant-management',
    title: 'Restaurant Management System',
    hook: 'Complete restaurant operations — from order to kitchen to cashier close — in one system.',
    description:
      'A comprehensive Windows desktop application managing dine-in, takeaway, and delivery orders with real-time kitchen ticket routing, inventory control, and shift-based financial reconciliation. 28 screens.',
    category: 'Desktop · POS · Operations',
    year: '2024',
    role: 'Full-Stack Developer',
    duration: '3 months',
    team: 'Solo Project',
    status: 'completed',
    image: '/images/restaurant/hero.jpg',
    heroImage: '/images/restaurant/hero.jpg',
    bentoSize: 'third',
    isPrivate: true,
    techStack: [
      'C#',
      'WinForms',
      '.NET Framework',
      'SQL Server',
      'Entity Framework',
      'LINQ',
    ],
    links: {},
    features: [
      'Complete order management — dine-in, takeaway, and delivery flows',
      'Delivery zone management with driver dispatching and live order tracking',
      'Shift-based cashier drawer reconciliation with automatic variance flagging',
      'Asynchronous kitchen ticket printing (ESC/POS) via background thread queue',
      'Live sales dashboard with daily revenue graphs (Chart controls)',
      'Inventory stock-level tracking with low-stock alerts',
      'Role-based permissions — Cashier, Kitchen, Admin',
      'Modern dark-mode UI optimised for busy, high-throughput environments',
      'Coupon and discount management',
      'Database backup and restore utility',
    ],
    metrics: [
      { value: '28',     label: 'Screens' },
      { value: 'ESC/POS', label: 'Async Kitchen Printing' },
      { value: 'Shift',   label: 'Cash Reconciliation' },
    ],
    gallery: [
      { src: '/images/restaurant/hero.jpg',  alt: 'Restaurant — Login screen' },
      { src: '/images/restaurant/2.jpg',     alt: 'Restaurant — Main operations dashboard' },
      { src: '/images/restaurant/3.jpg',     alt: 'Restaurant — Dine-in table selector' },
      { src: '/images/restaurant/5.jpg',     alt: 'Restaurant — Active order detail view' },
      { src: '/images/restaurant/6.jpg',     alt: 'Restaurant — Kitchen order processing panel' },
      { src: '/images/restaurant/7.jpg',     alt: 'Restaurant — Delivery order tracking' },
      { src: '/images/restaurant/8.jpg',     alt: 'Restaurant — Driver assignment screen' },
      { src: '/images/restaurant/12.jpg',    alt: 'Restaurant — User account and role settings' },
      { src: '/images/restaurant/13.jpg',    alt: 'Restaurant — Shift ledger and balance entry' },
      { src: '/images/restaurant/14.jpg',    alt: 'Restaurant — Daily financial summary report' },
    ],
    caseStudy: {
      problem:
        'A restaurant client needed to replace paper-based order slips and spreadsheet shift reports with a single desktop application their staff could operate without training. Critical requirements: orders must reach the kitchen printer instantly without freezing the cashier screen, and end-of-shift cash reconciliation must catch discrepancies automatically.',
      solution:
        'A full-featured WinForms POS with three dedicated role views — cashier, kitchen display, and manager dashboard. Kitchen ticket printing is offloaded to a background thread queue using ESC/POS socket commands, so the UI thread is never blocked. Shift closure enforces drawer entry against system totals and flags any variance above a configurable threshold.',
      architecture: [
        'POS Terminal (Desktop): C# WinForms with SQL Server, barcode scanner integration, and keyboard-driven checkout for cashier speed.',
        'Role Views: Cashier (order entry + billing), Kitchen Display (ticket queue + status), Manager Dashboard (sales charts + inventory + reports).',
        'Background Print Broker: Dedicated Task.Run() worker dispatches ESC/POS commands over TCP to kitchen printers without touching the UI thread.',
        'Shift Management: Role-scoped shift log enforces drawer reconciliation at close; variances are highlighted automatically.',
      ],
      challenges: [
        {
          challenge: 'Kitchen receipt printing freezing the cashier UI during heavy throughput',
          solution:
            'Designed a print broker using background Task.Run() with socket-level timeouts, so cashiers can continue the next transaction immediately while the receipt is printed asynchronously in the background.',
        },
        {
          challenge: 'Secure shift-based cash drawer reconciliation without manual arithmetic errors',
          solution:
            'Implemented role-based shift logs where cashiers enter their drawer balance at shift close; the system automatically compares against the calculated expected total and highlights any variance above the configured threshold.',
        },
      ],
      lessonsLearned: [
        'Offloading ESC/POS print actions to background thread queues is essential — blocking the UI thread even for 200 ms noticeably disrupts cashier flow in a high-throughput environment.',
        'Cashier ledger closures enforce financial transparency and simplify audit workflows — a feature most small POS systems skip but that pays for itself immediately in real operations.',
      ],
      codeSnippet: {
        title: 'Asynchronous ESC/POS Kitchen Ticket Printing',
        language: 'csharp',
        code: `// Prevents the cashier UI from freezing during printer I/O
public void QueueKitchenReceipt(KitchenReceipt receipt)
{
    Task.Run(() =>
    {
        try
        {
            using var printer = new EscPosPrinter(_settings.KitchenPrinterIp);
            printer.Initialize();
            printer.PrintText($"--- ORDER #{receipt.OrderId} ---");
            foreach (var item in receipt.Items)
                printer.PrintText($"{item.Quantity}x {item.Name} {item.Notes}");
            printer.CutPaper();
        }
        catch (Exception ex)
        {
            _logger.LogError("Kitchen printer failed: " + ex.Message);
            OnPrinterError?.Invoke(this,
                new PrinterErrorEventArgs(receipt.OrderId, ex.Message));
        }
    });
}`,
      },
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const flagshipProject = projects.find((p) => p.isFlagship)!;
